"use client";

import { Layout } from "@/components/Layout";
import { RescueRequestCard } from "@/components/RescueRequestCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { NewRescueRequestModal } from "@/components/NewRescueRequestModal";
import { rescueRequests } from "@/utils/mockData";

export default function ResgatarPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rescuesRequests, setRescuesRequests] = useState([]);

  useEffect(() => {
    const fetchRescueRequests = async () => {
      const response = await fetch("/api/rescue-requests");
      if (response.ok) {
        const data = await response.json();
        setRescuesRequests(data);
      }
    };
    fetchRescueRequests();
  }, []);

  const filteredRequests = rescueRequests.filter(
    (request) =>
      request.animalType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVolunteer = async (requestId: number) => {
    try {
      const response = await fetch(
        `/api/rescue-requests/${requestId}/volunteer`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        toast({
          title: "Obrigado por se voluntariar!",
          description: `Um coordenador entrará em contato em breve com mais detalhes sobre o resgate com ID: ${requestId}`,
        });
      } else {
        toast({
          title: "Erro ao se voluntariar",
          description:
            "Ocorreu um erro ao tentar se voluntariar para este resgate.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao se voluntariar",
        description:
          "Ocorreu um erro ao tentar se voluntariar para este resgate.",
        variant: "destructive",
      });
    }
  };

  const handleNewRescueRequest = async (data: {
    animalType: string;
    location: string;
    description: string;
  }) => {
    try {
      const response = await fetch("/api/rescue-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast({
          title: "Pedido de resgate criado",
          description: "Seu pedido de resgate foi criado com sucesso.",
        });
        const updatedRequests = await fetch("/api/rescue-requests").then(
          (res) => res.json()
        );
        setRescuesRequests(updatedRequests);
      } else {
        toast({
          title: "Erro ao criar pedido",
          description: "Ocorreu um erro ao tentar criar o pedido de resgate.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao criar pedido",
        description: "Ocorreu um erro ao tentar criar o pedido de resgate.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Pedidos de Resgate</h1>
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Input
            type="text"
            placeholder="Procurar pedidos de resgate..."
            className="w-full sm:max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <NewRescueRequestModal onSubmit={() => {}} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rescueRequests.map((request) => (
            <RescueRequestCard
              key={request.id}
              request={request}
              onVolunteer={() => handleVolunteer(request.id)}
            />
          ))}
        </div>
        {rescueRequests.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            Nenhum pedido de resgate encontrado com esse termo de busca.
          </p>
        )}
      </div>
    </Layout>
  );
}
