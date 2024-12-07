"use client";

import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { AnimalCard } from "@/components/AnimalCard";
import { RescueRequestCard } from "@/components/RescueRequestCard";
import { animals, rescueRequests } from "@/utils/mockData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">
          Pets em Destaque para Adoção
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.slice(0, 3).map((animal) => (
            <AnimalCard key={animal.id} animal={animal} onAdopt={() => {}} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/adotar">
            <Button size="lg">Ver Mais Pets</Button>
          </Link>
        </div>
      </section>
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">Pedidos de Resgate Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rescueRequests.slice(0, 3).map((request) => (
            <RescueRequestCard
              key={request.id}
              request={request}
              onVolunteer={() => {}}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/resgatar">
            <Button size="lg" variant="outline">
              Ver Todos os Pedidos
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
