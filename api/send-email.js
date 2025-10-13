import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Georgia', serif; background-color: #f9f7f4; color: #333; line-height: 1.6; }
              .container { max-width: 650px; margin: 40px auto; padding: 30px; background: #fff; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #4a90e2, #9013fe); padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .header h2 { color: #fff; margin: 0; font-size: 24px; }
              .content { margin: 30px 0; }
              .content p { margin: 15px 0; }
              .content strong { color: #4a90e2; }
              .footer { text-align: center; font-size: 12px; color: #888; padding-top: 20px; border-top: 1px solid #eee; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <p><strong>From:</strong> ${from_name}</p>
                <p><strong>Email:</strong> ${from_email}</p>
                <p><strong>Message</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div class="footer">
                <p>Reply to ${from_name} as soon as possible.</p>
              </div>
            </div>
          </body>
        </html>
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