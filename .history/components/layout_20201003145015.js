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

      {children}

      <footer>{"I`m here to stay"}</footer>
    </div>
  );
}
