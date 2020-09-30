import React from "react";
import "./Body.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Header from "./Header.js";
import { useDataLayerValue } from "./DataLayer.js";
import SongRow from "./SongRow.js";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        {/* Icons */}
        <div className="body__icons">
          <PlayCircleFilledWhiteIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;

/* <div className="body__header">
        <img
          className="body__headerImg"
          src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10202775254134188&height=300&width=300&ext=1604060070&hash=AeSVNd0GIX83M0qO"
          alt=""
        />
        <div className="body__headerText">
          <h4>PLAYLIST</h4>
          <h1>
            <strong>Discover Weekly</strong>
          </h1>
          <p>
            Your weekly mixtape of fresh music. Enjoy new music and deep cuts
            picked for you. Updates every Monday.
          </p>
          <h4>Spotify</h4>
        </div>
      </div>
      <div className="body__middle">
        <PlayCircleFilledWhiteIcon
          style={{ fontSize: 70 }}
          className="body__middleGreen"
        />
        <FavoriteIcon fontSize="large" className="body__middleGreen" />
        <MoreHorizIcon fontSize="large" />
      </div>
      <div className="body__songs">I am songs</div> */
