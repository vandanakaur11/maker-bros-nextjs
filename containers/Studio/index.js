import Image from "next/image";
import styles from "./Studio.module.css"
import imageList from "./../../assets/IMAGES/STUDIO_CONTACT/Rectangle 160.png"
import imageRoom from "./../../assets/IMAGES/STUDIO_CONTACT/84989443-4a80-4dbc-91ff-62956fb55457.JPG"
import dropArrow from "./../../assets/ICONS/Vector 7.png"
import Xavier from "./../../assets/IMAGES/TEAM PHOTOS/Javier Campos larger JC_JPEG.jpg"
import Czariyna from "./../../assets/IMAGES/TEAM PHOTOS/CZARIYNA.jpg"
import ImgWhiteshirt from "./../../assets/IMAGES/TEAM PHOTOS/IMG_8058.jpeg"
import ImgGreenshirt from "./../../assets/IMAGES/TEAM PHOTOS/IMG_8102.jpeg"
import ImgOliveshirt from "./../../assets/IMAGES/TEAM PHOTOS/IMG_8114.jpeg"
import ImgGoggle from "./../../assets/IMAGES/TEAM PHOTOS/SteffenTemporaryHeadshot.jpeg"
import ImgBlackshirt from "./../../assets/IMAGES/TEAM PHOTOS/MollieHeadshot.jpeg"
import ImgOffshirt from "./../../assets/IMAGES/TEAM PHOTOS/Samantha.jpeg"
import Imgblackshirt from "./../../assets/IMAGES/TEAM PHOTOS/IMG_8087.jpeg"
import ImgRedshirt from "./../../assets/IMAGES/TEAM PHOTOS/IMG_8093.jpeg"
import ImgOff2shirt from "./../../assets/IMAGES/TEAM PHOTOS/Juliette Villechange.jpg"
import ImgDog from "./../../assets/IMAGES/TEAM PHOTOS/IMG_5339.jpeg"



const Studio = () => {
  return <div className={styles.main}>
    <div className={styles.heading1}>Process</div>
    <div className={styles.imgWrapper}>
      <Image
        src={imageList}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div>
      <div className={styles.pressWrap}>
        <div className={styles.press}>Press</div>
        <div className={styles.dropIcon}><Image src={dropArrow} alt=""
          layout="responsive"
          objectFit="cover"
          quality={100} />
        </div>
      </div>
    </div>
    <div>
      <div className={styles.teamHeading}>Team</div>
      <div className={styles.imgWrap}>
        <div className={styles.imageWrapper}><Image
        src={Xavier}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div className={styles.imageWrapper}><Image
        src={Czariyna}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div className={styles.imageWrapper}><Image
        src={ImgWhiteshirt}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div className={styles.imageWrapper}><Image
        src={ImgGreenshirt}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div className={styles.imageWrapper}><Image
        src={ImgOliveshirt}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      </div>
      <div className={styles.imgWrap}>
        <div className={styles.imageWrapper}><Image
        src={ImgGoggle}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div className={styles.imageWrapper}><Image
        src={ImgBlackshirt}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"

      /></div>
      <div className={styles.imageWrapper}><Image
        src={ImgOffshirt}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div className={styles.imageWrapper}><Image
        src={Imgblackshirt}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div className={styles.imageWrapper}><Image
        src={ImgRedshirt}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      </div>
      <div className={styles.imgWrap}>
        <div className={styles.imageWrapper}><Image
        src={ImgOff2shirt}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div className={styles.imageWrapper}><Image
        src={ImgDog}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div style={{visibility:"hidden"}}><Image
        src={imageRoom}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div style={{visibility:"hidden"}}><Image
        src={imageRoom}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      <div style={{visibility:"hidden"}}><Image
        src={imageRoom}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
        height="100%"
        width="100%"
      /></div>
      </div>
    </div>
    <div className={styles.infoWrap}>
      <div className={styles.infoHeading}>Past Collaborators</div>
      <div className={styles.infoPara}>Regan Appleton, Romain Bael, Jacquelyn Bortolussi, Tom Chung, Sarah Cree, Jessie Croll, Paul Crowley, Alix Demontrond, Hande Ersoy, Adrien Fera, Mike Fugeta, Ashley Gesner,
        Matias T. Grez,  Maria Herrera, Paul Holley, Manuela Hurtavo, Arnold Jung, Zaid Kadhim, Nelly Lachman, Mario Lambraño, Michael Lis, Michael Lis, Colin Mbugua, Laura McMurran, David Morar, Juan David Moreno, Kate Richard, Clara Sabel, Jan Stretzlig, Bardia Tajik,
        Alex Vanderlee, Yiming Wang, Yanlan Wang, Loriane Wong, Britney Yan, Thomas Yuan,
        David Zeiben</div>
    </div>
    <div className={styles.imgWrapper}>
      <Image
        src={imageRoom}
        alt=""
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>;
};

export default Studio;
