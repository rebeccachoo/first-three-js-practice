import React from "react";

export default class HomePage extends React.Component {
  componentDidMount() {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-12121212"
        data-ad-slot="12121212"
        data-ad-format="auto"
      />
    );
  }
}
