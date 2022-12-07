import * as nodemailer from "nodemailer";
import * as cors from "cors";
// place
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "firebase@radlab.zone",
    pass: "MFtriangle",
  },
});

export function prepareMail (req, res) {
  cors(req, res, () => {
    const mailOptions = {
      from: "firebase@radlab.zone",
      to: req.body.dest,
      subject: "Wellness Buddy Check-in",
      html: `<h1 style="font-size: 32px;"> Testing Testing </h1>
                <br />
            `,
    };
    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sended");
    });
  });
}
