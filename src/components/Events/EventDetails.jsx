import React from 'react';

const events = [
  {
    id: 'o2-brixton-2025-09-10',
    dateLabel: 'SEP 10, 2025',
    venue: 'O2 Academy Brixton',
    subtitle: 'With Amaé Leigh and Ezra Cole',
    location: 'LONDON, UK',
    ticketsUrl: '#',
  },
  {
    id: 'danforth-2025-10-03',
    dateLabel: 'OCT 3, 2025',
    venue: 'The Danforth Music Hall',
    subtitle: 'Faith and Flow Tour',
    location: 'TORONTO, CANADA',
    ticketsUrl: '#',
  },
  {
    id: 'fillmore-2025-10-25',
    dateLabel: 'OCT 25, 2025',
    venue: 'The Fillmore',
    subtitle: 'Healing Through Harmony Live',
    location: 'PHILADELPHIA, PA',
    ticketsUrl: '#',
  },
  {
    id: 'belasco-2025-12-06',
    dateLabel: 'DEC 6, 2025',
    venue: 'The Belasco Theater',
    subtitle: 'With Zaria Nkozi',
    location: 'LOS ANGELES, CA',
    ticketsUrl: '#',
  },
];

export default function EventDetails() {
  return (
    <div className="bg-black font-lato text-white px-4 lg:px-24 py-10">
      <div className="max-w-5xl mx-auto w-full">
        {events.map((e, idx) => (
          <div key={e.id} className="w-full">
            {/* separator top (skip for first row) */}
            {idx === 0 ? <div className="border-t border-white/20" /> : null}

            <div className="py-6 flex justify-between items-center gap-4">
              {/* Left: date + venue */}
              <div className=" min-w-0">
                <div className="text-[11px] md:text-xs tracking-wide text-white/80">
                  {e.dateLabel}
                </div>
                <div className="mt-1 text-sm md:text-base font-semibold">
                  {e.venue}
                </div>
                <div className="text-xs md:text-sm text-white/70 mt-1">
                  {e.subtitle}
                </div>
              </div>

              {/* Middle: location */}
              <div className="hidden md:block w-[240px] text-center text-[11px] md:text-xs tracking-wide text-white/80">
                {e.location}
              </div>

              {/* Right: CTA */}
              <div className="w-[120px] flex justify-end">
                <a
                  href={e.ticketsUrl}
                  className="text-[11px] md:text-xs px-4 py-2 border border-white/40 rounded-sm hover:bg-white hover:text-black transition-colors"
                >
                  TICKETS
                </a>
              </div>
            </div>

            {/* separator bottom */}
            <div className="border-t border-white/20" />
          </div>
        ))}

        {/* CTA follow section */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-sm md:text-base text-white/80">
            Get notified when new events are announced in your area
          </p>
          <button className="text-[11px] md:text-xs px-5 py-2 border border-white/40 rounded-sm hover:bg-white hover:text-black transition-colors">
            FOLLOW VINE MUSIC
          </button>
        </div>
      </div>
    </div>
  );
}
