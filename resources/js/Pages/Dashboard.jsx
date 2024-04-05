import AppLayout from "@/Layouts/AppLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AppLayout title="Dashboard">
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl font-bold text-center">
                        Dashboard
                    </h1>
                </div>
            </div>
        </AppLayout>
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        // >
        //     <Head title="Dashboard" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
    );
}
