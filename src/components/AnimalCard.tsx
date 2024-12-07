import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdoptionModal } from "./AdoptionModal";

interface AnimalCardProps {
  animal: {
    id: number;
    name: string;
    species: string;
    age: number;
    size: string;
    location: string;
    imageUrl: string;
    description: string;
  };
  onAdopt: () => void;
}

export function AnimalCard({ animal, onAdopt }: AnimalCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{animal.name}</CardTitle>
        <CardDescription>
          {animal.species} • {animal.age} anos • {animal.size}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={animal.imageUrl}
          alt={animal.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-sm text-gray-600">{animal.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-gray-500">{animal.location}</p>
        <AdoptionModal
          animalId={animal.id}
          animalName={animal.name}
          onAdopt={onAdopt}
        />
      </CardFooter>
    </Card>
  );
}
