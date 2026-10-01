const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const folder = path.join(__dirname, "files");
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    console.log("files/ folder created");
}

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to File Server");
    }

    else if (req.url === "/files" && req.method === "GET") {

        fs.readdir(folder, (err, files) => {
            if (err) {
                res.writeHead(500);
                res.end("Error reading files");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(files.join("\n"));
        });
    }
    else if (req.url.startsWith("/create/") && req.method === "GET") {

        const fileName = req.url.split("/")[2];
        const filePath = path.join(folder, fileName);

        fs.writeFile(filePath, "This is a text file.", (err) => {
            if (err) {
                res.writeHead(500);
                res.end("Error creating file");
                return;
            }

            res.writeHead(200);
            res.end("File created successfully");
        });
    }
    else {
        res.writeHead(404);
        res.end("404 - Page not found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});