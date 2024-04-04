import AppLayout from "@/Layouts/AppLayout";
import React from "react";
const About = ({ title, name }) => {
    return (
        <AppLayout>
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
