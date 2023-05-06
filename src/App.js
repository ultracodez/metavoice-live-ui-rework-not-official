import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import VoiceAvatar from "./components/VoiceAvatar";
import {
  ArrowForward,
  CaretUp,
  Mic,
  MicOutline,
  VolumeHighOutline,
} from "react-ionicons";
import { Disclosure, Transition } from "@headlessui/react";
import Settings from "./components/Nav/Settings";

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
      <Settings />

      <div className="m-auto">
        <div className="text-5xl text-center text-white font-semibold mb-10">
          MetaVoice Live
        </div>
        <Carousel className="w-[40rem]" voices={voices} />
        <div className="flex justify-between mt-10 mx-8">
          <div>
            <label
              for="hs-select-label"
              className="ml-2 block text-sm font-medium mb-2 dark:text-white"
            >
              Input Device
            </label>
            <div className="flex">
              <div className="py-3 pr-4 pl-4 block border-t border-l border-b bg-slate-700 border-gray-600 rounded-l-full text-sm text-gray-400">
                <MicOutline color={"gray-400"} />
              </div>
              <select
                name="input"
                id="input"
                className="py-3 px-4 pr-9 block w-full rounded-r-full text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-700 border-gray-600 text-gray-400"
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
              <div className="py-3 pr-4 pl-4 block border-t border-l border-b border-gray-600 bg-slate-700 rounded-l-full text-sm text-gray-400">
                <VolumeHighOutline color={"gray-400"} />
              </div>
              <select
                name="output"
                id="output"
                className="py-3 px-4 pr-9 block w-full rounded-r-full text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-700 border-gray-600 text-gray-400"
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
        <div className="mt-12">
          <div className="w-full ">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-slate-700 border border-gray-600 p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>Review & Share Session</span>
                      <CaretUp
                        color="white"
                        cssClasses={`${
                          open ? "rotate-180 transform" : ""
                        } transition duration-300 h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      className="overflow-hidden"
                      enter="transition transition-[max-height] duration-200 ease-in"
                      enterFrom="transform max-h-0"
                      enterTo="transform max-h-screen"
                      leave="transition transition-[max-height] duration-400 ease-out"
                      leaveFrom="transform max-h-screen"
                      leaveTo="transform max-h-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                        &lt;MVL Sample, DO NOT REPLICATE&gt;
                        <br /> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
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
