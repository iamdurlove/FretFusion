import AppLayout from "@/Layouts/AppLayout";
import React from "react";
import { Link, usePage } from "@inertiajs/react";
const About = () => {
    const { auth } = usePage().props;
    return (
        <AppLayout title="About Us">
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl font-bold text-center">
                        About Section
                    </h1>
                </div>
            </div>
        </AppLayout>
    );
};

export default About;
