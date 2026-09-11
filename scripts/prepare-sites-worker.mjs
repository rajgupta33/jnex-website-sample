import fs from 'node:fs/promises';

await fs.mkdir('dist/server', { recursive: true });
await fs.copyFile('server/index.js', 'dist/server/index.js');
