function ItemCard(props) {
    const { listItem } = props;

    return (
        <div key={listItem.id} className="ItemCard">
            <img src={listItem.thumbnail} className="ItemCard-img" />
            <h2 className="ItemCard-title">{listItem.title}</h2>
            <p className="ItemCard-price">{listItem.price}</p>
            <p className="ItemCard-discount">{listItem.discountPercentage}</p>
            <p className="ItemCard-rating">{listItem.rating}</p>
        </div>
    );
}

export default ItemCard;
