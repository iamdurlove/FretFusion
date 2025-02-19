import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AppLayout title="Dashboard">
            <div className="container mx-auto ">
                {/* <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl font-bold text-center">
                        Dashboard
                    </h1>
                </div> */}
                <div className="py-12 dark:text-gray-200 leading-tight">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={
        //         <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        //             Profile
        //         </h2>
        //     }
        // >
        //     <Head title="Profile" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        //             <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        //                 <UpdateProfileInformationForm
        //                     mustVerifyEmail={mustVerifyEmail}
        //                     status={status}
        //                     className="max-w-xl"
        //                 />
        //             </div>

        //             <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        //                 <UpdatePasswordForm className="max-w-xl" />
        //             </div>

        //             <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        //                 <DeleteUserForm className="max-w-xl" />
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
    );
}
