

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.71c4ab9b.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js","_app/immutable/chunks/singletons.6f8b5296.js","_app/immutable/chunks/paths.88c84ce8.js"];
export const stylesheets = [];
export const fonts = [];
