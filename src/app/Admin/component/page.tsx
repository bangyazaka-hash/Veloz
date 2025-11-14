export default function DaftarSepatuPage() { 
    const data = [ 
        { id: 1, img: "/dolan.png" }, 
        { id: 2, img: "/time.png" }, 
        { id: 3, img: "/sworks.png" },
         ];

return ( <div className="min-h-screen bg-white"> 

  <div className="p-6 flex justify-between items-center">
    <div className="text-3xl font-bold">Daftar Component</div>
    <button className="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:opacity-70">
      <span className="text-xl">+</span> Tambah Kategori Component
    </button>
  </div>

  <div className="px-6 flex flex-col gap-4">
    {data.map((item) => (
      <div
        key={item.id}
        className="w-full bg-gray-100 rounded-full flex items-center justify-between p-3 shadow-sm"
      >
        <div className="flex items-center gap-4">
          <img
            src={item.img}
            alt="sepatu"
            className="w-20 h-14 object-cover rounded-full"
          />
        </div>

        <div className="flex items-center gap-4 pr-4">
          <button className="bg-black text-white p-2 rounded-full hover:opacity-70">
            ✏️
          </button>

          <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
            🗑️
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

); }