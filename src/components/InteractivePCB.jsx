import React, { useRef, useEffect } from 'react';

const InteractivePCB = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = { x: -1000, y: -1000 };
    // Maintain a consistent density across monitors. Decreased divisor massively increases overall route density.
    const traceCount = Math.floor((width * height) / 9000); 
    let traces = [];

    const generateTraces = () => {
      traces = [];
      for (let i = 0; i < traceCount; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        const points = [{ x, y }];
        const segments = 2 + Math.floor(Math.random() * 5); // 2 to 6 segments
        
        let currentAngle = (Math.floor(Math.random() * 8) * 45) * (Math.PI / 180);
        
        for (let j = 0; j < segments; j++) {
          const len = 40 + Math.random() * 150;
          x += Math.cos(currentAngle) * len;
          y += Math.sin(currentAngle) * len;
          points.push({ x, y });

          // Next segment usually turns 45 or 90 degrees to mimic real PCB vias/traces
          const turn = (Math.random() > 0.5 ? 45 : 90) * (Math.random() > 0.5 ? 1 : -1);
          currentAngle += turn * (Math.PI / 180);
        }
        
        traces.push({ 
          points, 
          baseOpacity: 0.05 + Math.random() * 0.15,
          strokeWidth: Math.random() > 0.85 ? 2.5 : 1 // Occasional power/ground thick traces
        });
      }
    };

    generateTraces();

    // Helper: Distance from a point to a line segment
    const pointToLineDistance = (px, py, x1, y1, x2, y2) => {
      const A = px - x1;
      const B = py - y1;
      const C = x2 - x1;
      const D = y2 - y1;

      const dot = A * C + B * D;
      const lenSq = C * C + D * D;
      let param = -1;
      if (lenSq !== 0) param = dot / lenSq;

      let xx, yy;

      if (param < 0) {
        xx = x1;
        yy = y1;
      } else if (param > 1) {
        xx = x2;
        yy = y2;
      } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
      }

      const dx = px - xx;
      const dy = py - yy;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      traces.forEach(trace => {
        let minDistance = Infinity;
        // Calculate shortest distance from mouse to any segment of this trace
        for (let i = 0; i < trace.points.length - 1; i++) {
          const d = pointToLineDistance(
            mouse.x, mouse.y, 
            trace.points[i].x, trace.points[i].y, 
            trace.points[i+1].x, trace.points[i+1].y
          );
          if (d < minDistance) minDistance = d;
        }

        // Active Signal logic - Glow if hovered closely
        let opacity = trace.baseOpacity;
        let isGlowing = false;
        
        // Glow radius of 120 pixels
        if (minDistance < 120) {
           const intensity = Math.pow(1 - (minDistance / 120), 1.5); 
           opacity = trace.baseOpacity + (intensity * 0.85); // Spike up to ~1.0 opacity
           isGlowing = true;
        }

        // Draw trace path
        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (let i = 1; i < trace.points.length; i++) {
          ctx.lineTo(trace.points[i].x, trace.points[i].y);
        }
        
        // Apply glow
        if (isGlowing) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#ff6b00';
          ctx.strokeStyle = `rgba(255, 107, 0, ${opacity})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.strokeStyle = `rgba(255, 107, 0, ${opacity})`;
        }
        
        ctx.lineWidth = trace.strokeWidth;
        ctx.lineJoin = 'bevel'; // Sharp technical turns
        ctx.stroke();

        // Draw Vias (pads) at start and end of trace
        const drawVia = (point) => {
           ctx.beginPath();
           ctx.arc(point.x, point.y, trace.strokeWidth * 2, 0, Math.PI * 2);
           ctx.fillStyle = `rgba(255, 107, 0, ${opacity})`;
           ctx.fill();
        };

        drawVia(trace.points[0]);
        drawVia(trace.points[trace.points.length - 1]);
        
        // Reset shadow for next iteration
        ctx.shadowBlur = 0;
      });

      animationFrameId = window.requestAnimationFrame(render);
    }

    render();

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      generateTraces(); // Regenerate density map on resize
    };

    // Keep mouse active when leaving window
    const handleMouseOut = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
};

export default InteractivePCB;
