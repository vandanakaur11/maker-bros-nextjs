import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

const Card = ({ path, text, url }) => {
  return (
    <div className={styles.card}>
      <Link href={url}>
        <a className="link">
          <div className={styles.imgStyle}>
            <Image
              src={path}
              layout="responsive"
              objectFit="cover"
              alt={`${text} image`}
              quality={100}
            />
          </div>
          <h2 className={`${styles.heading} text_capitalize`}>{text}</h2>
        </a>
      </Link>
    </div>
  );
};

export default Card;
