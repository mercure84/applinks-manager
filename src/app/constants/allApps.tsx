import { StaticImageData } from "next/image";
import caltselfieIcon from "@/app/assets/catselfieicon.webp";
import mamieicon from "@/app/assets/mamieicon.webp";
import reefquizzicon from "@/app/assets/reeficon.webp";
import log4AquaIcon from "@/app/assets/log4aqua.png";
import aisnapforgeIcon from "@/app/assets/aisnapforgeIcon.png";
import phoneBenchInfoIcon from "@/app/assets/phonebenchicon.png";

export type DescriptionType = {
  order: number;
  id:
    | "catselfie"
    | "mamiepaulette"
    | "reefquizz"
    | "log4aqua"
    | "aisnapforge"
    | "phonebenchinfo";
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
  {
    order: 3,
    id: "log4aqua",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.centropyge92.log4aqua",
    iOSUrl: "https://apps.apple.com/fr/app/log4aqua/id6741111679",
    name: "Log4Aqua",
    description: "A complete log for your aquarium",
    appIcon: log4AquaIcon,
  },
  {
    order: 4,
    id: "aisnapforge",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.centropyge92.pictureai",
    iOSUrl: "https://apps.apple.com/fr/app/ai-snapforge/id6747779333",
    name: "AI SnapForge",
    description:
      "Turn photos into art with AI styles like Toon Me, Starter Pack and more !!",
    appIcon: aisnapforgeIcon,
  },
  {
    order: 5,
    id: "phonebenchinfo",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.centropyge92.phonebenchinfo",
    iOSUrl: "https://apps.apple.com/fr/app/phone-bench-info/id6753959438",
    name: "Phone Bench Info",
    description:
      "Get detailed information about your phone's performance and specifications.",
    appIcon: phoneBenchInfoIcon,
  },
];
