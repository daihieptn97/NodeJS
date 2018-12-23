var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function (req, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    let parse = url.parse(req.url, true);
    let path = parse.path;
    console.log(path);
    // console.log(parse);

    if (path == '/') {
        response.writeHead('200', { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + "/index.php").pipe(response);

        // fs.readFile('./index.php', function (error, data) {
        //     response.writeHead('200', { 'Content-Type': 'text/html' });
        //     response.end(data);
        // })
    } else { //ngược lại nếu truyền tham số lên url thì sẽ load trang tương ứng
        response.writeHead('200', { 'Content-Type': 'text/html' });
        var load = path + '.html';
        fs.createReadStream(__dirname + load).pipe(response);

    }

    // let data = fs.readFileSync(__dirname + "/index.html", "utf-8");
    // response.end(data);
}).listen(8080);
