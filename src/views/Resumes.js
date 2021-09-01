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
import { useHistory } from "react-router-dom";
import { getGallerySummary } from "apis/routes/videos";
import { deleteSummary } from "apis/routes/videos";
import { SearchContext } from "providers/SearchProvider";

function Dashboard(props) {
  const [summaries, setSummaries] = React.useState([]);
  const [updateData, setUpdateData] = React.useState(true);
  const { user } = React.useContext(UserContext);
  const history = useHistory();
  const { search, setSearch } = React.useContext(SearchContext);

  React.useEffect(() => {
    setSearch("");
  }, []);

  const summaryTitle = ["", "Résumé temps forts", "Résumé tactique"];
  const summaryType = ["", "Joueur", "Équipe", "Équipe adverse"];
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

  const getData = async () => {
    const { summary_gallery } = await getGallerySummary(user.auth_token);
    if (search) {
      const filteredResults = summary_gallery.filter((summary) => {
        const { video_details } = summary;
        const { home_team, away_team } = video_details;

        return (
          home_team.club_name.toLowerCase().includes(search.toLowerCase()) ||
          away_team.club_name.toLowerCase().includes(search.toLowerCase())
        );
      });
      setSummaries(filteredResults);
    } else setSummaries(summary_gallery);
  };

  React.useEffect(() => {
    if (!user) {
      history.replace("/auth/login");
    } else {
      getData();
    }
  }, [user, updateData, search]);

  if (!user) return <></>;

  return (
    <>
      <div className="content">
        <Row>
          {summaries.map((summary) => {
            const { id, summary_title_id, summary_type_id, video_details } =
              summary;
            const {
              context_type,
              clip_duration,
              pitch_ground,
              is_private,
              home_team,
              away_team,
            } = video_details;
            return (
              <Col lg="3" key={id}>
                <Card className="card-chart">
                  <Row>
                    <img src={logo} width="350" height="200" alt="thumbnail" />
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
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Télécharger en HD
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Télécharger en SD
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={async (e) => {
                              e.preventDefault();
                              await deleteSummary(user.auth_token, id);
                              setUpdateData(!updateData);
                            }}
                          >
                            Supprimer le résumé
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <Col>
                      <CardTitle tag="h4">
                        <i className="tim-icons icon-triangle-right-17" />{" "}
                        {home_team.club_name} v {away_team.club_name}
                      </CardTitle>
                      <div class="galleryItem">
                        <div class="vistao-thumbnail"></div>
                        <span>
                          <i className="tim-icons icon-check-2" />{" "}
                          {summaryTitle[summary_title_id]} -{" "}
                          {summaryType[summary_type_id]}
                        </span>
                        <br></br>
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
