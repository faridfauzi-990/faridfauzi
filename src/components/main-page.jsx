import React ,{Component} from 'react'
// import { Route, Switch, Redirect } from "react-router-dom"; 
import Login from './login'
import Product from './product'
import RegForm from './reg-form'
import dataFromJSON from "./data.json";
import DialogMaster from './dialog'
import NavBar from "./navbar" 

class MainComponent extends Component {
            state = { data: {
                                name:'',address:'',email:'',username:'farid',
                                prodId:'', prodName:'', prodDescr:'', prodImage:''
                            },
                        openDialogError: false, openDialogErrorText: 'User does not exists',
                        tab: 2, // 1 is login, 2 is product, 3 is registration
                        dataFromJSON: dataFromJSON,
                        currentPage: 1,
                        pageSize: 2,
                        productItem: [
                                        {
                                            prodId: 1,
                                            prodName: 'Bawang',
                                            prodDescr: 'Bawang Holland',
                                            prodImage: 'Gambar Bawang',
                                            prodOrder: 1
                                        },
                                        {
                                            prodId: 2,
                                            prodName: 'Sayur',
                                            prodDescr: 'Sayur panjang',
                                            prodImage: 'Gambar sayur',
                                            prodOrder: 2
                                        },
                                        {
                                            prodId: 3,
                                            prodName: 'Tembikai',
                                            prodDescr: 'Tembikai kecil',
                                            prodImage: 'Gambar tembikai',
                                            prodOrder: 3
                                        }
                        ]
                    }

            closeDialogError = () => {
                this.setState({openDialogError: false})
            }

            handleChangeEditText = (input) => {
                let {data} = this.state

                for (let  i in data) {
                    if (input.id === i) {
                        data[input.id] = input.value
                    }
                } 
            
                this.setState({data})
            }

            handleChangeScreen = (param , paramJSON, addOrEdit ) => {
                let {tab, dataFromJSON, data, openDialogErrorText, openDialogError} = this.state;
                //  console.log('dataFromJSON: ',dataFromJSON)
                  
                tab = param
                // console.log('tab: ',tab)

                if (param === 2) {
 

                    let access = false;
                    for (let i=0; i< dataFromJSON.length; i++) {
                        if (data.username === dataFromJSON[i].username) {
                            access = true;
                                } 
                            }

                    if (access) {
                        // console.log('pass')
                    } else {
                        // console.log('fail')
                        this.setState({openDialogError: true})
                        return false;
                    }
                }
 
                
                if (addOrEdit === 'add') {
                    openDialogErrorText= 'Username '+data.username+' successfully created'
                    openDialogError= true;
                } 
                if (addOrEdit === 'edit') {
                    openDialogErrorText= 'Username '+data.username+' successfully edited'
                    openDialogError= true;
                }

                this.setState({
                     tab
                    ,dataFromJSON: paramJSON?paramJSON:dataFromJSON
                    , openDialogErrorText
                    , openDialogError 
                })
                // console.log('dataFromJSON: ',paramJSON?paramJSON:dataFromJSON)
            }

            handlePageChange = tab => {                 
                this.setState({currentPage: tab})
            }

            submitDialog = () => {
                console.log('item has been submitted')
                let {productItem, data} = this.state;

                productItem.push({
                    prodId: productItem.length + 1,
                    prodName: data.prodName,
                    prodDescr: data.prodDescr,
                    prodImage: data.prodImage,
                    prodOrder: productItem.length + 1
                })

                productItem.sort(function (a, b) {
                     
                    if (a.prodOrder > b.prodOrder) {
                    return -1;
                    }
                    if (a.prodOrder < b.prodOrder) {
                    return 1;
                    }
                    return 0;
                });
                console.log('productItem: ',productItem)
                this.setState({productItem, openDialogError: false})
            }

            handleOpenDialog = flag => {
                // let {openDialogError} = this.state;
                 
                this.setState({
                    openDialogError: flag,
                    openDialogErrorText: 'Please fill in the item information'
                })
            }

    render() { 
        let {   productItem,
                currentPage,
                pageSize,
                data, tab, dataFromJSON, openDialogError, openDialogErrorText
            } = this.state;
        return (
            <React.Fragment>
                <NavBar
                tab={tab}
                handleChangeScreen={this.handleChangeScreen}
                />
                    {tab === 1 && ( 
                        <Login 
                        data={data}
                        {...this.props}
                         handleChangeScreen={this.handleChangeScreen}
                         handleChangeEditText={this.handleChangeEditText}
                         /> 
                    )}     
                    {tab === 2 && ( 
                        <Product {...this.props} 
                        data={data}
                        productItem={productItem}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        handlePageChange={(x) => this.handlePageChange(x)}
                        handleOpenDialog={(y) => this.handleOpenDialog(y)}
                        /> 
                    )}  
                    {tab === 3 && ( 
                        <RegForm
                        data={data}
                        {...this.props}
                        dataFromJSON={dataFromJSON}
                         handleChangeScreen={this.handleChangeScreen}
                         handleChangeEditText={this.handleChangeEditText}
                          /> 
                    )}

                <DialogMaster
                    data={data}
                    openDialogFlag={openDialogError}
                    textToShow={openDialogErrorText} 
                    buttonNo={this.closeDialogError}                 
                    buttonYes={this.submitDialog} 
                    handleChangeEditText={this.handleChangeEditText}  
                  />

            </React.Fragment>

        );
    }
}
 
export default MainComponent;