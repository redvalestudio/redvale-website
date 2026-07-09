import Link from"next/link";import{ArrowDown}from"lucide-react";import{Loader}from"@/components/loader";import{Reveal}from"@/components/reveal";import{MagneticLink}from"@/components/magnetic-link";import{CinematicProject}from"@/components/cinematic-project";import{ContactForm}from"@/components/contact-form";import{projects,services}from"@/lib/data";

const process=[
 ["Discovery","We begin in the quiet: listening, questioning, and finding the truth beneath the brief."],
 ["Strategy","We reduce complexity to one sharp idea—a position the product can own and the audience can feel."],
 ["Design","We turn that idea into a complete visual and interaction language, precise down to the smallest gesture."],
 ["Development","We engineer the experience with the same care it was designed: fast, resilient, and exact."],
 ["Launch","We release deliberately, measure honestly, and refine what matters after the real world responds."]
];

export default function Home(){return <><Loader/>
  <section className="relative flex min-h-[100svh] items-end overflow-hidden border-b hairline bg-ink">
    <div aria-hidden className="absolute left-[7%] top-[18%] h-px w-16 bg-gold/70"/>
    <div aria-hidden className="absolute bottom-0 right-[18%] top-0 w-px bg-white/[.035]"/>
    <div className="container relative pb-10 md:pb-14">
      <Reveal><p className="mb-10 text-[9px] uppercase tracking-[.26em] text-white/45">Independent creative technology studio · 2026</p></Reveal>
      <Reveal delay={.08}><h1 className="display max-w-[1380px] text-[clamp(4.7rem,11.9vw,11.3rem)]">Design That Earns Trust <span className="italic text-gold">Before</span> You Say a Word.</h1></Reveal>
      <div className="mt-12 grid gap-8 border-t hairline pt-6 md:grid-cols-[1fr_1fr_auto] md:items-end">
        <p className="max-w-sm text-xs leading-6 text-muted md:text-sm">Premium websites, software, and AI systems for ambitious brands entering their next era.</p>
        <p className="hidden text-[9px] uppercase leading-5 tracking-[.2em] text-white/40 md:block">Strategy · Design<br/>Engineering · Intelligence</p>
        <Link href="#selected-work" className="flex items-center gap-3 text-[9px] uppercase tracking-[.22em]">Selected work <ArrowDown size={13}/></Link>
      </div>
    </div>
  </section>

  <section className="section bg-ink"><div className="container grid gap-16 md:grid-cols-[.55fr_1.45fr]">
    <p className="eyebrow self-start">Red Vale Studio</p>
    <Reveal><h2 className="font-serif text-[clamp(3rem,6.2vw,6.5rem)] leading-[.98] tracking-[-.04em]">We make complex businesses feel simple, credible, and impossible to overlook.</h2><div className="mt-14 grid gap-8 border-t hairline pt-7 md:grid-cols-2"><p className="text-sm leading-7 text-muted">Red Vale is a senior-led design and engineering studio. We partner with people building serious things—and give those things a presence worthy of their ambition.</p><p className="text-sm leading-7 text-muted">No layers of account management. No borrowed aesthetics. Just clear thinking, exacting craft, and a close working relationship from first conversation to final release.</p></div></Reveal>
  </div></section>

  <div id="selected-work">{projects.map((project,index)=><CinematicProject key={project.slug} project={project} index={index}/>)}</div>

  <section className="section border-t hairline bg-ink"><div className="container">
    <div className="grid gap-12 md:grid-cols-2"><div><p className="eyebrow">Capabilities</p><h2 className="display mt-8 text-[clamp(4rem,8vw,8rem)]">One vision.<br/><span className="italic text-gold">Made whole.</span></h2></div><p className="max-w-sm self-end pb-3 text-sm leading-7 text-muted">The best work does not reveal where strategy ends and execution begins. We bring the disciplines together from day one.</p></div>
    <div className="mt-24 border-t hairline">{services.map((service,i)=><Link href="/services" key={service} className="group grid grid-cols-[45px_1fr_auto] items-center border-b hairline py-8 transition-[padding] duration-500 hover:px-4 md:grid-cols-[90px_1fr_auto] md:py-10"><span className="text-[9px] tracking-[.2em] text-gold">0{i+1}</span><h3 className="font-serif text-3xl tracking-[-.02em] md:text-5xl">{service}</h3><span className="text-[9px] uppercase tracking-[.2em] text-white/0 transition-colors group-hover:text-white/50">Explore</span></Link>)}</div>
  </div></section>

  <section className="border-y hairline bg-[#090909]"><div className="container py-28 md:py-44">
    <div className="mb-24 grid gap-10 md:grid-cols-2"><p className="eyebrow">The process</p><h2 className="font-serif text-5xl leading-none tracking-[-.04em] md:text-8xl">A disciplined path from uncertainty to <span className="italic text-gold">clarity.</span></h2></div>
    <div>{process.map(([name,copy],i)=><Reveal key={name}><article className="grid gap-6 border-t hairline py-12 md:grid-cols-[130px_1fr_1fr] md:py-16"><span className="text-[10px] tracking-[.2em] text-gold">0{i+1}</span><h3 className="font-serif text-4xl md:text-6xl">{name}</h3><p className="max-w-md text-sm leading-7 text-muted">{copy}</p></article></Reveal>)}</div>
  </div></section>

  <section className="section bg-ink"><div className="container grid gap-16 md:grid-cols-[.8fr_1.2fr]">
    <div><p className="eyebrow">Begin a conversation</p><h2 className="display mt-9 text-[clamp(4.5rem,8vw,8rem)]">Bring us the <span className="italic text-gold">ambitious</span> one.</h2><p className="mt-10 max-w-sm text-sm leading-7 text-muted">Tell us what you are building, what needs to change, and why it matters now. We reply personally within two business days.</p><div className="mt-12"><MagneticLink href="/book">Book a call</MagneticLink></div></div>
    <div className="self-end border-t hairline pt-7"><ContactForm/></div>
  </div></section>
  </>}
