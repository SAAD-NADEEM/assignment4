function Navbar() {


    return (
        <>
            <header className="h-auto flex flex-col items-center bg-slate-950 pt-1">
                <section className="flex justify-between w-[88%] border-b-[1px] border-gray-700 py-[1px]">
                    <div className="flex items-center cursor-pointer">
                        <div className="h-6 w-8">
                            <img src="/phone.svg" alt="phone" className="h-full w-full" />
                        </div>
                        <p className="h-4 text-sm leading-[14px]">Download App via SMS</p>
                    </div>
                    <ul className="flex flex-row text-sm">
                        <li className="p-1"><a href="#" className="text-red-700">اردو</a></li>
                        <li className="p-1"><a href="#" className="before:content-['|'] before:mr-2 before:text-slate-700">Sign Up</a></li>
                        <li className="p-1"><a href="#" className="before:content-['|'] before:mr-2 before:text-slate-700">Sign In</a></li>
                    </ul>
                </section>
                <nav className="h-full w-[88%] flex justify-between items-center pt-2">
                    <div className="h-16 w-40">
                        <img src="/pakwheelslogo.svg" alt="pakwheel logo" className="h-full w-full" />
                    </div>
                    <ul className="flex gap-1 font-medium">
                        <li className="navBox caret">Used Cars</li>
                        <li className="navBox caret">New Cars</li>
                        <li className="navBox caret">Bikes</li>
                        <li className="navBox caret">Auto Store</li>
                        <li className="navBox">Videos</li>
                        <li className="navBox">Forums</li>
                        <li className="navBox">Blog</li>
                        <li className="navBox caret">More</li>
                    </ul>
                    <div>
                        <button className="font-bold bg-red-700 py-2 px-5 rounded caret2">Post an Ad</button>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Navbar;