function ItemCard(props) {
    const { listItem } = props;

    return (
        <div key={listItem.id} className="ItemCard">
            <h2 className="ItemCard-title">{listItem.title}</h2>
            <p className="ItemCard-description">{listItem.description}</p>
            <p className="ItemCard-price">{listItem.price}</p>
            <p className="ItemCard-discount">{listItem.discountPercentage}</p>
            <p className="ItemCard-rating">{listItem.rating}</p>
            <p className="ItemCard-stock">{listItem.stock}</p>
            <p className="ItemCard-brand">{listItem.brand}</p>
            <p className="ItemCard-category">{listItem.category}</p>
            <img src={listItem.thumbnail} className="ItemCard-thumbnail" />
            <img src={listItem.images} alt="product-img" className="ItemCard-image" />
        </div>
    );
}

export default ItemCard;
