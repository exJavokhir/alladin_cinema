import './main.scss'

const Pagination = ({activePage, setActivepage, totalPages})=>{
// 
// 

    return (
        <div className="pagination">
            <button disabled={`${activePage <= 1 ? 'true' : ''}`} className="disabled"  onClick={() => setActivepage(activePage - 1)}>{`< prev`}</button>
            <button disabled={`${activePage >= totalPages ? 'true' : ''}`}  onClick={() => setActivepage(activePage + 1)}>{`next >`}</button>
        </div>
    )
}

export default Pagination