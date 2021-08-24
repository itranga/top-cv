import Link from "next/link";
import Head from "next/head";

export default function Layout({
  children,
  title = "This is the default title",
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta
          name="description"
          content="Juno multipurpose HTML landing page pack helps you easily create websites for businesses, mobile apps, events, training courses and many more."
        />
        <meta name="author" content="Inovatik" />

        <meta property="og:site_name" content="" />
        <meta property="og:site" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="article" />

        <title>Juno - Multipurpose Landing Page Pack</title>

        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,400i,700,700i&amp;subset=latin-ext"
          rel="stylesheet"
        />
        <link href="static/css/bootstrap.css" rel="stylesheet" />
        <link href="static/css/fontawesome-all.css" rel="stylesheet" />
        <link href="static/css/swiper.css" rel="stylesheet" />
        <link href="static/css/magnific-popup.css" rel="stylesheet" />
        <link href="static/css/styles.css" rel="stylesheet" />

        <link rel="icon" href="static/images/favicon.png" />
      </Head>
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>

      <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
        <a className="navbar-brand logo-image color" href="index-2.html">
          <img src="images/logo-color.svg" alt="alternative" />
        </a>
        <a className="navbar-brand logo-image white" href="index-2.html">
          <img src="images/logo-white.svg" alt="alternative" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#header">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#services">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#details">
                DETAILS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#pricing">
                PRICING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#projects">
                PROJECTS
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle page-scroll"
                href="#about"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ABOUT
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="project-details.html">
                  <span className="item-text">PROJECT DETAILS</span>
                </a>
                <div className="dropdown-items-divide-hr"></div>
                <a className="dropdown-item" href="terms-conditions.html">
                  <span className="item-text">TERMS CONDITIONS</span>
                </a>
                <div className="dropdown-items-divide-hr"></div>
                <a className="dropdown-item" href="privacy-policy.html">
                  <span className="item-text">PRIVACY POLICY</span>
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
          <span className="nav-item social-icons">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x facebook"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x twitter"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
          </span>
        </div>
      </nav>

      {children}

      <footer>{"I`m here to stay"}</footer>
    </div>
  );
}
