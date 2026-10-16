
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  // Store the information entered in the contact form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  // Track submission progress and errors
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Update form data whenever the user types
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Submit contact information to the Express backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Send data to the MongoDB Contact API
      const response = await fetch(
        "http://localhost:5000/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify({
              firstname: formData.firstName,
              lastname: formData.lastName,
              contactNumber: formData.contactNumber,
              email: formData.email,
              message: formData.message,
          }),
        }
      );

      // Check if the backend successfully saved the data
      if (!response.ok) {
        throw new Error("Failed to save contact information.");
      }

      const result = await response.json();

      console.log("Contact saved successfully:", result);

      // Redirect to the homepage after successful submission
      navigate("/", {
        state: {
          message:
            "Thank you for reaching out! Your message has been submitted successfully.",
        },
      });

    } catch (error) {
      console.error("Error submitting contact form:", error);

      setErrorMessage(
        "Unable to submit your information. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-section">

        <p className="section-label">GET IN TOUCH</p>
        <h1>Contact Me</h1>

        <p className="contact-intro">
          Have a question or want to learn more about my skills and projects?
          Feel free to send me a message.
        </p>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">
            <h2>Let's Connect</h2>

            <p>
              I would be happy to connect with you regarding my projects,
              skills, education, or professional experience.
            </p>

            <div className="contact-detail">
              <h3>Email</h3>
              <p>abellaandria@gmail.com</p>
            </div>

            <div className="contact-detail">
              <h3>Phone</h3>
              <p>647-778-1196</p>
            </div>

            <div className="contact-detail">
              <h3>Location</h3>
              <p>Ontario, Canada</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Me a Message</h2>

            <div className="form-row">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Display an error if submission fails */}
            {errorMessage && (
              <p role="alert" style={{ color: "crimson" }}>
                {errorMessage}
              </p>
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </section>
    </main>
  );
}

export default Contact;
