import Link from "next/link";
import { Button } from "../ui/button";

const HomePageHero = () => {
  return (
    <div className="h-screen bg-black text-white overflow-hidden">
      <div
        style={{
          height: "150px",
          borderRadius: "50%",
          width: "80%",
          margin: "0 auto",
          left: "0",
          right: "0",
          position: "absolute",
          transform: "translateY(-50%)",
          background: "linear-gradient(90deg, #e44141, #4f2af3)",
          filter: "blur(110px)",
        }}
        className=""
      ></div>
      <div className="flex flex-col items-center justify-start h-full py-28 ">
        <h1 className="text-6xl font-bold my-4">
          Gsoc{" "}
          <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#20A4F3] to-[#182B3A]">
            Organizations
          </span>
        </h1>
        <p className="text-center">
          A place where you can watch and compare all the Organizations <br />{" "}
          which participated in GSOC
        </p>
        <Button
          variant={"default"}
          className="bg-blue-500 hover:bg-blue-800 my-4"
          asChild
        >
          <Link href={"/organizations"}>All Organizations</Link>
        </Button>
      </div>
    </div>
  );
}

export default HomePageHero