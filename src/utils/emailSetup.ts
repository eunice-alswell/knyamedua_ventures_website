import emailjs from "@emailjs/browser";

interface EmailDetails {
    to_email: string;
    to_name: string;
    from_name: string;
    from_email: string;
    from_phone: string;
    message: string;
}

interface SendEmailProps {
    emailDetails: EmailDetails;
    onSuccess: () => void;
    onError: () => void;
}

const SendEmail = async ({ emailDetails, onSuccess, onError }: SendEmailProps) => {
    try {
        emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
        const response = await emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID, 
            import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
            {
                to_email: emailDetails.to_email,
                to_name: emailDetails.to_name,
                from_name: emailDetails.from_name,
                from_email: emailDetails.from_email,
                from_phone: emailDetails.from_phone,
                message: emailDetails.message,
            }
        );
        console.log("Email sent successfully", response.status, response.text);
        onSuccess();
    } catch (error) {
        console.log("Email failed to send", error);
        onError();
    }
};

export default SendEmail;