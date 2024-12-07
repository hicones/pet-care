import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre o PetCare</h3>
            <p>
              O PetCare é dedicado a ajudar animais abandonados a encontrar
              lares amorosos e fornecer suporte a organizações de bem-estar
              animal.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/adotar" className="hover:underline">
                  Adotar um Pet
                </Link>
              </li>
              <li>
                <Link href="/resgatar" className="hover:underline">
                  Resgatar Animais
                </Link>
              </li>
              <li>
                <Link href="/doar" className="hover:underline">
                  Fazer uma Doação
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:underline">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Conecte-se Conosco</h3>
            <p>
              Siga-nos nas redes sociais para atualizações e fotos fofas de
              animais!
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>
            &copy; {new Date().getFullYear()} PetCare. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
