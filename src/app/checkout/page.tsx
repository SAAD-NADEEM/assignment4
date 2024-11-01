"use client"

import { useRouter } from "next/navigation"

function Checkout() {
    
    const router = useRouter()

    const handleSubmit = (e:any) => {
        e.preventDefault()
        router.push("/thank-you")
    }
    
    return (
        <section className="h-[calc(100svh-107px)] bg-black w-full flex flex-col">
            <h1 className="text-blue-900 font-bold text-3xl text-center p-4">Enter Your Details</h1>
            <form onSubmit={handleSubmit} className="h-full flex justify-center items-center">
                <div className="flex flex-col gap-2">
                    <input className="bg-white rounded-md p-2 w-80 text-blue-900 font-semibold outline-none" type="text" />
                    <input className="bg-white rounded-md p-2 w-80 text-blue-900 font-semibold outline-none" type="email" />
                    <input className="bg-white rounded-md p-2 w-80 text-blue-900 font-semibold outline-none" type="number" />
                    <input className="bg-white rounded-md p-2 w-80 text-blue-900 font-semibold outline-none" type="text" />
                    <button type="submit" className="w-full p-2 rounded-md bg-blue-900 hover:opacity-50 transition-all">Place your Order</button>
                </div>
            </form>
        </section>
    )
}

export default Checkout;