import React, { useState } from 'react';
import Modal from '../Modal';

const SysCompute = () => {
  const [activeModal, setActiveModal] = useState(null);

  const skills = [
    { label: "C/C++", color: "text-accent" },
    { label: "MATLAB", color: "text-white" },
    { label: "KiCAD", color: "text-accent" },
    { label: "LTSPICE", color: "text-white" },
    { label: "Control Systems", color: "text-accent" },
    { label: "Sensor Fusion", color: "text-gray-400" },
    { label: "Embedded Systems Integration", color: "text-accent" },
  ];

  const cvContent = (
    <div className="flex flex-col h-full font-mono text-gray-300">
        <div className="mb-6 pb-4 border-b border-border">
            <span className="text-xs text-gray-500 mb-1 block">[ ARCHIVE // CURRICULUM_VITAE ]</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">YASHWANTH</h1>
            <p className="text-accent tracking-widest mt-1">Electronics & Controls Engineer</p>
        </div>
        <div className="flex-grow bg-[#0a0a0a] border border-border p-6 md:p-10 relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
            <div className="max-w-4xl mx-auto space-y-10">
                <div>
                   <h3 className="text-accent font-bold mb-4 tracking-widest text-lg">/* SUMMARY */</h3>
                   <p className="text-base border-l-2 border-border pl-6 text-gray-300 leading-relaxed">
                     Passionate Electronics and Controls Engineer specializing in PCB design, embedded systems, and complex control algorithms for robotics and hardware-in-the-loop applications.
                   </p>
                </div>
                <div>
                   <h3 className="text-accent font-bold mb-4 tracking-widest text-lg">/* EXPERIENCE */</h3>
                   <div className="border-l-2 border-border pl-6 space-y-4 text-base">
                     <div className="bg-white/5 p-4 border border-white/10 hover:border-accent/50 transition-colors">
                       <div className="text-white font-bold text-lg">Electronics & Control Systems Researcher</div>
                       <div className="text-accent mt-1 tracking-widest">TEAM ROBOMANIPAL <span className="text-gray-500 ml-2">| Sep 2024 - CURR</span></div>
                       <div className="text-sm text-gray-400 mt-2">Udupi, Karnataka, India</div>
                     </div>
                   </div>
                </div>
                <div>
                   <h3 className="text-accent font-bold mb-4 tracking-widest text-lg">/* EDUCATION */</h3>
                   <div className="border-l-2 border-border pl-6 space-y-4 text-base">
                     <div className="bg-white/5 p-4 border border-white/10 hover:border-accent/50 transition-colors relative">
                       <div className="absolute hidden sm:block top-4 right-4 bg-accent/10 border border-accent/30 text-accent px-3 py-1 text-sm font-bold tracking-widest shadow-[inset_0_0_8px_rgba(255,107,0,0.2)]">
                         CGPA: 9.22
                       </div>
                       <div className="text-white font-bold text-lg">Manipal Institute of Technology (MAHE)</div>
                       <div className="text-accent mt-1 tracking-widest flex items-center flex-wrap gap-2">
                         UNDERGRADUATE <span className="text-gray-500">| 2024 - 2028</span>
                         <span className="sm:hidden text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs ml-2 mt-1">CGPA: 9.22</span>
                       </div>
                     </div>
                     <div className="bg-white/5 p-4 border border-white/10 hover:border-accent/50 transition-colors">
                       <div className="text-white font-bold text-lg">Bhasyam Junior College, Guntur</div>
                       <div className="text-accent mt-1 tracking-widest">PRE-UNIVERSITY EDUCATION <span className="text-gray-500 ml-2">| Pre - 2024</span></div>
                     </div>
                   </div>
                </div>
                <div>
                   <h3 className="text-accent font-bold mb-4 tracking-widest text-lg">/* CORE EXPERTISE */</h3>
                   <div className="border-l-2 border-border pl-6 space-y-4 text-base">
                     <ul className="list-disc list-inside text-gray-300 leading-relaxed marker:text-accent space-y-2">
                       <li>Real-time Embedded Firmware Development (C/C++)</li>
                       <li>Hardware Prototyping & PCB Layout Design (KiCAD, Altium)</li>
                       <li>Control Theory & Algorithm Design (MATLAB, Simulink)</li>
                       <li>Sensor Fusion Integration (IMU, LIDAR, GPS, Environmentals)</li>
                     </ul>
                   </div>
                </div>
                <div className="pt-8">
                   <button className="border border-accent text-accent px-6 py-4 text-base hover:bg-accent hover:text-black transition-colors w-full flex justify-center gap-4 items-center font-bold tracking-widest">
                     <span>FETCH PDF_RECORD</span>
                     <span>[⬇]</span>
                   </button>
                   <p className="text-xs text-gray-600 text-center mt-3 tracking-widest uppercase">link to raw .pdf requires backend hookup</p>
                </div>
            </div>
        </div>
    </div>
  );

  const achievementsContent = (
    <div className="flex flex-col h-full font-mono text-gray-300">
        <div className="mb-6 pb-4 border-b border-border">
            <span className="text-xs text-gray-500 mb-1 block">[ ARCHIVE // ACHIEVEMENTS_LOG ]</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">COMPETITIVE RECORDS</h1>
        </div>
        
        <div className="space-y-8 pb-4 max-w-4xl mx-auto w-full">
            <div className="border-l-2 border-accent pl-6 relative p-4 hover:bg-white/5 transition-colors">
                <div className="absolute -left-[5px] top-6 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(255,107,0,0.8)]"></div>
                <span className="text-xs text-accent block mb-2 tracking-widest">/* COMPETITION_RECORD: 01 */</span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">eYIC</h3>
                <p className="text-base text-gray-300 mt-3 leading-relaxed">
                    E-Yantra Innovation Challenge. Developed a comprehensive hardware product addressing a real-world problem statement, successfully advancing through multiple elimination stages.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <div className="inline-block bg-accent text-black text-sm font-bold px-4 py-2 uppercase tracking-widest shadow-[0_0_15px_rgba(255,107,0,0.4)]">
                        STATUS: REGIONAL FINALISTS
                    </div>
                </div>
            </div>

            <div className="border-l-2 border-accent pl-6 relative p-4 hover:bg-white/5 transition-colors">
                <div className="absolute -left-[5px] top-6 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(255,107,0,0.8)]"></div>
                <span className="text-xs text-accent block mb-2 tracking-widest">/* COMPETITION_RECORD: 02 */</span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">VISISONICS Hackathon</h3>
                <p className="text-base text-gray-300 mt-3 leading-relaxed">
                    Developed a Speech Intent & Emotion Recognition pipeline using Wav2vec2. Fine-tuned the model on the CREMA-D database, achieving an impressive 95% intent extraction accuracy and 88% emotion recognition accuracy.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <div className="inline-block bg-accent text-black text-sm font-bold px-4 py-2 uppercase tracking-widest shadow-[0_0_15px_rgba(255,107,0,0.4)]">
                        AWARD: 3rd PLACE TRACK WINNER
                    </div>
                </div>
            </div>

            <div className="border-l-2 border-accent pl-6 relative p-4 hover:bg-white/5 transition-colors">
                <div className="absolute -left-[5px] top-6 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(255,107,0,0.8)]"></div>
                <span className="text-xs text-accent block mb-2 tracking-widest">/* COMPETITION_RECORD: 03 */</span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">TECHNOXIAN 9.0</h3>
                <p className="text-base text-gray-300 mt-3 leading-relaxed">
                    Competed across multiple international robotics categories including Innovation Contest, Line Follower, Robo Hockey, and Maze Solver. Engineered custom autonomous navigation logic and rugged hardware integrations under strict tournament conditions.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <div className="inline-block bg-accent text-black text-sm font-bold px-4 py-2 uppercase tracking-widest shadow-[0_0_15px_rgba(255,107,0,0.4)]">
                        AWARD: 4TH PLACE (MAZE SOLVER)
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col justify-between">

      {/* Top Half: RECORDS & ARCHIVES TABS */}
      <div className="mb-8">
        <h2 className="text-sm text-gray-500 mb-4">[ SYS_ARCHIVE // DOCUMENTS ]</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setActiveModal('cv')}
            className="flex-1 border border-border py-4 text-center text-gray-300 hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(255,107,0,0.1)] transition-all bg-black/40 hover:bg-accent/5"
          >
            <span className="font-bold tracking-widest text-sm block">VIEW_CV()</span>
          </button>
          <button 
            onClick={() => setActiveModal('achievements')}
            className="flex-1 border border-border py-4 text-center text-gray-300 hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(255,107,0,0.1)] transition-all bg-black/40 hover:bg-accent/5"
          >
            <span className="font-bold tracking-widest text-sm block">ACHIEVEMENTS()</span>
          </button>
        </div>
      </div>
      
      {/* Bottom Half: SKILLS */}
      <div className="flex-grow">
        <h2 className="text-sm text-gray-500 mb-4">[ SYS_COMPUTE // SKILLS ]</h2>
        <div className="text-xs lg:text-sm space-y-3 flex flex-col">
          {skills.map((skill, i) => (
            <div key={i} className="flex justify-between items-center border-b border-border hover:border-accent/50 border-dashed pb-1.5 transition-colors">
              <span className={`tracking-wider truncate ${skill.color} font-bold`}>{skill.label}</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 bg-border rounded-full"></span>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)}
        className="max-w-6xl h-[95vh] rounded-none"
      >
        {activeModal === 'cv' && cvContent}
        {activeModal === 'achievements' && achievementsContent}
      </Modal>
    </div>
  );
};

export default SysCompute;
