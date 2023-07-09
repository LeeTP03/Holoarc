import * as server from '../entries/pages/activities/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/activities/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/activities/+page.server.js";
export const imports = ["_app/immutable/nodes/3.87e81eee.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js","_app/immutable/chunks/ButtonRow.6e8b94f1.js","_app/immutable/chunks/paths.e80d3efd.js"];
export const stylesheets = ["_app/immutable/assets/3.f8f2d11a.css","_app/immutable/assets/ButtonRow.d900821e.css"];
export const fonts = [];
