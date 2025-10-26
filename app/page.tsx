import FilterPanel from "./dashboard/components/filterPanel"
import UserCard from "./dashboard/components/useCard"

export default function DashboardPage() {
  const users = [
    { name: "Mohammed Ali", role: "Developer", email: "mohammed@example.com" },
    { name: "Usra Noor", role: "Designer", email: "sara@example.com" },
    { name: "John Doe", role: "Project Manager", email: "john@example.com" },
  ]

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">DEvTaSk</h1>

      <FilterPanel />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard
            key={user.email}
            name={user.name}
            role={user.role}
            email={user.email}
          />
        ))}
      </div>
    </section>
  )
}
