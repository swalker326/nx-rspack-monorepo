import * as React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Button } from "@nx-rspack-monorepo/ui";
import "../styles.css";

const Remote = React.lazy(() => import("remote/Module"));

export function App() {
	return (
		<React.Suspense fallback={null}>
			<Button />
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/remote">Remote</Link>
				</li>
			</ul>
			<Routes>
				<Route
					index
					element={
						<div>
							<h1 className="text-5xl">Welcome to Host!</h1>
						</div>
					}
				/>
				<Route path="/remote" element={<Remote />} />
			</Routes>
		</React.Suspense>
	);
}

export default App;
