const fs = require("fs")
const formidable = require("formidable")

function inicio(response, postData) {
    console.log("Request handler 'start' was called.");

    var content = `
    <h2>With Node.js <code>"http"</code> module</h2>
    <form action="/subir"  enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `;
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(content);
    response.end();

}


function subir(response, request) {
    const form = new formidable.IncomingForm();

    form.parse(request, function (error, fields, files) {
        console.log("Parseado hecho")
        let archivo= files.multipleFiles[0].filepath
        fs.rename(archivo, "./tmp/test.png", function (error) {
            if (error) {
                fs.unlink("/tmp/test.png");
                fs.rename(archivo, "/tmp/test.png");
            }
        });
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write("received image:<br/>");
        response.write("<img src='/mostrar' />");
        response.end();
    });
}


function mostrar(response) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {
        "Content-Type": "image/png"
    });
    fs.createReadStream("./tmp/test.png").pipe(response);
}

exports.inicio = inicio;

exports.subir = subir;

exports.mostrar = mostrar;