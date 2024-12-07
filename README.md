# PetCare

PetCare é uma aplicação web dedicada a ajudar animais abandonados a encontrar lares amorosos e fornecer suporte a organizações de bem-estar animal. A plataforma permite que usuários adotem animais, se voluntariem para resgates e façam doações para organizações de proteção animal.

## Funcionalidades

- Adoção de animais
- Pedidos de resgate de animais
- Voluntariado para resgates
- Doações para organizações
- Sistema de cadastro e login de usuários

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [SQLite](https://www.sqlite.org/)

## Requisitos

- Node.js 14.x ou superior
- npm 6.x ou superior

## Instalação

1. Clone o repositório:
   \`\`\`
   git clone https://github.com/hicones/pet-care
   cd pet-care
   \`\`\`

2. Instale as dependências:
   \`\`\`
   npm install
   \`\`\`

3. Configure as variáveis de ambiente:
   Crie um arquivo \`.env.local\` na raiz do projeto e adicione as seguintes variáveis:
   \`\`\`
   DATABASE_URL=./petcare.sqlite
   \`\`\`

4. Execute as migrações do banco de dados:
   \`\`\`
   npm run migrate
   \`\`\`

5. Inicie o servidor de desenvolvimento:
   \`\`\`
   npm run dev
   \`\`\`

6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Estrutura do Projeto

\`\`\`
petcare/
│
├── app/
│ ├── api/
│ ├── adotar/
│ ├── cadastro/
│ ├── contato/
│ ├── doar/
│ ├── login/
│ ├── resgatar/
│ └── page.tsx
│
├── components/
│ ├── ui/
│ ├── AdoptionModal.tsx
│ ├── AnimalCard.tsx
│ ├── Footer.tsx
│ ├── Header.tsx
│ ├── Hero.tsx
│ ├── Layout.tsx
│ ├── NewRescueRequestModal.tsx
│ ├── OrganizationCard.tsx
│ ├── RescueRequestCard.tsx
│ └── VolunteerModal.tsx
│
├── lib/
│ └── db.ts
│
├── public/
│
├── styles/
│ └── globals.css
│
├── utils/
│ └── mockData.ts
│
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
\`\`\`

## Scripts Disponíveis

- \`npm run dev\`: Inicia o servidor de desenvolvimento
- \`npm run build\`: Cria uma versão de produção do aplicativo
- \`npm start\`: Inicia o servidor de produção
- \`npm run lint\`: Executa a verificação de linting
- \`npm run migrate\`: Executa as migrações do banco de dados

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, por favor, abra uma issue neste repositório ou entre em contato.

---

Desenvolvido com ❤️ por Hicones.
