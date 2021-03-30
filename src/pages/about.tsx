import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

// import { Container } from './styles';

const pages: React.FC = () => {
  const hamburger = useRef<HTMLInputElement>(null);
  const themeInputDesktop = useRef<HTMLInputElement>(null);
  const themeInputMobile = useRef<HTMLInputElement>(null);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ colorTheme, setColorTheme ] = useState({
    color: '',
    colorSegundary: '',
    colorDefineTheme: '',
    colorExperience: '#FFF',
    colorP: '#110B11',
    colorExperienceP: 'rgba(17, 12, 17, 0.6)',
    colorFooterP: '',
    background: '',
    dashbordDark: '/Dashboard.png',
    logoLight: '/logo.svg',
    dashboard2: '/dashboard-white-2.png',
    tools: [
      '/Todo-list.svg',
      '/Chatbutton.svg',
      '/Video-button.svg'
    ],
    tecs: [
      '/mongodb.png',
      '/Expressjs.png',
      '/React.png',
      '/nodejs.png',
    ]
  });

  function sanduIsOpen(event: React.MouseEvent) {
    const { checked } = hamburger.current;
    if (checked === false) {
      setIsOpen(true);
    } else if (checked === true) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (themeInputMobile.current.checked === false) {
      console.log('dark')
    } else {
      console.log('claro')
    }
  }, []);

  function defineThemedDesktop(event: React.MouseEvent) {
    console.log(themeInputDesktop.current.checked);
    if (themeInputDesktop.current.checked === false) {
      themeInputMobile.current.checked = true;
      setColorTheme({
        color: '#FFFFFF',
        colorP: '#EFF3F7',
        colorSegundary: 'rgba(255, 255, 255, 0.6)',
        colorExperience: '#504F57',
        background: '#191520',
        colorDefineTheme: '#110B11',
        colorExperienceP: '#FFF',
        colorFooterP: 'rgba(255, 255, 255, 0.8)',
        dashbordDark: '/Dashboard-dark.png',
        logoLight: '/logoLight.svg',
        dashboard2: '/dashboard-dark-2.png',
        tools: [
          '/Chat-button-light.png',
          '/Todo-list-button-ligt.png',
          '/Video-button-light.png'
        ],
        tecs: [
          '/mongodb-color.png',
          '/express-color.png',
          '/React-color.png',
          '/nodejs-color.png',
        ]
      });
    } else {
      themeInputMobile.current.checked = false;
      setColorTheme({
        color: '#110B11',
        colorSegundary: '',
        colorDefineTheme: '',
        colorP: '#110B11',

        background: '',
        colorExperience: '#FFF',
        colorExperienceP: 'rgba(17, 11, 17, 0.6)',
        colorFooterP: '',

        dashbordDark: '/Dashboard.png',
        logoLight: '/logo.svg',
        dashboard2: '/dashboard-white-2.png',
        tools: [
          '/Todo-list.svg',
          '/Chatbutton.svg',
          '/Video-button.svg'
        ],
        tecs: [
          '/mongodb.png',
          '/Expressjs.png',
          '/React.png',
          '/nodejs.png',
        ]
      });
    }
  }

  function defineThemedDMobile(event: React.MouseEvent) {
    if (themeInputMobile.current.checked === false) {
      themeInputDesktop.current.checked = true;
      setColorTheme({
        color: '#FFFFFF',
        colorSegundary: 'rgba(255, 255, 255, 0.6)',
        colorExperience: '#504F57',
        colorExperienceP: '#FFF',
        colorP: '#EFF3F7',

        background: '#191520',
        colorFooterP: 'rgba(255, 255, 255, 0.8)',
        colorDefineTheme: '#110B11',
        dashbordDark: '/Dashboard-dark.png',
        logoLight: '/logoLight.svg',
        dashboard2: '/dashboard-dark-2.png',
        tools: [
          '/Chat-button-light.png',
          '/Todo-list-button-ligt.png',
          '/Video-button-light.png'
        ],
        tecs: [
          '/mongodb-color.png',
          '/express-color.png',
          '/React-color.png',
          '/nodejs-color.png',
        ]
      });
      console.log('dark')
    } else {
      themeInputDesktop.current.checked = false;
      setColorTheme({
        color: '#110B11',
        colorSegundary: '',
        background: '',
        colorP: '#110B11',
        colorDefineTheme: '',
        colorExperience: '',
        colorExperienceP: 'rgba(17, 11, 17, 0.6)',
        colorFooterP: '',
        dashbordDark: '/Dashboard.png',
        logoLight: '/logo.svg',
        dashboard2: '/dashboard-white-2.png',
        tools: [
          '/Todo-list.svg',
          '/Chatbutton.svg',
          '/Video-button.svg'
        ],
        tecs: [
          '/mongodb.png',
          '/Expressjs.png',
          '/React.png',
          '/nodejs.png',
        ]
      });
      console.log('claro')
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
      <main style={{ backgroundColor: colorTheme.background, color: colorTheme.color }}>
        <div className="container-header-desktop">
          <header className="desktop">
            <div className="logo">
            <Link href="/">
              <a>
                <img src={ colorTheme.logoLight } alt="logo" />
              </a>
            </Link>
            </div>
            <nav
              className={ isOpen === false ? "navigation dsi-none" : "navigation"}
            >
              <Link href="/about">
                <a style={{ color: colorTheme.color }} >About</a>
              </Link>
              <Link href="/about">
                <a style={{ color: colorTheme.color }} >Donations</a>
              </Link>
            </nav>
            <nav className={"login-theme"} >
              <div className="switch__container">
                <input
                  id="switch-shadow-mobile"
                  className="switch switch--shadow-desktop"
                  type="checkbox"
                  ref={themeInputDesktop}
                  defaultChecked={false}
                />
                <label htmlFor="switch-shadow-mobile" onClick={defineThemedDesktop}>
                  <img src="/sun.png" className="sun" alt="light" />
                  <img src="/moon.svg" className="moon" alt="dark" />
                </label>
              </div>
              <a href="#github" className="github">
                <img src="/GitHub.png" alt="github"/>
              </a>
            </nav>
          </header>
        </div>
        <header className="mobile" style={{ backgroundColor: colorTheme.background }}>
          <div className="container">
            <input type="checkbox" id="checkbox-menu" ref={hamburger} />
            <label htmlFor="checkbox-menu" onClick={sanduIsOpen} >
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="logo">
            <Link href="/">
              <a>
                <img src={ colorTheme.logoLight } alt="logo" />
              </a>
            </Link>
          </div>
          <nav id="nav-mobile" className={isOpen === false ? "disable" : ""}>
            <Link href="/about">
              <a style={{ color: colorTheme.color }} >About</a>
            </Link>
            <a href="#" style={{ color: colorTheme.color }} >Donations</a>
            <div className="switch__container">
              <input
                id="switch-shadow"
                className="switch switch--shadow"
                type="checkbox"
                ref={themeInputMobile}
                defaultChecked={false}
              />
              <label htmlFor="switch-shadow" onClick={defineThemedDMobile}>
                <img src="/sun.png" className="sun" alt="light" />
                <img src="/moon.svg" className="moon" alt="dark" />
              </label>
            </div>
            <a href="#github" className="github">
              <img src="/GitHub.png" alt="github"/>
            </a>
          </nav>
        </header>
        <section className="monitoring padding">
          <div className="mento-responsive">
            <h1 className="title">
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
        <section className="about" style={{ backgroundColor: colorTheme.background }}>
          <h1>About the Koww Dev</h1>
          <p className="about-paragraph" style={{ color: colorTheme.colorP }} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor sit commodo
            vulputate nunc tellus, in etiam. Vestibulum dui pulvinar urna risus,
            vulputate felis mattis. Est sed ullamcorper sed amet enim aliquet ornare
            donec quis. Id aenean magna adipiscing nunc posuere lorem at vel molestie. 
          </p>
          <p className="about-paragraph" style={{ color: colorTheme.colorP }} >
            Ipsum arcu mauris semper nascetur orci id neque in. Eleifend viverra
            condimentum pellentesque diam sed congue orci etiam nunc. Nulla quis
            porttitor vulputate volutpat varius vitae.
          </p>
          <h2>More</h2>
          <img className="dashboard" src={ colorTheme.dashbordDark } alt="Dashboard" />
        </section>
        <footer style={{ backgroundColor:colorTheme.background }}>
          <div className="responsive-footer">
            <div className="container-logo-footer">
              <img src={ colorTheme.logoLight } alt="Koww"/>
            </div>
            <div className="development">
              <p style={{ color: colorTheme.colorExperienceP }} >Development</p>
              <a style={{ color: colorTheme.colorSegundary }} href="">About</a>
              <a style={{ color: colorTheme.colorSegundary }} href="">Team</a>
              <a style={{ color: colorTheme.colorSegundary }} href="">Contact</a>
            </div>
            <div className="contribute">
              <p style={{ color: colorTheme.colorExperienceP }} >Contribute</p>
              <a style={{ color: colorTheme.colorSegundary }} href="">Github</a>
              <a style={{ color: colorTheme.colorSegundary }} href="">Comunity</a>
              <a style={{ color: colorTheme.colorSegundary }} href="">Donations</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default pages;