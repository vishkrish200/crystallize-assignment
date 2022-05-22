import { useEffect, useState } from "react";
import Image from "next/image";

export default function ListingData() {
  const [state, setState] = useState();

  async function getListings() {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
      `,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    setState(data);
  }

  useEffect(() => {
    getListings();
  }, []);

  return (
    <>
      <div className="grid grid-flow-col grid-cols-4 col-auto w-full text-blue-600 font-bold">
        <h1>Image</h1>
        <h1>Name</h1>
        <h1>Ticker</h1>
        <h1>Price</h1>
      </div>
      {state?.map((item) => (
        <div
          className="grid grid-flow-col grid-cols-4 col-auto w-full justify-center items-center gap-y-10"
          key={item.id}
        >
          <div className="w-10 h-10 relative justify-self-center items-center">
            <Image
              src={item.image}
              alt={item.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>{item.name}</div>
          <div>{item.symbol}</div>
          <div>${item.current_price}</div>
        </div>
      ))}
    </>
  );
}
