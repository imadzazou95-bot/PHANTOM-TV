Files generated in /mnt/data:
- index.html           : Static website listing 90330 channels parsed from the M3U.
- server.js            : Optional Node.js helper (basic). See notes below.
How to use:
1) Open index.html in a browser to view the site locally (File -> Open). Some streams may not play due to CORS or stream format.
2) To host and avoid some CORS issues, run a small server:
   - Install Node.js, then run:
     npm init -y
     npm install express http-proxy-middleware cors
     node server.js
   - Open http://localhost:3000/index.html
3) If streams still fail due to CORS, you need a streaming proxy that forwards the stream while adding Access-Control-Allow-Origin: '*'. Use nginx or a proper proxying solution.
Notes:
- This static site does NOT remove stream DRM or break any protected content. It only lists and attempts to play URLs present in the M3U file.
- If you want the site styled differently or additional features (search, categories, logos), tell me and I'll update the site.
