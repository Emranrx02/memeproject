import CardSection from "./components/CardSection/CardSection";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <main className="pb-10 bg-brandBlue">
      <NavBar />
      <HeaderSection />
      <CardSection />
    </main>
  );
}
