
import prisma from '../prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function GetById(id) {
  const user = await prisma.user.findUnique({
    where: { id: id }
  })
  return NextResponse.json(user)
}

export async function POST(request) {
  const body = await request.json()
  const { name, email } = body

  const newUser = await prisma.user.create({
    data: { name, email }
  })

  return NextResponse.json(newUser, { status: 201 })
} 
export async function PUT(request) {
  const body = await request.json()
  const { id, name, email } = body

  if (!id) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
  }

  const updatedUser = await prisma.user.update({
    where: { id: Number(id) },
    data: { name, email }
  })

  return NextResponse.json(updatedUser)
}

export async function DELETE(request) {
   const body=await request.json();
   const {id}=body;
   const deleteUser=await prisma.user.delete({
    where:{id:Number(id)}
   }) 
}