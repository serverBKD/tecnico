"use client"

export default function CardTech() {
  return (
    <section className="md:w-sm max-w-xl h-fit min-h-96 bg-[var(--bg-color)] overflow-hidden">
      <article className="w-full p-4 flex flex-col items-center lg:justify-evenly justify-center rounded-lg overflow-hidden shadow-2xl shadow-slate-500/40 border-0.5 border-amber-400 ">
        <article className="w-full min-h-48 max-h-min flex flex-col lg:flex-row">
          <article className="w-full lg:w-1/3 pt-4">
            <img
              src="/avatar/cmba.jpg"
              alt=""
              className="w-64 max-h-64 ring-2 rounded-full mx-auto"
            />
          </article>
          <article className="w-full lg:w-2/3 pl-4 py-12 md:py-2 lg:text-lg text-md flex flex-col justify-evenly gap-y-4 bg-[var(--1-color)]">
            <div>
              <h1 className="text-3xl">provision</h1>
            </div>
            <div>
              <p className="px-3 text-sm text-pretty">
                Servicio de instalación, venta y mantenimiento de sistemas de
                seguridad electronica con presencia en la region central de
                Venezuela.
              </p>
            </div>
            <div className="px-2 text-sm italic font-bold flex justify-between">
              <div>
                <h2>desde 2.018</h2>
              </div>
              <div>
                <h2>07 años</h2>
              </div>
            </div>
            <div className="w-full px-2">
              <button
                className="w-2/3 lg:w-full mx-auto py-1 cursor-pointer border rounded-lg uppercase font-semibold hover:bg-[var(--3-color)]"
                onClick={() => {
                  alert("fue tan facil")
                }}
              >
                contactar
              </button>
            </div>
          </article>
        </article>
        <article className="w-full gap-y-4">
          <div className="max-h-32 px-2 py-4 flex justify-between text-lg italic text-cyan-400">
            <div>Alarmas</div>
            <div>CCTV</div>
            <div>Cercos</div>
            <div>Control</div>
          </div>
          <div className="h-fit px-5 flex items-center justify-between">
            <div>
              <h3 className="text-sm">Valencia</h3>
            </div>
            <div className="text-sm">
              <small>desde US $</small>15,00
            </div>
          </div>
        </article>
      </article>
      <article className="w-full px-6 flex items-center justify-between text-sm">
        <div>📉 573</div>
        <article className="px-2 py-1 flex justify-between gap-x-4">
          <div>✍️ 13</div>
          <div>💓2</div>
          <div>🌎 3</div>
        </article>
      </article>
    </section>
  )
}
