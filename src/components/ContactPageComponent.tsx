import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { contactHeader } from "../utils/headerData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import SendEmail from "../utils/emailSetup";
import Button from "./Button";


export interface EmailDetail {
  recipientEmail: string;
  recipientName: string;
  subject: string;
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  message: string;
}

export default function ContactPageComponent() {

  const [emailDetail, setEmailDetail] = useState<EmailDetail>({
    recipientEmail: "helenaffo23@gmail.com",
    recipientName: "Nyamedua Grupp",
    subject: "",
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<EmailDetail>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<EmailDetail> = {};
    if (!emailDetail.subject.trim()) newErrors.subject = "Subject is required";
    if (!emailDetail.senderName.trim()) newErrors.senderName = "Name is required";
    if (!emailDetail.senderEmail.trim()) {
      newErrors.senderEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailDetail.senderEmail)) {
      newErrors.senderEmail = "Email is invalid";
    };
    if (!emailDetail.senderPhone) newErrors.senderPhone = "Phone number is required";
    if (!emailDetail.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailDetail((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
    setErrors({...errors, [name]: "" }); // Clear error for the field being edited
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if (validateForm()) {
      SendEmail({
        emailDetail,
        onSuccess: () => {
          alert("Email sent successfully!");
        },
        onError: () => {
          alert("Failed to send email. Please try again later."); 
        }
      });
      // Here you would typically send the email using an API or service like EmailJS
      console.log("Email Details:", emailDetail);
      // Reset form after submission
      setEmailDetail({
        recipientEmail: "info@nyameduagrupp.com",
        recipientName: "Nyamedua Grupp",
        subject: "",
        senderName: "",
        senderEmail: "",
        senderPhone: "",
        message: ""
      });
      setSubmitted(true);  
    }
  };
  // This is a simple home page component that can be used in the in any part of the website.
  return (
    <>
        <Helmet>
          <title>Contact Us | Nyamedua Grupp</title>
          <meta name="description" content="Have questions or need assistance with our LPG services? Reach out to Nyamedua Grupp — we’re here to help." />
          <meta name="keywords" content="Contact Nyamedua, LPG Support Ghana, Customer Service, Gas Installation Enquiry" />
          <meta property="og:title" content="Contact Us | Nyamedua Grupp" />
          <meta property="og:description" content="Get in touch with our team for inquiries, support, or service requests." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.nyameduagrupp.com/contact" />
          <meta property="og:image" content="https://www.nyameduagrupp.com/nyamedua_img/nyamedua_grupp_logo.png" />
          <link rel="canonical" href="https://www.nyameduagrupp.com/contact" />
        </Helmet>

        <Navbar/>
        <main >
          <Header title={contactHeader.title} subtitle={contactHeader.subtitle} description={contactHeader.description}/>
          <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-15">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <div className="flex items-center justify-center lg:justify-start gab-6">
                  <hr className="w-20 border-1 border-secondary"/>
                  <h1 className="text-lg font-normal text-primarycolor p-4 fadeInBottom">Reach Out</h1>
                </div>
                <p className="text-accent text-sm mb-4">We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
                {/* Contact Addresses */}
                <div>
                  <h2 className="text-primarycolor text-lg font-semibold mb-2">Address</h2>
                  <div className="flex space-x-4 mb-4">
                    <div className="">
                      <h2 className="text-primarycolor text-sm font-medium mb-2">Office 1</h2>
                      <p className="text-accent text-sm">F-Road AL 32, Ghana</p>
                    </div>
                    <div className="border-l border-gray-300 pl-4">
                      <h2 className="text-primarycolor text-sm font-medium mb-2">Office 2</h2>
                      <p className="text-accent text-sm">GHACEM Flat, Sakumono - Estate, Ghana</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mb-4 border-t border-gray-300 pt-4">
                  <div className="">
                    <h2 className="text-primarycolor text-base font-medium mb-2">Phone</h2>
                    <p className="text-accent text-sm">+233 50 994 6300</p>
                  </div>
                  <div className="border-l border-gray-300 pl-4">
                    <h2 className="text-primarycolor text-base font-medium mb-2">Email Address</h2>
                    <p className="text-accent text-sm">info@nyameduagrupp.com</p>
                  </div>
                  <div className="border-l border-gray-300 pl-4">
                    <h2 className="text-primarycolor text-base font-medium mb-2">Postal Address</h2>
                    <p className="text-accent text-sm">P.O. Box SK 935</p>
                  </div>
                </div>
                <div className="space-y-4 mb-4 border-t border-gray-300 pt-4">
                  <h2 className="text-primarycolor text-base font-medium mb-2">Socials</h2>
                  <ul className="flex flex-row items-center justify-start space-x-5 text-lg text-secondary">
                      <li className="">
                          <a href="" target="_blank" className="hover:text-primarycolor transition-colors duration-300 ease-in-out">
                              <FontAwesomeIcon icon={faWhatsapp} className=""/>
                          </a>
                      </li>
                      <li className="">
                          <a href="" target="_blank" className="hover:text-primarycolor transition-colors duration-300 ease-in-out">
                              <FontAwesomeIcon icon={faInstagram} className=""/>
                          </a>
                      </li>
                      <li className="">
                          <a href="" target="_blank" className="hover:text-primarycolor transition-colors duration-300 ease-in-out">
                              <FontAwesomeIcon icon={faTiktok} className=""/>
                          </a>
                      </li>
                  </ul>
                </div>
              </div>
              {/* Contact Form */}
              <div>
                <form className="space-y-4" onSubmit={handleSubmitForm}>
                  <h2 className="text-primarycolor text-2xl font-semibold mb-2">Send Us a Message</h2>
                  <div className="space-y-2">
                    <div className="space-y-2">
                      <label className="text-accent font-medium">Subject: <span className="text-red-500 pr-3">*</span></label>
                      <input 
                        type="text" 
                        name="subject"
                        value={emailDetail.subject}
                        onChange={handleDetailChange}
                        placeholder="eg. Inquiry about services" 
                        className=" w-[85%] p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-secondary transition-colors duration-300 ease-in-out"
                        required
                      />
                      {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="block text-accent font-medium">Name <span className="text-red-500 pl-1">*</span></label>
                      <input 
                        type="text" 
                        name="senderName"
                        value={emailDetail.senderName}
                        onChange={handleDetailChange}
                        placeholder="eg. John Doe" 
                        className=" w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-secondary transition-colors duration-300 ease-in-out"
                        required
                      />
                      {errors.senderName && <p className="text-red-500 text-sm">{errors.senderName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="block text-accent font-medium">Email <span className="text-red-500 pl-1">*</span></label>
                      <input 
                        type="email" 
                        name="senderEmail"
                        value={emailDetail.senderEmail}
                        onChange={handleDetailChange}
                        placeholder="eg. yourname@example.com" 
                        className=" w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-secondary transition-colors duration-300 ease-in-out"
                        required
                      />
                      {errors.senderEmail && <p className="text-red-500 text-sm">{errors.senderEmail}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="block text-accent font-medium">Phone <span className="text-red-500 pl-1">*</span></label>
                      <input 
                        type="tel" 
                        name="senderPhone"
                        value={emailDetail.senderPhone}
                        onChange={handleDetailChange}
                        placeholder="eg. 123-456-7890" 
                        className=" w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-secondary transition-colors duration-300 ease-in-out"
                        required
                      />
                      {errors.senderPhone && <p className="text-red-500 text-sm">{errors.senderPhone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="block text-accent font-medium">Message <span className="text-red-500 pl-1">*</span></label>
                      <textarea
                        name="message"
                        value={emailDetail.message}
                        onChange={handleDetailChange}
                        placeholder="eg. Your message here..."
                        className="w-full h-[150px] p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-secondary transition-colors duration-300 ease-in-out"
                        required
                      />
                      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                  </div>
                  <Button label="Submit" type="submit"  />
                  {submitted && <p className="text-green-500 text-sm">Your message has been sent successfully!</p>}
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
    </>
  );
}