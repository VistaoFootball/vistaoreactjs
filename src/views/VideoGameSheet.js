import React, { Component} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import ToolkitProvider, { CSVExport, Search } from "react-bootstrap-table2-toolkit";
import Dropzone from "react-dropzone";
import Select from "react-select";
import ReactDatetime from "react-datetime";

import {
  Card,
  CardBody,
  Nav,
  NavLink,
  NavItem,
  TabPane,
  TabContent,
  Row,
  Col,
  Button,
  FormGroup,
  Input,

} from "reactstrap";

const { ExportCSVButton } = CSVExport;
const homeplayers = [
  {id:1, FirstName: "Jean", LastName: "Dubois", Team: "1", AgeCategory: "U19", JerseyNumber:"5" },
  {id:2, FirstName: "Pierre", LastName: "Dupont", Team: "1", AgeCategory: "U19", JerseyNumber:"6" },
];

const awayplayers = [
  {id:1, FirstName: "Jean", LastName: "Lapierre", Team: "1", AgeCategory: "U19", JerseyNumber:"5" },
  {id:2, FirstName: "Pierre", LastName: "Dupont", Team: "1", AgeCategory: "U19", JerseyNumber:"6" },
];
const { SearchBar } = Search;

function CreerVideo() {
  const [horizontalTabsC, sethorizontalTabsC] = React.useState("Équipe"); 
  const [horizontalTabsD, sethorizontalTabsD] = React.useState("vidéo");  
  const [horizontalTabsE, sethorizontalTabsE] = React.useState("Équipe");  
  const [verticalTabsIcons, setverticalTabsIcons] = React.useState("Upload");
  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
      case "horizontalTabsC":
          sethorizontalTabsC(tabName);
          break;
      case "horizontalTabsD":
          sethorizontalTabsD(tabName);
          break;
      case "horizontalTabsE":
          sethorizontalTabsE(tabName);
          break;
      case "verticalTabsIcons":
        setverticalTabsIcons(tabName);
        break;
      default:
        break;
    }
  };

  const [singleSelectContext, setsingleSelectContext] = React.useState(null);
  const [singleSelectClipDuration, setsingleSelectClipDuration] = React.useState(null);
  const [singleSelectPitchGround, setsingleSelectPitchGround] = React.useState(null);
  const [singleSelectPitchSpeed, setsingleSelectPitchSpeed] = React.useState(null);
  const [singleSelectScoreboard, setsingleSelectScoreboard] = React.useState(null);
  const [singleSelectPitchEnclosure, setsingleSelectPitchEnclosure] = React.useState(null);
  const [singleSelectStadiumStand, setsingleSelectStadiumStand] = React.useState(null);
  const [singleSelectWeather, setsingleSelectWeather] = React.useState(null);
  const [singleSelectWind, setsingleSelectWind] = React.useState(null);
  const [multipleSelectAwayTacticalSystem, setmultipleSelectAwayTacticalSystem] = React.useState(null);
  const [multipleSelectHomeTacticalSystem, setmultipleSelectHomeTacticalSystem] = React.useState(null);
  const [singleSelectHomeClub, setsingleSelectHomeClub] = React.useState(null);
  const [singleSelectHomeAgeCategory, setsingleSelectHomeAgeCategory] = React.useState(null);
  const [singleSelectHomeTeamNumber, setsingleSelectHomeTeamNumber] = React.useState(null);
  const [singleSelectHomeJerseyColor, setsingleSelectHomeJerseyColor] = React.useState(null);
  const [singleSelectHomeIndividualRecognition, setsingleSelectHomeIndividualRecognition] = React.useState(null);
  const [singleSelectHomeGoalScored, setsingleSelectHomeGoalScored] = React.useState(null);
  const [singleSelectAwayClub, setsingleSelectAwayClub] = React.useState(null);
  const [singleSelectAwayAgeCategory, setsingleSelectAwayAgeCategory] = React.useState(null);
  const [singleSelectAwayTeamNumber, setsingleSelectAwayTeamNumber] = React.useState(null);
  const [singleSelectAwayJerseyColor, setsingleSelectAwayJerseyColor] = React.useState(null);
  const [singleSelectAwayIndividualRecognition, setsingleSelectAwayIndividualRecognition] = React.useState(null);
  const [singleSelectAwayGoalScored, setsingleSelectAwayGoalScored] = React.useState(null);
  const [singleSelectMatchOverType, setsingleSelectMatchOverType] = React.useState(null);

  return (
      
    <div class="content">
       <Card>
         <Row>
           <Col>
             <Card>
               <CardBody>
                 {/* Vertical tabs begin*/}
                 <Row>
                   <Col lg="2">
                     {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                     <Nav
                       className="nav-pills-info nav-pills-icons flex-column"
                       pills
                     >
                       <NavItem>
                         <NavLink
                           data-toggle="tab"
                           href="#pablo"
                           className={
                             verticalTabsIcons === "Upload" ? "active" : ""
                           }
                           onClick={(e) =>
                             changeActiveTab(e, "verticalTabsIcons", "Upload")
                           }
                         >
                           <i className="tim-icons icon-cloud-upload-94" />
                           Upload
                         </NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink
                           data-toggle="tab"
                           href="#pablo"
                           className={
                             verticalTabsIcons === "Détail" ? "active" : ""
                           }
                           onClick={(e) =>
                             changeActiveTab(e, "verticalTabsIcons", "Détail")
                           }
                         >
                           <i className="tim-icons icon-notes" />
                           Détail
                         </NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink
                           data-toggle="tab"
                           href="#pablo"
                           className={
                             verticalTabsIcons === "Locaux" ? "active" : ""
                           }
                           onClick={(e) =>
                             changeActiveTab(e, "verticalTabsIcons", "Locaux")
                           }
                         >
                           <i className="tim-icons icon-square-pin" />
                           Locaux
                         </NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink
                           data-toggle="tab"
                           href="#pablo"
                           className={
                             verticalTabsIcons === "Visiteurs" ? "active" : ""
                           }
                           onClick={(e) =>
                             changeActiveTab(e, "verticalTabsIcons", "Visiteurs")
                           }
                         >
                           <i className="tim-icons icon-send" />
                           Visiteurs
                         </NavLink>
                       </NavItem>
                     </Nav>
                   </Col>
 
                   <Col>
                   
 
                     <TabContent activeTab={verticalTabsIcons}>
                       <TabPane tabId="Upload">
                       <Card>
                     <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                     {({getRootProps, getInputProps}) => (
                       <section>
                         <div {...getRootProps()}>
                           <input {...getInputProps()} />
 
                           <br></br>
                           <h3 style={{display: 'flex',  justifyContent:'center' }}>Upload</h3>
                           <label style={{display: 'flex',  justifyContent:'center' }}>Importer le(s) fichier(s) vidéo dans l'ordre</label>
                           <br></br>
                           <i className="tim-icons icon-cloud-upload-94"  style={{fontSize: '50px', display: 'flex',  justifyContent:'center', color:'white'}} />
                           <br></br>
 
                         </div>
                       </section>
                     )}
                   </Dropzone>
                   </Card>
                   </TabPane>
                     </TabContent>
 
                     <TabContent activeTab={verticalTabsIcons}>
                       <TabPane tabId="Détail">
           <Nav className="nav-pills-info" pills>
                   <NavItem>
                     <NavLink
                       data-toggle="tab"
                       href="#pablo"
                       className={horizontalTabsD === "vidéo" ? "active" : ""}
                       onClick={(e) =>
                         changeActiveTab(e, "horizontalTabsD", "vidéo")
                       }
                     >
                       Vidéo
                     </NavLink>
                   </NavItem>
                   <NavItem>
                     <NavLink
                       data-toggle="tab"
                       href="#pablo"
                       className={horizontalTabsD === "tactique" ? "active" : ""}
                       onClick={(e) =>
                         changeActiveTab(e, "horizontalTabsD", "tactique")
                       }
                     >
                       Tactique
                     </NavLink>
                   </NavItem>
                   <NavItem>
                     <NavLink
                       data-toggle="tab"
                       href="#pablo"
                       className={horizontalTabsD === "stade" ? "active" : ""}
                       onClick={(e) =>
                         changeActiveTab(e, "horizontalTabsD", "stade")
                       }
                     >
                       Stade
                     </NavLink>
                   </NavItem>
                   <NavItem>
                     <NavLink
                       data-toggle="tab"
                       href="#pablo"
                       className={horizontalTabsD === "météo" ? "active" : ""}
                       onClick={(e) =>
                         changeActiveTab(e, "horizontalTabsD", "météo")
                       }
                     >
                       Climat
                     </NavLink>
                   </NavItem>
                 </Nav>
                   <TabContent className="tab-space" activeTab={horizontalTabsD}>
                    
                    <TabPane tabId="vidéo">
                       <Card> 
                       <FormGroup>
                       <label>Type de vidéo</label>
                   <Select
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="Context"
                     equipe={singleSelectContext}
                     onChange={(equipe) => setsingleSelectContext(equipe)}
                     options={[
                       { value: "1", label: "Opposition à l'entrainement" },
                       { value: "2", label: "Match amical" },
                       { value: "3", label: "Match de championnat" },
                       { value: "4", label: "Match de coupe" },
                       { value: "5", label: "Match de tournoi" },
                     ]}
                           placeholder=""
                         />
                     </FormGroup>  
                     <FormGroup>
                       <label>Confidentialité</label>
                   <Select
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="Privacy"
                     equipe={singleSelectContext}
                     onChange={(equipe) => setsingleSelectContext(equipe)}
                     options={[
                       { value: "1", label: "Privée" },
                       { value: "2", label: "Ouverte aux membres" },
                     ]}
                           placeholder=""
                         />
                     </FormGroup> 
                     <FormGroup>
                       <label>Fin du match</label>
                   <Select
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="Privacy"
                     equipe={singleSelectMatchOverType}
                     onChange={(equipe) => setsingleSelectMatchOverType(equipe)}
                     options={[
                       { value: "1", label: "Temps réglementaire" },
                       { value: "2", label: "Après prolongations" },
                       { value: "3", label: "Aux tirs au but" },
                       { value: "4", label: "Match arrêté" },
                     ]}
                           placeholder=""
                         />
                     </FormGroup>  
                     <FormGroup>
                     <label>Coup d'envoi</label>
                   <ReactDatetime
                     inputProps={{
                       className: "form-control",
                       placeholder: "",
                     }}
                   />
                   </FormGroup>           
                       <FormGroup>
                       <label>La durée du clip par défaut</label>
                   <Select
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="ClipDuration"
                     equipe={singleSelectClipDuration}
                     onChange={(equipe) => setsingleSelectClipDuration(equipe)}
                     options={[
                       { value: "1", label: "7 secondes" },
                       { value: "2", label: "10 secondes" },
                       { value: "3", label: "15 secondes" },
                       { value: "4", label: "20 secondes" },
                     ]}
                           placeholder=""
                         />
                     </FormGroup>
                       </Card>
                       <Row>
                   <Col md="12">
                     <Card>
                     <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                     {({getRootProps, getInputProps}) => (
                       <section>
                         <div {...getRootProps()}>
                           <input {...getInputProps()} />
 
                           <br></br>
                           <p style={{display: 'flex',  justifyContent:'center' }}>Uploader une miniature</p>
                           <i className="tim-icons icon-cloud-upload-94" style={{display: 'flex',  justifyContent:'center', color:'white'}} />
                           <br></br>
 
                         </div>
                       </section>
                     )}
                   </Dropzone>
                   </Card>
                   </Col>
                   </Row>
                     </TabPane> 
 
                     <TabPane tabId="tactique">
                  <Card>
                    <FormGroup>
                   <label>Système(s) tactique de l'équipe locale</label>
                   <Select
                       className="react-select info"
                       classNamePrefix="react-select"
                       placeholder=""
                       name="Hometactic"
                       closeMenuOnSelect={false}
                       isMulti
                       Tagsjoueurs={multipleSelectHomeTacticalSystem}
                       onChange={(Tagsjoueurs) => setmultipleSelectHomeTacticalSystem(Tagsjoueurs)}
                       options={[
                         {
                           value: "",
                           label: "Système tactique locaux",
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
                     </FormGroup>
                     <FormGroup>
                       <label>Système(s) tactique des visiteurs </label>
                   <Select
                       className="react-select info"
                       classNamePrefix="react-select"
                       placeholder=""
                       name="AwayTactic"
                       closeMenuOnSelect={false}
                       isMulti
                       Tagsjoueurs={multipleSelectAwayTacticalSystem}
                       onChange={(Tagsjoueurs) => setmultipleSelectAwayTacticalSystem(Tagsjoueurs)}
                       options={[
                         {
                           value: "",
                           label: "Systèmes tactiques visiteurs",
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
                     </FormGroup>
                     </Card>
                     </TabPane>  
 
                     <TabPane tabId="stade">
                     <Row>
                     <Col md="4">
                           <FormGroup>
                           <label>Adresse</label>
                             <Input placeholder="" type="text" />
                           </FormGroup>
                         </Col>
                         <Col md="4">
                           <FormGroup>
                           <label>Code Postal</label>
                             <Input placeholder="" type="text" />
                           </FormGroup>
                         </Col>
                         <Col md="4">
                           <FormGroup>
                           <label>Nom du terrain</label>
                             <Input placeholder="" type="text" />
                           </FormGroup>
                         </Col>
                         </Row>
                       <Card>                    
                   <label>Type de surface</label>
                   <FormGroup>
                   <Select
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="PitchType"
                     equipe={singleSelectPitchGround}
                     onChange={(equipe) => setsingleSelectPitchGround(equipe)}
                     options={[
                       { value: "1", label: "Surface naturelle" },
                       { value: "2", label: "Surface synthétique" },
                       { value: "3", label: "Surface hybride" },
                       { value: "4", label: "Surface stabilisée" },
                     ]}
                           placeholder=""
                         />
                     </FormGroup>
                       <label>Vitesse de la surface</label>
                   <FormGroup>
                   <Select
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="PitchSpeed"
                     equipe={singleSelectPitchSpeed}
                     onChange={(equipe) => setsingleSelectPitchSpeed(equipe)}
                     options={[
                       { value: "1", label: "Très lente" },
                       { value: "2", label: "Lente" },
                       { value: "3", label: "Standard" },
                       { value: "4", label: "Rapide" },
                       { value: "5", label: "Très rapide" },
                     ]}
                           placeholder=""
                         />
                     </FormGroup>
                   <label>Type d'enceinte</label>
                   <FormGroup>
                   <Select
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="Enclosure"
                     equipe={singleSelectPitchEnclosure}
                     onChange={(equipe) => setsingleSelectPitchEnclosure(equipe)}
                     options={[
                       { value: "1", label: "Enceinte dégagée" },
                       { value: "2", label: "Enceinte semi-close" },
                       { value: "3", label: "Piste d'athlétisme" },
                       { value: "4", label: "Cuvette" },
                     ]}
                           placeholder=""
                         />
                     </FormGroup>
                   <label>Tribune</label>
                     <FormGroup>
                     <Select 
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="StadiumStand"
                     equipe={singleSelectStadiumStand}
                     onChange={(equipe) => setsingleSelectStadiumStand(equipe)}
                     options={[
                       { value: "1", label: "oui" },
                       { value: "2", label: "non" },
                     ]}
                           placeholder=""
                         />
                     </FormGroup>
                   <label>Panneau d'affichage </label>
                     <FormGroup>
                     <Select
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="Scoreboard"
                     equipe={singleSelectScoreboard}
                     onChange={(equipe) => setsingleSelectScoreboard(equipe)}
                     options={[
                       { value: "1", label: "oui" },
                       { value: "2", label: "non" },
                     ]}
                           placeholder=""
                         />
                     </FormGroup>
                       </Card>
                     </TabPane>  
 
                     <TabPane tabId="météo">
                       <Card>                    
                       <label>Météo </label>
                     <FormGroup>
                     <Select
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="Weatcher"
                     equipe={singleSelectWeather}
                     onChange={(equipe) => setsingleSelectWeather(equipe)}
                     options={[
                       { value: "1", label: "Ciel dégagé"},
                       { value: "2", label: "Averses" },
                       { value: "3", label: "Pluie" },
                     ]}
                           placeholder=""
                         />
                     </FormGroup>
                     <FormGroup>
                     <label>Vent</label>
                   <Select
                     className="react-select info"
                     classNamePrefix="react-select"
                     name="wind"
                     equipe={singleSelectWind}
                     onChange={(equipe) => setsingleSelectWind(equipe)}
                     options={[
                       { value: "1", label: "Aucun" },
                       { value: "2", label: "Léger" },
                       { value: "3", label: "Fort" },
                       { value: "4", label: "Très fort" },
                     ]}
                     placeholder=""
                   />
                     </FormGroup>
                       </Card>
                     </TabPane>
 
                     </TabContent>
                     </TabPane>
                     </TabContent>
 
                     <TabContent activeTab={verticalTabsIcons}>
                       <TabPane tabId="Locaux">
                     {/* subcategories begin*/}
                     <Card>
                     <Nav className="nav-pills-info" pills>
                     <NavItem>
                       <NavLink
                         data-toggle="tab"
                         href="#pablo"
                         className={horizontalTabsC === "Équipe" ? "active" : ""}
                         onClick={(e) =>
                           changeActiveTab(e, "horizontalTabsC", "Équipe")
                         }
                       >
                         Équipe
                       </NavLink>
                     </NavItem>
                     <NavItem>
                       <NavLink
                         data-toggle="tab"
                         href="#pablo"
                         className={horizontalTabsC === "Joueurs" ? "active" : ""}
                         onClick={(e) =>
                           changeActiveTab(e, "horizontalTabsC", "Joueurs")
                         }
                       >
                         Joueurs
                       </NavLink>
                     </NavItem>
                   </Nav>
                   <TabContent className="tab-space" activeTab={horizontalTabsC}>
                     <TabPane tabId="Équipe">
                       <Card>
                       <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectHomeClub}
                           onChange={(value) => setsingleSelectHomeClub(value)}
                           options={[
                             {
                               value: "",
                               label: "Nom du club",
                               isDisabled: false,
                             },
                             { value: "2", label: "Foobar" },
                             { value: "3", label: "Is great" },
                           ]}
                           placeholder="Nom du club"
                         />
                       </Col>
                       </Card>
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectHomeAgeCategory}
                           onChange={(value) => setsingleSelectHomeAgeCategory(value)}
                           options={[
                             {
                               value: "",
                               label: "Catégorie",
                               isDisabled: true,
                             },
                             { value: "4", label: "Foobar" },
                             { value: "5", label: "Is great" },
                           ]}
                           placeholder="Catégorie"
                         />
                       </Col>
                       </Card>
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectHomeTeamNumber}
                           onChange={(value) => setsingleSelectHomeTeamNumber(value)}
                           options={[
                             {
                               value: "",
                               label: "Numéro d'équipe",
                               isDisabled: true,
                             },
                             { value: "2", label: "Foobar" },
                             { value: "3", label: "Is great" },
                           ]}
                           placeholder="Numéro d'équipe"
                         />
                       </Col>
                       </Card>
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectHomeJerseyColor}
                           onChange={(value) => setsingleSelectHomeJerseyColor(value)}
                           options={[
                             {
                               value: "",
                               label: "Couleur de maillot",
                               isDisabled: true,
                             },
                             { value: "2", label: "Foobar" },
                             { value: "3", label: "Is great" },
                           ]}
                           placeholder="Couleur de maillot"
                         />
                       </Col>
                       </Card>
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectHomeGoalScored}
                           onChange={(value) => setsingleSelectHomeGoalScored(value)}
                           options={[
                             {
                               value: "",
                               label: "But(s) marqué(s)",
                               isDisabled: true,
                             },
                             { value: "0", label:"0"},
                             { value: "1", label:"1"},
                             { value: "2", label:"2"},
                             { value: "3", label:"3"},
                             { value: "4", label:"4"},
                             { value: "5", label:"5"},
                             { value: "6", label:"6"},
                             { value: "7", label:"7"},
                             { value: "8", label:"8"},
                             { value: "9", label:"9"},
                             { value: "10", label:"10"},
                             { value: "11", label:"11"},
                             { value: "12", label:"12"},
                             { value: "13", label:"13"},
                             { value: "14", label:"14"},
                             { value: "15", label:"15"},
                             { value: "16", label:"16"},
                             { value: "17", label:"17"},
                             { value: "18", label:"18"}, 
                             { value: "17", label:"19"},
                             { value: "18", label:"20"}, 
                           ]}
                           placeholder="But(s) marqué(s)"
                         />
                       </Col>
                       </Card>
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectHomeIndividualRecognition}
                           onChange={(value) => setsingleSelectHomeIndividualRecognition(value)}
                           options={[
                             {
                               value: "",
                               label: "Reconnaissance joueur(s)",
                               isDisabled: true,
                             },
                             { value: "2", label: "Reconnaissance joueurs désactivée" },
                             { value: "3", label: "Reconnaissance d'un seul joueur" },
                             { value: "4", label: "Reconnaissance pour plusieurs joueurs" },   
                             { value: "5", label: "Reconnaissance pour tous les joueurs" },
                          
 
 
                           ]}
                           placeholder="Reconnaissance joueur"
                         />
                       </Col>
                       </Card>
                     </TabPane>  
 
                     <TabPane tabId="Joueurs">
                      <HomePlayersTable></HomePlayersTable>
                     </TabPane>   
 
                     <TabPane tabId="Adversaires">
                     </TabPane>  
                   </TabContent>
                   </Card>
 
                       {/* subcategories ending*/}
                   </TabPane>
                     </TabContent>
 
                     <TabContent activeTab={verticalTabsIcons}>
                       <TabPane tabId="Visiteurs">
                      {/* subcategories begin*/}
                      <Card>
                     <Nav className="nav-pills-info" pills>
                     <NavItem>
                       <NavLink
                         data-toggle="tab"
                         href="#pablo"
                         className={horizontalTabsE === "Équipe" ? "active" : ""}
                         onClick={(e) =>
                           changeActiveTab(e, "horizontalTabsE", "Équipe")
                         }
                       >
                         Équipe
                       </NavLink>
                     </NavItem>
                     <NavItem>
                       <NavLink
                         data-toggle="tab"
                         href="#pablo"
                         className={horizontalTabsE === "Joueurs" ? "active" : ""}
                         onClick={(e) =>
                           changeActiveTab(e, "horizontalTabsE", "Joueurs")
                         }
                       >
                         Joueurs
                       </NavLink>
                     </NavItem>
                   </Nav>
                   <TabContent className="tab-space" activeTab={horizontalTabsE}>
                     <TabPane tabId="Équipe">
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectAwayClub}
                           onChange={(value) => setsingleSelectAwayClub(value)}
                           options={[
                             {
                               value: "",
                               label: "Nom du club",
                               isDisabled: true,
                             },
                             { value: "2", label: "Foobar" },
                             { value: "3", label: "Is great" },
                           ]}
                           placeholder="Nom du club"
                         />
                       </Col>
                       </Card>
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectAwayAgeCategory}
                           onChange={(value) => setsingleSelectAwayAgeCategory(value)}
                           options={[
                             {
                               value: "",
                               label: "Catégorie",
                               isDisabled: true,
                             },
                             { value: "4", label: "Foobar" },
                             { value: "5", label: "Is great" },
                           ]}
                           placeholder="Catégorie"
                         />
                       </Col>
                       </Card>
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectAwayTeamNumber}
                           onChange={(value) => setsingleSelectAwayTeamNumber(value)}
                           options={[
                             {
                               value: "",
                               label: "Numéro d'équipe",
                               isDisabled: true,
                             },
                             { value: "2", label: "Foobar" },
                             { value: "3", label: "Is great" },
                           ]}
                           placeholder="Numéro d'équipe"
                         />
                       </Col>
                       </Card>
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectAwayJerseyColor}
                           onChange={(value) => setsingleSelectAwayJerseyColor(value)}
                           options={[
                             {
                               value: "",
                               label: "Couleur de maillot",
                               isDisabled: true,
                             },
                             { value: "2", label: "Foobar" },
                             { value: "3", label: "Is great" },
                           ]}
                           placeholder="Couleur de maillot"
                         />
                       </Col>
                       </Card>
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectAwayGoalScored}
                           onChange={(value) => setsingleSelectAwayGoalScored(value)}
                           options={[
                             {
                               value: "",
                               label: "But(s) marqué(s)",
                               isDisabled: true,
                             },
                             { value: "0", label:"0"},
                             { value: "1", label:"1"},
                             { value: "2", label:"2"},
                             { value: "3", label:"3"},
                             { value: "4", label:"4"},
                             { value: "5", label:"5"},
                             { value: "6", label:"6"},
                             { value: "7", label:"7"},
                             { value: "8", label:"8"},
                             { value: "9", label:"9"},
                             { value: "10", label:"10"},
                             { value: "11", label:"11"},
                             { value: "12", label:"12"},
                             { value: "13", label:"13"},
                             { value: "14", label:"14"},
                             { value: "15", label:"15"},
                             { value: "16", label:"16"},
                             { value: "17", label:"17"},
                             { value: "18", label:"18"}, 
                             { value: "17", label:"19"},
                             { value: "18", label:"20"}, 
                           ]}
                           placeholder="But(s) marqué(s)"
                         />
                       </Col>
                       </Card>
                       <Card>
                     <Col>
                         <Select
                           className="react-select info"
                           classNamePrefix="react-select"
                           name="singleSelect"
                           value={singleSelectAwayIndividualRecognition}
                           onChange={(value) => setsingleSelectAwayIndividualRecognition(value)}
                           options={[
                             {
                               value: "",
                               label: "Reconnaissance joueur(s)",
                               isDisabled: true,
                             },
                             { value: "2", label: "Reconnaissance joueurs désactivée" },
                             { value: "3", label: "Reconnaissance d'un seul joueur" },
                             { value: "4", label: "Reconnaissance pour plusieurs joueurs" },   
                             { value: "5", label: "Reconnaissance pour tous les joueurs" },
                          
 
 
                           ]}
                           placeholder="Reconnaissance joueur"
                         />
                       </Col>
                       </Card>
                     </TabPane>  
 
                     <TabPane tabId="Joueurs">
                     <AwayPlayersTable></AwayPlayersTable>
                     </TabPane>   
                   </TabContent>
                   </Card>
 
                       {/* subcategories ending*/}
                       
                   </TabPane>
                     </TabContent>
 
                   </Col>
                 </Row>
                 {/*Vertical tab ending*/}
               </CardBody>
               <Button color="success">
                   <i/> Créer la vidéo
                 </Button>
             </Card>
           </Col>
         </Row>
        </Card>
        
       </div>
     );
}

class HomePlayersTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [...homeplayers]
    };
    this.prices = this.prices.bind(this);
  }
  prices = action => {
    if (!action) {
      return this.state.data;
    } else {
      switch (action.actionType) {
        case "addRow":
          let newRow = {};
          newRow.id = this.state.data.length + 1;
          newRow.FirstName = " ";
          newRow.LastName = " ";
          newRow.Team = " ";
          newRow.AgeCategory = " ";
          newRow.JerseyNumber = " ";
          this.setState({ data: [...this.state.data, newRow] });

          return this.state.data;
        case "deleteRow":
          //this delets different rows only
          let new_state = this.state.data.filter(
            row => row.id !== action.row || row.fruit !== action.fruit
          );

          this.setState({ data: [...new_state] });
          return this.state.data;
        default:
          return this.state.data;
      }
    }
  };
  render() {

    return (
      <div className="App">
        <RenderExpenseTable data={this.state.data} prices={this.prices} />
      </div>
    );
  }
}

class AwayPlayersTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [...awayplayers]
    };
    this.prices = this.prices.bind(this);
  }
  prices = action => {
    if (!action) {
      return this.state.data;
    } else {
      switch (action.actionType) {
        case "addRow":
          let newRow = {};
          newRow.id = this.state.data.length + 1;
          newRow.FirstName = " ";
          newRow.LastName = " ";
          newRow.Team = " ";
          newRow.AgeCategory = " ";
          newRow.JerseyNumber = " ";
          this.setState({ data: [...this.state.data, newRow] });

          return this.state.data;
        case "deleteRow":
          //this delets different rows only
          let new_state = this.state.data.filter(
            row => row.id !== action.row || row.fruit !== action.fruit
          );

          this.setState({ data: [...new_state] });
          return this.state.data;
        default:
          return this.state.data;
      }
    }
  };
  render() {

    return (
      <div className="App">
        <RenderExpenseTable data={this.state.data} prices={this.prices} />
      </div>
    );
  }
}

class RenderExpenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [...this.props.data] };
  }
  componentWillMount() {
    if (!this.state.data.length) {
      this.setState({ data: [...this.props.prices({ action: "data" })] });
    }
  }

  render() {
    let tableData = this.state.data;
    if (JSON.stringify(this.props.data) === JSON.stringify(tableData)) {
      console.log("in rendered table components the new data is: updated ");
    } else {
      console.log("in rendered table components the new data is: not updated ");
      tableData = this.props.data;
    }
    
    const columns = [{
      dataField: 'id',
      text: 'id'
    }, 
      {
      dataField: 'FirstName',
      text: 'Nom',
      sort: true 
    }, {
      dataField: 'LastName',
      text: 'Prénom',
      sort: true 
    }, {
      dataField: 'Team',
      text: 'Équipe',
      sort: true 
    }, {
      dataField: 'AgeCategory',
      text: 'Catégorie',
      sort: true 
    }, {
      dataField: 'JerseyNumber',
      text: 'Maillot',
      sort: true 
    },
    ];

    return (
      <div xs={12} className="col form">
        <ToolkitProvider
          keyField="id"
          data={homeplayers}
          columns={columns}
          exportCSV
          search
        >
          {props => (
            <div>
              <div className="d-flex justify-content-around p-2">
                <ExportCSVButton
                  className="text-light btn bg-success border-secondary rounded"
                  {...props.csvProps}
                >
                  <span>Export CSV</span>
                </ExportCSVButton>

                <button
                  className="btn bg-success text-light rounded"
                  onClick={() =>
                    this.setState(tableData, () => {
                      this.props.prices({ actionType: "addRow" });
                    })
                  }
                >
                  Nouveau joueur
                </button>
              </div>
              <div style={{"overflow-x":"scroll"}}>
              <SearchBar { ...props.searchProps } placeholder="Recherche"/>
              <BootstrapTable
                {...props.baseProps}
                keyField="id"
                data={tableData}
                columns={columns}
                bordered={ false }
                cellEdit={cellEditFactory({
                  mode: "click",
                  onStartEdit: (row, column, rowIndex, columnIndex) => {},
                  beforeSaveCell: (oldValue, newValue, row, column) => {
                    if (column.dataField === "price") {
                      if (isNaN(Number(newValue))) {
                        alert(
                          "You entered " +
                            newValue +
                            " Please Enter numbers Only!!"
                        );
                      }
                    }
                  },
                  afterSaveCell: (oldValue, newValue, row, column) => {}
                })}
              />
            </div>
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default CreerVideo;
