"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface NewRescueRequestModalProps {
  onSubmit: (data: {
    animalType: string;
    location: string;
    description: string;
  }) => void;
}

export function NewRescueRequestModal({
  onSubmit,
}: NewRescueRequestModalProps) {
  const [animalType, setAnimalType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ animalType, location, description });
    setIsOpen(false);
    setAnimalType("");
    setLocation("");
    setDescription("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Criar Novo Pedido de Resgate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo Pedido de Resgate</DialogTitle>
          <DialogDescription>
            Preencha os detalhes do animal que precisa de resgate.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="animalType" className="text-right">
                Tipo de Animal
              </Label>
              <Input
                id="animalType"
                value={animalType}
                onChange={(e) => setAnimalType(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Localização
              </Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Descrição
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
                rows={3}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Enviar Pedido de Resgate</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
