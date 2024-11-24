"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface TabLink {
    text: string,
    url: string,
}



const TabLink: React.FC<TabLink> = ({text,url}) => {
  const pathname = usePathname();
  return (
    <Link href={url} passHref className={` `}>
        <span className={` ${pathname === url && "text-blue-500 "} tab__link text-[0.6rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-medium`}>
          {text}
        </span>
    </Link>
  )
}

export default TabLink
