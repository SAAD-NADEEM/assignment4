
function Card2() {
    
    return (
        <div className="h-[290px] w-[255px] bg-white relative cursor-pointer">
            <div className="w-full h-[66%]">
                <img src="/car2.png" alt="car-image" className="h-full w-full" />
            </div>
            <div className="h-[34%] w-full flex flex-col justify-center items-center">
                <p className="text-[15px] font-bold text-[#233d7b]">Suzuki  Alto</p>
                <div>
                    <p className="text-green-600 text-sm text-center">PKR 23.3 - 35.5 lacs</p>
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
        </div>
    )
}

export default Card2;