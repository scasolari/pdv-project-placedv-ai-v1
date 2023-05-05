import Link from "next/link";
import cn from "classnames";
import { ThemeSwitch } from "nextra-theme-docs";
import {BiPlanet} from "react-icons/bi";
import {useState} from "react";
import {useRouter} from "next/router";

function FooterLink({ href, children }) {
    const classes =
        "text-sm text-[#666666] dark:text-[#888888] no-underline hover:text-gray-700 hover:dark:text-white transition";
    if (href.startsWith("http")) {
        return (
            <a href={href} className={classes} target="_blank">
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
    solutions: [
        { name: "Placedv Reporting", href: "/solutions/placedv-reporting" },
        { name: "Placedv Goofls", href: "/solutions/placedv-goofls" },
    ],
    models: [
        { name: "Placedv Neptune", href: "/models/placedv-neptune" },
    ],
    company: [
        { name: "About", href: "/about" },
        { name: "Research", href: "/research" },
    ],
    support: [
        { name: "GitHub", href: "https://github.com/scasolari/pdv-project-placedv-ai-v1" },
    ],
    legal: [
        { name: "Privacy Policy", href: "https://www.iubenda.com/privacy-policy/79657627/legal"}
    ]
};

export function FooterContent() {
    return (
        <div className="w-full" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="w-full mx-auto">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-1 gap-8 xl:col-span-2">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
                            <div className="mt-12 md:!mt-0">
                                <FooterHeader>Solutions</FooterHeader>
                                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <FooterLink href={item.href}>{item.name}</FooterLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:!mt-0">
                                <FooterHeader>Models</FooterHeader>
                                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                                    {navigation.models.map((item) => (
                                        <li key={item.name}>
                                            <FooterLink href={item.href}>{item.name}</FooterLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:!mt-0">
                                <FooterHeader>Company</FooterHeader>
                                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                                    {navigation.company.map((item) => (
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
                            <div className="mt-12 md:!mt-0">
                                <FooterHeader>Legal</FooterHeader>
                                <ul role="list" className="mt-4 space-y-2 list-none ml-0">
                                    {navigation.legal.map((item) => (
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
                            Subscribe to the Placedv AI newsletter and stay updated on new releases
                            and features, guides, and case studies.
                        </p>
                        <SubmitForm/>
                    </div>
                </div>

                <div className="pt-8 mt-8 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <BiPlanet size={24}/>
                        <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
                            &copy; {new Date().getFullYear()} Placedv AI. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SubmitForm() {
    const [email, setEmail] = useState("");
    const router = useRouter();
    return (
        <form
            className="mt-4 sm:flex sm:max-w-md"
            onSubmit={(e) => {
                fetch("/api/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                })
                    .then((res) => res.json())
                    .then((res) => {
                        return router.push("/confirm");
                    });
                e.preventDefault();
            }}
        >
            <label htmlFor="email-address" className="sr-only">
                Email address
            </label>
            <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-[#666666] dark:border-[#888888] w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border rounded-md appearance-none dark:text-white sm:text-sm dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:border-white focus:placeholder-gray-400"
                placeholder="you@example.com"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md dark:bg-white dark:text-black sm:text-sm betterhover:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:betterhover:hover:bg-gray-300"
                >
                    Subscribe
                </button>
            </div>
        </form>
    );
}


export function Footer({ menu }){
    return (
        <footer>
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
