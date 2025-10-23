import React from "react";
import { CALENDLY_URL } from "../constants";

export function Booking() {
  return (
    <section id="book" className="mt-12 rounded-3xl p-6 md:p-12 bg-gradient-to-r from-indigo-50 to-white shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Free 30‑minute consultation</h2>
          <p className="mt-4 text-gray-700">
            No obligation — we’ll talk about your goals, whether hypnotherapy is likely to help, and the
            best next steps. Appointments are confidential and available in the evenings for busy professionals.
          </p>

          <ul className="mt-6 text-gray-700 space-y-2">
            <li>• 30 minutes, remote by video or phone</li>
            <li>• We'll define clear next steps and expectations</li>
            <li>• You can ask about single-session or short-course options</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <div className="w-full h-[540px] md:h-[480px]">
            <iframe
              title="Book a free 30-minute consultation with Matthias Bouquet"
              src={CALENDLY_URL}
              className="w-full h-full rounded-xl"
              frameBorder="0"
            />
          </div>

          <p className="mt-3 text-xs text-gray-500">Questions? Email me at <a href="mailto:matthias@authenticself.help" className="underline">matthias@authenticself.help</a>.</p>
        </div>
      </div>
    </section>
  );
}


