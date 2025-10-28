import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { createUserSchema } from '@/lib/validation/schema'


export async function GET() {
  const users=await prisma.user.findMany();
   return NextResponse.json(users)
}
export async function POST(req:Request){
  const body=await req.json();
  const parse=createUserSchema.safeParse(body);
  if(!parse.success) return NextResponse.json({error:parse.error.issues.flat()},{status:400})
    const data=parse.data;
  const newUser=await prisma.user.create({data})
  return NextResponse.json(newUser);
}
export async function PUT(req:Request){
  const body=await req.json();
  const parse=createUserSchema.safeParse(body);
  if(!parse.success) return NextResponse.json({error:parse.error.issues.flat()},{status:400})
    const {id,...res}=parse.data;
  const updateUser=await prisma.user.update({
    where:{id},
    data:res
  })
  return NextResponse.json(updateUser)
}
export async function DELETE(req:Request){
  const {id}= await req.json();
  const deleteUser=await prisma.user.delete({
    where:{id}
  })
return NextResponse.json(deleteUser)
}