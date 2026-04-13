import React, { useState, useEffect } from 'react';
import Modal from '../Modal';

const SysId = () => {
  const [text, setText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fullText = "> Electronics and Controls Engineer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <div 
        className="h-full flex flex-col justify-center group cursor-pointer relative"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Subtle hover gradient background */}
        <div className="absolute -inset-6 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-sm"></div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fast-blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .terminal-cursor {
            animation: fast-blink 1.2s infinite;
          }
        `}} />
        
        <h2 className="text-sm text-gray-500 mb-2 transition-colors group-hover:text-accent z-10">[ SYS_ID // PROFILE_ACCESS ]</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest mb-4 z-10 transition-transform group-hover:translate-x-1 duration-300">YASHWANTH</h1>
        <p className="text-accent text-sm md:text-base h-6 z-10">
          {text}<span className="inline-block w-2 h-4 bg-accent ml-1 align-middle terminal-cursor"></span>
        </p>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="max-w-4xl max-h-[85vh]">
        <div className="flex flex-col h-full font-mono text-gray-300">
           
           <div className="mb-8 pb-4 border-b border-border">
              <span className="text-xs text-gray-500 mb-1 block">[ ROOT_ACCESS // BIOMETRIC_PROFILE ]</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">YASHWANTH</h1>
              <p className="text-accent tracking-widest mt-1">Electronics & Controls Engineer</p>
           </div>
           
           <div className="space-y-10">
              
              <div className="border-l-4 border-accent pl-6 bg-accent/5 py-4 pr-4">
                 <h3 className="text-accent font-bold mb-3 tracking-widest text-lg">/* CORE_DIRECTIVE */</h3>
                 <p className="text-gray-300 text-base leading-relaxed">
                   I am a Mechatronics and Controls Engineer specializing in precision PCB architecture, robotic actuation systems, and comprehensive hardware-software integration. From deriving kinematic EKF localization models to provisioning localized firmware for hardware-in-the-loop applications, I thrive on bridging the gap between raw silicon and physical motion.
                 </p>
              </div>

              <div>
                 <h3 className="text-accent font-bold mb-4 tracking-widest text-lg">/* TECHNICAL_INTERESTS */</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="border border-border p-5 hover:border-accent transition-colors bg-black/40 hover:bg-black group">
                       <span className="text-white font-bold block mb-2 tracking-widest group-hover:text-accent">Embedded Systems</span>
                       <span className="text-gray-500">Resource constrained firmware, RTOS, MCU telemetry configuration</span>
                    </div>
                    <div className="border border-border p-5 hover:border-accent transition-colors bg-black/40 hover:bg-black group">
                       <span className="text-white font-bold block mb-2 tracking-widest group-hover:text-accent">Control Theory</span>
                       <span className="text-gray-500">EKF filtering logic, fuzzy logic controllers, autonomous kinematic systems</span>
                    </div>
                    <div className="border border-border p-5 hover:border-accent transition-colors bg-black/40 hover:bg-black group">
                       <span className="text-white font-bold block mb-2 tracking-widest group-hover:text-accent">Signal Architecture</span>
                       <span className="text-gray-500">Signal isolation, hardware I2C layer debugging, high-speed routing</span>
                    </div>
                    <div className="border border-border p-5 hover:border-accent transition-colors bg-black/40 hover:bg-black group">
                       <span className="text-white font-bold block mb-2 tracking-widest group-hover:text-accent">Robotic Perception</span>
                       <span className="text-gray-500">Sensor fusion pipelines mapping LIDAR, generic IMU architectures, and Encoders</span>
                    </div>
                 </div>
              </div>

              <div>
                 <h3 className="text-accent font-bold mb-4 tracking-widest text-lg">/* PERSONAL_LOG */</h3>
                 <div className="border border-border p-6 bg-[#0a0a0a] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                     <p className="text-gray-400 text-base leading-relaxed">
                        Beyond the workbench, my interests span across exploring advancements in commercial hardware interfaces, tackling demanding technical hackathons, and studying the interplay between machine learning models (like Wav2vec2 perception logic) and physical engineering. I operate on the philosophy of full-stack physical development — if it computes or actuates, I am driven to learn how to build it from the ground up.
                     </p>
                 </div>
              </div>

           </div>
        </div>
      </Modal>
    </>
  );
};

export default SysId;
