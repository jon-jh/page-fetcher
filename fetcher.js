/* We are trying to make an app that downloads a web page using it's url and a path to save it to.

- A function that will take 2 arguments

- Should look like this - download(pageURL, savePath)

- Use the npm needle library for the HTTP connection ( instead of using the normal 'net' built in to Node.)

- Use Node fs module to write / save the file.

- easy peasy lemon squeezy?
*/

const needle = require('needle');
const fs = require('fs');

const download = function(url, path) {
  needle.get(url, (error, response) => { // needle MUST have it written this way in order to function.
    
    if (response && response.body) { // if the response and .body exists
      console.log('webpage accessed, downloading');
      fs.writeFile(path, response.body, () => // this MUST also be a function.
        console.log(`finished downloading: ${url}, saved ${response.body.length} bytes to ${path}`)
      );
    } else {
      console.log('skipped reading response and body for some reason');
    }
  });
};
download('https://google.com/', './index.html');



