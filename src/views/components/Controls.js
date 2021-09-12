import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import CircleIcon from "@material-ui/icons/Lens";
import TextureIcon from '@material-ui/icons/Texture';
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeMute from "@material-ui/icons/VolumeOff";
import FullScreen from "@material-ui/icons/Fullscreen";
import Popover from "@material-ui/core/Popover";
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import CreateIcon from '@material-ui/icons/Create';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import AddIcon from '@material-ui/icons/Add';

import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";


const useStyles = makeStyles((theme) => ({
  controlsWrapper: {
    visibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  button: {
    margin: theme.spacing(1),
  },
  controlIcons: {
    color: "#777",

    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },

  bottomIcons: {
    color: "#999",
    "&:hover": {
      color: "#fff",
    },
  },

  volumeSlider: {
    width: 100,
  },
}));

const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    marginTop: -5,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 5,
    borderRadius: 4,
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const Controls = forwardRef(
  (
    {
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onDuration,
      onRewind,
      onPlayPause,
      onFastForward,
      playing,
      played,
      elapsedTime,
      totalDuration,
      onMute,
      muted,
      onVolumeSeekDown,
      onChangeDispayFormat,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      volume,
      onVolumeChange,
      onBookmark,
    },
    ref
  ) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;


    return (
      <div ref={ref} className={classes.controlsWrapper}>

        <Grid
          container
          direction="column"
          justify="space-between"
          style={{ flexGrow: 1 }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
            style={{ padding: 16 }}
          >
            <Grid item>
              <Typography  style={{ color: "#fff" }}>
                Video Title
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" justify="center">
            <IconButton
              onClick={onRewind}
              className={classes.controlIcons}
              aria-label="rewind"
            >
              <FastRewindIcon
                className={classes.controlIcons}
                fontSize="inherit"
              />
            </IconButton>
            <IconButton
              onClick={onPlayPause}
              className={classes.controlIcons}
              aria-label="play"
            >
              {playing ? (
                <PauseIcon fontSize="inherit" />
              ) : (
                <PlayArrowIcon fontSize="inherit" />
              )}
            </IconButton>
            <IconButton
              onClick={onFastForward}
              className={classes.controlIcons}
              aria-label="forward"
            >
              <FastForwardIcon fontSize="inherit" />
            </IconButton>
          </Grid>
          {/* bottom controls */}
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ padding: 0 }}
          >
            <Grid item xs={12}>
              <PrettoSlider
                min={0}
                max={100}
                ValueLabelComponent={(props) => (
                  <ValueLabelComponent {...props} value={elapsedTime} />
                )}
                aria-label="custom thumb label"
                value={played * 100}
                onChange={onSeek}
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onSeekMouseUp}
                onDuration={onDuration}
              />
            </Grid>

            <Grid item>
              <Grid container alignItems="center">
                <IconButton
                  onClick={onPlayPause}
                  className={classes.bottomIcons}
                >
                  {playing ? (
                    <PauseIcon fontSize="small" />
                  ) : (
                    <PlayArrowIcon fontSize="small" />
                  )}
                </IconButton>

                <IconButton
                  // onClick={() => setState({ ...state, muted: !state.muted })}
                  onClick={onMute}
                  className={`${classes.bottomIcons} ${classes.volumeButton}`}
                >
                  {muted ? (
                    <VolumeMute fontSize="small" />
                  ) : volume > 0.5 ? (
                    <VolumeUp fontSize="small" />
                  ) : (
                    <VolumeDown fontSize="small" />
                  )}
                </IconButton>

                <Slider
                  min={0}
                  max={100}
                  value={muted ? 0 : volume * 100}
                  onChange={onVolumeChange}
                  aria-labelledby="input-slider"
                  className={classes.volumeSlider}
                  onMouseDown={onSeekMouseDown}
                  onChangeCommitted={onVolumeSeekDown}
                />
                <Button
                  variant="text"
                  onClick={
                    onChangeDispayFormat
                    //     () =>
                    //   setTimeDisplayFormat(
                    //     timeDisplayFormat == "normal" ? "remaining" : "normal"
                    //   )
                  }
                >
                  <Typography
                    variant="body1"
                    style={{ color: "#fff", marginLeft: 16 }}
                  >
                    {elapsedTime}/{totalDuration}
                  </Typography>
                </Button>
                <UncontrolledDropdown direction="up">
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    color="link"
                    data-toggle="drop"
                    id="dropdownMenuLink"
                   
                  >
                   <TextureIcon style={{ fill: "grey"}}></TextureIcon>
                  </DropdownToggle>
                  <DropdownMenu style={{"padding-top":"0rem","padding-bottom":"0rem","margin":"5px","background-color":"black"}}  aria-labelledby="dropdownMenuLink" right >
                    <tr>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <CircleIcon style={{color:"orange"}}></CircleIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <CircleIcon style={{color:"yellow"}}></CircleIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <CircleIcon style={{color:"green"}}></CircleIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <CircleIcon style={{color:"red"}}></CircleIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <CircleIcon style={{color:"blue"}}></CircleIcon>
                    </DropdownItem>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <PanoramaFishEyeIcon style={{"fill":"white"}}></PanoramaFishEyeIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <CropPortraitIcon style={{"fill":"white"}}></CropPortraitIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <KeyboardBackspaceIcon style={{"fill":"white"}}></KeyboardBackspaceIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                      class='tool' id="tool-dashed"
                    >
                     <MoreVertIcon style={{"fill":"white"}}></MoreVertIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <RemoveIcon style={{"fill":"white"}}></RemoveIcon>
                    </DropdownItem>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <StarOutlineIcon style={{"fill":"white"}}></StarOutlineIcon>
                    </DropdownItem>
                    </td>
                                        <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <TextFieldsIcon style={{"fill":"white"}}></TextFieldsIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <CreateIcon style={{"fill":"white"}}></CreateIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <TouchAppIcon style={{"fill":"white"}}></TouchAppIcon>
                    </DropdownItem>
                    </td>
                    <td>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      style={{"padding":"0.5rem 0.5rem"}}
                    >
                     <DeleteIcon style={{"fill":"red"}}></DeleteIcon>
                    </DropdownItem>
                    </td>
                    </tr>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <AddIcon style={{ fill: "green"}}></AddIcon>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                onClick={handleClick}
                aria-describedby={id}
                className={classes.bottomIcons}
                variant="text"
              >
                <Typography>{playbackRate}X</Typography>
              </Button>

              <Popover
                container={ref.current}
                open={open}
                id={id}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Grid container direction="column-reverse">
                  {[0.5, 1, 1.5, 2].map((rate) => (
                    <Button
                      key={rate}
                      //   onClick={() => setState({ ...state, playbackRate: rate })}
                      onClick={() => onPlaybackRateChange(rate)}
                      variant="text"
                    >
                      <Typography
                        color={rate === playbackRate ? "secondary" : "inherit"}
                      >
                        {rate}X
                      </Typography>
                    </Button>
                  ))}
                </Grid>
              </Popover>
              <IconButton
                onClick={onToggleFullScreen}
                className={classes.bottomIcons}
              >
                <FullScreen fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
);

Controls.propTypes = {
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  onFastForward: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onChangeDispayFormat: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
};
export default Controls;
