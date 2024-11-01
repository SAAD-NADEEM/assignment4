import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

function Cards() {
    return (
        <section className="flex gap-5 w-[1010px] my-4 h-auto">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
        </section>
    )
}

export default Cards;