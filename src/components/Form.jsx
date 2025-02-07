export default function Form() {
    return (
        <div className="form-container">
            <form>
                <h2>Add Product</h2>
                <img src="../assets/KevTech.png" alt="" className="form-image" />
                <div className="form-grid">
           
                        <input name="Name" type="text" placeholder="Name" />
                
                        <input name="Description" type="text" placeholder="Description" />
                 
                        <input name="Image" type="url" placeholder="Product Image" />
                    
                        <input name="Brand" type="text" placeholder="Brand" />
                 
                        <input name="Model" type="text" placeholder="Model" />
                 
                        <input name="Stock" type="number" placeholder="Stock" />
                    
                        <input name="Price" type="number" placeholder="Price" />
                  
                        <select name="Category">
                            <option value="">----</option>
                            <option value="phone">SmartPhone</option>
                            <option value="laptop">Laptop</option>
                            <option value="tablet">Tablet</option>
                        </select>
                
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}