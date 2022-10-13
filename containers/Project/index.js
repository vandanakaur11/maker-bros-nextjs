import Image from "next/image";
import { Fragment, useState } from "react";
import Card from "../../components/Card";
import Arrow from "./../../assets/ICONS/external_link.png";
import GRANDVIEWWOODLANDSRENOVATIONIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-GrandviewWoodlandsRenovation-06.jpeg";
import GREENLAKEHOUSEIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-GreenLakeHouse-01.jpeg";
import HASTINGSSUNRISESTUDIOIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-HastingsSunriseStudio-01.jpeg";
import IAMOTAIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-iamota-01.jpeg";
import INTERSECTIONIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-InterSection-03.jpeg";
import MUSICSHEDIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-MusicShed-04.jpeg";
import THEBRICKHOUSEIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-The+Brick+House-01.jpeg";
import TWORIVERSMEATIMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-TwoRiversMeat-02.jpeg";
import ZACATITOS01IMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-Zacatitos01-04.jpeg";
import ZACATITOS04IMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudio-Zacatitos04-03.jpeg";
import CAMPOSSTUDIOYEWHOUSE02IMAGE from "./../../assets/IMAGES/HOME_WORK/CamposStudioYewHouse02.jpeg";
import SOOKE02IMAGE from "./../../assets/IMAGES/HOME_WORK/sooke02.jpeg";
import image3house from "./../../assets/IMAGES/PROJECTS/ZACATITOS 03/CamposStudio-Zacatitos03-01.jpeg";
import image4house from "./../../assets/IMAGES/PROJECTS/ZACATITOS 03/CamposStudio-Zacatitos03-02.jpeg";
import image5house from "./../../assets/IMAGES/PROJECTS/ZACATITOS 03/CamposStudio-Zacatitos03-07.jpeg";
import image2house from "./../../assets/IMAGES/PROJECTS/ZACATITOS 03/CamposStudio-Zacatitos03-09.jpeg";
import image6house from "./../../assets/IMAGES/PROJECTS/ZACATITOS 03/CamposStudio-Zacatitos03-10.jpeg";
import blueprint1 from "./../../assets/IMAGES/PROJECTS/ZACATITOS 03/Campos_Leckie_Studio_-_Zacatitos_03_-_02-Floor_Plan_copia.jpeg";
import styles from "./Project.module.css";

const cards = [
  {
    name: TWORIVERSMEATIMAGE,
    text: "two rivers meat",
    url: "/work/project-one",
  },
  {
    name: THEBRICKHOUSEIMAGE,
    text: "the brick house",
    url: "/work/project-two",
  },
  { name: MUSICSHEDIMAGE, text: "music shed", url: "/work/project-three" },
  {
    name: CAMPOSSTUDIOYEWHOUSE02IMAGE,
    text: "yew house",
    url: "/work/project-four",
  },
  { name: IAMOTAIMAGE, text: "iamota", url: "/work/project-five" },
  { name: ZACATITOS01IMAGE, text: "zacatitos 01", url: "/work/project-six" },
  { name: SOOKE02IMAGE, text: "sooke 02", url: "/work/project-seven" },
  {
    name: HASTINGSSUNRISESTUDIOIMAGE,
    text: "hasting house studio",
    url: "/work/project-eight",
  },
  {
    name: GREENLAKEHOUSEIMAGE,
    text: "green lake house",
    url: "/work/project-nine",
  },
  { name: ZACATITOS04IMAGE, text: "zacatitos 04", url: "/work/project-ten" },
  {
    name: INTERSECTIONIMAGE,
    text: "inter|section",
    url: "/work/project-eleven",
  },
  {
    name: GRANDVIEWWOODLANDSRENOVATIONIMAGE,
    text: "grandview renovation",
    url: "/work/project-twelve",
  },
];

