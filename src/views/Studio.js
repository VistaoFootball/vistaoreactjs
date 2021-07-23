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
import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
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

const Panels = () => {
  const [singleSelect, setsingleSelect] = React.useState(null);
  const [multipleSelect, setmultipleSelect] = React.useState(null);
  const [horizontalTabsVideo, sethorizontalTabsVideo] = React.useState("Actions");
  const [horizontalTabsNav, sethorizontalTabsNav] = React.useState("Vidéo");
  const [openedCollapseOne, setopenedCollapseOne] = React.useState(false);
  const [openedCollapseTwo, setopenedCollapseTwo] = React.useState(false);
  const [openedCollapseThree, setopenedCollapseThree] = React.useState(false);
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
        case "horizontalTabsNav":
          sethorizontalTabsNav(tabName);
          break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
          <Nav className="nav-pills-info" pills>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsNav === "Vidéo" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsNav", "Vidéo")
                      }
                    >
                      Vidéo
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
                <TabContent className="tab-space" activeTab={horizontalTabsNav}>
                  <TabPane tabId="Vidéo"> 
                  <Card>
                  <p>Emplacement du lecteur vidéo</p>
                  </Card>
                  </TabPane>

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
                      aria-expanded={openedCollapseOne}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseOne(!openedCollapseOne);
                      }}
                    >
                      Systèmes tactiques{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseOne}>
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
                      aria-expanded={openedCollapseTwo}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseTwo(!openedCollapseTwo);
                      }}
                    >
                      Infrastructures{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseTwo}>
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
                  </TabPane>


                </TabContent>


          </Col>
          <Col>
            <Card>
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
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip170482171"
                          >
                            Modifier
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
            <Card>
              <div
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
                      aria-expanded={openedCollapseSix}
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
                  <Collapse role="tabpanel" isOpen={openedCollapseSix}>
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
    </Card>
  </Col>
 </Row>
</div>
    </>
  );
};

export default Panels;
