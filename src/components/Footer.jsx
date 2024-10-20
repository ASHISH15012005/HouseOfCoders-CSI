import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
        { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/csisrmist?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
        { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
        { name: 'GitHub', icon: Github, url: 'https://github.com' },
    ];

    return (
        <footer
            className="bg-gray-800 text-white py-8 relative overflow-hidden"
            style={{
                backgroundImage: `
                    linear-gradient(90deg, rgba(255,255,255,0.03) 3px, transparent 3px), 
                    linear-gradient(rgba(255,255,255,0.03) 3px, transparent 3px), 
                    radial-gradient(ellipse at center, transparent 20%, black)`,
                backgroundSize: '32px 32px',
            }}
        >
            {/* Radial gradient overlay */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">House of Coders</h2>
                        <p className="text-sm mt-2">Empowering developers, one line at a time.</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end space-x-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                <link.icon className="w-6 h-6" />
                                <span className="sr-only">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} House of Coders. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
