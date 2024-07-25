"use client";

const dictionaries: any = {
  en: () => import("./en.json").then((module) => module.default),
  ko: () => import("./ko.json").then((module) => module.default),
};

export class LanguageProvider {
  static getDictionary = async (locale?: string) =>
    dictionaries[locale ?? "en"]();
}
