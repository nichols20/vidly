//The only problem I wasn't able to figure out was how I would process deleted movies to not appear when filters are clicked 
//without a setState

const Filter = (props) => {
    const {genres, handleFilter} = props

    return (
      <ul className="list-group" >
          <li className= 'list-group-item' onClick={() => handleFilter('all')}>All Movies</li>
          {genres.map(genre => <li className="list-group-item" key={genre.name} onClick={() => handleFilter(genre.name)}>{genre.name}</li>)}
      </ul>
    );
}
 
export default Filter;