import { Link, useParams } from "react-router-dom";
import dataList from '../../data.json'

function ItemDetailsPage() {
    const { itemId } = useParams();

    const dataItems = dataList.find((item) => item.id === parseInt(itemId));
    return (
        <div className="ItemsDetails-panel">
            <div className="ItemsDetails-header">
                <img src={dataItems.thumbnail} alt="product-img" className="ItemsDetails-image" />
                <div className="ItemsDetails-info">
                    <h2 className="ItemsDetails-title">{dataItems.title}</h2>

                    <p className="ItemsDetails-description">Description: {dataItems.description}</p>
                </div>
            </div>

            <div className="details-info">
                <p><span>Price: </span>{dataItems.price}$</p>
                <p><span>Discount:</span> {dataItems.discountPercentage}%</p>
                <p><span>Rating:</span> {dataItems.rating}</p>
                <p><span>Stock:</span> {dataItems.stock}</p>
                <p><span>Brand:</span> {dataItems.brand}</p>
                <p><span>Category:</span> {dataItems.category}</p>
            </div>
        </div >
    )
}

export default ItemDetailsPage;