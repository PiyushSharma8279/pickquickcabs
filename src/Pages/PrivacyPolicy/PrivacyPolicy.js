import React,{useEffect} from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import useSEO from '../../Hooks/UseSeo';

function PrivacyPolicy() {
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
       useSEO({
                  title: "Privacy and Policy",
                  description:
                    "Enjoy smooth travel with our Outstation Cab/Taxi Service in Delhi. Comfortable rides, quick booking & great prices for every journey. Book Now.",
                  url: "https://www.pickquickcabs.com/privacy-policy",
                });
    
    return (
        <>
            <Header />
            <div className="mt-36 lg:p-10">
                <h2 className=" p-2 text-2xl font-bold">Privacy Policy</h2>
                <p className="p-2">This Privacy Policy explains how Pick Quick Cabs collects, uses, stores, and protects your personal information when you visit our website or use our cab service.</p>
                <h2 className="p-2 text-2xl font-bold">Information We Collect</h2>
                <p className="px-2">We may collect the following personal information from users:</p>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                        Full name, email address, phone number, and postal address
                    </li>
                    <li>
                        Booking details such as pick-up location, drop-off location, date, and time
                    </li>
                    <li>
                        Payment and transaction data
                    </li>
                    <li>
                        Device information including IP address, browser type, and operating system
                    </li>
                    <li>Interaction data such as pages visited and service usage patterns</li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">How We Use Your Information</h2>
                <p className="px-2">We use your data for the following purposes:</p>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>To process and confirm your cab bookings</li>
                    <li>To communicate booking details, updates, and customer support</li>
                    <li>To improve our website, services, and user experience</li>
                    <li>To ensure safety and compliance with legal obligations</li>
                    <li>To send promotional offers and marketing communications (only if you opt-in)</li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Sharing and Disclosure of Information</h2>
                <p className="px-2">Your personal information is shared only with:</p>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>Third-party service providers who facilitate cab bookings and payments</li>
                    <li>Law enforcement or government authorities if required by law or court orders</li>
                    <li>Our partners for purposes related to service delivery (e.g., drivers)</li>
                </ul>
                <p className="px-2">We do not sell, rent, or lease your personal information to any third party.</p>
                <h2 className="p-2 text-2xl font-bold">Data Securityt</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                        We take reasonable technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure. This includes secure payment gateways, encryption of sensitive data, and access controls.
                    </li>
                    <li>
                        However, no method of internet transmission or electronic storage is 100% secure. We cannot guarantee absolute security but strive to protect your information to the best of our ability.
                    </li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Data Retention</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                        We retain your personal information for as long as necessary to provide services, comply with legal requirements, resolve disputes, and enforce agreements.
                    </li>
                    <li>Once data is no longer needed, it is securely deleted or anonymized.</li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Your Rights</h2>
                <p className="px-2">Your Rights:</p>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                       Access the personal data we hold about you
                    </li>
                    <li>Request correction or deletion of inaccurate or outdated data</li>
                    <li>Opt out of receiving marketing communications</li>
                    <li>Withdraw consent where applicable</li>
                    <li>Lodge a complaint with a data protection authority if you believe your data rights have been violated.</li>
                </ul>
                <p>To exercise these rights, please contact our support team at help@pickquickcabs.com or call +91 8447433852.</p>
                <h2 className="p-2 text-2xl font-bold">Cookies and Tracking Technologies</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                       We use cookies and similar technologies to enhance user experience, analyze website traffic, and personalize content.
                    </li>
                    <li>You can control cookie preferences through your browser settings. Disabling cookies may affect site functionality.</li>
              
                </ul>
                <h2 className="p-2 text-2xl font-bold">Children’s Privacy</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                   <li>Our services are not directed to children under 18 years. We do not knowingly collect personal data from minors. If we learn that we have inadvertently done so, we will delete that information promptly.</li>

                </ul>
                <h2 className="p-2 text-2xl font-bold">Changes to This Privacy Policy</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>We may update this policy occasionally to reflect changes in our practices or legal requirements.
The updated policy will be posted on this page with an effective date. We encourage users to review it periodically.
</li>
                </ul>

                <h2 className="p-2 text-2xl font-bold">Contact Us</h2>
                <p className="p-2">If you have questions about this Privacy Policy or your data, please contact:</p>
                <h2 className="p-1 pt-6 text-md font-bold">Phone: +91 8447433852</h2>
                
                <h2 className="p-1 pt-6 text-md font-bold">Effective Date: October 2025</h2>
                <h2 className="p-1 text-md font-bold">Contact: help@pickquickcabs.com | +91 8447433852</h2>
                <h2 className="p-1 text-md font-bold">Jurisdiction: Courts of Delhi, India</h2>

            </div>
            <Footer />

        </>
    )
}

export default PrivacyPolicy
