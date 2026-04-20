import React from 'react';

const SysAbout = () => {
  return (
    <div className="flex flex-col h-full font-mono text-neutral-300">
      <h2 className="section-header">[ SYS_ABOUT // CORE_DIRECTIVE ]</h2>
      
      <div className="space-y-12">
        <div className="border-l-2 border-accent/30 pl-6 py-2">
          <p className="text-neutral-400 text-base leading-relaxed">
            I am a Mechatronics and Controls Engineer specializing in precision PCB architecture, robotic actuation systems, and comprehensive hardware-software integration. From deriving kinematic EKF localization models to provisioning localized firmware for hardware-in-the-loop applications, I thrive on bridging the gap between raw silicon and physical motion.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 tracking-widest text-sm uppercase font-display">/* Personal_Log */</h3>
          <div className="border border-neutral-800 p-6 bg-black/20 rounded-sm hover:border-neutral-700 transition-colors duration-300">
            <p className="text-neutral-400 text-base leading-relaxed">
              Beyond the workbench, my interests span across exploring advancements in commercial hardware interfaces, tackling demanding technical hackathons, and studying the interplay between machine learning models (like Wav2vec2 perception logic) and physical engineering. I operate on the philosophy of full-stack physical development — if it computes or actuates, I am driven to learn how to build it from the ground up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SysAbout;
