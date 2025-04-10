import { Metadata } from "next";
import { AppLinkNavigator } from "../components/AppLinknavigator";
import { appDescriptions, DescriptionType } from "../constants/allApps";

const app = appDescriptions.find(
  (item) => item.id === "reefquizz"
) as DescriptionType;

export const metadata: Metadata = {
  title: "Reef Quizz",
  description: "Découvrez Reefquizz, l'application de quiz récifal!",
  openGraph: {
    images: { url: app.appIcon.src },
  },
};

export default function ReefQuizzLinks() {
  return <AppLinkNavigator app={app} />;
}
