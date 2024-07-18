const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    // If pathname is '/', set it to the root directory
    if (pathname === '/') {
        pathname = '/.';
    }

    // Construct absolute path based on the URL path
    const fullPath = path.join(__dirname, pathname);

    // Check if the requested path exists
    fs.exists(fullPath, (exists) => {
        if (!exists) {
            // 404 Not Found
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        // Check if it's a directory
        fs.stat(fullPath, (err, stats) => {
            if (err) {
                console.error('Error stating file', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            if (stats.isDirectory()) {
                // Read directory contents
                fs.readdir(fullPath, (err, files) => {
                    if (err) {
                        console.error('Error reading directory', err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Internal Server Error');
                        return;
                    }

                    // Prepare HTML for directory listing
                    let listing = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Directory Listing</title>\n<style>body { font-family: Arial, sans-serif; }</style>\n</head>\n<body>\n<h1>Directory Listing</h1>\n<ul>';

                    // Generate list items for each file/directory
                    files.forEach((file) => {
                        const itemPath = path.join(pathname, file);
                        const itemFullPath = path.join(fullPath, file);
                        // Determine icon based on whether it's a directory or file
                        const icon = fs.statSync(itemFullPath).isDirectory() ? '📁' : '🖹';
                        // Create list item with icon and link
                        listing += `<li>${icon} <a href="${itemPath}">${file}</a></li>\n`;
                    });

                    listing += '</ul>\n</body>\n</html>';

                    // Send HTTP response with HTML content
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(listing);
                });
            } else {
                // Serve file contents if it's a file
                fs.readFile(fullPath, (err, data) => {
                    if (err) {
                        console.error('Error reading file', err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Internal Server Error');
                        return;
                    }

                    // Send HTTP response with file contents
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(data);
                });
            }
        });
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
