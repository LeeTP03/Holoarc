

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/favourite/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.03a586f4.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js","_app/immutable/chunks/ButtonRow.08d150a5.js","_app/immutable/chunks/paths.88c84ce8.js"];
export const stylesheets = ["_app/immutable/assets/5.f71fde6a.css","_app/immutable/assets/ButtonRow.d900821e.css"];
export const fonts = [];
