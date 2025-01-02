import Image from "next/image";
import linkedin from "@/app/assets/linkedin.png";
import { appDescriptions } from "./constants/allApps";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Our apps</h1>
          </div>
        </div>
      </div>
      <main className="grid grid-cols-1 sm:grid-cols-2 gap-8 row-start-2 items-center sm:items-start">
        {appDescriptions.map((item) => {
          return (
            <div key={item.order} className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  height={192}
                  width={192}
                  src={item.appIcon}
                  alt={item.name}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  {item.name} <a href={`/${item.id}`}>→</a>
                </h2>
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
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/julien-marcesse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={linkedin}
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to linkedin →
        </a>
      </footer>
    </div>
  );
}
