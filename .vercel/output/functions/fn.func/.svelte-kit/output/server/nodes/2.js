import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.48a498e0.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js","_app/immutable/chunks/ButtonRow.6974ebe4.js","_app/immutable/chunks/paths.0d1c40c7.js"];
export const stylesheets = ["_app/immutable/assets/2.abf80771.css","_app/immutable/assets/ButtonRow.d900821e.css"];
export const fonts = [];
