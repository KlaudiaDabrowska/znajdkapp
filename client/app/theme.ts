import { Nunito } from "next/font/google";

import { createTheme } from "@mantine/core";

import type { MantineColorsTuple } from "@mantine/core";

export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const brandBlue: MantineColorsTuple = [
  "#e6f7ff",
  "#d0eaff",
  "#9fd3fc",
  "#6cbcfb",
  "#45a7fa",
  "#309afa",
  "#2394fb",
  "#1580e0",
  "#0078d4",
  "#0062b2",
];

const brandOrange: MantineColorsTuple = [
  "#fff1e1",
  "#ffe1cb",
  "#ffc299",
  "#ffa163",
  "#ff8a3d",
  "#ff7418",
  "#ff6a06",
  "#e45900",
  "#cc4e00",
  "#b24100",
];

export const theme = createTheme({
  colors: {
    brandBlue,
    brandOrange,
  },
  primaryColor: "brandBlue",
  fontFamily: nunito.style.fontFamily,
  breakpoints: {
    xs: "30em", // 480px
    sm: "48em", // 768px
    md: "64em", // 1024px
    lg: "74em", // 1184px
    xl: "90em", // 1440px
  },
  headings: {
    fontFamily: nunito.style.fontFamily,
    fontWeight: "700",
    sizes: {
      h1: {
        fontSize: "clamp(28px, 4vw, 42px)",
      },
      h2: {
        fontSize: "clamp(22px, 3vw, 32px)",
      },
      h3: {
        fontSize: "clamp(18px, 2.5vw, 24px)",
      },
    },
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
});
