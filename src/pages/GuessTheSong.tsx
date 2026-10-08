import { useState } from 'react'
import { Decorations, MenuBar } from '../components/Menu'
import '../App.css'

function GuessTheSong() {

  const [showAchievement, setShowAchievement] = useState(true)

  return (
    <div className="project-page">
      <Decorations />
      <div className="project-window">
        <div className="title-bar">
          <div className="window-title">guess-the-song.exe</div>

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
          <h1>♡ Guess the Song ♡</h1>

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
                    Again, sophomore year of my college I heard React was getting all the hype. 
                    My courses hadn't introduced React yet, so I went to the internet to learn frontend and full-stack development. 
                </p>

                <p>
                    I stumbled across <a href="https://fullstackopen.com/en/">FullStackOpen</a>, a course from the University of Helsinki in Finland. 
                    So with this course and a dream, I made a game where you can test how well you really know your favorite artist.
                </p>

                <p>
                    As a coding newbie with no experience before college, I was also fascinated by how websites actually make it onto the internet. This was my first time deploying a project, and I used Render because it was free. The site has been up ever since ♡
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
                <source src="/guess-the-song-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

                <p className="demo-caption">
                    want to play it yourself?{' '}
                    <a
                        href="https://guess-the-song-game.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        try it here ♡
                    </a>
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
                Given an input artist, the game pulls their top tracks. It then generates a random set of lyrics where the player has to guess the song hangman-style.            
                </p>
                <p>
                Basically: helps you prove you're actually a fan and not a larper.
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
                <span>React</span>
                <span>JavaScript</span>
                <span>LRCLIB</span>
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
                    React state management, breaking an app into reusable components,  deploying a React application, what it actually takes to keep a website running after you build it
                </p>

              <div className="technical-note">
                <strong>✧ biggest achievement</strong>

                <p>
                    Teaching myself a completely new frontend framework and actually getting my first React application deployed and running on the internet. 
                </p>
              </div>
            </div>
          </section>

          {/* FUTURE PLANS */}
            <section className="project-window-section">
            <div className="mini-title">
                ♡ future plans
                <span>×</span>
            </div>

            <div className="project-content">
                <p>
                ✧ Maybe ill add a competitive leaderboard mode for people to show off ! Aka I know my fav artist better than you <em>type shizzle</em>
                </p>
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
            🎵
          </div>

          <div className="achievement-toast-name">
            Real Fan
          </div>

          <div className="achievement-toast-text">
            I know my fav artist!
            <br />
          </div>

          <div className="achievement-toast-small">
            no larpers allowed ♡
          </div>
        </div>
      )}

    </div>
  )
}

export default GuessTheSong