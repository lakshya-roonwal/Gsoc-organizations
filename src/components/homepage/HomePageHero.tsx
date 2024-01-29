import { LucideGithub } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const HomePageHero = () => {
  return (
    <div className="h-screen bg-white ">
      <div
        style={{
          left: "0",
          right: "0",
          transform: "translateY(-50%)",
          background: "linear-gradient(90deg, #e44141, #4f2af3)",
          filter: "blur(110px)",
        }}
        className="h-[150px] w-[80%] rounded-full my-0 mx-auto absolute"
      ></div>
      <div className="flex flex-col items-center justify-start h-full py-20 md:py-24 ">
        <h1 className="text-5xl md:text-3xl font-bold text-center tracking-tighter sm:text-5xl xl:text-6xl/none">
          All Google Summer of Code{" "}
          <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#20A4F3] to-[#182B3A]">
            Organizations
          </span>
        </h1>
        <p className="text-center line-clamp-2 my-2">
          A place where you can watch and compare all the Organizations <br />{" "}
          which participated in GSOC
        </p>
        <Button
          variant={"default"}
          className="my-4 "
          asChild
        >
          <Link
            className=""
            href="/organizations"
          >
            Explore Organizations
          </Link>
        </Button>
        <div className="absolute bottom-0 mb-4 flex flex-col items-center">
          <p>My by <Link target="__blank" href={'https://twitter.com/Lakshya_roonwal'} className="text-blue-500 hover:text-blue-700">@Lakshya_roonwal</Link></p>
          <Link target="__blank" href={'https://github.com/lakshya-roonwal'}>
          <LucideGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePageHero