"use client";
import { AppLinkNavigator } from "../components/AppLinknavigator";
import { appDescriptions, DescriptionType } from "../constants/allApps";

export default function MamiePauletteLinks() {
  const app = appDescriptions.find(
    (item) => item.id === "mamiepaulette"
  ) as DescriptionType;

  return <AppLinkNavigator app={app} />;
}
