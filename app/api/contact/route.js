import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      projectType,
      industry,
      budget,
      message,
    } = data;

    // Check required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !projectType ||
      !industry ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 },
      );
    }

    // GoDaddy SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"HipHipVideos Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,

      subject: `New Video Project Enquiry - ${firstName} ${lastName}`,

      text: `
NEW VIDEO PROJECT ENQUIRY

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}

Project Type: ${projectType}
Industry: ${industry}
Budget: ${budget || "Not provided"}

Message:
${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">

          <div style="background:#000; padding:25px; text-align:center;">
            <h1 style="color:#CCFF00; margin:0;">
              NEW VIDEO PROJECT ENQUIRY
            </h1>
          </div>

          <div style="padding:30px; border:1px solid #ddd;">

            <h2>Customer Details</h2>

            <p>
              <strong>Name:</strong><br>
              ${firstName} ${lastName}
            </p>

            <p>
              <strong>Email:</strong><br>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong><br>
              ${phone || "Not provided"}
            </p>

            <hr>

            <p>
              <strong>Project Type:</strong><br>
              ${projectType}
            </p>

            <p>
              <strong>Industry:</strong><br>
              ${industry}
            </p>

            <p>
              <strong>Estimated Budget:</strong><br>
              ${budget || "Not provided"}
            </p>

            <hr>

            <h3>Project Requirements</h3>

            <p style="white-space:pre-line;">
              ${message}
            </p>

          </div>

          <div style="background:#f5f5f5; padding:15px; text-align:center;">
            Submitted from HipHipVideos website
          </div>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully!",
    });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Email sending failed",
      },
      { status: 500 },
    );
  }
}
