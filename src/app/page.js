import Image from "next/image";
import Nisser from "./components/NisseCounter/Nisser";

export default function Home() {
  return (
    <div className="w-screen  h-screen flex flex-col justify-center items-center ">
      <h1 className=" text-green-500 text-2xl">Vælg dine nisser</h1>
      <Nisser></Nisser>
    </div>
  );
}
