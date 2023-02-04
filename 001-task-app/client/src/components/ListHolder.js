const ListHolder = ({ listName }) => {
    render(
        <div className="list-header">
           <h1>{listName}</h1>
           <div className="button-container">
              <button>ADD</button>
              <button>SIGN OUT</button>
           </div>
        </div>
    )
}

export default ListHolder