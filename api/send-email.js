import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper to set CORS headers
const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

export default async function handler(req, res) {
  setCorsHeaders(res);

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { from_name, from_email, message } = req.body;

  // Validation
  if (!from_name || !from_email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing required fields: from_name, from_email, message.' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(from_email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Invalid email format.' 
    });
  }

  // Check for API key
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ 
      success: false, 
      error: 'Email service is not configured properly.' 
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['hello@shreyas-shack.tech'],
      reply_to: from_email,
      subject: `New message from ${from_name}`,
      html: `
        New Contact Form Submission
        From: ${from_name}
        Email: ${from_email}
        Message:
        ${message.replace(/\n/g, '')}
      `,
      text: `
New Contact Form Submission

From: ${from_name}
Email: ${from_email}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ 
        success: false, 
        error: 'Failed to send email. Please try again.' 
      });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!',
      id: data.id 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error. Please try again later.' 
    });
  }
}