import React ,{Component} from 'react'
import {TextField, Tooltip} from "@material-ui/core";
import { Button 
    // , Typography
 } from "@material-ui/core";
import { toast } from "react-toastify";
import {Clear, Check, Person} from "@material-ui/icons";

   
 

class Login extends Component {
     

    handleClearSubPage = () => {
        let {handleClear, data} = this.props    

        data.username = '';
        data.password = '';
        data.passwordDisp = '';
        handleClear(data)

    }

    handleChangeTextBox =({currentTarget: input}) => {        
        let {handleChangeEditText} = this.props;
        handleChangeEditText(input)
    }

    handleClick = (param) => {
        const { handleChangeScreen} = this.props;
        toast.info('info ') 
        handleChangeScreen(param )
    }

    render() { 
        let {data} = this.props;
        return ( 
            <React.Fragment>
                <div className="App">
                    <header className="App-header">
                 <table className="Table-color" >
                <tbody>
                    <thead style={{ width: "100%", textAlign:"center"}}>
                        <b> Login </b>
                    </thead>
                <tr key={1}>
                <td width="50%">Username: </td>
                <td width="50%">
                    <TextField  
                    id ={'username'}                  
                    placeholder="Fill in username"
                    value={data.username}
                    onChange={this.handleChangeTextBox}
                    />
                </td>                     
                </tr>
                <tr key={2}>
                <td width="50%">Password: </td>
                <td width="50%">
                    <TextField                     
                    id ={'passwordDisp'}                  
                    placeholder="Fill in password"
                    value={data.passwordDisp}
                    onChange={this.handleChangeTextBox}
                    />
                </td>                     
                </tr>

            <tr>
                     <td>
                         <Tooltip title='Login' >
                         <Button
                         style={{
                            // height: "25px",
                            // minWidth: "25px",
                            backgroundColor: "grey",
                            // display: "flex",
                            // marginBottom: "2px",
                            // textAlign: "right"
                          }}
                         onClick={() => this.handleClick(2)}
                         >
                             <Check style={{margin:"12px",  color: "#e0e0e0" }} / >
                             </Button>
                             </Tooltip>
                                                                   
                        <Tooltip title='Create new ID' >
                         <Button
                         style={{
                            // height: "25px",
                            // minWidth: "25px",
                            backgroundColor: "brown",
                            // display: "flex",
                            // marginBottom: "2px",
                            // textAlign: "right",
                            float: 'right'
                          }}
                         onClick={() => this.handleClick(3)}
                         >
                             <Person style={{margin:"12px",  color: "#e0e0e0" }} />
                             </Button>
                             </Tooltip>
 
                             </td>
                     <td>
                        <Tooltip title='Clear inputs' >
                         <Button
                         style={{
                            // height: "25px",
                            // minWidth: "25px",
                            backgroundColor: "red",
                            // display: "flex",
                            // marginBottom: "2px",
                            // textAlign: "right"
                          }}
                         onClick={this.handleClearSubPage}

                         >
                             <Clear style={{margin:"12px",  color: "#e0e0e0" }} />
                             </Button>
                             </Tooltip>
                     </td>
                     </tr>

            </tbody>
            </table>
            </header>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Login;