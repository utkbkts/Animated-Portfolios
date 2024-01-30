import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <div id="Contacts" className="w-full h-full mt-[20%] mb-12 p-4">
      <form action="" className="flex lg:flex-row flex-col  gap-4">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className="flex-1"
        >
          <h1 className="h1 border-b border-b-gray-300">Contact Us</h1>
        </motion.div>
        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-center text-2xl">
            FİTNESS <span className="text-green-500 font-bold">-W</span>
          </h1>
          <motion.input
            placeholder="Name"
            className="input-area"
            type="text"
            name="name"
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5,delay:1 }}
            whileInView={{ opacity: 1 }}
          />
          <motion.input
            placeholder="Email"
            className="input-area"
            type="email"
            name="email"
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5,delay:1.5 }}
            whileInView={{ opacity: 1 }}
          />
          <motion.textarea
            placeholder="Message"
            className="input-area"
            name="message"
            cols="30"
            rows="10"
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5,delay:2 }}
            whileInView={{ opacity: 1 }}
          ></motion.textarea>
          <motion.div   viewport={{ once: true }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5,delay:2.5 }}
            whileInView={{ opacity: 1 }} className="flex items-center gap-4 justify-end">
            <button className="message-btn">CANCEL</button>
            <button className="message-btn">SEND</button>
          </motion.div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
