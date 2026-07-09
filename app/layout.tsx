import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";
const serif=Cormorant_Garamond({subsets:["latin"],variable:"--font-cormorant",display:"swap"});
const sans=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000"),title:{default:"Red Vale Studio — Digital Products of Distinction",template:"%s — Red Vale Studio"},description:"Premium web design, software development, and AI automation for ambitious businesses.",openGraph:{title:"Red Vale Studio",description:"Design that earns trust before you say a word.",type:"website"},twitter:{card:"summary_large_image"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body><SmoothScroll/><div className="grain"/><Header/><main>{children}</main><Footer/></body></html>}
