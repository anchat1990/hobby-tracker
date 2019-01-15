import React, { Component } from "react";

const Tile = function(props) {
  const alertFunc = function() {
    alert(prop);
  };
  const { prop, className = "tile", onClick = alertFunc } = props;

  return (
    <div className={className} onClick={onClick}>
      <p>{prop}</p>
    </div>
  );
};

export default Tile;
