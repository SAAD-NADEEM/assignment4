import Cards from "./Cards";
import Header from "./Header"
import Nav from "./Nav";

function Featured() {
    return(
        <section className="flex flex-col justify-center items-center my-4 bg-[#f2f3f3] h-auto w-full">
            <Header />
            <Nav />
            <Cards />
        </section>
    )
}

export default Featured;