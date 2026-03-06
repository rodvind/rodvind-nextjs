import { useState, useEffect } from "react";
import Head from "next/head";
import Jumbo from "@/components/Jumbo";
import ShortAbout from "@/components/ShortAbout";
import FeaturedWork from "@/components/FeaturedWork";
import HomeCTAs from "@/components/HomeCTAs";

export default function Home() {
  const [count, setCount] = useState("");

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_COUNTER_URL;
    if (!url) return;
    fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ siteUrl: "https://rodvin.com" }) })
      .then(r => r.json())
      .then(data => setCount(String(data[0]?.visits ?? "")))
      .catch(() => {});
  }, []);

  return (
    <>
      <Head>
        <title>Rodvin — Full stack developer</title>
        <meta name="description" content="Rodvin Danaei — Full stack developer, cloud advocate." />
        <meta property="og:title" content="Rodvin — Full stack developer" />
        <meta property="og:description" content="Rodvin Danaei — Full stack developer, cloud advocate." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/rod.jpeg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Rodvin — Full stack developer" />
        <meta name="twitter:description" content="Rodvin Danaei — Full stack developer, cloud advocate." />
      </Head>
      <Jumbo count={count} />
      <ShortAbout />
      <FeaturedWork />
      <HomeCTAs />
    </>
  );
}
