import { Metadata } from "next";
import { AppLinkNavigator } from "../components/AppLinknavigator";
import { appDescriptions, DescriptionType } from "../constants/allApps";

const app = appDescriptions.find(
  (item) => item.id === "mamiepaulette"
) as DescriptionType;

export const metadata: Metadata = {
  title: "Mamie Paulette Cooking",
  description:
    "Découvrez Mamie Paulette Cooking, l'application des meilleures recettes de cuisine!",
  openGraph: {
    images: { url: app.appIcon.src },
  },
};

export default function MamiePauletteLinks() {
  return <AppLinkNavigator app={app} />;
}
