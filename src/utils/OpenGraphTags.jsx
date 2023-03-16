import React from "react";
const OpenGraphTags = () => {
  return <React.Fragment>
      <meta property="og:url" content="https://skynship.com" />
      {/* thumbnail And title for social media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Skyndrop marketplace curated by estheticians" />
      <meta property="og:description" content="Skynship drop, marketplace curated by estheticians. Online store selling products made by estheticians" />
      <meta property="og:image" content="/assets/images/landing/preview.png" />
    </React.Fragment>;
};
export default OpenGraphTags;