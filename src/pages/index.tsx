import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const hamburger = useRef<HTMLInputElement>(null);
  const [ isOpen, setIsOpen ] = useState(false);

  function sanduIsOpen(event: React.MouseEvent) {
    const { checked } = hamburger.current;
    if (checked === false) {
      setIsOpen(true);
      console.log('abri menu');
    } else if (checked === true) {
      console.log('fechei menu');
      setIsOpen(false);
    }
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon-kow.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&display=swap" rel="stylesheet" />
      </Head>
      <main>
      <div className="container" >
        <input type="checkbox" id="checkbox-menu" ref={hamburger} />
        <label htmlFor="checkbox-menu" onClick={sanduIsOpen} >
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
        <header className={ isOpen === false ? "disable" : "" }>
          <div className="logo">
            <img src='/logo.svg' alt="logo" />
          </div>
          <nav className={ isOpen === false ? "navigation dsi-none" : "navigation"} >
            <a href="#">About</a>
            <a href="#">Donations</a>
          </nav>
          <nav className={ isOpen === false ? "login-theme dsi-none" : "login-theme"} >
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
          <div className="responsive">
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
        </div>
        </section>
        <section className="experience">
          <div className="experience-responsive">
            <h1>
              Simulate the experience of working<br/>on large projects
            </h1>
            <div className="view-dashbord">
              <img className="dashboard" src="/Workspace.png" alt="Dashboard"/>
              <div className="the-best-tools">
                <h2>
                  The best tools to work in teams and remotely
                </h2>
                <p>
                  Contribute to the project on <a href="/">Github</a>
                </p>
                <div className="container-tools">
                  <img src="/Todo-list.svg" alt="To-Do list" />
                  <img src="/Chatbutton.svg" alt="Chat" />
                  <img src="/Video-button.svg" alt="Video Call" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-working">
          <p className="work-experience">
            No work experience? Koww is an open source social network platform that connect
            developers with another developers for study together and work in another open
            source projects
          </p>
        </section>
        <section className="monitoring">
          <div className="mento-responsive">
            <h1>
              How about monitoring the<br/>project development?
            </h1>
            <h4>
              The project is under development, you may monitoring and contribute
            </h4>
            <div className="container-social-midias">
              <div className="midias">
                <a href="">
                  <img src="/Vector-2.svg" alt="Twitter" />
                  Twitter
                </a>
                <a href="">
                  <img src="/Vector.svg" alt="Github" />
                  Github
                </a>
              </div>
              <div className="to-point">
                <img src="/hands-dark-white.png" alt="google"/>
                <img src="/Green-in-Jacket3.png" alt="google"/>
                <img src="/black-in-Basic11.png" alt="google"/>
                <img src="/Purple-in-jacket5.png" alt="google"/>
                <img src="/Blue-in-jumper7.png" alt="google"/>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="responsive-footer">
            <div className="container-logo-footer">
              <img src="/logo.svg" alt="Koww"/>
            </div>
            <div className="development">
              <p>Development</p>
              <a href="">About</a>
              <a href="">Team</a>
              <a href="">Contact</a>
            </div>
            <div className="contribute">
              <p>Contribute</p>
              <a href="">Github</a>
              <a href="">Comunity</a>
              <a href="">Donations</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}