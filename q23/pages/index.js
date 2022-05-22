import Head from "next/head";
import ListingData from "./ListingData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GECKO API</title>
        <meta name="description" content="Coin Gecko Clone" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/gecko.webp" type="image/x-icon" />
      </Head>
      <div className="flex flex-col text-center w-screen bg-blue-100 px-auto">
        <div className="text-3xl font-bold m-10">COIN GECKO</div>
        <ListingData />
      </div>
    </div>
  );
}
