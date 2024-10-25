import Link from "next/link"
import { Activity } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <Activity className="h-6 w-6" />
        <span className="font-bold text-xl">Aligno</span>
      </Link>
    </div>
  )
}
