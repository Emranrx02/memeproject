import Image from "next/image";
import MainLayout from "../utils/MainLayout";

export default function HeaderSection() {
  return (
    <section className=" text-center  ">
      <div className=" pt-32 ">
        <MainLayout>
          <div className="max-w-[60rem] mx-auto">
            <div>
              <h1 className="text-5xl uppercase sm:text-8xl  inline-block relative customtext font-extrabold text-white">
                Base
              </h1>
              <h1 className="text-5xl sm:text-8xl mr-9  inline-block relative customtext-d font-extrabold text-white">
                <span className="inline-block">
                  <Image
                    src={"/base.png"}
                    alt="base"
                    className=" w-5 sm:w-9 right-0 absolute"
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
                    className="w-5 sm:w-9 right-0 top-[50%] translate-y-[-50%] absolute"
                    width={1920}
                    height={1080}
                  />
                  G
                </span>
              </h1>
              <h1 className="text-5xl sm:text-8xl  inline-block relative customtext-uins font-extrabold text-white">
                U
              </h1>
            </div>
            <h1 className="text-5xl uppercase sm:text-7xl inline-block customtext-bengu  relative  mt-10 font-extrabold text-white">
              $Bengu
            </h1>
            <div className="">
              <p className="text-white inline-block relative  px-2 sm:text-3xl font-bold max-w-[40rem] mx-auto mt-20">
                The most based penguins on the Base Chain. $BENGU waddled out of
                the ice to bring memes, vibes, and pure degenerate energy to
                base. Forget the hype—BENGU is here to chill. 🧊
                <br />
                <br />
                Stay based.Stay BENGU.
              </p>
            </div>
          </div>
        </MainLayout>
      </div>
      {/* <div className="max-w-[40rem] py-20 bg-gradient-to-tl from-brandBlue via-blue-400 to-blue-300 mx-auto"></div> */}
    </section>
  );
}
