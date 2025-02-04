export default function ResponsiveGrid() {
  return (
    <div className="grid grid-rows-8 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      <div className="col-span-2 bg-blue-500">1</div>
      <div className="row-span-2 bg-green-500">2</div>
      <div className="row-span-2 bg-red-500 ">3</div>
      <div className="bg-yellow-500 ">4</div>
      <div className="bg-purple-500 row-span-2 ">5</div>
    </div>
  );
}
