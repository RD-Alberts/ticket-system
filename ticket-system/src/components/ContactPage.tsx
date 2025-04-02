export const ContactPage = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 text-gray-800">
          <h1 className="text-3xl font-bold">Contact Us</h1>
    
          <p>
            If you have any questions, concerns, or feedback, feel free to reach out to us using the information below:
          </p>
    
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@example.com" className="text-blue-600 underline">
                support@example.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +31 20 123 4567
            </li>
            <li>
              <strong>Address:</strong> Keizersgracht 123, 1015 CJ Amsterdam, Netherlands
            </li>
          </ul>
    
          <p>
            We typically respond within 1–2 business days.
          </p>
        </div>
      );  
};