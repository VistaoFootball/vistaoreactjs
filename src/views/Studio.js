/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 vistao.co (https://www.creative-tim.com)

* Coded by vistao.co

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import screenful from "screenfull";
import Controls from "./components/Controls";
import ReactPlayer from 'react-player';

// Import du zoomIn et zoomOut
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

/*
// Ajout des boutons zoomIn et zoomOut
import ZoomIn from "@material-ui/icons/ZoomIn";
import ZoomOut from "@material-ui/icons/ZoomOut";
*/

// Pour rendu de vidéo
import React, { useState, useRef} from "react";
// Dropdown menu 
import Select from "react-select";
// reactstrap component

import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  UncontrolledTooltip,
  CustomInput,
  Table,
} from "reactstrap";


const Studio = () => {
  const [singleSelect, setsingleSelect] = React.useState(null);
  const [multipleSelect, setmultipleSelect] = React.useState(null);
  const [horizontalTabsVideo, sethorizontalTabsVideo] = React.useState("Actions");
  const [openedCollapseFour, setopenedCollapseFour] = React.useState(false);
  const [openedCollapseFive, setopenedCollapseFive] = React.useState(false);
  const [openedCollapseSix, setopenedCollapseSix] = React.useState(false);
  const [openedCollapseSeven, setopenedCollapseSeven] = React.useState(false);
  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
      case "horizontalTabsVideo":
        sethorizontalTabsVideo(tabName);
        break;
      default:
        break;
    }
  };

  const Action = () => {
    // Liste des actions et liste des actions sélectionnées
    return <div
      aria-multiselectable={false}
      className="card-collapse"
      id="accordion"
      role="tablist"
    >
      <Card className="card-plain">
      <CardHeader role="tab">
      <td className="text-right">
              <Button
                className="btn-link btn-icon"
                color="success"
                id="tooltip324367706"
                size="sm"
              >
                <i className="tim-icons icon-triangle-right-17" />
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip324367706"
              >
                Visionner
              </UncontrolledTooltip>
              <Button
                className="btn-link"
                color="success"
                id="tooltip974171201"
                size="sm"
              >
                <i className="tim-icons icon-simple-add" />
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip974171201"
              >
                Envoyer vers sélection
              </UncontrolledTooltip>
            </td>
        <td>
          <a 
            href="#pablo"
            data-parent="#accordion"
            data-toggle="collapse"
            onClick={(e) => {
              e.preventDefault();
              setopenedCollapseSix(!openedCollapseSix);
            }}
          >
            Joueur - hh:mm:ss  {" "}
          </a>
          </td>
        </CardHeader>
        <Collapse role="tabpanel" isOpen={true}>
        <CardBody>
        <FormGroup>
        <Select
          className="react-select info"
          classNamePrefix="react-select"
          name="identifiedPlayer"
          equipe={singleSelect}
          onChange={(equipe) => setsingleSelect(equipe)}
          options={[
            { value: "1", label: "Joueur 1" },
            { value: "2", label: "Joueur 2" },
          ]}
          placeholder="Joueur"
        />
        </FormGroup>
        <FormGroup>
          <Select
            className="react-select info"
            classNamePrefix="react-select"
            placeholder="Tag(s)"
            name="multipleSelect"
            closeMenuOnSelect={false}
            isMulti
            Tagsmatch={multipleSelect}
            onChange={(Tagsmatchs) => setmultipleSelect(Tagsmatchs)}
            options={[
              {
                value: "",
                label: "Aspect défensif",
                isDisabled: true,
              },
              { value: "2", label: "Arrêt" },
              { value: "8", label: "Intervention" },
              { value: "3", label: "Sauvetage" },
              { value: "4", label: "Interception" },
              { value: "5", label: "Tacle réussi" },
              { value: "6", label: "Tacle échoué" },
              { value: "7", label: "Duel aérien gagné" },
              { value: "8", label: "Duel aérien perdu" },
              { value: "8", label: "Dégagement" },
              {
                value: "",
                label: "Discipline",
                isDisabled: true,
              },
              { value: "9", label: "Faute commise" },
              { value: "10", label: "Faute subie" },
              { value: "23", label: "Avertissement verbale" },
              { value: "23", label: "Carton jaune" },
              { value: "22", label: "Carton rouge" },
              { value: "23", label: "Jeu arrêté" },
              { value: "23", label: "Blessure" },
              { value: "22", label: "Altercation" },

              {
                value: "",
                label: "Maîtrise du jeu",
                isDisabled: true,
              },
              { value: "11", label: "Passe courte réussie" },
              { value: "12", label: "Passe courte échouée" },
              { value: "13", label: "Passe longue réussie" },
              { value: "14", label: "Passe longue échouée" },
              { value: "15", label: "Passe filtrée" },
              { value: "8", label: "Passe cassant une ligne" },
              { value: "8", label: "Passe clé" },
              { value: "16", label: "Passe intervalle" },
              { value: "16", label: "Centre réussi" },
              { value: "16", label: "Centre échoué" },
              { value: "19", label: "Perte" },
              { value: "19", label: "Mauvais contrôle" },
              { value: "19", label: "Bon contrôle" },
              { value: "16", label: "Jeu à deux" },
              { value: "16", label: "Jeu à trois" },
              { value: "17", label: "Renversement" },
              { value: "17", label: "Tranversale" },
              { value: "18", label: "Dribble réussi" },
              { value: "19", label: "Dribble échoué" },
              { value: "19", label: "Percussion" },

              {
                value: "",
                label: "Animation offensive",
                isDisabled: true,
              },
              { value: "20", label: "Tir" },
              { value: "21", label: "Tir cadré" },
              { value: "22", label: "Tir non-cadré" },
              { value: "23", label: "Poteau droit" },
              { value: "22", label: "Poteau gauche" },
              { value: "23", label: "Barre transversale" },
              { value: "24", label: "But" },
              {
                value: "",
                label: "Remise en jeu et CPA",
                isDisabled: true,
              },
              { value: "25", label: "Touche" },
              { value: "26", label: "Corner" },
              { value: "26", label: "Corner obtenu" },
              { value: "26", label: "Corner cédé" },
              { value: "27", label: "Hors-jeu" },
              { value: "28", label: "Relance au 5m50" },
              { value: "29", label: "Coup franc direct" },
              { value: "30", label: "Coup franc indirect" },
              { value: "22", label: "Penalty" },
              { value: "26", label: "Penalty obtenu" },
              { value: "26", label: "Penalty provoqué" },
              
              {
                value: "",
                label: "Orientations du jeu",
                isDisabled: true,
              },
              { value: "11", label: "Vers l'avant" },
              { value: "12", label: "Vers l'arrière" },
              { value: "13", label: "Vers la gauche" },
              { value: "14", label: "Vers la droite" },
              {
                value: "",
                label: "Appréciation",
                isDisabled: true,
              },
              { value: "25", label: "Positif" },
              { value: "26", label: "Négatif" },
            ]}
            
          />
        </FormGroup>
        <FormGroup>
          <Select
            className="react-select info"
            classNamePrefix="react-select"
            placeholder="Zone"
            name="multipleSelect"
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            isMulti={true}
            Tagsmatch={multipleSelect}
            onChange={(Tagsmatchs) => setmultipleSelect(Tagsmatchs)}
            options={[
              {
                value: "",
                label: "Zones identifiées",
                isDisabled: true,
              },
              { value: "1", label: "Basse couloir droit" },
              { value: "2", label: "Basse axe droit" },
              { value: "3", label: "Basse axiale" },
              { value: "4", label: "Basse axe gauche" },
              { value: "5", label: "Basse couloir gauche" },
              { value: "6", label: "Médiane basse couloir droit" },
              { value: "7", label: "Médiane basse axe droit" },
              { value: "8", label: "Médiane basse axiale" },
              { value: "9", label: "Médiane basse axe gauche" },
              { value: "10", label: "Médiane basse couloir gauche" },
              { value: "11", label: "Médiane basse couloir droit" },
              { value: "12", label: "Médiane haute couloir droit" },
              { value: "13", label: "Médiane haute axe droit" },
              { value: "14", label: "Médiane haute axiale" },
              { value: "15", label: "Médiane haute axe gauche" },
              { value: "16", label: "Médiane haute couloir gauche" },
              { value: "17", label: "Haute couloir droit" },                           
              { value: "18", label: "Haute axe droit" },
              { value: "19", label: "Haute axiale" },
              { value: "20", label: "Haute axe gauche" },
              { value: "21", label: "Haute couloir gauche" },
              { value: "22", label: "Surface équipe axe gauche" },
              { value: "23", label: "Surface équipe axial" },
              { value: "24", label: "Surface équipe axe droit" },
              { value: "25", label: "Surface adverse axe gauche" },
              { value: "26", label: "Surface adverse axiale" },
              { value: "27", label: "Surface adverse axe droit" },
            ]}
          />
          </FormGroup>
      </CardBody>
        </Collapse>
      </Card>

    </div>;
  };

  // Ajouter un clip à la liste d'actions  

  const [ActionList, setActionList] = useState([]);
  
   const onAddBtnClick = event => {
      setActionList(ActionList.concat(<Action key={ActionList.length} />));
    };

  // Fonctions des contrôles de la vidéo

