import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, FileText } from 'lucide-react';
import ScrambleText from '../ScrambleText';

const SysActuate = () => {
  const projects = [
    { 
      title: "BIDIRECTIONAL SIGNAL ISOLATION", 
      subtitle: "Novel Optocoupler Circuit for I2C",
      stack: ["PCB Design", "LTSpice", "Arduino"], 
      description: "A novel circuit architecture enabling bidirectional electrical isolation of the I2C SDA line over a single channel using IR LEDs and a 6N137 optocoupler, eliminating the need for signal splitters, combiners, and dual optocoupler channels. The system operates across 1Hz–10kHz. A provisional patent has been filed through Astraea Research, MUTBI, Manipal.",
      contribution: "Sole inventor and designer for the novel electrical architecture. Designed, built, and validated the full hardware implementation.",
      patent: "202541060760",
      color: "#00d4ff",
    },
    { 
      title: "SLIP ESTIMATION", 
      subtitle: "Terrain-Adaptive Localization for Differential Drive Robots",
      stack: ["Octave/MATLAB", "PCB Design", "Controls"], 
      description: "This project is a custom pipeline for real time wheel slip detection and slip compensated localization on a differential drive robot. The system uses a fuzzy logic classifier to identify the terrain types [Smooth to Rough] from encoder and IMU [BNO085] data. The output the fuzzy logic classifier is fed as the adaptive parameters to a Modified Kalman Filter for localization. Depending on the Roughness, Inclination, Change in acceleration the fuzzy rules are set on which the amount of trust for encoder or IMU is altered. A provisional patent has been filed through Astraea Research, MUTBI, Manipal.",
      contribution: "Built the fuzzy logic terrain classification module from scratch, derived the initial EKF equations, derived the system state equations for familiarity with it. Made the initial testbench differential drive robot. Wrote the firmware code to get data from encoders and IMU on a teensy 4.1, wrote the code for the fuzzy system and tweaked the membership functions to get the terrain score in accordance to the actual terrain.",
      patent: "202641011673",
      color: "#a855f7",
    },
    { 
      title: "CHEST COMPRESSION BELT", 
      subtitle: "Respiratory Gating System for Lung Cancer Therapy",
      stack: ["PCB Design", "Octave/MATLAB", "Python"], 
      description: "A joint project with KMC Hospital and faculty, aimed at developing a wearable chest belt that tracks patient breathing patterns during lung cancer radiotherapy. The belt collects real-time respiratory data and uses it to actuate an inflation/deflation mechanism that compensates for tumour motion caused by breathing — improving targeting precision during treatment. The ML layer for predictive pattern modeling is pending acquisition of stretch sensors and higher-resolution data.",
      contribution: "Handled end-to-end sensor integration, embedded firmware development, and the closed-loop inflation/deflation control logic driving the actuation mechanism.",
      patent: null,
      color: "#ff6b00",
    },
    { 
      title: "FARMBOT V1", 
      subtitle: "Agricultural Disease Detection Robot",
      stack: ["PCB Design", "Machine Learning", "CAD", "Controls"], 
      description: "An autonomous ground robot developed to assist in early plant disease detection and soil health monitoring. The system integrates a camera running a leaf segmentation model followed by a plant disease classification model, alongside a 7-in-1 NPK soil sensor to capture subsurface soil parameters. The prototype was field-tested at a nursery in Delhi, where NPK data was successfully logged and disease detection was validated on tomato and bell pepper plants.",
      contribution: "Designed and fabricated the electronics and PCB, wrote the embedded firmware, and handled full integration of the Raspberry Pi with the sensor stack and camera pipeline.",
      patent: null,
      color: "#22c55e",
    },
    { 
      title: "VISISONICS // SPEECH AI", 
      subtitle: "Speech Intent & Emotion Recognition",
      stack: ["Machine Learning", "Transformers", "LLMs", "Fine Tuning"], 
      description: "The problem statement for this was to get emotion and intent + object data from speech. We build a model based on wav2vec2 which was then trained on CREMA-D dataset and on speech data collected from juniors and ourselves to finetune the emotion detection parameters. Got 95% accuracy for intent and object detection and 88% accuracy for emotion detection. Placed third in our track.",
      contribution: "Trained the wav2vec2 models and wrote the model inference pipeline. Trained it on the cloud using 2x 5090s on runpod.",
      patent: null,
      color: "#f59e0b",
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
            className="border border-neutral-800 bg-black/20 rounded-sm hover:border-neutral-600 transition-all duration-300 overflow-hidden group"
          >
            {/* Color accent bar at top */}
            <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${proj.color}, transparent)` }} />

            <div className="p-6 md:p-8">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-white font-bold tracking-wider text-xl md:text-2xl font-display flex items-center gap-3">
                    <span className="inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ background: proj.color, boxShadow: `0 0 8px ${proj.color}40` }}></span>
                    {proj.title}
                  </h3>
                  <p className="text-neutral-400 tracking-wide text-sm md:text-base mt-1">{proj.subtitle}</p>
                </div>
                {proj.patent && (
                  <div className="flex items-center gap-2 text-yellow-500 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1.5 text-xs font-bold tracking-widest flex-shrink-0">
                    <FileText size={12} />
                    PATENT: {proj.patent}
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
                <span className="text-xs text-neutral-500 block mb-2 tracking-widest uppercase"><ScrambleText text="/* Synopsis */" /></span>
                <AnimatePresence initial={false}>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedIndex === idx ? 'auto' : '4.5rem' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden relative"
                  >
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                      {proj.description}
                    </p>
                    {expandedIndex !== idx && (
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Expand/Collapse toggle */}
              <button
                onClick={() => toggleExpand(idx)}
                className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-accent transition-colors tracking-widest mb-4"
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
                    <span className="text-xs text-neutral-500 block mb-2 tracking-widest uppercase"><ScrambleText text="/* Role_&_Execution */" /></span>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed border-l-2 pl-4 mb-2" style={{ borderColor: `${proj.color}40` }}>
                      {proj.contribution}
                    </p>
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
