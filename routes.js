// The URL module splits up a web address into readable parts.

const routes = (req, res) => {

  // allows us to add 'sections' to our url
  const url = req.url;
  // to use POST GET methods etc
  const method = req.method;

  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Greeting</title></head>')
    res.write('<body><h1>Yes, Your First Route! </h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/users'){
    res.write('<html>')
    res.write('<head><title>users</title></head>')
    res.write('<body><ul><li>Jose</li><li>Josiah</li><li>Zoraida</li></ul></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/create-user' &&   method === 'POST'){
    const body = [];
    // data gets streamed and chunked into our if statement characteristics
    // then pushed into a an array named body
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk)
    })

    // when  above code is done, we let node to end running
    // The buffer module provides a way of handling streams of binary data (our above code).
    // The Buffer object is a global object in Node.js,it is not necessary to import it using the require keyword.
    // concat, Concatenates an array of Buffer objects into one Buffer object
    // toString(), Returns a string version of a Buffer object
    req.on('end', () =>{
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    })

  }


}

module.exports = routes;
