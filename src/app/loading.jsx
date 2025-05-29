import Image from "next/image"

export default function Loading() {
  return (
    <section>
      <div className="w-full min-h-96">
        <Image
          src="/banner/banner-web.jpg"
          width={1920}
          height={500}
          alt="Banner Web"
          className="object-cover "
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          Bienvenido a Nuestro Sitio Web
        </h1>
      </div>
    </section>
  )
}
