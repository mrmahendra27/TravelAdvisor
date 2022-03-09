import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";

import useStyles from "./style";
import { Rating } from "@material-ui/lab";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places }) => {
  const classes = useStyles();

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Hotels, Restaurants & Attraction around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3 star</MenuItem>
          <MenuItem value={4}>Above 4 star</MenuItem>
          <MenuItem value={5}>Above 5 star</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) => {
          return (
            <Grid item key={index} xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default List;
