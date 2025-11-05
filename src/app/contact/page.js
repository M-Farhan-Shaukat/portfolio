"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/components/shared/ThemeProvider";
import SEO from "@/app/components/shared/SEO";
import ContactUs from "./ContactUs";

export default function ContactUsPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <SEO
        title="Contact Us – ConvertPK"
        description="Get in touch with the ConvertPK team. Send us your questions, feedback, or suggestions. We're here to help!"
        keywords="contact, support, feedback, convertpk"
        image="/images/seo-banner.png"
        url="https://www.convertpk.com/contact"
      />
      <div className={`min-vh-100 py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">
              <i className="fas fa-envelope me-3"></i>
              Contact Us
            </h1>
            <p className="lead mb-4">
              Have questions, feedback, or suggestions? Reach out to the ConvertPK team below!
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 