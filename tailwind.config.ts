import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"], theme:{extend:{colors:{ink:"#070707",panel:"#111111",paper:"#F5F3EE",muted:"#A8A8A8",gold:"#C6A86A"},fontFamily:{serif:["var(--font-cormorant)"],sans:["var(--font-inter)"]}}},plugins:[] } satisfies Config;
