// The URL module splits up a web address into readable parts.

const routes = (req, res) => {

  // allows us to add 'sections' to our url
  const url = req.url;
  // to use POST GET methods etc
  const method = req.method;

  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Greeting</title></head>')
    res.write('<body><h1>Yes, Your First Route! </h1></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/users'){
    res.write('<html>')
    res.write('<head><title>Greeting</title></head>')
    res.write('<body><ul><li>Jose</li><li>Josiah</li><li>Zoraida</li></ul></body>')
    res.write('</html>')
    return res.end()
  }
}

module.exports = routes;
