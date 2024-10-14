'use client';
import Link from "next/link"


export default function Navbar() {
    const showNavigation = (e) => {
        const navigation = document.querySelector(".nav-Content")
        console.log("click")
        navigation.classList.toggle("hidden")
    }
    return (
        <nav className="text-white flex items-center p-5 bg-black">
            <div className="self-start">
                <Link href={"/"}>
                    経験
                </Link>
            </div>
            <div className="md:hidden flex flex-col w-full nav-Button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 self-end cursor-pointer text-gray-400 hover:text-white"
                    onClick={showNavigation}>
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
                <div className="hidden nav-Content">
                    <ul className="text-white flex flex-col items-center text-2xl">
                        <li className="py-2"> <Link href={"/"} className="cursor-pointer text-gray-300 hover:text-white"> Home </Link></li>
                        <li className="py-2"> <Link href={"/about"} className="cursor-pointer text-gray-300 hover:text-white"> About </Link></li>
                        <li className="py-2"> <Link href={"#"} className="cursor-pointer text-gray-300 hover:text-white"> Products </Link></li>
                        <li className="py-2"> <Link href={"#"} className="cursor-pointer text-gray-300 hover:text-white"> Categories </Link></li>
                        <li className="py-2"> <Link href={"#"} className="cursor-pointer text-gray-300 hover:text-white"> Contact Us </Link></li>
                    </ul>
                </div>
            </div>
            <div className="hidden md:block h-full mx-auto">
                <ul className="text-white flex">
                    <li> <Link href={"/"} className="cursor-pointer text-xl text-gray-300 px-5 hover:text-white"> Home </Link></li>
                    <li> <Link href={"/about"} className="cursor-pointer text-xl text-gray-300 px-5 hover:text-white"> About </Link></li>
                    <li> <Link href={"#"} className="cursor-pointer text-xl text-gray-300 px-5 hover:text-white"> Products </Link></li>
                    <li> <Link href={"#"} className="cursor-pointer text-xl text-gray-300 px-5 hover:text-white"> Categories </Link></li>
                </ul>
            </div>
            <div className="hidden md:block">
                <Link className="cursor-pointer text-xl text-gray-300 px-5 hover:text-white" href={"#"}>Sign in</Link>
            </div>
        </nav>
    )
}