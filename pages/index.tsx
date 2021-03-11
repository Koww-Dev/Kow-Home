import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon-kow.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <header>
          <div className="logo">
            <img src='/logo.svg' alt="logo" />
          </div>
          <nav className="navigation">
            <a href="#">About</a>
            <a href="#">Donations</a>
          </nav>
          <nav className="login-theme">
            <div className="switch__container">
              <input id="switch-shadow" className="switch switch--shadow" type="checkbox" />
              <label htmlFor="switch-shadow">
                <img src="/sun.png" alt="light" />
              </label>
            </div>
            <a href="#github" className="github">
              <img src="/GitHub.png" alt="github"/>
            </a>
          </nav>
        </header>
        <section className="intro-app">
          <h1>
            Discover new ko-workers,
              <br/>
            study and evolve as a team
          </h1>
          <p>
            Under development, see the
            <a href="">
              <img src="/GitHub-2.png" alt="github"/>
              repository
            </a>
          </p>
          <img className="dashboard" src="/Dashboard.png" alt="Dashboard" />
          <div className="container-tecs">
            <img src="/mongodb.png" alt="mongoDB Atlas" />
            <img src="/Expressjs.png" alt="express.js"/>
            <img src="/React.png" alt="react.js"/>
            <img src="/nodejs.png" alt="nodejs"/>
          </div>
        </section>
      </main>
    </>
  )
}
