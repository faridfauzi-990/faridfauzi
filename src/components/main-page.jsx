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
                                name:'',address:'',email:'',username:'farid',password:'',passwordDisp:'',
                                prodId:'', prodName:'', prodDescr:'', prodImage:''
                            },
                        openDialogError: false, openDialogErrorText: 'Username or Password does not exists',
                        tab: 1, // 1 is login, 2 is product, 3 is registration
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
                        if (input.id === 'passwordDisp') {
                            
                            data['password'] += input.value.replaceAll('*', '');
                            let tempVar = input.value;
                            data[input.id] = tempVar.replace(/./g, '*');                             

                            if (
                                // data.password &&
                                // input.value &&
                                // data.password.length &&
                                // input.value.length &&
                                data.password.length !== input.value.length) {
                                data.password = data.password.substr(0,input.value.length)
                            }
                            console.log('data.password: ',data.password)

                        } else {
                            data[input.id] = input.value
                        }
                        
                    }
                } 
            
                this.setState({data})
            }

            handleChangeScreen = (param , paramJSON, addOrEdit ) => {
                let {tab, dataFromJSON, data, openDialogErrorText, openDialogError} = this.state;
                 
                  
                tab = param 

                if (param === 2) { 

                    let access = false;
                    for (let i=0; i< dataFromJSON.length; i++) {
                        if (
                            data.username === dataFromJSON[i].username &&
                            data.password === dataFromJSON[i].password
                            ) {
                                access = true;
                            } 
                    }

                    if (access) {                         
                        } else {                         
                            this.setState({openDialogError: true, openDialogErrorText:'Username or password is not correct'})
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
                 
            }

            handlePageChange = tab => {                 
                this.setState({currentPage: tab})
            }

            submitDialog = () => {
                 
                let {productItem, data} = this.state;

                if (data.prodName === '') {
                    this.setState({openDialogError:true,openDialogErrorText:'Product Name cannot be empty'})
                    return false;
                }

                if (data.prodDescr === '') {
                    this.setState({openDialogError:true,openDialogErrorText:'Product Descr cannot be empty'})
                    return false;
                }

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
                 
                this.setState({productItem, openDialogError: false})
            }

            handleOpenDialog = flag => {
                // let {openDialogError} = this.state;
                 
                this.setState({
                    openDialogError: flag,
                    openDialogErrorText: 'Please fill in the item information'
                })
            }

            handleClear = (data) => {
                this.setState({data})
            }

            openDialogAndNotice = (param) => {

                this.setState({ 
                    openDialogError:true,
                    openDialogErrorText: param
                })
            }

            checkEmpty =(param)=>{
                this.setState({openDialogError:true,openDialogErrorText:param})
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
                            handleClear={this.handleClear}
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
                            handleClear={this.handleClear}
                            openDialogAndNotice={this.openDialogAndNotice}
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