import React, { useEffect } from "react";
function GoogleAds(props) {
  const { currentPath } = props;
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);
  return (
    <ins
      class="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="fluid"
      data-ad-layout-key="-Yo-ur-la-yo-ut-ke-y"
      data-ad-client="Yo-ur-ad-client-id"
      data-ad-slot={props.slot}
      data-full-width-responsive="true"
    ></ins>
  );
}
export default GoogleAds;
