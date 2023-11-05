
import SaleProduct from "~/components/SaleProduct";
import Slider from "~/components/Slider";
import TopSellingProduct from "~/components/TopSellingProduct";

function Home() {
    return (
        <div>
            <Slider/>
            <SaleProduct/>
            <TopSellingProduct/>
        </div>
    );
}

export default Home;