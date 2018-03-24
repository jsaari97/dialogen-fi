import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title} = this.props;
    return (
      <div className="vh-90 pt3 flex justify-center items-center relative overflow-hidden top-shadow">

        <div className="z-1 tc ph2">
          <h1 className="f2 fw9 f1-l b di lh-title mb3 white ts">
            {title}
          </h1>
        </div>

        <a className="z-1 bottom-0 mb5 mb6-m pa4 absolute fw9 btn shadow-2 raise" href="#kontakt">Ta kontakt</a>

        {image && (
          <div
            className="rellax bg-center cover absolute left-0 top-0 right-0 bottom-0 f-bd"
            style={{backgroundImage: `url(${image})`}}
          />
        )}
      </div>
    );
  }
}
