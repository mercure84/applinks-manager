"use client";
import { AppLinkNavigator } from "../components/AppLinknavigator";
import { appDescriptions, DescriptionType } from "../constants/allApps";

export default function ReefQuizzLinks() {
  const app = appDescriptions.find(
    (item) => item.id === "reefquizz"
  ) as DescriptionType;
  return <AppLinkNavigator app={app} />;
}
