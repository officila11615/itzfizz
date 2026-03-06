"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "WELCOME ITZFIZZ";

const STATS = [
  {
    id: "box1",
    value: "58%",
    label: "Increase in organic traffic",
    variant: "yellow" as const,
    position: { top: "5%", right: "30%" },
  },
  {
    id: "box2",
    value: "23%",
    label: "Decrease in bounce rate",
    variant: "blue" as const,
    position: { bottom: "5%", right: "35%" },
  },
  {
    id: "box3",
    value: "27%",
    label: "Increase in conversion rate",
    variant: "dark" as const,
    position: { top: "5%", right: "10%" },
  },
  {
    id: "box4",
    value: "40%",
    label: "Faster page load speed",
    variant: "orange" as const,
    position: { bottom: "5%", right: "12.5%" },
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const valueAddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const car = carRef.current;
      const trail = trailRef.current;
      const valueAdd = valueAddRef.current;

      if (!car || !trail || !valueAdd) return;

      const letters = gsap.utils.toArray<HTMLSpanElement>(".value-letter");
      const valueRect = valueAdd.getBoundingClientRect();
      const letterOffsets = letters.map((letter) => letter.offsetLeft);

      const roadWidth = window.innerWidth;
      const carWidth = 150;
      const endX = roadWidth - carWidth;

      // ── Initial Load Animations ──
      // Staggered entrance for stat boxes
      gsap.fromTo(
        ".stat-box",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 0, // Keep at 0, scroll will reveal them
          duration: 0.1,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      // ── Scroll-Driven Car Animation ──
      gsap.to(car, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        x: endX,
        ease: "none",
        onUpdate: function () {
          const carX = gsap.getProperty(car, "x") as number;
          const carCenter = carX + carWidth / 2;

          // Reveal letters as car passes
          letters.forEach((letter, i) => {
            const letterX = valueRect.left + letterOffsets[i];
            if (carCenter >= letterX) {
              gsap.to(letter, { opacity: 1, duration: 0.3 });
            } else {
              gsap.to(letter, { opacity: 0, duration: 0.3 });
            }
          });

          // Grow trail behind car
          gsap.set(trail, { width: carCenter });
        },
      });

      // ── Stat Boxes Scroll Reveal ──
      const boxOffsets = [400, 600, 800, 1000];
      STATS.forEach((stat, i) => {
        gsap.to(`#${stat.id}`, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top+=${boxOffsets[i]} top`,
            end: `top+=${boxOffsets[i] + 200} top`,
            scrub: true,
          },
          opacity: 1,
          y: 0,
        });
      });

      // ── Recalculate on resize ──
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-section" ref={sectionRef}>
      <div className="hero-track" ref={trackRef}>
        {/* Road */}
        <div className="road" id="road">
          {/* Car */}
          <img
            src="/itzfizz/car.png"
            alt="Sports car"
            className="car"
            ref={carRef}
            draggable={false}
          />

          {/* Trail */}
          <div className="trail" ref={trailRef} />

          {/* Headline Letters */}
          <div className="value-add" ref={valueAddRef} style={{ top: "30%" }}>
            {HEADLINE.split("").map((char, i) => (
              <span key={i} className="value-letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>

        {/* Stat Boxes */}
        {STATS.map((stat) => (
          <div
            key={stat.id}
            id={stat.id}
            className={`stat-box stat-box--${stat.variant}`}
            style={stat.position as React.CSSProperties}
          >
            <span className="stat-number">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
