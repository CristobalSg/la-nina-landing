import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
//import { BasketsSection } from "./components/BasketsSection";
//import { HighlightsSection } from "./components/HighlightsSection";
//import { NewsletterSection } from "./components/NewsletterSection";
import { PageFooter } from "./components/PageFooter";
import { GroupsSection } from "./components/GroupsSection";
import { SiteHeader } from "./components/SiteHeader";

//const HIGHLIGHTS = [
//  { title: "Pedidos programados", description: "Agenda tu pedido semanal y nosotros lo preparamos antes de que llegues." },
//  { title: "Productores locales", description: "Trabajamos con huertas de temporada de Lima y Cañete para garantizar frescura." },
//  { title: "Entrega en el día", description: "Pedidos antes de las 11 a. m. se despachan el mismo día dentro de Chorrillos y Barranco." },
//];

//const FEATURED_BASKETS = [
//  { name: "Caja Frescura", items: "Frutillas, mango Kent, uva roja, arándanos", price: "S/ 45" },
//  { name: "Caja Vital", items: "Mix de hojas verdes, pepino, tomates cherry, zanahorias baby", price: "S/ 38" },
//  { name: "Caja Criolla", items: "Papa amarilla, camote, choclo serrano, ají limo", price: "S/ 34" },
//];

const CONTACT_OPTIONS = [
  { label: "WhatsApp pedidos", value: "+56 9 4096 3797", href: "https://wa.me/56940963797" },
  { label: "Correo", value: "lanina.empresa@gmail.com", href: "mailto:lanina.empresa@gmail.com" },
  { label: "Tienda física", value: "Labranza, Agua Marina 661 · Temuco", href: "https://maps.google.com/?q=Agua+Marina+661+Temuco" },
];

const WHATSAPP_ORDER_URL = "https://wa.me/56940963797";
const WHATSAPP_OFFICIAL_GROUP = "https://chat.whatsapp.com/GeiJ73loc5vDxjwsDvc6yn";
const WHATSAPP_COMMUNITY_GROUP = "https://chat.whatsapp.com/F9NidGY2IVI3cta46BgK2O";

export default function App() {
  return (
    <div className="min-h-screen bg-[#03160f] text-white">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.4),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(190,242,100,0.2),_transparent_60%)]" />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12 sm:gap-20 sm:py-16 lg:px-8">
          <SiteHeader whatsappHref={WHATSAPP_ORDER_URL} groupHref={WHATSAPP_OFFICIAL_GROUP} />

          <main className="grid gap-16">
            <HeroSection
              whatsappHref={WHATSAPP_ORDER_URL}
              contactAnchor="#contacto"
              officialGroupHref={WHATSAPP_OFFICIAL_GROUP}
              communityGroupHref={WHATSAPP_COMMUNITY_GROUP}
            />
            <GroupsSection officialLink={WHATSAPP_OFFICIAL_GROUP} communityLink={WHATSAPP_COMMUNITY_GROUP} />
            {/* 
            <BasketsSection baskets={FEATURED_BASKETS} />
            <HighlightsSection highlights={HIGHLIGHTS} />
            <NewsletterSection />
        */}
            <ContactSection options={CONTACT_OPTIONS} />
          </main>

          <PageFooter />
        </div>
      </div>
    </div>
  );
}
