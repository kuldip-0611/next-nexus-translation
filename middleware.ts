import { NextRequest } from "next/server";
import i18Config from "./i18n.config";
import { i18nRouter } from "next-i18n-router";

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18Config);
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
