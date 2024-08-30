import { Metadata } from "next";
import TypeAnimation from "./components/TypeAnimation";
import { HomeSequence } from "./constants";
import Footer from "./components/Footer";
import useHome from "./hooks/useHome";

export const metadata: Metadata = {
  title: "Douglas Marques",
  description: "Portfolio do Douglas Marques",
};

const Home: React.FC = () => {
  const { year } = useHome();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl text-white">DOUGLAS MARQUES</h1>
      <TypeAnimation
        className="text-2xl text-white after:text-white"
        text={HomeSequence}
      />

      <Footer position="absolute" showName={true} year={year} />
    </main>
  );
};

export default Home;
