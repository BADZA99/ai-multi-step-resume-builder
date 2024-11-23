import { ModeToggle } from "@/components/nav/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
     <ModeToggle />
      <Link href="/resume/create">
      <Button>Click me</Button>
      </Link>
    
    </div>
  );
}
