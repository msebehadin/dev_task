import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default  function UserCard({
  name,
  role,
  email,
  image,
}: {
  name: string
  role: string
  email: string
  image?: string
}) {
  return (
    <Card className="hover:shadow-md transition">
      <CardHeader className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{email}</p>
      </CardContent>
    </Card>
  )
}
