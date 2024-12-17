// import CardSection from "./components/CardSection/CardSection";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <main className="pb-10 bg-[radial-gradient(ellipse_at_center,_#9fb8ff,_#3273ff,_#0066ff)]">
      <NavBar />
      <HeaderSection />
      {/* <CardSection /> */}
    </main>
  );
}
