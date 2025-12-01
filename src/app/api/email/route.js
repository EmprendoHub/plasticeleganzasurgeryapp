import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const cookie = await req.headers.get("cookie");
  if (!cookie) {
    // Not Signed in
    const notAuthorized = "You are not authorized no no no";
    return new Response(JSON.stringify(notAuthorized), {
      status: 400,
    });
  }
  try {
    const { name, email, message, phone, honeypot } = await req.json();

    if (honeypot !== "") {
      return NextResponse.json({
        success: false,
        email,
        message: "no bots",
      });
    }

    const subject = "¡Mensaje Del formulario de contacto!";
    const phoneWithoutSpaces = phone.replace(/\s+/g, "");
    const greeting = `Estimado/a:`;
    const title = `${name} envió el siguiente mensaje:`;
    const bodyOne = message;
    const bodyTwo = `Puedes contactar por:`;
    const phoneContact = `Telefono:`;
    const emailContact = `Email:`;
    const senderName = "www.eleganzaplasticsurgery.com";
    const bestRegards = "¡Creciendo tu presencia un contacto a la vez!";
    const contact_email = email;
    //const send_to_email = "ventas@eleganzaplasticsurgery.com";
    const send_to_email = "emprendomex@gmail.com";

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_MAIL,
        pass: process.env.GOOGLE_MAIL_PASS,
      },
    });

    const mailOption = {
      from: `"Eleganza Plastics Surgery" <${contact_email}>`,
      to: send_to_email,
      subject,
      html: `
    <!DOCTYPE html>
    <html lang="es">
    <body>
    <div>
    <p>${greeting}</p>
    <p>${title}</p>
    <p>${bodyOne}</p>
    <div>${bodyTwo}</div>
    <p>${phoneContact}</p>
    <a href="tel:${phoneWithoutSpaces}" target="_blank">${phone}</a>
    <p>${emailContact}</p>
    <div>${contact_email}</div>
    <p>${senderName}</p>
    <p>${bestRegards}</p>
    </div>
    </body>
    </html>
    `,
    };

    await transporter.sendMail(mailOption);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: JSON.stringify(error.message),
    });
  }
}
