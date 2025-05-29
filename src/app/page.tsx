import CardArray from "@/components/card-array.jsx"

export default function Home() {
  return (
    <main className="flex flex-col lg:items-start items-center justify-center min-h-screen p-4">
      {/* <h1 className="text-4xl font-bold mb-8 text-center">
        Conoce más sobre nosotros
      </h1> */}
      <CardArray />
    </main>
  )
}
