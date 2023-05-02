import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import VoiceAvatar from "./components/VoiceAvatar";

function App() {
  const voices = [
    { id: 1, img: { src: "/zeus.webp", alt: "Voice: Zeus" }, name: "Zeus" },

    {
      id: 2,
      img: { src: "/scarlett.webp", alt: "Voice: Scarlett" },
      name: "Scarlett",
    },

    { id: 3, img: { src: "/eva.webp", alt: "Voice: Eva" }, name: "Eva" },

    { id: 4, img: { src: "/yara.webp", alt: "Voice: Yara" }, name: "Yara" },

    { id: 5, img: { src: "/alex.webp", alt: "Voice: Alex" }, name: "Alex" },
  ];
  return (
    <div className="relative bg-slate-800 min-h-screen flex">
      <div class="m-auto">
        <Carousel className="w-[40rem]" voices={voices} />
      </div>
    </div>
  );
}

export default App;
