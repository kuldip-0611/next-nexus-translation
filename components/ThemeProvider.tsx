"use client";

import { ThemeProvider } from "next-themes";

const ThemeProviderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
