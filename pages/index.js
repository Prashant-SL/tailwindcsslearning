import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-5 divide-y inline divide-yellow-600">
        <h1 className="py-4">HI I am Heading 1</h1>
        <h1 className="py-4">HI I am Heading 1</h1>
        <h1 className="py-4">HI I am Heading 1</h1>
        <h1 className="py-4">HI I am Heading 1</h1>
      </div>
        <input placeholder="Input Here" className="focus:outline-black focus:outline-dashed border-2" />

      <div>
        <h1 className={styles.title}>Welcome to Next.js!</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </div>
    </div>
  );
}
