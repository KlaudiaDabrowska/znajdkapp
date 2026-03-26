"use client";

import { Box, Burger, Divider, Drawer, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "./components/Menu";
import { SignInButtons } from "./components/SignInButtons";
import Link from "next/link";

const Logo = () => <Image src={logo} width={200} height={100} alt="Logo" />;

export const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const pathname = usePathname() || "";
  const showOnlyLogo = pathname === "/login" || pathname === "/register";

  if (showOnlyLogo) {
    return (
      <header>
        <Box h="100%" mx="lg">
          <Link href="/">
            <Logo />
          </Link>
        </Box>
      </header>
    );
  }

  return (
    <Box>
      <header>
        <Group justify="space-between" h="100%" mx="lg">
          <Link href="/">
            <Logo />
          </Link>
          <Group h="100%" gap={30} visibleFrom="sm">
            <Menu />
          </Group>
          <Group visibleFrom="sm">
            <SignInButtons />
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="60%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
        closeOnClickOutside
      >
        <Divider my="sm" />
        <Box className={classes.menuWrapper}>
          <Menu />
        </Box>
        <Divider my="sm" />
        <Group justify="center" grow pb="xl" px="md">
          <SignInButtons />
        </Group>
      </Drawer>
    </Box>
  );
};
