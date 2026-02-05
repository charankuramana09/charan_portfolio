import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiArrowRight, FiBookmark, FiChevronUp, FiFilter, FiTrendingUp, FiClock, FiCalendar } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';

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
    'All',
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

import { blogPosts } from '../data/portfolio';
import { Link } from 'react-router-dom';
import GlitchText from '../components/ui/GlitchText';
import BackgroundPaths from '../components/ui/BackgroundPaths';

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function Blog() {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sort, setSort] = useState<'date' | 'popularity' | 'readingTime'>('date');
    const showBackToTop = useBackToTopButton();

    // Filtered and sorted posts
    const filteredPosts = useMemo(() => {
        let posts = blogPosts.filter(post => {
            const matchesCategory = selectedCategory === 'All' ||
                post.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase())) ||
                (selectedCategory === 'Backend' && post.tags.includes('Java')) ||
                (selectedCategory === 'Frontend' && post.tags.includes('React'));

            const matchesSearch = search === '' ||
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.summary.toLowerCase().includes(search.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));

            return matchesCategory && matchesSearch;
        });

        if (sort === 'date') posts = posts.sort((a, b) => b.date.localeCompare(a.date));
        if (sort === 'popularity') posts = posts.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
        if (sort === 'readingTime') posts = posts.sort((a, b) => (a.readingTime ?? 0) - (b.readingTime ?? 0));

        return posts;
    }, [search, selectedCategory, sort]);

    const featured = filteredPosts.find(p => p.featured) || filteredPosts[0];
    const restPosts = filteredPosts.filter(p => p.id !== featured?.id);

    return (
        <section className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Helmet>
                <title>Blog — Charan Kuramana | Insights on Full Stack Dev</title>
                <meta name="description" content="Read my latest articles on Java, React, Microservices, and software engineering career growth." />
                <meta property="og:title" content="Blog — Charan Kuramana | Full Stack Insights" />
                <meta property="og:description" content="Deep dives into technical topics and career advice for modern developers." />
                <meta property="og:url" content="https://charankuramana.me/blog" />
            </Helmet>
            {/* 1. HERO SECTION */}
            <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Floating Paths Background */}
                <BackgroundPaths className="text-slate-200 dark:text-slate-800/50" />

                <div className="relative max-w-7xl mx-auto text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6 tracking-wide border border-indigo-200 dark:border-indigo-500/20">
                            Engineering & Thoughts
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                            <GlitchText className="text-slate-900 dark:text-white" speed={0.8}>Insights from a</GlitchText> <br />
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Full Stack Engineer</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-10">
                            Deep dives into modern web development, scalable architecture, and the software engineering journey.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto shadow-xl shadow-indigo-500/10 dark:shadow-none">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <FiSearch className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                                placeholder="Search articles, topics, or keywords..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 2. CATEGORY TABS */}
            <div className="sticky top-20 z-30 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-y border-slate-200 dark:border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4 overflow-x-auto no-scrollbar gap-4">
                        <div className="flex gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${selectedCategory === cat
                                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Sort Dropdown (Desktop) */}
                        <div className="hidden md:flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 border-l border-slate-200 dark:border-slate-700 pl-4 ml-2">
                            <span className="flex items-center gap-1"><FiFilter /> Sort by:</span>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value as any)}
                                className="bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white font-medium cursor-pointer"
                            >
                                <option value="date" className="text-slate-900 dark:text-white bg-white dark:bg-slate-900">Latest</option>
                                <option value="popularity" className="text-slate-900 dark:text-white bg-white dark:bg-slate-900">Popular</option>
                                <option value="readingTime" className="text-slate-900 dark:text-white bg-white dark:bg-slate-900">Read Time</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* 3. FEATURED POST */}
                {featured && !search && selectedCategory === 'All' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <FiTrendingUp className="text-indigo-500" /> Featured Article
                        </h2>
                        <Link to={`/blog/${featured.slug}`} className="block group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-none hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {featured.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {featured.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg line-clamp-3">
                                        {featured.summary}
                                    </p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                                                <img src={featured.author.avatar} alt={featured.author.name} className="w-full h-full object-cover"
                                                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Charan+Kuramana&background=6366f1&color=fff' }}
                                                />
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-slate-900 dark:text-white">{featured.author.name}</div>
                                                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                    <span>{new Date(featured.date).toLocaleDateString()}</span>
                                                    <span>•</span>
                                                    <span>{featured.readingTime} min read</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-auto p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                            <FiBookmark size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* 4. MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {restPosts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300"
                        >
                            <Link to={`/blog/${post.slug}`} className="flex flex-col flex-1">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700">
                                            {post.tags[0]}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                                        <FiCalendar /> {new Date(post.date).toLocaleDateString()}
                                        <span>•</span>
                                        <FiClock /> {post.readingTime} min read
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                        {post.summary}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                        <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline flex items-center gap-1">
                                            Read Article <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                        <span className="text-xs text-slate-400">{post.views} views</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                            <FiSearch className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">No articles found</h3>
                        <p className="text-slate-600 dark:text-slate-400">Try adjusting your search or category filters</p>
                    </div>
                )}
            </div>

            {/* Back to top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-8 right-8 p-4 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition-colors z-50"
                    >
                        <FiChevronUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </section>
    );
}
