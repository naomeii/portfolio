import { useState } from 'react'
import { Decorations, MenuBar } from '../components/Menu'
import '../App.css'

function InstagramDegrees() {

  const [showAchievement, setShowAchievement] = useState(true)

  return (
    <div className="project-page">
      <Decorations />
      <div className="project-window">
        <div className="title-bar">
          <div className="window-title">instagram-degsep.exe</div>

          <div className="window-controls">
            <button aria-label="Minimize">—</button>
            <button aria-label="Maximize">□</button>
            <a href="/" aria-label="Close">
              ×
            </a>
          </div>
        </div>

        <MenuBar />

        <header className="project-header">
          <h1>♡ Instagram Degrees of Separation ♡</h1>

          <p>
            <a href="/">← back to mimi.dev</a>
          </p>

          <p className="project-subtitle">
            Personal Project · Last Updated Oct 2026
          </p>
        </header>

        <main className="project-main">

          {/* WHY I WORKED ON IT */}
          <section className="project-window-section">
            <div className="mini-title">
              ♡ why i worked on it
              <span>×</span>
            </div>

            <div className="project-content">
              <p>
                During my sophomore year of college, I worked on an assignment to calculate the degrees of separation between two nodes on a graph. 
              </p>

              <p>
                It was the first time I've heard of the concept, and it made me curious on how far apart I was from someone in real life, especially celebrities.               </p>

              <p>
                I was also learning more about APIs around this time, so I decided to turn the idea into a real project. Searching online, I saw a project had existed for Twitter so I thought Instagram would be perfect since it was the platform I personally used every day.
              </p>
            </div>
          </section>

          {/* SEE IT IN ACTION */}
          <section className="project-window-section">
            <div className="mini-title">
              🎥 see it in action
              <span>×</span>
            </div>

            <div className="project-content demo-video-box">
              <video
                className="project-demo-video"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/instagram-degsep-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <p className="demo-caption">
                finding the shortest follow-path between two users,
                then walking it live in the browser ♡
              </p>
            </div>
          </section>

          {/* WHAT IT DOES */}
          <section className="project-window-section">
            <div className="mini-title">
              ♡ what it does
              <span>×</span>
            </div>

            <div className="project-content">
              <p>
                You enter a starting Instagram username and a target username. 
                The program uses BFS (Breadth-First Search) to search through their following relationships. 
                It does so by checking who the starting user follows, who those users follow, and so on until it finds the shortest path to the target. 
              </p>

              <p>
                Private accounts are skipped because their following lists can't be accessed.
              </p>

              <p>
                Once the shortest path is found, the program prints it back to the user. 
                Selenium can then be used to traverse that path in real time, opening each profile and following the connection until it reaches the target.
              </p>
            </div>
          </section>

          {/* BUILT WITH */}
          <section className="project-window-section">
            <div className="mini-title">
              ♡ built with
              <span>×</span>
            </div>

            <div className="project-content">
              <div className="tech-list">
                <span>Python</span>
                <span>Instagrapi</span>
                <span>Selenium</span>
                <span>BFS</span>
              </div>
            </div>
          </section>

          {/* THINGS I LEARNED */}
          <section className="project-window-section">
            <div className="mini-title">
              ♡ things i learned
              <span>×</span>
            </div>

            <div className="project-content">
              <p>
                Searching through large following lists can be very slow, especially when the program has to make many requests to explore the graph.
              </p>

              <p>
                Instagram's UI changes frequently, so hardcoded Selenium selectors can break and need to be updated.
              </p>

              <div className="technical-note">
                <strong>✧ biggest achievement</strong>

                <p>
                  Applying something I learned in class to one of my real-life interests and turning it into something I actually wanted to use.
                </p>
              </div>
            </div>
          </section>

          <div className="project-footer">
            <a href="/">♡ back to mimi.dev</a>
          </div>

        </main>
      </div>

      {showAchievement && (
        <div className="achievement-toast">
          <button
            className="achievement-close"
            onClick={() => setShowAchievement(false)}
            aria-label="Close achievement"
          >
            ×
          </button>

          <div className="achievement-toast-title">
            ✦ achievement unlocked!
          </div>

          <div className="achievement-toast-icon">
            🏆
          </div>

          <div className="achievement-toast-name">
            Pro Stalker
          </div>

          <div className="achievement-toast-text">
            found the shortest path to my crush!
            <br />
          </div>

          <div className="achievement-toast-small">
            bfs + selenium ♡
          </div>
        </div>
      )}

    </div>
  )
}

export default InstagramDegrees