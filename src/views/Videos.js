/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Vistao.co (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Vistao.co

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import logo from "../Play.png";
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";
import { UserContext } from "providers/UserProvider";
import { getVideoGallery } from "apis/routes/videos";
import { deleteVideoProfile } from "apis/routes/videos";
import { useHistory } from "react-router-dom";
import { SearchContext } from "providers/SearchProvider";
import { getSubscriptionStatus } from "apis/routes/profile";

function Dashboard(props) {
  const { user } = React.useContext(UserContext);
  const { search, setSearch } = React.useContext(SearchContext);
  const history = useHistory();
  const [videos, setVideos] = React.useState([]);
  const [updateGallery, setUpdateGallery] = React.useState(true);
  const [userPlan, setUserPlan] = React.useState({});

  React.useEffect(() => {
    setSearch("");
    if (user) {
      getSubscriptionStatus(user.auth_token).then(({ plan_type }) => {
        setUserPlan(plan_type);
      });
    }
  }, []);

  const videoContextType = {
    1: "Opposition à l'entrainement",
    2: "Match amical",
    3: "Match de championnat",
    4: "Match de coupe",
    5: "Match de tournoi",
  };

  const videoDuration = {
    1: "7 secondes",
    2: "10 secondes",
    3: "15 secondes",
    4: "20 secondes",
  };

  const pitchGroundType = {
    1: "Surface naturelle",
    2: "Surface synthétique",
    3: "Surface hybride",
    4: "Surface stabilisée",
  };

  React.useEffect(() => {
    if (user) {
      getVideoGallery(user.auth_token).then((result) => {
        if (search) {
          const filteredResults = result.filter((video) => {
            const { home_team, away_team } = video;
            return (
              home_team.club_name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              away_team.club_name.toLowerCase().includes(search.toLowerCase())
            );
          });
          setVideos(filteredResults);
        } else setVideos(result);
      });
    }
  }, [user, updateGallery, search]);

  return (
    <>
      <div className="content">
        <Row>
          {videos.map((video) => {
            const {
              id,
              video_files,
              context_type,
              clip_duration,
              pitch_ground,
              is_private,
              home_team,
              away_team,
            } = video;
            return (
              <Col lg="3" key={id}>
                <Card className="card-chart">
                  <Row>
                    <img
                      src={logo}
                      width="350"
                      height="200"
                      alt="Thumbnail"
                      onClick={() => {
                        history.replace("/admin/studio", { video_id: id });
                      }}
                    />
                  </Row>
                  <CardBody>
                    <div style={{ display: "flex", justifyContent: "right" }}>
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
                          {video_files.length > 0 &&
                            userPlan.plan_type === "elite" && (
                              <>
                                <DropdownItem
                                  href={video_files[0].video_link}
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Télécharger en HD
                                </DropdownItem>
                                <DropdownItem
                                  href={video_files[1].video_link}
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Télécharger en SD
                                </DropdownItem>
                              </>
                            )}
                          <DropdownItem
                            href="#pablo"
                            onClick={async (e) => {
                              e.preventDefault();
                              await deleteVideoProfile(user.auth_token, id);
                              setUpdateGallery(!updateGallery);
                            }}
                          >
                            Supprimer la vidéo
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <Col>
                      <CardTitle tag="h4">
                        <i className="tim-icons icon-video-66" />{" "}
                        {home_team.club_name} v {away_team.club_name}
                      </CardTitle>
                      <div class="galleryItem">
                        <div class="vistao-thumbnail"></div>
                        <span>
                          <i className="tim-icons icon-double-right" /> Video
                          Context - {videoContextType[context_type]}
                        </span>
                        <br></br>
                        <span>
                          <i className="tim-icons icon-calendar-60" />{" "}
                          VideoDuration - {videoDuration[clip_duration]}
                        </span>
                        <br></br>
                        <span>
                          <i className="tim-icons icon-user-run" /> Pitch Ground
                          - {pitchGroundType[pitch_ground]}
                        </span>
                        <br></br>
                        <span>
                          <i className="tim-icons icon-lock-circle" /> Privacy -{" "}
                          {is_private ? "Private" : "Public"}
                        </span>
                      </div>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
