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
		client: {"start":"_app/immutable/entry/start.d2f6f829.js","app":"_app/immutable/entry/app.a67fb5b8.js","imports":["_app/immutable/entry/start.d2f6f829.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.6f8b5296.js","_app/immutable/chunks/paths.88c84ce8.js","_app/immutable/entry/app.a67fb5b8.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js"],"stylesheets":[],"fonts":[]},
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
