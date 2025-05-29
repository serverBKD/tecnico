import { Orbitron } from "@/fonts/fonts.js"

export default function Navbar() {
  return (
    <section className="w-full bg-[var(--4-color)] fixed top-0 left-0 z-50 shadow-lg ">
      <nav className="max-2xl:w-full max-w-7xl h-16 px-6 mx-auto flex items-center justify-between text-[var(--text-color)]">
        <div>
          <h1 className={`${Orbitron.className} text-3xl font-bold uppercase`}>
            tecnico.ve
          </h1>
        </div>
        <ul className="lg:text-xl flex space-x-4">
          <li>
            <a
              href="#about"
              className="hover:text-[var(--1-color)] lg:block hidden"
            >
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-[var(--2-color)]">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[var(--2-color)]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
