

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6309f6ee.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js","_app/immutable/chunks/singletons.4c600553.js","_app/immutable/chunks/paths.87411e1a.js"];
export const stylesheets = [];
export const fonts = [];
