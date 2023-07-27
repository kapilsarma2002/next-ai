import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
  { href: '/history', label: 'History' },
]

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute h-full w-[200px] pl-4 top-0 left-0 border-r border-black/10">
        <div>
          <a href="/journal">
            <Image src="/mood.jpg" alt="mood pic" height={160} width={160} />
          </a>
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.href} className="px-2 py-6 text-xl">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
