require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
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
        subject: `New Message: ${subject}`,
        text: `
Name: ${name}
Email: ${email}
Subject: ${subject}x
Message: ${message}
    `,
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
