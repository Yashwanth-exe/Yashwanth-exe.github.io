import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const SysSense = () => {
  const experiences = [
    { 
      year: "SEP 2024 - CURR", 
      role: "Electronics & Control Systems Researcher", 
      org: "TEAM ROBOMANIPAL",
      loc: "Udupi, Karnataka, India",
    }
  ];

  const education = [
    {
      year: "2024 - 2028",
      role: "Engineering Undergraduate",
      org: "Manipal Institute of Technology (MAHE)",
      gpa: "CGPA: 9.22"
    },
    {
      year: "PRE - 2024",
      role: "Pre-University Education",
      org: "Bhasyam Junior College, Guntur",
      gpa: null
    }
  ];

  const achievements = [
    {
      title: "eYIC",
      subtitle: "E-Yantra Innovation Challenge",
      desc: "Developed a comprehensive hardware product addressing a real-world problem statement, successfully advancing through multiple elimination stages.",
      status: "REGIONAL FINALISTS"
    },
    {
      title: "VISISONICS Hackathon",
      subtitle: "Speech Intent & Emotion Recognition",
      desc: "Developed a Speech Intent & Emotion Recognition pipeline using Wav2vec2. Fine-tuned the model on the CREMA-D database, achieving an impressive 95% intent extraction accuracy and 88% emotion recognition.",
      status: "3rd PLACE TRACK WINNER"
    },
    {
      title: "TECHNOXIAN 9.0",
      subtitle: "International Robotics Competition",
      desc: "Competed across multiple international robotics categories including Innovation Contest, Line Follower, Robo Hockey, and Maze Solver. Engineered custom autonomous navigation logic and rugged hardware integrations.",
      status: "4TH PLACE (MAZE SOLVER)"
    }
  ];

  const timelineItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col h-full font-mono text-neutral-300">
      <h2 className="section-header">[ SYS_SENSE // TRAJECTORY_LOG ]</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Experience and Education */}
        <div className="flex flex-col space-y-12">
          
          {/* Experience Section */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-widest text-sm uppercase font-display">/* Professional_Experience */</h3>
            <div className="border-l-2 border-neutral-700 pl-6 space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={timelineItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 border-2 border-accent bg-bgd rounded-full"></div>
                  <span className="text-xs text-accent/70 block mb-1 tracking-widest">{exp.year}</span>
                  <h4 className="text-lg font-bold text-white uppercase font-display">{exp.role}</h4>
                  <p className="text-neutral-400 mt-1 tracking-widest text-sm">{exp.org}</p>
                  <p className="text-neutral-500 text-xs mt-1">{exp.loc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-widest text-sm uppercase font-display">/* Academic_Record */</h3>
            <div className="border-l-2 border-neutral-700 pl-6 space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  variants={timelineItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 border-2 border-accent-cyan bg-bgd rounded-full"></div>
                  <span className="text-xs text-accent-cyan/70 block mb-1 tracking-widest">{edu.year}</span>
                  <h4 className="text-lg font-bold text-white uppercase font-display">{edu.org}</h4>
                  <p className="text-neutral-400 mt-1 tracking-widest text-sm block">{edu.role}</p>
                  {edu.gpa && (
                    <span className="inline-block mt-3 text-accent bg-accent/10 border border-accent/20 px-2 py-1 text-xs font-bold tracking-widest">
                      {edu.gpa}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Achievements */}
        <div>
          <h3 className="text-white font-bold mb-6 tracking-widest text-sm uppercase font-display">/* Competitive_Records */</h3>
          <div className="flex flex-col space-y-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="border border-neutral-800 p-6 bg-black/20 rounded-sm hover:border-neutral-600 transition-colors duration-300 cursor-default"
              >
                <h4 className="text-lg font-bold text-white uppercase font-display">{ach.title}</h4>
                <p className="text-neutral-500 text-xs tracking-widest uppercase mt-1 mb-4">{ach.subtitle}</p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{ach.desc}</p>
                <div className="inline-flex items-center gap-2 text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 text-xs font-bold tracking-widest uppercase">
                  <Trophy size={12} className="flex-shrink-0" />
                  {ach.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SysSense;
