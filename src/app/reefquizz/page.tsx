"use client";
import { appDescriptions, DescriptionType } from "../page";
import { AppLinkNavigator } from "../components/AppLinknavigator";

export default function ReefQuizzLinks() {
  const app = appDescriptions.find(
    (item) => item.id === "reefquizz"
  ) as DescriptionType;
  return <AppLinkNavigator app={app} />;
}
