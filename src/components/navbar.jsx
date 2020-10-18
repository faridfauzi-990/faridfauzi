import { ExitToApp, Person, List } from '@material-ui/icons';
import React, { Component } from 'react';
import { Tooltip} from "@material-ui/core";
 

class NavBar extends Component {
     
    render() { 
        let {tab} = this.props
        let {handleChangeScreen} =this.props;
        return ( 
            <nav className="navbar-main">
                  {tab === 2 && (
                      <React.Fragment>
                      <Tooltip title='Logout' >
                        <a  onClick={() => handleChangeScreen(1)}>                         
                            <ExitToApp className="navbar-edit"/>                                    
                        </a>                    
                     </Tooltip>

                    <Tooltip title='Edit Profile' >
                        <a  onClick={() => handleChangeScreen(3)}>                         
                        <Person className="navbar-edit"/>                                    
                        </a>
                    </Tooltip>
                    </React.Fragment>
                )}
                {tab === 3 && (
                    <React.Fragment>
                    <Tooltip title='Logout' >
                      <a  onClick={() => handleChangeScreen(1)}>                         
                          <ExitToApp className="navbar-edit"/>                                    
                      </a>                    
                   </Tooltip>
                    <Tooltip title='Product' >
                        <a  onClick={() => handleChangeScreen(2)}>
                        <List className="navbar-edit"/>                                    
                        </a>
                    </Tooltip>
                    </React.Fragment>
                )}
            </nav>
         );
    }
}
 
export default NavBar;