import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiCalendar, FiShare2, FiBookmark, FiTag, FiMessageSquare } from 'react-icons/fi';
import { blogPosts } from '../data/portfolio';
import { Helmet } from 'react-helmet-async';

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);
    const [isImageOpen, setIsImageOpen] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <button onClick={() => navigate('/blog')} className="text-indigo-600 hover:underline">
                        Back to Blog
                    </button>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 transition-colors duration-300">
            <Helmet>
                <title>{post.title} — Charan Kuramana</title>
                <meta name="description" content={post.summary} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.summary} />
                <meta property="og:image" content={post.image} />
                <meta property="og:url" content={`https://charankuramana.me/blog/${post.slug}`} />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/blog')}
                    className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-12 group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                </motion.button>

                {/* Header */}
                <header className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-3 mb-6"
                    >
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight"
                    >
                        {post.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-slate-200 dark:border-slate-800"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                                <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 dark:text-white">{post.author.name}</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                    <FiCalendar /> {new Date(post.date).toLocaleDateString()}
                                    <span>•</span>
                                    <FiClock /> {post.readingTime} min read
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-500" aria-label="Share">
                                <FiShare2 size={20} />
                            </button>
                            <button className="p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-500" aria-label="Bookmark">
                                <FiBookmark size={20} />
                            </button>
                        </div>
                    </motion.div>
                </header>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="aspect-video w-full rounded-3xl overflow-hidden mb-16 shadow-2xl cursor-zoom-in bg-slate-200 dark:bg-slate-800"
                    onClick={() => setIsImageOpen(true)}
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-contain md:object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="prose prose-lg dark:prose-invert prose-indigo max-w-none mb-16"
                >
                    {/* Simulating markdown rendering for demo */}
                    <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
                </motion.div>

                {/* Tags & Interaction */}
                <footer className="pt-12 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <FiTag className="text-slate-400" />
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-sm text-slate-500 hover:text-indigo-600 cursor-pointer">#{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-slate-500 text-sm">
                            <span className="flex items-center gap-2"><FiMessageSquare /> {post.comments} Comments</span>
                            <span>{post.views} Views</span>
                        </div>
                    </div>

                    {/* Next Articles Suggestion */}
                    <div className="mt-20">
                        <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                                <Link key={p.id} to={`/blog/${p.slug}`} className="group block bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all">
                                    <h4 className="text-lg font-bold mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">{p.title}</h4>
                                    <p className="text-sm text-slate-500 line-clamp-2">{p.summary}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
            {/* Full Image Modal */}
            {isImageOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                    onClick={() => setIsImageOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative max-w-7xl max-h-[90vh]"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-contain rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-indigo-400 transition-colors text-lg font-bold"
                            onClick={() => setIsImageOpen(false)}
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </article>
    );
}
