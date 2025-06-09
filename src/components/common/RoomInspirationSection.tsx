import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'

const slides = [
  {
    id: 1,
    titulo: '01 — Bed Room',
    subtitulo: 'Inner Peace',
    imagem: '/src/assets/img/Rectangle 24.png',
  },
  {
    id: 2,
    titulo: '02 — Dining Room',
    subtitulo: 'Bright Minimal',
    imagem: '/src/assets/img/Rectangle 24.png',
  },
  {
    id: 3,
    titulo: '03 — Living Room',
    subtitulo: 'Modern Touch',
    imagem: '/src/assets/img/Rectangle 24.png',
  },
]

export function RoomInspirationSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2.2,
          spacing: 24,
        },
      },
    },
    slideChanged(slider) {
      setActiveIndex(slider.track.details.rel)
    },
  })

  return (
        <section className="bg-almostWhiteBeige py-10 px-4 md:px-10 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Texto à esquerda centralizado verticalmente */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray1 leading-snug">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray2 max-w-[42ch] mx-auto md:mx-0 text-base sm:text-lg">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-primary hover:bg-primary/80 transition-colors duration-300 text-white py-3 px-6 font-semibold text-sm sm:text-base">
            Explore More
          </button>
        </div>
      </div>

      {/* Carrossel à direita */}
      <div className="w-full md:w-1/2 relative">
        <div ref={sliderRef} className="keen-slider items-start">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="keen-slider__slide relative overflow-hidden shadow-lg aspect-[3/4] max-w-full max-h-[500px] sm:max-h-[600px]"
            >
              <img
                src={slide.imagem}
                alt={slide.subtitulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-end">
                {/* Card branco responsivo */}
                <div className="bg-white bg-opacity-80 p-3 sm:p-4 w-full max-w-[380px]">
                  <p className="text-xs sm:text-sm text-gray2">{slide.titulo}</p>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray1">
                    {slide.subtitulo}
                  </h3>
                </div>
                {/* Botão responsivo colado à direita do card */}
                <button className="ml-[-1px] bg-primary text-white w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center hover:bg-primary/80 transition-all">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Seta de navegação */}
        <button
          onClick={() => instanceRef.current?.next()}
          className="flex absolute -right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white text-primary hover:bg-gray-100 transition-all duration-300 shadow-lg z-10 items-center justify-center"
        >
          →
        </button>


        {/* Bolinhas de navegação */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex gap-2 w-fit">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => instanceRef.current?.moveToIdx(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === i ? 'bg-primary' : 'bg-gray5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
