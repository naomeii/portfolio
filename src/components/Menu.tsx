import { createContext, useContext, useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type MenuName = 'file' | 'view' | 'favorites' | null

type MenuContextValue = {
  showSparkles: boolean
  showKitty: boolean
  toggleSparkles: () => void
  toggleKitty: () => void
  openHelp: () => void
}

const MenuContext = createContext<MenuContextValue | null>(null)

function useMenu() {
  const value = useContext(MenuContext)
  if (!value) {
    throw new Error('Menu is only available inside MenuProvider')
  }
  return value
}

export function MenuProvider({ children }: { children: ReactNode }) {
  const [showSparkles, setShowSparkles] = useState(true)
  const [showKitty, setShowKitty] = useState(true)
  const [showHelpPopup, setShowHelpPopup] = useState(false)

  const value: MenuContextValue = {
    showSparkles,
    showKitty,
    toggleSparkles: () => setShowSparkles((current) => !current),
    toggleKitty: () => setShowKitty((current) => !current),
    openHelp: () => setShowHelpPopup(true),
  }

  return (
    <MenuContext.Provider value={value}>
      {children}

      {showHelpPopup && (
        <div className="popup-overlay">
          <div className="retro-popup">
            <div className="popup-title">
              ♡ mimi.dev help
              <button
                type="button"
                onClick={() => setShowHelpPopup(false)}
                aria-label="Close help"
              >
                ×
              </button>
            </div>

            <div className="popup-content">
              <p>welcome to my little corner of the internet ♡</p>

              <p>this site is a personal portfolio built with React + TypeScript.</p>

              <p>✧</p>

              <div className="popup-buttons">
                <button type="button" onClick={() => setShowHelpPopup(false)}>
                  ok ♡
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MenuContext.Provider>
  )
}

export function Decorations() {
  const { showSparkles, showKitty } = useMenu()

  return (
    <>
      {showSparkles && (
        <>
          <div className="sparkle sparkle-1">✧</div>
          <div className="sparkle sparkle-2">☆</div>
          <div className="sparkle sparkle-3">♡</div>
          <div className="sparkle sparkle-4">✦</div>
        </>
      )}

      {showKitty && (
        <div className="walking-kitty" aria-hidden="true">
          ฅ^•ﻌ•^ฅ
        </div>
      )}
    </>
  )
}

export function MenuBar() {
  const [openMenu, setOpenMenu] = useState<MenuName>(null)
  const { showSparkles, showKitty, toggleSparkles, toggleKitty, openHelp } =
    useMenu()
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = (menu: MenuName) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  const goToSection = (section: string) => {
    setOpenMenu(null)

    if (location.pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    navigate(`/#${section}`)
  }

  return (
    <div className="menu-bar">
      <div className="menu-container">
        <button
          type="button"
          className="menu-button"
          onClick={() => toggleMenu('file')}
        >
          File
        </button>

        {openMenu === 'file' && (
          <div className="dropdown">
            <button type="button" onClick={() => goToSection('links')}>
              ♡ contact me
            </button>
          </div>
        )}
      </div>

      <div className="menu-container">
        <button
          type="button"
          className="menu-button"
          onClick={() => toggleMenu('view')}
        >
          View
        </button>

        {openMenu === 'view' && (
          <div className="dropdown">
            <button type="button" onClick={toggleSparkles}>
              {showSparkles ? '✓' : '　'} sparkles
            </button>

            <button type="button" onClick={toggleKitty}>
              {showKitty ? '✓' : '　'} little kitty
            </button>
          </div>
        )}
      </div>

      <div className="menu-container">
        <button
          type="button"
          className="menu-button"
          onClick={() => toggleMenu('favorites')}
        >
          Favorites
        </button>

        {openMenu === 'favorites' && (
          <div className="dropdown">
            <button type="button" onClick={() => goToSection('about')}>
              ♡ about me
            </button>

            <button type="button" onClick={() => goToSection('projects')}>
              ♡ my projects
            </button>

            <button type="button" onClick={() => goToSection('life')}>
              ♡ my life
            </button>
          </div>
        )}
      </div>

      <div className="menu-container">
        <button
          type="button"
          className="menu-button"
          onClick={() => {
            setOpenMenu(null)
            openHelp()
          }}
        >
          Help
        </button>
      </div>
    </div>
  )
}
