"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    const handleMouseMove = (e) => {
      const bounds = imageElement.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;

      const moveX = (x - centerX) / 20; // lower divisor = more movement
      const moveY = (y - centerY) / 20;

      imageElement.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
    };

    const resetTransform = () => {
      imageElement.style.transform = "translate(0, 0) scale(1)";
    };

    imageElement.addEventListener("mousemove", handleMouseMove);
    imageElement.addEventListener("mouseleave", resetTransform);

    window.addEventListener("scroll", handleScroll);

    return () => {
      imageElement.removeEventListener("mousemove", handleMouseMove);
      imageElement.removeEventListener("mouseleave", resetTransform);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 container max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <div className="flex-1 text-center lg:text-left w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 gradient-title">
              Manage Your Finances with Intelligence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              An AI-powered financial management platform that helps you track,
              analyze, and optimize your spending with real-time insights.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="px-8 rounded-full accent-gradient"
                asChild
              >
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 rounded-full"
                asChild
              >
                <Link href="/">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative w-full">
            <div className="accent-gradient rounded-2xl p-1">
              <div className="bg-background rounded-xl p-6">
                <div className="hero-image-wrapper mt-5 md:mt-0">
                  <div
                    ref={imageRef}
                    className="hero-image transition-transform duration-300 ease-out"
                  >
                    <Image
                      src="/banner.png"
                      width={1280}
                      height={720}
                      alt="Dashboard Preview"
                      className="rounded-lg shadow-2xl border mx-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
