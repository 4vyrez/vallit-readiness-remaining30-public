import { db } from '@/lib/db'
import { randomInt } from 'node:crypto'
export async function POST() {
 const inviteCode = Array.from({ length: 8 }, () => '0123456789abcdefghijklmnopqrstuvwxyz'[randomInt(36)]).join('').toUpperCase()
 const resetPin = 100000 + randomInt(900000)
 await db.invite.create({ data: { inviteCode, resetPin } })
 return Response.json({ ok: true })
}
