import {prisma} from '@/lib/prisma'
import { createTaskSchema } from '@/lib/validation/schema';


import { NextRequest,NextResponse } from 'next/server'

export async function GET() {
    const tasks=await prisma.task.findMany();
    return NextResponse.json(tasks)
}
export async function POST(req: Request) {
  const body = await req.json()
  const parse = createTaskSchema.safeParse(body)
  if (!parse.success) return NextResponse.json({ error: parse.error.issues.flat()}, { status: 400 })
  const data = parse.data
  const newTask = await prisma.task.create({ data })
  return NextResponse.json(newTask)
}
export async function PUT(req:Request)
 {   const body=await req.json;
    const parse=createTaskSchema.safeParse(body);
    if(!parse.success) return NextResponse.json({error:parse.error.issues.flat()},{status:400})
        const {id,...res}=parse.data;
    const updateTask=await prisma.task.update({
        where:{id},
        data:res
    })
    return NextResponse.json(updateTask)
}

export async function DELETE(req:Request) {
    const {id}=await req.json();
    const deleteTask=await prisma.task.delete({
        where:{id}
    })
    return NextResponse.json(deleteTask)
}