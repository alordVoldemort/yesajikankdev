export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroText {
  text: string;
  font: string;
}

export interface Feature {

  
  title: string;
  titleEn: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  orgName: string;
}

export interface Extrainfo {
  name:string;
  description:string;
  btn1:string,
  btn2:string
}

export interface trust {
  name:string
  desc1:string,
  desc2:string,
  btn:string
}

export interface moreInfo {
  desc:string,
  name:string
  btn:string
}

export interface history {
  name :string
  desc: string
}

export interface work {
  name:string
  desc:string
  btn:string
}

export interface shivkalin {
  name:string
  desc:string
}

export interface card {
  name:string
  desc:string
}

export interface prashansapatr{
  name:string
}
export interface feedback {
  name:string
  desc:string
}


export interface FooterInfo {
  trustName: string;
  homeTitle: string;
  homeLinks: string[];
  homeLinksWithUrl?: Array<{ text: string; href: string }>;
  aboutTitle: string;
  aboutLinks: string[];
  aboutLinksWithUrl?: Array<{ text: string; href: string }>;
  contactTitle: string;
  email: string;
  phone: string;
  address: string;
  rights: string;
  tagline: string;
}

export interface cardtext {
  name:string,
  desc:string
}