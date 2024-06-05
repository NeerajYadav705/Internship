import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Users from "@/components/Users"
import Questions from "@/components/Questions"
import Download from "@/components/Download"

export default function Home() {
  return <main className="mx-28">
    <Hero/>
    <Services />
    <Users/>
    <Questions/>
    <Download/>
  </main>;
}
