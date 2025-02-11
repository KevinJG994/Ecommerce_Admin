import { useParams } from "react-router-dom";
import dataList from '../../data.json'
import UpdateForm from "../components/UpdateForm";
import { useState } from "react";

function ItemDetailsPage() {
    const { itemId } = useParams();
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const dataItems = dataList.find((item) => item.id === parseInt(itemId));

    const handleEditClick = () => {
        setShowUpdateForm(true);
    };

    const handleFormSubmit = () => {
        setShowUpdateForm(false);
    };

    return (
        <div className="ItemsDetails-panel">
             {showUpdateForm ? (
                <UpdateForm dataItems={dataItems} onFormSubmit={handleFormSubmit} />
            ) : (
                <>
                    <div className="ItemsDetails-header">
                        <img src={dataItems.image} alt="product-img" className="ItemsDetails-image" />
                        <div className="ItemsDetails-info">
                            <h2 className="ItemsDetails-title">{dataItems.name}</h2>
                            <p className="ItemsDetails-description">Description: {dataItems.description}</p>
                        </div>
                    </div>

                    <div className="details-info">
                        <p><span>Brand: </span>{dataItems.brand}</p>
                        <p><span>Model:</span> {dataItems.model}</p>
                        <p><span>Category:</span> {dataItems.category}</p>
                        <p><span>Operating System:</span> {dataItems.operating_system}</p>
                        <p><span>Stock:</span> {dataItems.stock}</p>
                        <p><span>Price:</span> {dataItems.price}$</p>
                    </div>

                    <button onClick={handleEditClick} className="editButton">Edit</button>
                </>
            )}
        </div >
    )
}

export default ItemDetailsPage;