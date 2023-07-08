

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/favourite/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.34d0bbfb.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js","_app/immutable/chunks/ButtonRow.04d2a31f.js","_app/immutable/chunks/paths.87411e1a.js"];
export const stylesheets = ["_app/immutable/assets/5.f71fde6a.css","_app/immutable/assets/ButtonRow.d900821e.css"];
export const fonts = [];
