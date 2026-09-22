const http =require('http');

let items = ['apple','banana'];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'Application/json ');

    if(req.method === 'GET'){
        res.end(JSON.stringify(items));
    }
    else if(req.method === 'POST'){
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            items.push(body);
            res.end('Item added: ' + body  );
        });
    }
    else if(req.method === 'PUT'){
        items[0]= 'updated item';
        res.end('first Item updated');
    }
    else if(req.method === 'DELETE'){
        items.pop();
        res.end('last item deleted');
    }
});
server.listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
}   );
