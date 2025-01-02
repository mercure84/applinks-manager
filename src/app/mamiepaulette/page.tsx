"use client";
import { appDescriptions, DescriptionType } from "../page";
import { AppLinkNavigator } from "../components/AppLinknavigator";

export default function MamiePauletteLinks() {
  const app = appDescriptions.find(
    (item) => item.id === "mamiepaulette"
  ) as DescriptionType;

  return <AppLinkNavigator app={app} />;
}
