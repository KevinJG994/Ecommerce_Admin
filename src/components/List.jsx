import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

function List({ products }) {
    const deleteList = (listId) => {
        const filteredList = products.filter((listed) => {
            return listed.id !== listId;
        });
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
                            <ItemCard listItem={listed} deleteList={deleteList} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default List;