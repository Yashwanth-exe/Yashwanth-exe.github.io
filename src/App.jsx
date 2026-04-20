import React from 'react';
import { motion } from 'framer-motion';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import InteractivePCB from './components/InteractivePCB';

import SysId from './components/modules/SysId';
import Telemetry from './components/modules/Telemetry';
import SysAbout from './components/modules/SysAbout';
import SysSense from './components/modules/SysSense';
import SysActuate from './components/modules/SysActuate';
import SysCompute from './components/modules/SysCompute';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

function App() {
  return (
    <div className="w-full relative min-h-screen">

      {/* Navigation */}
      <NavBar />

      {/* Immersive Background Canvas */}
      <InteractivePCB />

      {/* Vertical Stack Content */}
      <div className="w-full flex flex-col items-center py-32 px-4 relative z-10">

        {/* Module 1: Hero Block & Contact */}
        <motion.div
          id="hero"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-panel flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4"
        >
          <div className="flex-1 w-full text-left">
            <SysId />
          </div>
          <div className="w-full md:w-auto md:min-w-[300px] flex md:justify-end">
            <Telemetry />
          </div>
        </motion.div>

        <SectionDivider />

        {/* Module 2: Core Directive (About) */}
        <motion.div
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-panel mt-16"
        >
          <SysAbout />
        </motion.div>

        <SectionDivider />

        {/* Module 3: Trajectory (Experience & Education) */}
        <motion.div
          id="trajectory"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="glass-panel mt-16"
        >
          <SysSense />
        </motion.div>

        <SectionDivider />

        {/* Module 4: Project Archives */}
        <motion.div
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="glass-panel mt-16"
        >
          <SysActuate />
        </motion.div>

        <SectionDivider />

        {/* Module 5: Hardware/Firmware Skills & Resume */}
        <motion.div
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel mt-16"
        >
          <SysCompute />
        </motion.div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
