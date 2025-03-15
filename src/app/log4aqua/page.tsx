import { AppLinkNavigator } from "../components/AppLinknavigator";
import { appDescriptions, DescriptionType } from "../constants/allApps";

export default function Log4AquaLinks() {
  const app = appDescriptions.find(
    (item) => item.id === "log4aqua"
  ) as DescriptionType;
  return <AppLinkNavigator app={app} />;
}
