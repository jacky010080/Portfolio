'use client';

import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "/emailjs.config.js";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const { serviceID, templateID, publicKey } = emailjsConfig;

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  };

  const sendEmail = (templateParams) => {
    try {
      emailjs.send(serviceID, templateID, templateParams, publicKey);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (form.name === "") {
      Swal.fire({
        title: "Please enter your name",
        icon: "error",
        confirmButtonText: "continue",
      })
    } else if (form.email === "") {
      Swal.fire({
        title: "Please enter your e-mail",
        icon: "error",
        confirmButtonText: "continue",
      })
    } else if (form.message === "") {
      Swal.fire({
        title: "Please enter your message",
        icon: "error",
        confirmButtonText: "continue",
      })
    } else {
      try {
        await sendEmail(form);
        await Swal.fire({
          text: `Hello ${form.name}, I have received your message!`,
          icon: "success",
          confirmButtonText: "continue",
        })
        setForm({
          name: "",
          email: "",
          message: "",
        })
      } catch (e) {
        Swal.fire({
          title: "Oops! Some bugs happened, please try again later",
          text: e,
          icon: "error",
          confirmButtonText: "continue",
        })
      }
    }
  };

  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="Name" onChange={handleChange} value={form.name} />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" onChange={handleChange} value={form.email} />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea id="message" placeholder="Type Your Message Here." onChange={handleChange} value={form.message} />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]" onClick={handleClick}>
        Let&apos;s Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  )
}