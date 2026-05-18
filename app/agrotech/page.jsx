"use client";
import Image from "next/image";

export default function AgroTech() {
  return (
    <div className="min-h-screen font-sans">

      {/* NAVBAR */}
      <nav style={{ background: "#1a1200", borderBottom: "3px solid #f5a623", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/logo.png" alt="Learnly AgroTech" width={38} height={38} style={{ borderRadius: 8 }} />
            <div>
              <span style={{ fontSize: 18, fontWeight: 900, color: "#f5a623", letterSpacing: -0.5 }}>Learnly</span>
              <span style={{ fontSize: 18, fontWeight: 900, color: "#6fcf79", letterSpacing: -0.5 }}> AgroTech</span>
            </div>
          </div>
          <ul className="nav-links" style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
            {[["Notre mission", "#mission"], ["Solutions", "#solutions"], ["Contact", "#contact"]].map(([label, href]) => (
              <li key={label}><a href={href} style={{ fontWeight: 700, color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 15 }}>{label}</a></li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href="/" className="btn-bounce" style={{
              background: "rgba(255,255,255,0.08)", color: "#f5a623", fontWeight: 800, fontSize: 13,
              padding: "10px 18px", borderRadius: 12, border: "1.5px solid rgba(245,166,35,0.4)", cursor: "pointer",
              textDecoration: "none", letterSpacing: 0.3, display: "flex", alignItems: "center", gap: 6,
              whiteSpace: "nowrap",
            }}>
              ← Learnly
            </a>
            <a href="https://wa.me/+2250700601174" target="_blank" rel="noopener noreferrer" className="btn-bounce desktop-cta" style={{
              background: "#f5a623", color: "#1a1200", fontWeight: 900, fontSize: 14,
              padding: "11px 20px", borderRadius: 12, border: "none", cursor: "pointer",
              textDecoration: "none", letterSpacing: 0.5, textTransform: "uppercase",
              boxShadow: "0 4px 0 #b8740f", whiteSpace: "nowrap",
            }}>
              Nous contacter
            </a>
          </div>
          {/* HAMBURGER */}
          <button id="hamburger-btn" aria-label="Menu" style={{
            display: "none", flexDirection: "column", gap: 5,
            background: "none", border: "none", cursor: "pointer", padding: "8px", borderRadius: 8,
          }}>
            <span className="ham-bar" style={{ display: "block", width: 24, height: 2.5, background: "#f5a623", borderRadius: 2, transition: "all 0.3s" }} />
            <span className="ham-bar" style={{ display: "block", width: 24, height: 2.5, background: "#f5a623", borderRadius: 2, transition: "all 0.3s" }} />
            <span className="ham-bar" style={{ display: "block", width: 24, height: 2.5, background: "#f5a623", borderRadius: 2, transition: "all 0.3s" }} />
          </button>
        </div>
        {/* MOBILE MENU */}
        <div id="mobile-menu" style={{
          maxHeight: 0, overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "#1a1200", borderTop: "2px solid rgba(245,166,35,0.2)",
        }}>
          <div style={{ padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
            {[["Notre mission", "#mission"], ["Solutions", "#solutions"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="mobile-nav-link" style={{
                fontWeight: 700, color: "rgba(255,255,255,0.85)", textDecoration: "none",
                fontSize: 16, padding: "12px 16px", borderRadius: 10, display: "block", transition: "background 0.2s",
              }}>{label}</a>
            ))}
            <a href="/" style={{
              background: "rgba(245,166,35,0.12)", color: "#f5a623", fontWeight: 900, fontSize: 14,
              padding: "12px 16px", borderRadius: 10, textDecoration: "none", textAlign: "center",
              border: "1.5px solid rgba(245,166,35,0.3)", marginTop: 4,
            }}>← Retour sur Learnly</a>
            <a href="https://wa.me/+2250700601174" target="_blank" rel="noopener noreferrer" style={{
              background: "#f5a623", color: "#1a1200", fontWeight: 900, fontSize: 15,
              padding: "14px 20px", borderRadius: 12, textDecoration: "none",
              letterSpacing: 0.5, textTransform: "uppercase", textAlign: "center",
              boxShadow: "0 4px 0 #b8740f", marginTop: 8,
            }}>Nous contacter</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(150deg, #1a1200 0%, #2d1f00 30%, #1a2e0a 65%, #0d2010 100%)",
        minHeight: "88vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.05,
          backgroundImage: "radial-gradient(circle, #ffd54f 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }} />
        <div className="animate-blob" style={{ position: "absolute", width: 480, height: 480, background: "radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)", top: "-120px", right: "5%", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} />
        <div className="animate-blob-delay" style={{ position: "absolute", width: 320, height: 320, background: "radial-gradient(circle, rgba(76,175,80,0.1) 0%, transparent 70%)", bottom: "5%", left: "3%", borderRadius: "40% 60% 70% 30%" }} />
        <div style={{ position: "absolute", width: 600, height: 600, background: "radial-gradient(circle, rgba(255,152,0,0.07) 0%, transparent 65%)", top: "30%", left: "40%", transform: "translate(-50%, -50%)" }} />

        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", width: "100%", position: "relative", zIndex: 1 }}>
          <div className="animate-fade-left">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(245,166,35,0.12)", border: "1px solid rgba(245,166,35,0.35)",
              borderRadius: 100, padding: "6px 18px", marginBottom: 20,
            }}>
              <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: 4, color: "#f5a623", textTransform: "uppercase" }}>Filiale de Learnly</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5.5vw, 68px)", fontWeight: 900, color: "#fff", lineHeight: 1.08, margin: "0 0 24px", letterSpacing: -1 }}>
              l&apos;agriculture africaine<br />
              à l&apos;ère du<br />
              <span style={{ color: "#f5a623", textShadow: "0 3px 0 rgba(0,0,0,0.2)" }}>digital & des drones</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.78)", marginBottom: 40, lineHeight: 1.6, maxWidth: 480 }}>
              Drones intelligents, plateformes vitrines et e-commerce — nous modernisons la filière mangue en Côte d&apos;Ivoire et en Afrique.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://wa.me/+2250700601174" target="_blank" rel="noopener noreferrer" className="btn-bounce" style={{
                background: "#f5a623", color: "#1a1200", fontWeight: 900, fontSize: 15,
                padding: "15px 32px", borderRadius: 16, textDecoration: "none",
                boxShadow: "0 6px 0 #b8740f", letterSpacing: 0.5, textTransform: "uppercase",
              }}>
                Nous contacter
              </a>
              <a href="#solutions" className="btn-bounce" style={{
                background: "rgba(255,255,255,0.08)", color: "#fff", fontWeight: 800, fontSize: 15,
                padding: "15px 28px", borderRadius: 16, textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.2)", textTransform: "uppercase",
              }}>
                Nos solutions
              </a>
            </div>
          </div>

          <div className="hero-image animate-fade-right" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <Image
              src="/drone.jpg"
              alt="Drone AgroTech"
              width={460}
              height={460}
              className="animate-float"
              style={{ width: "100%", maxWidth: 460, height: "auto", borderRadius: 24, filter: "drop-shadow(0 24px 48px rgba(245,166,35,0.25))", objectFit: "cover" }}
            />
            <div className="gif-badge animate-float-delayed" style={{
              background: "rgba(245,166,35,0.1)", border: "1.5px solid rgba(245,166,35,0.3)",
              borderRadius: 16, padding: "14px 20px", display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ fontSize: 28 }}>🥭</span>
              <div>
                <p style={{ fontWeight: 900, fontSize: 14, color: "#f5a623", margin: 0 }}>Filière Mangue CI</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, margin: 0 }}>Innovation technologique africaine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EN SAVOIR PLUS */}
      <div style={{ background: "linear-gradient(180deg, #1a1200, #1a2e0a)", textAlign: "center", paddingBottom: 20 }}>
        <a href="#mission" style={{ color: "#f5a623", opacity: 0.7, fontSize: 13, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
          <div>En savoir plus</div>
          <div style={{ fontSize: 22 }}>&#8964;</div>
        </a>
      </div>

      {/* 3 PILIERS */}
      <section style={{ background: "linear-gradient(180deg, #1a2e0a, #0d2010)", padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: "#fff", marginBottom: 14, letterSpacing: -0.5 }}>
            avec AgroTech, tu vas adorer <span style={{ color: "#f5a623" }}>produire</span>
          </h2>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.55)", fontSize: 17, marginBottom: 56, maxWidth: 540, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            La technologie des meilleurs. La connaissance du terrain africain.
          </p>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                color: "#f5a623", label: "Innovant",
                items: [
                  { title: "Drones agricoles intelligents", desc: "Surveillance aérienne, analyse des cultures et détection précoce des maladies par drone." },
                  { title: "Données en temps réel", desc: "Tableaux de bord pour suivre l'état de tes cultures et optimiser les interventions." },
                ]
              },
              {
                color: "#6fcf79", label: "Connecté",
                items: [
                  { title: "Plateformes vitrines digitales", desc: "Crée ta présence en ligne professionnelle pour exposer tes produits agricoles au monde." },
                  { title: "E-commerce direct", desc: "Vends directement tes mangues sans intermédiaire grâce à notre solution de vente en ligne." },
                ]
              },
              {
                color: "#ffb300", label: "Africain",
                items: [
                  { title: "Pensé pour la Côte d'Ivoire", desc: "Des outils adaptés aux réalités du terrain africain et à la filière mangue locale." },
                  { title: "Impact durable", desc: "Moderniser l'agriculture pour les générations futures tout en valorisant le savoir-faire local." },
                ]
              },
            ].map(({ color, label, items }) => (
              <div key={label} className="card-hover" style={{
                border: "2px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden",
                background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)",
              }}>
                <div style={{ padding: "28px 28px 20px", borderBottom: "2px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width: 48, height: 6, borderRadius: 4, background: color, marginBottom: 20 }} />
                  <p style={{ fontWeight: 900, fontSize: 24, color, margin: 0 }}>{label}</p>
                </div>
                <div style={{ padding: "22px 28px 30px" }}>
                  {items.map(({ title, desc }) => (
                    <div key={title} style={{ marginBottom: 18 }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 4 }}>
                        <span style={{ color, fontWeight: 900, fontSize: 15, marginTop: 1, flexShrink: 0 }}>✓</span>
                        <p style={{ fontWeight: 800, fontSize: 14, color: "#fff", margin: 0 }}>{title}</p>
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.6, margin: "0 0 0 25px" }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section id="mission" style={{
        background: "linear-gradient(180deg, #0d2010, #1a1200)",
        padding: "80px 20px", borderTop: "3px solid rgba(245,166,35,0.2)", borderBottom: "3px solid rgba(245,166,35,0.2)",
      }}>
        <div className="two-col" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div className="animate-fade-left">
            <h2 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: -0.5 }}>
              notre <span style={{ color: "#f5a623" }}>mission</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, marginBottom: 36, lineHeight: 1.6 }}>
              Learnly AgroTech est né d&apos;une conviction : l&apos;Afrique a les ressources, il lui faut les outils. Nous apportons la technologie directement aux producteurs.
            </p>
            <div style={{
              background: "rgba(245,166,35,0.08)", border: "1.5px solid rgba(245,166,35,0.25)",
              borderRadius: 16, padding: "20px 24px",
            }}>
              <p style={{ fontWeight: 900, fontSize: 15, color: "#f5a623", margin: "0 0 8px" }}>🏆 IUA Business Game 2026</p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Learnly AgroTech participe à la compétition entrepreneuriale majeure de Côte d&apos;Ivoire — la preuve de notre engagement dans l&apos;innovation africaine.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            {[
              { num: 1, color: "#f5a623", shadow: "#b8740f", title: "On analyse tes besoins", desc: "Un audit de ton exploitation agricole pour comprendre tes défis et identifier les leviers de modernisation." },
              { num: 2, color: "#6fcf79", shadow: "#2e7d32", title: "On déploie les drones", desc: "Nos drones cartographient tes champs, surveillent les cultures et détectent les zones à risque." },
              { num: 3, color: "#ffb300", shadow: "#e65100", title: "On crée ta vitrine digitale", desc: "Un site professionnel pour présenter et vendre tes produits — mangues, agrumes, cultures vivrières." },
              { num: 4, color: "#4db6f5", shadow: "#2193d3", title: "On booste tes ventes", desc: "Connecte-toi directement aux acheteurs locaux et internationaux via notre plateforme e-commerce." },
            ].map(({ num, color, shadow, title, desc }) => (
              <div key={num} style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                <div style={{
                  minWidth: 50, height: 50, borderRadius: "50%",
                  background: color, color: "#1a1200",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 900, fontSize: 22, boxShadow: `0 4px 0 ${shadow}`,
                  flexShrink: 0,
                }}>
                  {num}
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 16, color, margin: "0 0 6px" }}>{title}</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" style={{ background: "#0d1a07", padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 900, letterSpacing: 4, color: "#f5a623", textTransform: "uppercase", marginBottom: 12 }}>Nos Solutions</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: "#fff", marginBottom: 56, letterSpacing: -0.5 }}>
            tout ce dont tu as besoin pour <span style={{ color: "#f5a623" }}>moderniser</span>
          </h2>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "Surveillance par drone", desc: "Cartographie aérienne précise de tes cultures. Détection précoce des maladies et des zones de stress hydrique.", color: "#f5a623" },
              { title: "Analyse des données", desc: "Rapports détaillés sur l'état de tes plantations avec des recommandations d'intervention ciblées.", color: "#6fcf79" },
              { title: "Plateforme vitrine", desc: "Un site web professionnel pour exposer tes produits agricoles aux acheteurs locaux et à l'export.", color: "#ffb300" },
              { title: "E-commerce direct", desc: "Vente en ligne de mangues et autres produits agricoles sans intermédiaire — plus de revenus pour toi.", color: "#4db6f5" },
              { title: "Filière Mangue CI", desc: "Expertise spécifique sur la filière mangue ivoirienne — de la plantation à l'exportation.", color: "#f5a623" },
              { title: "Formation digitale", desc: "Apprends à utiliser les outils numériques pour gérer ton exploitation agricole efficacement.", color: "#6fcf79" },
            ].map(({ title, desc, color }) => (
              <div key={title} className="card-hover" style={{
                background: "rgba(255,255,255,0.03)", borderRadius: 20, padding: "28px 24px",
                border: "2px solid rgba(255,255,255,0.07)", cursor: "pointer", backdropFilter: "blur(8px)",
              }}>
                <div style={{ width: 40, height: 5, borderRadius: 3, background: color, marginBottom: 18 }} />
                <h3 style={{ fontWeight: 900, fontSize: 16, color: "#fff", margin: "0 0 10px" }}>{title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE IMAGES */}
      <section style={{
        background: "linear-gradient(150deg, #1a1200 0%, #2d1f00 30%, #1a2e0a 65%, #0d2010 100%)",
        padding: "80px 20px", borderTop: "3px solid rgba(245,166,35,0.2)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 900, letterSpacing: 4, color: "#f5a623", textTransform: "uppercase", marginBottom: 12 }}>En images</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: "#fff", marginBottom: 48, letterSpacing: -0.5 }}>
            Learnly AgroTech <span style={{ color: "#f5a623" }}>en action</span>
          </h2>

          <div className="agro-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 60 }}>
            {/* Card 1 */}
            <div className="card-hover" style={{
              background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(255,255,255,0.1)",
              borderRadius: 24, overflow: "hidden", backdropFilter: "blur(8px)",
            }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/businessgame.jpg" alt="IUA Business Game 2026" fill style={{ objectFit: "contain", padding: 16 }} />
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <span style={{ background: "#e53935", color: "#fff", fontSize: 10, fontWeight: 900, padding: "3px 10px", borderRadius: 100, letterSpacing: 1.5, textTransform: "uppercase" }}>Compétition</span>
                </div>
                <h3 style={{ fontWeight: 900, fontSize: 17, color: "#fff", margin: "0 0 8px" }}>IUA Business Game 2026</h3>
                <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                  Learnly AgroTech participe au Business Game de l&apos;IUA — la compétition entrepreneuriale majeure de Côte d&apos;Ivoire.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-hover" style={{
              background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(245,166,35,0.28)",
              borderRadius: 24, overflow: "hidden", backdropFilter: "blur(8px)",
              boxShadow: "0 0 40px rgba(245,166,35,0.08)",
            }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "linear-gradient(135deg, #1a1200, #2d1f00)", overflow: "hidden" }}>
                <Image src="/drone.jpg" alt="Drone Agriculture AgroTech" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", top: 14, right: 14, background: "#f5a623", color: "#1a1200", fontSize: 10, fontWeight: 900, padding: "4px 12px", borderRadius: 100, letterSpacing: 1.5, textTransform: "uppercase" }}>
                  Innovation
                </div>
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <span style={{ background: "rgba(245,166,35,0.15)", color: "#f5a623", fontSize: 10, fontWeight: 900, padding: "3px 10px", borderRadius: 100, letterSpacing: 1.5, textTransform: "uppercase", border: "1px solid rgba(245,166,35,0.3)" }}>Drone Tech</span>
                </div>
                <h3 style={{ fontWeight: 900, fontSize: 17, color: "#fff", margin: "0 0 8px" }}>Agriculture par Drone</h3>
                <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                  Des drones intelligents pour surveiller, analyser et optimiser les cultures de mangues à grande échelle.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-hover" style={{
              background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(76,175,80,0.2)",
              borderRadius: 24, overflow: "hidden", backdropFilter: "blur(8px)",
            }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/logo.png" alt="Learnly AgroTech Logo" fill style={{ objectFit: "contain", padding: 24 }} />
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <span style={{ background: "rgba(76,175,80,0.15)", color: "#6fcf79", fontSize: 10, fontWeight: 900, padding: "3px 10px", borderRadius: 100, letterSpacing: 1.5, textTransform: "uppercase", border: "1px solid rgba(76,175,80,0.3)" }}>Startup</span>
                </div>
                <h3 style={{ fontWeight: 900, fontSize: 17, color: "#fff", margin: "0 0 8px" }}>Notre identité</h3>
                <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                  Une startup africaine qui place la technologie au cœur de l&apos;agriculture pour moderniser la filière mangue.
                </p>
              </div>
            </div>
          </div>

          {/* Stats pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            {[
              { label: "Drones agricoles", value: "Surveillance & analyse" },
              { label: "E-commerce", value: "Vente directe producteurs" },
              { label: "Impact africain", value: "Filière mangue CI" },
              { label: "Plateformes vitrines", value: "Digital pour agriculteurs" },
            ].map(({ label, value }) => (
              <div key={label} style={{
                background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(245,166,35,0.18)",
                borderRadius: 16, padding: "16px 22px", display: "flex", alignItems: "center", gap: 14, backdropFilter: "blur(6px)",
              }}>
                <div>
                  <p style={{ fontWeight: 900, fontSize: 13, color: "#f5a623", margin: "0 0 2px" }}>{label}</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, margin: 0 }}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#0d1a07", padding: "80px 20px", borderTop: "3px solid rgba(245,166,35,0.2)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 900, letterSpacing: 4, color: "#f5a623", textTransform: "uppercase", marginBottom: 12 }}>Cours privés AgroTech</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: "#fff", marginBottom: 12, letterSpacing: -0.5 }}>
            aller encore plus loin
          </h2>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.55)", fontSize: 17, marginBottom: 48, maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Des solutions sur mesure pour moderniser ton exploitation agricole.
          </p>

          <div style={{
            background: "rgba(245,166,35,0.08)", borderRadius: 20, padding: "20px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 16, marginBottom: 32, boxShadow: "0 6px 0 rgba(184,116,15,0.3)", flexWrap: "wrap",
            border: "2px solid rgba(245,166,35,0.3)",
          }}>
            <div>
              <p style={{ fontWeight: 900, fontSize: 17, color: "#f5a623", margin: "0 0 4px" }}>Consultation gratuite disponible</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, margin: 0 }}>On analyse ton exploitation et on te propose une solution adaptée.</p>
            </div>
            <a href="https://wa.me/+2250700601174" target="_blank" rel="noopener noreferrer" className="btn-bounce" style={{
              background: "#f5a623", color: "#1a1200", fontWeight: 900, fontSize: 14,
              padding: "12px 28px", borderRadius: 12, textDecoration: "none",
              boxShadow: "0 4px 0 #b8740f", textTransform: "uppercase",
              letterSpacing: 0.5, whiteSpace: "nowrap",
            }}>
              Démarrer
            </a>
          </div>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { level: "Surveillance Basic", price: "À partir de 50 000", color: "#f5a623", shadow: "#b8740f", sub: "Pour petites exploitations — jusqu'à 5 ha", features: ["1 vol drone/mois", "Rapport cartographique", "Détection maladies", "Support WhatsApp", "1 conseiller dédié"], popular: false },
              { level: "Vitrine Digitale", price: "À partir de 75 000", color: "#6fcf79", shadow: "#2e7d32", sub: "Site + e-commerce — vente directe", features: ["Site web professionnel", "Boutique en ligne", "Gestion des commandes", "Formation incluse", "Référencement local", "Support 3 mois inclus"], popular: true },
              { level: "Pack Complet", price: "Sur devis", color: "#ffb300", shadow: "#e65100", sub: "Drone + Vitrine + E-commerce + Suivi", features: ["Drones illimités", "Plateforme sur mesure", "E-commerce avancé", "Formation équipe", "Suivi mensuel", "Conseiller dédié", "Rapport export"], popular: false },
            ].map(({ level, price, color, shadow, sub, features, popular }) => (
              <div key={level} className="card-hover" style={{
                background: "rgba(255,255,255,0.03)", borderRadius: 20, overflow: "hidden",
                border: popular ? `3px solid ${color}` : "2px solid rgba(255,255,255,0.08)",
                boxShadow: popular ? `0 8px 0 ${shadow}50` : "none", backdropFilter: "blur(8px)",
              }}>
                {popular && (
                  <div style={{ background: color, color: "#1a1200", textAlign: "center", fontWeight: 900, fontSize: 12, padding: "7px", letterSpacing: 2, textTransform: "uppercase" }}>
                    Populaire
                  </div>
                )}
                <div style={{ padding: "28px 24px 20px", borderBottom: "2px solid rgba(255,255,255,0.06)", background: popular ? `${color}10` : "transparent" }}>
                  <p style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.4)", margin: "0 0 6px" }}>Solution AgroTech</p>
                  <p style={{ fontWeight: 900, fontSize: 20, color: "#fff", margin: "0 0 12px" }}>{level}</p>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
                    <span style={{ fontSize: price.startsWith("Sur") ? 28 : 34, fontWeight: 900, color }}>{price}</span>
                    {!price.startsWith("Sur") && <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 6, fontWeight: 700 }}>FCFA</span>}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "8px 0 0" }}>{sub}</p>
                </div>
                <div style={{ padding: "20px 24px 28px" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                    {features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: 14 }}>
                        <span style={{ color, fontWeight: 900, fontSize: 17 }}>+</span>
                        <span style={{ color: "rgba(255,255,255,0.8)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/+2250700601174" target="_blank" rel="noopener noreferrer" className="btn-bounce" style={{
                    display: "block", textAlign: "center",
                    background: popular ? color : "rgba(255,255,255,0.05)",
                    color: popular ? "#1a1200" : color,
                    border: `2px solid ${color}`,
                    fontWeight: 900, fontSize: 14, padding: "14px",
                    borderRadius: 12, textDecoration: "none",
                    textTransform: "uppercase", letterSpacing: 0.5,
                    boxShadow: popular ? `0 4px 0 ${shadow}` : "none",
                  }}>
                    Nous contacter
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "2px solid rgba(255,255,255,0.08)", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap", backdropFilter: "blur(8px)" }}>
            <div>
              <p style={{ fontWeight: 800, fontSize: 15, color: "#fff", margin: "0 0 4px" }}>Des questions sur nos solutions AgroTech ?</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: 0 }}>Notre équipe est disponible sur WhatsApp pour répondre à toutes tes questions.</p>
            </div>
            <a href="https://wa.me/+2250700601174" target="_blank" rel="noopener noreferrer" className="btn-bounce" style={{
              background: "#25d366", color: "#fff", fontWeight: 900, fontSize: 14,
              padding: "12px 24px", borderRadius: 12, textDecoration: "none",
              textTransform: "uppercase", letterSpacing: 0.5, whiteSpace: "nowrap",
              boxShadow: "0 4px 0 #1da851",
            }}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        background: "linear-gradient(150deg, #1a1200 0%, #2d1f00 50%, #1a2e0a 100%)",
        padding: "80px 20px", position: "relative", overflow: "hidden",
        borderTop: "4px solid #f5a623",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle, #ffd54f 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="animate-blob" style={{ position: "absolute", width: 480, height: 480, background: "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)", top: "-120px", right: "-60px", borderRadius: "60% 40% 30% 70%" }} />
        <div className="animate-blob-delay" style={{ position: "absolute", width: 320, height: 320, background: "radial-gradient(circle, rgba(76,175,80,0.08) 0%, transparent 70%)", bottom: "-80px", left: "4%", borderRadius: "40% 60% 70% 30%" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 900, letterSpacing: 4, color: "rgba(245,166,35,0.7)", textTransform: "uppercase", marginBottom: 18 }}>Commence aujourd&apos;hui</p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 900, color: "#fff", marginBottom: 20, lineHeight: 1.1, letterSpacing: -0.5 }}>
            prêt à transformer ton <span style={{ color: "#f5a623" }}>exploitation agricole</span> ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 18, marginBottom: 44, lineHeight: 1.6 }}>
            Rejoins Learnly AgroTech et modernise ta filière mangue grâce aux drones et au digital.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/+2250700601174" target="_blank" rel="noopener noreferrer" className="btn-bounce" style={{
              background: "#f5a623", color: "#1a1200", fontWeight: 900, fontSize: 16,
              padding: "18px 40px", borderRadius: 16, textDecoration: "none",
              boxShadow: "0 6px 0 #b8740f", textTransform: "uppercase", letterSpacing: 0.5,
            }}>
              Nous contacter — c&apos;est gratuit
            </a>
            <a href="/" className="btn-bounce" style={{
              background: "rgba(255,255,255,0.08)", color: "#fff", fontWeight: 800, fontSize: 16,
              padding: "18px 32px", borderRadius: 16, textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: 0.5,
            }}>
              ← Learnly
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a0a00", padding: "52px 20px", borderTop: "3px solid rgba(245,166,35,0.2)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <Image src="/logo.png" alt="Learnly AgroTech" width={30} height={30} style={{ borderRadius: 6 }} />
                <div>
                  <span style={{ fontWeight: 900, fontSize: 18, color: "#f5a623" }}>Learnly</span>
                  <span style={{ fontWeight: 900, fontSize: 18, color: "#6fcf79" }}> AgroTech</span>
                </div>
              </div>
              <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
                La startup africaine qui modernise la filière mangue par le digital et les drones intelligents.
              </p>
              <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(77,182,245,0.08)", border: "1px solid rgba(77,182,245,0.22)", borderRadius: 8, padding: "6px 12px" }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: "#4db6f5" }}>Filiale de Learnly</span>
              </div>
            </div>
            {[
              { title: "Solutions", links: ["Drones agricoles", "Plateformes vitrines", "E-commerce", "Analyse de données"] },
              { title: "Tarifs", links: ["Surveillance Basic", "Vitrine Digitale", "Pack Complet", "Sur devis"] },
              { title: "Support", links: ["FAQ", "Contact WhatsApp", "Confidentialité", "CGU"] },
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
          <div style={{ borderTop: "1px solid #1f1f00", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ color: "#4b5563", fontSize: 13, margin: 0 }}>© 2025 Learnly AgroTech. Tous droits réservés.</p>
            <p style={{ color: "#4b5563", fontSize: 13, margin: 0 }}>Fait avec ❤️ pour l&apos;agriculture africaine.</p>
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
          .hero-image { max-width: 280px !important; }
        }
        .mobile-nav-link:hover { background: rgba(245,166,35,0.08); }
        #mobile-menu.open { max-height: 480px !important; }
        #hamburger-btn.open .ham-bar:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
        #hamburger-btn.open .ham-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        #hamburger-btn.open .ham-bar:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(245,166,35,0.12); }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes float-delayed { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes blob { 0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; } 50% { border-radius: 40% 60% 70% 30% / 40% 60% 30% 70%; } }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .animate-blob { animation: blob 10s ease-in-out infinite; }
        .animate-blob-delay { animation: blob 14s ease-in-out infinite reverse; }
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