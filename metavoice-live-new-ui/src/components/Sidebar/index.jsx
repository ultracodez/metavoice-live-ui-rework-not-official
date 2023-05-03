import {
  CardOutline,
  ExitOutline,
  MicOutline,
  SettingsOutline,
  WalletOutline,
} from "react-ionicons";

export default function Sidebar() {
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e border-slate-600 bg-slate-700">
      <div>
        <div className="inline-flex h-16 w-16 items-center justify-center">
          <span className="grid h-10 w-10 place-content-center rounded-lg bg-slate-500 text-xs text-white">
            R
          </span>
        </div>

        <div className="border-t border-slate-600">
          <nav aria-label="Main Nav" className="flex flex-col p-2 gap-2">
            <div className="pt-4">
              <a
                href=""
                className="t group relative flex justify-center rounded text-gray-200 bg-slate-500 px-2 py-1.5"
              >
                <MicOutline color={"grey-500"} />

                <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                  Home
                </span>
              </a>
            </div>

            <a
              href=""
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-slate-500 hover:text-gray-200"
            >
              <CardOutline color={"grey-500"} />

              <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                Billing
              </span>
            </a>

            <a
              href=""
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-slate-500 hover:text-gray-200"
            >
              <SettingsOutline color={"grey-500"} />

              <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                Settings
              </span>
            </a>
          </nav>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-slate-500 bg-slate-600 p-2">
        <form action="/logout">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-white hover:text-red-400"
          >
            <ExitOutline color={"red-400"} />

            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
