
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ auth, blog }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blog Details</h2>}
        >
            <Head title={`Blog - ${blog.title}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-900">Title</h3>
                                <p className="mt-1 text-gray-600">{blog.title}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-900">Content</h3>
                                <p className="mt-1 text-gray-600 whitespace-pre-wrap">{blog.content}</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Link
                                    href={route('blog.index')}
                                    className="px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                >
                                    Back to List
                                </Link>
                                <Link
                                    href={route('blog.edit', blog.id)}
                                    className="px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                                >
                                    Edit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

