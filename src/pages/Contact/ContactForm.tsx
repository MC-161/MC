const ContactForm: React.FC = () => {
  return (
    <div className=" contact p-8 rounded-lg shadow-lg w-[80%] btf">
      <h2 className="text-white text-2xl text-center font-serif mb-4">Contact Me</h2>
      <form className="flex flex-col">
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-[rgb(126,225,102)] border border-transparent"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-[rgb(126,225,102)] border border-transparent"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-[rgb(126,225,102)] border border-transparent"
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            required
          />
        </div>
        <button
          className="bg-[rgb(126,225,102)] text-black py-2 px-6 rounded-md hover:bg-[rgb(100,190,80)] transition-colors duration-300 font-serif border-1"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
