import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { WarningOutline } from "react-ionicons";
import { Slider } from "@material-tailwind/react";

export default function SettingsModal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  const [noiseSuppression, setNoiseSuppression] = useState(20);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-slate-700 px-8 py-4">
                  <div className="">
                    <div className="  mt-1 text-center  sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-white"
                      >
                        Settings
                      </Dialog.Title>
                      <div className="mt-4">
                        <p className="text-sm text-white">
                          <div className="flex">
                            <div className=" w-full flex items-center text-white">
                              Session Recording{" "}
                            </div>
                            <div className="flex items-end justify-end">
                              <label
                                for="toggleB"
                                className="flex items-center cursor-pointer"
                              >
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="toggleB"
                                    className="peer sr-only"
                                  />

                                  <div className="peer-checked:translate-x-full dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                  <div className="block bg-gray-600 transition peer-checked:bg-green-500 w-14 h-8 rounded-full"></div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <label
                          className="text-sm text-white
                          "
                          for="noise-suppression"
                        >
                          Noise Suppression
                        </label>
                        <div className="pl-8">
                          <Slider
                            defaultValue={20}
                            color="red"
                            value={noiseSuppression}
                            onChange={(e) => {
                              setNoiseSuppression(e.target.value);
                            }}
                            min={0}
                            max={100}
                            step={20}
                            data-tip={"number"}
                            trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-full !bg-slate-600"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-white">
                          <div className="flex ">
                            <div className=" w-full flex items-center text-white">
                              Opt-in to sharing data{" "}
                            </div>
                            <div className="flex items-end justify-end w-full">
                              <label
                                for="toggleC"
                                className="flex items-center cursor-pointer"
                              >
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="toggleC"
                                    className="peer sr-only"
                                  />

                                  <div className="peer-checked:translate-x-full dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                  <div className="block bg-gray-600 transition peer-checked:bg-green-500 w-14 h-8 rounded-full"></div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" px-4 py-3 gap-1 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-70 shadow-sm hover:bg-gray-300 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 text-white hover:text-slate-700 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
