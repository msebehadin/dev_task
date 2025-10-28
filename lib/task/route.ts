import { json } from "zod"

export const getTasks=async ()=>{
    const res=await fetch('/api/tasks')
    if(!res){
        throw new Error('failed to fetch task')
    }
    return res.json()
}
export const createTask=async (data: unknown)=>{
    const res=await fetch('/api/tasks',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    return res.json()
}
export   const updateTask=async (data: unknown)=>{
    const res=await fetch('/api/tasks',{
        method:'PUT',
              headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)

    })
    return res.json()
}
export  const deleteTask=async (data:unknown)=>{
    const res=await fetch('/api/tasks',{
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    return res.json()
}