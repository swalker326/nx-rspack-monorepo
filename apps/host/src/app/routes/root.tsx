import { Link, Outlet } from "react-router-dom";

export default function RootIndex() {
	return (
		<div className="flex flex-col">
			<div className="text-white p-3 bg-gray-800 min-h-8 flex items-center justify-between">
				<ul
					style={{
						display: "flex",
						gap: "1rem",
						listStyle: "none",
						margin: 0,
						padding: 0,
					}}
				>
					<li className="hover:text-gray-300">
						<Link to="/">Home</Link>
					</li>
					<li className="hover:text-gray-300">
						<Link to="/feed">Feed</Link>
					</li>
				</ul>
				<Link to="/user-settings">
					<p>Settings</p>
				</Link>
			</div>
			<div className="container mx-auto px-4">
				<Outlet />
			</div>
		</div>
	);
}
