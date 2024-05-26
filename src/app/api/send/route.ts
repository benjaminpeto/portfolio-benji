import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "../../../../components/Contact/email-template";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { message, email, name } = body;

    if (!message || !email || !name) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { data, error } = await resend.emails.send({
            from: `Benji - Porfolio <info@benjipeto.com>`,
            to: process.env.MY_EMAIL as string,
            subject: "Message from Portfolio",
            react: EmailTemplate({ name, email, message }),
            text: message,
        });

        if (error) {
            return NextResponse.json({ message: "Email sending failed", error }, { status: 400 });
        }

        return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
    }
}
