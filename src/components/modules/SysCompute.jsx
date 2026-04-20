import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from '../ScrambleText';

const SysCompute = () => {
  const skillCategories = [
    {
      title: "Hardware & EDA",
      color: "#ff6b00",
      skills: ["KiCAD", "LTSpice", "PCB Design", "Oscilloscope / Logic Analyzer"],
    },
    {
      title: "Firmware & Controls",
      color: "#00d4ff",
      skills: ["C/C++", "MATLAB / Octave", "Control Systems", "Sensor Fusion", "Embedded Systems"],
    },
    {
      title: "Software & ML",
      color: "#a855f7",
      skills: ["Python", "Machine Learning", "Transformers / Fine-Tuning", "React"],
    },
  ];

  const categoryVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <div className="flex flex-col md:flex-row h-full font-mono gap-12">
      
      {/* Left Side: Categorized Skills Grid */}
      <div className="flex-1">
        <h2 className="section-header"><ScrambleText text="[ SYS_COMPUTE // HARDWARE_&_FIRMWARE ]" /></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              variants={categoryVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}40` }}
                />
                <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skill items */}
              <div className="space-y-2">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={skillVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 py-2 px-3 border border-neutral-800/50 rounded-sm hover:border-neutral-700 transition-colors duration-200 bg-black/10 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"
                      style={{ background: cat.color }}
                    />
                    <span className="text-sm text-neutral-300 tracking-wider font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side: Archive Download */}
      <div className="md:w-[300px] flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-neutral-800 p-6 bg-black/20 text-center rounded-sm"
        >
          <span className="text-xs text-neutral-500 block mb-6 tracking-widest uppercase"><ScrambleText text="/* Offline_Archive_Access */" /></span>
          <button className="border border-accent text-accent bg-black/40 px-6 py-4 text-sm hover:bg-accent/10 hover:text-accent transition-all duration-300 w-full flex justify-center gap-4 items-center font-bold tracking-widest rounded-sm group">
            <span>FETCH PDF_RECORD</span>
            <span className="group-hover:translate-y-0.5 transition-transform">⬇</span>
          </button>
          <p className="text-[10px] text-neutral-600 mt-4 tracking-widest uppercase">link to raw .pdf requires backend hookup</p>
        </motion.div>
      </div>

    </div>
  );
};

export default SysCompute;
