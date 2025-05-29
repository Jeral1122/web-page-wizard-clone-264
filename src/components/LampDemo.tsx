"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampDemo() {
  const demoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!demoRef.current) return;

    // Vapi AI voice agent embed
    let vapiInstance: any = null;
    const assistant = "<33213eff-d8a9-41bf-b394-7487a2f8f5a9>"; // Substitute with your assistant ID
    const apiKey = "<61e6d51e-4990-4f1a-81c5-322ee3d44293>"; // Or pull from env
    const buttonConfig = {const buttonConfig = {
  position: "bottom-right", // "bottom" | "top" | "left" | "right" | "top-right" | "top-left" | "bottom-left" | "bottom-right"
  offset: "40px", // decide how far the button should be from the edge
  width: "50px", // min-width of the button
  height: "50px", // height of the button
  idle: { // button state when the call is not active.
    color: `rgb(93, 254, 202)`, 
    type: "pill", // or "round"
    title: "Have a quick question?", // only required in case of Pill
    subtitle: "Talk with our AI assistant", // only required in case of pill
    icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
  },
  loading: { // button state when the call is connecting
    color: `rgb(93, 124, 202)`,
    type: "pill", // or "round"
    title: "Connecting...", // only required in case of Pill
    subtitle: "Please wait", // only required in case of pill
    icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
  },
  active: { // button state when the call is in progress or active.
    color: `rgb(255, 0, 0)`,
    type: "pill", // or "round"
    title: "Call is in progress...", // only required in case of Pill
    subtitle: "End the call.", // only required in case of pill
    icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
  },
};
};

    (function(d: Document, t: string) {
      const g = document.createElement(t);
      const s = d.getElementsByTagName(t)[0];
      g.src =
        "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
      g.defer = true;
      g.async = true;
      s.parentNode!.insertBefore(g, s);

      g.onload = () => {
        // @ts-ignore
        vapiInstance = window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: buttonConfig,
          container: demoRef.current,
        });
      };
    })(document, "script");

    // no specific cleanup for the injected script
  }, []);

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>

      {/* Demo container for AI voice agent */}
      <div
        ref={demoRef}
        style={{ width: '100%', height: '400px', marginTop: '2rem' }}
      />
    </LampContainer>
  );
}

