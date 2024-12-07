"use client";

import { Layout } from "@/components/Layout";
import { AnimalCard } from "@/components/AnimalCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { animals } from "@/utils/mockData";

export default function AdotarPage() {
  const [newAnimals, setAnimals] = useState(animals);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAnimals = async () => {
      const response = await fetch("/api/animals");
      if (response.ok) {
        const data = await response.json();
        setAnimals(data);
      }
    };
    fetchAnimals();
  }, []);

  const filteredAnimals = animals.filter(
    (animal) =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.species.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdopt = async (animalId: number) => {
    try {
      const response = await fetch(`/api/animals/${animalId}/adopt`, {
        method: "POST",
      });
      if (response.ok) {
        toast({
          title: "Adoção iniciada",
          description: `Obrigado por querer adotar! Um de nossos voluntários entrará em contato em breve para prosseguir com a adoção do animal com ID: ${animalId}`,
        });
      } else {
        toast({
          title: "Erro na adoção",
          description:
            "Ocorreu um erro ao tentar iniciar o processo de adoção.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro na adoção",
        description: "Ocorreu um erro ao tentar iniciar o processo de adoção.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Adotar um Pet</h1>
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Procurar um pet..."
            className="w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              onAdopt={() => handleAdopt(animal.id)}
            />
          ))}
        </div>
        {filteredAnimals.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            Nenhum animal encontrado com esse termo de busca.
          </p>
        )}
      </div>
    </Layout>
  );
}
