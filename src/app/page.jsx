import Details from "@/components/Home/Details";
import Hero from "@/components/Home/Hero";
import Info from "@/components/Home/Info";
import Overview from "@/components/Home/Overview";
import Compliance from "@/components/Home/Compliance";
import Image from "next/image";
import Vulnerability from "@/components/Home/Vulnerability";
import Detection from "@/components/Home/Detection";
import Intelligence from "@/components/Home/Intelligence";
import StandOut from "@/components/Home/StandOut";
import ContactUs from "@/components/Home/ContactUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      {/* <Details /> */}
      <Info />
      {/* <Overview />
      <Overview /> */}
      <Compliance / >
        <Vulnerability />
        <Detection />
        <Intelligence />
        <StandOut />
        <ContactUs />
    </main>
  );
}
