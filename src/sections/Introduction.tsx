"use client"
import dynamic from "next/dynamic";
const UseAnimations = dynamic(() => import("react-useanimations"), { ssr: false });
import infinity from 'react-useanimations/lib/infinity';


export default function Introduction() {
    return (
        <section id="introduction" className=" flex justify-center items-center">
            <div className="md:container text-center">
                <div className="text-center text-lime-400">
                    <span className="border border-lime-600 py-2 px-2 gap-2 bg-fill rounded-full align-middle inline-flex">
                        <UseAnimations animation={infinity} className="" size={26} fillColor='white' strokeColor="lime" /> Welcome to our website
                    </span>
                </div>
                <div className="text-xl md:text-4xl lg:text-6xl mt-10 font-medium text-center">
                    Registration Fee:
                    
                    Competitors: Pay the amount specified earlier based on your selected game and format.
                    General Entry: ₹60 per attendee (includes access to DJ performances, Free Play zones, and casual gaming).
                    🔹 Payment Methods:
                    UPI ID: dakshdagar103@oksbi
                    Cash Payment: Available at the registration desk before the event starts.
                    Bank Transfer:
                    Account Holder Name: Daksh Dagar
                    Account Number: 42018325042
                    IFSC Code: SBIN0016445
                    Bank Name: State Bank of India - New Railway Road, Gurgaon
                </div>
            </div>
        </section>
    );
}
