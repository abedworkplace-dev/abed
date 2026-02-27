const { Resend } = require("resend");
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors());
app.use(express.json());





const resend = new Resend("re_T9HnpRiF_Ku1LJVGFgVjSve3tRBrEhU9k");

app.get("/", (req, res) => {
  res.send("server")
})

app.post("/send-email", (req, res) => {
  const { name, email, tel, objet, message } = req.body;



  resend.emails.send({
    from: 'abedworkplace@gmail.com',
    to: 'abnegko@gmail.com',
    subject: objet,
    text: `
Nom: ${name}
Email: ${email}
Téléphone: ${tel}
Message: ${message}
      `
  }).then((result) =>
    console.log(result)
  ).catch((err) => {
    console.log(err);
    res.status(500).send("Erreur lors de l'envoi du mail");
  });

});

app.listen(3001, () => {
  console.log("server listen");
});