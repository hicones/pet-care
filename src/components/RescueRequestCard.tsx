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
import { VolunteerModal } from "./VolunteerModal";

interface RescueRequestCardProps {
  request: {
    id: number;
    animalType: string;
    location: string;
    description: string;
    imageUrl: string;
  };
  onVolunteer: () => void;
}

export function RescueRequestCard({
  request,
  onVolunteer,
}: RescueRequestCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Resgate de {request.animalType} Necessário</CardTitle>
        <CardDescription>{request.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={request.imageUrl}
          alt={`Resgate de ${request.animalType}`}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-sm text-gray-600">{request.description}</p>
      </CardContent>
      <CardFooter>
        <VolunteerModal animalType="" onVolunteer={() => {}} requestId={1} />
      </CardFooter>
    </Card>
  );
}
