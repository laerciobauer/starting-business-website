"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e?.target || {};
    if (name) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();

    if (
      !formData?.name ||
      !formData?.email ||
      !formData?.subject ||
      !formData?.message
    ) {
      toast({
        title: "Required Fields Missing",
        description:
          "Please fill in all required fields (Name, Email, Subject, Message).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto body
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
        Company: ${formData.company || "Not provided"}
        Subject: ${formData.subject}
        Message: ${formData.message}`.trim();

      // Open default email client
      const mailtoLink = `mailto:laercio@brazil.tm?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      // Show success message
      setTimeout(() => {
        toast({
          title: "Opening Email Client",
          description:
            "Your default email application will open. Please send the email to complete your message.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description:
          "There was a problem. Please email us directly at laercio@brazil.tm",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-gray-900 font-medium">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData?.name || ""}
            onChange={handleChange}
            required
            className="mt-1"
            placeholder="Your full name"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-900 font-medium">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData?.email || ""}
            onChange={handleChange}
            required
            className="mt-1"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone" className="text-gray-900 font-medium">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData?.phone || ""}
            onChange={handleChange}
            className="mt-1"
            placeholder="+55 11 99999-9999"
          />
        </div>

        <div>
          <Label htmlFor="company" className="text-gray-900 font-medium">
            Company Name
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData?.company || ""}
            onChange={handleChange}
            className="mt-1"
            placeholder="Your company name (optional)"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="subject" className="text-gray-900 font-medium">
          Subject *
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData?.subject || ""}
          onChange={handleChange}
          required
          className="mt-1"
          placeholder="What can we help you with?"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-gray-900 font-medium">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData?.message || ""}
          onChange={handleChange}
          required
          rows={6}
          className="mt-1"
          placeholder="Tell us about your business plans and how we can help you..."
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          * Required fields. We'll respond within 24 hours.
        </p>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 min-w-32"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Opening...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