const Project = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.imgWrapper}>
        <Image
          src={image2house}
          alt=""
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.audioWrap}>
        <div className={styles.audioHeading}>Zacatitos 03</div>
        <div className={styles.timingWrap}>
          <div className={styles.audioSubHeading}>
            Hear Campos Studio talk about this project
          </div>
          <div>(00:00 - 21:38)</div>
        </div>

        <div className={styles.audioText}>
          This project is the third of a series of desert dwelling prototypes
          that comprise an ongoing body of research into off-grid living in a
          relatively extreme climate. All three research sites are located in
          the remote community of Los Zacatitos, in Baja California Sur, Mexico.
        </div>

        {show && (
          <div className={styles.textSmooth}>
            Zacatitos 03 was designed as a formal expression of the local
            construction methodology - concrete-reinforced insulation panel
            system. The program elements are organized in a linear fashion
            across the sloping site in response to the orientation sun,
            direction of local prevailing breezes. The double line of panels was
            then shifted and laterally accommodate views, maximize ventilation,
            and protect against solar gain. This project was completed as Campos
            Leckie Studio.
          </div>
        )}
        {show && (
          <div className={styles.textSmooth}>
            <div className={styles.loadMoreContent}>
              <div className={styles.loadMoreContentHeading}>LOCATION</div>
              <div>Los Zacatitos, Baja California Sur, Mexico</div>
            </div>
            <div className={styles.loadMoreContent}>
              <div className={styles.loadMoreContentHeading}>YEAR</div>
              <div>2011</div>
            </div>
            <div className={styles.loadMoreContent}>
              <div className={styles.loadMoreContentHeading}>
                SQUARE FOOTAGE
              </div>
              <div>3800 ft2</div>
            </div>
            <div className={styles.loadMoreContent}>
              <div className={styles.loadMoreContentHeading}>TEAM</div>
              <div className={styles.teams}>
                <div>Javier Campos</div>
                <div>Malen Fernandez</div>
                <div>Ashley Gesner</div>
              </div>
            </div>
            <div className={styles.loadMoreContent}>
              <div className={styles.loadMoreContentHeading}>COLLABORATORS</div>
              <div>General Contractor: Boydco</div>
              <div>Project Photography: Ema Peter</div>
            </div>
          </div>
        )}
        <div onClick={() => setShow(!show)} className={styles.readMore}>
          {!show ? <div> READ MORE</div> : <div>READ LESS</div>}
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src={image3house}
          alt=""
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src={image4house}
          alt=""
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src={image5house}
          alt=""
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.twinWrap}>
        <div className={styles.twinWrapInner}>
          <Image
            src={image2house}
            alt=""
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.twinWrapInner}>
          <Image
            src={image2house}
            alt=""
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src={image6house}
          alt=""
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.bluePrintWrap}>
        <Image
          src={blueprint1}
          alt=""
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.bluePrintContentWrap}>
        <div className={styles.bluePrintContent}>
          <div>
            <div className={styles.text1}>Baja homes that catch a wind</div>
            <div className={styles.text2}>THE GLOBE AND MAIL</div>
          </div>
          <div className={styles.ArrowWrap}>
            <Image src={Arrow} alt="" height="25" width="25" quality={100} />
          </div>
        </div>
        <div className={styles.bluePrintContent}>
          <div>
            <div className={styles.text1}>House 004, Los Zacatitos</div>
            <div className={styles.text2}>WALLPAPER*</div>
          </div>
          <div className={styles.ArrowWrap}>
            <Image src={Arrow} alt="" height="25" width="25" quality={100} />
          </div>
        </div>
        <div className={styles.bluePrintContent}>
          <div>
            <div className={styles.text1}>Off-Grid in Z-Town</div>
            <div className={styles.text2}>CANADIAN ARCHITECT</div>
          </div>
          <div className={styles.ArrowWrap}>
            <Image src={Arrow} alt="" height="25" width="25" quality={100} />
          </div>
        </div>
      </div>
      {cards.map((item, index) => (
        <Fragment key={index}>
          <Card path={item.name} text={item.text} url={item.url} />
        </Fragment>
      ))}
    </div>
  );
};

export default Project;
