const heroImage = "https://furniro-web-imagens.s3.us-east-2.amazonaws.com/images/assets/hero.png";


const Hero = () => {
  return (
    <section
    // Classe para tornar o fundo responsivo e ajustar o posicionamento da imagem
      className="w-full h-[720px] bg-no-repeat bg-cover bg-center md:bg-left flex items-center justify-end px-4 sm:px-8 md:px-16"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="bg-[#FFF3E3] w-full max-w-[643px] p-6 sm:p-10 md:p-12">
        <p className="text-xs tracking-[3px] text-[#333] font-medium mb-4">
          New Arrival
        </p>
        <h1 className="text-[28px] sm:text-[36px] md:text-[40px] leading-tight font-bold text-primary mb-4">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-sm sm:text-base text-[#333] mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        {/* Botão de chamada para ação */}
        <button className="bg-primary text-white px-6 py-3 text-sm font-semibold">
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
