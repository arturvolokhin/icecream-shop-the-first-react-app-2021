import BestsellersItem from "./BestsellersItem";
import { getLocalStorage } from '../../utils/localStorage';

const Bestsellers = () => {

    const data = getLocalStorage('bestsellers');

    return (
        <section className="bestsellers">
            {data.map((item, index) => {
                return (
                    <BestsellersItem
                        key={index}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                    />
                );
            })}
        </section>
    );
};

export default Bestsellers;
