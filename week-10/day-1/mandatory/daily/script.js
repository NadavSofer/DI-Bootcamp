const {largeNumber, currentDateTime} = require('./main.js');
let http = require("http");

// part 1

const b = 5;

let biggerNumber= largeNumber + b;

// part 2
const host = 'localhost';
const port = 8000;

const requestlistener = function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`<html>
                <body>
                    <h1>Hi there at the frontend</h1>
                    <p>My Module is:${biggerNumber}</p>
                    <p>${currentDateTime()}</p>
                </body>
            </html>`);
};
const server = http.createServer(requestlistener)

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})