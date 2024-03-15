import Image from "next/image";
import Link from "next/link";


export default function Logo() {
  return (
    <Link href="/">
      <Image width={60} height={54} src="/logo.png" className="w-auto rounded-[13px]" priority alt="Logo" />
    </Link>
  )
}