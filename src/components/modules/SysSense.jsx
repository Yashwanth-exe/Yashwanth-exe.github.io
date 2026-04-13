import React from 'react';

const SysSense = () => {
  const timeline = [
    { year: "SEP 2024 - CURR", role: "Electronics & Controls Researcher", org: "Team RoboManipal" },
    { year: "2024 - 2028", role: "Engineering Undergraduate", org: "Manipal Institute of Technology" },
    { year: "PRE - 2024", role: "Junior College", org: "Bhasyam Junior College, Guntur" }
  ];

  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-sm text-gray-500 mb-6">[ SYS_SENSE // EXP_LOG ]</h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between h-full">
        {timeline.map((item, i) => (
          <div key={i} className="flex flex-col relative pl-5 border-l border-border md:w-1/3 hover:border-accent transition-colors group">
            {/* Blip indicator */}
            <div className="absolute left-[-4px] top-1.5 w-1.5 h-1.5 bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(255,107,0,0.8)] rounded-full transition-all duration-300"></div>
            
            <span className="text-xs text-gray-500 mb-2 font-mono group-hover:text-gray-400 transition-colors uppercase">{item.year}</span>
            <span className="text-white font-bold tracking-wide group-hover:text-accent transition-colors uppercase text-sm">{item.role}</span>
            <span className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors uppercase">{item.org}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SysSense;
