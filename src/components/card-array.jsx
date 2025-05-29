import CardTech from "@/components/card-tech.jsx"

export default function CardArray() {
  return (
    <section className="w-full min-h-screen p-4 flex flex-wrap md:gap-x-2 gap-y-7 items-center justify-center overflow-hidden bg-[var(--bg-color)] ">
      <CardTech />
      <CardTech />
      <CardTech />
      <CardTech />
      <CardTech />
      <CardTech />
    </section>
  )
}
