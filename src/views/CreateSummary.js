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
import Select from "react-select";
import Dropzone from "react-dropzone";
import TagsInput from "components/TagsInput/TagsInput.js";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { UserContext } from "providers/UserProvider";
import { useHistory, useLocation } from "react-router-dom";
import { getSummaryTags } from "apis/routes/common";
import { getVideoFiles } from "apis/routes/videos";
import { getClubUsers } from "apis/routes/videos";
import { getVideoClips } from "apis/routes/videos";
import { addSummaryTag } from "apis/routes/common";
import { createSummary } from "apis/routes/videos";

const RegularForms = () => {
  const [singleSelectSummaryType, setsingleSelectSummaryType] =
    React.useState(null);
  const [singleSelectPlayer, setsingleSelectPlayer] = React.useState(null);
  const [singleSelectSummaryTitle, setsingleSelectSummaryTitle] =
    React.useState(null);
  const [tagsinputThemes, settagsinputThemes] = React.useState([]);

  const [videoId, setVideoId] = React.useState(null);
  const [clipList, setClipList] = React.useState([]);
  const [homeTeamPlayerList, setHomeTeamPlayerList] = React.useState([]);
  const [awayTeamPlayerList, setAwayTeamPlayerList] = React.useState([]);
  const { user } = React.useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const handleTagsinputThemes = (tagsinputThemes) => {
    settagsinputThemes(tagsinputThemes);
  };

  const convertArrayToObject = (arr) => {
    const obj = {};
    arr.forEach((element) => {
      obj[element.label] = element.value;
    });
    return obj;
  };

  const getData = async (video_id) => {
    const clip_list = await getVideoClips(user.auth_token, video_id);
    setClipList(clip_list.map((clip) => clip.id));
    const { video_info } = await getVideoFiles(user.auth_token);
    const { home_team, away_team } = video_info.find(
      (element) => element.id === video_id
    );
    const homeTeamPlayers = await getClubUsers(
      user.auth_token,
      home_team.club_id
    );
    const awayTeamPlayers = await getClubUsers(
      user.auth_token,
      away_team.club_id
    );
    setHomeTeamPlayerList(homeTeamPlayers);
    setAwayTeamPlayerList(awayTeamPlayers);
    setVideoId(video_id);
  };

  React.useEffect(() => {
    if (!user) {
      history.replace("/auth/login");
    } else if (!location.state) {
      history.replace("/admin/videos");
    } else {
      const { video_id, clip_list } = location.state;
      getData(video_id);
      setClipList(clip_list);
    }
  }, []);

  if (!user && !videoId) return <></>;

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Détail du résumé</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form-horizontal">
                  <Row>
                    <Col md="12"></Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Card>
                        <Dropzone
                          onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <section>
                              <div {...getRootProps()}>
                                <input {...getInputProps()} />

                                <br></br>
                                <p
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  Importer une miniature{" "}
                                </p>
                                <i
                                  className="tim-icons icon-cloud-upload-94"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "white",
                                  }}
                                />
                                <br></br>
                              </div>
                            </section>
                          )}
                        </Dropzone>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                      <FormGroup>
                        <label>Titre du résumé</label>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          name="singleSelect"
                          value={singleSelectSummaryTitle}
                          onChange={(value) =>
                            setsingleSelectSummaryTitle(value)
                          }
                          options={[
                            {
                              value: "Titre du résumé",
                              isDisabled: true,
                              label: "Titre du résumé",
                            },
                            { value: "1", label: "Résumé temps forts" },
                            { value: "2", label: "Résumé tactique" },
                          ]}
                          placeholder=""
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                      <FormGroup>
                        <label>Type du résumé</label>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          name="SummaryTitle"
                          value={singleSelectSummaryType}
                          onChange={(value) =>
                            setsingleSelectSummaryType(value)
                          }
                          options={[
                            {
                              value: "Type de résumé",
                              isDisabled: true,
                              label: "Type de résumé",
                            },
                            { value: "1", label: "Joueur" },
                            { value: "2", label: "Équipe" },
                            { value: "3", label: "Équipe adverse" },
                          ]}
                          placeholder=""
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                      <FormGroup>
                        <label>Choix du joueur (si résumé joueur)</label>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          name="singleSelect"
                          value={singleSelectPlayer}
                          onChange={(value) => setsingleSelectPlayer(value)}
                          options={[
                            {
                              value: "test",
                              isDisabled: true,
                              label: "Locaux",
                            },
                            ...homeTeamPlayerList,
                            {
                              value: "test",
                              isDisabled: true,
                              label: "Visiteurs",
                            },
                            ...awayTeamPlayerList,
                          ]}
                          placeholder=""
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="mb-4" md="6">
                      <label>Tags</label>
                      <TagsInput
                        onChange={handleTagsinputThemes}
                        tagProps={{ className: "react-tagsinput-tag danger" }}
                        value={tagsinputThemes}
                      />
                    </Col>
                  </Row>

                  <label>Confidentialité</label>
                  <Row>
                    <Col className="checkbox-radios">
                      <FormGroup check className="form-check-radio">
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue="option1"
                            id="Privé"
                            name="Confidentialité"
                            type="radio"
                          />
                          <span className="form-check-sign" />
                          Privé
                        </Label>
                      </FormGroup>
                      <FormGroup check className="form-check-radio">
                        <Label check>
                          <Input
                            defaultValue="option2"
                            id="Ouvert aux membres"
                            name="Confidentialité"
                            type="radio"
                          />
                          <span className="form-check-sign" />
                          Ouvert aux membres
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Form className="form-horizontal">
                  <Row>
                    <Label />
                    <Col>
                      <Button
                        className="btn-fill"
                        color="primary"
                        type="submit"
                        onClick={async (e) => {
                          e.preventDefault();
                          const { summary_tags } = await getSummaryTags(
                            user.auth_token
                          );
                          let summaryTagsObject =
                            convertArrayToObject(summary_tags);
                          let newTagPresent = false;
                          tagsinputThemes.forEach(async (tag) => {
                            if (!summaryTagsObject[tag]) {
                              newTagPresent = true;
                              await addSummaryTag(user.auth_token, tag);
                            }
                          });

                          if (newTagPresent) {
                            const { summary_tags } = await getSummaryTags(
                              user.auth_token
                            );
                            summaryTagsObject =
                              convertArrayToObject(summary_tags);
                          }
                          const summary_tag_list = tagsinputThemes.map(
                            (tag) => summaryTagsObject[tag]
                          );
                          await createSummary(user.auth_token, {
                            video_id: videoId,
                            player_id: singleSelectPlayer.value,
                            summary_title_id: singleSelectSummaryTitle.value,
                            summary_type_id: singleSelectSummaryType.value,
                            clip_list: clipList,
                            summary_tag_list,
                          });
                        }}
                      >
                        Créer le résumé
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RegularForms;
