import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import BackendTest from "./pages/BackendTest.tsx";

// Pages
const BasePage = lazy(() => import("./pages/BasePage.tsx"));
const HomePage = lazy(() => import("./pages/HomePage.tsx"));
const SettingsPage = lazy(() => import("./pages/SettingsPage.tsx"));
const GamePage = lazy(() => import("./pages/GamePage.tsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage.tsx"));

function App() {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
					{/* All routes are to be defined here so that child routes can also use them */}
					<Routes>
						<Route path="/" element={<BasePage />}>
							{/* Base path */}
							<Route index element={<HomePage />} />

							<Route path="settings" element={<SettingsPage />} />

							<Route path="game" element={<GamePage />} />
							<Route path="test" element={<BackendTest />} />

							{/* 404 */}
							<Route path="*" element={<ErrorPage />} />
						</Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	)
}

export default App
