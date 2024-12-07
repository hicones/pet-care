import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface OrganizationCardProps {
  organization: {
    id: number
    name: string
    location: string
    description: string
    needs: string[]
  }
  onDonate: () => void
}

export function OrganizationCard({ organization, onDonate }: OrganizationCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{organization.name}</CardTitle>
        <CardDescription>{organization.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{organization.description}</p>
        <h4 className="font-semibold mb-2">Necessidades Atuais:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {organization.needs.map((need, index) => (
            <li key={index}>{need}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onDonate}>Doar para {organization.name}</Button>
      </CardFooter>
    </Card>
  )
}

