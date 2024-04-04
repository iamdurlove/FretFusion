import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";

const Home = () => {
    const { auth } = usePage().props;
    console.log(auth);
    return (
        <AppLayout title="Home">
            <div className="container mx-auto">
                <div classsName="flex justify-center items-center h-screen">
                    <h1 className="text-4xl font-bold text-center">
                        Welcome to FretFusion,{" "}
                        {auth.user ? auth.user.name : "Guest"}
                    </h1>
                </div>
            </div>
            <div className="container mx-auto"></div>
            <section id="about-us" className="py-8">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vitae elit libero, a pharetra augue. Sed non mauris
                    vitae erat consequat auctor eu in elit. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos.
                </p>
            </section>
            <section id="our-products" className="py-8">
                <h2 className="text-2xl font-bold mb-4">Our Products</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vitae elit libero, a pharetra augue. Sed non mauris
                    vitae erat consequat auctor eu in elit. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos.
                </p>
            </section>
            <section id="contact-us" className="py-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vitae elit libero, a pharetra augue. Sed non mauris
                    vitae erat consequat auctor eu in elit. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos.
                </p>
            </section>
        </AppLayout>
    );
};

export default Home;
