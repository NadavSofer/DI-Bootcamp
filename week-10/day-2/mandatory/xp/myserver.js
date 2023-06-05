let http = require("http");

const host = 'localhost';
let port = 3000;

const user = {
    firstName: 'John',
    lastName: 'Doe'
}

const requestlistener = function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`<html>
                <body>
                <h1>this is my first response</h1>
                <h2>this is my second response</h2>
                <p>this is my third response</p>
                <p>${JSON.stringify(user)}</p>
                </body>
            </html>`);
};
const server = http.createServer(requestlistener)

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})