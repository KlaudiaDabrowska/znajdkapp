"use client";

import { Container, Title, Text, Card, Group } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconPhone } from "@tabler/icons-react";
import classes from "./FoundSection.module.css";
import "@mantine/carousel/styles.css";
import hero from "../../public/hero.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    city: "Warszawa",
    time: "2 godz. temu",
    phone: "987 654 321",
    image: hero,
  },
  {
    id: 2,
    city: "Kraków",
    time: "4 godz. temu",
    phone: "123 123 456",
    image: hero,
  },
  {
    id: 3,
    city: "Gdańsk",
    time: "5 godz. temu",
    phone: "556 778 432",
    image: hero,
  },
  {
    id: 4,
    city: "Poznań",
    time: "1 godz. temu",
    phone: "600 700 800",
    image: hero,
  },
];

export const FoundSection = () => {
  return (
    <section className={classes.wrapper}>
      <Container size="lg">
        <Title order={2} className={classes.title}>
          Dzisiaj znalezione
        </Title>

        <Carousel
          withControls
          withIndicators
          className={classes.carousel}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
        >
          {data.map((item) => (
            <Carousel.Slide key={item.id}>
              <Card radius="xl" className={classes.card}>
                <Card.Section className={classes.imageWrapper}>
                  <Image src={item.image} alt={item.city} className={classes.image} fill />
                </Card.Section>

                <div className={classes.cardContent}>
                  <Text fw={600} size="lg">
                    {item.city}
                  </Text>

                  <Text size="sm" c="dimmed">
                    {item.time}
                  </Text>

                  <Group gap={6} mt="sm">
                    <IconPhone size={16} color="#0078D4" />
                    <Text size="sm">{item.phone}</Text>
                  </Group>
                </div>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};
