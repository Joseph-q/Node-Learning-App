var querystring = require("querystring")
function inicio(response, postData) {
    console.log("Request handler 'start' was called.");

    var content='<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(content);
    response.end();

}


function subir(response, postData) {
    console.log("Subir se a llamado");
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("Has enviado: "+ querystring.parse(postData).text);
    response.end();
}

exports.inicio = inicio

exports.subir = subir