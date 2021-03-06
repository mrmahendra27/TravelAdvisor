import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOtlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import DummyImage from "../../dummy.jpg";
import mapStyles from './mapStyles'

import useStyles from "./style";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChild,
  weatherData,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA4anYzycqen8qPtqJCoGE28wxYKvtbXa0" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={13}
        margin={[50, 50, 50, 50]}
        options={{disableDefaultUI:true, zoomControl:true}}
        onChange={(e) => {
          setCoordinates({
            lat: e.center.lat,
            lng: e.center.lng,
          });
          setBounds({
            ne: e.marginBounds.ne,
            sw: e.marginBounds.sw,
          });
        }}
        onChildClick={(child) => {
          setChild(child);
        }}
      >
        {places?.map((place, index) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={index}
          >
            {!isDesktop ? (
              <LocationOtlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={5} className={classes.paper}>
                <Typography
                  className={classes.Typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : DummyImage}
                  title={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
        {weatherData?.list?.length && weatherData.list.map((weather, index) => {
          <div key={index} lat={weather.coord.lat} lng={weather.coord.lon}>
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              height="100px"
            />
          </div>;
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
