"use client";

import { Button, Container, Title, Text, Group } from "@mantine/core";
import { IconPaw, IconSearch } from "@tabler/icons-react";
import classes from "./HeroSection.module.css";
import Image from "next/image";
import hero from "../../public/hero.png";

export const HeroSection = () => {
  return (
    <section className={classes.wrapper}>
      <Container size="lg" className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Znajdź swojego przyjaciela!</Title>

          <Text className={classes.description}>
            Znajdź lub zgłoś zaginione zwierzę w okolicy.
          </Text>

          <Group mt="xl" className={classes.buttons}>
            <Button
              size="lg"
              radius="xl"
              leftSection={<IconPaw size={20} />}
              className={classes.primaryButton}
            >
              Zaginął
            </Button>

            <Button
              size="lg"
              radius="xl"
              leftSection={<IconSearch size={20} />}
              className={classes.secondaryButton}
            >
              Znalazłem
            </Button>
          </Group>
        </div>

        <div className={classes.imageWrapper}>
          <Image src={hero} alt="heroImage" className={classes.image} />
        </div>
      </Container>
    </section>
  );
};
