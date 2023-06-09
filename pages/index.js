import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import axios from "axios";
import { Transaction } from "../components/Transaction/index";

function Home({ title, goals }) {
  console.log("goals: ", goals);
  return (
    <>
      <Head>
        <title>Digit App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className={styles.title}>Saving</p>
        <hr />
        <a href={`/accountbreakdown/123}`}>See your account breakdown </a>
        <div>
          {goals.map((goal) => (
            <Transaction {...goal} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const API_URL = "http://www.mocky.io/v2/5eb421880e00005000081991";
  const listOfItems = await axios
    .get(API_URL)
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });

  console.log("listOfItems: ", listOfItems);
  const title = listOfItems.data.account;
  const goals = listOfItems.data.goals;
  return {
    props: {
      title,
      goals,
    },
  };
}

export default Home;
