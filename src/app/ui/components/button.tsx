import clsx from "clsx";
import Link from "next/link";

type Variants = "primary" | "secondary";

interface Props {
  className: string;
  children: React.ReactNode;
  variant?: Variants;
  link?: {
    href: string;
  };
  handleClick?: () => void;
}

const variantClasses: Record<Variants, string> = {
  primary:
    "primary-btn bg-turquoise hover:bg-pink hover:shadow-md hover:shadow-pink/40 rounded py-2.5 px-10 text-black text-base hover:text-white transition duration-300 flex items-center justify-center gap-2.5",
  secondary:
    "secondary-btn border border-purple bg-transparent hover:bg-purple hover:shadow-md hover:shadow-purple/20 rounded py-2.5 px-10 text-purple text-base hover:text-white transition duration-300 flex items-center justify-center gap-2.5",
};

export default function Button({
  className,
  children,
  link,
  handleClick,
  variant = "primary",
}: Props) {
  const classes = clsx(variantClasses[variant], className);

  if (link) {
    return (
      <Link href={link.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}
