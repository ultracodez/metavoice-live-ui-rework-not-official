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
        <div className="text-5xl text-center text-white font-semibold mb-10">
          MetaVoice Live
        </div>
        <Carousel className="w-[40rem]" voices={voices} />
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
    </div>
  );
}
/*
       <div className="flex">
          <div className="text-white">Record Session? </div>
          <div className="flex items-center justify-center w-full mb-12">
            <label for="toggleB" class="flex items-center cursor-pointer">
              <div class="relative">
                <input type="checkbox" id="toggleB" class="peer sr-only" />

                <div class="peer-checked:translate-x-full dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                <div class="block bg-gray-600 transition peer-checked:bg-green-500 w-14 h-8 rounded-full"></div>
              </div>
            </label>
          </div>
        </div> */
export default App;
