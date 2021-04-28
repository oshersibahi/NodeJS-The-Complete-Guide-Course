
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Hello!</title></head>');
    res.write('<body>');
    res.write('<h1>Say Hello To My Little Page!</h1>');
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter username..."><button type="submit">Send</button></input>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users List</title></head>');
    res.write('<body>');
    res.write('<ul><li>Antonio "Tony" Montana</li><li>Elvira Hancock</li><li>Manny Rivera</li></ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if(url === '/create-user' && method === 'POST'){
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log(message);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    })
  }
};

exports.handler = requestHandler;
