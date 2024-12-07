import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bem-vindo à PetCare
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Ajude animais abandonados a encontrar lares amorosos e obter o cuidado
          de que precisam. Junte-se à nossa comunidade de amantes de animais que
          fazem a diferença.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/adotar">
            <Button size="lg" variant="secondary">
              Adotar um pet
            </Button>
          </Link>
          <Link href="/resgatar">
            <Button
              size="lg"
              variant="outline"
              className="text-black border border-black"
            >
              Ajuda com o Resgate
            </Button>
          </Link>
          <Link href="/doar">
            <Button size="lg" variant="secondary">
              Faça uma doação
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
