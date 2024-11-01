import Link from "next/link";

function Corolla() {
    return (
        <section className="h-full flex flex-col p-2 justify-center items-center">
            <div>
                <h1 className="text-3xl text-blue-950 underline">Toyota Corolla 2024 Price in Pakistan, Images, Reviews, & Specs</h1>
            </div>
            <div className="bg-black w-56 mt-2">
                <img src="/car1.jpg" alt="car-images" />
            </div>
            <div>
                <p className="text-black text-sm p-10 pt-3 text-justify">Toyota came to Pakistan in 1989 as a joint venture company and launched the first Toyota Corolla in Pakistan in 1993. It has since remained Pakistan's favorite car throughout the years. The 7th generation Corolla was the first to be locally assembled in Pakistan and instantly took over the market. It was produced in Pakistan until 2002, the longest period for a locally assembled Toyota model in the world.
                    In 1995, Toyota introduced the 8th generation Corolla with major upgrades, including a brand new four-cylinder 1.8-liter DOHC aluminum-body engine and a rounder exterior. The 9th generation Corolla was launched in 2000 with advanced security features such as anti-lock brakes, stability control, and traction control system, as well as a revolutionized sleek design. The 10th generation Corolla was introduced in Pakistan in 2009 with a wide variety of engine options ranging from 1.3 liters and 1.8 liters for the petrol variant and 2.0-liter for the diesel variant. Its sales have grown exponentially since its introduction, with an increase of 82.51 percent seen in 2021 alone.
                </p>
            </div>
            <div>
                <p className="text-green-500">PKR 50,00,000</p>
            </div>
            <div className="mt-2 relative">
                <button className="h-10 p-2 rounded-md content-center bg-blue-600 text-white">Make Payment</button>
                <Link href={"/checkout"} className="absolute inset-0"></Link>
            </div>
        </section>
    )
}

export default Corolla;