"use client";
import {useEffect} from "react";
import Lenis from "lenis";
export function SmoothScroll(){useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;const lenis=new Lenis({lerp:.08,smoothWheel:true});let id=0;const raf=(t:number)=>{lenis.raf(t);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf);return()=>{cancelAnimationFrame(id);lenis.destroy()}},[]);return null}
