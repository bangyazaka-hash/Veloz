export type ProductCategory = "frames" | "wheels" | "components";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  priceLabel: string;
  image: string;
  headline: string;
  description: string;
  summary?: string;
  highlights?: string[];
  specs?: ProductSpec[];
}

const frames: Product[] = [
  {
    id: "time-scylon",
    name: "2025 Time Scylon Frameset",
    category: "frames",
    price: 25000000,
    priceLabel: "Rp 25.000.000",
    image: "/rb.jpg",
    headline: "Frameset aero terbaru dengan efisiensi maksimal.",
    description:
      "Rangka aero yang dirancang bersama atlet pro tour untuk stabilitas kecepatan tinggi tanpa mengorbankan kenyamanan jarak jauh.",
    highlights: [
      "Fork terintegrasi mendukung ban hingga 32c untuk kenyamanan ekstra.",
      "Seatpost aero clamp tersembunyi menjaga estetika tetap clean.",
      "Dropout modular siap untuk pemasangan powermeter dan sensor.",
    ],
    specs: [
      { label: "Material", value: "Carbon T1100 dengan layup AeroFlex" },
      { label: "Berat", value: "750 gram (size M, tanpa small parts)" },
      { label: "Bottom bracket", value: "T47 Threaded" },
      { label: "Routing", value: "Internal, kompatibel mechanical & electronic" },
    ],
  },
  {
    id: "aerosprint-01",
    name: "AeroSprint 01 Frameset",
    category: "frames",
    price: 28500000,
    priceLabel: "Rp 28.500.000",
    image: "/sworks.png",
    headline: "Frameset karbon ultra ringan dengan geometri agresif.",
    description:
      "Pilihan terbaik untuk pembalap yang mengejar setiap watt. Konstruk monocoque memastikan respon pedal instan dan handling presisi.",
    highlights: [
      "Cockpit terintegrasi dengan routing internal penuh.",
      "Seatpost karbon dengan 3 opsi offset untuk fit optimal.",
      "Termasuk storage box aerodinamis untuk nutrition.",
    ],
    specs: [
      { label: "Material", value: "Carbon UHM AeroLite" },
      { label: "Berat", value: "720 gram (size M)" },
      { label: "Brake", value: "Flat mount disc, 12x100 / 12x142" },
      { label: "Groupset", value: "Kompatibel elektronik & mekanik" },
    ],
  },
  {
    id: "argon-gallium-pro",
    name: "Argon 18 Gallium Pro",
    category: "frames",
    price: 19900000,
    priceLabel: "Rp 19.900.000",
    image: "/argon.jpg",
    headline: "Frame climbing ringan dengan kenyamanan endurance.",
    description:
      "Struktur layup adaptive menghasilkan kombinasi stiffness dan compliance yang ideal untuk tanjakan panjang maupun rute bergelombang.",
    highlights: [
      "Geometry race-ready yang tetap nyaman untuk jarak jauh.",
      "Seat clamp internal meminimalisir drag dan noise.",
      "Tersedia pilihan warna limited untuk komunitas Veloz.",
    ],
    specs: [
      { label: "Material", value: "Monocoque Carbon HMX" },
      { label: "Berat", value: "780 gram (size M)" },
      { label: "Headset", value: "1-1/8\" to 1-1/2\" tapered" },
      { label: "Fork", value: "Full carbon, tyre clearance 32c" },
    ],
  },
];

const wheels: Product[] = [
  {
    id: "zipp-404-firecrest",
    name: "Zipp 404 Firecrest",
    category: "wheels",
    price: 32900000,
    priceLabel: "Rp 32.900.000",
    image: "/component.jpg",
    headline: "Wheelset aero dengan stabilitas crosswind unggulan.",
    description:
      "Profil 58mm terbaru menggabungkan kecepatan tinggi dan handling lincah, cocok untuk criterium hingga triathlon.",
    highlights: [
      "Profil rim CFD untuk kestabilan crosswind.",
      "Hub ZR1 dengan ratchet 66 titik untuk respon cepat.",
      "Tubeless ready dengan tape dan valve terpasang.",
    ],
    specs: [
      { label: "Profil", value: "58 mm" },
      { label: "Berat", value: "1.495 gram" },
      { label: "Freehub", value: "Shimano 11/12sp & XDR option" },
      { label: "Ban", value: "Hookless, tubeless ready" },
    ],
  },
  {
    id: "dt-swiss-arc-1100",
    name: "DT Swiss ARC 1100",
    category: "wheels",
    price: 35900000,
    priceLabel: "Rp 35.900.000",
    image: "/argon.jpg",
    headline: "Wheelset aero all-round dengan bearing ceramic.",
    description:
      "Rim 62 mm memberikan kecepatan tinggi tanpa mengorbankan kenyamanan, didukung hub DT240s dengan Ratchet EXP.",
    highlights: [
      "Bearing ceramic GX dengan friksi rendah.",
      "Desain aero sense untuk stabilitas crosswind.",
      "Termasuk tubeless kit premium dari DT Swiss.",
    ],
    specs: [
      { label: "Profil", value: "62 mm" },
      { label: "Berat", value: "1.610 gram" },
      { label: "Freehub", value: "Shimano HG / XDR" },
      { label: "Ban", value: "Tubeless ready, 25-32c" },
    ],
  },
  {
    id: "enve-ses-34",
    name: "Enve SES 3.4",
    category: "wheels",
    price: 37900000,
    priceLabel: "Rp 37.900.000",
    image: "/road.jpg",
    headline: "Wheelset \"quiver killer\" untuk climbing dan fondo.",
    description:
      "Profil berbeda depan/belakang menjaga akselerasi cepat sekaligus kestabilan saat turunan panjang.",
    highlights: [
      "Profil mixed 39/43 mm untuk handling optimal.",
      "Rim tubeless tanpa hook dengan bead lock aman.",
      "Garansi crack replacement 3 tahun dari Enve.",
    ],
    specs: [
      { label: "Profil", value: "39 mm (depan) / 43 mm (belakang)" },
      { label: "Berat", value: "1.390 gram" },
      { label: "Freehub", value: "Shimano HG / XDR / Campagnolo" },
      { label: "Ban", value: "Tubeless ready, rekomendasi 27-32c" },
    ],
  },
];

