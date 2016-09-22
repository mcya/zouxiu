var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var contenttype = require('./contentType');
var os = require('os');
var ip = require('./js/ip');

var server = http.createServer(function(req, res) {
    var params = url.parse(req.url, true);
    var pathname = params.pathname;

    // 响应ajax请求
    if(/^\/ajax\/(\w+)$/i.test(pathname)){
        // 返回前端的文本
        var resText = '';

        // 根据不同的路径返回相应的数据
        switch(RegExp.$1){
            case 'ajaxtest':
                resText = 'hello, 异步请求数据获取成功！';
                break;
            case 'getCity':
                resText = '["北京","上海","广州","深圳","杭州","大连"]';
                break;
            case 'getJSONP':
                var data = {
                    name: '王大锤',
                    age: 30,
                    sex: '男',
                    married:false
                }
                if (params.query && params.query.callback) {
                    resText = params.query.callback + '(' + JSON.stringify(data) + ')';
                } else {
                    resText = JSON.stringify(data);
                }
                break;
            case 'checkname':
                var names = ['张三','李四','王尼玛','奥巴马'];
                if (params.query && params.query.regname) {
                    var name = params.query.regname;
                    resText = names.indexOf(name) != -1 ? 'false' : 'true';
                }
                break;
            case 'weibo':
                var data = require('./data/weibo.json');
                resText = JSON.stringify(data);
                break;
            case 'football':
                var data = require('./data/football.json');
                var output = {total:data.length};
                if (params.query && params.query.pageNo) {
                    var page = params.query.pageNo || 1;
                    var pageCount = params.query.pageCount || 10;
                    output.data = data.slice((page-1)*pageCount,page*pageCount);
                    output.pageNo = +page;
                    output.pageCount = pageCount;
                    
                    resText = JSON.stringify(output);
                }else{
                    output.data = data;
                    resText = JSON.stringify(output);
                }
                break;
            case 'chat':
                var data = require('./data/chat.json') || [];
                var output = {total:data.length};
                var query = params.query;
                if(query){
                    // 请求数据:query
                    // 提交数据：send
                    if(query.type == 'query'){
                        // 请求数量
                        output.qty = query.qty || 50;
                        output.data = data.slice(0,output.qty);
                        resText = JSON.stringify(output);
                    }else if(query.type == 'send'){
                        var now = new Date();
                        var date = now.toLocaleDateString();
                        var hour = now.getHours();
                        var min = now.getMinutes();
                        var sec = now.getSeconds();
                        hour = hour < 10 ? '0'+hour:hour;
                        min = min < 10 ? '0'+min:min;
                        sec = sec < 10 ? '0'+sec:sec;


                        var postData = {
                            name:query.sender,
                            gender:query.gender,
                            content:query.msg,
                            ipfrom:ip.client(req),
                            createtime:date + ' ' + hour + ':' + min + ':' + sec
                        }
                        data.unshift(postData);

                        // 写入文件
                        fs.writeFile(__dirname + '/data/chat.json',JSON.stringify(data));
                    }
                }

                if(req.method.toLowerCase() == 'post'){

                    var postStr = '';
                    req.addListener('data',function(chunk){
                        postStr += chunk;
                        console.log('data:',chunk);
                    });
                    req.addListener('end',function(){
                        console.log('end:',postStr);
                    });
                }
                break;
            case 'getIP':
                resText = ip.client(req);
                break;

        }

        res.writeHead(200,{'content-type':'text/plain;charset=utf8'});
        res.end(resText);
    }else{
        var pathname = params.pathname
        if (pathname.slice(-1) === "/") {
            pathname += 'index.html'; //默认取当前默认下的index.html
        }
        var realPath = path.join(process.cwd(), pathname);
        var ext = path.extname(realPath);
        ext = ext ? ext.slice(1) : 'unknown';
        fs.exists(realPath, function(exists) {
            if (!exists) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('This request URL' + pathname + ' was not found on this server.');
                res.end();
            } else {
                fs.readFile(realPath, 'binary', function(err, file) {
                    if (err) {
                        res.writeHead(500, {
                            'Content-Type': 'text/plain'
                        });
                        res.end(err);
                    } else {
                        var contentType = contenttype.types[ext] || 'text/plain';
                        res.writeHead(200, {
                            'Content-Type': contentType
                        });
                        res.write(file, 'binary');
                        res.end();
                    }
                });
            }
        });
    }
});
server.listen(3000,function(){
    console.log('server start at http://10.3.131.65:3000');
});
