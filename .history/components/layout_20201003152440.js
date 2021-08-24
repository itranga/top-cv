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
      {/* <div className="spinner-wrapper">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div> */}

      <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
        <a className="navbar-brand logo-image color" href="index-2.html">
          <img src="/static/images/logo-color.svg" alt="alternative" />
        </a>
        <a className="navbar-brand logo-image white" href="index-2.html">
          <img src="/static/images/logo-white.svg" alt="alternative" />
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

      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-container">
                  <h1 className="h1-large">BUSINESS LANDING PAGE</h1>
                  <p className="p-large">
                    Use Juno business landing page to create an efficient and
                    memorable online presence for your startup company
                  </p>
                  <a className="btn-outline-lg page-scroll" href="#services">
                    DISCOVER
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-container">
                  <form
                    id="getQuoteForm"
                    data-toggle="validator"
                    data-focus="false"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control-input"
                        id="gname"
                        name="gname"
                        required
                      />
                      <label className="label-control" htmlFor="gname">
                        Name
                      </label>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control-input"
                        id="gemail"
                        name="gemail"
                        required
                      />
                      <label className="label-control" htmlFor="gemail">
                        Email
                      </label>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control-input"
                        id="gphone"
                        name="gphone"
                        required
                      />
                      <label className="label-control" htmlFor="gphone">
                        Phone
                      </label>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control-select"
                        id="gselect"
                        required
                      >
                        <option
                          className="select-option"
                          value=""
                          disabled
                          selected
                        >
                          Select Package
                        </option>
                        <option className="select-option" value="Basic">
                          Basic
                        </option>
                        <option className="select-option" value="Complete">
                          Complete
                        </option>
                      </select>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group checkbox">
                      <input
                        type="checkbox"
                        id="gterms"
                        value="Agreed-to-Terms"
                        name="gterms"
                        required
                      />
                      I agree to Juno's{" "}
                      <a href="privacy-policy.html">Privacy Policy</a> and{" "}
                      <a href="terms-conditions.html">Terms & Conditions</a>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control-submit-button"
                      >
                        GET QUOTE
                      </button>
                    </div>
                    <div className="form-message">
                      <div
                        id="gmsgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer>{"I`m here to stay"}</footer>

      <script src="/static/js/jquery.min.js"></script>
      <script src="/static/js/popper.min.js"></script>
      <script src="/static/js/bootstrap.min.js"></script>
      <script src="/static/js/jquery.easing.min.js"></script>
      <script src="/static/js/swiper.min.js"></script>
      <script src="/static/js/jquery.magnific-popup.js"></script>
      <script src="/static/js/isotope.pkgd.min.js"></script>
      <script src="/static/js/validator.min.js"></script>
      <script src="/static/js/scripts.js"></script>
    </div>
  );
}
