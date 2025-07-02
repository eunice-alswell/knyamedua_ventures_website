import { useState } from "react";
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
    recipientEmail: "gyaualswell@gmail.com",
    recipientName: "Nyamedua Grupp",
    subject: "",
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    message: ""
  });

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailDetail((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    SendEmail({
      emailDetail,
      onSuccess: () => {
        console.log("Email sent successfully!");
      },
      onError: () => {
        console.error("Failed to send email:");
      }
    });
    // Here you would typically send the email using an API or service like EmailJS
    console.log("Email Details:", emailDetail);
    // Reset form after submission
    setEmailDetail({
      recipientEmail: "gyaualswell@gmail.com",
      recipientName: "Nyamedua Grupp",
      subject: "",
      senderName: "",
      senderEmail: "",
      senderPhone: "",
      message: ""
    });
  };
  // This is a simple home page component that can be used in the in any part of the website.
  return (
    <div>
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
                    <p className="text-accent text-sm">+233 55 0994 6300</p>
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
                    </div>
                  </div>
                  <Button label="Submit" type="submit"  />
                </form>
              </div>
            </div>
          </div>

        </main>
        <Footer/>
    </div>
  );
}