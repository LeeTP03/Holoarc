import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.0d5b05a9.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js","_app/immutable/chunks/ButtonRow.04d2a31f.js","_app/immutable/chunks/paths.87411e1a.js"];
export const stylesheets = ["_app/immutable/assets/2.4ff02ae0.css","_app/immutable/assets/ButtonRow.d900821e.css"];
export const fonts = [];
