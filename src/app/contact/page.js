"use client";
import { useContext } from "react";
import ContactUs from "./ContactUs";

export default function ContactUsPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ContactUs />
            </div>
          </div>
    </>
  );
} 