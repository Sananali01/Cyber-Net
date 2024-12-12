import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Building } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_3s2jn3b'; // Replace with your EmailJS Service ID
    const templateId = 'template_pyl9lgs'; // Replace with your EmailJS Template ID
    const userId = 'WFAR65HNHEzj-0vlV'; // Replace with your EmailJS Public Key

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        userId
      );
      alert('Your message has been sent!');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Get in <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-400">
            We would love to hear from you. Fill out the form below or reach us via the contact details.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-4 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-4 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full p-4 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Message"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-md hover:from-red-700 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Our Contact Details</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-red-500" />
                <span className="ml-4 text-neutral-300">info@cybernet.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-red-500" />
                <span className="ml-4 text-neutral-300">support@cybernet.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-red-500" />
                <span className="ml-4 text-neutral-300">+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-red-500" />
                <span className="ml-4 text-neutral-300">+987 654 3210 (Support Hotline)</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-6 w-6 text-red-500" />
                <span className="ml-4 text-neutral-300">1234 Cyber Street, Tech City, Country</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-6 w-6 text-red-500" />
                <span className="ml-4 text-neutral-300">5678 Security Avenue, Tech City, Country</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-6 w-6 text-red-500" />
                <span className="ml-4 text-neutral-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-6 w-6 text-red-500" />
                <span className="ml-4 text-neutral-300">Sat - Sun: 10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex items-center">
                <Building className="h-6 w-6 text-red-500" />
                <span className="ml-4 text-neutral-300">Head Office: Building A, Business Park, Tech City</span>
              </li>
              <li className="flex items-center">
                <Send className="h-6 w-6 text-red-500" />
                <span className="ml-4 text-neutral-300">PO Box 12345, Tech City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-neutral-800 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-semibold mb-6">Visit Us</h2>
          <iframe
            title="Map of Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13609.33910604587!2d74.30987164786963!3d31.520261402110947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919044d3c6894ed%3A0x94e0e6f2b6cf99a1!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698516407692!5m2!1sen!2s"
            className="w-full h-96 border-0 rounded-md"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
