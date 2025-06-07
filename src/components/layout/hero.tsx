import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[720px] bg-cover bg-center flex items-center justify-end"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-[#FFF3E3] max-w-[643px] px-10 py-12 mr-[100px] rounded-md shadow-md text-fontColor font-poppins">
        <p className="text-sm font-semibold tracking-[0.2em] mb-4">
          New Arrival
        </p>
        <h1 className="text-[52px] font-bold leading-[65px] mb-6">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-sm font-medium mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-primary text-white px-10 py-4 font-semibold hover:opacity-90 transition">
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
