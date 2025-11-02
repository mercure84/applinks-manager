import { Metadata } from "next";
import { AppLinkNavigator } from "../components/AppLinknavigator";
import { appDescriptions, DescriptionType } from "../constants/allApps";

const app = appDescriptions.find(
  (item) => item.id === "phonebenchinfo"
) as DescriptionType;

export const metadata: Metadata = {
  title: "Phone Bench Info",
  description:
    "Découvrez Phone Bench Info, l'application pour obtenir des informations détaillées sur les performances et les spécifications de votre téléphone!",
  openGraph: {
    images: { url: app.appIcon.src },
  },
};

export default function PhoneBenchInfoLinks() {
  return <AppLinkNavigator app={app} />;
}
