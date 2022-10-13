import styles from "./Contact.module.css"
import imageRoom from "./../../assets/IMAGES/STUDIO_CONTACT/IMG_5740.jpg"
import Image from "next/image";


const Contact=()=>{
    return(
        <div className={styles.main}>
            <div className={styles.wrap}>
                <div className={styles.subHeading}>Say Hello</div>
                <div>Malen Fernandez</div>
                <div>mfernandez@camposstudio.ca</div>
                <div className={styles.emptySpace}></div>
                <div className={styles.wrapBottom}>
                    <div className={styles.text}>+ 1 604 558 1881</div>
                    <div className={styles.text}>1395 Odlum DriveVancouver,<br/> BC V5L 3M1 <br/>Canada</div>
                    <div className={styles.text}>Campos Studio is located in Vancouver British Columbia’s Strathcona neighborhood. Steered by a compact group of individuals, the studio maintains a vast body of work—including a variety of projects in architecture, public art, branding and product design. </div>
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.subHeading}>Publishing</div>
                <div className={styles.text}>Samantha Bush</div>
                <div className={styles.text}>sbush@camposstudio.ca</div>
                <div className={styles.emptySpace}></div>
                <div className={styles.wrapBottom}>
                    <Image  src={imageRoom}
              layout="responsive"
              objectFit="cover"
              alt={`no image`}
              quality={100}/>
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.subHeading}>Follow Along</div>
                <div className={styles.text}>For Campos Studio project releases</div>
                <div style={{visibility:"hidden"}}>sbush@camposstudio.ca</div>
                <div className={styles.emptySpace}></div>
                <div className={styles.wrapBottom}>
                    <div>
                        <div>Instagram</div>
                        <div>Pinterest</div>
                    </div>
                    <div>Site by Maker Brothers Worldwide</div>
                </div>
                
                </div>
        </div>
    )
}

export default Contact