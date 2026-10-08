import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Decorations, MenuBar } from '../components/Menu'
import '../App.css'

const projects = [
  {
    name: 'Vintage Hunter',
    description:
      'I got really into vintage fashion while I was in Korea and started spending way too much time browsing resale sites for bags.',
    tech: 'Python · Discord.py · eBay API · OpenAI · SQLite · Docker',
    path: '/projects/vintage-hunter',
  },
  {
    name: 'Guess The Song',
    description:
      'I decided to learn React from scratch and made a game that tests how well you know your favorite artists.',
    tech: 'React · JavaScript · LRCLIB API',
    path: '/projects/guess-the-song',
  },
  {
    name: 'Instagram Degrees of Separation',
    description:
      'I thought the concept was pretty cool so I decided to create a tool that finds the connection between Instagram users.',
    tech: 'Python · Selenium · Instagrapi',
    path: '/projects/instagram-degrees',
  },
  {
    name: 'XDMoD AI Classifier',
    description:
      'Helped categorize unknown HPC applications from research log data at my internship!',
    tech: 'PHP · JavaScript · GPT-4.1-Mini · HPC',
    path: '/projects/xdmod',
  },
  {
    name: 'more projects',
    description: 'more little things ive built will live here ♡',
    tech: 'coming soon...',
    path: '#',
  },
]

function Home() {
  const [currentProject, setCurrentProject] = useState(0)

  const [minimized, setMinimized] = useState(false)
  const [maximized, setMaximized] = useState(false)

  const [showClosePopup, setShowClosePopup] = useState(false)

  const project = projects[currentProject]
  const [showPhotoPopup, setShowPhotoPopup] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    document
      .getElementById(location.hash.slice(1))
      ?.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash])

  return (
    <div className="site">

      <Decorations />

      {/*minimized taskbar*/}

      {minimized && (
        <button
          className="taskbar-window"
          onClick={() => setMinimized(false)}
        >
          🖥 mimi.dev
        </button>
      )}

      {/*main window*/}

      {!minimized && (
        <div className={`window ${maximized ? 'window-maximized' : ''}`}>

          {/* title bar */}

          <div className="title-bar">

            <div className="window-title">
              mimi.dev
            </div>

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

          <MenuBar />

          {showPhotoPopup && (
            <div className="popup-overlay">

                <div className="retro-popup photo-popup">

                <div className="popup-title">
                    ♡ about this photo

                    <button
                    onClick={() => setShowPhotoPopup(false)}
                    aria-label="Close photo information"
                    >
                    ×
                    </button>
                </div>

                    <div className="popup-content">

                        <div className="photo-location">
                            📍 Seattle Japanese Garden
                        </div>

                        <img
                            src="/me.png"
                            alt="Mimi sitting by a pond"
                            className="popup-photo"
                        />

                        <p>
                            ✧ a little moment from my life ♡
                        </p>

                        <p>
                            Spotted koi fish at Seattle's Japanese Garden!
                            Purse is also vintage from Korea ~
                        </p>

                        <div className="popup-buttons">
                            <button
                            onClick={() => setShowPhotoPopup(false)}
                            >
                            yay !
                            </button>
                        </div>

                    </div>

                </div>

            </div>
            )}

          {/*header*/}

          <header className="header">

            <h1>♡ mimi.dev ♡</h1>

            <p>
              hi hi!! welcome to my website ✧
            </p>

            <nav>
              <a href="#about">about</a>
              {' · '}
              <a href="#projects">projects</a>
              {' · '}
              <a href="#life">my life</a>
              {' · '}
              <a href="#links">links</a>
            </nav>

          </header>

          {/*content*/}

          <main>

            <section id="about" className="retro-section">

              <div className="section-title">
                ♡ hello ♡
              </div>

              <div className="about">

                <div className="about-photo">
                    <button
                        className="photo-button"
                        onClick={() => setShowPhotoPopup(true)}
                        aria-label="Open information about this photo"
                    >
                        <img
                        src="/me.png"
                        alt="Mimi sitting by a pond"
                        />
                    </button>

                    <div className="photo-hint">
                        click me ^
                    </div>

                    </div>

                <div className="about-text">

                  <p>
                    hi!! i'm mimi
                  </p>

                  <p>
                    i'm a computer science graduate (co '26)! i also minored in cybersecurity~
                  </p>

                  <p>
                    this is where i keep some of the things i've built, things i'm interested in, and random pieces
                    of my life ♡
                  </p>

                  <p>I love traveling, vintage bags & fashion, and doomscrolling...</p>

                </div>

              </div>

              <div className="mini-window">

                <div className="mini-title">
                  ♡ my skills !
                  <span>×</span>
                </div>

                <div className="mini-content">
                  Python · JavaScript · TypeScript · C · Java · PHP · HTML/CSS · React · Node.js
                </div>

              </div>

            </section>

            <hr />

            <section id="projects" className="retro-section">

              <div className="section-title">
                ✧ my projects ✧
              </div>

              <p className="center-text">
                things i've made lately ♡
              </p>

              <div className="project-window">

                <div className="mini-title">
                  📁 {project.name}
                  <span>×</span>
                </div>

                <div className="project-content">

                  <p>
                    {project.description}
                  </p>

                  <p className="tech">
                    {project.tech}
                  </p>

                  <a href={project.path}>
                    read more ♡
                  </a>

                </div>

              </div>

              <div className="project-navigation">

                <button
                  onClick={() =>
                    setCurrentProject(
                      (currentProject - 1 + projects.length) %
                        projects.length
                    )
                  }
                >
                  ‹ previous
                </button>

                <span>
                  {currentProject + 1} / {projects.length}
                </span>

                <button
                  onClick={() =>
                    setCurrentProject(
                      (currentProject + 1) % projects.length
                    )
                  }
                >
                  next ›
                </button>

              </div>

            </section>

            <hr />

            <section id="life" className="retro-section">

              <div className="section-title">
                ♡ my life ♡
              </div>

              <div className="mini-window">

                <div className="mini-title">
                  ♡ currently
                  <span>×</span>
                </div>

                <div className="mini-content">

                    <p>
                        ᧔•᧓ building: <a href="/projects/vintage-hunter">Vintage Hunter</a>
                    </p>

                    <p>
                        ᧔•᧓ on the hunt for: reasonably priced vintage balenciaga city small bag in black...
                    </p>

                </div>

              </div>

            </section>

            <hr />

            <section id="links" className="retro-section">

              <div className="section-title">
                ☆ links ☆
              </div>

              <p className="center-text">

                <a href="https://github.com/">github</a>
                {' · '}
                <a href="https://www.linkedin.com/in/naomiari/">linkedin</a>
                {' · '}
                <a href="mailto:1naomiari@gmail.com">email me!</a>
              </p>

            </section>

          </main>

          <footer>
            <p>♡ made with love by mimi ♡</p>
            <p>last updated: oct 2026</p>
          </footer>

        </div>
      )}

      {/*CLOSE POPUP*/}

      {showClosePopup && (
        <div className="popup-overlay">

          <div className="retro-popup">

            <div className="popup-title">
              ♡ mimi.dev
              <button
                onClick={() => setShowClosePopup(false)}
                aria-label="Close popup"
              >
                ×
              </button>
            </div>

            <div className="popup-content">

              <p>
                are you sure you want to close mimi.dev?
              </p>

              <div className="popup-buttons">

                <button
                  onClick={() => {
                    setShowClosePopup(false)
                  }}
                >
                  nope ♡
                </button>

                <button
                  onClick={() => setShowClosePopup(false)}
                >
                  never!
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default Home