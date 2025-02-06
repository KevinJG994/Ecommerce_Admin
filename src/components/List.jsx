import { useState } from "react";
import dataList from '../../data.json'
import ItemCard from "./ItemCard";

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
            {list.map((listed) => {
                return (
                    <div key={listed.id}>
                        <ItemCard listItem={listed} />
                        <button onClick={() => deleteList(listed.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default List;