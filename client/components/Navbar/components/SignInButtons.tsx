import { Button, useMantineTheme } from "@mantine/core";

export const SignInButtons = () => {
  const theme = useMantineTheme();

  return (
    <>
      <Button
        style={{ borderColor: theme.colors.brandOrange[5] }}
        variant="outline"
        color="brandOrange"
      >
        Zaloguj się
      </Button>
      <Button color="brandOrange">Zarejestruj się</Button>
    </>
  );
};
