import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import VoiceAvatar from "./components/VoiceAvatar";
import Sidebar from "./components/Sidebar";
import {
  ArrowForward,
  Mic,
  MicOutline,
  VolumeHighOutline,
} from "react-ionicons";

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
      <div className="absolute">
        <Sidebar />
      </div>
      <div className="m-auto">
        <div className="text-5xl text-center text-white font-semibold mb-10">
          MetaVoice Live
        </div>
        <Carousel className="w-[40rem]" voices={voices} />
        <div className="flex justify-between mt-8 mx-8">
          <div>
            <label
              for="hs-select-label"
              className="ml-2 block text-sm font-medium mb-2 dark:text-white"
            >
              Input Device
            </label>
            <div className="flex">
              <div className="py-3 pr-4 pl-4 block border-t border-l border-b border-gray-700 bg-slate-900 rounded-l-full text-sm text-gray-400">
                <MicOutline color={"gray-400"} />
              </div>
              <select
                name="input"
                id="input"
                className="py-3 px-4 pr-9 block w-full rounded-r-full text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"
              >
                <option value="" selected disabled>
                  Choose an input device
                </option>
                <option value="dog">R-Realtek Audio</option>
                <option value="cat">HyperX Cloud Stinger Core 7.1</option>
                <option value="hamster">NVidia Broadcast</option>
                <option value="parrot">Onboard Audio</option>
              </select>
            </div>
          </div>
          <div className="text-white mt-8">
            <ArrowForward color={"white"} />
          </div>
          <div>
            <label
              for="hs-select-label"
              className="ml-2 block text-sm font-medium mb-2 dark:text-white"
            >
              Output Device
            </label>

            <div className="flex">
              <div className="py-3 pr-4 pl-4 block border-t border-l border-b border-gray-700 bg-slate-900 rounded-l-full text-sm text-gray-400">
                <VolumeHighOutline color={"gray-400"} />
              </div>
              <select
                name="output"
                id="output"
                className="py-3 px-4 pr-9 block w-full rounded-r-full text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"
              >
                <option value="" selected disabled>
                  Choose an output device
                </option>
                <option value="dog">R-Realtek Audio</option>
                <option value="cat">HyperX Cloud Stinger Core 7.1</option>
                <option value="hamster">NVidia Broadcast</option>
                <option value="parrot">Onboard Audio</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
       <div className="flex">
          <div className="text-white">Record Session? </div>
          <div className="flex items-center justify-center w-full mb-12">
            <label for="toggleB" className"flex items-center cursor-pointer">
              <div className"relative">
                <input type="checkbox" id="toggleB" className"peer sr-only" />

                <div className"peer-checked:translate-x-full dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                <div className"block bg-gray-600 transition peer-checked:bg-green-500 w-14 h-8 rounded-full"></div>
              </div>
            </label>
          </div>
        </div> */
export default App;
