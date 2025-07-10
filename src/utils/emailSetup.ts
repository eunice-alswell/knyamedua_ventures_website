import emailjs from "@emailjs/browser";
import type{ EmailDetail } from "../components/ContactPageComponent";

// interface EmailDetails {
//     to_email: string;
//     to_name: string;

//     from_name: string;
//     from_email: string;
//     from_phone: string;
//     message: string;
// }

interface SendEmailProps {
    emailDetail: EmailDetail;
    onSuccess?: () => void;
    onError?: () => void;
}

const SendEmail = async ({ emailDetail, onSuccess, onError }: SendEmailProps) => {
    try {
        emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
        const response = await emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID, 
            import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
            {
                recipientEmail: emailDetail.recipientEmail,
                recipientName:  emailDetail.recipientName,
                subject: emailDetail.subject,
                senderName: emailDetail.senderName,
                senderEmail: emailDetail.senderEmail,
                senderPhone: emailDetail.senderPhone,
                message: emailDetail.message,
            }
        );
        console.log("Email sent successfully", response.status, response.text);
        onSuccess?.();
    } catch (error) {
        console.log("Email failed to send", error);
        onError?.();
    }
};

export default SendEmail;