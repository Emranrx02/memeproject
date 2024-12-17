import Image from "next/image";
import MainLayout from "../utils/MainLayout";

export default function HeaderSection() {
  return (
    <section className=" text-center bg-brandBlue ">
      <div className=" py-56 bg-[radial-gradient(ellipse_at_center,_#9fb8ff,_#3273ff,_#0066ff)]">
        <MainLayout>
          <div className="max-w-[60rem] mx-auto">
            <h1 className="text-5xl sm:text-8xl  inline-block relative customtext font-extrabold text-white">
              BASE
            </h1>
            <h1 className="text-5xl sm:text-8xl  inline-block relative customtext-d font-extrabold text-white">
              <span className="inline-block">
                <Image
                  src={"/base.png"}
                  alt="base"
                  className="w-9 right-0 absolute"
                  width={1920}
                  height={1080}
                />
                D
              </span>
            </h1>
            <h1 className="text-5xl sm:text-8xl  inline-block relative customtext-pen font-extrabold text-white">
              PEN
            </h1>
            <h1 className="text-5xl sm:text-8xl  inline-block relative customtext-g font-extrabold text-white">
              <span className="inline-block">
                <Image
                  src={"/mounth.png"}
                  alt="base"
                  className="w-9 right-0 top-[50%] translate-y-[-50%] absolute"
                  width={1920}
                  height={1080}
                />
                G
              </span>
            </h1>
            <h1 className="text-5xl sm:text-8xl  inline-block relative customtext-uins font-extrabold text-white">
              UINS
            </h1>
            <p className="text-white text-lg font-semibold max-w-[40rem] mx-auto mt-10">
              BASED PENGUINS ARE 5,000 UNIQUE COLLECTIBLE PENGUINS WITH PROOF OF
              OWNERSHIP STORED ON THE BASE BLOCKCHAIN.
            </p>
          </div>
        </MainLayout>
      </div>
      {/* <div className="max-w-[40rem] py-20 bg-gradient-to-tl from-brandBlue via-blue-400 to-blue-300 mx-auto"></div> */}
    </section>
  );
}
