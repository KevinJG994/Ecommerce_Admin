import { useState } from "react";
import dataList from '../../data.json'
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

function List() {
    const [list, setList] = useState(dataList)

    const deleteList = (listId) => {
        const filteredList = list.filter((listed) => {
            return listed.id !== listId;
        });

        setList(filteredList)
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
            {list.map((listed) => {
                return (
                    <div key={listed.id}>
                        <Link to={`/ItemDetailsPage/${listed.id}`}>
                            <ItemCard listItem={listed} deleteList={deleteList} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default List;