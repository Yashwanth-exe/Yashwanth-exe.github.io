import React, { useRef, useEffect } from 'react';

const InteractivePCB = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let mouse = { x: -1000, y: -1000 };
    let traces = [];
    let traceCount = 0;

    const generateSingleTrace = () => {
      // Spawn trace randomly anywhere across the full scrollable height
      let x = (Math.random() - 0.2) * (width * 1.4);
      let y = (Math.random() - 0.2) * (height * 1.4);
      
      const points = [{ x, y }];
      const segments = 2 + Math.floor(Math.random() * 5); 
      
      let currentAngle = (Math.floor(Math.random() * 8) * 45) * (Math.PI / 180);
      
      for (let j = 0; j < segments; j++) {
        const len = 40 + Math.random() * 150;
        x += Math.cos(currentAngle) * len;
        y += Math.sin(currentAngle) * len;
        points.push({ x, y });

        const turn = (Math.random() > 0.5 ? 45 : 90) * (Math.random() > 0.5 ? 1 : -1);
        currentAngle += turn * (Math.PI / 180);
      }
      
      // Extremely slow sub-pixel drifting drift velocity (alive feeling)
      const driftAngle = Math.random() * Math.PI * 2;
      const speed = 0.05 + Math.random() * 0.15;
      
      return { 
        points, 
        baseOpacity: 0.05 + Math.random() * 0.15,
        strokeWidth: Math.random() > 0.85 ? 2.5 : 1,
        dx: Math.cos(driftAngle) * speed,
        dy: Math.sin(driftAngle) * speed
      };
    };

    const initializeTraces = () => {
      traceCount = Math.floor((width * Math.max(height, window.innerHeight)) / 12000); 
      traces = [];
      for (let i = 0; i < traceCount; i++) {
        traces.push(generateSingleTrace());
      }
    };

    const handleResize = () => {
      width = document.body.scrollWidth || window.innerWidth;
      height = document.body.scrollHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initializeTraces();
    };

    handleResize();

    // Use ResizeObserver to detect when React expands the DOM
    const resizeObserver = new ResizeObserver(() => {
        handleResize();
    });
    resizeObserver.observe(document.body);

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

      let regenIndices = [];

      traces.forEach((trace, index) => {
        let isOffScreen = true;
        let minDistance = Infinity;

        // Update trace positions for drift and check bounds & mouse distance
        trace.points.forEach(p => {
           p.x += trace.dx;
           p.y += trace.dy;
           if (p.x > -200 && p.x < width + 200 && p.y > -200 && p.y < height + 200) {
              isOffScreen = false;
           }
        });

        if (isOffScreen) {
           regenIndices.push(index);
           return; 
        }

        for (let i = 0; i < trace.points.length - 1; i++) {
          const d = pointToLineDistance(
            mouse.x, mouse.y, 
            trace.points[i].x, trace.points[i].y, 
            trace.points[i+1].x, trace.points[i+1].y
          );
          if (d < minDistance) minDistance = d;
        }

        let opacity = trace.baseOpacity;
        let isGlowing = false;
        
        if (minDistance < 120) {
           const intensity = Math.pow(1 - (minDistance / 120), 1.5); 
           opacity = trace.baseOpacity + (intensity * 0.85);
           isGlowing = true;
        }

        // Draw trace line
        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (let i = 1; i < trace.points.length; i++) {
          ctx.lineTo(trace.points[i].x, trace.points[i].y);
        }
        
        if (isGlowing) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#ff6b00';
          ctx.strokeStyle = `rgba(255, 107, 0, ${opacity})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.strokeStyle = `rgba(255, 107, 0, ${opacity})`;
        }
        
        ctx.lineWidth = trace.strokeWidth;
        ctx.lineJoin = 'bevel';
        ctx.stroke();

        // Draw Vias
        const drawVia = (point) => {
           ctx.beginPath();
           ctx.arc(point.x, point.y, trace.strokeWidth * 2, 0, Math.PI * 2);
           ctx.fillStyle = `rgba(255, 107, 0, ${opacity})`;
           ctx.fill();
        };

        drawVia(trace.points[0]);
        drawVia(trace.points[trace.points.length - 1]);
        
        ctx.shadowBlur = 0;
      });

      // Regenerate offscreen traces
      regenIndices.forEach(idx => {
         traces[idx] = generateSingleTrace();
      });

      animationFrameId = window.requestAnimationFrame(render);
    }

    render();

    const handleMouseMove = (event) => {
      // Must account for window scroll when checking physical mouse mapping on absolute canvas!
      mouse.x = event.clientX + window.scrollX;
      mouse.y = event.clientY + window.scrollY;
    };

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
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
};

export default InteractivePCB;
