import React, { useState } from 'react';
import Modal from '../Modal';

const SysActuate = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "CHEST COMPRESSION BELT", 
      subtitle: "Respiratory Gating System for Lung Cancer Therapy",
      stack: "[ PCB Designing + Octave/MATLAB + Python ]", 
      shortDesc: "Wearable respiratory gating system for lung cancer therapy. Tracks breathing to actuate inflation and compensate for tumor motion.",
      description: "A joint project with KMC Hospital and faculty, aimed at developing a wearable chest belt that tracks patient breathing patterns during lung cancer radiotherapy. The belt collects real-time respiratory data and uses it to actuate an inflation/deflation mechanism that compensates for tumour motion caused by breathing — improving targeting precision during treatment. The ML layer for predictive pattern modeling is pending acquisition of stretch sensors and higher-resolution data.",
      contribution: "Handled end-to-end sensor integration, embedded firmware development, and the closed-loop inflation/deflation control logic driving the actuation mechanism.",
      patent: null
    },
    { 
      title: "FARMBOT V1", 
      subtitle: "Agricultural Disease Detection Robot",
      stack: "[ PCB Designing + Machine Learning + CAD Design + Control System ]", 
      shortDesc: "Autonomous agricultural robot with leaf segmentation modeling for disease detection and a 7-in-1 NPK soil sensor array.",
      description: "An autonomous ground robot developed to assist in early plant disease detection and soil health monitoring. The system integrates a camera running a leaf segmentation model followed by a plant disease classification model, alongside a 7-in-1 NPK soil sensor to capture subsurface soil parameters. The prototype was field-tested at a nursery in Delhi, where NPK data was successfully logged and disease detection was validated on tomato and bell pepper plants.",
      contribution: "Designed and fabricated the electronics and PCB, wrote the embedded firmware, and handled full integration of the Raspberry Pi with the sensor stack and camera pipeline.",
      patent: null
    },
    { 
      title: "BIDIRECTIONAL SIGNAL ISOLATION", 
      subtitle: "Novel Optocoupler Circuit for I2C",
      stack: "[ PCB Designing + LtSPICE + Arduino ]", 
      shortDesc: "Patented novel circuit architecture enabling bidirectional electrical isolation of the I2C SDA line over a single channel.",
      description: "A novel circuit architecture enabling bidirectional electrical isolation of the I2C SDA line over a single channel using IR LEDs and a 6N137 optocoupler, eliminating the need for signal splitters, combiners, and dual optocoupler channels. The system operates across 1Hz–10kHz. A provisional patent has been filed through Astraea Research, MUTBI, Manipal.",
      contribution: "Sole inventor and designer for the novel electrical architecture. Designed, built, and validated the full hardware implementation.",
      patent: "202541060760"
    },
    { 
      title: "SLIP ESTIMATION", 
      subtitle: "Terrain-Adaptive Localization for Differential Drive Robots",
      stack: "[ Octave/MATLAB + PCB Designing + Control System ]", 
      shortDesc: "Terrain-adaptive localization pipeline for differential drive robots. Uses a fuzzy logic classifier to adapt EKF parameters.",
      description: "This project is a custom pipeline for real time wheel slip detection and slip compensated localization on a differential drive robot. The system uses a fuzzy logic classifier to identify the terrain types [Smooth to Rough] from encoder and IMU [BNO085] data. The output the fuzzy logic classifier is fed as the adaptive parameters to a Modified Kalman Filter for localization. Depending on the Roughness, Inclination, Change in acceleration the fuzzy rules are set on which the amount of trust for encoder or IMU is altered. A provisional patent has been filed through Astraea Research, MUTBI, Manipal.",
      contribution: "Built the fuzzy logic terrain classification module from scratch, derived the initial EKF equations, derived the system state equations for familiarity with it. Made the initial testbench differential drive robot. Wrote the firmware code to get data from encoders and IMU on a teensy 4.1, wrote the code for the fuzzy system and tweaked the membership functions to get the terrain score in accordance to the actual terrain. The initial EKF equations were written and tested on the testbench, errors were observed and we are actively correcting premade assumptions of the EKF system model and actively testing the model.",
      patent: "202641011673"
    },
    { 
      title: "VISISONICS // SPEECH AI", 
      subtitle: "Speech Intent & Emotion Recognition",
      stack: "[ Machine Learning + Transformers + LLMs + Fine Tuning ]", 
      shortDesc: "Wav2vec2-based intent and emotion recognition model fine-tuned on CREMA-D database, achieving 95% intent accuracy.",
      description: "The problem statement for this was to get emotion and intent + object data from speech. We build a model based on wav2vec2 which was then trained on CREMA-D dataset and on speech data collected from juniors and ourselves to finetune the emotion detection parameters. Got 95% accuracy for intent and object detection and 88% accuracy for emotion detection. Placed third in our track.",
      contribution: "Trained the wav2vec2 models and wrote the model inference pipeline. Trained it on the cloud using 2x 5090s on runpod.",
      patent: null
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-sm text-gray-500 mb-6">[ SYS_ACTUATE // PROJECTS ]</h2>
      <div className="flex-grow grid grid-cols-1 xl:grid-cols-2 gap-4">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedProject(proj)}
            className="border border-border p-5 hover:border-accent transition-colors group cursor-pointer relative bg-black/40 overflow-hidden"
          >
             <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             <h3 className="text-white font-bold tracking-widest group-hover:text-accent transition-colors relative z-10">{proj.title}</h3>
             <p className="text-gray-400 text-sm mt-3 mb-4 relative z-10">{proj.shortDesc}</p>
             <p className="text-accent text-xs font-bold font-mono tracking-widest relative z-10">{proj.stack}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="flex flex-col h-full font-mono text-gray-300">
            {/* Header */}
            <div className="mb-4 pb-4 border-b border-border">
                <span className="text-xs text-gray-500 mb-1 block">[ INQUIRY_LOG // {selectedProject.title} ]</span>
                <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">{selectedProject.title}</h1>
                <p className="text-accent tracking-wide mt-1">{selectedProject.subtitle}</p>
            </div>

            {/* Core Tech Stack */}
            <div className="mb-6">
                <span className="text-xs text-gray-500 block mb-2">/* TECHNOLOGY_STACK */</span>
                <p className="text-accent font-bold text-sm tracking-widest bg-accent/10 border border-accent/20 p-3 inline-block">
                    {selectedProject.stack}
                </p>
            </div>

            {/* Description */}
            <div className="mb-6">
                <span className="text-xs text-gray-500 block mb-2">/* PROJECT_SYNOPSIS */</span>
                <p className="text-sm leading-relaxed text-gray-300">
                    {selectedProject.description}
                </p>
            </div>

            {/* Contribution */}
            <div className="mb-6">
                <span className="text-xs text-gray-500 block mb-2">/* ROLE_&_CONTRIBUTION */</span>
                <p className="text-sm leading-relaxed text-gray-400 border-l-2 border-border pl-4 ml-1">
                    {selectedProject.contribution}
                </p>
            </div>

            {/* Optional Patent Info */}
            {selectedProject.patent && (
                <div className="mt-2">
                    <span className="text-xs text-gray-500 block mb-2">/* LEGAL_LOG // PATENT_APPLICATION */</span>
                    <p className="text-sm text-yellow-500 border border-yellow-500/30 bg-yellow-500/10 p-3 inline-block tracking-widest font-bold">
                        ID: {selectedProject.patent}
                    </p>
                </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SysActuate;
