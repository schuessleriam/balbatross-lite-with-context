import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import CurrentUserContext from './contexts/users/current-user.context.js';

import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDoc } from './firebase/firebase.utils';


class App extends React.Component {
 
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDoc(userAuth);
        
        userRef.onSnapshot(snapshot => {
          this.setState({currentUser: {
              id: snapshot.id,
              ...snapshot.data()
          }});
        })
      }
      else{
        this.setState({currentUser : userAuth});
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header/>
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path="/"  component = {HomePage}/>
          <Route path="/shop"  component = {ShopPage}/>
          <Route exact path="/checkout"  component = {CheckoutPage}/>
          <Route exact path="/signin"  render={() => this.state.currentUser ? 
            <Redirect to='/'/> : <SignInAndSignUp/>}
          /> 
        </Switch> 
      </div>
    );    
  }
}

export default App;
