export interface Category {
  name: string;
  src: string;
  href: string;
  amount: number;
}

export const categories: Category[] = [
  { name: "Devices", href: "#", src: "/images/icons/devices.svg", amount: 44 },
  { name: "Print", href: "#", src: "/images/icons/print.svg", amount: 28 },
  { name: "Apparel", href: "#", src: "/images/icons/apparel.svg", amount: 34 },
  {
    name: "Packaging",
    href: "#",
    src: "/images/icons/packaging.svg",
    amount: 14,
  },
  {
    name: "Home & Decor",
    href: "#",
    src: "/images/icons/home.svg",
    amount: 88,
  },
  {
    name: "Social Media",
    href: "#",
    src: "/images/icons/social.svg",
    amount: 9,
  },
];
