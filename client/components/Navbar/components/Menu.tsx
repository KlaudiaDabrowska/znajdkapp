import Link from "next/link";
import classes from "../Navbar.module.css";

export const Menu = () => {
  return (
    <>
      <Link href="/" className={classes.link}>
        Zaginione
      </Link>
      <Link href="/" className={classes.link}>
        Znalezione
      </Link>
    </>
  );
};
