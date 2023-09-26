//components
import Bottom from "./Bottom";
import Header from "./Header";
import Middle from "./MIddle";

const Footer = () => {
  return (
    <section id="information" className="bg-bgBlack w-screen rounded-t-[32px]">
      <Header />
      <Middle />
      <Bottom />
    </section>
  );
};

export default Footer;
