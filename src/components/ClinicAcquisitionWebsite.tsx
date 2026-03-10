import React from 'react';

const ClinicAcquisitionWebsite = () => {
    return (
        <div className="bg-slate-950 text-white p-4">
            {/* Hero Section */}
            <div className="hero">
                <h1 className="text-3xl font-bold mb-4">Welcome to Our Clinic Acquisition Service</h1>
                <div className="flex space-x-4">
                    <button className="bg-cyan-400 text-slate-950 p-2 rounded">CTA 1</button>
                    <button className="bg-cyan-400 text-slate-950 p-2 rounded">CTA 2</button>
                    <button className="bg-cyan-400 text-slate-950 p-2 rounded">CTA 3</button>
                </div>
            </div>

            {/* Four Pillars of Credibility */}
            <div className="pillars my-8">
                <h2 className="text-2xl font-bold">Our Four Pillars</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 p-4 rounded">Pillar 1</div>
                    <div className="bg-white/10 p-4 rounded">Pillar 2</div>
                    <div className="bg-white/10 p-4 rounded">Pillar 3</div>
                    <div className="bg-white/10 p-4 rounded">Pillar 4</div>
                </div>
            </div>

            {/* Clinic Acquisition Funnel */}
            <div className="funnel my-8">
                <h2 className="text-2xl font-bold">Clinic Acquisition Funnel</h2>
                <ol className="list-decimal pl-5">
                    <li>Step 1: Awareness</li>
                    <li>Step 2: Interest</li>
                    <li>Step 3: Decision</li>
                    <li>Step 4: Action</li>
                    <li>Step 5: Follow-up</li>
                </ol>
            </div>

            {/* Revenue Example Table */}
            <div className="revenue-table my-8">
                <h2 className="text-2xl font-bold">Revenue Examples</h2>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-white/10">Patients</th>
                            <th className="border border-white/10">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-white/10">20</td>
                            <td className="border border-white/10">$6k</td>
                        </tr>
                        <tr>
                            <td className="border border-white/10">50</td>
                            <td className="border border-white/10">$15k</td>
                        </tr>
                        <tr>
                            <td className="border border-white/10">100</td>
                            <td className="border border-white/10">$30k</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Four Marketing Channels */}
            <div className="marketing-channels my-8">
                <h2 className="text-2xl font-bold">Marketing Channels</h2>
                <ul className="list-disc pl-5">
                    <li>Channel 1</li>
                    <li>Channel 2</li>
                    <li>Channel 3</li>
                    <li>Channel 4</li>
                </ul>
            </div>

            {/* Lead Magnets Section */}
            <div className="lead-magnets my-8">
                <h2 className="text-2xl font-bold">Lead Magnets</h2>
                <ul className="list-disc pl-5">
                    <li>Lead Magnet 1</li>
                    <li>Lead Magnet 2</li>
                    <li>Lead Magnet 3</li>
                    <li>Lead Magnet 4</li>
                </ul>
            </div>

            {/* 5-email Nurture Sequence */}
            <div className="nurture-sequence my-8">
                <h2 className="text-2xl font-bold">5-Email Nurture Sequence</h2>
                <ol className="list-decimal pl-5">
                    <li>Email 1</li>
                    <li>Email 2</li>
                    <li>Email 3</li>
                    <li>Email 4</li>
                    <li>Email 5</li>
                </ol>
            </div>

            {/* Provider Messaging Examples */}
            <div className="provider-messaging my-8">
                <h2 className="text-2xl font-bold">Provider Messaging Examples</h2>
                <p>Example Message 1</p>
                <p>Example Message 2</p>
            </div>

            {/* Contact Form */}
            <div className="contact-form my-8">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name" className="border border-white/10 p-2 mb-2 w-full" />
                    <input type="text" placeholder="Clinic" className="border border-white/10 p-2 mb-2 w-full" />
                    <input type="email" placeholder="Email" className="border border-white/10 p-2 mb-2 w-full" />
                    <input type="tel" placeholder="Phone" className="border border-white/10 p-2 mb-2 w-full" />
                    <select className="border border-white/10 mb-2 w-full">
                        <option>Type</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                    </select>
                    <textarea placeholder="Message" className="border border-white/10 p-2 mb-2 w-full"></textarea>
                    <button type="submit" className="bg-cyan-400 text-slate-950 p-2 rounded">Submit</button>
                </form>
            </div>

            {/* Authority Content Topics */}
            <div className="authority-content my-8">
                <h2 className="text-2xl font-bold">Authority Content Topics</h2>
                <p>Topic 1</p>
                <p>Topic 2</p>
            </div>

            {/* Clinic Directories Section */}
            <div className="clinic-directories my-8">
                <h2 className="text-2xl font-bold">Clinic Directories</h2>
                <p>Directory Link 1</p>
                <p>Directory Link 2</p>
            </div>

            {/* Footer CTA */}
            <div className="footer-cta my-8">
                <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
                <button className="bg-cyan-400 text-slate-950 p-2 rounded">Get Started</button>
            </div>
        </div>
    );
};

export default ClinicAcquisitionWebsite;