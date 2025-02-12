import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

function List({ products, deleteProduct }) {

    const handleDelete = (listId) => {
        deleteProduct(listId)
    };

    return (
        <div>
            <div className="listHeader">
                <p>Image</p>
                <p>Name</p>
                <p>Brand</p>
                <p>Model</p>
                <p>Price</p>
                <p>Delete</p>
            </div>
            {products.map((listed) => {
                return (
                    <div key={listed.id}>
                        <Link to={`/ItemDetailsPage/${listed.id}`} >
                            <ItemCard listItem={listed} deleteList={handleDelete} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default List;