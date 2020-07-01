import Document, { Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render () {
    return (
      <html>
      <Head>
        <head><title>Example Site</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossOrigin="anonymous"/>
        </head>
      </Head>
      <body>
      <div className="container">
        <Main/>
      </div>
      <NextScript/>
      </body>
      </html>
    );
  }
}

export default CustomDocument;
