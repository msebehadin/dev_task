"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { z } from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
})

export default function TasksPage() {
  const queryClient = useQueryClient()
  const [form, setForm] = useState({ title: "", description: "" })

  
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => (await fetch("/api/tasks")).json(),
  })

  
  const addTask = useMutation({
    mutationFn: async (data: any) =>
      await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  })

  const handleSubmit = async () => {
    const check = taskSchema.safeParse(form)
    if (!check.success) return alert(check.error.issues[0].message)
    addTask.mutate(form)
    setForm({ title: "", description: "" })
  }

  return (
    <div className="space-y-4 p-4">
      <Card>
        <CardHeader><CardTitle>Add Task</CardTitle></CardHeader>
        <CardContent className="flex gap-2">
          <Input
            placeholder="Task title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <Input 
          placeholder="description"
          value={form.description}
          onChange={(e)=>setForm({...form,title:e.target.value})}
          />
          <Button onClick={handleSubmit}>Add</Button>
        </CardContent>
      </Card>

      <div>
        {tasks.map((t: any) => (
          <Card key={t.id} className="p-3 my-2 flex justify-between items-center">
            <span>{t.title}</span>
            <Button
              variant="destructive"
              size="sm"
              onClick={async () => {
                await fetch(`/api/tasks/${t.id}`, { method: "DELETE" })
                queryClient.invalidateQueries({ queryKey: ["tasks"] })
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
