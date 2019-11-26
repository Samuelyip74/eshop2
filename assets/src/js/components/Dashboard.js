import React, { useState, useEffect } from "react";
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom'

import CategoryListing from "./CategoryListing";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    card: {
        // TODO: Calc width divide by 2
        minWidth: 180,
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
  }));

export default function Dashboard(props) {
  const classes = useStyles();
  const [data, setdata] = useState( [] );
  const [loading, setloading] = useState(true);
  
  useEffect(() => { 
    axios.get(`http://127.0.0.1:8000/api/product/category/`)
        .then(res => {           
        setdata(res.data);
        setloading(false);
    })
  }, []);

  function handleProductCard () {
    console.log('clicked');
    return ( <CategoryListing /> )
  }

  if(loading) {
    return (
    <div><CircularProgress /></div>
    )
  } else {
    return (
        <div className={classes.root} style={{marginLeft:5,marginRight:5}}>
        <Grid 
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={1}>
            {data.map(item => (
            <Grid item xs={6} sm={3} key={item.id}>
                <Link to={`/app/category/${item.name}`} style={{textDecoration:'none'}}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={item.image}
                        title={item.name}
                        />
                        <CardContent style={{display:'flex',}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
            </Grid>
            ))}
        </Grid>
        </div>
    );
  }
}

