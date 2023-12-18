import fire from "./assets/fire.svg";
import fireBig from "./assets/fire-big.svg";

import logo from "./assets/logo.svg";
import lumna from "./assets/person.webp";
import separator from "./assets/separator.svg";

import service1 from "./assets/img2.webp";
import service2 from "./assets/img2.webp";
import service3 from "./assets/img2.webp";

import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";
import img5 from "./assets/img5.webp";
import img6 from "./assets/img6.webp";

export const PHONE_NUMBER = "56936594";

export const FIRE_IMG = fire;
export const FIRE_BIG_IMG = fireBig;

export const LOGO_IMG = logo;
export const LUMNA_IMG = lumna;
export const SEPARATOR_IMG = separator;

export const DESCRIPTION = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quia
repudiandae vero, saepe nulla perspiciatis architecto, esse officiis
laboriosam veritatis expedita repellendus veniam aperiam, fugit
autem nisi labore culpa quis!`;

export const SERVICES = [
	{
		name: "service1",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
		img: service1,
	},
	{
		name: "service1",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
		img: service2,
	},
	{
		name: "service1",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
		img: service3,
	},
] as const;

export const IMAGES = [
	{ name: "img1", src: img1 },
	{ name: "img2", src: img2 },
	{ name: "img3", src: img3 },
	{ name: "img4", src: img4 },
	{ name: "img5", src: img5 },
	{ name: "img6", src: img6 },
] as const;

export type Images = typeof IMAGES;

export const SOCIAL = [
	{
		name: "Facebook",
		link: "https://m.facebook.com/profile.php/?id=100069435427632&name=xhp_nt_",
		icon: "ri:facebook-fill",
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/corvustattoostudio/",
		icon: "ri:instagram-fill",
	},
	{
		name: "Whatsapp",
		link: `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`,
		icon: "ri:whatsapp-fill",
	},
] as const;
