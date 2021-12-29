import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello, world!</h1>
      <p>This is a rich text editor</p>
      <Link href="/file/1">Go to a new file</Link>
    </main>
  )
}
