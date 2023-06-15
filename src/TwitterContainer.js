import React, { useEffect } from "react";
import "./TwitterContainer.css"

const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <a
          overflow= "auto"
          className="twitter-timeline"
          data-theme="default"
          data-tweet-limit="5"
          data-chrome="noheader nofooter noborders"
          width="600px"
          height="290px"
          border-radius="20px"
          href="https://twitter.com/MPNaveenJindal?ref_src=twsrc%5Etfw"
        >
          Tweets by MPNaveenJindal
        </a>
      </div>
    </section>
  );
};

export default TwitterContainer;