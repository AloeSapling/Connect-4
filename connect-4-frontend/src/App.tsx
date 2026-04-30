import { useState } from 'react'
import { Menus } from './scripts/types.tsx'

import { MenuProvider } from './Components/MenuContext.tsx'
import ButtonContainer from './Components/ButtonContainer.tsx'
import './App.css'

function App() {
  const [currentMenu, setCurrentMenu] = useState<Menus>(Menus.TitleScreen);

  return (
    <>
      {/* sets menu context for the entire app, thus allowing global usage of `currentMenu` and `setCurrentMenu` */}
      <MenuProvider value={{ currentMenu, setCurrentMenu }}>
        <header>
          <div id='websiteLogo'>
            ZSEL KidZ
          </div>
          <nav>
            <a href='#'>cool</a>
            <a href='#'>cooler</a>
            <a href='#'>coolest</a>
          </nav>
        </header>

        <div id='gameContainer'>
            <ButtonContainer />

          <canvas id='gameCanvas' onClick={() => console.log(currentMenu)}>
            Your browser does not support canvas. Sorry! :(
          </canvas>
        </div>

        <footer>
          MAW 2026
        </footer>
      </MenuProvider>
    </>
  )
}

export default App