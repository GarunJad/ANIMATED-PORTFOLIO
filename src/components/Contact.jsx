import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Smartphone } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const formRef = React.useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
            // Sign up at https://www.emailjs.com/
            // 1. Create a Service (e.g., Gmail) -> Get Service ID
            // 2. Create an Email Template -> Get Template ID
            // 3. Go to Account > API Keys -> Get Public Key

            const serviceID = 'service_a6768lf';
            const templateID = 'template_68ynuok';
            const publicKey = 'D2KGs2QSkcUqOtHTU';

            await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);

            alert("SIGNAL TRANSMITTED SUCCESSFULLY. ORBITAL DROP INBOUND.");
            setFormState({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('FAILED...', error);
            alert("TRANSMISSION FAILED. CHECK SYSTEM LOGS.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-10 md:py-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-display font-bold text-center mb-16"
                >
                    INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">CONTACT</span>
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <div className="glass-card p-8 border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                <MapPin className="text-primary" /> LOCATION
                            </h3>
                            <p className="text-gray-300">Noida, Uttar Pradesh, India</p>
                            <p className="text-gray-500 text-sm mt-2">Available for Relocation</p>
                        </div>

                        <div className="glass-card p-8 border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-secondary/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                <Mail className="text-secondary" /> SIGNAL FREQUENCY
                            </h3>
                            <a href="mailto:garunjadaun@gmail.com" className="text-gray-300 hover:text-white transition-colors">garunjadaun@gmail.com</a>
                        </div>

                        <div className="glass-card p-8 border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-accent/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                <Smartphone className="text-accent" /> SECURE LINE
                            </h3>
                            <p className="text-gray-300">+91 9548173628</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full md:w-1/2">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="CODENAME (Name)"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors peer"
                                />
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 peer-focus:w-full" />
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder="FREQUENCY (Email)"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors peer"
                                />
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 peer-focus:w-full" />
                            </div>

                            <div className="relative group">
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="TRANSMISSION CONTENT..."
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors peer resize-none"
                                />
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 peer-focus:w-full" />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary/20 border border-primary text-primary font-display font-bold py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={20} className={`group-hover:translate-x-1 transition-transform ${isSubmitting ? 'animate-ping' : ''}`} />
                                {isSubmitting ? 'TRANSMITTING...' : 'SEND SIGNAL'}
                            </button>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default Contact;
