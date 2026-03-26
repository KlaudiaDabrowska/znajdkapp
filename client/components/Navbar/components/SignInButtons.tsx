import { Button, useMantineTheme } from "@mantine/core";
import Link from "next/link";

export const SignInButtons = () => {
  const theme = useMantineTheme();

  return (
    <>
      <Button
        style={{ borderColor: theme.colors.brandOrange[5] }}
        variant="outline"
        color="brandOrange"
        component={Link}
        href="/login"
      >
        Zaloguj się
      </Button>
      <Button color="brandOrange" component={Link} href="/register">
        Zarejestruj się
      </Button>
    </>
  );
};
