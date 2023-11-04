
import SaleProduct from "~/components/Layout/DefaultLayout/SaleProduct";
import Slider from "~/components/Layout/DefaultLayout/Slider";
import TopSellingProduct from "~/components/Layout/DefaultLayout/TopSellingProduct";

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