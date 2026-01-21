import { motion } from 'framer-motion';
import styles from './BackgroundPaths.module.css';

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(255,255,255,${0.05 + i * 0.01})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className={styles.pathsOverlay}>
            <svg
                className={styles.svg}
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export interface BackgroundPathsProps {
    title?: string;
}

export function BackgroundPaths({
    title = 'Semana AI 2026',
}: BackgroundPathsProps) {
    const words = title.split(' ');

    return (
        <div className={styles.container}>
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className={styles.titleWrapper}
                >
                    <h1 className={styles.title}>
                        {words.map((word, wordIndex) => (
                            <span key={wordIndex} className={styles.word}>
                                {word.split('').map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: wordIndex * 0.1 + letterIndex * 0.03,
                                            type: 'spring',
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className={styles.letter}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                </motion.div>
            </div>
        </div>
    );
}

export default BackgroundPaths;
