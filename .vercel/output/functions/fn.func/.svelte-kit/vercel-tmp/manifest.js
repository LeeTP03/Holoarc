export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7bd11440.js","app":"_app/immutable/entry/app.2266010d.js","imports":["_app/immutable/entry/start.7bd11440.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.539744d8.js","_app/immutable/chunks/paths.8f2b0361.js","_app/immutable/entry/app.2266010d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
