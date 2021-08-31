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
import { getClipFilters } from "apis/routes/common";
import { getVideoClips } from "apis/routes/videos";
import { createVideoClip } from "apis/routes/videos";
import { getClubUsers } from "apis/routes/videos";
import { deleteVideoClip } from "apis/routes/videos";
import { updateVideoClip } from "apis/routes/videos";
import { getVideoFiles } from "apis/routes/videos";
import { SearchContext } from "providers/SearchProvider";
import { UserContext } from "providers/UserProvider";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
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
  const [horizontalTabsVideo, sethorizontalTabsVideo] =
    React.useState("Actions");
  const [horizontalTabsNav, sethorizontalTabsNav] = React.useState("Vidéo");
  const [openedCollapseOne, setopenedCollapseOne] = React.useState(false);
  const [openedCollapseTwo, setopenedCollapseTwo] = React.useState(false);
  const [openedCollapseThree, setopenedCollapseThree] = React.useState(false);
  const [openedCollapseFour, setopenedCollapseFour] = React.useState(false);
  const [openedCollapseFive, setopenedCollapseFive] = React.useState(false);
  const [openedCollapseSix, setopenedCollapseSix] = React.useState(false);
  const [openedCollapseSeven, setopenedCollapseSeven] = React.useState(false);
  const [singleSelectPlayer, setsingleSelectPlayer] = React.useState(null);
  const [multipleSelectTag, setmultipleSelectTag] = React.useState(null);
  const [singleSelectZone, setsingleSelectZone] = React.useState(null);
  const [singleSelectAxis, setsingleSelectAxis] = React.useState(null);

  const [videoId, setVideoId] = React.useState(null);
  const [videoClips, setVideoClips] = React.useState([]);
  const [updateClip, setUpdateClip] = React.useState(null);
  const [tagList, setTagList] = React.useState([]);
  const [zoneList, setZoneList] = React.useState([]);
  const [axisList, setAxisList] = React.useState([]);
  const [playerList, setPlayerList] = React.useState([]);
  const [updateData, setUpdateData] = React.useState(true);

  const history = useHistory();
  const location = useLocation();
  const { user } = React.useContext(UserContext);
  const { search, setSearch } = React.useContext(SearchContext);

  React.useEffect(() => {
    setSearch("");
  }, []);

  const convertSecondsToTime = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  };

  const convertArrayToObject = (arr) => {
    const result = {};
    arr.forEach((item) => {
      result[item.value] = item;
    });
    return result;
  };

  const updateClipData = async (clip) => {
    const { tag_list, zone_id, axis_id, player_id } = clip;
    if (tag_list && zone_id && axis_id && player_id) {
      await updateVideoClip(user.auth_token, {
        ...clip,
        tag_list: tag_list.map((e) => e.value),
        zone_id: zone_id.value,
        axis_id: axis_id.value,
        player_id: player_id.value,
      });

      setUpdateData(!updateData);
    }
  };

  const getClipsData = async () => {
    if (videoId) {
      let clips = await getVideoClips(user.auth_token, videoId);

      const tagObject = convertArrayToObject(tagList);
      const zoneObject = convertArrayToObject(zoneList);
      const axisObject = convertArrayToObject(axisList);
      const playerObject = convertArrayToObject(playerList);

      clips = clips.map((clip) => {
        const { zone_id, player_id, axis_id, tag_list } = clip;
        return {
          ...clip,
          zone_id: zoneObject[zone_id],
          player_id: playerObject[player_id],
          axis_id: axisObject[axis_id],
          tag_list: tag_list.map((tag) => tagObject[tag.id]),
        };
      });

      setVideoClips(clips);
    }
  };

  const getData = async (video_id) => {
    const { tag_list, zone_list, axis_list } = await getClipFilters(
      user.auth_token
    );
    const { video_info } = await getVideoFiles(user.auth_token);
    const { home_team, away_team } = video_info.find(
      (element) => element.id === video_id
    );
    const data1 = await getClubUsers(user.auth_token, home_team.club_id);
    const data2 = await getClubUsers(user.auth_token, away_team.club_id);
    setTagList(tag_list);
    setZoneList(zone_list);
    setAxisList(axis_list);
    setPlayerList([...data1, ...data2]);
    setVideoId(video_id);
  };

  React.useEffect(() => {
    if (!user) {
      history.replace("/auth/login");
    } else if (!location.state) {
      history.replace("/admin/videos");
    } else {
      const { video_id } = location.state;
      getData(video_id);
    }
  }, []);

  React.useEffect(() => {
    if (videoId) {
      getClipsData();
    }
  }, [videoId, updateData]);

  if (!user && !location.state) return <></>;

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
                                onChange={(Tagsjoueurs) =>
                                  setmultipleSelect(Tagsjoueurs)
                                }
                                options={[
                                  {
                                    value: "",
                                    label: "Mon effectif",
                                    isDisabled: true,
                                  },
                                  { value: "1", label: "4-4-2" },
                                  { value: "2", label: "4-2-1-2-1" },
                                  { value: "3", label: "4-3-2-1" },
                                  { value: "4", label: "4-1-2-2-1" },
                                  { value: "5", label: "4-1-2-1-2" },
                                  { value: "6", label: "4-1-2-1-2" },
                                  { value: "7", label: "4-2-3-1" },
                                  { value: "8", label: "4-1-4-1" },
                                  { value: "9", label: "4-2-1-3" },
                                  { value: "10", label: "4-2-1-3" },
                                  { value: "11", label: "4-1-2-3" },
                                  { value: "12", label: "4-1-2-3" },
                                  { value: "13", label: "3-4-2-1" },
                                  { value: "14", label: "3-1-4-1-1" },
                                  { value: "15", label: "5-1-2-1-1" },
                                  { value: "16", label: "5-1-2-2" },
                                  { value: "17", label: "5-3-2" },
                                  { value: "18", label: "5-2-2-1" },
                                ]}
                              />
                              <label>
                                Système(s) tactique de l'adversaire ?
                              </label>
                              <Select
                                className="react-select info"
                                classNamePrefix="react-select"
                                placeholder=""
                                name="multipleSelect"
                                closeMenuOnSelect={false}
                                isMulti
                                Tagsjoueurs={multipleSelect}
                                onChange={(Tagsjoueurs) =>
                                  setmultipleSelect(Tagsjoueurs)
                                }
                                options={[
                                  {
                                    value: "",
                                    label: "Mon effectif",
                                    isDisabled: true,
                                  },
                                  { value: "1", label: "4-4-2" },
                                  { value: "2", label: "4-2-1-2-1" },
                                  { value: "3", label: "4-3-2-1" },
                                  { value: "4", label: "4-1-2-2-1" },
                                  { value: "5", label: "4-1-2-1-2" },
                                  { value: "6", label: "4-1-2-1-2" },
                                  { value: "7", label: "4-2-3-1" },
                                  { value: "8", label: "4-1-4-1" },
                                  { value: "9", label: "4-2-1-3" },
                                  { value: "10", label: "4-2-1-3" },
                                  { value: "11", label: "4-1-2-3" },
                                  { value: "12", label: "4-1-2-3" },
                                  { value: "13", label: "3-4-2-1" },
                                  { value: "14", label: "3-1-4-1-1" },
                                  { value: "15", label: "5-1-2-1-1" },
                                  { value: "16", label: "5-1-2-2" },
                                  { value: "17", label: "5-3-2" },
                                  { value: "18", label: "5-2-2-1" },
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
                            Météo <i className="tim-icons icon-minimal-down" />
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
                                  { value: "1", label: "Ciel dégagé" },
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
              <div style={{ overflowY: "scroll", height: "800px" }}>
                <CardBody>
                  <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          horizontalTabsVideo === "Actions" ? "active" : ""
                        }
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
                        className={
                          horizontalTabsVideo === "Sélection" ? "active" : ""
                        }
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsVideo", "Sélection")
                        }
                      >
                        Sélection
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    className="tab-space"
                    activeTab={horizontalTabsVideo}
                  >
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
                          <Collapse
                            role="tabpanel"
                            isOpen={openedCollapseSeven}
                          >
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
                                  options={[{ value: "1", label: "Joueur" }]}
                                  placeholder="Joueur"
                                />
                              </FormGroup>
                              <Card className="card-tasks text-left">
                                <CardHeader>
                                  <p className="card-category d-inline">
                                    Joueurs identifiés
                                  </p>
                                </CardHeader>

                                <FormGroup>
                                  <CardBody>
                                    <div className="table-responsive table-full-width">
                                      <Table>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <FormGroup check></FormGroup>
                                            </td>
                                            <td>
                                              <p className="title">
                                                Nom Prénom
                                              </p>
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
                            <Collapse
                              role="tabpanel"
                              isOpen={openedCollapseFive}
                            >
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
                                    onChange={(equipe) =>
                                      setsingleSelect(equipe)
                                    }
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
                                    onChange={(Tagsjoueurs) =>
                                      setmultipleSelect(Tagsjoueurs)
                                    }
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
                                  onClick={async (e) => {
                                    e.preventDefault();
                                    await createVideoClip(user.auth_token, {
                                      video_id: videoId,
                                      start_time: 6,
                                      tag_list: multipleSelectTag.map(
                                        (element) => element.value
                                      ),
                                      zone_id: singleSelectZone.value,
                                      player_id: singleSelectPlayer.value,
                                      axis_id: singleSelectAxis.value,
                                    });
                                    setUpdateData(!updateData);
                                  }}
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
                                  Joueur - hh:mm:ss{" "}
                                </a>
                              </td>
                            </CardHeader>
                            <Collapse
                              role="tabpanel"
                              isOpen={openedCollapseSix}
                            >
                              <CardBody>
                                <FormGroup>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="identifiedPlayer"
                                    equipe={singleSelectPlayer}
                                    onChange={(equipe) =>
                                      setsingleSelectPlayer(equipe)
                                    }
                                    options={playerList}
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
                                    Tagsmatch={multipleSelectTag}
                                    onChange={(Tagsmatchs) =>
                                      setmultipleSelectTag(Tagsmatchs)
                                    }
                                    options={tagList}
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
                                    Tagsmatch={singleSelectZone}
                                    onChange={(Tagsmatchs) =>
                                      setsingleSelectZone(Tagsmatchs)
                                    }
                                    options={zoneList}
                                  />
                                </FormGroup>
                                <FormGroup>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    placeholder="Axe"
                                    name="multipleSelect"
                                    closeMenuOnSelect={false}
                                    Tagsjoueurs={singleSelectAxis}
                                    onChange={(Tagsmental) =>
                                      setsingleSelectAxis(Tagsmental)
                                    }
                                    options={axisList}
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
                          {videoClips.map((videoClip) => {
                            return (
                              <Card className="card-plain">
                                <Col></Col>
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
                                      onClick={async (e) => {
                                        e.preventDefault();
                                        await deleteVideoClip(
                                          user.auth_token,
                                          videoClip.id
                                        );
                                        setUpdateData(!updateData);
                                      }}
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
                                        if (
                                          openedCollapseFour === videoClip.id
                                        ) {
                                          setopenedCollapseFour(false);
                                          setUpdateClip(null);
                                        } else {
                                          setopenedCollapseFour(videoClip.id);
                                          setUpdateClip(videoClip);
                                        }
                                      }}
                                    >
                                      Joueur -{" "}
                                      {convertSecondsToTime(
                                        videoClip.start_time
                                      )}{" "}
                                    </a>
                                  </td>
                                </CardHeader>
                                <Collapse
                                  role="tabpanel"
                                  isOpen={openedCollapseFour === videoClip.id}
                                >
                                  <CardBody>
                                    <FormGroup>
                                      <Select
                                        className="react-select info"
                                        classNamePrefix="react-select"
                                        name="identifiedPlayer"
                                        value={videoClip.player_id}
                                        onChange={(equipe) => {
                                          setsingleSelect(equipe);
                                          updateClipData({
                                            ...updateClip,
                                            player_id: equipe,
                                          });
                                        }}
                                        options={playerList}
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
                                        value={videoClip.tag_list}
                                        onChange={(Tagsmatchs) => {
                                          setmultipleSelect(Tagsmatchs);
                                          updateClipData({
                                            ...updateClip,
                                            tag_list: Tagsmatchs,
                                          });
                                        }}
                                        options={tagList}
                                      />
                                    </FormGroup>
                                    <FormGroup>
                                      <Select
                                        className="react-select info"
                                        classNamePrefix="react-select"
                                        placeholder="Zone"
                                        name="multipleSelect"
                                        closeMenuOnSelect={false}
                                        value={videoClip.zone_id}
                                        onChange={(Tagsmatchs) => {
                                          setmultipleSelect(Tagsmatchs);
                                          updateClipData({
                                            ...updateClip,
                                            zone_id: Tagsmatchs,
                                          });
                                        }}
                                        options={zoneList}
                                      />
                                    </FormGroup>
                                    <FormGroup>
                                      <Select
                                        className="react-select info"
                                        classNamePrefix="react-select"
                                        placeholder="Axe"
                                        name="multipleSelect"
                                        closeMenuOnSelect={false}
                                        value={videoClip.axis_id}
                                        onChange={(Tagsmental) => {
                                          setmultipleSelect(Tagsmental);
                                          updateClipData({
                                            ...updateClip,
                                            axis_id: Tagsmental,
                                          });
                                        }}
                                        options={axisList}
                                      />
                                    </FormGroup>
                                  </CardBody>
                                </Collapse>
                              </Card>
                            );
                          })}
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

export default Panels;
