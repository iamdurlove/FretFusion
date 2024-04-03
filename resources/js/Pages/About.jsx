import Footer from "@/Layouts/Footer/Footer";
import Navbar from "@/Layouts/Navbar/Navbar";
import { Link, Head } from "@inertiajs/react";
import { renderToPipeableStream } from "react-dom/server";

const About = ({ title, name }) => {
    return (
        <>
            <Head title={renderToPipeableStream} />
            <Navbar />

            <h1>this is about page, {name}</h1>
            <Footer />
        </>
    );
};

export default About;
