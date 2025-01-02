"use client";

import { DescriptionType } from "../page";
import Image from "next/image";
import appstoreIcon from "@/app/assets/ios.png";
import playstoreIcon from "@/app/assets/android.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export const AppLinkNavigator = ({ app }: { app: DescriptionType }) => {
  const router = useRouter();
  console.log("App ? ", app);
  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      router.push(app.iOSUrl);
    } else if (/Android/i.test(userAgent)) {
      router.push(app.androidUrl);
    }
  }, [app]);

  if (!app) {
    return <p>Problème de chargement</p>;
  }

  return (
    <div className="flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-center">
          <a href="/">←</a> Télécharger l'application {app.name} !
        </h1>
      </div>
      <div className="flex justify-center mt-8">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="flex artboard artboard-demo phone-1">
              <div className="flex-col justify-center items-center">
                <div className="flex self-center justify-center items-center">
                  <Image
                    className="rounded-xl"
                    alt="App Icon"
                    src={app?.appIcon}
                    width={144}
                    height={144}
                  />
                </div>
                <a href={app?.iOSUrl}>
                  <div className="flex self-center justify-center items-center">
                    <p>IOS</p>
                    <Image
                      alt="iOS AppStore"
                      src={appstoreIcon}
                      width={128}
                      height={128}
                    />
                  </div>
                </a>
                <a href={app?.androidUrl}>
                  <div className="flex self-center justify-center items-center">
                    <p>Android</p>
                    <Image
                      alt="Google Playstore"
                      src={playstoreIcon}
                      width={128}
                      height={128}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
