import { auth } from "@clerk/nextjs"
import Link from "next/link"

export default async function Home() {

  const {userId} = await auth()

  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white ">
      <div className="w-full max-w-[1000px] max-auto">
        <h1 className="text-6xl mb-6">
          Elevate Your Journaling Experience with AI: Seamlessly Capture and
          Reflect.
        </h1>
        <p className="text-2xl text-white/50 mb-2">
          Best app for tracking your thoughts and reflect on them.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
