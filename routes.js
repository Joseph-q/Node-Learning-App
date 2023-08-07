function routes(handle,pathname,response,postData){

    if (typeof handle[pathname] === 'function') {
    handle[pathname](response,postData);
    } else {
    console.log("No existe la URL " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
    }
}

exports.routes=routes