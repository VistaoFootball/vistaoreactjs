import React, { forwardRef } from "react";
import { useEffect, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
          

          // import des icônes utilisées dans la page 
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import CircleIcon from "@material-ui/icons/Lens";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeMute from "@material-ui/icons/VolumeOff";
import FullScreen from "@material-ui/icons/Fullscreen";
import Popover from "@material-ui/core/Popover";
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import RemoveIcon from '@material-ui/icons/Remove';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import AddIcon from '@material-ui/icons/Add';
import Mouse from '@material-ui/icons/Mouse';
import Colorize from '@material-ui/icons/Colorize';
import ArrowForward  from "@material-ui/icons/ArrowForward";
import DeleteForeverRounded from "@material-ui/icons/DeleteForeverRounded";
import ArrowBack from "@material-ui/icons/ArrowBack";


          // Import des outils de dessins
import rough from "roughjs/bundled/rough.esm";
import getStroke from "perfect-freehand";

          //Import du dropdown canvas
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Collapse, 
  CardHeader,
  CardBody,
  Card
} from "reactstrap";

          //Style du bloc contenant les contrôles de la vidéo
      const useStyles = makeStyles((theme) => ({
        controlsWrapper: {
          visibility:"hidden",
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
          //La couleur active en global
          let color = "#000000";
          
          //Création des éléments avec les couleurs (sauf pencil)
          const createElement = (id, x1, y1, x2, y2, type) => {
              switch (type) {
              case "line": 
              //Je gère les lignes + les rectangles dans la même fonction vu que le return est le même. Peut etre les séparer à l'avenir ?
              case "rectangle":
                  const roughElement =
                type === "line" ? generator.line(x1, y1, x2, y2, {stroke: color}) : generator.rectangle(x1, y1, x2 - x1, y2 - y1, {stroke: color});
                  return { id, x1, y1, x2, y2, type, roughElement };
              case "pencil":
                  return { id, type, points: [{ x: x1, y: y1 }]};
                 
              // case "circle": Début de code pour cercle
              // 	const roughElement = generator.circle(480, 50, 80, {stroke: color});
              // 	  return { id, x1, y1, x2, y2, type, roughElement };
              default:
                  throw new Error(`Type not recognised: ${type}`);
              }
          };

      function setColor(sentColor) {
        //Ajouter des couleurs ici 
        switch (sentColor) {
          case "red":
            color = "#FF0000";
            break;
          case "blue":
            color = "#0000FF";
            break;
          case "green":
            color = "#00FF00";
            break;
          case "yellow":
            color = "#FFFF00";
            break;
          default:
            color = "#000000";
        }
      };

      const generator = rough.generator();
      
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
            onAddClip,
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
            onZoomIn,
            onZoomOut,
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
          
          const nearPoint = (x, y, x1, y1, name) => {
            return Math.abs(x - x1) < 5 && Math.abs(y - y1) < 5 ? name : null;
          };
          
          const onLine = (x1, y1, x2, y2, x, y, maxDistance = 1) => {
            const a = { x: x1, y: y1 };
            const b = { x: x2, y: y2 };
            const c = { x, y };
            const offset = distance(a, b) - (distance(a, c) + distance(b, c));
            return Math.abs(offset) < maxDistance ? "inside" : null;
          };
          
          const positionWithinElement = (x, y, element) => {
            const { type, x1, x2, y1, y2 } = element;
            switch (type) {
              case "line":
                const on = onLine(x1, y1, x2, y2, x, y);
                const start = nearPoint(x, y, x1, y1, "start");
                const end = nearPoint(x, y, x2, y2, "end");
                return start || end || on;
              case "rectangle":
                const topLeft = nearPoint(x, y, x1, y1, "tl");
                const topRight = nearPoint(x, y, x2, y1, "tr");
                const bottomLeft = nearPoint(x, y, x1, y2, "bl");
                const bottomRight = nearPoint(x, y, x2, y2, "br");
                const inside = x >= x1 && x <= x2 && y >= y1 && y <= y2 ? "inside" : null;
                return topLeft || topRight || bottomLeft || bottomRight || inside;
              case "pencil":
                const betweenAnyPoint = element.points.some((point, index) => {
                const nextPoint = element.points[index + 1];
                if (!nextPoint) 
                  return false;
                return onLine(point.x, point.y, nextPoint.x, nextPoint.y, x, y, 5) != null;
              });
              return betweenAnyPoint ? "inside" : null;
              default:
                  throw new Error(`Type not recognised: ${type}`);
              }
          };
          
          const distance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
          
          const getElementAtPosition = (x, y, elements) => {
              return elements.map(element => ({ ...element, position: positionWithinElement(x, y, element) })).find(element => element.position !== null);
          };
          
          const adjustElementCoordinates = element => {
            const { type, x1, y1, x2, y2 } = element;
            if (type === "rectangle") {
              const minX = Math.min(x1, x2);
              const maxX = Math.max(x1, x2);
              const minY = Math.min(y1, y2);
              const maxY = Math.max(y1, y2);
              return { x1: minX, y1: minY, x2: maxX, y2: maxY };
              } else {
              if (x1 < x2 || (x1 === x2 && y1 < y2)) {
                  return { x1, y1, x2, y2 };
              } else {
                  return { x1: x2, y1: y2, x2: x1, y2: y1 };
              }
              }
          };
          
          const cursorForPosition = position => {
              switch (position) {
              case "tl":
              case "br":
              case "start":
              case "end":
                return "nwse-resize";
              case "tr":
              case "bl":
                return "nesw-resize";
              default:
                  return "move";
              }
          };
          
          const resizedCoordinates = (clientX, clientY, position, coordinates) => {
              const { x1, y1, x2, y2 } = coordinates;
              switch (position) {
              case "tl":
              case "start":
                  return { x1: clientX, y1: clientY, x2, y2 };
              case "tr":
                  return { x1, y1: clientY, x2: clientX, y2 };
              case "bl":
                  return { x1: clientX, y1, x2, y2: clientY };
              case "br":
              case "end":
                  return { x1, y1, x2: clientX, y2: clientY };
              default:
                  return null; //Ne devrait jamais aller ici mais peut etre catch si jamais
              }
          };
          
          const useHistory = initialState => {
            const [index, setIndex] = useState(0);
            const [history, setHistory] = useState([initialState]);
          
            const setState = (action, overwrite = false) => {
              const newState = typeof action === "function" ? action(history[index]) : action;
              if (overwrite) {
                const historyCopy = [...history];
                historyCopy[index] = newState;
                setHistory(historyCopy);
              } else {
                const updatedState = [...history].slice(0, index + 1);
                setHistory([...updatedState, newState]);
                setIndex(prevState => prevState + 1);
              }
            };
          
            const undo = () => index > 0 && setIndex(prevState => prevState - 1);
            const redo = () => index < history.length - 1 && setIndex(prevState => prevState + 1);
          
          
          
              return [history[index], setState, undo, redo];
          };
          
          const getSvgPathFromStroke = stroke => {
              if (!stroke.length) return "";
          
              const d = stroke.reduce((acc, [x0, y0], i, arr) => {
                const [x1, y1] = arr[(i + 1) % arr.length];
                acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
                return acc;
            },["M", ...stroke[0], "Q"]
              );
          
              d.push("Z");
              return d.join(" ");
          };
          
          const drawElement = (roughCanvas, context, element, index) => {
              switch (element.type) {
              case "line":
              case "rectangle":
                  roughCanvas.draw(element.roughElement);
                break;
              case "pencil":
                  const stroke = getSvgPathFromStroke(getStroke(element.points));
                  context.fill(new Path2D(stroke));
                  break;
              default:
                  throw new Error(`Type not recognised: ${element.type}`);
              }
          };
          
          const adjustmentRequired = type => ["line", "rectangle"].includes(type);
          
            const [elements, setElements, undo, redo] = useHistory([]);
            const [action, setAction] = useState("none");
            const [tool, setTool] = useState("pencil");
            const [selectedElement, setSelectedElement] = useState(null);
          
          
            useLayoutEffect(() => {
		const canvas = document.getElementById("canvas");
		const context = canvas.getContext("2d");
		context.clearRect(0, 0, canvas.width, canvas.height);
		const roughCanvas = rough.canvas(canvas);

		elements.forEach((element, index) => drawElement(roughCanvas, context, element, index));
	}, [elements]);

              useEffect(() => {
              const undoRedoFunction = event => {
                if ((event.metaKey || event.ctrlKey) && event.key === "z") {
                  if (event.shiftKey) {
                    redo();
                  } else {
                    undo();
                  }
                }
              };
          
              document.addEventListener("keydown", undoRedoFunction);
              return () => {
                document.removeEventListener("keydown", undoRedoFunction);
              };
              }, [undo, redo]);
          
              const updateElement = (id, x1, y1, x2, y2, type) => {
              const elementsCopy = [...elements];
          
              switch (type) {
                case "line":
                case "rectangle":
                  elementsCopy[id] = createElement(id, x1, y1, x2, y2, type);
                  break;
                case "pencil":
                  elementsCopy[id].points = [...elementsCopy[id].points, { x: x2, y: y2 }];
                  break;
                default:
                  throw new Error(`Type not recognised: ${type}`);
              }
              setElements(elementsCopy, true);
              };
          
            const handleCanvasMouseDown = event => {
              const { clientX, clientY } = event;
              if (tool === "selection") {
                  const element = getElementAtPosition(clientX, clientY, elements);
                  if (element) {
                  if (element.type === "pencil") {
                    const xOffsets = element.points.map(point => clientX - point.x);
                    const yOffsets = element.points.map(point => clientY - point.y);
                    setSelectedElement({ ...element, xOffsets, yOffsets });
                  } else {
                    const offsetX = clientX - element.x1;
                    const offsetY = clientY - element.y1;
                    setSelectedElement({ ...element, offsetX, offsetY });
                  }
                  setElements(prevState => prevState);
          
                  if (element.position === "inside") {
                      setAction("moving");
                  } else {
                      setAction("resizing");
                  }
                  }
              } else {
                  const id = elements.length;
                const element = createElement(id, clientX, clientY, clientX, clientY, tool);
                console.log(element);
                setElements(prevState => [...prevState, element]);
                setSelectedElement(element);
          
                setAction("drawing");
              }
              };
          
              const handleCanvasMouseMove = event => {
              const { clientX, clientY } = event;
          
              if (tool === "selection") {
                const element = getElementAtPosition(clientX, clientY, elements);
                event.target.style.cursor = element ? cursorForPosition(element.position) : "default";
              }
          
              if (action === "drawing") {
                const index = elements.length - 1;
                const { x1, y1 } = elements[index];
                updateElement(index, x1, y1, clientX, clientY, tool);
              } else if (action === "moving") {
                  if (selectedElement.type === "pencil") {
                  const newPoints = selectedElement.points.map((_, index) => ({
                    x: clientX - selectedElement.xOffsets[index],
                    y: clientY - selectedElement.yOffsets[index],
                  }));
                  const elementsCopy = [...elements];
                  elementsCopy[selectedElement.id] = {...elementsCopy[selectedElement.id],
                    points: newPoints,};
                  setElements(elementsCopy, true);
                  } else {
                  const { id, x1, x2, y1, y2, type, offsetX, offsetY } = selectedElement;
                  const width = x2 - x1;
                  const height = y2 - y1;
                  const newX1 = clientX - offsetX;
                  const newY1 = clientY - offsetY;
                  updateElement(id, newX1, newY1, newX1 + width, newY1 + height, type);
                  }
              } else if (action === "resizing") {
                const { id, type, position, ...coordinates } = selectedElement;
                const { x1, y1, x2, y2 } = resizedCoordinates(clientX, clientY, position, coordinates);
                updateElement(id, x1, y1, x2, y2, type);
              }
              };
          
              const handleCanvasMouseUp = () => {
              if (selectedElement) {
                const index = selectedElement.id;
                const { id, type } = elements[index];
                if ((action === "drawing" || action === "resizing") && adjustmentRequired(type)) {
                  const { x1, y1, x2, y2 } = adjustElementCoordinates(elements[index]);
                  updateElement(id, x1, y1, x2, y2, type);
                }
              }
              setAction("none");
              setSelectedElement(null);
              };

              // Afficher et masquer le canvas 
              const [CanvasShow, setCanvasShow] = React.useState(true);
              const handleClickCanvas= () => {
                setCanvasShow(!CanvasShow)};
                
              //Accordéon de l'outil de dessin 
              const [openedCollapseSix, setopenedCollapseSix] = React.useState(false);

      return (        
                  // div contenant l'ensemble des blocs de contrôles
    <div ref={ref} className={classes.controlsWrapper}>
      <div>
              {/*pour afficher et masquer le canvas afin d'accéder au zoom in/out
              l'astuce ici est de masquer le canvas en créant un canvas de longueur et largeur 0
              */}

      {CanvasShow ?
            <canvas
            id="canvas"
            width={0}
            height={0}
            onMouseDown={handleCanvasMouseDown}
            onMouseMove={handleCanvasMouseMove}
            onMouseUp={handleCanvasMouseUp}
            >Canvas      
            </canvas>
            :
            <canvas 
            style={{
              marginTop: "-60rem",
            }}
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleCanvasMouseDown}
            onMouseMove={handleCanvasMouseMove}
            onMouseUp={handleCanvasMouseUp}
            >Canvas
            </canvas>
        }

        <Grid
          container
          direction="column"
          justify="space-between"
          style={{ flexGrow: 1 }}
        >
        {/* 
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
        */}

          <Grid container direction="row" alignItems="center" justify="center" style={{marginTop:"-20px", marginBottom:"-5px"}}>
            {/*Le bloc supérieure de contrôle*/}
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
            <IconButton
              onClick={onAddClip}
              className={classes.controlIcons}
              aria-label="forward"
            >
              <AddIcon fontSize="inherit"></AddIcon>
            </IconButton>
          </Grid>
          
          {/* bloc inférieur de contrôle */}
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
                      style={{marginLeft: 16 }}
                    >
                      {elapsedTime}/{totalDuration}
                    </Typography>
                  </Button>

                  <div
      aria-multiselectable={false}
      className="card-collapse"
      id="accordion"
      role="tablist"
    >

      <td className="text-right">
            </td>
        <td>
          <Colorize
            style={{ fill: "grey"}}
            fontSize="large"
            onClick={(e) => {
              e.preventDefault();
              setopenedCollapseSix(!openedCollapseSix); 
              handleClickCanvas()
            }}
          >
          {" "}
          </Colorize>
          </td>

        <Collapse role="tabpanel" isOpen={openedCollapseSix} > 

                <tr>
                    <td>
                      <DropdownItem
                        href="#pablo"
                        style={{"padding":"0.5rem 0.5rem"}}
                        toggle={false}

                      >
                      <CircleIcon 
                      style={{color:"yellow"}}
                      onClick={() => setColor("yellow")}
                      >
                      </CircleIcon>
                      </DropdownItem>
                    </td>

                    <td>
                      <DropdownItem
                        href="#pablo"
                        style={{"padding":"0.5rem 0.5rem"}}
                        toggle={false}
                      >
                      <CircleIcon 
                      style={{color:"green"}}
                      onClick={() => setColor("green")}
                      >
                      </CircleIcon>
                      </DropdownItem>
                    </td>

                    <td>
                      <DropdownItem
                        href="#pablo"
                        style={{"padding":"0.5rem 0.5rem"}}
                        toggle={false}
                      >
                      <CircleIcon 
                      style={{color:"red"}}
                      onClick={() => setColor("red")}
                      >
                      </CircleIcon>
                      </DropdownItem>
                    </td>

                    <td>
                      <DropdownItem
                        href="#pablo"
                        style={{"padding":"0.5rem 0.5rem"}}
                        toggle={false}
                      >
                      <CircleIcon 
                      style={{color:"blue"}}
                      onClick={() => setColor("blue")}
                      >
                      </CircleIcon>
                      </DropdownItem>
                    </td>

                    <td>
                      <DropdownItem
                          href="#pablo"
                          style={{"padding":"0.5rem 0.5rem"}}
                          toggle={false}
                        >
                        <ArrowBack 
                        onClick={undo}
                        style={{"fill":"orange"}}
                        fontSize="large">
                        </ArrowBack>
                      </DropdownItem>
                     </td>

               </tr>
               <tr>
                    <td>
                      <DropdownItem
                        href="#pablo"
                        style={{"padding":"0.5rem 0.5rem"}}
                        toggle={false}
                      >
                      
                      <CropPortraitIcon    
                      onClick={() => setTool("rectangle")}
                      style={{"fill":"LightSeaGreen"}}
                      >
                      </CropPortraitIcon>
                      </DropdownItem>
                    </td>
                    <td>
                      <DropdownItem
                        href="#pablo"
                        style={{"padding":"0.5rem 0.5rem"}}
                        toggle={false}
                      >
                      <RemoveIcon
                      onClick={() => setTool("line")}
                      style={{"fill":"LightSeaGreen"}}
                      >
                      </RemoveIcon>
                      </DropdownItem>
                    </td>

                    <td>
                      <DropdownItem
                        href="#pablo"
                        style={{"padding":"0.5rem 0.5rem"}}
                        toggle={false}
                      >
                      <StarOutlineIcon 
                        onClick={() => setTool("pencil")}
                        style={{"fill":"LightSeaGreen"}}
                      >
                      </StarOutlineIcon>
                      </DropdownItem>
                    </td>

                    <td>
                      <DropdownItem
                        href="#pablo"
                        style={{"padding":"0.5rem 0.5rem"}}
                        toggle={false}
                      >
                      <Mouse 
                      style={{"fill":"LightSeaGreen"}}
                      onClick={() => setTool("selection")}
                      >
                      </Mouse>
                      </DropdownItem>
                    </td>

                     <td>
                      <DropdownItem
                          href="#pablo"
                          style={{"padding":"0.5rem 0.5rem"}}
                          toggle={false}
                        >
                        <ArrowForward
                        onClick={redo}
                        style={{"fill":"orange"}}
                        fontSize="large">
                        </ArrowForward>
                      </DropdownItem>
                     </td>
                </tr>
                  
        </Collapse>
    </div>

              </Grid>
            </Grid>

            <Grid item>
            <IconButton
                  // onClick={() => setState({ ...state, muted: !state.muted })}
                  onClick={onMute}
                  className={`${classes.bottomIcons} ${classes.volumeButton}`}
                >
                  {muted ? (
                    <VolumeMute fontSize="large" />
                  ) : volume > 0.5 ? (
                    <VolumeUp fontSize="large" />
                  ) : (
                    <VolumeDown fontSize="large" />
                  )}
                </IconButton>

                <Slider
                style={{"top":"1em"}}
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
                      style={{"color":"black"}}
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
                <FullScreen fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
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
  onAddClip: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onZoomIn: PropTypes.func,
  onZoomOut: PropTypes.func,
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
export default Controls
