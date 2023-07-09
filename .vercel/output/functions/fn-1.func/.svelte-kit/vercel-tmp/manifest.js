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
		client: {"start":"_app/immutable/entry/start.ebdcc9bc.js","app":"_app/immutable/entry/app.a2bcbe99.js","imports":["_app/immutable/entry/start.ebdcc9bc.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.658d9c34.js","_app/immutable/chunks/paths.44e2c1f4.js","_app/immutable/entry/app.a2bcbe99.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.22826ed8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/favourite",
				pattern: /^\/favourite\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
