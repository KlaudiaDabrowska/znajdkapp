import Link from "next/link";
import classes from "../Navbar.module.css";
import { Box } from "@mantine/core";

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
