import React,{useEffect} from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import useSEO from '../../Hooks/UseSeo';

function TermsAndCondition() {
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
     useSEO({
                      title: "Terms and Conditions",
                      description:
                        "Enjoy smooth travel with our Outstation Cab/Taxi Service in Delhi. Comfortable rides, quick booking & great prices for every journey. Book Now.",
                      url: "https://www.pickquickcabs.com/terms-and-conditions",
                    });
    return (
        <>
            <Header />
            <div className="mt-36 lg:p-10">
                <h2 className=" p-2 text-2xl font-bold">Terms and Conditions</h2>
                <p className="p-2">This document is an electronic record under the Information Technology Act, 2000 and related rules. It does not require any physical or digital signature. It is published following Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules,
                    2011, which mandates the publication of website usage and service terms for pickquickcabs.com.</p>
                <h2 className="p-2 text-2xl font-bold">Site and Content</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                        The content on this website is provided for general information and booking purposes. It is subject to change without prior notice.
                    </li>
                    <li>
                        Pick Quick Cabs makes no warranties about the accuracy, completeness, or suitability of the information and materials provided.
                    </li>
                    <li>
                        Users must ensure any service or information accessed through this site meets their specific requirements.
                    </li>
                    <li>
                        Usage of the website is entirely at the user’s risk.
                    </li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Ownership and Intellectual Property</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                        All materials, including design, graphics, and layout, are owned by or licensed to Pick Quick Cabs, Delhi, India.
                    </li>
                    <li>
                        Unauthorised copying, reproduction, or distribution is strictly prohibited.
                    </li>
                    <li>
                        Third party trademarks displayed are duly acknowledged.
                    </li>
                    <li>
                        Linking to this website from another site requires prior written consent from Pick Quick Cabs.
                    </li>
                    <li>
                        Any misuse, unauthorised use, or tampering may lead to legal action.
                    </li>
                    <li>
                        All disputes are subject to the exclusive jurisdiction of Delhi, India.
                    </li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Information Collection and Usage</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                        When you visit our website or make a booking, we collect information including:
                        <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                            <li>Name, email address, phone number, and postal address</li>
                            <li>Details provided during booking or communication</li>
                        </ul>
                    </li>
                    <li>
                        This information is used to process bookings, respond to inquiries, and improve customer experience.
                    </li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">User Conduct and Content</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                        Users must not post or transmit any defamatory, obscene, unlawful, or offensive material.
                    </li>
                    <li>
                        Pick Quick Cabs reserves the right to remove such content without notice.
                    </li>
                    <li>
                        We fully cooperate with law enforcement agencies to share user details if required by law.
                    </li>

                </ul>
                <h2 className="p-2 text-2xl font-bold">Bookings and Payments</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                        Bookings and Payments
                    </li>
                    <li>Payments can be made via UPI, net banking, or other listed options.</li>
                    <li>Pick Quick Cabs uses PayU’s secure, SSL encrypted gateway certified by VeriSign for payment processing.</li>
                    <li>Your card details remain private and are not shared.</li>
                    <li>A booking confirmation will be sent by email once payment is processed. Displaying the booking confirmation to the driver is mandatory.</li>
                    <li> Presenting your booking confirmation implies acceptance of all terms and conditions.</li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Duty Slip and Travel Rules</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                        Customers must fill the duty slip; failure to do so will void future claims.
                    </li>
                    <li>Distances are calculated from pick up to drop off points.</li>
                    <li>Parking, toll, and state entry fees are to be paid directly by the customer.</li>
                    <li>Car air conditioning will not function on hilly routes or when the vehicle is stationary.</li>
                    <li> Vehicle models are subject to availability.</li>
                    <li>Local and transfer rides are valid only within city limits.</li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Booking Changes and No Show Policy</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>
                        Booking amendments are allowed only if requested at least 24 hours before pick up.
                    </li>
                    <li>No modifications or refunds are permitted within 24 hours of travel.</li>
                    <li>Delays beyond 10 minutes from the pick up time will attract waiting charges.</li>
                    <li>If a driver waits beyond 30 minutes without customer communication, the booking will be marked as a no show, and the fare forfeited.</li>
                </ul>
                 <h2 className="p-2 text-2xl font-bold">Travel Terms</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>All bookings are on a calendar day basis (12:00 Am to 11:59 Pm).</li>
                    <li>Outstation bookings cannot be converted for local travel.</li>
                    <li>For one way rides, tolls and return charges are included as applicable.</li>
                    <li>Drivers may refuse out of city bookings under local rental plans.</li>

                </ul>
                 <h2 className="p-2 text-2xl font-bold">Cancellation Policy</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>Cancellations made 24 hours before pick up will receive a full refund.</li>
                    <li>Cancellations made within 24 hours of pick up will not be refunded.</li>
                    <li>Refunds will be issued by online transfer within 7 business days.</li>
                    <li>Cash refunds are not available.</li>
                </ul>
                
                 <h2 className="p-2 text-2xl font-bold">Payment and Security</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>All payments made on pickquickcabs.com are fully secure.</li>
                    <li>Customers can also pay drivers directly for any additional charges (parking, waiting, tolls, etc.)using cash or UPI.</li>
                    <li>Extra charges, if any, must be settled directly with the driver.</li>
                </ul>
                 <h2 className="p-2 text-2xl font-bold">Driver and Vehicle Details</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>Driver and vehicle information will be shared one hour before pick up via SMS and email.</li>
                    <li>In case of non receipt of details, customers must contact our support team at +91 8447433852.</li>
                    <li>Any disputes regarding service or charges should immediately be reported to our support staff with your booking ID.</li>

                </ul>
                 <h2 className="p-2 text-2xl font-bold">Nature of Service and Liability</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>Pick Quick Cabs acts only as a booking intermediary between customers and third party taxi service providers.</li>
                    <li>We do not own vehicles or employ drivers directly.</li>
                    <li> The service quality and safety of vehicles are the sole responsibility of third party providers.</li>
                    <li>Pick Quick Cabs is not liable for any delay, accident, damage, or misconduct by drivers.</li>
                    <li>In cases of driver misbehaviour, contact our support line immediately at +91 8447433852.</li>
                    <li>We are not responsible for delays caused by traffic, weather, or other events beyond our control.</li>
                    <li>Our total liability for any claim shall not exceed Rs. 400 (Rupees Four Hundred only) or the booking amount, whichever is lower.</li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Refunds and Missed Connections</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li> Pick Quick Cabs shall not be held liable if a customer misses a train, flight, or bus due to delays.</li>
                    <li>Customers must arrange alternative transportation at their own cost if the cab fails to reach on time.</li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Termination and Indemnity</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>Pick Quick Cabs reserves the right to cancel bookings at any time without providing a reason.</li>
                    <li>Customers agree to indemnify Pick Quick Cabs from any loss, claim, or damage arising due to misuse of our services or violation of terms.</li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Force Majeure</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>Pick Quick Cabs shall not be responsible for service interruption caused by natural disasters, strikes, political unrest, technical failures, or any other situation beyond our reasonable control.</li>
                </ul>
                <h2 className="p-2 text-2xl font-bold">Support and Resolution</h2>
                <ul className="list-disc pl-8 p-2 space-y-2 text-gray-700">
                    <li>Pick Quick Cabs aims to respond to all grievances promptly based on severity.</li>
                    <li>Response time may vary, and no damages shall be claimed for dissatisfaction with issue resolution.</li>
                </ul>
                <h2 className="p-1 pt-6 text-md font-bold">Effective Date: October 2025</h2>
                <h2 className="p-1 text-md font-bold">Contact: help@pickquickcabs.com | +91 8447433852</h2>
                <h2 className="p-1 text-md font-bold">Jurisdiction: Courts of Delhi, India</h2>

            </div>
            <Footer />

        </>
    )
}

export default TermsAndCondition
