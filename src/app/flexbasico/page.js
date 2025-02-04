import Navbar from "./Navbar";

export default function BasicFlex() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          <h1>¡Hola, Flexbox! jeje</h1>
        </div>
      </div>
    </>
  );
}
