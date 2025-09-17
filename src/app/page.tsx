import Image from "next/image";
import Header from "../../components/Header";
import Home from "../../components/Home";


export default function Page() {
  return (
      <>
        <Header></Header>
        <main className={`m-15`}>
            <Home></Home>
        </main>
      </>
  );
}
