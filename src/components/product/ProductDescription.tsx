interface Props {
  text: string;
  images: string[];
}

/**
 * Mostra o texto (quebra em parágrafos) e as imagens da sessão Descrição
 */
export default function ProductDescription({ text, images }: Props) {
  const paragraphs = text.split("\n\n");

  return (
    <div className="text-prata leading-relaxed mb-10">
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-4 max-w-[62rem] mx-auto">
          {p}
        </p>
      ))}

      {images?.length > 0 && (
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Imagem da Descrição ${i + 1}`}
              className="w-full md:w-1/2 object-cover rounded-xl bg-primary"
            />
          ))}
        </div>
      )}
    </div>
  );
}
