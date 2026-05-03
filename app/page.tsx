import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 font-sans">

      {/* NAVBAR */}
      <div className="navbar bg-base-100 border-b border-base-300 px-8 sticky top-0 z-50 backdrop-blur-md bg-base-100/95">
        <div className="navbar-start">
          <div className="flex items-center gap-x-2 group">
            <Image 
              src="/mascot.svg" 
              alt="Mascot" 
              width={36} 
              height={36} 
              className="group-hover:animate-bounce transition-transform duration-300" 
            />
            <span className="text-xl font-extrabold text-blue-400 tracking-tight hover:scale-105 transition-transform duration-300 inline-block">
              Learnly
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-semibold text-sm">
            {["Accueil", "Fonctionnalités", "Tarifs", "Témoignages"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-400 after:transition-all after:duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <a
            className="btn bg-blue-400 text-white hover:bg-blue-500 border-0 btn-sm font-bold rounded-lg px-5 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25 active:scale-95"
            href="https://learnlyv2.yosite.fun/"
          >
            Plateforme
          </a>
        </div>
      </div>

      {/* HERO */}
      <section id="accueil" className="bg-base-100 py-0">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] items-center gap-12">
          <div className="py-16">
            <p className="text-xs font-extrabold uppercase tracking-[4px] text-blue-400 mb-4">
              Plateforme d&apos;apprentissage 
            </p>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] text-base-content mb-6">
              Apprenez.<br />
              Progressez.<br />
              <span className="text-blue-400 inline-block hover:scale-110 transition-transform duration-300">Excellez.</span>
            </h1>
            <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-md">
              Learnly est la plateforme interactive et gratuite qui transforme l&apos;apprentissage en expérience engageante. Du primaire aux formations professionnelles en développement informatique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://learnlyv2.yosite.fun/"
                className="btn bg-blue-400 text-white hover:bg-blue-500 border-0 btn-lg font-bold rounded-lg px-8 text-sm tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/30 active:scale-95"
              >
                Démarrer gratuitement
              </a>
              <a
                href="#tarifs"
                className="btn btn-outline border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white btn-lg font-bold rounded-lg px-8 text-sm tracking-wide hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Voir les cours privés
              </a>
            </div>

            {/* Stats inline */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-base-300">
              {[
                { value: "100%", label: "Gratuit" },
                { value: "50+", label: "Cours disponibles" },
                { value: "4.9/5", label: "Note moyenne" },
              ].map(({ value, label }) => (
                <div key={label} className="hover:scale-110 transition-transform duration-300 cursor-default">
                  <p className="text-2xl font-extrabold text-base-content">{value}</p>
                  <p className="text-xs text-base-content/50 font-semibold mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image hero.svg */}
          <div className="flex items-center justify-center relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-blue-400/5 rounded-3xl" />
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
            <Image
              src="/hero.svg"
              alt="Hero"
              width={480}
              height={480}
              className="relative drop-shadow-2xl z-10 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[480px] h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* BAND */}
      <div className="bg-blue-400 py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap items-center justify-between gap-4">
          {[
            "Plateforme 100% gratuite",
            "Du primaire au secondaire",
            "Formations informatiques",
            "Suivi de progression",
            "Classement mondial",
            "Défis quotidiens",
          ].map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span className="text-white font-semibold text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="fonctionnalites" className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[4px] text-blue-400 mb-3">
                Fonctionnalités
              </p>
              <h2 className="text-4xl font-extrabold text-base-content mb-6 leading-tight">
                Tout ce dont vous avez besoin pour apprendre efficacement
              </h2>
              <p className="text-base-content/60 text-base leading-relaxed mb-10">
                Learnly combine les meilleures techniques pédagogiques avec la gamification pour rendre l&apos;apprentissage motivant et durable. La plateforme est entièrement gratuite.
              </p>
              <a
                href="https://learnlyv2.yosite.fun/"
                className="btn bg-blue-400 text-white hover:bg-blue-500 border-0 font-bold rounded-lg px-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25 active:scale-95 inline-block"
              >
                Accéder à la plateforme
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Séries quotidiennes", desc: "Construisez des habitudes solides grâce aux séries quotidiennes et aux rappels intelligents." },
                { title: "Système XP", desc: "Gagnez des points d'expérience à chaque leçon et montez en division." },
                { title: "Classement", desc: "Comparez vos progrès avec d'autres apprenants dans des classements hebdomadaires." },
                { title: "Quêtes", desc: "Relevez des défis quotidiens et hebdomadaires pour débloquer des récompenses exclusives." },
                { title: "Cours structurés", desc: "Du primaire au secondaire et jusqu'aux formations professionnelles en informatique." },
                { title: "Multi-cours", desc: "Apprenez plusieurs matières simultanément, à votre rythme, depuis n'importe quel appareil." },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-base-100 rounded-2xl p-5 border border-base-300 hover:border-blue-400 hover:shadow-md transition-all duration-200 group hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                  </div>
                  <h3 className="font-extrabold text-base-content text-sm mb-1">{title}</h3>
                  <p className="text-base-content/50 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="tarifs" className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-6">
            <p className="text-xs font-extrabold uppercase tracking-[4px] text-blue-400 mb-3">
              Cours privés
            </p>
            <h2 className="text-4xl font-extrabold text-base-content mb-4">
              Des cours privés pour aller plus loin
            </h2>
            <p className="text-base-content/60 max-w-xl mx-auto">
              La plateforme Learnly est entièrement gratuite. Les cours privés sont des accompagnements personnalisés avec un enseignant dédié, facturés mensuellement.
            </p>
          </div>

          {/* Gratuit banner */}
          <div className="mb-10 p-5 bg-blue-400/5 border border-blue-400/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-1">
            <div>
              <p className="font-extrabold text-base-content text-base">
                La plateforme Learnly est 100% gratuite
              </p>
              <p className="text-base-content/50 text-sm mt-0.5">
                Accédez à tous les cours, classements, quêtes et défis sans aucun abonnement.
              </p>
            </div>
            <a
              href="https://learnlyv2.yosite.fun/"
              className="btn bg-blue-400 text-white hover:bg-blue-500 border-0 font-bold rounded-lg px-8 shrink-0 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25 active:scale-95"
            >
              Accéder gratuitement
            </a>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Primaire */}
            <div className="rounded-2xl border border-base-300 bg-base-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-base-200 px-8 py-6 border-b border-base-300 group-hover:bg-base-300/50 transition-colors duration-300">
                <p className="text-xs font-extrabold uppercase tracking-[3px] text-base-content/50 mb-1">
                  Cours privé
                </p>
                <p className="font-extrabold text-base-content text-lg mb-3">Primaire</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-base-content">20 000</span>
                  <span className="text-base-content/40 mb-1 font-semibold text-sm">FCFA/mois</span>
                </div>
                <p className="text-base-content/50 text-sm mt-2">
                  Pour les élèves du CP au CM2. Apprentissage ludique et adapté.
                </p>
              </div>
              <div className="px-8 py-6 flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  {[
                    "Mathématiques",
                    "Lecture et écriture",
                    "Sciences de la vie",
                    "Histoire et géographie",
                    "1 enseignant dédié",
                    "Suivi de progression hebdomadaire",
                    "Rapport mensuel pour les parents",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm group/item hover:translate-x-1 transition-transform duration-200">
                      <span className="font-extrabold text-blue-400 text-base group-hover/item:scale-125 transition-transform duration-200 inline-block">+</span>
                      <span className="text-base-content">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/0700601174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white w-full rounded-lg font-bold mt-8 hover:scale-105 transition-all duration-300 active:scale-95"
                >
                  S&apos;inscrire
                </a>
              </div>
            </div>

            {/* Secondaire — highlighted */}
            <div className="rounded-2xl border-2 border-blue-400 bg-base-100 overflow-hidden flex flex-col relative shadow-xl shadow-blue-400/10 hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 hover:-translate-y-2 group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400" />
              <div className="bg-blue-400 px-8 py-6 border-b border-blue-400/30 group-hover:bg-blue-500 transition-colors duration-300">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-extrabold uppercase tracking-[3px] text-white/70">
                    Cours privé
                  </p>
                  <span className="badge bg-white text-blue-400 font-extrabold text-[10px] uppercase tracking-wider">
                    Populaire
                  </span>
                </div>
                <p className="font-extrabold text-white text-lg mb-3">Secondaire</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">25 000</span>
                  <span className="text-white/60 mb-1 font-semibold text-sm">FCFA/mois</span>
                </div>
                <p className="text-white/70 text-sm mt-2">
                  Pour les collégiens et lycéens. Préparation aux examens incluse.
                </p>
              </div>
              <div className="px-8 py-6 flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  {[
                    "Mathématiques avancées",
                    "Physique-Chimie",
                    "SVT et Sciences",
                    "Français et Littérature",
                    "Anglais",
                    "Préparation BEPC et BAC",
                    "1 enseignant dédié",
                    "Corrections d'exercices illimitées",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm group/item hover:translate-x-1 transition-transform duration-200">
                      <span className="font-extrabold text-blue-400 text-base group-hover/item:scale-125 transition-transform duration-200 inline-block">+</span>
                      <span className="text-base-content">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/0700601174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-blue-400 text-white hover:bg-blue-500 border-0 w-full rounded-lg font-extrabold mt-8 hover:scale-105 transition-all duration-300 active:scale-95 hover:shadow-lg hover:shadow-blue-400/25"
                >
                  S&apos;inscrire
                </a>
              </div>
            </div>

            {/* Dev informatique */}
            <div className="rounded-2xl border border-base-300 bg-base-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-base-200 px-8 py-6 border-b border-base-300 group-hover:bg-base-300/50 transition-colors duration-300">
                <p className="text-xs font-extrabold uppercase tracking-[3px] text-base-content/50 mb-1">
                  Cours privé
                </p>
                <p className="font-extrabold text-base-content text-lg mb-3">Développement informatique</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-base-content">30 000</span>
                  <span className="text-base-content/40 mb-1 font-semibold text-sm">FCFA/mois</span>
                </div>
                <p className="text-base-content/50 text-sm mt-2">
                  Formation professionnelle en développement web et mobile.
                </p>
              </div>
              <div className="px-8 py-6 flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  {[
                    "HTML, CSS, JavaScript",
                    "React & Next.js",
                    "Node.js & bases de données",
                    "Développement mobile",
                    "Git et bonnes pratiques",
                    "Projets réels à réaliser",
                    "1 mentor développeur senior",
                    "Certification de fin de formation",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm group/item hover:translate-x-1 transition-transform duration-200">
                      <span className="font-extrabold text-blue-400 text-base group-hover/item:scale-125 transition-transform duration-200 inline-block">+</span>
                      <span className="text-base-content">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/0700601174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white w-full rounded-lg font-bold mt-8 hover:scale-105 transition-all duration-300 active:scale-95"
                >
                  S&apos;inscrire
                </a>
              </div>
            </div>

          </div>

          {/* Note bas */}
          <div className="mt-10 p-6 bg-base-200 rounded-2xl border border-base-300 flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div>
              <p className="font-extrabold text-base-content text-sm">
                Vous avez des questions sur les cours privés ?
              </p>
              <p className="text-base-content/50 text-xs mt-0.5">
                Nos conseillers sont disponibles pour vous orienter vers la meilleure offre.
              </p>
            </div>
            <a 
              href="https://wa.me/0700601174"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm font-bold text-blue-400 shrink-0 hover:scale-105 transition-all duration-300 hover:bg-blue-400/10"
            >
              Nous contacter
            </a>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="temoignages" className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-extrabold uppercase tracking-[4px] text-blue-400 mb-3">Témoignages</p>
            <h2 className="text-4xl font-extrabold text-base-content">Ce que disent nos apprenants</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Kouassi A.", role: "Élève en Terminale", text: "Grâce aux cours privés de Learnly, j'ai amélioré mes notes en mathématiques en seulement 2 mois. L'enseignant est très disponible et pédagogue." },
              { name: "Fatou D.", role: "Parent d'élève", text: "Ma fille en CM2 adore la plateforme. Elle fait ses leçons chaque soir comme un jeu. Le rapport mensuel me permet de suivre ses progrès facilement." },
              { name: "Yves K.", role: "Étudiant en développement", text: "La formation en développement web m'a permis de décrocher mon premier stage. Les projets pratiques font vraiment la différence." },
            ].map(({ name, role, text }) => (
              <div 
                key={name} 
                className="bg-base-100 rounded-2xl p-6 border border-base-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex gap-1 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 h-3 rounded-full bg-blue-400 opacity-80 group-hover:scale-110 transition-transform duration-200"
                      style={{transitionDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>
                <p className="text-base-content/70 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-400/10 border border-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="font-extrabold text-blue-400 text-sm">{name[0]}</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-base-content text-sm">{name}</p>
                    <p className="text-base-content/40 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-blue-400 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <p className="text-xs font-extrabold uppercase tracking-[4px] text-white/60 mb-4">
            Commencez aujourd&apos;hui
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Prêt à transformer votre façon d&apos;apprendre ?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Rejoignez Learnly gratuitement et commencez votre première leçon en moins de 2 minutes. Aucune carte bancaire requise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://learnlyv2.yosite.fun/"
              className="btn bg-white text-blue-400 hover:bg-white/90 btn-lg rounded-lg font-extrabold px-10 border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl active:scale-95"
            >
              Démarrer gratuitement
            </a>
            <a
              href="#tarifs"
              className="btn btn-outline border-white/40 text-white hover:bg-white/10 btn-lg rounded-lg font-bold px-10 hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Voir les cours privés
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-base-100 border-t border-base-300">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4 group">
                <Image 
                  src="/mascot.svg" 
                  alt="Mascot" 
                  width={28} 
                  height={28} 
                  className="group-hover:animate-bounce transition-transform duration-300" 
                />
                <span className="font-extrabold text-blue-400 text-lg hover:scale-105 transition-transform duration-300 inline-block">Learnly</span>
              </div>
              <p className="text-base-content/50 text-sm leading-relaxed">
                La plateforme d&apos;apprentissage interactif et gratuite. Du primaire aux formations professionnelles en développement informatique.
              </p>
            </div>
            {[
              { title: "Plateforme", links: ["Fonctionnalités", "Cours disponibles", "Classement", "Quêtes"] },
              { title: "Cours privés", links: ["Primaire — 20 000 FCFA", "Secondaire — 25 000 FCFA", "Développement — 30 000 FCFA", "Nous contacter"] },
              { title: "Support", links: ["FAQ", "Contact", "Confidentialité", "CGU"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <p className="font-extrabold text-base-content text-sm uppercase tracking-widest mb-4">{title}</p>
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l}>
                      <a className="text-base-content/50 text-sm hover:text-blue-400 transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform duration-200">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-base-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-base-content/40 text-sm">© 2025 Learnly. Tous droits réservés.</p>
            <p className="text-base-content/40 text-xs">Fait avec passion pour les apprenants de Côte d&apos;Ivoire et d&apos;Afrique.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}