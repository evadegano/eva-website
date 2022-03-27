import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap"
            rel="stylesheet"
          />

          <meta property="og:title" content="Eva Degano | Portfolio" />
          <meta name="image" property="og:image" content={"/images/social-preview.png"} />
          <meta property="og:url" content="www.evadegano.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Full Stack Developer / Python, JavaScript (ES6) & TypeScript, MongoDB, Express, React, NodeJS, HTML & CSS"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument