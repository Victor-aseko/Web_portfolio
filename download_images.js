const fs = require('fs');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

Promise.all([
  download('https://victor2025sportfolio.netlify.app/Assets/9253900.jpg', 'public/Assets/profile_new.jpg'),
  download('https://victor2025sportfolio.netlify.app/Assets/Untitled%20design.png', 'public/Assets/about_new.png')
]).then(() => console.log('Downloaded'))
  .catch(err => console.error(err));
