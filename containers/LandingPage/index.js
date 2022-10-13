import { Fragment } from "react";
import GRANDVIEWWOODLANDSRENOVATIONIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-GrandviewWoodlandsRenovation-06.jpeg";
import GREENLAKEHOUSEIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-GreenLakeHouse-01.jpeg";
import HASTINGSSUNRISESTUDIOIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-HastingsSunriseStudio-01.jpeg";
import IAMOTAIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-iamota-01.jpeg";
import INTERSECTIONIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-InterSection-03.jpeg";
import MUSICSHEDIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-MusicShed-04.jpeg";
import POINTGREYLANEWAYIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-PointGreyLaneway-11.jpeg";
import SOOKEHOUSEIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-SookeHouse-01.jpeg";
import THEBRICKHOUSEIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-The+Brick+House-01.jpeg";
import TWORIVERSMEATIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-TwoRiversMeat-02.jpeg";
import ZACATITOS01IMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-Zacatitos01-04.jpeg";
import ZACATITOS03IMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-Zacatitos03-02.jpeg";
import ZACATITOS04IMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-Zacatitos04-03.jpeg";
import CAMPOSSTUDIOYEWHOUSE02IMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudioYewHouse02.jpeg";
import ENROUTEIMAGE from "./../../assets/IMAGES/HOME_WORK/enroute.jpeg";
import BLACAMPOSCOLLINGWOODIMAGE from "./../../assets/IMAGES/HOME_WORK/LAP0400_blaCamposCollingwood_0084_Screen.jpeg";
import SOOKE02IMAGE from "./../../assets/IMAGES/HOME_WORK/sooke02.jpeg";
import Card from "./../../components/Card";
import styles from "./LandingPage.module.css";

const cards = [
  { name: SOOKEHOUSEIMAGE, text: "sooke 01", url: "/work/project-name" },
  {
    name: POINTGREYLANEWAYIMAGE,
    text: "point grey laneway",
    url: "/work/project-name",
  },
  { name: ENROUTEIMAGE, text: "enroute", url: "/work/project-name" },
  {
    name: BLACAMPOSCOLLINGWOODIMAGE,
    text: "collingwood",
    url: "/work/project-name",
  },
  { name: ZACATITOS03IMAGE, text: "zacatitos 03", url: "/work/project-name" },
  {
    name: TWORIVERSMEATIMAGE,
    text: "two rivers meat",
    url: "/work/project-name",
  },
  {
    name: THEBRICKHOUSEIMAGE,
    text: "the brick house",
    url: "/work/project-name",
  },
  { name: MUSICSHEDIMAGE, text: "music shed", url: "/work/project-name" },
  {
    name: CAMPOSSTUDIOYEWHOUSE02IMAGE,
    text: "yew house",
    url: "/work/project-name",
  },
  { name: IAMOTAIMAGE, text: "iamota", url: "/work/project-name" },
  { name: ZACATITOS01IMAGE, text: "zacatitos 01", url: "/work/project-name" },
  { name: SOOKE02IMAGE, text: "sooke 02", url: "/work/project-name" },
  {
    name: GREENLAKEHOUSEIMAGE,
    text: "green lake house",
    url: "/work/project-name",
  },
  {
    name: HASTINGSSUNRISESTUDIOIMAGE,
    text: "hasting house studio",
    url: "/work/project-name",
  },
  { name: ZACATITOS04IMAGE, text: "zacatitos 04", url: "/work/project-name" },
  { name: INTERSECTIONIMAGE, text: "inter|section", url: "/work/project-name" },
  {
    name: GRANDVIEWWOODLANDSRENOVATIONIMAGE,
    text: "grandview renovation",
    url: "/work/project-name",
  },
];

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.startingText}>
        ARCHITECTURE INFORMED By
        <br /> CRITICAL REGIONALISM in the expanded field
      </div>
      {cards.map((item, index) => (
        <Fragment key={index}>
          <Card path={item.name} text={item.text} url={item.url} />
        </Fragment>
      ))}
    </div>
  );
};

export default LandingPage;
