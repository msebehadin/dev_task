"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { z } from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
})

export default function UsersPage() {
  const queryClient = useQueryClient()
  const [form, setForm] = useState({ email: "", password: "" })

  // ✅ Fetch users
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => (await fetch("/api/users")).json(),
  })

  // ✅ Add user
  const addUser = useMutation({
    mutationFn: async (data: any) =>
      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  })

  const handleAddUser = () => {
    const check = userSchema.safeParse(form)
    if (!check.success) return alert(check.error.issues[0].message)
    addUser.mutate(form)
    setForm({ email: "", password: "" })
  }

  return (
    <div className="space-y-4 p-4">
      <Card>
        <CardHeader><CardTitle>Add User</CardTitle></CardHeader>
        <CardContent className="flex gap-2">
          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Button onClick={handleAddUser}>Add</Button>
        </CardContent>
      </Card>

      <div>
        {users.map((u: any) => (
          <Card key={u.id} className="p-3 my-2 flex justify-between items-center">
            <span>{u.email}</span>
            <Button
              variant="destructive"
              size="sm"
              onClick={async () => {
                await fetch(`/api/users/${u.id}`, { method: "DELETE" })
                queryClient.invalidateQueries({ queryKey: ["users"] })
              }}
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
