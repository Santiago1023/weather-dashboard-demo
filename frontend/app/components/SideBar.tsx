import Link from "next/link";
import { WiCloud } from "react-icons/wi";

export default function SideBar() {
  return (
    <aside className="h-screen w-64 bg-gray-100 flex flex-col items-center shadow-md border-r-2 pt-6">
      {/* Logo y Título */}
      <div className="flex flex-col items-center mb-12">
        <WiCloud className="w-12 h-12 text-blue-600" />
        <h1 className="text-xl font-semibold text-blue-700 text-center">
          Weather Dashboard
        </h1>
      </div>
      {/* Navegación */}
      <ul className="w-full flex flex-col gap-6">
        <Link href="/">
          <li className="text-center border py-3 cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
            HomePage
          </li>
        </Link>
        <Link href="/weather-forecast">
          <li className="text-center border py-3 cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
            Weather Forecast
          </li>
        </Link>
        <Link href="/current-weather">
          <li className="text-center border py-3 cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
            Current Weather
          </li>
        </Link>
      </ul>
    </aside>
  );
}
