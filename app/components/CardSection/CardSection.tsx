import MainLayout from "../utils/MainLayout";
import VerticleSlider from "./Slider";

export default function CardSection() {
  const images1 = [
    "/sneakpeak/1.png",
    "/sneakpeak/2.png",
    "/sneakpeak/3.png",
    "/sneakpeak/4.png",
  ];
  const images2 = [
    "/sneakpeak/5.png",
    "/sneakpeak/6.png",
    "/sneakpeak/7.png",
    "/sneakpeak/8.png",
  ];
  const images3 = [
    "/sneakpeak/9.png",
    "/sneakpeak/10.png",
    "/sneakpeak/11.png",
    "/sneakpeak/12.png",
  ];

  return (
    <div className=" mt-20">
      <MainLayout>
        <div className="mx-10">
          <div className="grid border-b-4 border-t-4 border-white  py-10 grid-cols-3 gap-x-3 sm:gap-x-7 gap-y-10">
            <VerticleSlider images={images1} speed={300} />
            <VerticleSlider images={images2} speed={600} />
            <VerticleSlider images={images3} speed={500} />
          </div>
        </div>
        <div className="my-20 text-center max-w-[45rem] text-white  mx-auto">
          <p className="text-white text-center text-3xl sm:text-5xl font-bold">
            <span>✨</span> Sneak peek Alert <span>✨</span>
          </p>
          <p className="mt-10 text-lg">
            Yo, yo, yo! Get ready to check out the exclusive scoop on{" "}
            {`"Based
            Penguins"`}{" "}
            - are you in the base culture? Our collection stands out with its
            high-fidelity designs, intricate details, and unique features that
            make each penguin pop, you feel me? {`It's`} all about finding those
            familiar vibes. And yo, most importantly, {`we're`} all about that
            animal activism, straight up.
          </p>
        </div>
      </MainLayout>
    </div>
  );
}
