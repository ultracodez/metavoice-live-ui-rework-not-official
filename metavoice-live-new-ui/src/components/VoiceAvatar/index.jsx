export default function VoiceAvatar({ img: { alt, src }, name, isActive }) {
  return (
    <div className="p-4 justify-center">
      <div
        className={`border-4 transition ease-in-out delay-300 h-48 w-48 rounded-full relative ${
          isActive ? "border-sky-500" : "border-transparent"
        }`}
      >
        <img className="object-contain rounded-full" src={src} alt={alt} />
      </div>
      <div
        className={`mt-2 flex justify-center text-3xl text-white ${
          isActive && "font-semibold"
        }`}
      >
        {name}
      </div>
    </div>
  );
}
