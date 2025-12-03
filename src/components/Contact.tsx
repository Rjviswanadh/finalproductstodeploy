import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Pin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

   React.useEffect(() => {
    const pub = "qNzL68jnA-5mggGqR"; //process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (pub) {
      emailjs.init(pub);
    } else {
      console.warn("EmailJS public key not set (REACT_APP_EMAILJS_PUBLIC_KEY)");
    }
  }, []); 

const  handleSubmit = async (e: React.FormEvent) => {
 
   e.preventDefault();
  if (sending) return; // Prevent multiple submissions
  setSending(true);

 const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

 try {
      const resp = await emailjs.send("service_wd21m2r", "template_30kx138", templateParams);
      console.log("EmailJS response:", resp);
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS send error:", err);
      alert("Error sending message. Check console and EmailJS dashboard.");
    } finally {
      setSending(false);
    }

  /* emailjs
    .send("service_wd21m2r", "template_az8uzmc", formData)
    .then(() => {
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    })
    .catch(() => alert("Error sending message. Please try again.")).finally(() => setSending(false)); */
};

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Interested in our services or have questions? Reach out to our team
            for a consultation or to request a custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-emerald-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <p className="font-medium mb-1">Email Us</p>
                  <a
                    href="mailto:info@puresource.com"
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    vellankibhavani99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <p className="font-medium mb-1">Call Us</p>
                  <a
                    href="tel:+1234567890"
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    +91 7396236286 (Head Office) <br />
                    +91 9701273727 (Branch Office)
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <p className="font-medium mb-1">Visit Us</p>
                   <p className="font-medium mb-1">Head Address</p>
                  <address className="text-emerald-200 not-italic">
                    raju gari Street
                    <br />
                    Peddapuram
                    <br />
                    India
                    <br />
                     533437
                  </address>
                </div>
                <div className="line"> </div>
                <div className="branch">
                  <p className="font-medium mb-1">Branch Address</p>
                  <address className="text-emerald-200 not-italic">
                   Main road 
                   <br />Ambati peta
                    <br />
                    Bikkavolu
                    <br />
                    India 533343
                  </address>
                </div>
              </div>
              <div className="flex items-start">
                <Pin className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <a
                    href="https://maps.app.goo.gl/Wd1YLJbNAAzi7EAy5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    View on Google Maps (Head Office)
                  </a>
                  <br />
                  <a
                    href="https://maps.app.goo.gl/Hfo7SrnPvzT4pNVi9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    View on Google Maps (Bikkavolu Branch)
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-medium mb-4">Business Hours</h4>
              <p className="text-emerald-200">
                sunday - Friday: 8:00 AM - 9:00 PM
              </p>
              <p className="text-emerald-200">Saturday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                {/* <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div> */}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;