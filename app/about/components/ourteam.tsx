"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Rene Hartert",
    role: "Partner",
    image: "/team/member1.png"
  },
  {
    name: "Vasilis Papas",
    role: "Managing Director",
    image: "/team/member2.png"
  },
  {
    name: "Elena Rostova",
    role: "Design Director",
    image: "/team/member3.png"
  }
];

export default function OurTeam() {
  return (
    <section className="bg-white py-24 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-cream-600">
              Elentra
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
              Partners
            </h2>
          </div>
          <p className="text-zinc-500 max-w-2xl mx-auto font-light text-sm">
            The visionary minds shaping Elentra's premium engineering and timeless design aesthetics.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Top Section: Header Text (Role and Name, reveals on hover) */}
              <div className="h-20 flex flex-col justify-end pb-3 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out translate-y-2 group-hover:translate-y-0">
                <span className="text-zinc-400 text-xs sm:text-sm font-light font-montserrat uppercase tracking-wider block">
                  {member.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-zinc-800 tracking-tight mt-1 font-montserrat">
                  {member.name}
                </h3>
              </div>

              {/* Bottom Section: Grey Image Card with Grayscale Cutout (Rounded) */}
              <div className="aspect-[4/5] bg-[#f4f4f4] rounded-3xl relative overflow-hidden w-full">
                <div className="relative w-full h-full pointer-events-none">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index < 3}
                    className="object-cover object-center filter grayscale contrast-115 transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.02]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
