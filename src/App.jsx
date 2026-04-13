import React from 'react';
import { motion } from 'framer-motion';

import SysId from './components/modules/SysId';
import Telemetry from './components/modules/Telemetry';
import SysActuate from './components/modules/SysActuate';
import SysCompute from './components/modules/SysCompute';
import SysSense from './components/modules/SysSense';
import InteractivePCB from './components/InteractivePCB';

function App() {
  // Animation config
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 relative overflow-hidden">
      
      <InteractivePCB />

      {/* Main Grid Container */}
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        
        {/* Module 1: Top Left - SYS_ID */}
        <motion.div variants={itemVariants} className="bento-panel col-span-1 min-h-[150px]">
          <SysId />
        </motion.div>

        {/* Module 2: Top Right - TELEMETRY */}
        <motion.div variants={itemVariants} className="bento-panel col-span-1 md:col-span-1 lg:col-span-2 min-h-[150px]">
          <Telemetry />
        </motion.div>

        {/* Module 4: Bottom Left - SYS_COMPUTE (spanning 2 rows on large screens) */}
        <motion.div variants={itemVariants} className="bento-panel col-span-1 lg:row-span-2 min-h-[300px]">
          <SysCompute />
        </motion.div>

        {/* Module 3: Middle - SYS_ACTUATE (spanning 2 rows on large screens) */}
        <motion.div variants={itemVariants} className="bento-panel col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 min-h-[300px]">
          <SysActuate />
        </motion.div>

        {/* Module 5: Bottom Right - SYS_SENSE */}
        <motion.div variants={itemVariants} className="bento-panel col-span-1 md:col-span-2 lg:col-span-3 min-h-[150px]">
          <SysSense />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default App;
