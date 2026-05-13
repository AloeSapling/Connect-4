import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
// import BackendTest from "./pages/BackendTest.tsx";
import { UserProvider } from "./components/providers/userProvider.tsx";
import Auth from "./components/providers/auth.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AxiosError } from "axios";

// Pages
const BasePage = lazy(() => import("./pages/BasePage.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const Username = lazy(() => import("./pages/Username.tsx"));
const LobbyList = lazy(() => import("./pages/LobbyList.tsx"));
const Lobby = lazy(() => import("./pages/Lobby.tsx"));
const Game = lazy(() => import("./pages/Game.tsx"));
const Settings = lazy(() => import("./pages/Settings.tsx"));
const Error = lazy(() => import("./pages/Error.tsx"));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            throwOnError: (error) => (error as AxiosError).status !== 401,
        }
    }
})

function App() {
    return (
        <>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <UserProvider>
                            {/* All routes are to be defined here so that child routes can also use them */}
                            <Routes>
                                <Route path="/" element={<BasePage />}>
                                    {/* Base path */}
                                    <Route index element={<Home />} />
                                    
                                    <Route element={<Auth.UserDoesNotExist />}>
                                        <Route path="username" element={<Username />} />
                                    </Route>

                                    <Route element={<Auth.LoggedIn />}>
                                        <Route path="lobbylist" element={<LobbyList />} />
                                    </Route>

                                    <Route path="lobby/:lobbyCode" element={<Lobby />} />

                                    <Route path="game" element={<Game />} />

                                    <Route path="settings" element={<Settings />} />

                                    {/* <Route path="test" element={<BackendTest />} /> */}

                                    {/* 404 */}
                                    <Route path="*" element={<Error />} />
                                </Route>
                            </Routes>
                        </UserProvider>
                    </Suspense>

                </QueryClientProvider>
            </BrowserRouter>
        </>
    )
}

export default App
