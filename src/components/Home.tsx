import React, { useState } from 'react';
import "./HomeStyles.css"
import {Button, IconButton, Input, Typography} from "@mui/material";
export default function SafrCandles(){
    const [email, setEmail] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
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
            <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center"}} className="home">
                <Typography style={{color: "white"}} fontFamily={"sans-serif"} variant="h3">Safr Candles</Typography>
                <Typography fontFamily={"serif"} style={{color: "#f1e7e4", fontSize: "30px"}} variant={"caption"}>
                    Premium, hand-poured candles inspired by South Asian scents and memories
                </Typography>
            </div>
            <div style={{paddingTop: "50px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} >

                <Typography variant={"body1"}>Coming Soon</Typography>
                {/* Subscription form */}
                <form style={{display: "flex", flexDirection: "column"}} className="subscription-form" id="emailForm" onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        id="emailInput"
                        placeholder="Enter your email"
                        aria-label="Email for updates"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{height: "50px", width: "300px", borderRadius: "10px", padding: "10px"}}
                    />
                    <Button style={{height: "50px", width: "300px", borderRadius: "10px", padding: "10px"}} type="submit">Subscribe</Button>
                </form>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "100px"}}>
                <IconButton
                    style={{height: "50px", width: "50px"}}
                    href="https://www.instagram.com/safrcandles?igsh=YnI1OWZmb3VnbDJr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <img
                        src="instagram-icon.png"
                        alt="Instagram"
                        className="instagram-icon"
                        style={{height: "50px", width: "50px"}}
                    />
                </IconButton>
                <IconButton
                    href="https://www.tiktok.com/@safr.candles?_t=8pj4FGuxqeU&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    style={{height: "50px", width: "50px"}}
                >
                    <svg
                        fill="#000000"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        style={{height: "50px", width: "50px"}}
                    >
                        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
                    </svg>
                </IconButton>
            </div>
        </div>

    );
};
