

const Filter = (props) => {
    const {genres} = props

    return (
      <ul className="list-group" >
          <li className= 'list-group-item'>All Movies</li>
          {genres.map(genre => <li className="list-group-item">{genre.name}</li>)}
      </ul>
    );
}
 
export default Filter;