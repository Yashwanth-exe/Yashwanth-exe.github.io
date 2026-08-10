import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, FileText } from 'lucide-react';
import ScrambleText from '../ScrambleText';

const SysActuate = () => {
  const projects = [
    {
      title: "BIDIRECTIONAL SIGNAL ISOLATION",
      subtitle: "Novel Optocoupler Circuit for Half-Duplex Protocols",
      stack: ["PCB Design", "LTSpice", "Arduino"],
      description: "Co-invented a novel hardware system that achieves bidirectional signal isolation over a single communication channel using optical components and mode-switching logic. The design eliminates the need for dual optocouplers, signal splitters, and combiners, streamlining communication for half-duplex protocols such as I2C and UART. Operating reliably at frequencies up to 10 kHz with low-voltage logic (3.3V/5V), the system achieves up to 5,000 volts of galvanic isolation — a 2x improvement over standard solutions — while significantly reducing timing errors and hardware complexity for industrial and automotive applications.",
      contribution: "Sole inventor and designer for the novel electrical architecture. Designed, built, and validated the full hardware implementation.",
      patent: "202541060760",
      patentStatus: "published",
      color: "#00d4ff",
    },
    {
      title: "SLIP ESTIMATION",
      subtitle: "Real-Time Slip Estimation for Mobile Robots",
      stack: ["Octave/MATLAB", "PCB Design", "Controls", "IMU"],
      description: "Developed a real-time slip estimation system to enhance the closed-loop motion control and navigation accuracy of skid-steer and differential drive mobile robots. The architecture continuously integrates and compares wheel encoder rotation data with motion and orientation data from an Inertial Measurement Unit (IMU) to accurately identify discrepancies indicative of wheel slip. By dynamically generating corrective motor control commands through an actuation interface, this solution effectively mitigates odometry drift and maintains reliable localization across varying surface tractions and dynamic operating environments.",
      contribution: "Built the fuzzy logic terrain classification module from scratch, derived the initial EKF equations and system state equations. Made the initial testbench differential drive robot. Wrote the firmware code to get data from encoders and IMU on a Teensy 4.1, wrote the code for the fuzzy system and tweaked the membership functions to get the terrain score in accordance to the actual terrain.",
      patent: "202641011673",
      patentStatus: "filed",
      color: "#a855f7",
    },
    {
      title: "ADAPTIVE FUZZY LOGIC CONTROL",
      subtitle: "Intelligent Self-Tuning Control Architecture",
      stack: ["Controls", "Octave/MATLAB", "Python", "Embedded"],
      description: "Developed an intelligent, real-time control architecture using attentive fuzzy logic capable of dynamically modulating membership functions and rule weights based on live system feedback. The system integrates a continuous self-tuning learning loop to improve stability, minimize steady-state error, and reduce overshooting under varying loads and environmental noise without requiring human intervention. This robust controller is highly scalable and optimized for deployment in autonomous robotics, drones, industrial automation, and modern cyber-physical applications.",
      contribution: "Designed and implemented the full adaptive fuzzy logic controller, including the self-tuning learning loop and dynamic membership function modulation.",
      patent: null,
      color: "var(--color-accent)",
    },
    {
      title: "FARMBOT",
      subtitle: "Autonomous Agricultural Scouting Platform",
      stack: ["PCB Design", "Machine Learning", "CAD", "Controls"],
      description: "Engineered an autonomous, off-road robotic platform optimized for real-time disease and nutrient monitoring in high-value horticulture crops. FarmBot utilizes a distributed compute architecture (NVIDIA Jetson Orin Nano and Raspberry Pi Pico) and features a YOLOv11-Seg AI pipeline for pixel-level fruit ripeness estimation, occlusion handling, and early-stage leaf disease detection. The robot is equipped with a custom stepper-driven soil probe for localized subterranean NPK analysis, feeding real-world chemical and visual data into a Prescriptive Decision Engine and a live Digital Twin Dashboard to provide actionable, plant-level yield optimization directives.",
      contribution: "Designed and fabricated the electronics and PCB, wrote the embedded firmware, and handled full integration of the compute stack with the sensor array and AI pipeline.",
      patent: null,
      color: "#22c55e",
    },
    {
      title: "CROSS-ARCH FIRMWARE PORTING",
      subtitle: "Automated Multi-Agent Firmware Migration",
      stack: ["Embedded Systems", "AI Agents", "CMSIS-SVD", "Renode"],
      description: "Co-created an automated, multi-agent framework designed to seamlessly migrate embedded firmware across heterogeneous microcontroller architectures. The system employs a deterministic orchestration of AI agents — including Analyst, Mapper, Translator, and Validator modules — combined with CMSIS-SVD semantic mapping to translate source code into a vendor-neutral Hardware Intermediate Representation (HIR). By integrating Renode simulation-in-the-loop with physical hardware validation, this pipeline ensures deterministic code generation, prevents hallucinated register references, and significantly reduces the time and cost associated with manual firmware rewrites.",
      contribution: "Co-created the multi-agent orchestration framework, designed the Hardware Intermediate Representation, and integrated the Renode simulation-in-the-loop validation pipeline.",
      patent: null,
      color: "#f59e0b",
    },
    {
      title: "DELPHI CRUCIBLE",
      subtitle: "Agentic Portfolio Analysis Platform",
      stack: ["Python", "FastAPI", "Next.js", "Redis"],
      description: "Architected and deployed an automated agentic portfolio analysis platform orchestrating 4 specialized AI agents (PM, Bull, Bear, and Quant) for collaborative financial analysis and institutional-grade investment recommendations. Engineered a real-time orchestration layer using FastAPI, Redis, and Server-Sent Events (SSE) for low-latency agent communication, persistent state management, and fault-tolerant execution. Built a full-stack application with Next.js, TypeScript, Tailwind CSS, and Framer Motion, supporting stock analysis, 10-K PDF processing, portfolio tracking, and interactive financial dashboards.",
      contribution: "Full-stack design and implementation — built the multi-agent orchestration backend, the real-time SSE pipeline, and the complete Next.js frontend with interactive dashboards.",
      patent: null,
      link: "https://delphicrucible-steel.vercel.app/",
      color: "#e11d48",
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="flex flex-col h-full font-mono">
      <h2 className="section-header"><ScrambleText text="[ SYS_ACTUATE // PROJECTS_ARCHIVE ]" /></h2>
      <div className="flex flex-col space-y-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="border border-card-border rounded-sm hover:border-hover-border transition-all duration-300 overflow-hidden group"
            style={{ background: 'var(--card-bg)' }}
          >
            {/* Color accent bar at top */}
            <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${proj.color}, transparent)` }} />

            <div className="p-6 md:p-8">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-heading font-bold tracking-wider text-xl md:text-2xl font-display flex items-center gap-3">
                    <span className="inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ background: proj.color, boxShadow: `0 0 8px ${proj.color}40` }}></span>
                    {proj.title}
                  </h3>
                  <p className="text-muted tracking-wide text-sm md:text-base mt-1">{proj.subtitle}</p>
                </div>
                {proj.patent && (
                  <div className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold tracking-widest flex-shrink-0 border ${
                    proj.patentStatus === 'published'
                      ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                      : 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30'
                  }`}>
                    <FileText size={12} />
                    {proj.patentStatus === 'published' ? 'PATENT PUBLISHED' : 'PATENT FILED'}: {proj.patent}
                  </div>
                )}
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-bold tracking-widest px-2.5 py-1 border rounded-sm"
                    style={{
                      color: proj.color,
                      borderColor: `${proj.color}30`,
                      background: `${proj.color}08`,
                    }}
                  >
                    {tech.toUpperCase()}
                  </span>
                ))}
              </div>

              {/* Synopsis */}
              <div className="mb-4">
                <span className="text-xs text-subtle block mb-2 tracking-widest uppercase"><ScrambleText text="/* Synopsis */" /></span>
                <AnimatePresence initial={false}>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedIndex === idx ? 'auto' : '4.5rem' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden relative"
                  >
                    <p className="text-muted text-sm md:text-base leading-relaxed">
                      {proj.description}
                    </p>
                    {expandedIndex !== idx && (
                      <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--gradient-fade), transparent)' }} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Expand/Collapse toggle */}
              <button
                onClick={() => toggleExpand(idx)}
                className="flex items-center gap-1.5 text-xs text-subtle hover:text-accent transition-colors tracking-widest mb-4"
              >
                {expandedIndex === idx ? (
                  <>COLLAPSE <ChevronUp size={14} /></>
                ) : (
                  <>EXPAND <ChevronDown size={14} /></>
                )}
              </button>

              {/* Contribution — visible when expanded */}
              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <span className="text-xs text-subtle block mb-2 tracking-widest uppercase"><ScrambleText text="/* Role_&_Execution */" /></span>
                    <p className="text-muted text-sm md:text-base leading-relaxed border-l-2 pl-4 mb-2" style={{ borderColor: `${proj.color}40` }}>
                      {proj.contribution}
                    </p>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-xs font-bold tracking-widest px-3 py-1.5 border rounded-sm transition-colors hover:bg-white/5"
                        style={{ color: proj.color, borderColor: `${proj.color}40` }}
                      >
                        <ExternalLink size={12} />
                        LIVE DEMO
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SysActuate;
