import React from "react";
import Link from "next/link";
import Image from "next/image";


const EmailSection = () => {
    return (
        <main className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative" id="contact">
            <div className="z-10">
                <h5 className="text-4xl font-bold text-white my-2">Lets Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
                    I am currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
                </p>
                <h4 className="pb-3 mt-6">Lets get in touch!</h4>
            </div>
        </main>
    );
};

export default EmailSection;
