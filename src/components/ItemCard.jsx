function ItemCard(props) {
    const { listItem } = props;

    return (
        <div key={listItem.id} className="ItemCard">
            <img src={listItem.image} className="ItemCard-img" />
            <h2 className="ItemCard-title">{listItem.name}</h2>
            <p className="ItemCard-price">{listItem.brand}</p>
            <p className="ItemCard-discount">{listItem.model}</p>
            <p className="ItemCard-rating">{listItem.price}</p>
        </div>
    );
}

export default ItemCard;
