import React from 'react';
import ScrambleText from '../ScrambleText';

const SysAbout = () => {
  return (
    <div className="flex flex-col h-full font-mono text-primary">
      <h2 className="section-header"><ScrambleText text="[ SYS_ABOUT // CORE_DIRECTIVE ]" /></h2>

      <div className="space-y-12">
        <div className="border-l-2 border-accent/30 pl-6 py-2">
          <p className="text-muted text-base leading-relaxed">
            I am an Electronics and Communication Engineer specializing in precision PCB architecture, robotic actuation systems, and comprehensive hardware-software integration. From deriving kinematic EKF localization models to provisioning localized firmware for hardware-in-the-loop applications, I thrive on bridging the gap between raw silicon and physical motion.
          </p>
        </div>

        <div>
          <h3 className="text-heading font-bold mb-6 tracking-widest text-sm uppercase font-display"><ScrambleText text="/* Personal_Log */" /></h3>
          <div className="border border-card-border p-6 rounded-sm hover:border-hover-border transition-colors duration-300" style={{ background: 'var(--card-bg)' }}>
            <p className="text-muted text-base leading-relaxed">
              Beyond the workbench, my interests span across exploring advancements in commercial hardware interfaces, tackling demanding technical hackathons, and studying the interplay between machine learning models (like Wav2vec2 perception logic) and physical engineering. I operate on the philosophy of full-stack physical development — if it computes or actuates, I am driven to learn how to build it from the ground up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SysAbout;
