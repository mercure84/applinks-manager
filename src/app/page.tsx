"use client";
import Image from "next/image";
import linkedin from "@/app/assets/linkedin.png";
import { appDescriptions } from "./constants/allApps";

export default function Home() {
  return (
    <div className="w-full max-w-screen overflow-x-hidden">
      <div className="hero-content text-center">
        <h1 className="text-5xl font-bold">Our apps</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {appDescriptions.map((item) => {
          return (
            <div key={item.order} className="card bg-base-100 shadow-xl m-2">
              <figure className="px-10 pt-10">
                <Image
                  height={164}
                  width={164}
                  src={item.appIcon}
                  alt={item.name}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="flex flex-row justify-between">
                  <h2 className="card-title">{item.name}</h2>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        window.location.href + item.id
                      );
                      alert("URL copied to clipboard!");
                    }}
                    className="btn btn-outline mx-2"
                  >
                    Share
                  </button>
                </div>
                <p>{item.description}</p>
                <div className="card-actions">
                  <a href={item.androidUrl} className="btn btn-primary">
                    Android
                  </a>
                  <a href={item.iOSUrl} className="btn btn-secondary">
                    iOS
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/julien-marcesse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={linkedin}
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          Go to LinkedIn →
        </a>
      </footer>
    </div>
  );
}
