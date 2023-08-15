"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {

    const { ref } = useSectionInView('Contact');


  return (
    <motion.section id="contact" ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1,
    }}>
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">Please contact me directly at <a className="underline"
        href="mailto:devturv@icloud.com">devturv@icloud.com</a> or through this form.
        </p>
        <form className="mt-10 flex flex-col dark:text-black" 
        action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if(error) {
                toast.error(error)
                return;
            }
            toast.success("Email sent successfully!");
        }}>
            <input name="senderEmail" className="px-4 h-14 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your email" type="email" required maxLength={5000} />
            <textarea name="message" className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder='Your message' required maxLength={5000}/>
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
