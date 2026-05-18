import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">

      {/* NAVBAR */}
      <nav style={{ background: "#fff", borderBottom: "3px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/mascot.svg" alt="Mascot" width={38} height={38} />
            <span style={{ fontSize: 22, fontWeight: 900, color: "#4db6f5", letterSpacing: -0.5 }}>Learnly</span>
          </div>
          <ul className="nav-links" style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
            {[["Fonctionnalités", "#fonctionnalites"], ["AgroTech", "#agrotech"], ["Tarifs", "#tarifs"]].map(([label, href]) => (
              <li key={label}><a href={href} style={{ fontWeight: 700, color: "#374151", textDecoration: "none", fontSize: 15 }}>{label}</a></li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {/* BOUTON AGROTECH */}
            <a href="/agrotech" className="btn-bounce desktop-cta" style={{
              background: "linear-gradient(135deg, #1a1200, #2d1f00)",
              color: "#f5a623", fontWeight: 900, fontSize: 13,
              padding: "10px 18px", borderRadius: 12,
              border: "1.5px solid rgba(245,166,35,0.45)", cursor: "pointer",
              textDecoration: "none", letterSpacing: 0.3, textTransform: "uppercase",
              whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 6,
            }}>
              🥭 AgroTech
            </a>
            <a href="https://learnlyv2.yosite.fun/" className="btn-bounce desktop-cta" style={{
              background: "#4db6f5", color: "#fff", fontWeight: 900, fontSize: 14,
              padding: "11px 20px", borderRadius: 12, border: "none", cursor: "pointer",
              textDecoration: "none", letterSpacing: 0.5, textTransform: "uppercase",
              boxShadow: "0 4px 0 #2193d3", whiteSpace: "nowrap",
            }}>
              Commencer
            </a>
          </div>
          {/* HAMBURGER BUTTON — mobile only */}
          <button
            id="hamburger-btn"
            aria-label="Menu"
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              borderRadius: 8,
            }}
          >
            <span className="ham-bar" style={{ display: "block", width: 24, height: 2.5, background: "#374151", borderRadius: 2, transition: "all 0.3s" }} />
            <span className="ham-bar" style={{ display: "block", width: 24, height: 2.5, background: "#374151", borderRadius: 2, transition: "all 0.3s" }} />
            <span className="ham-bar" style={{ display: "block", width: 24, height: 2.5, background: "#374151", borderRadius: 2, transition: "all 0.3s" }} />
          </button>
        </div>

        {/* MOBILE SLIDER MENU */}
        <div id="mobile-menu" style={{
          maxHeight: 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "#fff",
          borderTop: "2px solid #f3f4f6",
        }}>
          <div style={{ padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
            {[["Fonctionnalités", "#fonctionnalites"], ["AgroTech", "#agrotech"], ["Tarifs", "#tarifs"]].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="mobile-nav-link"
                style={{
                  fontWeight: 700,
                  color: "#374151",
                  textDecoration: "none",
                  fontSize: 16,
                  padding: "12px 16px",
                  borderRadius: 10,
                  display: "block",
                  transition: "background 0.2s",
                }}
              >
                {label}
              </a>
            ))}
            {/* BOUTON AGROTECH MOBILE */}
            <a href="/agrotech" style={{
              background: "linear-gradient(135deg, #1a1200, #2d1f00)",
              color: "#f5a623", fontWeight: 900, fontSize: 15,
              padding: "14px 20px", borderRadius: 12, textDecoration: "none",
              letterSpacing: 0.5, textTransform: "uppercase",
              border: "1.5px solid rgba(245,166,35,0.4)", textAlign: "center",
              marginTop: 4,
            }}>
              🥭 Learnly AgroTech
            </a>
            <a href="https://learnlyv2.yosite.fun/" style={{
              background: "#4db6f5", color: "#fff", fontWeight: 900, fontSize: 15,
              padding: "14px 20px", borderRadius: 12, textDecoration: "none",
              letterSpacing: 0.5, textTransform: "uppercase",
              boxShadow: "0 4px 0 #2193d3", textAlign: "center",
              marginTop: 8,
            }}>
              Commencer — c&apos;est gratuit
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#4db6f5", minHeight: "88vh", display: "flex", alignItems: "center", position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.07,
          backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }} />
        <div className="animate-blob" style={{ position: "absolute", width: 400, height: 400, background: "rgba(255,255,255,0.06)", top: "-100px", right: "10%", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} />
        <div className="animate-blob-delay" style={{ position: "absolute", width: 250, height: 250, background: "rgba(255,255,0,0.08)", bottom: "5%", left: "5%", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }} />

        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", width: "100%", position: "relative", zIndex: 1 }}>
          <div className="animate-fade-left">
            <h1 style={{ fontSize: "clamp(32px, 5.5vw, 68px)", fontWeight: 900, color: "#fff", lineHeight: 1.08, margin: "0 0 24px", letterSpacing: -1 }}>
              des cours fun et<br />
              efficaces pour<br />
              <span style={{ color: "#fff700", textShadow: "0 3px 0 rgba(0,0,0,0.12)" }}>toute l&apos;Afrique</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.88)", marginBottom: 40, lineHeight: 1.6, maxWidth: 480 }}>
              Du CP au BAC, des langues africaines au développement web — la plateforme 100% gratuite pensée pour toi.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://learnlyv2.yosite.fun/" className="btn-bounce" style={{
                background: "#fff", color: "#4db6f5", fontWeight: 900, fontSize: 15,
                padding: "15px 32px", borderRadius: 16, textDecoration: "none",
                boxShadow: "0 6px 0 rgba(0,0,0,0.15)", letterSpacing: 0.5,
                textTransform: "uppercase",
              }}>
                Commencer — c&apos;est gratuit
              </a>
              {/* BOUTON AGROTECH DANS LE HERO */}
              <a href="/agrotech" className="btn-bounce" style={{
                background: "rgba(0,0,0,0.2)", color: "#f5a623", fontWeight: 900, fontSize: 14,
                padding: "15px 24px", borderRadius: 16, textDecoration: "none",
                border: "2px solid rgba(245,166,35,0.6)", letterSpacing: 0.5,
                textTransform: "uppercase", display: "flex", alignItems: "center", gap: 8,
              }}>
                🥭 AgroTech
              </a>
            </div>
          </div>

          <div className="hero-image animate-fade-right" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <Image
              src="/hero.svg"
              alt="Hero"
              width={460}
              height={460}
              className="animate-float"
              style={{ width: "100%", maxWidth: 460, height: "auto", filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))" }}
            />
            <div className="gif-badge animate-float-delayed">
              <Image src="/1.gif" alt="En action" width={240} height={140} unoptimized style={{ borderRadius: 16, display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* EN SAVOIR PLUS ANCHOR */}
      <div style={{ background: "#4db6f5", textAlign: "center", paddingBottom: 20 }}>
        <a href="#comment" style={{ color: "#fff", opacity: 0.6, fontSize: 13, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
          <div>En savoir plus</div>
          <div style={{ fontSize: 22 }}>&#8964;</div>
        </a>
      </div>

      {/* 3 PILIERS */}
      <section style={{ background: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: "#1a1a1a", marginBottom: 14, letterSpacing: -0.5 }}>
            avec Learnly, tu vas adorer apprendre
          </h2>
          <p style={{ textAlign: "center", color: "#6b7280", fontSize: 17, marginBottom: 56, maxWidth: 540, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            La pédagogie des meilleurs. Les références de chez toi.
          </p>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                color: "#4db6f5", label: "Efficace",
                items: [
                  { title: "Niveau débutant à avancé", desc: "Des cours du CP à la Terminale, adaptés à chaque apprenant pour progresser vite." },
                  { title: "Une efficacité prouvée", desc: "Méthode par répétition espacée et gamification validée scientifiquement." },
                ]
              },
              {
                color: "#ff9800", label: "Motivant",
                items: [
                  { title: "Des leçons courtes", desc: "5 à 10 minutes par jour suffisent. Apprends même pendant tes pauses." },
                  { title: "Une démarche positive", desc: "On célèbre chaque progrès pour que tu gardes la flamme jour après jour." },
                ]
              },
              {
                color: "#4caf50", label: "Africain",
                items: [
                  { title: "Progresser ensemble", desc: "Suis tes amis, envoie des encouragements, grimpe dans le classement africain." },
                  { title: "S'affronter en ligue", desc: "Des ligues hebdomadaires avec des apprenants de tout le continent." },
                ]
              },
            ].map(({ color, label, items }) => (
              <div key={label} className="card-hover" style={{ border: "2px solid #e5e7eb", borderRadius: 20, overflow: "hidden", background: "#fff" }}>
                <div style={{ padding: "28px 28px 20px", borderBottom: "2px solid #f3f4f6" }}>
                  <div style={{
                    width: 48, height: 6, borderRadius: 4,
                    background: color, marginBottom: 20,
                  }} />
                  <p style={{ fontWeight: 900, fontSize: 24, color, margin: 0 }}>{label}</p>
                </div>
                <div style={{ padding: "22px 28px 30px" }}>
                  {items.map(({ title, desc }) => (
                    <div key={title} style={{ marginBottom: 18 }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 4 }}>
                        <span style={{ color, fontWeight: 900, fontSize: 15, marginTop: 1, flexShrink: 0 }}>✓</span>
                        <p style={{ fontWeight: 800, fontSize: 14, color: "#1a1a1a", margin: 0 }}>{title}</p>
                      </div>
                      <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: "0 0 0 25px" }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section id="comment" style={{ background: "#f9fafb", padding: "80px 20px", borderTop: "3px solid #e5e7eb", borderBottom: "3px solid #e5e7eb" }}>
        <div className="two-col" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div className="animate-fade-left">
            <h2 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 900, color: "#1a1a1a", marginBottom: 16, letterSpacing: -0.5 }}>
              comment ça marche
            </h2>
            <p style={{ color: "#6b7280", fontSize: 17, marginBottom: 36, lineHeight: 1.6 }}>
              Rejoins la plateforme en quelques secondes et commence ta première leçon immédiatement — sans carte bancaire, sans engagement.
            </p>
            <div className="gif-badge" style={{ display: "inline-block" }}>
              <Image src="/2.gif" alt="Demo" width={280} height={160} unoptimized style={{ borderRadius: 16, display: "block" }} />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            {[
              { num: 1, color: "#4db6f5", shadow: "#2193d3", title: "Tu crées ton compte gratuitement", desc: "En moins de 30 secondes. Choisis ta matière et ton niveau. Aucune carte bancaire requise." },
              { num: 2, color: "#ff9800", shadow: "#e65100", title: "Tu suis des leçons adaptées", desc: "Cours courts et interactifs, avec des exemples tirés de la vie africaine. Sur mobile ou PC." },
              { num: 3, color: "#4caf50", shadow: "#2e7d32", title: "Tu grimpes dans le classement", desc: "Gagne des XP, maintiens ta série de jours, défie des apprenants de toute l'Afrique." },
              { num: 4, color: "#9c27b0", shadow: "#6a1b9a", title: "Tu vas plus loin avec les cours privés", desc: "Un enseignant dédié pour le primaire, le secondaire ou le développement web." },
            ].map(({ num, color, shadow, title, desc }) => (
              <div key={num} style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                <div style={{
                  minWidth: 50, height: 50, borderRadius: "50%",
                  background: color, color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 900, fontSize: 22, boxShadow: `0 4px 0 ${shadow}`,
                  flexShrink: 0,
                }}>
                  {num}
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 16, color, margin: "0 0 6px" }}>{title}</p>
                  <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="fonctionnalites" style={{ background: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 900, letterSpacing: 4, color: "#4db6f5", textTransform: "uppercase", marginBottom: 12 }}>Fonctionnalités</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: "#1a1a1a", marginBottom: 56, letterSpacing: -0.5 }}>
            tout ce dont tu as besoin pour apprendre
          </h2>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "Séries quotidiennes", desc: "Construis une habitude solide avec des rappels intelligents et ton streak visible chaque jour.", color: "#ff5722" },
              { title: "Système XP", desc: "Gagne des points d'expérience à chaque leçon et monte de division en division.", color: "#ff9800" },
              { title: "Classement africain", desc: "Rivalise avec des apprenants de Côte d'Ivoire, du Sénégal, du Ghana et de toute l'Afrique.", color: "#f59e0b" },
              { title: "Quêtes & défis", desc: "Des missions quotidiennes et hebdomadaires pour débloquer des récompenses exclusives.", color: "#4caf50" },
              { title: "Langues africaines", desc: "Dioula, Wolof, Twi, Yoruba — apprends les langues de chez toi que Duolingo n'enseigne pas.", color: "#4db6f5" },
              { title: "100% mobile", desc: "Conçu pour les smartphones africains. Fonctionne même avec une connexion limitée.", color: "#9c27b0" },
            ].map(({ title, desc, color }) => (
              <div key={title} className="card-hover" style={{ background: "#f9fafb", borderRadius: 20, padding: "28px 24px", border: "2px solid #e5e7eb", cursor: "pointer" }}>
                <div style={{ width: 40, height: 5, borderRadius: 3, background: color, marginBottom: 18 }} />
                <h3 style={{ fontWeight: 900, fontSize: 16, color: "#1a1a1a", margin: "0 0 10px" }}>{title}</h3>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LEARNLY AGROTECH SECTION — couleurs mangue */}
      {/* ============================================================ */}
      <section id="agrotech" style={{
        background: "linear-gradient(150deg, #1a1200 0%, #2d1f00 30%, #1a2e0a 65%, #0d2010 100%)",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
        borderTop: "4px solid #f5a623",
      }}>
        {/* Background texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.035,
          backgroundImage: "radial-gradient(circle, #ffd54f 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }} />
        <div style={{ position: "absolute", width: 480, height: 480, background: "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)", top: "-120px", right: "-60px", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 320, height: 320, background: "radial-gradient(circle, rgba(76,175,80,0.09) 0%, transparent 70%)", bottom: "-80px", left: "4%", borderRadius: "40% 60% 70% 30%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 600, height: 600, background: "radial-gradient(circle, rgba(255,152,0,0.06) 0%, transparent 65%)", top: "30%", left: "35%", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(245,166,35,0.12)", border: "1px solid rgba(245,166,35,0.35)", borderRadius: 100, padding: "6px 18px", marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: 4, color: "#f5a623", textTransform: "uppercase" }}>Filiale de Learnly</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 58px)", fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: -1, lineHeight: 1.05 }}>
              Learnly{" "}<span style={{ color: "#f5a623" }}>AgroTech</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 900, letterSpacing: 4, textTransform: "uppercase", marginBottom: 20 }}>
              Modernisation de la filière mangue par le digital
            </p>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 18, maxWidth: 580, margin: "0 auto", lineHeight: 1.65 }}>
              Drones intelligents, plateformes vitrines et solutions e-commerce modernes pour développer les entreprises agricoles africaines.
            </p>
          </div>

          {/* 3 Image Cards */}
          <div className="agro-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 60 }}>
            <div className="card-hover" style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: 24, overflow: "hidden", backdropFilter: "blur(8px)" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                <Image src="/businessgame.jpg" alt="IUA Business Game 2026" fill style={{ objectFit: "contain", padding: 16 }} />
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ background: "#e53935", color: "#fff", fontSize: 10, fontWeight: 900, padding: "3px 10px", borderRadius: 100, letterSpacing: 1.5, textTransform: "uppercase" }}>Compétition</span>
                </div>
                <h3 style={{ fontWeight: 900, fontSize: 17, color: "#fff", margin: "0 0 8px", lineHeight: 1.3 }}>IUA Business Game 2026</h3>
                <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Learnly AgroTech participe au Business Game de l&apos;IUA — la compétition entrepreneuriale majeure de Côte d&apos;Ivoire.</p>
              </div>
            </div>

            <div className="card-hover" style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(245,166,35,0.28)", borderRadius: 24, overflow: "hidden", backdropFilter: "blur(8px)", boxShadow: "0 0 40px rgba(245,166,35,0.08)" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "linear-gradient(135deg, #1a1200, #2d1f00)", overflow: "hidden" }}>
                <Image src="/drone.jpg" alt="Drone Agriculture AgroTech" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", top: 14, right: 14, background: "#f5a623", color: "#1a1200", fontSize: 10, fontWeight: 900, padding: "4px 12px", borderRadius: 100, letterSpacing: 1.5, textTransform: "uppercase" }}>Innovation</div>
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ background: "rgba(245,166,35,0.15)", color: "#f5a623", fontSize: 10, fontWeight: 900, padding: "3px 10px", borderRadius: 100, letterSpacing: 1.5, textTransform: "uppercase", border: "1px solid rgba(245,166,35,0.3)" }}>Drone Tech</span>
                </div>
                <h3 style={{ fontWeight: 900, fontSize: 17, color: "#fff", margin: "0 0 8px", lineHeight: 1.3 }}>Agriculture par Drone</h3>
                <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Des drones intelligents pour surveiller, analyser et optimiser les cultures de mangues à grande échelle.</p>
              </div>
            </div>

            <div className="card-hover" style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(76,175,80,0.2)", borderRadius: 24, overflow: "hidden", backdropFilter: "blur(8px)" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/logo.png" alt="Learnly AgroTech Logo" fill style={{ objectFit: "contain", padding: 24 }} />
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ background: "rgba(76,175,80,0.15)", color: "#6fcf79", fontSize: 10, fontWeight: 900, padding: "3px 10px", borderRadius: 100, letterSpacing: 1.5, textTransform: "uppercase", border: "1px solid rgba(76,175,80,0.3)" }}>Startup</span>
                </div>
                <h3 style={{ fontWeight: 900, fontSize: 17, color: "#fff", margin: "0 0 8px", lineHeight: 1.3 }}>Learnly AgroTech</h3>
                <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Une startup africaine qui place la technologie au coeur de l&apos;agriculture pour moderniser la filière mangue.</p>
              </div>
            </div>
          </div>

          {/* Stats Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 56 }}>
            {[
              { label: "Drones agricoles", value: "Surveillance & analyse" },
              { label: "E-commerce", value: "Vente directe producteurs" },
              { label: "Impact africain", value: "Filière mangue CI" },
              { label: "Plateformes vitrines", value: "Digital pour agriculteurs" },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(245,166,35,0.18)", borderRadius: 16, padding: "16px 22px", display: "flex", alignItems: "center", gap: 14, backdropFilter: "blur(6px)" }}>
                <div>
                  <p style={{ fontWeight: 900, fontSize: 13, color: "#f5a623", margin: "0 0 2px" }}>{label}</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, margin: 0 }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA AgroTech — avec bouton vers la page dédiée */}
          <div style={{ background: "rgba(245,166,35,0.08)", border: "2px solid rgba(245,166,35,0.3)", borderRadius: 20, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontWeight: 900, fontSize: 18, color: "#f5a623", margin: "0 0 6px" }}>Intéressé par Learnly AgroTech ?</p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, margin: 0 }}>Rejoignez notre mission de modernisation de l&apos;agriculture africaine par la technologie.</p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/agrotech" className="btn-bounce" style={{
                background: "rgba(245,166,35,0.15)", color: "#f5a623", fontWeight: 900, fontSize: 14,
                padding: "14px 24px", borderRadius: 12, textDecoration: "none",
                textTransform: "uppercase", letterSpacing: 0.5, whiteSpace: "nowrap",
                border: "1.5px solid rgba(245,166,35,0.4)",
              }}>
                Voir la page AgroTech →
              </a>
              <a href="https://wa.me/+2250700601174" target="_blank" rel="noopener noreferrer" className="btn-bounce" style={{
                background: "#f5a623", color: "#1a1200", fontWeight: 900, fontSize: 14,
                padding: "14px 28px", borderRadius: 12, textDecoration: "none",
                textTransform: "uppercase", letterSpacing: 0.5, whiteSpace: "nowrap",
                boxShadow: "0 4px 0 #b8740f",
              }}>
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="tarifs" style={{ background: "#f9fafb", padding: "80px 20px", borderTop: "3px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 900, letterSpacing: 4, color: "#4db6f5", textTransform: "uppercase", marginBottom: 12 }}>Cours privés</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: "#1a1a1a", marginBottom: 12, letterSpacing: -0.5 }}>
            aller encore plus loin
          </h2>
          <p style={{ textAlign: "center", color: "#6b7280", fontSize: 17, marginBottom: 48, maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            La plateforme est 100% gratuite. Les cours privés, c&apos;est un enseignant rien que pour toi.
          </p>

          <div style={{ background: "#4db6f5", borderRadius: 20, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 32, boxShadow: "0 6px 0 #2193d3", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontWeight: 900, fontSize: 17, color: "#fff", margin: "0 0 4px" }}>La plateforme Learnly est 100% gratuite</p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, margin: 0 }}>Cours, classements, quêtes, défis — tout ça sans dépenser un franc.</p>
            </div>
            <a href="https://learnlyv2.yosite.fun/" className="btn-bounce" style={{ background: "#fff", color: "#4db6f5", fontWeight: 900, fontSize: 14, padding: "12px 28px", borderRadius: 12, textDecoration: "none", boxShadow: "0 4px 0 rgba(0,0,0,0.12)", textTransform: "uppercase", letterSpacing: 0.5, whiteSpace: "nowrap" }}>
              Commencer
            </a>
          </div>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { level: "Primaire", price: "20 000", color: "#4db6f5", shadow: "#2193d3", sub: "CP au CM2 — apprentissage ludique", features: ["Mathématiques", "Lecture et écriture", "Sciences de la vie", "Histoire et géographie", "1 enseignant dédié", "Rapport mensuel parents"], popular: false },
              { level: "Secondaire", price: "25 000", color: "#ff9800", shadow: "#e65100", sub: "Collège & Lycée — prépa examens incluse", features: ["Maths avancées", "Physique-Chimie", "SVT", "Français & Littérature", "Anglais", "Prépa BEPC et BAC", "1 enseignant dédié", "Corrections illimitées"], popular: true },
              { level: "Dev informatique", price: "30 000", color: "#4caf50", shadow: "#2e7d32", sub: "Formation professionnelle web & mobile", features: ["HTML, CSS, JS", "React & Next.js", "Node.js & BDD", "Git & bonnes pratiques", "Projets réels", "Mentor senior", "Certification finale"], popular: false },
            ].map(({ level, price, color, shadow, sub, features, popular }) => (
              <div key={level} className="card-hover" style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: popular ? `3px solid ${color}` : "2px solid #e5e7eb", boxShadow: popular ? `0 8px 0 ${shadow}50` : "none" }}>
                {popular && (
                  <div style={{ background: color, color: "#fff", textAlign: "center", fontWeight: 900, fontSize: 12, padding: "7px", letterSpacing: 2, textTransform: "uppercase" }}>Populaire</div>
                )}
                <div style={{ padding: "28px 24px 20px", borderBottom: "2px solid #f3f4f6", background: popular ? `${color}08` : "#f9fafb" }}>
                  <p style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: 2, color: "#9ca3af", margin: "0 0 6px" }}>Cours privé</p>
                  <p style={{ fontWeight: 900, fontSize: 20, color: "#1a1a1a", margin: "0 0 12px" }}>{level}</p>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
                    <span style={{ fontSize: 38, fontWeight: 900, color }}>{price}</span>
                    <span style={{ color: "#9ca3af", fontSize: 14, marginBottom: 6, fontWeight: 700 }}>FCFA/mois</span>
                  </div>
                  <p style={{ color: "#6b7280", fontSize: 13, margin: "8px 0 0" }}>{sub}</p>
                </div>
                <div style={{ padding: "20px 24px 28px" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                    {features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: 14 }}>
                        <span style={{ color, fontWeight: 900, fontSize: 17 }}>+</span>
                        <span style={{ color: "#374151" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/+2250700601174" target="_blank" rel="noopener noreferrer" className="btn-bounce" style={{ display: "block", textAlign: "center", background: popular ? color : "#fff", color: popular ? "#fff" : color, border: `2px solid ${color}`, fontWeight: 900, fontSize: 14, padding: "14px", borderRadius: 12, textDecoration: "none", textTransform: "uppercase", letterSpacing: 0.5, boxShadow: popular ? `0 4px 0 ${shadow}` : "none" }}>
                    S&apos;inscrire
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, background: "#fff", borderRadius: 16, border: "2px solid #e5e7eb", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontWeight: 800, fontSize: 15, color: "#1a1a1a", margin: "0 0 4px" }}>Des questions sur les cours privés ?</p>
              <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>Nos conseillers sont disponibles sur WhatsApp.</p>
            </div>
            <a href="https://wa.me/+2250700601174" target="_blank" rel="noopener noreferrer" className="btn-bounce" style={{ background: "#25d366", color: "#fff", fontWeight: 900, fontSize: 14, padding: "12px 24px", borderRadius: 12, textDecoration: "none", textTransform: "uppercase", letterSpacing: 0.5, whiteSpace: "nowrap", boxShadow: "0 4px 0 #1da851" }}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: "#4db6f5", padding: "80px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="animate-blob" style={{ position: "absolute", width: 360, height: 360, background: "rgba(255,255,255,0.06)", top: "-100px", right: "5%", borderRadius: "60% 40% 30% 70%" }} />
        <div className="animate-blob-delay" style={{ position: "absolute", width: 240, height: 240, background: "rgba(255,255,0,0.07)", bottom: "-60px", left: "8%", borderRadius: "40% 60% 70% 30%" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 900, letterSpacing: 4, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", marginBottom: 18 }}>Commence aujourd&apos;hui</p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 900, color: "#fff", marginBottom: 20, lineHeight: 1.1, letterSpacing: -0.5 }}>
            prêt à transformer ta façon d&apos;apprendre ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 18, marginBottom: 44, lineHeight: 1.6 }}>
            Rejoins Learnly gratuitement et commence ta première leçon en moins de 2 minutes. Aucune carte bancaire requise.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://learnlyv2.yosite.fun/" className="btn-bounce" style={{ background: "#fff", color: "#4db6f5", fontWeight: 900, fontSize: 16, padding: "18px 40px", borderRadius: 16, textDecoration: "none", boxShadow: "0 6px 0 rgba(0,0,0,0.15)", textTransform: "uppercase", letterSpacing: 0.5 }}>
              Commencer — c&apos;est gratuit
            </a>
            <a href="#tarifs" className="btn-bounce" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontWeight: 800, fontSize: 16, padding: "18px 32px", borderRadius: 16, textDecoration: "none", border: "2px solid rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: 0.5 }}>
              Cours privés
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111827", padding: "52px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <Image src="/mascot.svg" alt="Mascot" width={30} height={30} />
                <span style={{ fontWeight: 900, fontSize: 20, color: "#4db6f5" }}>Learnly</span>
              </div>
              <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
                La plateforme d&apos;apprentissage gratuite pensée pour l&apos;Afrique. Du primaire au dev web.
              </p>
              <a href="/agrotech" style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.22)", borderRadius: 8, padding: "6px 12px", textDecoration: "none" }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: "#f5a623" }}>🥭 Learnly AgroTech →</span>
              </a>
            </div>
            {[
              { title: "Plateforme", links: ["Fonctionnalités", "Cours disponibles", "Classement", "Quêtes"] },
              { title: "Cours privés", links: ["Primaire — 20 000 FCFA", "Secondaire — 25 000 FCFA", "Dev — 30 000 FCFA", "Nous contacter"] },
              { title: "Support", links: ["FAQ", "Contact", "Confidentialité", "CGU"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <p style={{ fontWeight: 900, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#4b5563", marginBottom: 18 }}>{title}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {links.map(l => (
                    <li key={l} style={{ marginBottom: 12 }}>
                      <a style={{ color: "#6b7280", fontSize: 14, textDecoration: "none", cursor: "pointer" }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #1f2937", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ color: "#4b5563", fontSize: 13, margin: 0 }}>© 2025 Learnly & Learnly AgroTech. Tous droits réservés.</p>
            <p style={{ color: "#4b5563", fontSize: 13, margin: 0 }}>Fait avec amour pour les apprenants de Côte d&apos;Ivoire et d&apos;Afrique.</p>
          </div>
        </div>
      </footer>

      {/* RESPONSIVE STYLES */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-image { display: flex !important; width: 100%; max-width: 340px; margin: 0 auto; }
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .grid-3 { grid-template-columns: 1fr 1fr !important; }
          .agro-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .nav-links { display: none !important; }
          .desktop-cta { display: none !important; }
          #hamburger-btn { display: flex !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .agro-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .gif-badge { display: inline-block !important; }
          .hero-image { max-width: 280px !important; }
        }
        .mobile-nav-link:hover { background: #f3f4f6; }
        #mobile-menu.open { max-height: 480px !important; }
        #hamburger-btn.open .ham-bar:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
        #hamburger-btn.open .ham-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        #hamburger-btn.open .ham-bar:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }
      `}</style>

      {/* SCRIPTS */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          function applyBounce(el) {
            el.addEventListener('mousedown', function() {
              this.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease';
              this.style.transform = 'translateY(5px) scale(0.95)';
              this.style.boxShadow = 'none';
            });
            el.addEventListener('mouseup', function() {
              this.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.7, 0.64, 1), box-shadow 0.3s ease';
              this.style.transform = 'translateY(0px) scale(1)';
            });
            el.addEventListener('mouseleave', function() {
              this.style.transition = 'transform 0.3s ease';
              this.style.transform = 'translateY(0px) scale(1)';
            });
          }
          document.querySelectorAll('.btn-bounce').forEach(applyBounce);
          var btn = document.getElementById('hamburger-btn');
          var menu = document.getElementById('mobile-menu');
          if (btn && menu) {
            btn.addEventListener('click', function() {
              var isOpen = menu.classList.toggle('open');
              btn.classList.toggle('open', isOpen);
              btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
            menu.querySelectorAll('a').forEach(function(link) {
              link.addEventListener('click', function() {
                menu.classList.remove('open');
                btn.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
              });
            });
          }
        });
      `}} />

    </div>
  );
}