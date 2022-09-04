import Head from "next/head";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div className="h-[500px] py-[30px] w-full flex justify-center">
        <div className="h-[400px] w-[600px] rounded-2xl bg-yellow-300 px-5"></div>
        <div className="h-[400px] w-[400px] justify-between px-5 flex items-center flex-col">
          <div className="h-[190px] w-full rounded-2xl bg-yellow-300"></div>
          <div className="h-[190px] w-full rounded-2xl bg-yellow-300"></div>
        </div>
      </div>

      <div className="h-[600px] w-full flex justify-around pb-[30px]">
        <div className="h-full w-3/6  bg-red-300"></div>
        <div className="h-full w-2/6   bg-red-300"></div>
      </div>

      <div className="bg-green-300 w-full h-[400px] my-[30px]"></div>
    </Layout>
  );
}
