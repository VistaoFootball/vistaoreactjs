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
import React, { useState, useRef} from "react";
// react plugin used to create DropdownMenu for selecting items
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

// reactstrap components
import {
  Card,
  Row,
  Col,
} from "reactstrap";

const Panels = () => {
  /*
  const [singleSelect, setsingleSelect] = React.useState(null);
  const [multipleSelect, setmultipleSelect] = React.useState(null);
  const [horizontalTabsNav, sethorizontalTabsNav] = React.useState("Summary");
  const [openedCollapseSummaryDetail, setopenedCollapseSummaryDetail] = React.useState(false);
  const [openedCollapseTacticalsys, setopenedCollapseTacticalsys] = React.useState(false);
  const [openedCollapseInfrastructures, setopenedCollapseInfrastructures] = React.useState(false);
  const [openedCollapseThree, setopenedCollapseThree] = React.useState(false);
  */

  /*
  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
        case "horizontalTabsNav":
          sethorizontalTabsNav(tabName);
          break;
          default:
          break;
    }
  };
  */


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
        {/*
      <div style={{display: 'flex', justifyContent: 'right'}}>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-link btn-icon"
                            color="default"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Modifier
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Supprimer le résumé
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
        */}
        <Row>
          <Col md="12">
          {/*
          <Nav className="nav-pills-info" pills>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsNav === "Summary" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsNav", "Summary")
                      }
                    >
                      Résumé
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsNav === "Infos" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsNav", "Infos")
                      }
                    >
                      Infos
                    </NavLink>
                  </NavItem>
                </Nav>
                  */}
            {/*
                <TabContent className="tab-space" activeTab={horizontalTabsNav}>
                  <TabPane tabId="Summary"> 
            */}
                  <Card style={{backgroundColor:'transparent'}}>
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
                  </Card>
                  {/*
                  </TabPane>
                  */}
                  {/*        
                  <TabPane tabId="Infos">
                  <Card>
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
                      aria-expanded={openedCollapseSummaryDetail}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseSummaryDetail(!openedCollapseSummaryDetail);
                      }}
                    >
                      Détail du résumé{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseSummaryDetail}>
                  <Card>
                    <CardBody>
                  <span><i className="tim-icons icon-check-2"/> Analysis title - type</span>
                    <br></br>
                    <span><i className="tim-icons icon-check-2"/> Video Context</span>
                    <br></br>
                    <span><i className="tim-icons icon-pin"/> HomeScore - AwayScore</span>
                    <br></br>
                    <span><i className="tim-icons icon-calendar-60"/> DateTime - VideoDuration</span>
                    <br></br>
			              <span><i className="tim-icons icon-video-66"/> Creator - CountViews</span>
                    <br></br>
			              <span><i className="tim-icons icon-lock-circle"/> Privacy</span>
                    <br></br>
			              <span><i className="tim-icons icon-tag"/> Tags</span>
                    
                    </CardBody>
                  </Card>
                </Collapse>
              </Card>
            </div>
              <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseTacticalsys}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseTacticalsys(!openedCollapseTacticalsys);
                      }}
                    >
                      Systèmes tactiques{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseTacticalsys}>
                  <CardBody>
                  <Card>
                  <label>Système(s) tactique de l'équipe ?</label>
                  <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder=""
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
                        { value: "1", label:"4-4-2"},
                        { value: "2", label:"4-2-1-2-1"},
                        { value: "3", label:"4-3-2-1"},
                        { value: "4", label:"4-1-2-2-1"},
                        { value: "5", label:"4-1-2-1-2"},
                        { value: "6", label:"4-1-2-1-2"},
                        { value: "7", label:"4-2-3-1"},
                        { value: "8", label:"4-1-4-1"},
                        { value: "9", label:"4-2-1-3"},
                        { value: "10", label:"4-2-1-3"},
                        { value: "11", label:"4-1-2-3"},
                        { value: "12", label:"4-1-2-3"},
                        { value: "13", label:"3-4-2-1"},
                        { value: "14", label:"3-1-4-1-1"},
                        { value: "15", label:"5-1-2-1-1"},
                        { value: "16", label:"5-1-2-2"},
                        { value: "17", label:"5-3-2"},
                        { value: "18", label:"5-2-2-1"},                        
                      ]}
                    />
                      <label>Système(s) tactique de l'adversaire ?</label>
                  <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder=""
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
                        { value: "1", label:"4-4-2"},
                        { value: "2", label:"4-2-1-2-1"},
                        { value: "3", label:"4-3-2-1"},
                        { value: "4", label:"4-1-2-2-1"},
                        { value: "5", label:"4-1-2-1-2"},
                        { value: "6", label:"4-1-2-1-2"},
                        { value: "7", label:"4-2-3-1"},
                        { value: "8", label:"4-1-4-1"},
                        { value: "9", label:"4-2-1-3"},
                        { value: "10", label:"4-2-1-3"},
                        { value: "11", label:"4-1-2-3"},
                        { value: "12", label:"4-1-2-3"},
                        { value: "13", label:"3-4-2-1"},
                        { value: "14", label:"3-1-4-1-1"},
                        { value: "15", label:"5-1-2-1-1"},
                        { value: "16", label:"5-1-2-2"},
                        { value: "17", label:"5-3-2"},
                        { value: "18", label:"5-2-2-1"},                        
                      ]}
                    />
                    </Card> 
                  </CardBody>
                </Collapse>
              </Card>
            </div>
              <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseInfrastructures}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseInfrastructures(!openedCollapseInfrastructures);
                      }}
                    >
                      Infrastructures{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseInfrastructures}>
                  <CardBody>
                  <Card>
                  <label>Type de surface ?</label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Surface naturelle" },
                      { value: "2", label: "Surface synthétique" },
                      { value: "3", label: "Surface hybride" },
                      { value: "4", label: "Surface stabilisée" },
                    ]}
                    placeholder=""
                  />
                      <label>Vitesse de la surface</label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Très lente" },
                      { value: "2", label: "Lente" },
                      { value: "3", label: "Standard" },
                      { value: "4", label: "Rapide" },
                      { value: "5", label: "Très rapide" },
                    ]}
                    placeholder=""
                  />
                  <label>Type d'enceinte</label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Enceinte dégagée" },
                      { value: "2", label: "Enceinte semi-close" },
                      { value: "3", label: "Piste d'athlétisme" },
                      { value: "4", label: "Cuvette" },
                    ]}
                    placeholder=""
                  />
                  <label>Tribune ?</label>
                    <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "oui" },
                      { value: "2", label: "non" },
                    ]}
                    placeholder=""
                  />
                  <label>Panneau d'affichage ?</label>
                    <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "oui" },
                      { value: "2", label: "non" },
                    ]}
                    placeholder=""
                  />
                    </Card> 
                  </CardBody>
                </Collapse>
              </Card>
            </div>
            <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseThree}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseThree(!openedCollapseThree);
                      }}
                    >
                      Météo{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseThree}>
                  <CardBody>
                  <Card>
                  <label>Climat</label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Ciel dégagé"},
                      { value: "2", label: "Averses" },
                      { value: "3", label: "Pluie" },
                      { value: "4", label: "Pluie intense" },
                    ]}
                    placeholder=""
                  />
                      <label>Vent</label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Aucun" },
                      { value: "2", label: "Léger" },
                      { value: "3", label: "Fort" },
                      { value: "4", label: "Très fort" },
                    ]}
                    placeholder=""
                  />
                    </Card> 
                  </CardBody>
                </Collapse>
              </Card>
            </div>
          </Card>
                  </Card>
                              {/*
                  </TabPane>
                </TabContent>

            </Row>
            */}
          </Col>
          <Col>
  </Col>
 </Row>
</div>
    </>
  );
};

export default Panels;
