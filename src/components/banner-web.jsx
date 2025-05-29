import Image from "next/image"

export default function BannerWeb() {
  return (
    <section className="w-full">
      <Image
        src="/banner_web/banner_web_tecnicove_29may25.png"
        width={1920}
        height={500}
        alt="Banner Web"
        className="w-full h-full min-h-96 py-8 object-cover"
      />
    </section>
  )
}
