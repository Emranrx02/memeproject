import MainLayout from "../utils/MainLayout";

export default function HeaderSection() {
  return (
    <section className="py-[15%] text-center bg-brandBlue bg-gradient-to-tr">
      <MainLayout>
        <div className="max-w-[40rem] mx-auto">
          <h1 className="text-5xl font-bold text-white">BASED PENGUINS</h1>
          <p className="text-white mt-10">
            BASED PENGUINS ARE 5,000 UNIQUE COLLECTIBLE PENGUINS WITH PROOF OF
            OWNERSHIP STORED ON THE BASE BLOCKCHAIN.
          </p>
        </div>
      </MainLayout>
    </section>
  );
}
