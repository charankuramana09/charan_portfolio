import React, { useState, useMemo, useEffect } from 'react';
// Utility for scroll to top
function useBackToTopButton() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return show;
}
// Demo quick stats and categories
const quickStats = {
    articles: 45,
    reads: '8K',
    categories: 6,
};

const categories = [
    'Frontend',
    'Backend',
    'Full-Stack',
    'DevOps',
    'Career',
    'Tutorials',
];

const popularPosts = [
    {
        id: 2,
        title: 'Building Scalable Microservices with Spring Boot',
        views: 980,
    },
    {
        id: 1,
        title: 'Mastering Full-Stack Engineering',
        views: 1200,
    },
    {
        id: 3,
        title: 'React UI/UX Patterns for Modern Web Apps',
        views: 1100,
    },
];
import { motion } from 'framer-motion';
import { FiSearch, FiArrowRight, FiBookmark, FiChevronUp } from 'react-icons/fi';


// Demo data (replace with real data/fetch in production)
const blogPosts = [
    {
        id: 1,
        title: 'Mastering Full-Stack Engineering',
        date: '2026-01-15',
        tags: ['Full Stack', 'Career', 'Best Practices'],
        summary: 'A deep dive into the mindset and skills needed to excel as a product-focused full-stack engineer.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
        author: { name: 'Charan Kuramana', avatar: './src/assets/charan.png' },
        readingTime: 5,
        views: 1200,
        comments: 8,
        featured: true,
    },
    {
        id: 2,
        title: 'Building Scalable Microservices with Spring Boot',
        date: '2025-12-10',
        tags: ['Microservices', 'Spring Boot', 'Java'],
        summary: 'Step-by-step guide to designing and deploying robust microservices using Spring Boot and Docker.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        author: { name: 'Charan Kuramana', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
        readingTime: 7,
        views: 980,
        comments: 5,
        featured: false,
    },
    {
        id: 3,
        title: 'React UI/UX Patterns for Modern Web Apps',
        date: '2025-11-05',
        tags: ['React', 'UI/UX', 'Frontend'],
        summary: 'Explore advanced UI/UX patterns in React to create delightful and accessible user experiences.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        author: { name: 'Charan Kuramana', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
        readingTime: 6,
        views: 1100,
        comments: 6,
        featured: false,
    },
    {
        id: 4,
        title: 'Low-Code Automation with Zoho Creator',
        date: '2025-10-20',
        tags: ['Zoho Creator', 'Automation', 'Low-Code'],
        summary: 'Unlock the power of low-code platforms for rapid business automation and integration.',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        author: { name: 'Charan Kuramana', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
        readingTime: 4,
        views: 800,
        comments: 2,
        featured: false,
    },
];

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function Blog() {
    // State for search, tag filter, sort, view
    const [search, setSearch] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [sort, setSort] = useState<'date' | 'popularity' | 'readingTime'>('date');
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const showBackToTop = useBackToTopButton();

    {/* Floating Back to Top Button */ }
    {
        showBackToTop && (
            <motion.button
                className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-xl hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
            >
                <FiChevronUp size={24} />
            </motion.button>
        )
    }

    // Filtered and sorted posts
    const filteredPosts = useMemo(() => {
        let posts = blogPosts.filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.summary.toLowerCase().includes(search.toLowerCase()) ||
            post.tags.some(tag => selectedTags.length === 0 || selectedTags.includes(tag))
        );
        if (sort === 'date') posts = posts.sort((a, b) => b.date.localeCompare(a.date));
        if (sort === 'popularity') posts = posts.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
        if (sort === 'readingTime') posts = posts.sort((a, b) => (a.readingTime ?? 0) - (b.readingTime ?? 0));
        return posts;
    }, [search, selectedTags, sort]);

    const featured = filteredPosts.find(p => p.featured) || filteredPosts[0];
    const restPosts = filteredPosts.filter(p => p.id !== featured?.id);

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 pb-20 pt-0 px-0">
            {/* 1. HERO SECTION */}
            <div className="relative overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <motion.div
                        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-30 blur-3xl animate-pulse"
                        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="absolute top-10 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-pink-400 via-blue-400 to-indigo-400 opacity-20 blur-2xl animate-pulse"
                        animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 md:py-24 flex flex-col items-center justify-center text-center z-10"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        Blog & Knowledge Sharing
                    </motion.h1>
                    <motion.p
                        className="max-w-2xl mx-auto text-lg md:text-2xl text-white/90 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        Insights, tutorials, and stories from my journey as a product-focused full-stack engineer. Explore best practices, modern tech, and real-world solutions.
                    </motion.p>
                    {/* Search Bar */}
                    <div className="relative w-full max-w-xl mx-auto mt-4">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 shadow-lg"
                            placeholder="Search articles..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            aria-label="Search blog posts"
                        />
                    </div>
                </motion.div>
            </div>

            {/* 2. QUICK STATS BAR */}
            <div className="max-w-4xl mx-auto -mt-8 mb-8 z-20 relative">
                <div className="flex flex-wrap justify-center gap-4 bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-lg px-8 py-4 border border-slate-200 dark:border-slate-700 backdrop-blur-lg">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400 text-lg">{quickStats.articles}+ Articles</span>
                    <span className="text-slate-500 dark:text-slate-300">•</span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400 text-lg">{quickStats.reads} Reads</span>
                    <span className="text-slate-500 dark:text-slate-300">•</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400 text-lg">{quickStats.categories} Categories</span>
                </div>
            </div>

            {/* 3. FEATURED POST */}
            <div className="max-w-5xl mx-auto px-4 mb-12 relative">
                {/* Floating Shape for Featured */}
                <motion.div
                    className="absolute -top-16 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-pink-400 via-blue-400 to-indigo-400 opacity-20 blur-2xl z-0"
                    animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
                />
                {featured && (
                    <motion.article
                        layoutId={`post-${featured.id}`}
                        className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row min-h-[320px] z-10"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="md:w-2/5 w-full h-56 md:h-auto relative overflow-hidden">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                                style={{ aspectRatio: '16/9' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
                            <button className="absolute top-4 right-4 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow-md hover:scale-110 transition-transform" aria-label="Bookmark">
                                <FiBookmark size={20} />
                            </button>
                        </div>
                        <div className="flex-1 p-8 flex flex-col justify-between">
                            <div>
                                <motion.div className="flex gap-2 mb-2 flex-wrap"
                                    initial="hidden" animate="visible" variants={{
                                        hidden: {},
                                        visible: { transition: { staggerChildren: 0.06 } }
                                    }}
                                >
                                    {featured.tags.map((tag, i) => (
                                        <motion.span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 font-semibold cursor-pointer"
                                            whileHover={{ scale: 1.13 }}
                                            whileTap={{ scale: 0.95 }}
                                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                            tabIndex={0}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                                    {featured.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-300 mb-4 text-lg max-w-2xl">{featured.summary}</p>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <img src={featured.author.avatar} alt={featured.author.name} className="w-10 h-10 rounded-full border-2 border-indigo-400" />
                                <span className="font-semibold text-slate-700 dark:text-slate-200">{featured.author.name}</span>
                                <span className="text-xs text-slate-400">{new Date(featured.date).toLocaleDateString()} • {featured.readingTime} min read</span>
                                <span className="ml-auto flex gap-2 text-xs text-slate-400">
                                    <span>{featured.views} views</span>
                                    <span>{featured.comments} comments</span>
                                </span>
                                <a href="#" className="ml-4 flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:underline group-hover:translate-x-1 transition-transform">
                                    Read more <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.article>
                )}
            </div>

            {/* 4. CATEGORIES OVERVIEW */}
            <div className="max-w-4xl mx-auto mb-8 px-4">
                <motion.div className="flex flex-wrap gap-3 justify-center"
                    initial="hidden" animate="visible" variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } }
                    }}
                >
                    {categories.map((cat, i) => (
                        <motion.span
                            key={cat}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-indigo-700 dark:text-indigo-200 font-semibold text-sm shadow-sm cursor-pointer hover:scale-110 transition-transform"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.97 }}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            tabIndex={0}
                        >
                            {cat}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            {/* 5. FILTERS & 6. BLOG GRID */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 relative z-10">
                {/* Sidebar (filters/tags/popular) */}
                <aside className="hidden md:block md:w-64 sticky top-28 self-start">
                    <div className="rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg shadow-lg p-6 mb-6 border border-slate-200 dark:border-slate-700">
                        <h2 className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-100">Filter by Tag</h2>
                        <div className="flex flex-wrap gap-2">
                            {allTags.map(tag => (
                                <button
                                    key={tag}
                                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${selectedTags.includes(tag)
                                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-md'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-indigo-100 dark:hover:bg-indigo-800'}`}
                                    onClick={() => setSelectedTags(selectedTags.includes(tag)
                                        ? selectedTags.filter(t => t !== tag)
                                        : [...selectedTags, tag])}
                                    aria-pressed={selectedTags.includes(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Sort options */}
                    <div className="rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700 mb-6">
                        <h2 className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-100">Sort by</h2>
                        <div className="flex flex-col gap-2">
                            <label className="inline-flex items-center gap-2 cursor-pointer">
                                <input type="radio" className="accent-indigo-500" checked={sort === 'date'} onChange={() => setSort('date')} /> Date
                            </label>
                            <label className="inline-flex items-center gap-2 cursor-pointer">
                                <input type="radio" className="accent-indigo-500" checked={sort === 'popularity'} onChange={() => setSort('popularity')} /> Popularity
                            </label>
                            <label className="inline-flex items-center gap-2 cursor-pointer">
                                <input type="radio" className="accent-indigo-500" checked={sort === 'readingTime'} onChange={() => setSort('readingTime')} /> Reading Time
                            </label>
                        </div>
                    </div>
                    {/* 7. POPULAR POSTS */}
                    <div className="rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
                        <h2 className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-100">Popular Posts</h2>
                        <ul className="space-y-2">
                            {popularPosts.map(post => (
                                <li key={post.id} className="flex items-center gap-2 text-sm">
                                    <span className="text-xl">🔥</span>
                                    <span className="truncate font-semibold text-indigo-700 dark:text-indigo-200">{post.title}</span>
                                    <span className="ml-auto text-slate-400">{post.views} views</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Blog Content */}
                <main className="flex-1 min-w-0">
                    {/* Blog Grid (Masonry option can be added) */}
                    <div className={`grid ${view === 'grid' ? 'md:grid-cols-2' : 'grid-cols-1'} gap-8`}>
                        {restPosts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                className="group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:scale-[1.02] transition-transform duration-300 flex flex-col relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                tabIndex={0}
                                aria-label={post.title}
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                        style={{ aspectRatio: '16/9' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
                                    <button className="absolute top-3 right-3 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow-md hover:scale-110 transition-transform" aria-label="Bookmark">
                                        <FiBookmark size={18} />
                                    </button>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <motion.div className="flex gap-2 mb-2 flex-wrap"
                                        initial="hidden" animate="visible" variants={{
                                            hidden: {},
                                            visible: { transition: { staggerChildren: 0.05 } }
                                        }}
                                    >
                                        {post.tags.map((tag, i) => (
                                            <motion.span
                                                key={i}
                                                className="text-xs px-2 py-1 rounded bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 font-semibold cursor-pointer"
                                                whileHover={{ scale: 1.13 }}
                                                whileTap={{ scale: 0.95 }}
                                                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                                tabIndex={0}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4 flex-1">{post.summary}</p>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full border-2 border-indigo-400" />
                                        <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">{post.author.name}</span>
                                        <span className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString()} • {post.readingTime} min read</span>
                                        <a href="#" className="ml-auto flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:underline group-hover:translate-x-1 transition-transform">
                                            Read more <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </main>
            </div>

            {/* 8. NEWSLETTER SUBSCRIPTION */}
            <motion.div className="max-w-2xl mx-auto mt-16 mb-8 px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className="rounded-2xl bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 shadow-lg p-8 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-100">Get Weekly Full-Stack Insights</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">Subscribe to receive the latest articles, tips, and resources directly in your inbox.</p>
                    <form className="flex w-full max-w-md gap-2">
                        <input type="email" className="flex-1 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100" placeholder="Your email address" aria-label="Email address" required />
                        <button type="submit" className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400">Subscribe</button>
                    </form>
                </div>
            </motion.div>

            {/* 9. ABOUT THIS BLOG */}
            <motion.div className="max-w-2xl mx-auto mb-8 px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className="rounded-2xl bg-white/80 dark:bg-slate-900/80 shadow-lg p-8 flex flex-col items-center border border-slate-200 dark:border-slate-700">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Charan Kuramana" className="w-20 h-20 rounded-full border-4 border-indigo-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">About This Blog</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-center">Hi, I'm Charan Kuramana, a product-focused full-stack engineer. Here I share practical insights, tutorials, and stories to help you grow as a developer and build amazing products.</p>
                </div>
            </motion.div>

            {/* 10. TAGS CLOUD (Optional) */}
            <motion.div className="max-w-4xl mx-auto mb-8 px-4"
                initial="hidden" animate="visible" variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.04 } }
                }}
            >
                <div className="flex flex-wrap gap-2 justify-center">
                    {allTags.map((tag, i) => (
                        <motion.span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 text-indigo-700 dark:text-indigo-200 font-semibold text-xs shadow-sm cursor-pointer hover:scale-110 transition-transform"
                            whileHover={{ scale: 1.13 }}
                            whileTap={{ scale: 0.95 }}
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            tabIndex={0}
                        >
                            #{tag}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
