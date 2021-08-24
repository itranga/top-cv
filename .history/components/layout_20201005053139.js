import React, { useEffect, useState } from "react";

import Link from "next/link";
import Head from "next/head";
import Amplify, { API, graphqlOperation } from "aws-amplify";

import { createTodo } from "../src/graphql/mutations";
import { listTodos } from "../src/graphql/queries";
import awsExports from "../src/aws-exports";
Amplify.configure(awsExports);

const initialState = { name: "", description: "" };

export default function Layout({
  children,
  title = "This is the default title",
}) {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

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

        <link href="static/css/styles.css" rel="stylesheet" />

        <link rel="icon" href="static/images/favicon.png" />
      </Head>

      <div data-spy="scroll" data-target=".fixed-top">
        <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
          <Link href="/">
            <a className="navbar-brand logo-image color">
              <img src="/static/images/logo-color.svg" alt="alternative" />
            </a>
          </Link>
          <Link href="/">
            <a className="navbar-brand logo-image white">
              <img src="/static/images/logo-white.svg" alt="alternative" />
            </a>
          </Link>

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
                <Link href="/">
                  <a className="nav-link page-scroll">
                    HOME <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services">
                  <a className="nav-link page-scroll">SERVICES</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link page-scroll" href="#contact">
                    CONTACT
                  </a>
                </Link>
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
                          defaultValue={"Basic"}
                          required
                        >
                          <option className="select-option" value="" disabled>
                            Select Package
                          </option>
                          <option
                            className="select-option"
                            value="Information Technology"
                          >
                            Information Technology
                          </option>
                          <option
                            className="select-option"
                            value="Agriculture, Food and Natural Resources"
                          >
                            Agriculture, Food and Natural Resources
                          </option>
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control-input"
                          type="file"
                          id="docpicker"
                          accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        />

                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          className="form-control-submit-button"
                        >
                          Submit
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

        <footer>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-col">
                    <h4>About Juno</h4>
                    <p>
                      We're passionate about offering the best human resource
                      services to our customers
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-col middle">
                    <h4>Important Links</h4>
                    <ul className="list-unstyled li-space-lg">
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">
                          Our business partners
                          <a className="orange" href="#your-link">
                            startupguide.com
                          </a>
                        </div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">
                          Read our
                          <a className="orange" href="terms-conditions.html">
                            Terms & Conditions
                          </a>
                          ,
                          <a className="orange" href="privacy-policy.html">
                            Privacy Policy
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-col last">
                    <h4>Social Media</h4>
                    <span className="fa-stack">
                      <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                      </a>
                    </span>
                    <span className="fa-stack">
                      <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                      </a>
                    </span>
                    <span className="fa-stack">
                      <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-google-plus-g fa-stack-1x"></i>
                      </a>
                    </span>
                    <span className="fa-stack">
                      <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x"></i>
                      </a>
                    </span>
                    <span className="fa-stack">
                      <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-linkedin-in fa-stack-1x"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <script src="/static/js/jquery.min.js"></script>
      <script src="/static/js/bootstrap.min.js"></script>
      <script src="/static/js/scripts.js"></script>
    </div>
  );
}
