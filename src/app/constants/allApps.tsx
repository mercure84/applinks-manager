import { StaticImageData } from "next/image";
import caltselfieIcon from "@/app/assets/catselfieicon.webp";
import mamieicon from "@/app/assets/mamieicon.webp";
import reefquizzicon from "@/app/assets/reeficon.webp";

export type DescriptionType = {
  order: number;
  id: "catselfie" | "mamiepaulette" | "reefquizz";
  androidUrl: string;
  iOSUrl: string;
  appIcon: StaticImageData;
  name: string;
  description: string;
};

export const appDescriptions: DescriptionType[] = [
  {
    order: 0,
    id: "catselfie",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.centropyge92.catselfie",
    iOSUrl: "https://apps.apple.com/fr/app/easy-catselfie/id6686406122",
    name: "Cat Selfie",
    description: "Capture your cat's attention!",
    appIcon: caltselfieIcon,
  },
  {
    order: 1,
    id: "mamiepaulette",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.centropyge92.mamiepaulettecooking",
    iOSUrl: "https://apps.apple.com/us/app/mamie-paulette-cooking/id6737452574",
    name: "Mamie Paulette Cooking",
    description: "The best cooking receipts !",
    appIcon: mamieicon,
  },
  {
    order: 2,
    id: "reefquizz",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.centropygebicolor.reefquizapp",
    iOSUrl: "https://apps.apple.com/fr/app/reef-quizz/id6670703823",
    name: "Reef quizz",
    description: "Test your reef knowledges !",
    appIcon: reefquizzicon,
  },
];
