import React ,{Component} from 'react'
import {TextField, Tooltip} from "@material-ui/core";
import { Button 
    // , Typography
 } from "@material-ui/core";
// import { toast } from "react-toastify";
import {Clear,Check} from "@material-ui/icons";
   
 

class RegForm extends Component {
     

    handleClear = () => {
        // let{data} = this.state;
        // data.username = ''
        // data.password = ''
        // this.setState({data})
    }

    handleChangeTextBox =({currentTarget: input}) => {        
         
        let {handleChangeEditText} = this.props;
        handleChangeEditText(input)
    }

    handleClick = param => {
        let  { handleChangeScreen, dataFromJSON, data} = this.props;
 
        let doNotAdd = false;
        let addOrEdit = '';
        for (let i=0; i< dataFromJSON.length; i++) {
            if (dataFromJSON[i].username === data.username) {
                doNotAdd = true;
                addOrEdit = 'edit'
                dataFromJSON[i].username = data.username
                dataFromJSON[i].name = data.name
                dataFromJSON[i].email = data.email
                dataFromJSON[i].address = data.address
            }
        }

        if (!doNotAdd) {
            addOrEdit = 'add'
          dataFromJSON.push({
            name: data.name,
            email: data.email,
            address: data.address,
            username: data.username
            })
        }
    
        // console.log('hc2: ',param)     
        handleChangeScreen(param, dataFromJSON,  addOrEdit)
    }

    render() { 
        let {data} = this.props;
        return ( 
            <React.Fragment>
                <div className="App">
                        <header className="App-header">     
                 <table className="Table-color" >
                <tbody>
                    <thead style={{textAlign:"center"}}>
                        <b> User Profile Information </b>
                    </thead>
                <tr key={1}>
                <td width="50%">Name: </td>
                <td width="50%">
                    <TextField   
                    id ={'name'}                  
                    placeholder="David Beckham"
                    value={data.name}
                    onChange={this.handleChangeTextBox}
                    />
                </td>                     
                </tr>
                <tr key={2}>
                <td width="50%">email: </td>
                <td width="50%">
                    <TextField                     
                    id ={'email'}                  
                    placeholder="farid@regovtech.com"
                    value={data.email}
                    onChange={this.handleChangeTextBox}
                    />
                </td>                     
                </tr>
                <tr key={3}>
                <td width="50%">address: </td>
                <td width="50%">
                    <TextField                     
                    id ={'address'}                  
                    placeholder="B-7-3A, Block B West, Menara Pj8, 46050 Petaling Jaya, Selangor"
                    value={data.address}
                    onChange={this.handleChangeTextBox}
                    />
                </td>                     
                </tr>
                <tr key={4}>
                <td width="50%">username: </td>
                <td width="50%">
                    <TextField                     
                    id ={'username'}                  
                    placeholder="farid"
                    value={data.username}
                    onChange={this.handleChangeTextBox}
                    />
                </td>                     
                </tr>

                <tr key={5}>
                <td width="50%">picture: </td>
                <td width="50%">
                    <input 
                    type="file" id="docpicker"
                    accept=".jpg,.png,.jpeg"
                    />
 

                </td>                     
                </tr>

            <tr>
                     <td>
                         <Tooltip title='Submit' >
                         <Button
                         style={{ 
                            backgroundColor: "grey", 
                          }}
                         onClick={() => this.handleClick(1)}
                         >
                             <Check style={{color: "#e0e0e0" }} / >
                             </Button>
                             </Tooltip>
                     </td>

                     <td>
                        <Tooltip title='Clear inputs' >
                         <Button
                         style={{ 
                            backgroundColor: "grey"
                          }}
                         onClick={this.handleClear}

                         >
                             <Clear style={{ color: "#e0e0e0" }} / >
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
 
export default RegForm;