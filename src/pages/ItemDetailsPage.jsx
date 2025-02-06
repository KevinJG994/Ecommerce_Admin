import { Link, useParams } from "react-router-dom";
import dataList from '../../data.json'

function ItemDetailsPage() {
    const { itemId } = useParams();

    const dataItems = dataList.find((item) => item.id === parseInt(itemId));
    return (
        <div>
            <p>{dataItems.title}</p>
            <p>Price: {dataItems.price}</p>
            <p>Discount: {dataItems.discountPercentage}%</p>
        </div>
    )
}

export default ItemDetailsPage;