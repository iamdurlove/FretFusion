import { Link, Head } from "@inertiajs/react";

const About = ({ title, name }) => {
    return (
        <>
            <Head title={title} />
            <h1>Welcome {name} to our website </h1>
        </>
    );
};

export default About;
