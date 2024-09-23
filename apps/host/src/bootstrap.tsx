import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootRoute from "./app/routes/root";
import "./styles.css";

const router = createBrowserRouter(
	[
		{
			id: "root",
			path: "/",
			Component: RootRoute,
			children: [
				{
					index: true,
					lazy: () => import("./app/routes/index"),
				},
			],
		},
	],
	{
		future: {
			v7_normalizeFormMethod: true,
		},

		async unstable_patchRoutesOnNavigation({ path, matches, patch }) {
			if (path.startsWith("/feed")) {
				const { routes } = await import("remote/routes");
				patch("root", routes);
			}
			// TODO: Add more remotes here
		},
	},
);

const rootEl = document.getElementById("root");
if (!rootEl) {
	throw new Error("Root element not found");
}
const root = ReactDOM.createRoot(rootEl);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
