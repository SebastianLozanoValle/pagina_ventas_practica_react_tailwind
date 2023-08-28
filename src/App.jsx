import { useState } from "react";

import { 
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
} from "react-icons/ri";

import Sidebar from "./components/shared/sidebar"


function App() {

  const [showMenu, setshowMenu] = useState(false);
  // const [showOrder, setshowOrder] = useState(false);

  const toggleMenu = () => setshowMenu(!showMenu);
  // const toggleOrder = () => setshowOrder(!showOrder);

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu = {showMenu} />
      {/* menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          { showMenu? <RiCloseLine /> : <RiMenu3Fill /> }
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
        {/* header */}
          <header  className="p-4">
          {/* title and search */}
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">MoviTekch</h1>
                <p className="text-gray-500">28 de agosto 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="text" className="bg-[#1f1d2b] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" placeholder="Search" />
                </div>
              </form>
            </div>
            {/* tabs */}
            <nav className="text-gray-300 flex items-center justify-between border-b">
              <a href="#" className="text-xs relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a] lg:text-2xl">Componentes</a>
              <a href="#" className="text-xs py-2 pr-4 lg:text-2xl">Perifericos</a>
              <a href="#" className="text-xs py-2 pr-4 lg:text-2xl">Telefonos</a>
              <a href="#" className="text-xs py-2 pr-4 lg:text-2xl">Accesorios</a>
              <a href="#" className="text-xs py-2 pr-4 lg:text-2xl">Otros</a>
            </nav>
          </header>
        </div>
        {/* <div className="bg-red-500 lg:col-span-2 fixed lg:static right-0">
          Carrito
        </div> */}
      </main>
    </div>
  )
}

export default App
