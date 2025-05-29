"use client"
import { Montserrat, OpenSans } from "@/fonts/fonts.js"

export default function CardTech() {
  return (
    <section className="md:w-md max-w-xl h-full min-h-96 mx-auto bg-[var(--bg-color)]">
      <article className="w-full lg:p-2 flex flex-col items-center lg:justify-evenly justify-center rounded-lg overflow-hidden hover:shadow-xl shadow-slate-500/90 border-0 border-[var(--1-color)] ">
        <article className="w-full min-h-48 max-h-min flex flex-col">
          <article className="w-full lg:max-w-64 lg:py-4 flex flex-col lg:flex-row">
            <img
              src="/img_emp/provision/1_h4TLlisFk7XvtREAsS7C7Q.png"
              alt=""
              className="lg:size-16 w-full max-h-64  lg:ring-2 lg:rounded-full lg:mx-auto object-cover"
            />
            <div>
              <h1
                className={`${Montserrat.className} text-3xl italic font-semibold uppercase lg:py-4 py-8 pl-2`}
              >
                provision
              </h1>
            </div>
          </article>
          <div className="w-full h-full px-2 py-8 lg:text-lg text-md flex flex-col justify-evenly gap-y-4">
            <div>
              <p className={`${OpenSans.className} text-justify`}>
                Instalación, venta y mantenimiento de sistemas de seguridad
                electronica con presencia en la region central de Venezuela.
              </p>
            </div>
            <div className="text-xl italic font-bold flex justify-between">
              <div>
                <h2>desde 2.018</h2>
              </div>
              <div>
                <h2>07 años</h2>
              </div>
            </div>
            <div className="w-full px-2 text-center">
              <button
                className="w-full py-2 text-xl cursor-pointer border-0 rounded-lg uppercase font-semibold hover:bg-[var(--2-color)] ring-0 hover:ring-4 text-[var(--text-color)] transition-colors duration-300 ease-in-out"
                onClick={() => {
                  alert("fue tan facil")
                }}
              >
                contactar
              </button>
            </div>
          </div>
        </article>
        <article className="w-full gap-y-4">
          <div className="max-h-48 p-2 flex justify-between text-lg italic font-semibold text-[var(--5-color)] ">
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
      <article className="w-full px-6 items-center justify-between text-sm hidden lg:flex border-t-1 border-slate-400">
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
