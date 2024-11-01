import Link from "next/link";

function civic() {
    return (
        <section className="h-full flex flex-col p-2 justify-center items-center">
            <div>
                <h1 className="text-3xl text-blue-950 underline">Honda Civic 2024 Price in Pakistan, Images, Specs & Features</h1>
            </div>
            <div className="bg-black w-56 mt-2">
                <img src="/car4.jpg" alt="car-images" />
            </div>
            <div>
                <p className="text-black text-sm p-10 pt-3 text-justify">The all-new Honda Civic 2024 showcases an attractive design language, featuring a modern front grille that embodies the essence of a new generation style. At the front, the car is equipped with daytime running lights that have an auto-off timer for convenience. The Standard and Oriel variants are equipped with Halogen projector headlamps, while the RS variant boasts stylish LED headlamps. Furthermore, the Civic RS offers additional features such as auto headlights, auto headlight adjustment, and auto high beam functionality. Moreover, the RS variant stands out with its front fog lights and a panoramic sunroof, providing an enhanced driving experience that is not available in the base variants. Other noteworthy standard features across all the variants include a one-touch lane winker, side mirrors with integrated turn signals, lens-type tail lamps, electrically adjustable door mirrors, and remote retractable mirrors.
                </p>
            </div>
            <div>
                <p className="text-green-500">PKR 86,00,000</p>
            </div>
            <div className="mt-2 relative">
                <button className="h-10 p-2 rounded-md content-center bg-blue-600 text-white">Make Payment</button>
                <Link href={"/checkout"} className="absolute inset-0"></Link>
            </div>
        </section>
    )
}

export default civic;