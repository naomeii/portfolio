function VintageHunter() {
  return (
    <div className="page">

      <header className="header">
        <h1>♡ Vintage Hunter ♡</h1>

        <p>
          <a href="/">← back to mimi.dev</a>
        </p>
      </header>

      <main>

        <section>
          <h2>♡ why i made it ♡</h2>

          <p>
            I got really into vintage fashion while I was in Korea
            and started spending way too much time browsing resale
            sites for bags.
          </p>

          <p>
            I wanted to find specific pieces without constantly
            checking eBay myself, so I decided to build something
            that could do the searching for me.
          </p>
        </section>

        <hr />

        <section>
          <h2>see it in action !</h2>

          <p>
            here's a little video of the bot doing its thing ♡
          </p>

          {/* video goes here later */}

        </section>

        <hr />

        <section>
          <h2>♡ what it does ♡</h2>

          <p>- watches eBay for new listings</p>
          <p>- sends notifications for matching items</p>
          <p>- AI-assisted authenticity analysis</p>
        </section>

        <hr />

        <section>
          <h2>♡ built with ♡</h2>

          <p>
            Python · eBay Browse API · OpenAI · SQLite · Docker
          </p>
        </section>

        <hr />

        <section>
          <h2>♡ things i learned ♡</h2>

          <p>
            ...
          </p>
        </section>

        <hr />

        <p style={{ textAlign: 'center' }}>
          <a href="#">github ♡</a>
        </p>

      </main>

    </div>
  )
}

export default VintageHunter