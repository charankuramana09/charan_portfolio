import React, { useState, useEffect } from 'react';
import { Award, Calendar, MapPin, BookOpen, ExternalLink, Check, Sparkles, TrendingUp, Code, Server, Coffee } from 'lucide-react';

const CertificationsLearning = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certifications = [
    {
      id: 1,
      title: 'Project Management Skills Upgrade',
      provider: 'Udemy',
      year: '2026',
      duration: 'Continuous Learning Journey',
      icon: TrendingUp,
      color: 'emerald',
      skills: [
        'Fundamentals of Project Management',
        'Project Lifecycle: Initiation, Planning, Execution, Monitoring & Control, Closure',
        'Agile & Scrum, Waterfall, AI in Project Management',
        'MS Excel for Project Planning & Tracking'
      ],
      description: 'Strengthened my ability to plan, track, communicate, and adapt between Agile and Waterfall, leveraging AI tools for better decision-making.',
      badge: '/api/placeholder/100/100'
    },
    {
      id: 2,
      title: 'Microservices Architecture',
      provider: 'Udemy',
      year: '2025',
      duration: 'iSign Tech | Continuous Upskilling',
      icon: Server,
      color: 'cyan',
      skills: [
        'Microservices architecture, service discovery, API gateways',
        'Building scalable, robust systems'
      ],
      description: 'Applied new skills to real projects, contributing to robust, scalable applications at iSign Tech.',
      badge: '/api/placeholder/100/100'
    },
    {
      id: 3,
      title: 'Full Stack Java Developer Training',
      provider: 'Sathya Technologies, Hyderabad',
      year: '2022 - 2023',
      duration: 'Aug 2022 – Feb 2023',
      icon: Coffee,
      color: 'orange',
      skills: [
        'Java, Spring Boot, HTML, CSS, JavaScript',
        'Developed a full-fledged Banking Application:'
      ],
      features: [
        'User Registration & Login',
        'Deposit & Withdrawal',
        'Funds Transfer',
        'Account Closure'
      ],
      description: 'Hands-on experience building responsive UIs and robust backends, ready to contribute to real-world projects.',
      badge: '/api/placeholder/100/100'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      emerald: {
        border: 'border-emerald-500',
        bg: 'bg-emerald-500',
        text: 'text-emerald-400',
        glow: 'shadow-emerald-500/50',
        gradient: 'from-emerald-500 to-teal-500'
      },
      cyan: {
        border: 'border-cyan-500',
        bg: 'bg-cyan-500',
        text: 'text-cyan-400',
        glow: 'shadow-cyan-500/50',
        gradient: 'from-cyan-500 to-blue-500'
      },
      orange: {
        border: 'border-orange-500',
        bg: 'bg-orange-500',
        text: 'text-orange-400',
        glow: 'shadow-orange-500/50',
        gradient: 'from-orange-500 to-amber-500'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal gradient strips */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-slide-right"></div>
          <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-slide-left"></div>
          <div className="absolute top-2/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-slide-right-delayed"></div>
        </div>

        {/* Radial gradients */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
        
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl">
            <Award className="w-5 h-5 text-emerald-400 animate-bounce-subtle" />
            <span className="text-sm font-bold tracking-[0.2em] text-slate-300 uppercase">
              Professional Growth
            </span>
            <Sparkles className="w-5 h-5 text-cyan-400 animate-spin-slow" />
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent animate-gradient-flow">
              Certifications
            </span>
            <br />
            <span className="text-slate-200">& Learning</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            A journey of continuous growth, skill development, and professional excellence
          </p>

          {/* Progress indicator */}
          <div className="mt-8 max-w-md mx-auto h-1 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-orange-500 transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-orange-500 transform -translate-x-1/2 opacity-30"></div>

          {/* Certifications */}
          <div className="space-y-24">
            {certifications.map((cert, index) => {
              const isEven = index % 2 === 0;
              const colors = getColorClasses(cert.color);
              const IconComponent = cert.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={cert.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 top-12 transform -translate-x-1/2 z-20">
                    <div className={`relative w-6 h-6 rounded-full ${colors.bg} ${isActive ? 'animate-ping-slow' : ''}`}></div>
                    <div className={`absolute inset-0 w-6 h-6 rounded-full ${colors.bg} shadow-lg ${colors.glow}`}></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full lg:w-[calc(50%-3rem)] ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    {/* Main card */}
                    <div className="group relative">
                      {/* Glow effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>

                      {/* Card content */}
                      <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 group-hover:border-slate-700 transition-all duration-500 shadow-2xl">
                        {/* Badge & Icon */}
                        <div className={`flex items-center gap-4 mb-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                          <div className={`relative p-4 rounded-xl bg-gradient-to-br ${colors.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                            <IconComponent className="w-8 h-8 text-white" />
                            <div className={`absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-gentle`}></div>
                          </div>

                          <div className={`flex-shrink-0 ${isEven ? 'lg:order-first' : ''}`}> 
                            <div className={`w-20 h-20 rounded-full border-2 ${colors.border} flex items-center justify-center bg-slate-800/50 backdrop-blur`}>
                              <Award className={`w-10 h-10 ${colors.text}`} />
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className={`text-3xl font-bold text-white mb-2 group-hover:${colors.text} transition-colors duration-300`}>
                          {cert.title}
                        </h3>

                        {/* Meta info */}
                        <div className={`flex flex-wrap gap-4 mb-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-start text-sm text-slate-400`}>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{cert.provider}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{cert.year}</span>
                          </div>
                        </div>

                        {/* Duration badge */}
                        <div className={`inline-block px-4 py-2 rounded-full ${colors.bg}/10 border ${colors.border}/30 mb-6`}>
                          <span className={`text-sm font-semibold ${colors.text}`}>{cert.duration}</span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {cert.description}
                        </p>

                        {/* Skills */}
                        <div className="space-y-3 mb-6">
                          {cert.skills.map((skill, idx) => (
                            <div 
                              key={idx}
                              className="flex items-start gap-3 group/item"
                              style={{
                                animation: isActive ? `slideInRight 0.4s ease-out ${idx * 0.1}s both` : 'none'
                              }}
                            >
                              <div className={`mt-1 p-1 rounded-full ${colors.bg}/20`}>
                                <Check className={`w-4 h-4 ${colors.text}`} />
                              </div>
                              <span className="text-slate-300 group-hover/item:text-white transition-colors">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Features (if available) */}
                        {cert.features && (
                          <div className="mt-6 pt-6 border-t border-slate-800">
                            <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                              Key Features Developed
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {cert.features.map((feature: string, idx: number) => (
                                <div 
                                  key={idx}
                                  className={`flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors ${isEven ? 'lg:justify-end' : ''}`}
                                  style={{
                                    animation: isActive ? `fadeIn 0.4s ease-out ${(cert.skills.length + idx) * 0.1}s both` : 'none'
                                  }}
                                >
                                  <Code className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                                  <span className="text-sm text-slate-300">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Action button */}
                        <div className={`mt-6 flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                          <button className={`group/btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${colors.gradient} text-white font-semibold hover:shadow-lg ${colors.glow} transition-all duration-300 transform hover:scale-105`}>
                            <span>View Certificate</span>
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </button>
                        </div>

                        {/* Decorative corner */}
                        <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-24 h-24 ${colors.bg}/5 ${isEven ? 'rounded-tr-2xl' : 'rounded-tl-2xl'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-[calc(50%-3rem)]"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-orange-500 animate-gradient-xy">
            <div className="bg-slate-950 rounded-xl px-8 py-6">
              <p className="text-slate-300 mb-4">Want to see more of my learning journey?</p>
              <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105">
                View All Certifications
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Dot pattern */
        .bg-dot-pattern {
          background-image: radial-gradient(circle, rgba(148, 163, 184, 0.15) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* Sliding animations */
        @keyframes slide-right {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes slide-left {
          0% { transform: translateX(100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }

        .animate-slide-right {
          animation: slide-right 8s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 10s linear infinite;
        }

        .animate-slide-right-delayed {
          animation: slide-right 12s linear infinite 2s;
        }

        /* Gradient flow */
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-flow {
          background-size: 200% auto;
          animation: gradient-flow 8s ease infinite;
        }

        /* Gradient XY */
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }

        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 8s ease infinite;
        }

        /* Pulse variations */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }

        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }

        @keyframes pulse-gentle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 6s ease-in-out 2s infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        /* Ping effect */
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Spin slow */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        /* Bounce subtle */
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        /* Fade in up */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slide in right */
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Fade in */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CertificationsLearning;
