import React, { useState, useEffect, createRef } from "react";
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
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, child, isLoading, rating, setRating, type, setType }) => {
  const classes = useStyles();

  const [elementRef, setElementRef] = useState([]);

  useEffect(() => {
    setElementRef((elementRef) => Array(places?.length).fill().map((_, i) => elementRef[i] || createRef()));
  }, [places]);
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Hotels, Restaurants & Attraction around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
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
                <Grid ref={elementRef[index]} item key={index} xs={12}>
                  <PlaceDetails
                    place={place}
                    selected={Number(child) === index}
                    refProp={elementRef[index]}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
