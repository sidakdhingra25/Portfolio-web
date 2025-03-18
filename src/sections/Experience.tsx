import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "March 2025 - Present",
      content: (
        <div>
          <a
            href=""
            className="text-blue-500 text-lg md:text-3xl font-bold mb-2"
            target="_blank"
            rel="noreferrer"
          >
            FinCon Research - Freelance
          </a>
          <p>Web Developer</p>
        </div>
      ),
    },
    {
      title: "Jan 2025",
      content: (
        <div>
          <a
            href="https://studiomarici.in/"
            className="text-[#FE8084] text-lg md:text-3xl font-bold mb-2"
            target="_blank"
            rel="noreferrer"
          >
            StudioMarici - Freelance
          </a>
          <p className="text-white text-xs md:text-sm font-normal mb-">
            Frontend Developer
          </p>
        </div>
      ),
    },
    {
      title: "August - October 2024",
      content: (
        <div>
          <a
            href="https://www.flib.store/"
            className="text-[#2d9f54] text-lg md:text-3xl font-bold mb-2"
            target="_blank"
            rel="noreferrer"
          >
            Flib
          </a>
          <p>Frontend Developer Intern</p>
        </div>
      ),
    },
  ];

  return (
    <section id="experience">
      <div className="w-full overflow-hidden">
        <Timeline data={data} />
      </div>
    </section>
  );
}
