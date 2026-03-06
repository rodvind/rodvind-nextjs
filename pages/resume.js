import Head from "next/head";
import Resume from "@/components/Resume";

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume — Rodvin</title>
        <meta name="description" content="Resume, certifications, experience, and tools." />
        <meta property="og:title" content="Resume — Rodvin" />
        <meta property="og:description" content="Resume, certifications, experience, and tools." />
      </Head>
      <Resume />
    </>
  );
}
