"use client";
import { AppLinkNavigator } from "../components/AppLinknavigator";
import { appDescriptions, DescriptionType } from "../constants/allApps";

export default function CatSelfieLinks() {
  const app = appDescriptions.find(
    (item) => item.id === "catselfie"
  ) as DescriptionType;
  return <AppLinkNavigator app={app} />;
}
