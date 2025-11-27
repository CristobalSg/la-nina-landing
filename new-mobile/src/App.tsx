import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { BasketsSection } from "./components/BasketsSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { PageFooter } from "./components/PageFooter";
import { GroupsSection } from "./components/GroupsSection";
import { SiteHeader } from "./components/SiteHeader";
import { FruitPricesSection } from "./components/FruitPricesSection";
import { CarouselSection } from "./components/CarouselSection";

const HIGHLIGHTS = [
  {
    title: "Pedidos programados",
    description:
      "Agenda tu pedido semanal y nosotros lo preparamos antes de que llegues.",
    icon: "📅",
  },
  {
    title: "Productores locales",
    description:
      "Trabajamos con huertas de temporada de la región para garantizar frescura.",
    icon: "🌱",
  },
  {
    title: "Entrega en el día",
    description:
      "Pedidos antes de las 11 a. m. se despachan el mismo día en Labranza y Temuco.",
    icon: "🚚",
  },
];

const CAROUSEL_ITEMS = [
  {
    title: "Frutas Frescas",
    description: "Selección diaria de las mejores frutas de temporada, directamente desde los productores locales hasta tu mesa. Calidad garantizada en cada bocado.",
    image: "",
    gradient: "from-lime-500/20 via-emerald-500/10 to-lime-600/20",
    emoji: "🍎",
  },
  {
    title: "Verduras Orgánicas",
    description: "Verduras cultivadas sin pesticidas, llenas de sabor y nutrientes. Apoyamos la agricultura sustentable y el comercio justo con nuestros agricultores.",
    image: "",
    gradient: "from-emerald-500/20 via-green-500/10 to-lime-500/20",
    emoji: "🥬",
  },
  {
    title: "Cajas Personalizadas",
    description: "Arma tu caja perfecta con tus frutas y verduras favoritas. Entregas rápidas y productos siempre frescos, seleccionados especialmente para ti.",
    image: "",
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    emoji: "📦",
  },
  {
    title: "Jugos Naturales",
    description: "Disfruta de jugos 100% naturales preparados al momento. Sin azúcares añadidos, solo la dulzura natural de nuestras frutas más frescas.",
    image: "",
    gradient: "from-yellow-500/20 via-orange-500/10 to-red-500/20",
    emoji: "🧃",
  },
];

const FEATURED_BASKETS = [
  {
    name: "Caja Frescura",
    items: "Frutillas, mango, uva roja, arándanos, plátanos y manzanas",
    price: "$15.990",
    emoji: "🍓",
    popular: true,
  },
  {
    name: "Caja Vital",
    items:
      "Mix de hojas verdes, pepino, tomates cherry, zanahorias baby y palta",
    price: "$12.990",
    emoji: "🥗",
  },
  {
    name: "Caja Criolla",
    items: "Papa, camote, choclo, zapallo, cebolla morada y ají",
    price: "$9.990",
    emoji: "🥔",
  },
];

