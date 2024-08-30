import Footer from "../../Footer";
import locales from "./locales";
const AboutModal = () => {
  const year = new Date().getFullYear();

  return (
    <div className="p-4">
      <div className="">
        <p className="text-customGray text-lg font-bold pb-2">
          {locales.hello}
        </p>
        <p className="text-justify text-customGray text-[13px] pb-4 leading-6	line font-medium">
          {locales.since}
        </p>
        <p className="text-justify text-customGray text-[13px] pb-4 leading-6	font-medium">
          {locales.howIBegan}
        </p>
        <p className="text-justify text-customGray text-[13px] pb-4 leading-6	font-medium">
          {locales.built}
        </p>
        <p className="text-justify text-customGray text-[13px] pb-10 leading-6	font-medium">
          {locales.alwaysLearning}
        </p>
      </div>
      <Footer showName={false} year={year} />
    </div>
  );
};

export default AboutModal;
