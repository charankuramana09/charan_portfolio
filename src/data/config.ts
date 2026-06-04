export const config = {
    social: {
        github: "https://github.com/charankuramana09",
        linkedin: "https://www.linkedin.com/in/charan-kuramana-145282249/",
        instagram: "https://instagram.com/charan_kuramana",
        whatsapp: "https://wa.me/917306263884",
        naukri: "https://www.naukri.com/mnjuser/homepage",
    },
    contact: {
        email: "charank.fullstackdeveloper@gmail.com",
        phone: "+91 7306263884",
    },
    // Public URL of the deployed site (GitHub Pages project page).
    siteUrl: "https://charankuramana09.github.io/charan_portfolio",
    // Base-aware so it resolves correctly under the /charan_portfolio/ subpath and in dev.
    resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
    theme: {
        colors: {
            primary: "#6366f1", // Indigo-500
            secondary: "#10b981", // Emerald-500
            accent: "#8b5cf6", // Purple-500
        }
    }
};
