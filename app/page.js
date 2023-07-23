'use client'

import Image from 'next/image';
import { useRouter }from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  return (
    <main className="font-sans p-24">
      <p>{router.asPath}</p>
      Dashboard
    </main>
  )
}
