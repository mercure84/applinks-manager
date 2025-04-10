import { Metadata } from "next";
import { AppLinkNavigator } from "../components/AppLinknavigator";
import { appDescriptions, DescriptionType } from "../constants/allApps";

const app = appDescriptions.find(
  (item) => item.id === "catselfie"
) as DescriptionType;

export const metadata: Metadata = {
  title: "Cat Selfie",
  description: "Capture your cat's attention and share wonderful pictures !",
  openGraph: {
    images: { url: app.appIcon.src },
  },
};

export default function CatSelfieLinks() {
  return <AppLinkNavigator app={app} />;
}
