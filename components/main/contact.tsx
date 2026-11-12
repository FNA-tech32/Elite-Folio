"use client";

import { useState } from "react";
import { CONTACT_DETAILS } from "@/constants";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    channel: "primary",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        channel: "primary",
        subject: "",
        message: "",
      });
    }, 4500);
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-20 z-[20] relative"
    >
      <div className="text-center max-w-[800px] mb-12">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2">
          Contact Elite Folio
        </h2>
        <p className="text-gray-400 text-lg mt-2">
          Connect with our engineering and design team. Choose between our Primary
          Studio desk or our Alternative priority dispatch channel.
        </p>
      </div>

      {/* Primary & Alternative Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
        {/* Primary Contact Card */}
        <div className="p-8 rounded-2xl border border-[#7042f861] bg-[#03001480] backdrop-blur-md shadow-lg shadow-[#2A0E61]/40 flex flex-col justify-between hover:border-purple-500 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 rounded-full border border-cyan-500/40">
                Primary Channel
              </span>
              <span className="text-sm text-gray-400">🇺🇸 United States</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {CONTACT_DETAILS.primary.channel}
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              {CONTACT_DETAILS.primary.note}
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <span className="text-purple-400 font-semibold w-24 flex-shrink-0">Email:</span>
                <a
                  href={`mailto:${CONTACT_DETAILS.primary.email}`}
                  className="text-gray-200 hover:text-cyan-400 transition underline underline-offset-4"
                >
                  {CONTACT_DETAILS.primary.email}
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-purple-400 font-semibold w-24 flex-shrink-0">Phone:</span>
                <a
                  href={`tel:${CONTACT_DETAILS.primary.phone.replace(/[^+\d]/g, "")}`}
                  className="text-gray-200 hover:text-cyan-400 transition"
                >
                  {CONTACT_DETAILS.primary.phone}
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-purple-400 font-semibold w-24 flex-shrink-0">Location:</span>
                <span className="text-gray-300">
                  {CONTACT_DETAILS.primary.location}
                </span>
              </div>

              <div className="flex items-start">
                <span className="text-purple-400 font-semibold w-24 flex-shrink-0">Hours:</span>
                <span className="text-gray-300">
                  {CONTACT_DETAILS.primary.hours}
                </span>
              </div>

              <div className="flex items-start">
                <span className="text-purple-400 font-semibold w-24 flex-shrink-0">SLA:</span>
                <span className="text-emerald-400 font-medium">
                  {CONTACT_DETAILS.primary.sla}
                </span>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${CONTACT_DETAILS.primary.email}?subject=Inquiry%20from%20Elite%20Folio`}
            className="mt-8 py-3 px-6 rounded-xl button-primary text-center text-white font-medium transition cursor-pointer"
          >
            Email Primary Desk
          </a>
        </div>

        {/* Alternative Contact Card */}
        <div className="p-8 rounded-2xl border border-[#7042f861] bg-[#03001480] backdrop-blur-md shadow-lg shadow-[#2A0E61]/40 flex flex-col justify-between hover:border-cyan-500 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300 bg-purple-950/60 rounded-full border border-purple-500/40">
                Alternative Channel
              </span>
              <span className="text-sm text-gray-400">🇬🇧 United Kingdom</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {CONTACT_DETAILS.alternative.channel}
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              {CONTACT_DETAILS.alternative.note}
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <span className="text-cyan-400 font-semibold w-24 flex-shrink-0">Email:</span>
                <a
                  href={`mailto:${CONTACT_DETAILS.alternative.email}`}
                  className="text-gray-200 hover:text-purple-400 transition underline underline-offset-4"
                >
                  {CONTACT_DETAILS.alternative.email}
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-cyan-400 font-semibold w-24 flex-shrink-0">Phone:</span>
                <a
                  href={`tel:${CONTACT_DETAILS.alternative.phone.replace(/[^+\d]/g, "")}`}
                  className="text-gray-200 hover:text-purple-400 transition"
                >
                  {CONTACT_DETAILS.alternative.phone}
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-cyan-400 font-semibold w-24 flex-shrink-0">Location:</span>
                <span className="text-gray-300">
                  {CONTACT_DETAILS.alternative.location}
                </span>
              </div>

              <div className="flex items-start">
                <span className="text-cyan-400 font-semibold w-24 flex-shrink-0">Hours:</span>
                <span className="text-gray-300">
                  {CONTACT_DETAILS.alternative.hours}
                </span>
              </div>

              <div className="flex items-start">
                <span className="text-cyan-400 font-semibold w-24 flex-shrink-0">SLA:</span>
                <span className="text-emerald-400 font-medium">
                  {CONTACT_DETAILS.alternative.sla}
                </span>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${CONTACT_DETAILS.alternative.email}?subject=Priority%20Inquiry%20from%20Elite%20Folio`}
            className="mt-8 py-3 px-6 rounded-xl border border-cyan-500/60 bg-cyan-950/40 hover:bg-cyan-900/50 text-center text-cyan-200 font-medium transition cursor-pointer"
          >
            Email Alternative Desk
          </a>
        </div>
      </div>

      {/* Interactive Contact Form */}
      <div className="w-full max-w-3xl p-8 md:p-10 rounded-2xl border border-[#7042f861] bg-[#030014a0] backdrop-blur-lg shadow-xl shadow-[#2A0E61]/50">
        <h3 className="text-2xl font-bold text-white mb-2 text-center">
          Send a Direct Message
        </h3>
        <p className="text-gray-400 text-sm text-center mb-8">
          Fill out the form below to transmit a message directly to Elite Folio&apos;s team.
        </p>

        {submitted ? (
          <div className="p-6 rounded-xl bg-purple-950/60 border border-purple-500/60 text-center text-gray-200">
            <h4 className="text-xl font-semibold text-emerald-400 mb-2">
              Transmission Received!
            </h4>
            <p className="text-sm text-gray-300">
              Thank you for reaching out to Elite Folio. Our team will review your message and respond through your selected channel within our target SLA window.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#07011d] border border-purple-900/60 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#07011d] border border-purple-900/60 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Channel Preference
                </label>
                <select
                  value={formData.channel}
                  onChange={(e) =>
                    setFormData({ ...formData, channel: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#07011d] border border-purple-900/60 text-white focus:outline-none focus:border-purple-500 transition cursor-pointer"
                >
                  <option value="primary">Primary Desk (San Francisco HQ)</option>
                  <option value="alternative">Alternative Desk (London Dispatch)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Project Collaboration"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#07011d] border border-purple-900/60 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Share project details, requirements, or inquiries..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-[#07011d] border border-purple-900/60 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl button-primary text-center text-white font-semibold transition cursor-pointer text-base"
            >
              Transmit Message to Elite Folio
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
