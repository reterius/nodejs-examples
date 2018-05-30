const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "**************",
        pass: "****************"
    }
});

transporter.verify(function (error, success) {
    if (error) throw error;
    console.log("Bağlantı başarıyla sağlandı");
});

let bilgiler = {
    from: "'Gönderen Adı Soyadı' <reterius@gmail.com>",
    to: "ygd01@vizyonturkey.com",
    subject: "Deneme baslik",
    text: "deneme icerikkkk"
};

transporter.sendMail(bilgiler, function (error, info) {
    if (error) throw error;
    console.log("Eposta gönderildi " + info.response);

});