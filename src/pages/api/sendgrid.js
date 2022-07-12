// Librairie
import sgMail from "@sendgrid/mail";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "INVALID_METHOD" });
    return;
  }
  // Variables
  const { lastName, firstName, email, phone } = req.body;
  if (!lastName || !firstName || !email || !phone) {
    res.status(400).json({ message: "INVALID_PARAMETER" });
    return;
  }
  // Donner la clé API
  sgMail.setApiKey(
    "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"
  );

  // Création du message
  const sendGridMail = {
    to: "maximenef1@gmail.com",
    from: "immersy.info@gmail.com",
    subject: `${phone}`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${lastName},${firstName} their email is: ✉️${email} </h3>
              <div style="font-size: 16px;">rrr
              <br>
              </div>       
              </div>
              </div>
      </body>
      </html>`,
  };
  // SendGrid
  (async () => {
    try {
      await sgMail.send(sendGridMail);
      console.log(lastName, firstName, email, phone, "req body");
      res.status(200).json({
        message: "EMAIL_SENDED_SUCCESSFULLY",
      });
    } catch {
      res.status(500).json({
        message: "ERROR_WITH_SENDGRID",
      });
      return;
    }
  })();
}

// import sendgrid from "@sendgrid/mail";

// async function sendEmail(req, res) {
//   console.log("debug plzzzz");
//   sendgrid.setApiKey(
//     "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"
//   );
//   try {
//     console.log("REQ.BODY", req.body);
//     await sendgrid.send({
//       to: "maximenef1@gmail.com", // Your email where you'll receive emails
//       from: "immersy.info@gmail.com", // your website email address here
//       subject: `${req.body.phone}`,
//       html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//       <html lang="en">
//       <head>
//         <meta charset="utf-8">

//         <title>The HTML5 Herald</title>
//         <meta name="description" content="The HTML5 Herald">
//         <meta name="author" content="SitePoint">
//       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

//         <link rel="stylesheet" href="css/styles.css?v=1.0">

//       </head>

//       <body>
//         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
//               </div>
//               <div class="container" style="margin-left: 20px;margin-right: 20px;">
//               <h3>You've got a new mail from ${req.body.lastName},${req.body.firstName} their email is: ✉️${req.body.email} </h3>
//               <div style="font-size: 16px;">rrr
//               <br>
//               </div>
//               </div>
//               </div>
//       </body>
//       </html>`,
//     });
//   } catch (error) {
//     // console.log(error);
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "" });
// }

// export default sendEmail;
