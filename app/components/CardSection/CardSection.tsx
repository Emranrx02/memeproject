import MainLayout from "../utils/MainLayout";
import VerticleSlider from "./Slider";

export default function CardSection() {
  const images1 = ["/sneakpeak-4.png", "/sneakpeak-4.png", "/sneakpeak-4.png"];
  const images2 = ["/sneakpeak-4.png", "/sneakpeak-4.png", "/sneakpeak-4.png"];
  const images3 = ["/sneakpeak-4.png", "/sneakpeak-4.png", "/sneakpeak-4.png"];

  return (
    <div className="bg-brandBlue ">
      <MainLayout>
        <div className="mx-10">
          <div className="grid border-b-4 border-t-4 border-white  py-10 grid-cols-3 gap-x-10 gap-y-10">
            <VerticleSlider images={images1} speed={500} />
            <VerticleSlider images={images2} speed={1000} />
            <VerticleSlider images={images3} speed={1500} />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
