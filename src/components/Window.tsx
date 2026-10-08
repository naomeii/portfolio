import { useState, type ReactNode } from 'react'

type WindowProps = {
  title: string
  className: string
  children: ReactNode
}

export function Window({ title, className, children }: WindowProps) {
  const [minimized, setMinimized] = useState(false)
  const [maximized, setMaximized] = useState(false)
  const [showClosePopup, setShowClosePopup] = useState(false)

  return (
    <>
      {minimized && (
        <button
          type="button"
          className="taskbar-window"
          onClick={() => setMinimized(false)}
        >
          🖥 {title}
        </button>
      )}

      {!minimized && (
        <div className={`${className} ${maximized ? 'window-maximized' : ''}`}>
          <div className="title-bar">
            <div className="window-title">{title}</div>

            <div className="window-controls">
              <button
                type="button"
                aria-label="Minimize window"
                onClick={() => setMinimized(true)}
              >
                —
              </button>

              <button
                type="button"
                aria-label="Maximize window"
                onClick={() => setMaximized(!maximized)}
              >
                {maximized ? '❐' : '□'}
              </button>

              <button
                type="button"
                aria-label="Close window"
                onClick={() => setShowClosePopup(true)}
              >
                ×
              </button>
            </div>
          </div>

          {children}
        </div>
      )}

      {showClosePopup && (
        <div className="popup-overlay">
          <div className="retro-popup">
            <div className="popup-title">
              ♡ mimi.dev
              <button
                type="button"
                onClick={() => setShowClosePopup(false)}
                aria-label="Close popup"
              >
                ×
              </button>
            </div>

            <div className="popup-content">
              <p>are you sure you want to close mimi.dev?</p>

              <div className="popup-buttons">
                <button type="button" onClick={() => setShowClosePopup(false)}>
                  nope ♡
                </button>

                <button type="button" onClick={() => setShowClosePopup(false)}>
                  never!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
