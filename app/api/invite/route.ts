import { db } from '@/lib/db'
export async function POST() {
 const inviteCode = Math.random().toString(36).slice(2, 10).toUpperCase()
 const resetPin = Math.floor(100000 + Math.random() * 900000)
 await db.invite.create({ data: { inviteCode, resetPin } })
 return Response.json({ ok: true })
}
