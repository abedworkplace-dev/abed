const nodemailer = require("nodemailer");
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors());
app.use(express.json());




const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "abnegko@gmail.com",
    pass: "alns idyd pqqu siaj"
  }
});


app.get("/", (req, res) => {
  res.send("server")
})

app.post("/send-email", (req, res) => {
  const { name, email, tel, objet, message } = req.body;

  transporter.sendMail({
    from: email,
    to: "abnegko@gmail.com",
    subject: objet,
    text: message,
    replyTo: email
  });

  res.send("Email envoyé");
});

app.listen(3001, () => {
  console.log("server listen");
});