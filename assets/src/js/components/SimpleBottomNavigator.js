import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PromotionIcon from '@material-ui/icons/List';
import RewardsIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Store';
import CouponIcon from '@material-ui/icons/CardGiftcard';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'

// import useWindowDimensions from './useWindowDimensions';

const useStyles = makeStyles(theme => ({
  BottomNavBar: {
    width:'100%',
    position:'fixed', 
    left:0,   
    bottom: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  // const { screenheight,screenwidth } = useWindowDimensions();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.BottomNavBar}
    >
      <BottomNavigationAction label="Promo" icon={<PromotionIcon />} component={Link} to="/app/promotion"/>
      <BottomNavigationAction label="Rewards" icon={<RewardsIcon />} component={Link} to="/app/rewards" />
      <BottomNavigationAction label="Menu" icon={<HomeIcon />} component={Link} to="/app/dashboard" />
      <BottomNavigationAction label="Coupon" icon={<CouponIcon />} component={Link} to="/app/coupon"/>
      <BottomNavigationAction label="Cart" icon={<CartIcon />} component={Link} to="/app/cart"/>
    </BottomNavigation>
  );
}
