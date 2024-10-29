"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Greet = () => {
  const { t } = useTranslation();
  const name = "kuldip";
  return <div>{t("hello", { name })}</div>;
};

export default Greet;
