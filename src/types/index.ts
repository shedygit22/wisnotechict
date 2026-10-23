export type CourseStatus = "available" | "planned" | "unavailable";

export type DeliveryFormat = "in-person" | "online" | "hybrid";

export interface NavItem {
  href: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  internationalPhone: string;
  whatsapp: string;
  location: string;
}

export const CONTACT_INFO: ContactInfo = {
  email: "wisnotech@gmail.com",
  phone: "09153541297",
  internationalPhone: "+234 915 354 1297",
  whatsapp: "+2349153541297",
  location: "Uromi, Edo State, Nigeria",
};

export const WHATSAPP_URL = "https://wa.me/2349153541297";
export const GMAIL_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=wisnotech%40gmail.com";
export const MAILTO_URL = "mailto:wisnotech@gmail.com";
export const TEL_URL = "tel:+2349153541297";

export const BRAND = {
  name: "Wisnotech",
  tagline: "Learn Digital Skills. Build Smarter Systems. Grow with Technology.",
  positioning:
    "Wisnotech helps people develop practical digital skills and helps organizations build better businesses through technology, software, and artificial intelligence.",
  description:
    "Practical digital education and custom technology solutions for individuals, businesses, schools, media organizations, and enterprises.",
  email: "wisnotech@gmail.com",
  phone: "09153541297",
  internationalPhone: "+234 915 354 1297",
  whatsapp: "+2349153541297",
  location: "Uromi, Edo State, Nigeria",
} as const;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wisnotech.vercel.app";