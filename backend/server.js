require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());

// Gmail transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

app.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;

   const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: `New Contact Message: ${subject}`,
  html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; background:#f6f6f6;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px;">
      
    <div style="text-align:center; margin-bottom:25px;">
        <h2 style="color:#4F46E5; text-align:center;">📩 New Contact Message</h2>
        <p style="color:#6b7280; font-size:11px; margin-top:8px;">
            You have received a new inquiry from your portfolio website.
        </p>
    </div>

      <hr style="margin: 20px 0; border:none; border-bottom:1px solid #ddd;" />

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p style="margin-top: 15px;"><strong>💬 Message:</strong></p>
      <div style="
                  background:#f9fafb;
                  padding:15px;
                  border-left:4px solid #1e3a8a;
                  border-radius:6px;
                  color:#374151;
                  font-size:12px;
                  line-height:1.4;">
                  ${message}
                </div>

      <hr style="margin: 20px 0; border:none; border-bottom:1px solid #ddd;" />
      <p style="font-size: 11px; color: #666; text-align:center;">📎This email was sent automatically from your Portfolio Contact Form.</p>

    </div>
  </div>
  `
};



    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, msg: "Email sent!" });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ success: false, msg: "Email failed!" });
    }
});

app.get("/", (req, res) => {
    res.send("Email backend is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
