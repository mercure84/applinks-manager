"use client";
import appIcon from "@/app/assets/reeficon.webp";
import appstoreIcon from "@/app/assets/ios.png";
import playstoreIcon from "@/app/assets/android.png";
import Image from "next/image";

export default function ReefQuizzLinks() {
  const playStoreLink =
    "https://play.google.com/store/apps/details?id=com.centropygebicolor.reefquizapp";
  const appstoreLink = "https://apps.apple.com/fr/app/reef-quizz/id6670703823";

  return (
    <div className="flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-center">
          Télécharger l'application Reef Quizz pour tester vos connaissances
          récifales !
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
                    src={appIcon}
                    width={142}
                    height={142}
                  />
                </div>
                <a href={appstoreLink}>
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
                <a href={playStoreLink}>
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
}
