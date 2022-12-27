import React from "react";
import PropTypes from "prop-types";
import GoogleAds from "./GoogleAds";

export default class HTML extends React.Component {
  render() {
    const ads = process.env.NODE_ENV === "production" && (
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    );

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#fff" />
          {ads && ads}
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          <GoogleAds slot="2434444" />
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
