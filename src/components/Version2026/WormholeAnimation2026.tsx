import React, { useEffect, useRef } from 'react';
import styles from './WormholeAnimation2026.module.css';

const WormholeAnimation2026: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const bootLogRef = useRef<HTMLDivElement>(null);
    const mainTitleRef = useRef<HTMLDivElement>(null);
    const coordDisplayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        // Optimized Configuration
        const tokens = ["01", "vx", "0x", "Σ", "Ω", "◈"];
        const chars = "0123456789ABCDEF".split("");
        const isMobile = window.innerWidth < 768;

        // Balanced counts for smoothness vs density
        const chainCount = isMobile ? 100 : 280;

        let width = 0;
        let height = 0;
        let dynamicCenterX = 0;
        let dynamicCenterY = 0;

        const updateDimensions = (w: number, h: number) => {
            if (w <= 0 || h <= 0) return;
            width = w;
            height = h;
            canvas.width = w;
            canvas.height = h;
            dynamicCenterX = w * 0.5;
            dynamicCenterY = h * 0.5;
        };

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width: w, height: h } = entry.contentRect;
                updateDimensions(w, h);
            }
        });

        const container = canvas.parentElement;
        if (container) {
            resizeObserver.observe(container);
            updateDimensions(container.offsetWidth, container.offsetHeight);
        }

        let time = 0;
        let titleAlpha = 0.1;
        let titleAlphaDir = 1;

        const fieldOfView = 250;
        const viewerDistance = 300;

        let cx: number, sx: number, cy: number, sy: number, cz: number, sz: number;

        class TensorChain {
            h: number;
            speed: number = 0;
            angle: number = 0;
            length: number = 0;
            elements: string[] = [];
            radiusBase: number = 0;
            alphaBase: number = 0;
            currentZ: number = 0;

            constructor() {
                this.h = (Math.random() - 0.5) * 2.5;
                this.reset(true);
            }

            reset(initial = false) {
                this.h = initial ? (Math.random() - 0.5) * 2.5 : -1.25;
                this.speed = Math.random() * 0.005 + 0.003;
                this.angle = Math.random() * Math.PI * 2;
                this.length = isMobile ? 6 : (Math.random() > 0.8 ? 12 : 6);
                this.elements = [];
                for (let i = 0; i < this.length; i++) {
                    this.elements.push(Math.random() > 0.7 ? tokens[Math.floor(Math.random() * tokens.length)] : chars[Math.floor(Math.random() * chars.length)]);
                }
                this.radiusBase = 70 + Math.random() * 30;
                this.alphaBase = Math.random() * 0.3 + 0.4;
            }

            update() {
                this.h += this.speed;
                if (this.h > 1.25) this.reset();

                // Project only the head for sorting
                const radius = this.radiusBase * Math.sqrt(0.4 + (this.h * this.h * 2.56));
                const z = radius * Math.sin(this.angle);
                const y = this.h * 320;
                this.currentZ = y * sx + z * cx; // Partial rotation for Z-sorting
            }

            draw(context: CanvasRenderingContext2D) {
                let lastSize = -1;

                for (let i = 0; i < this.length; i++) {
                    const hOffset = i * 0.025;
                    const h = this.h - hOffset;
                    const radius = this.radiusBase * Math.sqrt(0.4 + (h * h * 2.56));

                    const x = radius * Math.cos(this.angle);
                    const z = radius * Math.sin(this.angle);
                    const y = h * 320;

                    // Full rotation only when drawing
                    const y1 = y * cx - z * sx;
                    const z1 = y * sx + z * cx;
                    const x2 = x * cy + z1 * sy;
                    const z2 = -x * sy + z1 * cy;
                    const x3 = x2 * cz - y1 * sz;
                    const y3 = x2 * sz + y1 * cz;

                    const scale = fieldOfView / (viewerDistance + z2);
                    const px = dynamicCenterX + x3 * scale;
                    const py = dynamicCenterY + y3 * scale;

                    // Frustum culling
                    if (z2 > -280 && z2 < 280 && px > 0 && px < width && py > 0 && py < height) {
                        const alpha = this.alphaBase * (1 - i / this.length) * ((z2 + 300) / 600);
                        const size = Math.floor((isMobile ? 22 : 16) * scale);

                        if (size > 7) { // Adjusted threshold for dot optimization
                            if (size !== lastSize) {
                                context.font = `bold ${size}px monospace`;
                                lastSize = size;
                            }
                            context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                            context.fillText(this.elements[i], px, py);
                        } else {
                            // High-perf optimization: draw dots for far away elements
                            context.fillStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
                            context.fillRect(px, py, 1.5, 1.5); // Slightly larger dot for visibility
                        }
                    }
                }
            }
        }

        let chains: TensorChain[] = [];
        for (let i = 0; i < chainCount; i++) chains.push(new TensorChain());

        let animationFrameId: number;

        const animate = () => {
            time++;
            if (width === 0 || height === 0) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }

            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);

            dynamicCenterX = (width * 0.5) + Math.sin(time * 0.008) * (width * 0.03);
            dynamicCenterY = (height * 0.5) + Math.cos(time * 0.012) * (height * 0.02);

            const rx = time * 0.004, ry = time * 0.006, rz = time * 0.002;
            cx = Math.cos(rx); sx = Math.sin(rx);
            cy = Math.cos(ry); sy = Math.sin(ry);
            cz = Math.cos(rz); sz = Math.sin(rz);

            titleAlpha += 0.0005 * titleAlphaDir;
            if (titleAlpha >= 0.8 || titleAlpha <= 0.05) titleAlphaDir *= -1;
            if (time % 2 === 0 && mainTitleRef.current) {
                mainTitleRef.current.style.color = `rgba(255, 255, 255, ${titleAlpha})`;
            }

            for (let i = 0; i < chainCount; i++) chains[i].update();

            // Sort only every 2nd frame to save CPU
            if (time % 2 === 0) chains.sort((a, b) => b.currentZ - a.currentZ);

            for (let i = 0; i < chainCount; i++) chains[i].draw(ctx);

            if (time % 60 === 0 && coordDisplayRef.current) {
                coordDisplayRef.current.textContent = `X: ${dynamicCenterX.toFixed(1)} // Y: ${dynamicCenterY.toFixed(1)}`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const logInterval = setInterval(() => {
            if (bootLogRef.current) {
                const lines = bootLogRef.current.innerHTML.split('<br>');
                if (lines.length > 3) lines.shift();
                const logs = ["CORE_RESTORE: OK", "WORMHOLE_FLUX: ACTIVE", "Z_BUFFER_SYNC: OK", "FPS: 60"];
                lines.push("> " + logs[Math.floor(Math.random() * logs.length)]);
                bootLogRef.current.innerHTML = lines.join('<br>');
            }
        }, 4000);

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            clearInterval(logInterval);
        };
    }, []);

    return (
        <div className={styles.windowBox}>
            <div className={styles.crtOverlay}></div>

            <div className={styles.uiLayer}>
                <div className={styles.header}>WORMHOLE_CORE // OPTIMIZED_V27_RESTORED</div>
                <div className={styles.mainTitle} ref={mainTitleRef}>2026</div>

                <div className={styles.bootLog} ref={bootLogRef}>
                    &gt; OPTIMIZATION: MAX<br />
                    &gt; ALLOCATION_POOL: ACTIVE<br />
                    &gt; VIZ_MODE: WORMHOLE_ONLY
                </div>

                <div className={styles.footer}>
                    <div className={styles.footerLabel}>COORDINATES</div>
                    <div className={styles.footerValue} ref={coordDisplayRef}>X: 0.00 // Y: 0.00</div>
                </div>
            </div>

            <canvas ref={canvasRef} className={styles.asciiCanvas}></canvas>
        </div>
    );
};

export default WormholeAnimation2026;
