export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Arkoh Watch Foundation",
  description: "Arkoh Watch Foundation is a non-profit organization dedicated to providing clean water access to remote villages in Africa.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Our Mission",
      href: "/mission",
    },

    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },

  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
