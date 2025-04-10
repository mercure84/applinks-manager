import { Metadata } from "next";
import { AppLinkNavigator } from "../components/AppLinknavigator";
import { appDescriptions, DescriptionType } from "../constants/allApps";

const app = appDescriptions.find(
  (item) => item.id === "log4aqua"
) as DescriptionType;

export const metadata: Metadata = {
  title: "Log4Aqua",
  description: "Découvrez Log4Aqua, l'application de suivi d'aquarium!",
  openGraph: {
    images: { url: app.appIcon.src },
  },
};

export default function Log4AquaLinks() {
  return <AppLinkNavigator app={app} />;
}
