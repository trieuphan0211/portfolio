import Link from "next/link";

const ButtonShadow = ({
  children,
  onClick,
  className,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <Link
      href={"/"}
      onClick={onClick}
      className={` w-max py-[18px] px-[50px] rounded text-green border-green border leading-none hover:-translate-x-1 hover:-translate-y-1 transition-all hover:shadow-button ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonShadow;
