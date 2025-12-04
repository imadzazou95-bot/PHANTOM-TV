// Simple Node.js proxy server using express and http-proxy-middleware
// Usage: npm install express http-proxy-middleware cors && node server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static site
app.use('/', express.static(path.join(__dirname)));

// Proxy endpoints (example): add rules for specific stream domains if needed
// Generic proxy route: /proxy?url=<encoded_url>
app.get('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('missing url');
  const target = url;
  // Basic redirect to target with CORS header; in production use http-proxy-middleware for streaming
  res.set('Access-Control-Allow-Origin', '*');
  res.redirect(target);
});

app.listen(PORT, ()=>console.log('Server listening on', PORT));