import * as server from '../entries/pages/archive/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/archive/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/archive/+page.server.js";
export const imports = ["_app/immutable/nodes/4.d7e54052.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js","_app/immutable/chunks/ButtonRow.44aff95a.js","_app/immutable/chunks/paths.44e2c1f4.js"];
export const stylesheets = ["_app/immutable/assets/4.3ae17a1e.css","_app/immutable/assets/ButtonRow.d900821e.css"];
export const fonts = [];
