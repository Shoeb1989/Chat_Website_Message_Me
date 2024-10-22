import react, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Swith,
    Redirect
}   from 'react-router-dom';
import './App.css';
import home from './pages/home/home';
import chat from './pages/Chat/chat';
import profile from './pages/profile/profile';
import signup from './pages/signup/signup';
import Login from './pages/Login/login';
import firebase from './Services/firebase';
import {toast , ToastContainer} from 'react-toastify';
import Loading from 'react-loading';

class App extends Component{

    showToast = (type, message) => {
      switch(type){
        case 0:
        toast.warning(message)
        break; 
        case 1:
            toast.success(message)
            default :
              break;
      }  
    }
    constructor(){
        super();
        this.state = {
            authenticated: false,
            loading: true
        };
    }
     componentDidMount(){
        firebase.auth().onAuthstatechanged(user => {
  
         if(user){
            this.setState(
                authenticated : true,
                Loading :  false
            
            });
    }

    } else {
        this.setState({
            authenticated: false,
            Loading: false
        });
    }
}
     render(){
        return()
     }

    