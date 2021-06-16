
import _ from 'lodash'

const Pagination = (props) => {
    const {itemsCount, pageSize, onPageChange} = props

    //returns the smallest integer greater than or equal to the decimal evaluated, kinda works as a force round up
    const pagesCount = Math.ceil(itemsCount / pageSize)

    if (pagesCount === 1) return null
    // keeping pagesCount by its self as the end number would return 1, 2, 3 so for us to reach for we had to add a + 1
    const pages = _.range(1, pagesCount + 1)

    return ( 
        <nav className='page navigation example'>
            <ul className='pagination'>
                {pages.map(page => (
                 <li className='page-item' key={page}>
                   <a className='page-link' onClick={() => onPageChange(page)}>{page}</a> 
                 </li>  
                ))}
            </ul>
        </nav> 
      
      );
}

/*
class Pagination extends Component {
    render() { 
        return ( 
        <nav className='page navigation example'>
            <ul className='pagination'>
             <li className='page-item' onClick={this.props.page1}>
                 <a className='page-link' href='#'>1</a> 
            </li>
             <li className='page-item' onClick={this.props.page2}><a className='page-link' href='#'>2</a> </li>
             <li className='page-item' onClick={this.props.page3}><a className='page-link' href='#'>3</a> </li>
            </ul>
        </nav> 
      
      );
    }
}
 */
export default Pagination;