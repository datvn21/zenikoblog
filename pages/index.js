import Head from "next/head";
import Layout from "../components/Layout";
import Banner from "../components/Home/Banner";
export default function Home() {
  return (
    <Layout>
      <Banner />
      <div className="h-[600px] w-full flex justify-around pb-[30px]">
        <div className="h-full w-3/6  bg-red-300"></div>
        <div className="h-full w-2/6   bg-red-300"></div>
      </div>

      <div className="bg-green-300 w-full h-[400px] my-[30px]"></div>
    </Layout>
  );
}
