

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.077a287c.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js","_app/immutable/chunks/singletons.b012ef90.js","_app/immutable/chunks/paths.24d6378b.js"];
export const stylesheets = [];
export const fonts = [];
