import React from "react";
import Radium from "radium";
import myColors from "../../assets/color";

const style: Radium.StyleRules = {
  root: {
    display: "flex",
    flexDirection: "column",
  },
  socialmedia: {
    fontSize: "4rem",
    margin: 0,
    padding: 0,
  },
  list: {
    listStyle: "none",
    textAlign: "center",
    margin: 0,
    padding: 0,
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    gap: "1rem",
  },
  item: {
  },
  link: {
    color: "white",
    textDecoration: "none",
    textTransform: "uppercase",
    display: "inline-block",
    ":hover": {
      color: myColors.greenColor,
    },
    ":active": {
      color: myColors.greenColor,
    },
  },
  copyright: {
    margin: 0,
    padding: 0,
    borderTop: "3px solid white",
  },
  copyrightParagraph: {
    margin: 0,
  }
};


function SocialMediaBox() {
  return (
    <Radium.StyleRoot>
      <div style={style.root}>
        <div key={0} style={style.socialmedia}>
          <ul key={1} style={style.list}>
            <li key="facebook" style={style.item}>
              <a key={2} href="https://www.facebook.com/meninasdoceirass/" style={style.link}>
                <i className="feature-box__icon fa fa-facebook"></i>
              </a>
            </li>
            <li key="twitter" style={style.item}>
              <a key={3} href="/" style={style.link}>
                <i className="feature-box__icon fa fa-twitter"></i>
              </a>
            </li>
            <li key="whatsapp" style={style.item}>
              <a key={4} href="/" style={style.link}>
                <i className="feature-box__icon fa fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div key={5} style={style.copyright}>
          <p key={6} style={style.copyrightParagraph}>
            Built by&nbsp;
            <a href="/" key={7} style={style.link}>
              Fabrício Bracht.&nbsp;
            </a>
            Copyright&copy; by Fabrício Bracht
          </p>
        </div>
      </div>
    </Radium.StyleRoot>);
}


function FooterSocialMedia() {
  return (<SocialMediaBox></SocialMediaBox>);
}

export default Radium(FooterSocialMedia);