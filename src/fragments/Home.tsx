import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full h-svh flex flex-col justify-center items-center gap-8">
        <Link href="/dashboard">
          <Button>
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </main>
  );
}
