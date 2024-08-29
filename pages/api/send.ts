import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Ensure the method is POST
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    // Extracting data from request body
    const { email, subject, message } = req.body;
    if (!email || !subject || !message) {
      return res.status(400).json({ message: "Bad Request: Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.PERSONAL_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.PERSONAL_EMAIL,
      to: process.env.PERSONAL_EMAIL,
      subject:
        `FROM PORTFOLIO - ${email}: ${subject}` ||
        `PORTFOLIO Reach out from ${email}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