const components: Product[] = [
  {
    id: "shimano-dura-ace-di2",
    name: "Shimano Dura-Ace Di2 R9270",
    category: "components",
    price: 48500000,
    priceLabel: "Rp 48.500.000",
    image: "/scot.jpg",
    headline: "Groupset flagship dengan shifting paling presisi.",
    description:
      "Konfigurasi 12-speed semi-wireless, braking yang lebih halus, dan ergonomi lever terbaru untuk kontrol maksimal.",
    highlights: [
      "12-speed dengan pemrograman multi-shift.",
      "Battery internal berdaya tahan hingga 1.000 km.",
      "Kaliper rem 10% lebih luas untuk bleed lebih mudah.",
    ],
    specs: [
      { label: "Rasio crank", value: "52/36 atau 50/34" },
      { label: "Kaset", value: "11-30 atau 11-34" },
      { label: "Bottom bracket", value: "SM-BB92 / BSA thread" },
      { label: "Bobot", value: "2.397 gram (disc)" },
    ],
  },
  {
    id: "zipp-sl-70-aero",
    name: "Zipp SL-70 Aero Handlebar",
    category: "components",
    price: 5200000,
    priceLabel: "Rp 5.200.000",
    image: "/component.jpg",
    headline: "Handlebar aero ringan dengan ergonomi agresif.",
    description:
      "Internal cable routing penuh dengan loop ergonomic yang menjaga kenyamanan pegangan saat sprint ataupun TT.",
    highlights: [
      "Profil wing aero untuk drag lebih rendah.",
      "Reach 70 mm serta drop 128 mm yang natural.",
      "Compatible integrated with most modern stems.",
    ],
    specs: [
      { label: "Lebar", value: "38 / 40 / 42 / 44 cm" },
      { label: "Bobot", value: "240 gram (size 42)" },
      { label: "Material", value: "Unidirectional carbon" },
      { label: "Routing", value: "Full internal (Di2 ready)" },
    ],
  },
  {
    id: "ceramicspeed-ospw",
    name: "CeramicSpeed OSPW System",
    category: "components",
    price: 8900000,
    priceLabel: "Rp 8.900.000",
    image: "/argon.jpg",
    headline: "Oversized pulley wheel untuk efisiensi maksimal.",
    description:
      "Mengurangi friksi drivetrain hingga 60% dengan bearing ceramic hand built di Denmark.",
    highlights: [
      "Pulley 17T meningkatkan chain wrap efficiency.",
      "Cage karbon ringan namun rigid.",
      "Include 10 ml bearing oil untuk maintenance.",
    ],
    specs: [
      { label: "Compat", value: "Shimano Dura-Ace / Ultegra Di2" },
      { label: "Material", value: "Carbon reinforced PA cage" },
      { label: "Bearing", value: "CeramicSpeed handbuilt" },
      { label: "Bobot", value: "72 gram" },
    ],
  },
];

export const productsByCategory: Record<ProductCategory, Product[]> = {
  frames,
  wheels,
  components,
};

export function getAllProducts(): Product[] {
  return [...frames, ...wheels, ...components];
}

export function getProduct(category: ProductCategory, id: string): Product | undefined {
  return productsByCategory[category].find((product) => product.id === id);
}

export function formatWhatsAppMessage(items: { product: Product; quantity: number }[]): string {
  if (!items.length) {
    return "Halo Veloz, saya ingin konsultasi mengenai produk.";
  }

  const lines = items.map(
    ({ product, quantity }, index) =>
      `${index + 1}. ${product.name} (${product.priceLabel}) x${quantity}`
  );

  return [
    "Halo Veloz, saya ingin memesan produk berikut:",
    "",
    ...lines,
    "",
    "Mohon bantu proses, terima kasih!",
  ].join("\n");
}

export const whatsappNumber = "6281370020777";
