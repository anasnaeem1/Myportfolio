import DarkThemeCard from "./Card2";

const Card = () => {
  // Sample card data
  const cards = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      title: "Cosmic Gradient",
      description:
        "A beautiful cosmic gradient that showcases the elegance of dark themes with vibrant accent colors.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
      title: "Purple Haze",
      description:
        "Deep purple tones blend with dark backgrounds to create a sophisticated and modern aesthetic.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80",
      title: "Midnight Blue",
      description:
        "The calming effect of midnight blue creates depth and dimension in this dark-themed design.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="container mx-auto py-12 px-4">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dark Theme Card Gallery
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore our collection of elegantly designed dark-themed cards
            featuring beautiful imagery and clean typography.
          </p>
        </header>

        <section>
          {/* Featured card - larger size */}
          <div className="mb-16 flex justify-center">
            <DarkThemeCard
              className="max-w-2xl w-full shadow-lg shadow-purple-900/20"
              imageUrl="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1200&q=80"
              title="Featured Dark Theme"
              description="Our premium dark theme design combines rich blacks with subtle accent colors to create a visually stunning experience that's easy on the eyes. Perfect for extended viewing sessions and showcasing vibrant content against a sophisticated backdrop."
            />
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {cards.map((card, index) => (
              <DarkThemeCard
                key={index}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
                className="shadow-md shadow-purple-900/10 hover:shadow-lg hover:shadow-purple-900/20 transition-shadow duration-300"
              />
            ))} */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
