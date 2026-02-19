
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, posts }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blog</h2>}
        >
            <Head title="Blog" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium text-gray-900">Recent Posts</h3>
                            <Link
                                href={route('blog.create')}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                            >
                                Create New Post
                            </Link>
                        </div>

                        <div className="grid gap-6">
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <div key={post.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                                        <p className="text-gray-600 mb-4">
                                            {post.content.length > 150 ? `${post.content.substring(0, 150)}...` : post.content}
                                        </p>
                                        <div className="flex space-x-4 text-sm">
                                            <Link href={route('blog.show', post.id)} className="text-indigo-600 hover:text-indigo-900 font-medium">Read More</Link>
                                            <Link href={route('blog.edit', post.id)} className="text-gray-600 hover:text-gray-900">Edit</Link>
                                            <Link 
                                                href={route('blog.destroy', post.id)} 
                                                method="delete" 
                                                as="button" 
                                                className="text-red-600 hover:text-red-900"
                                                onBefore={() => confirm('Are you sure you want to delete this post?')}
                                            >
                                                Delete
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-4">No posts available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

