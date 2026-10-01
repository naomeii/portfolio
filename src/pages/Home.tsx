import { useState } from 'react'
import '../App.css'

const projects = [
  {
    name: 'Vintage Hunter',
    story:
      'I got really into vintage fashion while I was in Korea and started spending way too much time browsing resale sites for bags.',
    description:
      'An automated eBay deal hunter with AI-assisted authenticity analysis.',
    tech: 'Python · eBay API · OpenAI · SQLite · Docker',
    path: '/projects/vintage-hunter',
  },
  {
    name: 'XDMoD Access',
    story:
      'A research project I worked on during my AI research internship.',
    description:
      'An AI-powered system for categorizing unknown HPC applications.',
    tech: 'Python · AI · HPC · APIs',
    path: '/projects/xdmod-access',
  },
]

function Home() {
  const [currentProject, setCurrentProject] = useState(0)

  const project = projects[currentProject]

  return (
    <div className="page">
      <header className="header">
        <h1>♡ mimi.dev ♡</h1>

        <p>hi hi!! welcome to my website ✧</p>

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

      <main>
        <section id="about">
          <h2>♡ hello ♡</h2>

          <div className="about">
            <div className="about-photo">
              <img src="/me.png" alt="Mimi sitting by a pond" />
            </div>

            <div className="about-text">
              <p>hi!! i'm mimi</p>

              <p>
                i'm a computer science graduate who likes coding,
                cybersecurity, vintage bags, traveling, cute things,
                and turning random ideas into little projects.
              </p>

              <p>
                this is my little corner of the internet where i keep
                some of the things i've built, things i'm interested in,
                and random pieces of my life ♡
              </p>
            </div>

            <div className="interests">
              <p><b>♡ things i'm into ♡</b></p>

              <p>coding!!! 🎧 <a href="#">music</a>, vintage bags & fashion, traveling, cute things</p>
            </div>
          </div>
        </section>

        <hr />

        <section id="projects">
          <h2>✧ my projects ✧</h2>

          <p>things i've made lately ♡</p>

          <div className="project">
            <h3>{project.name}</h3>

            <p>
              {project.story}
            </p>

            <p className="tech">
              {project.tech}
            </p>

            <p>
              <a href={project.path}>read more ♡</a>
            </p>
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

        {/* rest of your homepage */}

      </main>

    </div>
  )
}

export default Home