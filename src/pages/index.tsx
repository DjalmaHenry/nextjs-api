import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type Link = {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
};

export default function Home() {
  const [links, setLinks] = useState<Link[]>([]);
  useEffect(() => {
    fetch("/api/links")
      .then((res) => res.json())
      .then((data) => {
        setLinks(data.data);
        console.log(data.data);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Bio DJ</title>
        <meta name="description" content="Djalma Henrique bio description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Bio&nbsp;
            <code className={styles.code}>Djalma Lima</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/logo-difinity-labs.svg"
                alt="Difinity Labs Logo"
                className={styles.difinityLogo}
                width={160}
                height={100}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="https://i.imgur.com/g74z6V5.png"
            alt="astronaut illustration"
            width={200}
            height={190}
            priority
          />
          <div className={styles.thirteen}>
            <div className="presentation">
              <h1 className={styles.titlePresentation}>Djalma Henrique Silva Lima</h1>
              <p className={styles.descriptionPresentation}>
                <code className={styles.code}>Fullstack Developer</code>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {links.map((link) => (
            <a
              href={link.url}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
              key={link.id}
            >
              <div className={styles.header}>
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={30}
                  height={30}
                  className={styles.icon}
                  priority
                />
                <h2 className={styles.title}>
                  {link.title}
                  <span>&rarr;</span>
                </h2>
              </div>
              <p className={inter.className}>{link.description}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
