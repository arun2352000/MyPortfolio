import React, { useState, useCallback } from "react";

const ContactForm = () => {
    const config = {
        email: "arunachalam2352000@gmail.com",
        phone: "+91 94458 05362",
        name: "Arunachalam",
        address: "Chennai, Tamil Nadu, India",
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = useCallback((e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }, []);

    const validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const validatePhone = (phone) => {
        const pattern = /^\+?[1-9]\d{1,14}$/;
        return pattern.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setResponseMessage("Invalid email address. Please enter a valid email.");
            return;
        }
        if (!validatePhone(formData.phone)) {
            setResponseMessage("Invalid phone number. Please enter a valid phone number.");
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch("https://myportfolio-backend-yv2n.onrender.com/api/contact/createQuery",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            if (response.ok) {
                setResponseMessage("Form submitted successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setResponseMessage("Failed to submit the form. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponseMessage("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
            setTimeout(() => setResponseMessage(""), 5000);
        }
    };

    return (
        <section id="contact" className="bg-tertiary px-5 py-10 text-black">
            <div className="flex flex-col justify-center px-5 py-20 md:py-10">
                <h1 className="text-4xl text-center border-secondary font-bold">Contact</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-around px-10 py-5 text-2xl">
                <div className="md:w-1/3 md:pr-8 py-11">
                    <p className="pb-5 font-bold font-text">If you want to discuss more in detail, please contact me</p>
                    <p id="details" className="py-2 font-bold font-text">
                        <span className="font-bold">Name :</span> {config.name}
                    </p>
                    <p className="py-2 font-bold font-text">
                        <span className="font-bold">Email :</span> {config.email}
                    </p>
                    <p className="py-2 font-bold font-text">
                        <span className="font-bold">Phone :</span> {config.phone}
                    </p>
                    <p className="py-2 font-bold font-text">
                        <span className="font-bold">Address :</span> {config.address}
                    </p>
                </div>

                <div id="form" className="md:w-1/3 md:pr-8 p-5 px-5 bg-secondary rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-6 text-center">Mail ME</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-black">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-tertiary text-black font-semibold rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition duration-300"
                        >
                            {isLoading ? "Submitting..." : "Send Message"}
                        </button>
                    </form>
                    {responseMessage && (
                        <p className={`mt-4 text-center ${responseMessage.includes("successfully") ? "text-green-700" : "text-red-500"}`}>
                            {responseMessage}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
