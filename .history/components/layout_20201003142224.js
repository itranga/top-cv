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

        <meta charset="utf-8" />
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
        <link href="css/bootstrap.css" rel="stylesheet" />
        <link href="css/fontawesome-all.css" rel="stylesheet" />
        <link href="css/swiper.css" rel="stylesheet" />
        <link href="css/magnific-popup.css" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />

        <link rel="icon" href="images/favicon.png" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer>{"I`m here to stay"}</footer>
    </div>
  );
}
