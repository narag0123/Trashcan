import "./globals.scss";
import Image from "next/image";
import Link from "next/link";

import mainLogo from "../public/main-logo.png";
import UseProvider from "./store/store";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="nav wrapper">
                    <Link href="/">
                        <Image
                            src={mainLogo}
                            alt="logo"
                            loading="lazy"
                            style={{
                                width: "138.61px",
                                height: "26px",
                            }}
                        />
                    </Link>
                    <div className="icon-hamburger">
                        <div className="ham" />
                        <div className="ham" />
                    </div>
                </div>
                <UseProvider>{children}</UseProvider>
            </body>
        </html>
    );
}
