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

function Dashboard(props) {
  const { user } = React.useContext(UserContext);
  const [videos, setVideos] = React.useState(null);

  React.useEffect(() => {
    if (user) {
      getVideoGallery(user.auth_token).then((result) => {
        setVideos(result);
      });
    }
  }, [user]);

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3">
            <Card className="card-chart">
              <Row>
                <img src={logo} width="350" height="200" alt="Thumbnail" />
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
                        onClick={(e) => e.preventDefault()}
                      >
                        Supprimer la vidéo
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <Col>
                  <CardTitle tag="h4">
                    <i className="tim-icons icon-video-66" /> HomeTeam v
                    AwayTeam
                  </CardTitle>
                  <div class="galleryItem">
                    <div class="vistao-thumbnail"></div>
                    <span>
                      <i className="tim-icons icon-double-right" /> Video
                      Context
                    </span>
                    <br></br>
                    <span>
                      <i className="tim-icons icon-check-2" /> Result -
                      MatchOverType
                    </span>
                    <br></br>
                    <span>
                      <i className="tim-icons icon-pin" /> HomeScore - AwayScore
                    </span>
                    <br></br>
                    <span>
                      <i className="tim-icons icon-calendar-60" /> DateTime -
                      VideoDuration
                    </span>
                    <br></br>
                    <span>
                      <i className="tim-icons icon-user-run" /> Pitch Ground
                    </span>
                    <br></br>
                    <span>
                      <i className="tim-icons icon-video-66" /> Creator -
                      CountViews
                    </span>
                    <br></br>
                    <span>
                      <i className="tim-icons icon-lock-circle" /> Privacy
                    </span>
                  </div>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