const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    width: "100%",
    

    position: "relative",
    // "&:hover": {
    //   "& $controlsWrapper": {
    //     visibility: "visible",
    //   },
    // },
  },

  controlsWrapper: {
    visibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topControls: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(2),
  },
  middleControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: "column",

    // background: "rgba(0,0,0,0.6)",
    // height: 60,
    padding: theme.spacing(2),
  },

  bottomControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // height:40,
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



const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;

const classes = useStyles();
// const [count, setCount] = useState(0);
const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
const [bookmarks, setBookmarks] = useState([]);
const [state, setState] = useState({
  pip: false,
  playing: true,
  controls: false,
  light: false,

  muted: true,
  played: 0,
  duration: 0,
  playbackRate: 1.0,
  volume: 1,
  loop: false,
  seeking: false,
});

const playerRef = useRef(null);
const playerContainerRef = useRef(null);
const controlsRef = useRef(null);
const canvasRef = useRef(null);
const {
  playing,
  light,
  muted,
  loop,
  playbackRate,
  pip,
  played,
  volume,
} = state;

const handlePlayPause = () => {
  setState({ ...state, playing: !state.playing });
};

const handleRewind = () => {
  playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
};

const handleFastForward = () => {
  playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
};

const handleProgress = (changeState) => {
  if (count > 3) {
    controlsRef.current.style.visibility = "hidden";
    count = 0;
  }
  if (controlsRef.current.style.visibility === "visible") {
    count += 1;
  }
  if (!state.seeking) {
    setState({ ...state, ...changeState });
  }
};

