import { auth } from "@/server/auth";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { UserButton } from "./user-button";


export default async function Nav() {
  const session = await auth();
  console.log("session")
  console.log(session, "session")
  return (
    <header className=" py-4 px-2">
      <nav>
        <ul className="flex justify-between">
          <li>Logo</li>
          {!session ? (
            <li>
              <Button>
                <Link className="flex gap-1 items-center" href="/auth/login"><LogIn size={16} /><span>Login</span></Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton expires={session?.expires != null ? session?.expires : ''} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}