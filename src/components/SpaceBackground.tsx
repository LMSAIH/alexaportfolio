import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        // Set canvas dimensions to full page
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Create stars
        const stars: Array<{
            x: number,
            y: number,
            radius: number,
            opacity: number,
            speed: number,
            hue: number,
            pulse: number
        }> = [];
        
        // More stars for full page
        const starCount = Math.min(250, Math.floor((canvas.width * canvas.height) / 8000));
        
        // Populate stars with different sizes and colors
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.5,
                speed: Math.random() * 0.02 + 0.001,
                hue: Math.floor(Math.random() * 60) + 200, // Blue to purple range
                pulse: Math.random() * 0.05 + 0.01
            });
        }
        
        // Nebula points
        const nebulaPoints: Array<{
            x: number,
            y: number,
            radius: number,
            opacity: number,
            hue: number
        }> = [];
        
        // More nebula for full page
        const nebulaCount = Math.min(25, Math.floor((canvas.width * canvas.height) / 80000));
        
        for (let i = 0; i < nebulaCount; i++) {
            nebulaPoints.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 80 + 40,
                opacity: Math.random() * 0.04 + 0.01, // Subtle opacity
                hue: Math.floor(Math.random() * 60) + 210
            });
        }
        
        // Animation function
        let frame = 0;
        const animate = () => {
            // Subtle background gradient
            const grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
            grd.addColorStop(0, '#0a0a1a');
            grd.addColorStop(0.7, '#141432');
            grd.addColorStop(1, '#0f0f24');
            
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw nebula clouds
            nebulaPoints.forEach(point => {
                const glow = ctx.createRadialGradient(
                    point.x, point.y, 0, 
                    point.x, point.y, point.radius
                );
                
                glow.addColorStop(0, `hsla(${point.hue}, 80%, 50%, ${point.opacity})`);
                glow.addColorStop(1, 'hsla(240, 80%, 10%, 0)');
                
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            
            // Draw and animate stars
            stars.forEach(star => {
                // Pulsing effect
                const pulsingOpacity = star.opacity + Math.sin(frame * star.pulse) * 0.2;
                
                // Draw star
                ctx.fillStyle = `hsla(${star.hue}, 80%, 70%, ${pulsingOpacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
                
                // Glow effect
                ctx.fillStyle = `hsla(${star.hue}, 80%, 80%, ${pulsingOpacity * 0.3})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
                ctx.fill();
                
                // Move stars slightly
                star.y = (star.y + star.speed * 0.5) % canvas.height;
            });
            
            frame++;
            requestAnimationFrame(animate);
        };
        
        animate();
        
        // Check document height periodically and resize if needed
        const checkHeight = setInterval(() => {
            const currentHeight = Math.max(document.body.scrollHeight, window.innerHeight);
            if (canvas.height !== currentHeight) {
                resizeCanvas();
            }
        }, 1000);
        
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            clearInterval(checkHeight);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default SpaceBackground;