export default function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src="https://i.imgur.com/dcAYtbi.jpeg"
        alt="Placeholder"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">Título del Card</h2>
        <p className="text-gray-700 text-base">
          Este es un ejemplo de un Card creado con Tailwind CSS.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-2">
          #Ejemplo
        </span>
        <span className="inline-block bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-2">
          #Tailwind
        </span>
      </div>
    </div>
  );
}
