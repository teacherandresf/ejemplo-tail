export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">Mi Sitio</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:text-gray-400">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Servicios
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
