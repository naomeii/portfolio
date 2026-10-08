import { useState } from 'react'
import { Decorations, MenuBar } from '../components/Menu'
import { Window } from '../components/Window'
import '../App.css'

function VintageHunter() {

  const [showAchievement, setShowAchievement] = useState(true)

  return (
    <div className="project-page">
      <Decorations />
      <Window title="vintage-hunter.exe" className="project-window">
        <MenuBar />

        <header className="project-header">
          <h1>♡ Vintage Hunter ♡</h1>
      
          <p>
            <a href="/">← back to mimi.dev</a>
          </p>

          <p className="project-subtitle">
            Personal Project · Last Updated Oct 2026
          </p>

          <p>
            A discord bot that makes hunting vintage pieces easier! ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
          </p>
          <em>Currently for my personal use as I am trying to figure out pricing !</em>

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
                I got really into vintage fashion while I was in Korea and started spending way too much time browsing resale sites for bags.
              </p>

              <p>
                I spent hours refreshing eBay every day trying to find specific pieces at reasonable prices, so I thought, why not automate it ?!
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
                <source src="/vintage-hunter-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <p className="demo-caption">
                 Will update this soon !♡
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
                Vintage Hunter watches eBay for new listings, sends notifications for
                matching items, and uses AI-assistance to help
                evaluate listings for a better peace of mind.
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
                <span>eBay Browse API</span>
                <span>Discord</span>
                <span>GPT-5.4 Mini</span>
                <span>SQLite</span>
                <span>Docker</span>
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
                Initially... I wanted SMS notifications but I soon found out that sending hundreds of texts would get expensive.
              </p>

              <p>
                I tried Email next, but getting hundreds of emails and opening each one to check the listing was way too tedious. 
              </p>

              <p>
                I came to the conclusion that a discord bot that could DM me new listings would be perfect. I could manage searches and view results from the convenience of my mobile phone.
              </p>

              <p>I also learned that migrating database tables is a huge pain!</p>

              <div className="technical-note">
                <strong>✧ biggest achievement</strong>

                <p>
                  Building something I actually use in my free time to solve a problem I genuinely had.
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
                  ✧ Publish a version with/without AI analysis so other people can use the bot
                  for free without worrying about API costs ~
              </p>
            </div>
            </section>

          <div className="project-footer">
            <a href="/">♡ back to mimi.dev</a>
          </div>

        </main>
      </Window>

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
            Fashion Demon
          </div>

          <div className="achievement-toast-text">
            Everything on me is designer
            <br />
          </div>

          <div className="achievement-toast-small">
            I'm so niche ♡
          </div>
        </div>
      )}

    </div>
  )
}

export default VintageHunter