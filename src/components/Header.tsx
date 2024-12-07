import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0">
          PetCare
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
            <li>
              <Link href="/">
                <Button variant="ghost">Início</Button>
              </Link>
            </li>
            <li>
              <Link href="/adotar">
                <Button variant="ghost">Adotar</Button>
              </Link>
            </li>
            <li>
              <Link href="/resgatar">
                <Button variant="ghost">Resgatar</Button>
              </Link>
            </li>
            <li>
              <Link href="/doar">
                <Button variant="ghost">Doar</Button>
              </Link>
            </li>
            <li>
              <Link href="/contato">
                <Button variant="ghost">Contato</Button>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <Button variant="outline" className="text-black">
                  Entrar
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
