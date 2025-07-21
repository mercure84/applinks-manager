import { Metadata } from "next";
import { AppLinkNavigator } from "../components/AppLinknavigator";
import { appDescriptions, DescriptionType } from "../constants/allApps";

const app = appDescriptions.find(
  (item) => item.id === "catselfie"
) as DescriptionType;

export const metadata: Metadata = {
  title: "AI SnapForge",
  description:
    "Turn photos into art with AI styles like Toon Me, Starter Pack and more !!",
  openGraph: {
    images: { url: app.appIcon.src },
  },
};

export default function SnapForgeLinks() {
  return <AppLinkNavigator app={app} />;
}