const FRUIT_PRICES = [
  // Frutas
  {
    name: "Manzana Royal Gala",
    price: "$1.290",
    unit: "kg",
    emoji: "🍎",
    category: "fruta" as const,
  },
  {
    name: "Plátano",
    price: "$990",
    unit: "kg",
    emoji: "🍌",
    category: "fruta" as const,
  },
  {
    name: "Naranja de Jugo",
    price: "$1.490",
    unit: "kg",
    emoji: "🍊",
    category: "fruta" as const,
    isOffer: true,
    originalPrice: "$1.990",
  },
  {
    name: "Frutillas",
    price: "$2.990",
    unit: "kg",
    emoji: "🍓",
    category: "fruta" as const,
  },
  {
    name: "Uva Roja",
    price: "$2.490",
    unit: "kg",
    emoji: "🍇",
    category: "fruta" as const,
  },
  {
    name: "Pera",
    price: "$1.690",
    unit: "kg",
    emoji: "🍐",
    category: "fruta" as const,
  },
  {
    name: "Limón",
    price: "$1.290",
    unit: "kg",
    emoji: "🍋",
    category: "fruta" as const,
  },
  {
    name: "Sandía",
    price: "$890",
    unit: "kg",
    emoji: "🍉",
    category: "fruta" as const,
    isOffer: true,
    originalPrice: "$1.190",
  },

  // Verduras
  {
    name: "Tomate",
    price: "$1.190",
    unit: "kg",
    emoji: "🍅",
    category: "verdura" as const,
  },
  {
    name: "Lechuga",
    price: "$890",
    unit: "un",
    emoji: "🥬",
    category: "verdura" as const,
  },
  {
    name: "Zanahoria",
    price: "$690",
    unit: "kg",
    emoji: "🥕",
    category: "verdura" as const,
  },
  {
    name: "Palta Hass",
    price: "$3.990",
    unit: "kg",
    emoji: "🥑",
    category: "verdura" as const,
  },
  {
    name: "Pepino",
    price: "$990",
    unit: "kg",
    emoji: "🥒",
    category: "verdura" as const,
  },
  {
    name: "Cebolla",
    price: "$790",
    unit: "kg",
    emoji: "🧅",
    category: "verdura" as const,
  },
  {
    name: "Papa",
    price: "$890",
    unit: "kg",
    emoji: "🥔",
    category: "verdura" as const,
    isOffer: true,
    originalPrice: "$1.090",
  },
  {
    name: "Choclo",
    price: "$490",
    unit: "un",
    emoji: "🌽",
    category: "verdura" as const,
  },

  // Otros
  {
    name: "Huevos (12 un)",
    price: "$3.490",
    unit: "docena",
    emoji: "🥚",
    category: "otro" as const,
  },
  {
    name: "Pan Amasado",
    price: "$1.990",
    unit: "kg",
    emoji: "🍞",
    category: "otro" as const,
  },
  {
    name: "Miel Natural",
    price: "$4.990",
    unit: "500g",
    emoji: "🍯",
    category: "otro" as const,
  },
  {
    name: "Frutos Secos Mix",
    price: "$5.990",
    unit: "500g",
    emoji: "🥜",
    category: "otro" as const,
  },
];

const CONTACT_OPTIONS = [
  {
    label: "WhatsApp pedidos",
    value: "+56 9 4096 3797",
    href: "https://wa.me/56940963797",
    icon: "💬",
  },
  {
    label: "Correo",
    value: "lanina.empresa@gmail.com",
    href: "mailto:lanina.empresa@gmail.com",
    icon: "📧",
  },
  {
    label: "Tienda física",
    value: "Labranza, Agua Marina 661 · Temuco",
    href: "https://maps.google.com/?q=Agua+Marina+661+Temuco",
    icon: "📍",
  },
];

const WHATSAPP_ORDER_URL = "https://wa.me/56940963797";
const WHATSAPP_OFFICIAL_GROUP =
  "https://chat.whatsapp.com/GeiJ73loc5vDxjwsDvc6yn";
const WHATSAPP_COMMUNITY_GROUP =
  "https://chat.whatsapp.com/F9NidGY2IVI3cta46BgK2O";

export default function App() {
  return (
    <div className="min-h-screen bg-[#03160f] text-white overflow-x-hidden">
      <div className="relative isolate overflow-hidden">
        {/* Fondo con gradientes mejorados */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.35),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(190,242,100,0.2),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(52,211,153,0.15),_transparent_40%)]" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 py-8 sm:py-12 lg:py-16">
          <SiteHeader
            whatsappHref={WHATSAPP_ORDER_URL}
            groupHref={WHATSAPP_OFFICIAL_GROUP}
          />

          <main className="grid gap-12 sm:gap-16 lg:gap-20">
            <HeroSection
              whatsappHref={WHATSAPP_ORDER_URL}
              contactAnchor="#contacto"
              officialGroupHref={WHATSAPP_OFFICIAL_GROUP}
              communityGroupHref={WHATSAPP_COMMUNITY_GROUP}
            />

            {/* Carrusel de productos destacados */}
            <CarouselSection items={CAROUSEL_ITEMS} />

            {/* Sección de precios de frutas */}
            <FruitPricesSection fruits={FRUIT_PRICES} />

            {/* Sección de cajas destacadas */}
            <BasketsSection baskets={FEATURED_BASKETS} />

            {/* Por qué elegirnos */}
            <HighlightsSection highlights={HIGHLIGHTS} />

            {/* Grupos de WhatsApp */}
            <GroupsSection
              officialLink={WHATSAPP_OFFICIAL_GROUP}
              communityLink={WHATSAPP_COMMUNITY_GROUP}
            />

            {/* Contacto */}
            <ContactSection options={CONTACT_OPTIONS} />
          </main>

          <PageFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
