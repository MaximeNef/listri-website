// // Librairie
// import sgMail from "@sendgrid/mail";

// export default function handler(req, res) {
//   if (req.method !== "POST") {
//     res.status(405).json({ message: "INVALID_METHOD" });
//     return;
//   }
//   // Variables
//   const { lastName, firstName, email, phone } = req.body;
//   if (!lastName || !firstName || !email || !phone) {
//     res.status(400).json({ message: "INVALID_PARAMETER" });
//     return;
//   }
//   // Donner la clé API
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//   // Création du message
//   const sendGridMail = {
//     to: "maximenef1@gmail.com",
//     from: "immersy.info@gmail.com",
//     templateId: "d-e937be85250e44b19a0ad70c1141d426 ",
//     dynamic_template_data: {
//       lastName: lastName,
//       firstName: firstName,
//       email: email,
//       phone: phone,
//     },
//     subject: `${phone}`,
//     html: "",
//   };
//   // SendGrid
//   (async () => {
//     try {
//       await sgMail.send(sendGridMail);
//       console.log(lastName, firstName, email, phone, "req body");
//       res.status(200).json({
//         message: "EMAIL_SENDED_SUCCESSFULLY",
//       });
//     } catch {
//       res.status(500).json({
//         message: "ERROR_WITH_SENDGRID",
//       });
//       return;
//     }
//   })();
// }
