import Link from "next/link";

type Props = {
  title: string;
  link: string;
};

export default function AdminCard({ title, link }: Props) {
  return (
    <Link href={link}>
      <div className="w-90 h-90 bg-[#f3c623] text-white flex justify-center items-center shadow-md 
                      rounded-md hover:scale-105 transition cursor-pointer">
        {title}
      </div>
    </Link>
  );
}
