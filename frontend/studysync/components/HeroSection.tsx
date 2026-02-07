import Button from "./ui/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-auto h-screen flex flex-col justify-center items-center size-18">
      
      <div className="w-full flex flex-col pb-12 justify-center items-center">
        <h2 className="font-heading text-6xl font-extrabold mb-5 ">Find your focus partner today.</h2>
      <Link href={"/signin?mode=signup"}>
              <Button 
          type="primary"
          
        >Get Started</Button>
      </Link>

      </div>

    </div>
  )
}

export default HeroSection