import CartButton from "./cart/CartButton";
import AuthButtons from "./AuthButtons";

export default function HomePage() {
    return (
      <div className="bg-hooded-midnight text-hooded-ice font-body">
        {/* NAV */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-hooded-charcoal/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-hooded-charcoal border border-white/10" />
              <span className="font-semibold tracking-wide">Hooded Up</span>
            </div>
  
            <nav className="hidden md:flex items-center gap-7 text-sm text-hooded-ice/80">
              <a className="hover:text-hooded-neon transition" href="#shop">
                Shop
              </a>
              <a className="hover:text-hooded-neon transition" href="#categories">
                Categories
              </a>
              <a className="hover:text-hooded-neon transition" href="#about">
                About
              </a>
            </nav>
  
            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-white/10 bg-hooded-charcoal px-3 py-2 text-sm hover:border-white/20 transition">
                Search
              </button>
              <CartButton />
              <AuthButtons />
            </div>
          </div>
        </header>
  
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-hooded-charcoal px-4 py-2 text-sm text-hooded-ice/80">
                <span className="h-2 w-2 rounded-full bg-hooded-neon shadow-glow" />
                Limited Drops • Night Energy
              </div>
  
              <h1 className="mt-5 font-heading text-4xl md:text-6xl leading-tight">
                Hooded Up <span className="text-hooded-neon">&quot;Locked In&quot;</span>
              </h1>
  
              <p className="mt-4 text-base md:text-lg text-hooded-ice/75 max-w-xl">
                Premium streetwear built for late nights, clean fits, and standout
                color. New drops don’t last — get in early
              </p>
  
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#shop"
                  className="rounded-xl2 bg-hooded-electric px-6 py-3 font-semibold text-hooded-charcoal
                             hover:bg-hooded-neon hover:shadow-glowStrong transition"
                >
                  Shop the Drop
                </a>
  
                <a
                  href="#categories"
                  className="rounded-xl2 border border-white/15 bg-hooded-charcoal px-6 py-3 font-semibold
                             hover:border-white/25 hover:text-hooded-neon transition"
                >
                  Browse Categories
                </a>
              </div>
  
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-hooded-ice/70">
                <span className="rounded-full border border-white/10 bg-hooded-charcoal px-4 py-2">
                  Free shipping over $X
                </span>
                <span className="rounded-full border border-white/10 bg-hooded-charcoal px-4 py-2">
                  Easy returns
                </span>
                <span className="rounded-full border border-white/10 bg-hooded-charcoal px-4 py-2">
                  Limited runs
                </span>
              </div>
            </div>
  
            {/* Hero Visual Placeholder */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-hooded-neon/10 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-hooded-charcoal p-6">
                <div className="aspect-[4/5] w-full rounded-2xl border border-white/10 bg-black/20" />
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-hooded-ice/70">Featured</p>
                    <p className="font-semibold">Midnight Hoodie</p>
                  </div>
  
                  <span className="rounded-full bg-hooded-neon px-3 py-1 text-sm font-bold text-hooded-charcoal">
                    NEW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* CATEGORIES */}
        <section id="categories" className="mx-auto max-w-6xl px-5 pb-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-2xl md:text-3xl">Shop Categories</h2>
            <a
              className="text-sm text-hooded-ice/70 hover:text-hooded-neon transition"
              href="#shop"
            >
              View products →
            </a>
          </div>
  
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {["Hoodies", "Tees", "Accessories"].map((label) => (
              <a
                key={label}
                href="#shop"
                className="group rounded-xl2 border border-white/10 bg-hooded-charcoal p-6
                           hover:border-white/20 hover:shadow-glow transition"
              >
                <div className="h-12 w-12 rounded-2xl border border-white/10 bg-hooded-midnight" />
  
                <h3 className="mt-4 text-xl font-semibold group-hover:text-hooded-neon transition">
                  {label}
                </h3>
  
                <p className="mt-1 text-sm text-hooded-ice/70">
                  Explore the latest fits and limited runs
                </p>
              </a>
            ))}
          </div>
        </section>
  
        {/* BRAND STRIP */}
        <section id="about" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="rounded-[2rem] border border-white/10 bg-hooded-charcoal p-8 md:p-10">
            <h2 className="font-heading text-2xl md:text-3xl">
              Built for the night <span className="text-hooded-neon">Made to stand out</span>
            </h2>
  
            <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-hooded-ice/75">
              <div className="rounded-xl2 border border-white/10 bg-hooded-midnight/40 p-5">
                <p className="font-semibold text-hooded-ice">Limited runs</p>
                <p className="mt-1">Drops don’t restock When it’s gone, it’s gone</p>
              </div>
              <div className="rounded-xl2 border border-white/10 bg-hooded-midnight/40 p-5">
                <p className="font-semibold text-hooded-ice">Quality blanks</p>
                <p className="mt-1">Comfort + weight that holds up over time</p>
              </div>
              <div className="rounded-xl2 border border-white/10 bg-hooded-midnight/40 p-5">
                <p className="font-semibold text-hooded-ice">Streetwear energy</p>
                <p className="mt-1">Clean fits with an edge — no noise, all presence.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* EMAIL CAPTURE */}
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="rounded-[2rem] border border-white/10 bg-hooded-charcoal p-8 md:p-10">
            <h2 className="font-heading text-2xl md:text-3xl">
              Get drop alerts <span className="text-hooded-neon">No spam</span>
            </h2>
  
            <p className="mt-2 text-hooded-ice/70 max-w-2xl">
              Be first in line when the next drop hits Limited runs sell out fast
            </p>
  
            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                className="w-full rounded-xl2 border border-white/10 bg-hooded-midnight px-4 py-3 outline-none
                           focus:border-white/25 placeholder-hooded-ice/50"
                placeholder="you@example.com"
              />
  
              <button
                className="rounded-xl2 bg-hooded-electric px-6 py-3 font-semibold text-hooded-charcoal
                           hover:bg-hooded-neon hover:shadow-glowStrong transition"
              >
                Notify me
              </button>
            </div>
  
            <p className="mt-3 text-xs text-hooded-ice/60">
              By subscribing, you agree to receive email updates Unsubscribe anytime
            </p>
          </div>
        </section>
  
        {/* FOOTER */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <p className="text-sm text-hooded-ice/60">© {new Date().getFullYear()} Hooded Up</p>
  
            <div className="flex flex-wrap gap-5 text-sm text-hooded-ice/70">
              <a className="hover:text-hooded-neon transition" href="#about">
                About
              </a>
              <a className="hover:text-hooded-neon transition" href="#shop">
                Shop
              </a>
              <a className="hover:text-hooded-neon transition" href="#categories">
                Categories
              </a>
              <a className="hover:text-hooded-neon transition" href="#contact">
                Contact
              </a>
              <a className="hover:text-hooded-neon transition" href="#returns">
                Returns
              </a>
              <a className="hover:text-hooded-neon transition" href="#size-guide">
                Size Guide
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  