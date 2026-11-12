import React from 'react';

function Card({ icon, title, subtitle }) {
  return (
    <div className="rounded-lg border border-white/20 bg-white/5 p-6 text-white flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-sm md:text-base font-semibold text-center">{title}</div>
      <div className="text-xs md:text-sm text-center text-white/80">{subtitle}</div>
    </div>
  );
}

export default function ContactDetails() {
  return (
    <div className="aboutus px-4 lg:px-24 py-10 font-lato">
      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/90">
              <path d="M3 5a2 2 0 0 1 2-2h2.2a2 2 0 0 1 1.94 1.515l.53 2.121a2 2 0 0 1-.51 1.894l-1.22 1.22a14.5 14.5 0 0 0 5.9 5.9l1.22-1.22a2 2 0 0 1 1.894-.51l2.121.53A2 2 0 0 1 20 18.8V21a2 2 0 0 1-2 2h-.5C9.044 23 1 14.956 1 6.5V6a1 1 0 0 1 .293-.707L2.586 3.999A2 2 0 0 1 3 3.5V5Z"/>
            </svg>
          }
          title="Call us today"
          subtitle="(+44) 7376 600 554"
        />
        <Card
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/90">
              <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v.26l-9.75 5.85-9.75-5.85v-.26Zm0 3.14v7.36A2.25 2.25 0 0 0 4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V9.89l-9.3 5.58a2.25 2.25 0 0 1-2.4 0l-9.3-5.58Z"/>
            </svg>
          }
          title="Send an Email"
          subtitle="info@vinemusic.com"
        />
        <Card
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/90">
              <path d="M12 2.25c-4.28 0-7.75 3.47-7.75 7.75 0 5.812 6.12 10.315 7.01 10.94a1.25 1.25 0 0 0 1.46 0c.89-.625 7.02-5.128 7.02-10.94 0-4.28-3.47-7.75-7.75-7.75Zm0 10.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
            </svg>
          }
          title="Visit our HQ"
          subtitle="Leicestershire, United Kingdom"
        />
      </div>

      {/* Map + form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Map */}
        <div className="rounded-lg overflow-hidden border border-white/20 bg-white/5">
          <iframe
            title="Vine Music HQ Map"
            src="https://www.google.com/maps?q=Leicester%2C%20United%20Kingdom&output=embed"
            className="w-full h-[320px] md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white/5 border border-white/20 rounded-md p-3 text-white placeholder-white/60 outline-none"
          />
          <input
            type="email"
            placeholder="E-mail Address"
            className="w-full bg-white/5 border border-white/20 rounded-md p-3 text-white placeholder-white/60 outline-none"
          />
          <textarea
            rows="8"
            placeholder="Message"
            className="w-full bg-white/5 border border-white/20 rounded-md p-3 text-white placeholder-white/60 outline-none"
          />
          <button
            type="button"
            className="w-full md:w-auto px-6 py-3 bg-white text-[#4B0082] rounded-md font-semibold hover:bg-white/90 transition-colors"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
