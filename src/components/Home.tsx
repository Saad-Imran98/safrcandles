import React, { useState } from 'react';
import '../../styles.css'; // Assuming you have a styles.css file for the same styles

export default function SafrCandles(){
    const [email, setEmail] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycby19IqijkMMz55nl_7_TLgTC7dsOYUm4dw2wOw9ydzMoJoSDDW7BdS6_cxFGFgKS2HJ/exec'; // Replace with your Google Apps Script Web App URL

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    email: email, // This key matches what is expected in your Apps Script
                }),
            });

            if (response.ok) {
                alert('Thank you for subscribing!');
            } else {
                alert('Something went wrong. Please try again later.');
            }
        } catch (error: any) {
            alert('Error: ' + error.message);
        }

        // Optionally, clear the input field
        setEmail('');
    };

    return (
        <div>
            <header>
                <div className="logo-container">
                    <img src="safrlogo.svg" alt="Safr Candles Logo" className="logo" />
                </div>
            </header>

            <div className="coming-soon-container">
                <div className="content">
                    <h1 className="brand-name">Safr Candles</h1>
                    <h2 className="tagline">
                        Premium, hand-poured candles inspired by South Asian scents and
                        memories
                    </h2>
                    <p className="coming-soon-text">Coming Soon</p>
                    {/* Subscription form */}
                    <form className="subscription-form" id="emailForm" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="emailInput"
                            placeholder="Enter your email"
                            aria-label="Email for updates"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <footer>
                <div className="social-links">
                    <a
                        href="https://www.instagram.com/safrcandles?igsh=YnI1OWZmb3VnbDJr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <img
                            src="instagram-icon.png"
                            alt="Instagram"
                            className="instagram-icon"
                        />
                    </a>
                    <a
                        href="https://www.tiktok.com/@safr.candles?_t=8pj4FGuxqeU&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                    >
                        <img src="tiktok-icon.png" alt="TikTok" className="tiktok-icon" />
                    </a>
                </div>
            </footer>
        </div>
    );
};
