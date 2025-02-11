import List from '../components/List'

function DashBoardPage({ products, deleteProduct }) {
    return (
        <div className='dashboard'>
            <List products={products} deleteProduct={deleteProduct} />
        </div>
    )
}

export default DashBoardPage;