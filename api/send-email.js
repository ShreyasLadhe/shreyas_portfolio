const SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID; 
const TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID; 
const PUBLIC_KEY = process.env.VITE_EMAILJS_PUBLIC_KEY;

// Helper to set CORS headers
const setCorsHeaders = (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

export default async function handler(req, res) {
    setCorsHeaders(res);

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { from_name, from_email, message } = req.body;

    if (!from_name || !from_email || !message) {
        return res.status(400).json({ success: false, error: 'Missing required fields: from_name, from_email, message.' });
    }

    const templateParams = {
        from_name: from_name,
        to_name: "Shreyas",
        from_email: from_email,
        to_email: "hello@shreyas-shack.tech", 
        message: message,
    };

    const emailjsPayload = {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: templateParams,
        accessToken: PUBLIC_KEY 
    };

    try {
        const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailjsPayload),
        });

        if (emailjsResponse.ok) {
            res.status(200).json({ success: true, message: "Email sent successfully via Chatbot." });
        } else {
            const errorText = await emailjsResponse.text();
            console.error('EmailJS API Error Response:', emailjsResponse.status, errorText);
            res.status(500).json({ success: false, error: "Failed to send email via EmailJS (check Vercel logs)." }); 
        }
    } catch (error) {
        console.error('Vercel Fetch Error:', error);
        res.status(500).json({ success: false, error: "Internal Server Error during EmailJS request." });
    }
}