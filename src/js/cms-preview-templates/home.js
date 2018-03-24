import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

const Icon = ({ icon }) => (
  <img src={icon} width="24px" height="24px" className="dib mr3 highlight o-80" />
)

export default class PostPreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return (
      <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])} />

        <div className="bg-white pt4">
          <div className="flex flex-column">
            {(entry.getIn(["data", "blurbs"]) || []).map((blurb, i) => (
              <div key={i} className="flex-auto tc pv5 ph3">
                <img src={getAsset(blurb.get("image"))} className="center db mb4 w-50 mw4" />
                <p className="grey-4 center ph2 ph5-m mw6-ns f5">{blurb.get("text")}</p>
              </div>
            ))}

            <div className="flex-auto tc pv5 mt5 bg-primary">
              <img src={getAsset(entry.getIn(["data", "info", "image"]))} className="center db mb5 mt4 mt6-m w-75 mw5 header" />
              <p className="white center ph3 ph4-m ph5-m mw6-ns">{entry.getIn(["data", "info", "text"])}</p>
            </div>
          </div>
        </div>

        <div className="bg-primary ph3-m w-100">
          <h3 className="tc pb3 pb4-m f4 f3-m white">Länkar</h3>
          <div className="center relative overflow-hidden flex flex-column flex-row-m justify-around items-center center mw7">
            {(entry.getIn(["data", "sections"]) || []).map((section, i) => (
              <div key={i} className="flex-auto bg-white tc br1 shadow-1 ma2 ma3-m overflow-hidden">
                <div className="bg-center cover h5" style={{ backgroundImage: getAsset(section.get("image")) && `url(${getAsset(section.get("image"))})` }} />
                <div className="pb4 pt3 ph2 ph4-m">
                  <h2 className="f4 mb2 black">{section.get("title")}</h2>

                  <p className="f6 grey-3 center">{section.get("text")}</p>

                  {section.get("link") && (
                    <div className="tc pb2">
                      <a className="primary f6 raise">{section.get("linkText")}</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary white ph2">
          <h3 className="tc pv4 pv5-m f4 f3-m">Frågor? Ta gärna kontakt!</h3>
          <div className="flex flex-wrap bg-white mw7 br1 overflow-hidden shadow-1 center">
            <ul className="grey-4 flex-auto w-100 w-50-ns">
              <li className="black pa3 divider tc fw9">Kontaktuppgifter</li>
              <li className="pa3 flex items-center divider">{entry.getIn(["data", "contact", "name"])}</li>
              <li className="pa3 flex items-center divider">{entry.getIn(["data", "contact", "address"])}</li>
              <li className="pa3 flex items-center divider">{entry.getIn(["data", "contact", "phone"])}</li>
              <li className="pa3 flex items-center">{entry.getIn(["data", "contact", "email"])}</li>
            </ul>
            <div className="bg-center cover flex-auto w-100 w-50-ns h5 h-auto-ns" style={{backgroundImage: "url('/img/map.jpg')"}} />
          </div>
        </div>

        <footer class="bg-primary ph3 pv4 white">

<div class="mw7 center pt3">
  <div class="measure-narrow center mb4">
    <img src="/img/logo.svg" alt="dialogen logo" class="db w4 center mb4 br0" />
  </div>

  <div className="flex justify-center">
    <div>
      <h3 className="f4 fw9 b lh-title mb2 white">Social media</h3>
      <ul className="mhn2 tc">
        {entry.getIn(["data", "facebook"]) && <Icon icon="/img/icons-facebook.svg" />}
        {entry.getIn(["data", "instagram"]) && <Icon icon="/img/icons-instagram.svg" />}
      </ul>
    </div>
  </div>
</div>

</footer>

      </div>
    );
  }
}