const handleSeekChange = (e, newValue) => {
  console.log({ newValue });
  setState({ ...state, played: parseFloat(newValue / 100) });
};

const handleSeekMouseDown = (e) => {
  setState({ ...state, seeking: true });
};

const handleSeekMouseUp = (e, newValue) => {
  console.log({ value: e.target });
  setState({ ...state, seeking: false });
  // console.log(sliderRef.current.value)
  playerRef.current.seekTo(newValue / 100, "fraction");
};

const handleDuration = (duration) => {
  setState({ ...state, duration });
};

const handleVolumeSeekDown = (e, newValue) => {
  setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
};
const handleVolumeChange = (e, newValue) => {
  // console.log(newValue);
  setState({
    ...state,
    volume: parseFloat(newValue / 100),
    muted: newValue === 0 ? true : false,
  });
};

const toggleFullScreen = () => {
  screenful.toggle(playerContainerRef.current);
};

const handleMouseMove = () => {
  console.log("mousemove");
  controlsRef.current.style.visibility = "visible";
  count = 0;
};

const hanldeMouseLeave = () => {
  controlsRef.current.style.visibility = "visible";
  count = 0;
};

const handleDisplayFormat = () => {
  setTimeDisplayFormat(
    timeDisplayFormat === "normal" ? "remaining" : "normal"
  );
};

const handlePlaybackRate = (rate) => {
  setState({ ...state, playbackRate: rate });
};

const hanldeMute = () => {
  setState({ ...state, muted: !state.muted });
};

const addBookmark = () => {
  const canvas = canvasRef.current;
  canvas.width = 160;
  canvas.height = 90;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(
    playerRef.current.getInternalPlayer(),
    0,
    0,
    canvas.width,
    canvas.height
  );
  const dataUri = canvas.toDataURL();
  canvas.width = 0;
  canvas.height = 0;
  const bookmarksCopy = [...bookmarks];
  bookmarksCopy.push({
    time: playerRef.current.getCurrentTime(),
    display: format(playerRef.current.getCurrentTime()),
    image: dataUri,
  });
  setBookmarks(bookmarksCopy);
};

