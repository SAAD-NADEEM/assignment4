import Link from "next/link";

function Card1() {
    
    return (
        <div className="h-[290px] w-[255px] bg-white relative">
            <div className="w-full h-[66%]">
                <img src="/car1.jpg" alt="car-image" className="h-full w-full" />
            </div>
            <div className="h-[34%] w-full flex flex-col justify-center items-center">
                <p className="text-[15px] font-bold text-[#233d7b]">Toyota Corolla</p>
                <div>
                    <p className="text-green-600 text-sm text-center">PKR 59.7 - 75.5 lacs</p>
                    <div className="flex gap-1 h-auto w-full justify-center items-center p-2">
                        <div className=" flex h-3 w-full">
                            <img src="/star.svg" alt="star" className="h-full w-full" />
                            <img src="/star.svg" alt="star" className="h-full w-full" />
                            <img src="/star.svg" alt="star" className="h-full w-full" />
                            <img src="/star.svg" alt="star" className="h-full w-full" />
                            <img src="/star.svg" alt="star" className="h-full w-full" />
                        </div>
                        <p className="text-gray-500 text-nowrap text-sm content-center">622 Reviews</p>
                    </div>
                </div>
            </div>
            <Link href={"/toyota-corolla"} className="absolute inset-0"></Link>
        </div>
    )
}

export default Card1;