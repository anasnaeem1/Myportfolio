import Image from "next/image";

const DarkThemeCard = ({ imageUrl, title, description, className }) => {
  return (
    <div className={`bg-zinc-900 rounded-lg overflow-hidden ${className}`}>
      {/* <Image src={imageUrl} width={400} height={250} alt={title} className="w-full h-60 object-cover" /> */}
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-zinc-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default DarkThemeCard;
