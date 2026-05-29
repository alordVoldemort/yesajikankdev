"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface WadaGalleryProps {
  title: string;
  description: string;
}

/*
 * DESKTOP: Section is PINNED to the viewport for 3x viewport scroll distance.
 *   - Parchment / old-page background fills the full screen.
 *   - As the user scrolls inside the pin window:
 *       1. Center hero image zooms in from nothing.
 *       2. Left pair slides in from the left simultaneously.
 *       3. Right pair slides in from the right simultaneously.
 *   - After all images are revealed the pin releases.
 *
 * MOBILE: Normal flow, stacked images, simple fade-in per card.
 */
export default function WadaGallery({ title, description }: WadaGalleryProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const mobPinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    /* ------------------------------------------
       DESKTOP  (>= 768 px)
    ------------------------------------------ */
    mm.add("(min-width: 768px)", () => {
      /* Hide all side images and the center BEFORE the section is pinned.
         gsap.set applies instantly so nothing is ever visible on arrival. */
      gsap.set(".wg-center", { scale: 0.5, opacity: 0 });
      gsap.set(".wg-l1", { x: () => -(window.innerWidth + 400), opacity: 0 });
      gsap.set(".wg-r1", { x: () => window.innerWidth + 400, opacity: 0 });
      gsap.set(".wg-l2", { x: () => -(window.innerWidth + 400), opacity: 0 });
      gsap.set(".wg-r2", { x: () => window.innerWidth + 400, opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* 1 — center hero: scale + fade in */
      tl.to(".wg-center", { scale: 1, opacity: 1, duration: 1.8 });

      /* brief pause */
      tl.to({}, { duration: 0.5 });

      /* 2 — left-top slides in from left */
      tl.to(".wg-l1", { x: 0, opacity: 1, duration: 1.6 });

      /* brief pause */
      tl.to({}, { duration: 0.4 });

      /* 3 — right-top slides in from right */
      tl.to(".wg-r1", { x: 0, opacity: 1, duration: 1.6 });

      /* brief pause */
      tl.to({}, { duration: 0.4 });

      /* 4 — left-bottom slides in from left */
      tl.to(".wg-l2", { x: 0, opacity: 1, duration: 1.6 });

      /* brief pause */
      tl.to({}, { duration: 0.4 });

      /* 5 — right-bottom slides in from right */
      tl.to(".wg-r2", { x: 0, opacity: 1, duration: 1.6 });

      /* hold on full composition before unpin */
      tl.to({}, { duration: 1.5 });
    });

    /* ------------------------------------------
       MOBILE  (< 768 px)
    ------------------------------------------ */
    mm.add("(max-width: 767px)", () => {
      /* Slide 1 zooms in; slides 2‑5 wait off-screen to the right */
      gsap.set(".wgm-s1", { scale: 0.88, opacity: 0 });
      gsap.set([".wgm-s2", ".wgm-s3", ".wgm-s4", ".wgm-s5"], { xPercent: 100 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: mobPinRef.current,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* 1 — first image zooms in */
      tl.to(".wgm-s1", { scale: 1, opacity: 1, duration: 1.5 });
      tl.to({}, { duration: 0.8 });

      /* 1 → 2 */
      tl.to(".wgm-s1", { xPercent: -110, duration: 1.2 });
      tl.to(".wgm-s2", { xPercent: 0, duration: 1.2 }, "<");
      tl.to({}, { duration: 0.8 });

      /* 2 → 3 */
      tl.to(".wgm-s2", { xPercent: -110, duration: 1.2 });
      tl.to(".wgm-s3", { xPercent: 0, duration: 1.2 }, "<");
      tl.to({}, { duration: 0.8 });

      /* 3 → 4 */
      tl.to(".wgm-s3", { xPercent: -110, duration: 1.2 });
      tl.to(".wgm-s4", { xPercent: 0, duration: 1.2 }, "<");
      tl.to({}, { duration: 0.8 });

      /* 4 → 5 */
      tl.to(".wgm-s4", { xPercent: -110, duration: 1.2 });
      tl.to(".wgm-s5", { xPercent: 0, duration: 1.2 }, "<");
      tl.to({}, { duration: 1.5 });
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      clearTimeout(t);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      mm.revert();
    };
  }, []);

  const parchment: React.CSSProperties = {
    background:
      "radial-gradient(ellipse 140% 120% at 50% 0%, #fdf3df 0%, #e8c07a 25%, #b07832 52%, #6b3d10 76%, #3d1f07 100%)",
  };

  return (
    <>
      {/* --- DESKTOP - pinned full-screen section --- */}
      <div
        ref={pinRef}
        className="hidden md:block relative w-full overflow-hidden"
        style={{ ...parchment, height: "100svh", minHeight: "100vh" }}
      >
        {/* Paper grain texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.18] mix-blend-multiply"
          style={{
            backgroundImage: "url('/wada/sideimg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Radial dark vignette */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 32%, rgba(0,0,0,0.62) 100%)",
          }}
        />

        {/* Top edge: blends into the section above — short so it never reaches images */}
        <div
          className="absolute top-0 inset-x-0 z-30 pointer-events-none"
          style={{
            height: "10vh",
            background:
              "linear-gradient(to bottom, #7E868E 0%, transparent 100%)",
          }}
        />
        {/* Bottom edge: only covers the empty gap below image cards (pb-8) */}
        <div
          className="absolute bottom-0 inset-x-0 z-30 pointer-events-none"
          style={{
            height: "8vh",
            background: "linear-gradient(to top, #838366 0%, transparent 100%)",
          }}
        />

        {/* Header */}
        <div className="absolute top-0 inset-x-0 z-20 text-center pt-10 select-none pointer-events-none">
          
          <h2
            className="font-black leading-none tracking-tight"
            style={{
             fontSize: "clamp(1rem, 2.5vw, 2rem)",
              color: "#2a0d00",
              fontFamily: "IBM Plex Sans Devanagari, sans-serif",
            }}
          >
            {title}
          </h2>
          <div
            className="mx-auto mt-3 rounded-full"
            style={{ width: 52, height: 2, background: "#8b3d0f" }}
          />
          <p
            className="mt-2 max-w-xl mx-auto text-sm leading-[1.9] text-center px-8"
            style={{
              color: "rgba(48,18,0,0.70)",
              fontFamily: "IBM Plex Sans Devanagari, sans-serif",
            }}
          >
            {description}
          </p>
        </div>

        {/* Image grid - overflow-hidden clips the flying images */}
        <div className="absolute inset-0 z-10 overflow-hidden grid grid-cols-12 gap-4 px-6 pt-44 pb-8">
          {/* LEFT column */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="wg-l1 relative flex-1 rounded-2xl overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.5)]">
              <Image
                src="/wada/sideimg.jpeg"
                alt="Historical view"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="wg-l2 relative flex-1 rounded-2xl overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.5)]">
              <Image
                src="/wada/upside.jpeg"
                alt="Wada surroundings"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>

          {/* CENTER column - hero */}
          <div className="col-span-6 rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.65)]">
            <div className="wg-center relative w-full h-full">
              <Image
                src="/wadamain.png"
                alt="Historic Wada"
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
            </div>
          </div>

          {/* RIGHT column */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="wg-r1 relative flex-1 rounded-2xl overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.5)]">
              <Image
                src="/wada/centerimg.jpg"
                alt="Kank family"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="wg-r2 relative flex-1 rounded-2xl overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.5)]">
              <Image
                src="/wada/insideimg.jpg"
                alt="Yesaji Kank"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE — pinned horizontal carousel --- */}
      <div
        ref={mobPinRef}
        className="md:hidden relative w-full overflow-hidden"
        style={{ ...parchment, height: "100svh", minHeight: "100vh" }}
      >
        {/* Paper grain */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] mix-blend-multiply"
          style={{
            backgroundImage: "url('/paper-card.png')",
            backgroundSize: "cover",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        {/* Edge blends */}
        <div
          className="absolute top-0 inset-x-0 z-30 pointer-events-none"
          style={{
            height: "10vh",
            background:
              "linear-gradient(to bottom, #7E868E 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 inset-x-0 z-30 pointer-events-none"
          style={{
            height: "8vh",
            background: "linear-gradient(to top, #838366 0%, transparent 100%)",
          }}
        />

        {/* Flex column: header shrinks, image stage takes the rest */}
        <div className="absolute inset-0 z-10 flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 text-center pt-10 pb-3 px-6 select-none pointer-events-none">
           
            <h2
              className="font-black leading-none"
              style={{
                fontSize: "clamp(1.8rem, 8vw, 2.6rem)",
                color: "#2a0d00",
                fontFamily: "IBM Plex Sans Devanagari, sans-serif",
              }}
            >
              {title}
            </h2>
            <div
              className="mx-auto mt-2 rounded-full"
              style={{ width: 40, height: 2, background: "#8b3d0f" }}
            />
            <p
              className="mt-2 text-xs leading-[1.8] text-center"
              style={{
                color: "rgba(48,18,0,0.68)",
                fontFamily: "IBM Plex Sans Devanagari, sans-serif",
              }}
            >
              {description}
            </p>
          </div>

          {/* Image carousel stage — flex-1 fills remainder, overflow-hidden clips slides */}
          <div
            className="relative flex-1 overflow-hidden mx-4 mb-8 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.65)]"
            style={{ background: "rgba(0,0,0,0.55)" }}
          >
            <div className="wgm-s1 absolute inset-0 flex items-center justify-center">
              <Image
                src="/wadamain.png"
                alt="Historic Wada"
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
            <div className="wgm-s2 absolute inset-0 flex items-center justify-center">
              <Image
                src="/wada/sideimg.jpeg"
                alt="Historical view"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="wgm-s3 absolute inset-0 flex items-center justify-center">
              <Image
                src="/wada/upside.jpeg"
                alt="Kank family"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="wgm-s4 absolute inset-0 flex items-center justify-center">
              <Image
                src="/wada/centerimg.jpg"
                alt="Wada surroundings"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="wgm-s5 absolute inset-0 flex items-center justify-center">
              <Image
                src="/wada/insideimg.jpg"
                alt="Yesaji Kank"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
