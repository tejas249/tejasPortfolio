import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="relative bg-[#0d0d0d] text-white py-20 px-6 sm:px-10 border-t border-gray-800">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-semibold mb-10 bg-gradient-to-bl from-stone-50 to-slate-900 bg-clip-text text-transparent hover:text-white"
      >
        Get In Touch
      </motion.h2>

      {/* Contact Card */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.9 }}
        className="max-w-xl mx-auto bg-[#121212]/70 backdrop-blur-md border border-gray-800 rounded-2xl shadow-lg p-8 text-center  hover:shadow-white hover:shadow-lg cursor-pointer"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Address */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center gap-2 my-4"
          >
            <FiMapPin className="text-2xl text-gray-400" />
            <p className="text-gray-400 text-sm sm:text-base">{CONTACT.address}</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center gap-2 my-4"
          >
            <FiPhone className="text-2xl text-gray-400" />
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              {CONTACT.phoneNo}
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center gap-2 my-4"
          >
            <FiMail className="text-2xl text-gray-400" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-gray-300 border-b border-gray-600 hover:border-white hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              {CONTACT.email}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black opacity-40" />
    </section>
  );
};

export default Contact;
