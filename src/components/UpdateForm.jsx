import { useState } from "react";
import { Link } from "react-router-dom";

export default function UpdateForm({dataItems}) {
    const [name, setName] = useState(dataItems.name)
    const [description, setDescription] = useState(dataItems.description)
    const [image, setImage] = useState(dataItems.image)
    const [brand, setBrand] = useState(dataItems.brand)
    const [model, setModel] = useState(dataItems.model)
    const [stock, setStock] = useState(dataItems.stock)
    const [price, setPrice] = useState(dataItems.price)
    const [category, setCategory] = useState(dataItems.category)
    const [operatingSystem, setOperatingSystem] = useState(dataItems.operatingSystem)

    const handleName = e => setName(e.target.value);
    const handleImage = e => setImage(e.target.value);
    const handleDescription = e => setDescription(e.target.value);
    const handleBrand = e => setBrand(e.target.value);
    const handleModel = e => setModel(e.target.value);
    const handleStock = e => setStock(e.target.value);
    const handlePrice = e => setPrice(e.target.value);
    const handleCategory = e => setCategory(e.target.value);
    const handleOperatingSystem = e => setOperatingSystem(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateProduct = { name, description, image, brand, model, stock, price, category, operatingSystem }

        console.log("Updated: ", updateProduct);
    }

    return (
        <div className="updateForm-container">
            <form onSubmit={handleSubmit}>
                <h2>Edit Product</h2>
                <img src="../src/assets/KevTech.png" className="form-image" />
                <div className="form-grid">

                    <input name="Name" type="text" placeholder="Name" value={name} onChange={handleName} required />

                    <input name="Description" type="text" placeholder="Description" value={description} onChange={handleDescription} required />

                    <input name="Image" type="url" placeholder="Product Image" value={image} onChange={handleImage} required />

                    <input name="Brand" type="text" placeholder="Brand" value={brand} onChange={handleBrand} required />

                    <input name="Model" type="text" placeholder="Model" value={model} onChange={handleModel} required />

                    <input name="Stock" type="number" placeholder="Stock" value={stock} onChange={handleStock} required />

                    <input name="Price" type="text" placeholder="Price" value={price} onChange={handlePrice} required />

                    <select name="Category" value={category} onChange={handleCategory} required>
                        <option value="" disabled>Category</option>
                        <option value="SmartPhone">SmartPhone</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Tablet">Tablet</option>
                    </select>

                    <select name="OperatingSystem" value={operatingSystem} onChange={handleOperatingSystem} required>
                        <option value="" disabled>Operating System</option>
                        <option value="Windows">Windows</option>
                        <option value="macOs">macOs</option>
                        <option value="Android">Android</option>
                        <option value="iOs">iOs</option>
                    </select>
                </div>  
                <button type="submit" >Edit Product</button>
            </form>
        </div>
    );
}