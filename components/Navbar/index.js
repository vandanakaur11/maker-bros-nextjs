import Link from "next/link";
import Image from "next/image";
import LOGO from "./../../assets/IMAGES/HIPPO/06-07-HIPPO-TRANSPARENT-BLACK-NO GRASS.png";
import styles from "./Navbar.module.css";

const routes = [
  { path: "/work", text: "work" },
  { path: "/studio", text: "studio" },
  { path: "/contact", text: "contact" },
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/">
          <a>
            <Image src={LOGO} alt="Logo" width={200} height={80} />
          </a>
        </Link>
      </div>
      <ul className={styles.menu_bar}>
        {/* <Image src={LOGO} alt="Logo" width={200} height={80} /> */}
        {routes.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>
              <a className="link text_capitalize">{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
