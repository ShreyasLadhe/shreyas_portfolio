const SERVICE_ID = process.env.EMAILJS_SERVICE_ID; 
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID; 
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const ACCESS_TOKEN = process.env.EMAILJS_ACCESS_TOKEN; 

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

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !ACCESS_TOKEN) {
        console.error("CONFIGURATION ERROR: Missing one or more EmailJS Environment Variables (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, or ACCESS_TOKEN)!");
        return res.status(500).json({ success: false, error: "Configuration Error: Email service keys are missing on the server." });
    }

    if (!from_name || !from_email || !message) {
        return res.status(400).json({ success: false, error: 'Missing required fields: from_name, from_email, message.' });
    }

    const templateParams = {
        from_name: from_name,
        to_name: "Shreyas",
        from_email: from_email,
        to_email: "shreyasl9819@gmail.com", 
        message: message,
    };

    const emailjsPayload = {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY, 
        template_params: templateParams,
    };

    try {
        const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ACCESS_TOKEN}` 
            },
            body: JSON.stringify(emailjsPayload),
        });

        if (emailjsResponse.ok) {
            res.status(200).json({ success: true, message: "Email sent successfully via Chatbot." });
        } else {
            const errorText = await emailjsResponse.text();
            console.error(`EMAILJS API ERROR: Status ${emailjsResponse.status}. Response: ${errorText}`);
            res.status(500).json({ success: false, error: "Email service failed. Please check Vercel logs for EmailJS error details." }); 
        }
    } catch (error) {
        console.error('VERCEL FETCH ERROR (Network/DNS/Internal):', error);
        res.status(500).json({ success: false, error: "Internal Server Error during Vercel fetch operation." });
    }
}
