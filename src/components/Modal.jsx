import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ModalContent = ({ isOpen, onClose, className = "max-w-4xl", children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md cursor-pointer"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className={`pointer-events-auto bg-[#0a0a0a] border border-accent w-full max-h-[96vh] overflow-y-auto relative p-6 md:p-8 custom-scrollbar shadow-[0_0_50px_rgba(255,107,0,0.2)] ${className}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-accent transition-colors bg-black border border-border p-1 hover:border-accent z-[120]"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              {children}
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

const Modal = (props) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Render via portal to break out of the bento box backdrop-filter context bounds
  return createPortal(<ModalContent {...props} />, document.body);
};

export default Modal;
