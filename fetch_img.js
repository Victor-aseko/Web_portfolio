fetch('https://victor2025sportfolio.netlify.app/')
  .then(res => res.text())
  .then(html => {
    const matches = html.match(/src="([^"]+\.(png|jpg|jpeg|gif|webp))"/g);
    console.log(matches);
  });
