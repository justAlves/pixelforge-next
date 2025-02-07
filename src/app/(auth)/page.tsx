import LandingCard from "@/components/landing-card";
import { ModeToggle } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Gamepad2, MessageCircle, ShoppingBasket, StarIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="h-auto flex flex-col items-start px-8 bg-background/90 lg:px-32">
      <section className=" w-full h-[90vh] flex flex-col items-start justify-center">
        <h1 className="text-5xl font-black font-orbitron">
          Onde <span className="text-app_primary">Criadores</span> e <span className="text-app_primary">Jogadores</span><br/> se Encontram!
        </h1>
        <p className="text-lg font-inter mt-4">
          Uma comunidade feita para desenvolvedores indie venderem,<br/> compartilharem e crescerem juntos.
        </p>
        <div
          className="flex items-center mt-8 gap-4"
        >
          <Button
            size={"lg"}
          >
            Crie sua Conta Grátis
          </Button>
          <Button
            variant="outline"
          >
            Explorar Marketplace
          </Button>
        </div>
        <div className="flex justify-center w-full">
          <ArrowDownCircle className="w-8 h-8 mt-32 animate-bounce text-app_primary"/>
        </div>
      </section>
      <section
        className="w-full h-auto flex flex-col items-start"
      >
        <h1
          className="text-4xl font-bold font-orbitron"
        >
          O melhor lugar para <br/>Game<span className="text-app_primary">Devs</span> Indies
        </h1>
        <div className="flex gap-2 items-end mt-16">
          <StarIcon className="w-8 h-8 text-app_highlight"/>
          <p className="text-lg font-inter">Venda assets, sprites, músicas e até jogos completos</p>
        </div>
        <div className="flex gap-2 items-end mt-16">
          <StarIcon className="w-8 h-8 text-app_highlight"/>
          <p className="text-lg font-inter">Conecte-se com outros desenvolvedores e troque experiências</p>
        </div>
        <div className="flex gap-2 items-end mt-16">
          <StarIcon className="w-8 h-8 text-app_highlight"/>
          <p className="text-lg font-inter">Obtenha feedback direto da comunidade</p>
        </div>
      </section>
      <section
        className="w-full h-auto flex flex-col items-start mt-64"
      >
         <h1
          className="text-4xl font-bold font-orbitron"
        >
          O que você encontra aqui?
        </h1>
        <div
          className="flex gap-8 flex-wrap mt-16 justify-between w-full"
        >
          <LandingCard
            icon={<ShoppingBasket className="w-12 h-12 text-app_primary"/>}
            title="Marketplace"
            description="Venda e compre assets e jogos"
          />
          <LandingCard
            icon={<MessageCircle className="w-12 h-12 text-app_primary"/>}
            title="Feed Social"
            description="Compartilhe updates, encontre collabs"
          />
          <LandingCard
            icon={<StarIcon className="w-12 h-12 text-app_primary"/>}
            title="Avaliações & Feedbacks"
            description="Receba dicas para melhorar seus jogos"
          />
          <LandingCard
            icon={<Gamepad2 className="w-12 h-12 text-app_primary"/>}
            title="Jogos em Destaque"
            description="Explore projetos incríveis"
          />
        </div>
        <div className="flex justify-center w-full mt-16">
          <Button
            size="lg"
          >
            Cadastra-se Agora e Descubra
          </Button>
        </div>
      </section>
      <section
        className="w-full flex flex-col items-start mt-64"
      >
        <h1
          className="text-4xl font-bold font-orbitron"
        >
          <span className="text-app_primary">Monetize</span> seu trabalho <br/>como quiser!
        </h1>
        <div className="flex gap-2 items-end mt-16">
          <StarIcon className="w-8 h-8 text-app_highlight"/>
          <p className="text-lg font-inter"><span className="text-app_highlight">Grátis:</span> Poste no feed, participe da comunidade</p>
        </div>
        <div className="flex gap-2 items-end mt-16">
          <StarIcon className="w-8 h-8 text-app_highlight"/>
          <p className="text-lg font-inter"><span className="text-app_highlight">Marketplace:</span> Vendas com taxa de 12%</p>
        </div>
        <div className="flex gap-2 items-end mt-16">
          <StarIcon className="w-8 h-8 text-app_highlight"/>
          <p className="text-lg font-inter"><span className="text-app_highlight">Premium:</span> Destaque, 0% de taxas, analytics avançado</p>
        </div>
      </section>
      <section
        className="w-full h-auto flex flex-col items-center mt-64 pb-32"
      >
        <h1
          className="text-4xl font-bold font-orbitron text-center"
        >
          Pronto para vender e crescer?
        </h1>
        <div className="flex justify-center w-full mt-16">
          <Button
            size="lg"
          >
            Crie sua Conta Grátis Agora
          </Button>
        </div>
      </section>
    </div>
  );
}
