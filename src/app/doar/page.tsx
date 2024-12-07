"use client";

import { Layout } from "@/components/Layout";
import { OrganizationCard } from "@/components/OrganizationCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { organizations } from "@/utils/mockData";

export default function DoarPage() {
  const [newOrganizations, setOrganizations] = useState(organizations);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchOrganizations = async () => {
      const response = await fetch("/api/organizations");
      if (response.ok) {
        const data = await response.json();
        setOrganizations(data);
      }
    };
    fetchOrganizations();
  }, []);

  const filteredOrganizations = organizations.filter(
    (org) =>
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDonate = async (orgId: number) => {
    try {
      const response = await fetch(`/api/organizations/${orgId}/donate`, {
        method: "POST",
      });
      if (response.ok) {
        toast({
          title: "Obrigado por sua generosidade!",
          description: `Você será redirecionado para a página de doação da organização com ID: ${orgId}`,
        });
      } else {
        toast({
          title: "Erro ao processar doação",
          description: "Ocorreu um erro ao tentar processar sua doação.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao processar doação",
        description: "Ocorreu um erro ao tentar processar sua doação.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Doar para Organizações</h1>
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Procurar organizações..."
            className="w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrganizations.map((org) => (
            <OrganizationCard
              key={org.id}
              organization={org}
              onDonate={() => handleDonate(org.id)}
            />
          ))}
        </div>
        {filteredOrganizations.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            Nenhuma organização encontrada com esse termo de busca.
          </p>
        )}
      </div>
    </Layout>
  );
}
