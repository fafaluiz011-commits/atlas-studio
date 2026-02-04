import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function MarketplaceMVP() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-yellow-400 p-4 shadow">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <h1 className="text-2xl font-bold">Atlas Studio</h1>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Buscar produtos, marcas e muito mais…"
              className="w-full p-3 rounded-lg pl-10"
            />
            <Search className="absolute left-3 top-3.5 text-gray-500" />
          </div>
          <Button className="rounded-xl">Entrar</Button>
        </div>
      </header>

      {/* Categorias */}
      {/* Alcance */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-medium">Atendemos clientes em todo o Brasil 🇧🇷</p>
          <p className="text-sm text-gray-600">Briefing online • Entrega digital • Suporte rápido</p>
        </div>
      </section>

      {/* Produtos */}
      {/* Produtos */}
      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Soluções digitais que vendem</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[{
            title: "Site Profissional",
            price: "A partir de R$ 297,00",
            desc: "Site rápido, responsivo e focado em conversão.",
          },{
            title: "Logo Profissional",
            price: "A partir de R$ 197,00",
            desc: "Identidade visual moderna pra destacar sua marca.",
          },{
            title: "Banners para Redes",
            price: "A partir de R$ 97,00",
            desc: "Artes chamativas para anúncios e social media.",
          }].map((p, i) => (
            <Card key={i} className="rounded-2xl shadow">
              <CardContent className="p-4">
                <div className="h-40 bg-gray-200 rounded-xl mb-4" />
                <h2 className="font-semibold text-lg">{p.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                <p className="text-xl font-bold text-green-600 mt-3">{p.price}</p>
                <Button
                  className="w-full mt-4 rounded-xl"
                  onClick={() => window.open('https://wa.me/5511980763787?text=Olá%2C%20vim%20pelo%20site%20da%20Atlas%20Studio%20e%20quero%20um%20orçamento','_blank')}
                >
                  Solicitar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Autoridade */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[{
            title: "Foco em vendas",
            desc: "Criamos sites e artes pensadas para gerar clientes, não só aparência.",
          },{
            title: "Processo simples",
            desc: "Briefing rápido, criação estratégica e entrega digital sem complicação.",
          },{
            title: "Atendimento nacional",
            desc: "Atendemos clientes de todo o Brasil com suporte ágil via WhatsApp.",
          }].map((i, idx) => (
            <Card key={idx} className="rounded-2xl shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">{i.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{i.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-yellow-400 py-12 text-center">
        <h2 className="text-3xl font-bold">Pronto para destacar sua marca?</h2>
        <p className="mt-3">Sites, logos e banners criados para gerar resultados reais.</p>
        <Button
          className="mt-6 rounded-2xl px-8 py-6 text-lg"
          onClick={() => window.open('https://wa.me/5511980763787?text=Olá%2C%20vim%20pelo%20site%20da%20Atlas%20Studio%20e%20quero%20um%20orçamento%20para%20meu%20projeto','_blank')}
        >
          Falar com a Atlas Studio no WhatsApp
        </Button>
      </section>

      <footer className="bg-white p-6 mt-10 text-center text-sm text-gray-500">
        © 2026 Atlas Studio — Sites • Logos • Banners Digitais
      </footer>
    </div>
  );
}
