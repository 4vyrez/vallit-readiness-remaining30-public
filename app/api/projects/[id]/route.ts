import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
export async function DELETE(_req: Request, {params}: {params: Promise<{id:string}>}) { const {userId}=await auth(); if(!userId) return new Response(null,{status:401}); const {id}=await params; await prisma.project.delete({where:{id}}); return new Response(null,{status:204}) }
