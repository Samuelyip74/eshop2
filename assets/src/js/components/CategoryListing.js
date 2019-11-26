import React, { useState, useEffect } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link, Route,useParams } from 'react-router-dom'
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

export default function ProductCard(props) {
  let { category } = useParams();
  const classes = useStyles();
  const [data, setdata] = useState( [] );
  const [loading, setloading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => { 
    axios.get(`http://127.0.0.1:8000/api/product/category/` + category)
        .then(res => {           
        setdata(res.data);
        setloading(false);
    })
  }, []);

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
                <Link to={`/app/product/${item.id}`} style={{textDecoration:'none'}}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={"http://127.0.0.1:8000" + item.images[0].image}
                        title={item.sku}
                        />
                        <CardContent style={{display:'flex',}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.sku}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
                {/* <Route exact path='/app/product/{item.id}'>
                  <ProductCard product={item} />
                </Route> */}
            </Grid>
            ))}
        </Grid>
        </div>
    );
  }
}
