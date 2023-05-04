import { useRouter } from "next/router";
import Link from "next/link";
import { useState, ReactNode, ReactElement } from "react";
import cn from "classnames";
import { ThemeSwitch } from "nextra-theme-docs";

function FooterLink({ href, children }) {
    const classes =
        "text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition";
    if (href.startsWith("http")) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}

function FooterHeader({ children }) {
    return <h3 className="text-sm text-black dark:text-white">{children}</h3>;
}

const navigation = {
    general: [
        { name: "Blog", href: "/blog" },
        { name: "Releases", href: "https://github.com/vercel/turbo/releases" },
    ],
    repo: [
        { name: "Documentation", href: "/repo/docs" },
        {
            name: "API Reference",
            href: "/repo/docs/reference/command-line-reference",
        },
        { name: "FAQ", href: "/repo/docs/faq" },
    ],
    pack: [
        { name: "Documentation", href: "/pack/docs" },
        { name: "Features", href: "/pack/docs/features" },
    ],
    support: [
        {
            name: "GitHub",
            href: "https://github.com/vercel/turbo",
        },
        {
            name: "Discord",
            href: "https://turbo.build/discord",
        },
    ],
    company: (site) => [
        { name: "Vercel", href: "https://vercel.com" },
        {
            name: "Open Source Software",
            href: "https://vercel.com/oss?utm_source=turbo.build&utm_medium=referral&utm_campaign=footer-ossLink",
        },
        {
            name: "Contact Sales",
            href: `https://vercel.com/${
                site === "repo" ? "solutions/turborepo" : "contact/sales"
            }?utm_source=turbo.build&utm_medium=referral&utm_campaign=footer-enterpriseLink`,
        },
        { name: "Twitter", href: "https://twitter.com/vercel" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ],
};

export function FooterContent() {
    return (
        <div className="w-full" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="w-full py-8 mx-auto">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-1 gap-8 xl:col-span-2">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
                            <div className="mt-12 md:!mt-0">
                                <FooterHeader>Resources</FooterHeader>
                                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                                    {navigation.general.map((item) => (
                                        <li key={item.name}>
                                            <FooterLink href={item.href}>{item.name}</FooterLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:!mt-0">
                                <FooterHeader>Company</FooterHeader>
                                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                                    {navigation.company().map((item) => (
                                        <li key={item.name}>
                                            <FooterLink href={item.href}>{item.name}</FooterLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:!mt-0">
                                <FooterHeader>Legal</FooterHeader>
                                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <FooterLink href={item.href}>{item.name}</FooterLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:!mt-0">
                                <FooterHeader>Support</FooterHeader>
                                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <FooterLink href={item.href}>{item.name}</FooterLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 xl:!mt-0">
                        <FooterHeader>Subscribe to our newsletter</FooterHeader>
                        <p className="mt-4 text-sm text-gray-600 dark:text-[#888888]">
                            Subscribe to the Turbo newsletter and stay updated on new releases
                            and features, guides, and case studies.
                        </p>
                    </div>
                </div>

                <div className="pt-8 mt-8 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <a
                            className="text-current"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="vercel.com homepage"
                            href="https://vercel.com?utm_source=turbo.build&utm_medium=referral&utm_campaign=footer-logoLink"
                        >
                        </a>
                        <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
                            &copy; {new Date().getFullYear()} Vercel, Inc. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Footer({ menu }){
    return (
        <footer className="bg-[#FAFAFA] pb-[env(safe-area-inset-bottom)] relative dark:bg-[#111111]">
            <div className="absolute top-0 h-12 w-full -translate-y-full bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-black pointer-events-none" />
            <div
                className={cn(
                    "mx-auto max-w-[90rem] py-2 px-4 flex gap-2",
                    menu ? "flex" : "hidden"
                )}
            >
                <ThemeSwitch />
            </div>
            <hr className="dark:border-neutral-800" />
            <div
                className={cn(
                    "mx-auto max-w-[90rem] py-12 flex justify-center md:justify-center text-black dark:text-white",
                    "pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
                )}
            >
                <FooterContent />
            </div>
        </footer>
    );
}
