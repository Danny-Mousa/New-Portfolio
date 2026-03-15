"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import SectionTitle from "./SectionTitle";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .refine(
      (val) => val.trim().split(/\s+/).length >= 2,
      "Please enter your full name (first and last name)",
    ),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactSection() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    console.log("onSubmit called with data:", data);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 200)
        toast.success("Message sent successfully!", {
          position: "top-right",
          description: "Thanks for your message, will be in touch, soon!",
        });
      else
        toast.error("Failed to send message. Please try again later.", {
          position: "top-right",
          description: "Thanks for your patience!",
        });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        description: "Thanks for your patience!",
      });
    } finally {
      reset();
    }
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <SectionTitle title="Contact" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 md:space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-secondary  border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all text-sm md:text-base"
              placeholder="John Doe"
              // autoComplete="new-password"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all text-sm md:text-base"
              placeholder="john@example.com"
              autoComplete="nonnnew-password"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={6}
            className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all resize-none text-sm md:text-base"
            placeholder="Write your message here..."
          />
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="flex items-center justify-center gap-2 w-full md:w-[206px] px-6 md:px-8 py-3 md:py-3.5 bg-accent text-accent-foreground rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 hover:cursor-pointer hover:opacity-80 active:opacity-60 transition-all duration-200 text-sm md:text-base"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin w-6 h-6 text-accent-foreground" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
