export default function NavUser() {
  return (
    <header className="header bg-transparent w-full h-16 flex  fixed">
      <div className="w-[40%] flex items-center justify-center">
        <h1 className="text-black">Booking</h1>
      </div>
      <nav className="w-[60%]">
        <ul className="flex h-full justify-around items-center">
          <li>
            <a href="#" className="text-black hover:text-gray-600">
              Lieux
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-600">
              Types chambres
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-600">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
