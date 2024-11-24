"use client"
import Image from "next/image"
import Logo from "@public/assets/images/logo/svg/todo-hive-favicon-color(2).svg"
import ButtonBorder from "./ButtonBorder"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

const Navbar: React.FC = () => {
    const router = useRouter();
    const pathName = usePathname();
  return (
    <nav className=" flex items-center justify-center py-6">
        <div className="lg:min-w-[1024px] min-w-[100%] lg:px-3 px-6 flex justify-between ">
            <Link href={'/'}>
                <picture className="flex gap-2 items-center">
                    <div className="relative h-10 w-10 md:h-14 md:w-14">
                        <Image
                            src={Logo}
                            layout="fill"
                            alt="Logo"
                        />
                    </div>
                    <figcaption className="md:block hidden text-lg font-medium">Todo<span className="text-blue-800 font-semibold">Hive</span></figcaption>
                </picture>
            </Link>
            <div className="flex gap-3 items-center">
                {
                    pathName === '/signup' ?  
                    <ButtonBorder text={"Log In"} onClick={()=>{router.push('/login')}}/> :
                    <ButtonBorder text={"Sign Up"} onClick={()=>{router.push('/signup')}}/>
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar
