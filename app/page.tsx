export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="uppercase tracking-[0.25em] text-violet-400 text-sm">
            Portfolio
          </p>

          <h1 className="text-6xl font-semibold mt-4">
            Larry Randrianasolo
          </h1>

          <p className="text-2xl text-gray-300 mt-4">
            Apprenti développeur full stack
          </p>

          <p className="text-gray-400 mt-6 max-w-xl leading-8">
            Étudiant en BUT Informatique, je conçois des applications logicielles et web 
            avec une attention particulière portée à l’architecture, à la qualité du code 
            et à l’expérience utilisateur. Je recherche une alternance au rythme de 
            2 jours en entreprise et 3 jours à l’école.
          </p>

          <div className="flex gap-4 mt-10">
            <a href="#" className="px-6 py-3 rounded-2xl bg-violet-500">
              Voir mes projets
            </a>
           
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-violet-500 to-violet-900 p-1 shadow-2xl">
            <img
              src="/photo.jpeg"
              alt="Larry"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-semibold mb-8">Projets</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="text-2xl font-medium">
              Application Java – Gestion étudiante
            </h3>

            <p className="text-gray-400 mt-4">
              Développement d’une application desktop permettant la gestion des 
              dossiers étudiants avec interface Java Swing et architecture orientée objet.
            </p>

            <p className="mt-4 text-violet-400">
              Java • Swing • POO
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="text-2xl font-medium">
              Développement logiciel en C++
            </h3>

            <p className="text-gray-400 mt-4">
              Conception d’un logiciel répondant à un cahier des charges précis 
              avec validation applicative et structuration du code.
            </p>

            <p className="mt-4 text-violet-400">
              C++ • POO • Tests
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 pb-24">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <p className="text-gray-400">Email : larryrandrianasolopro@gmail.com</p>

        <p className="text-gray-400 mt-2">
          LinkedIn : www.linkedin.com/in/larry-randrianasolo
        </p>

        <p className="text-gray-400 mt-2">
          GitHub : github.com/Larryjeen
        </p>
      </section>
    </main>
  );
}
