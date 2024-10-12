import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import { noto } from "./ui/fonts";
import Header from "./ui/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-purple">
        <div className="flex  gap-8 custom-container">
          <div className="lg:w-1/2">
            <p className="font-noto">Turn ideas into stunning mockups.</p>
          </div>
          <div className="lg:w-1/2"></div>
        </div>
      </section>
    </>
  );
}
