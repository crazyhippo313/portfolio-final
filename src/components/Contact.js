import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="text-gray-400 bg-gray-700 body-font">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Contact me
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        <a href={"#linkedin"} className="hover:text-white">LinkedIn</a> | <a href={"#email"} className="hover:text-white">Email</a> | <a href={"#github"} className="hover:text-white">Github</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
