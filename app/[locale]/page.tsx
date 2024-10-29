import Link from "next/link";
import { ThemeProvider } from "next-themes";
import initTranslations from "../i18n";
import Greet from "@/components/Greet";
import TranslationsProvider from "@/components/TranslationProvider";
import ThemeChanger from "@/components/ThemeChanger";
import ThemeProviderContainer from "@/components/ThemeProvider";

const nameSpace = ["home"];

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, nameSpace);
  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={nameSpace}>
        <ThemeProviderContainer>
          <div className="antialiased font-sans h-full w-full bg-th-background text-th-primary-dark">
            <ThemeChanger />
            <div className="m-auto">
              <h1 className="text-center text-th-accent-medium ">
                {t("welcome")}
              </h1>
            </div>
            <main>
              <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 bg-th-background">
                <div className="relative max-w-7xl mx-auto">
                  <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-th-accent-medium sm:text-4xl">
                      From the blog
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsa libero labore natus atque, ducimus sed.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </ThemeProviderContainer>
      </TranslationsProvider>
    </>
  );
}
