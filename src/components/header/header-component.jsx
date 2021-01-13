/*jshint esversion:9*/
import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user-selector';
import {selectCartHidden} from '../../redux/cart/cart-selector';
import {signOutStart} from '../../redux/user/user-actions';
import './header-styles.scss';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header-styles';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';

const Header = ({currentUser,hidden,signOutStart}) =>
(
  <HeaderContainer>
    <LogoContainer to ='/'>
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser?
        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
        :
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    { !hidden?
      (<CartDropdown/>):
      null
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
