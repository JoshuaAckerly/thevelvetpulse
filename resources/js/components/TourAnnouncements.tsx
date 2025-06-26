import React from 'react';

const TourAnnouncements: React.FC = () => (
    <div className="animate-in fade-in slide-in-from-bottom duration-700">
        {/* Content */}

        <section className="relative z-10 mx-auto grid grid-cols-1 gap-2 p-2 text-center text-white md:grid-cols-2 md:gap-8">
            <div className="center-items flex flex-col">
                <h2 className="text-xl font-semibold">TOUR</h2>
                <p>New Orleans, LA: 10/13/25</p>
                <p>Austin, TX: 10/18/25</p>
                <p>Brooklyn, NY: 11/03/25</p>
            </div>
            <div className="space-y-10 md:text-right">
                <h2 className="text-xl font-semibold">Latest Announcements</h2>
                <p>New EP drops this Friday!</p>
                <p>Merch restock coming soon.</p>
                <p>Thank you for 10K followers!</p>
            </div>
        </section>
    </div>
);

export default TourAnnouncements;
