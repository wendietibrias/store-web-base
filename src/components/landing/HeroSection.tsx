import heroImage from "@/assets/images/landing/hero.jpg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full @container">
      <div className="w-full relative h-[90vh]">
        <Image
          src={heroImage}
          alt="Hero Image"
          style={{ objectFit: "cover" }}
          loading="lazy"
          fill
        />
        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-dark-primary/70 text-white">
          <div className="text-center w-[60%] mx-auto">
            <h1 className="font-extrabold text-5xl">
              Safe,Fast,Reliable Shopping
            </h1>
            <p className="text-[0.95rem] mb-7 mt-3 w-[70%] mx-auto">
              From daily essentials to unique finds, shop with ease and enjoy a
              seamless online experience,everything You Need, All in One Place.
            </p>
           <Link href="/shop" className="cursor-pointer">
            <button className="bg-primary-clr text-white rounded-full text-[0.8rem] font-bold py-2 px-4">Start Shopping</button>
           </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
