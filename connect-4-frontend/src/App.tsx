import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Pages
const BasePage = lazy(() => import("./pages/BasePage.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const Settings = lazy(() => import("./pages/Settings.tsx"));
const Game = lazy(() => import("./pages/Game.tsx"));
const Error = lazy(() => import("./pages/Error.tsx"));

  return (
    <>
      {/* sets menu context for the entire app, thus allowing global usage of `currentMenu` and `setCurrentMenu` */}
      <MenuProvider value={{ currentMenu, setCurrentMenu }}>
        <header>
          <div id='websiteLogo'>
          </div>
          <nav>
            <a href='#'>cool</a>
            <a href='#'>cooler</a>
            <a href='#'>coolest</a>
          </nav>
        </header>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          {/* All routes are to be defined here so that child routes can also use them */}
          <Routes>
            <Route path="/" element={<BasePage />}>
              {/* Base path */}
              <Route index element={<Home />} />

              <Route path="settings" element={<Settings />} />

              <Route path="game" element={<Game />} />

        <footer>
        </footer>
      </MenuProvider>
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
