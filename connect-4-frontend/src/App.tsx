import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import BackendTest from "./pages/BackendTest.tsx";

// Pages
const BasePage = lazy(() => import("./pages/BasePage.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const Settings = lazy(() => import("./pages/Settings.tsx"));
const Game = lazy(() => import("./pages/Game.tsx"));
const Error = lazy(() => import("./pages/Error.tsx"));

function App() {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
					{/* All routes are to be defined here so that child routes can also use them */}
					<Routes>
						<Route path="/" element={<BasePage />}>
							{/* Base path */}
							<Route index element={<Home />} />

							<Route path="settings" element={<Settings />} />

							<Route path="game" element={<Game />} />
							<Route path="test" element={<BackendTest />} />

							{/* 404 */}
							<Route path="*" element={<Error />} />
						</Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	)
}

export default App
