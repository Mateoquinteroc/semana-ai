import React, { useState, useRef, useEffect } from 'react';
import { Message } from './types';
import styles from './AIGuide2026.module.css';

const AIGuide2026: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: 'Hola! Soy tu guía virtual para la Semana de la IA 2026. ¿En qué puedo ayudarte hoy?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulated response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'model', text: "Lo siento, soy un prototipo y mi conexión con Gemini está desactivada en este entorno local. Sin embargo, puedo confirmarte que el evento será del 26 al 29 de mayo de 2026." }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className={styles.guide}>
            {isOpen ? (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <span className={styles.headerTitle}>AI Guide / 2026</span>
                        <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <div ref={scrollRef} className={styles.messages}>
                        {messages.map((m, i) => (
                            <div key={i} className={`${styles.messageRow} ${m.role === 'user' ? styles.userRow : styles.modelRow}`}>
                                <div className={`${styles.messageBox} ${m.role === 'user' ? styles.userBox : styles.modelBox}`}>
                                    {m.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className={styles.messageRow}>
                                <div className={styles.typing}>
                                    IA está pensando...
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Pregunta..."
                            className={styles.input}
                        />
                        <button
                            onClick={handleSend}
                            className={styles.sendBtn}
                            disabled={isTyping}
                        >
                            enviar
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className={styles.toggleBtn}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '1.875rem' }}>smart_toy</span>
                </button>
            )}
        </div>
    );
};

export default AIGuide2026;
