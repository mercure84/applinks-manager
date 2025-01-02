"use client";
import { appDescriptions, DescriptionType } from "../page";
import { AppLinkNavigator } from "../components/AppLinknavigator";

export default function CatSelfieLinks() {
  const app = appDescriptions.find(
    (item) => item.id === "catselfie"
  ) as DescriptionType;
  return <AppLinkNavigator app={app} />;
}
