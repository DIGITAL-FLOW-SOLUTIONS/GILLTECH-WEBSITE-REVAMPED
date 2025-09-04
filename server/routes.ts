import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          error: "All fields are required" 
        });
      }

      // Send email using Resend
      const emailData = await resend.emails.send({
        from: 'Contact Form <noreply@gilltechnologies.com>',
        to: 'gilltechnologies22@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af;">New Contact Form Submission</h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="color: #64748b; font-size: 14px;">
              This message was sent from the Gill Technologies contact form.
            </p>
          </div>
        `,
        replyTo: email,
      });

      if (emailData.error) {
        console.error('Resend error:', emailData.error);
        return res.status(500).json({ 
          success: false, 
          error: "Failed to send email" 
        });
      }

      res.json({ 
        success: true, 
        message: "Email sent successfully" 
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        error: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
