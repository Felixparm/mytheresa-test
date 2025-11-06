import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
async function createServer() {
  const app = express();
  const isProd = process.env.NODE_ENV === 'production';

  let vite;
  let manifest;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/assets')));
    manifest = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'dist/.vite/manifest.json'), 'utf-8')
    );
  }

  app.use(async (req, res, next) => {
    if (req.method !== 'GET') return next();
    const url = req.originalUrl;

    try {
      // 🧩 Read HTML template
      let template;
      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');
      }
      const { render } = isProd
        ? await import(`./dist/server/entry-server.js`)
        : await vite.ssrLoadModule('/src/entry-server.tsx');

      const { html: appHtml, state: dehydratedState } = await render(url);

      let html = template.replace(
        `<div id="root"></div>`,
        `<div id="root">${appHtml}</div>
         <script>
           window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)};
         </script>`
      );

      if (isProd && manifest) {
        const entry = manifest['src/entry-client.tsx'];
        if (entry?.css) {
          const links = entry.css
            .map((href) => `<link rel="stylesheet" href="/assets/${href}">`)
            .join('\n');
          html = html.replace('</head>', `${links}\n</head>`);
        }
      }

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  const port = 5173;
  app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
  });
}
createServer();