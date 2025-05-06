'use server'
import { Resend } from "resend";

const resend = new Resend("re_VpWhkDFP_8guFDLfcvnVbXsz56tuBoYb9");

export async function sendDonationReceiptEmail({
                                                   name,
                                                   email,
                                                   amount,
                                                   reference,
                                               }: {
    name: string;
    email: string;
    amount: string;
    reference: string;
}) {
    try {
        const message = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h2 style="color: #4F46E5">Thank You for Your Donation!</h2>
        <p>Dear ${name},</p>
        <p>We have successfully received your generous donation of <strong>GHS ${amount}</strong>.</p>
        <p>Your transaction reference is: <strong>${reference}</strong>.</p>
        <p>
          Every contribution matters, and yours is already helping us provide critical support
          and services to children, families, and communities in need.
        </p>
        <p>Warm regards,<br/>Arkoh Watch Foundation Team</p>
        <hr/>
        <p style="font-size: 12px; color: gray;">P.O. Box 10, Agona Bobikuma-C/R, Ghana | info@ArkohWatchFoundation.org</p>
      </div>
    `;

        await resend.emails.send({
            from:  'Arkoh Watch Foundation <onboarding@resend.dev>',
            to: [email],
            subject: "Donation Receipt - Arkoh Watch Foundation",
            html: message,
        });

        return { success: true };
    } catch (error) {
        console.error("Error sending donation email:", error);
        return { success: false };
    }
}
