import { useState } from 'react'
import { Decorations, MenuBar } from '../components/Menu'
import '../App.css'

function XDMoD() {

    const [showAchievement, setShowAchievement] = useState(true) 

  return (
    <div className="project-page">
      <Decorations />
      <div className="project-window">
        <div className="title-bar">
          <div className="window-title">xdmod.exe</div>

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
          <h1>♡ XDMoD AI Classifier ♡</h1>

          <p>
            <a href="/">← back to mimi.dev</a>
          </p>

          <p className="project-subtitle">
            Software Engineering Intern · May 2025 – Aug. 2025
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
                During my software engineering internship at XDMoD,
                I worked on improving the process used to identify
                applications running on high-performance computing
                clusters.
              </p>

              <p>
                About half of the applications in the logs were uncategorized,
                and the existing process required the team to painstakingly manually
                search for applications, research them, and update
                the identification data.
              </p>

              <p>
                I spent a large part of the internship researching and evaluating
                different AI approaches before settling on a solution. I tested
                open-source models, compared OpenAI models, experimented with
                prompting and batch processing, and built validation tools to
                make sure the model's output could be trusted.
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
              <source src="/xdmod-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p className="demo-caption">
              a quick look at the web interface i built for
              verifying AI-generated application hints ♡
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
                In the short demo video above, the application information is fed into the AI model.
              </p>

              <p>
                The AI model then produces regex hints based on the application's exec and binary path.
              </p>

              <p>
                Finally, a team member can visually inspect the generated hints, edit them if needed (regex validator updates with edit), then export it as JSON to our existing regex hints.
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
                <span>PHP</span>
                <span>JavaScript</span>
                <span>GPT-4.1-Mini</span>
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
                This was my first time working seriously with AI, and I
                learned that building with AI involves much more than
                simply choosing a model.
              </p>

              <p>
                I gained skills in model evaluation, handling unreliable AI output, & understanding the trade-offs between open-source and commercial models.
              </p>

              <div className="technical-note">
                <strong>✧ biggest achievement</strong>

                <p>
                  I went into the internship with very little AI experience
                  and finished by delivering an HPC application identification
                  solution.
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
                Professional Application Categorizer
                </div>

                <div className="achievement-toast-text">
                ~400 similar applications found
                <br />
                from 9 random HPC application logs
                </div>

                <div className="achievement-toast-small">
                across 500,000 unknown applications ♡
                </div>
            </div>
            )}

    </div>
  )
}

export default XDMoD