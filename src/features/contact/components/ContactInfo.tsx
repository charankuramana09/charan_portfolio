import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Linkedin, MapPin, Clock, MessageCircle } from 'lucide-react';
import { config } from '../../../data/config';
import { strings } from '../../../data/strings';
import SocialLinks from '../../../shared/ui/SocialLinks';

const item: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Channel: React.FC<{ href?: string; icon: React.ReactNode; label: string; value: string }> = ({
  href,
  icon,
  label,
  value,
}) => {
  const inner = (
    <>
      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] uppercase tracking-wider text-slate-400">{label}</span>
        <span className="block truncate text-sm font-medium text-slate-900 dark:text-white">{value}</span>
      </span>
    </>
  );
  const cls =
    'flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/50 p-4 transition-colors hover:border-brand-400/40 dark:border-white/10 dark:bg-white/5';
  return href ? (
    <motion.a
      variants={item}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`focus-ring ${cls}`}
    >
      {inner}
    </motion.a>
  ) : (
    <motion.div variants={item} className={cls}>
      {inner}
    </motion.div>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card tile-spotlight flex h-full flex-col p-7 md:p-9"
    >
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Get in touch</h3>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Have a role, a project, or an idea? I read every message and usually reply quickly.
      </p>

      {/* response-time + availability badges */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <Clock size={13} className="text-brand-500" /> Replies within 24h
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available now
        </span>
      </div>

      {/* channels */}
      <motion.div
        className="mt-6 flex flex-col gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        <Channel href={`mailto:${config.contact.email}`} icon={<Mail size={20} />} label={strings.contact.emailLabel} value={config.contact.email} />
        <Channel href={config.social.whatsapp} icon={<MessageCircle size={20} />} label="WhatsApp" value={config.contact.phone} />
        <Channel href={config.social.linkedin} icon={<Linkedin size={20} />} label={strings.contact.linkedinLabel} value="Connect with me" />
        <Channel icon={<MapPin size={20} />} label="Location" value="Hyderabad, India" />
      </motion.div>

      {/* socials */}
      <div className="mt-auto pt-7">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Find me online</p>
        <SocialLinks />
      </div>
    </motion.div>
  );
};

export default React.memo(ContactInfo);