const currentTime =
  playerRef && playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";

const duration =
  playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
const elapsedTime =
  timeDisplayFormat === "normal"
    ? format(currentTime)
    : `-${format(duration - currentTime)}`;

const totalDuration = format(duration);

  return (
    <>

      <div className="content">
        <Row>
          <Col md="8" style={{paddingBottom:"330px", paddingRight:"10px", paddingLeft:"10px"}}>
        <Container>
        <Row>
        <div style={{ zIndex:"1"}}
          onMouseMove={handleMouseMove}
          onMouseLeave={hanldeMouseLeave}
          ref={playerContainerRef}
          className={classes.playerWrapper}
        >
        <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
        <TransformComponent>
          <ReactPlayer 
            ref={playerRef}
            width="100%"
            height="100%"
            url="https://vistao.co/hub/clips/Van_temps_forts.mp4"
            pip={pip}
            playing={playing}
            controls={false}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onProgress={handleProgress}
            config={{
            }}
          >	  		
         </ReactPlayer>
         </TransformComponent>
        <Card>
          <Controls
            ref={controlsRef}
            onSeek={handleSeekChange}
            onSeekMouseDown={handleSeekMouseDown}
            onSeekMouseUp={handleSeekMouseUp}
            onDuration={handleDuration}
            onRewind={handleRewind}
            onPlayPause={handlePlayPause}
            onFastForward={handleFastForward}
            onAddClip={onAddBtnClick}
            playing={playing}
            played={played}
            elapsedTime={elapsedTime}
            totalDuration={totalDuration}
            onMute={hanldeMute}
            muted={muted}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekDown={handleVolumeSeekDown}
            onChangeDispayFormat={handleDisplayFormat}
            playbackRate={playbackRate}
            onPlaybackRateChange={handlePlaybackRate}
            onToggleFullScreen={toggleFullScreen}
            volume={volume}
            onBookmark={addBookmark}
          /> 
        </Card>
        </React.Fragment>
        )}
      </TransformWrapper>
        </div>        
        </Row>
        <Grid container style={{ marginTop: 20 }} spacing={3}>
          {bookmarks.map((bookmark, index) => (
            <Grid key={index} item>
              <Paper
                onClick={() => {
                  playerRef.current.seekTo(bookmark.time);
                  controlsRef.current.style.visibility = "visible";

                  setTimeout(() => {
                    controlsRef.current.style.visibility = "hidden";
                  }, 1000);
                }}
                elevation={3}
              >
                <Typography variant="body2" align="center">
                  bookmark at {bookmark.display}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>  
       </Container>
          </Col>
          <Col>
            <Card>
            <div style={{overflowY:"scroll",height:"800px"}}>
              <CardBody>
                <Nav className="nav-pills-info" pills>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsVideo === "Actions" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsVideo", "Actions")
                      }
                    >
                      Actions
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsVideo === "Sélection" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsVideo", "Sélection")
                      }
                    >
                      Sélection
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent className="tab-space" activeTab={horizontalTabsVideo}>
                  <TabPane tabId="Actions">    
                 
              <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseSeven}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseSeven(!openedCollapseSeven);
                      }}
                    >
                      Système de reconnaissance joueur{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseSeven}>
                  <CardBody>
                    <FormGroup>
                  <p className="category">Activé</p>
                        <CustomInput type="switch" id="switch-1" />
                        <br />
                        </FormGroup>
                  <FormGroup>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          name="TrackingJoueur"
                          equipe={singleSelect}
                          onChange={(Joueur) => setsingleSelect(Joueur)}
                          options={[
                            { value: "1", label: "Joueur" },
                          ]}
                          placeholder="Joueur"
                        />
                  </FormGroup> 
                  <Card className="card-tasks text-left">
              <CardHeader>
                <p className="card-category d-inline">Joueurs identifiés</p>
              </CardHeader>

              <FormGroup>
              <CardBody>
                <div className="table-responsive table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Nom Prénom</p>
                          <p className="text-muted">
                            Clips identifiés : ClipsCount
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip170482171"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip170482171"
                          >
                            Effacer
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
              </FormGroup>
            </Card>       
                  </CardBody> 
                </Collapse>
              </Card>
              </div>
          
              <Card>
              <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseFive}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseFive(!openedCollapseFive);
                      }}
                    >
                      Filtrer les actions{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseFive}>
                  <CardBody>
                  <FormGroup>
                        <label>Recherche par tag</label>
                        <Input
                          defaultValue=""
                          placeholder="Duels, centres "
                          type="text"
                        />
                      </FormGroup>
                      
                  <label>Choix de l'équipe</label>
                  <FormGroup>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          name="Choix_équipe"
                          equipe={singleSelect}
                          onChange={(equipe) => setsingleSelect(equipe)}
                          options={[
                            { value: "1", label: "Mon équipe" },
                            { value: "2", label: "Adversaire" },
                            { value: "3", label: "Les deux équipes" },
                          ]}
                          placeholder="Équipe"
                        />
                  </FormGroup>    
                  <FormGroup>
                  <label>Choix du joueur</label>
                  <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Contribution(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsjoueurs={multipleSelect}
                      onChange={(Tagsjoueurs) => setmultipleSelect(Tagsjoueurs)}
                      options={[
                        {
                          value: "",
                          label: "Mon effectif",
                          isDisabled: true,
                        },
                        { value: "2", label: "joueur 1 " },
                        { value: "3", label: "joueur 2" },
                        { value: "4", label: "joueur 3" },
                        { value: "5", label: "joueur 4" },
                      ]}
                    />
                    </FormGroup>
                  </CardBody> 
                </Collapse>
              </Card>
              </div>
            </Card>
            {ActionList}
                  </TabPane>
                  <TabPane tabId="Sélection">
                  <Card>
              <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <Col>

                      </Col>
                <CardHeader role="tab">
                <td className="text-right">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip324367706"
                          size="sm"
                        >
                          <i className="tim-icons icon-triangle-right-17" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip324367706"
                        >
                          Visionner
                        </UncontrolledTooltip>
                        <Button
                          className="btn-link"
                          color="danger"
                          id="tooltip974171204"
                          size="sm"
                        >
                          <i className="tim-icons icon-simple-remove" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip974171204"
                        >
                          Supprimer de sélection
                        </UncontrolledTooltip>
                      </td>
                  <td>
                    <a 
                      aria-expanded={openedCollapseFour}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseFour(!openedCollapseFour);
                      }}
                    >
                      Joueur - hh:mm:ss  {" "}
                    </a>
                    </td>
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseFour}>
                  <CardBody>
                  <FormGroup>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="identifiedPlayer"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Joueur 1" },
                      { value: "2", label: "Joueur 2" },
                    ]}
                    placeholder="Joueur"
                  />
                  </FormGroup>
                  <FormGroup>
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Tag(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsmatch={multipleSelect}
                      onChange={(Tagsmatchs) => setmultipleSelect(Tagsmatchs)}
                      options={[
                        {
                          value: "",
                          label: "Aspect défensif",
                          isDisabled: true,
                        },
                        { value: "2", label: "Arrêt" },
                        { value: "8", label: "Intervention" },
                        { value: "3", label: "Sauvetage" },
                        { value: "4", label: "Interception" },
                        { value: "5", label: "Tacle réussi" },
                        { value: "6", label: "Tacle échoué" },
                        { value: "7", label: "Duel aérien gagné" },
                        { value: "8", label: "Duel aérien perdu" },
                        { value: "8", label: "Dégagement" },
                        {
                          value: "",
                          label: "Discipline",
                          isDisabled: true,
                        },
                        { value: "9", label: "Faute commise" },
                        { value: "10", label: "Faute subie" },
                        { value: "23", label: "Avertissement verbale" },
                        { value: "23", label: "Carton jaune" },
                        { value: "22", label: "Carton rouge" },
                        { value: "23", label: "Jeu arrêté" },
                        { value: "23", label: "Blessure" },
                        { value: "22", label: "Altercation" },

                        {
                          value: "",
                          label: "Maîtrise du jeu",
                          isDisabled: true,
                        },
                        { value: "11", label: "Passe courte réussie" },
                        { value: "12", label: "Passe courte échouée" },
                        { value: "13", label: "Passe longue réussie" },
                        { value: "14", label: "Passe longue échouée" },
                        { value: "15", label: "Passe filtrée" },
                        { value: "8", label: "Passe cassant une ligne" },
                        { value: "8", label: "Passe clé" },
                        { value: "16", label: "Passe intervalle" },
                        { value: "16", label: "Centre réussi" },
                        { value: "16", label: "Centre échoué" },
                        { value: "19", label: "Perte" },
                        { value: "19", label: "Mauvais contrôle" },
                        { value: "19", label: "Bon contrôle" },
                        { value: "16", label: "Jeu à deux" },
                        { value: "16", label: "Jeu à trois" },
                        { value: "17", label: "Renversement" },
                        { value: "17", label: "Tranversale" },
                        { value: "18", label: "Dribble réussi" },
                        { value: "19", label: "Dribble échoué" },
                        { value: "19", label: "Percussion" },

                        {
                          value: "",
                          label: "Animation offensive",
                          isDisabled: true,
                        },
                        { value: "20", label: "Tir" },
                        { value: "21", label: "Tir cadré" },
                        { value: "22", label: "Tir non-cadré" },
                        { value: "23", label: "Poteau droit" },
                        { value: "22", label: "Poteau gauche" },
                        { value: "23", label: "Barre transversale" },
                        { value: "24", label: "But" },
                        {
                          value: "",
                          label: "Remise en jeu et CPA",
                          isDisabled: true,
                        },
                        { value: "25", label: "Touche" },
                        { value: "26", label: "Corner" },
                        { value: "26", label: "Corner obtenu" },
                        { value: "26", label: "Corner cédé" },
                        { value: "27", label: "Hors-jeu" },
                        { value: "28", label: "Relance au 5m50" },
                        { value: "29", label: "Coup franc direct" },
                        { value: "30", label: "Coup franc indirect" },
                        { value: "22", label: "Penalty" },
                        { value: "26", label: "Penalty obtenu" },
                        { value: "26", label: "Penalty provoqué" },
                        
                        {
                          value: "",
                          label: "Orientations du jeu",
                          isDisabled: true,
                        },
                        { value: "11", label: "Vers l'avant" },
                        { value: "12", label: "Vers l'arrière" },
                        { value: "13", label: "Vers la gauche" },
                        { value: "14", label: "Vers la droite" },
                        {
                          value: "",
                          label: "Appréciation",
                          isDisabled: true,
                        },
                        { value: "25", label: "Positif" },
                        { value: "26", label: "Négatif" },
                      ]}
                      
                    />
                  </FormGroup>
                  <FormGroup>
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Zone"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsmatch={multipleSelect}
                      onChange={(Tagsmatchs) => setmultipleSelect(Tagsmatchs)}
                      options={[
                        {
                          value: "",
                          label: "Activités collectives",
                          isDisabled: true,
                        },
                        { value: "6", label: "Organisation défensive" },
                        { value: "26", label: "Impact défensif" },
                        { value: "6", label: "Ressortie de balle" },
                        { value: "26", label: "Maîtrise collective" },
                        { value: "26", label: "Progression" },
                        { value: "26", label: "Verticalité" },
                        { value: "26", label: "Animation offensive" },
                        { value: "26", label: "Attaque rapide" },
                        { value: "26", label: "Attaque placée" },
                        { value: "26", label: "Attaque sur CPA" },
                        { value: "26", label: "Contre attaque de 70m" },
                        { value: "26", label: "Contre attaque de 50m" },
                        { value: "26", label: "Animation dans les couloirs" },
                        { value: "26", label: "Finition" },
                        { value: "6", label: "Transition défensive" },
                        { value: "6", label: "Transition offensive" },
                        { value: "2", label: "Communication" },                           
                        { value: "9", label: "Bloc haut" },
                        { value: "10", label: "Bloc médian" },
                        { value: "11", label: "Bloc bas" },
                        { value: "3", label: "Suppléance" },
                        { value: "3", label: "Compensation" },
                        { value: "4", label: "Couverture" },
                        { value: "5", label: "Cadrage" },
                        { value: "6", label: "Pressing" },
                        { value: "7", label: "Marquage individuel" },
                        { value: "8", label: "Marquage en zone" },
                        { value: "16", label: "Prise à deux" },
                        { value: "16", label: "Prise à trois" },
                        { value: "6", label: "Piège du hors-jeu" },

                        {
                          value: "",
                          label: "Placements",
                          isDisabled: true,
                        },
                        { value: "6", label: "Placement au milieu" },
                        { value: "6", label: "Placement de la défense" },
                        { value: "6", label: "Placement de l'attaque" },
                        { value: "6", label: "Placement" },
                        { value: "6", label: "Milieux trop proche de la défense " },
                        { value: "6", label: "Milieux trop loin de la défense" },
                        { value: "6", label: "Alignement défensif" },
                        { value: "6", label: "Placement trop proche du porteur" },
                        { value: "6", label: "Placement loin du porteur" },
                        { value: "6", label: "Milieu trop bas et alignés" },
                        { value: "6", label: "Bloc coupé en deux" },
                        { value: "6", label: "Manque de relai au milieu" },
                        { value: "6", label: "Attaque trop basse" },
                        { value: "6", label: "Attaque trop proche des milieux" },
                        { value: "6", label: "Attaque trop loin des milieux" },
                        { value: "6", label: "Placement intervalle" },
                        { value: "6", label: "Placement interligne" },
                        { value: "3", label: "Placement second ballon" },
                        {
                          value: "",
                          label: "Déplacements",
                          isDisabled: true,
                        },
                        { value: "11", label: "Appel en appui" },
                        { value: "12", label: "Appel en soutien" },
                        { value: "13", label: "Appel en profondeur" },
                        { value: "14", label: "Appel contre appel" },
                        { value: "15", label: "Appel intérieur" },
                        { value: "16", label: "Appel croisé" },
                        { value: "17", label: "Appel en dédoublement" },
                        { value: "16", label: "Appels Raumdeuter" },
                        { value: "20", label: "Appel dos de la défense" },
                        { value: "21", label: "Appel à l'opposé" },
                        { value: "22", label: "Appel au premier poteau" },
                        { value: "23", label: "Appel au deuxième poteau" },
                        { value: "24", label: "Complémentarité des appels" },
                        { value: "24", label: "Coordination des appels" },
                        { value: "24", label: "Contre-pressing" },
                        { value: "24", label: "Repli défensif" },
                        { value: "23", label: "Contre-effort" },
                        {
                          value: "",
                          label: "Appréciation",
                          isDisabled: true,
                        },
                        { value: "25", label: "Positif" },
                        { value: "26", label: "Négatif" },
                      ]}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Axe"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsjoueurs={multipleSelect}
                      onChange={(Tagsmental) => setmultipleSelect(Tagsmental)}
                      options={[
                        {
                          value: "",
                          label: "Mental",
                          isDisabled: true,
                        },
                        { value: "2", label: "Anticipation" },
                        { value: "3", label: "Appels de balle" },
                        { value: "4", label: "Courage" },
                        { value: "5", label: "Décisions" },
                        { value: "2", label: "Agressivité" },
                        { value: "3", label: "Détermination" },
                        { value: "4", label: "Inspiration" },
                        { value: "5", label: "Leadership" },
                        { value: "2", label: "Placement" },
                        { value: "3", label: "Appels de balle" },
                        { value: "4", label: "Sang-froid" },
                        { value: "5", label: "Vision du jeu" },
                        { value: "5", label: "Volume de jeu" },
                        {
                          value: "",
                          label: "Physiques",
                          isDisabled: true,
                        },
                        { value: "2", label: "Accélération" },
                        { value: "3", label: "Agilité" },
                        { value: "4", label: "Détente" },
                        { value: "5", label: "Endurance" },
                        { value: "2", label: "Équilibre" },
                        { value: "3", label: "Puissance" },
                        { value: "4", label: "Qualités physiques" },
                        { value: "5", label: "Vitesse" },

                      ]}
                    />
                    </FormGroup>                    
                </CardBody>
                  </Collapse>
                </Card>
              </div>
            </Card>
              </TabPane>
        </TabContent>
      </CardBody>
   </div>
    </Card>
  </Col>
 </Row>
</div>
    </>
  );
};

export default Studio;
