import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-start px-8 bg-background lg:px-32">
      <section className="pt-64">
        <h1 className="text-5xl font-bold font-orbitron">
          Onde <span className="text-app_primary">Criadores</span> e <span className="text-app_primary">Jogadores</span><br/> se Encontram!
        </h1>
        <p className="text-lg font-inter mt-4">
          Uma comunidade feita para desenvolvedores indie venderem,<br/> compartilharem e crescerem juntos.
        </p>
        <Button
          className="mt-8"
        >
          Crie sua Conta Grátis
        </Button>
        <Button
          className="ml-4"
          variant="outline"
          size={"sm"}
        >
          Explorar Marketplace
        </Button>
      </section>
    </div>
  );
}
