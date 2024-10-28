"use client";

import Link from "next/link";
import initTranslations from "../i18n";
import Greet from "@/components/Greet";
import TranslationsProvider from "@/components/TranslationProvider";

const nameSpace = ["home"];

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params: { locale } }: HomeProps) {
  const { t, resources } = await initTranslations(locale, nameSpace);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={nameSpace}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>{t("welcome")}</h1>
        <Greet />
        <Link href={"/about-us"}>About Us</Link>
      </div>
    </TranslationsProvider>
  );
}
