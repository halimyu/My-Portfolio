import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover, github } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Using EmailJS to send emails directly from the contact form
    emailjs
      .send(
        'service_xxxxxxx', // Replace with your actual EmailJS Service ID
        'template_xxxxxxx', // Replace with your actual EmailJS Template ID
        {
          from_name: form.name,
          to_name: 'Yusuf Halim',
          from_email: form.email,
          to_email: 'hallimyussuf@gmail.com',
          message: form.message,
        },
        'your_public_key_here' // Replace with your actual EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you for your message! I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>



        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-white/10 py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border border-skyBlue/30 font-medium focus:border-skyBlue/50 focus:shadow-md transition-all"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4
            gap-3 sm:text-[20px] text-[16px] text-timberWolf
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px]
            w-[100px] h-[45px] rounded-[10px] bg-night
            hover:bg-battleGray hover:text-eerieBlack
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px]
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>

        <div className="flex justify-center mt-10 gap-5">
          <a
            href="https://linkedin.com/in/yusuf-halim"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex justify-center items-center border border-taupe hover:border-white hover:bg-night transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#d4d4d8">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="https://github.com/halimyu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex justify-center items-center border border-taupe hover:border-white hover:bg-night transition-all duration-300"
          >
            <img src={github} alt="GitHub" className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
