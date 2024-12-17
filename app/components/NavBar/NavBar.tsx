import Image from "next/image";
import MainLayout from "../utils/MainLayout";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function NavBar() {
  const navItem = [
    { label: <FaTelegramPlane size={32} />, slug: "www.telegram.com" },
    { label: <FaXTwitter size={32} />, slug: "www.twitter.com" },
  ];
  return (
    <nav className="w-full fixed z-50 py-3 border-b  bg-[#0164FF]">
      <MainLayout>
        <div className="flex items-center justify-between ">
          <Image
            src={"/logo.svg"}
            alt="logo"
            className="max-w-[4rem]"
            width={1920}
            height={1080}
          />
          <div className="flex text-white gap-x-2 items-center">
            {navItem.map((item) => (
              <div key={item.slug}>{item.label}</div>
            ))}
            <button className="text-xl uppercase ml-3 font-bold rounded-full bg-white text-[#0164FF] px-5 py-2">
              buy now
            </button>
          </div>
        </div>
      </MainLayout>
    </nav>
  );
}
