function ItemCard(props) {
    const { listItem, deleteList } = props;

    const handleDeleteClick = (event) => {
        event.preventDefault();
        deleteList(listItem.id)
    }

    return (
        <div key={listItem.id} className="ItemCard">
            <img src={listItem.image} className="ItemCard-img" />
            <h2 className="ItemCard-title">{listItem.name}</h2>
            <p className="ItemCard-price">{listItem.brand}</p>
            <p className="ItemCard-discount">{listItem.model}</p>
            <p className="ItemCard-rating">{listItem.price}$</p>

            <button onClick={handleDeleteClick} className="deleteButton">
                <i className="fa-solid fa-x"></i>
            </button>
        </div>
    );
}

export default ItemCard;
