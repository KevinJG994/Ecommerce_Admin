import List from '../components/List'

function DashBoardPage({ products }) {
    return (
        <div className='dashboard'>
            <List products={products} />
        </div>
    )
}

export default DashBoardPage;