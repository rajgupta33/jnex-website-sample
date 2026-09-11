import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
export { pages } from './pages';
export { siteOrigin } from './data/config';
export function render(path) { return renderToString(<App path={path} />); }
