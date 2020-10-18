// import { Table } from '@material-ui/core'
import React ,{Component
    // , Fragment
} from 'react'
import Pagination from './pagination'
import { paginate } from "../utils/paginate"
import { Add } from '@material-ui/icons';
import { Tooltip, Button } from "@material-ui/core";

class Product extends Component {
     
    render() { 
        let { 
            // data,
             productItem: allProdItem,
              currentPage,
               pageSize,
               handlePageChange,
               handleOpenDialog
            } =  this.props;
        let {length: count } = this.props.productItem

        if (count === 0) return <p>There are no product in the databse</p>  

        const productItem = paginate(allProdItem, currentPage, pageSize)

        return (
            <React.Fragment>
            <div className="App">
                        <header className="App-header">     
                        <Tooltip title='Add Regov item'>
                            <Button 
                            style={{backgroundColor:'grey', margin:5, padding: 5}}
                                onClick={() => handleOpenDialog(true) }
                            >
                                <Add/>
                            </Button>
                        </Tooltip>
                    <table  border="1" className="Table-color" >                    
                        <thead>
                            <tr>
                            <th width='20%'> Name </th>
                            <th width='40%'> Description </th>
                            <th width='40%'> Image </th>
                            </tr>
                        </thead>        
                        
                        <tbody>
                            {productItem.map( index => (
                                <tr key={index.prodId} >
                                    <td width='20%'>{index.prodName}</td>
                                    <td width='40%'>{index.prodDescr}</td>
                                    <td width='40%'>{index.prodImage}</td>
                                </tr>    
                            ))}
                        </tbody>
                    </table> 
                    
                    <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage} 
                    onPageChange={handlePageChange}
                    />
                    </header>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Product;