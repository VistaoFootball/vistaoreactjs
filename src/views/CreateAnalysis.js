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

const RegularForms = () => {
  const [tagsinputThemes, settagsinputThemes] = React.useState([
    "Animation offensive",
    "Animation défensive",
    "Transition offensive",
    "Transition défensive",
    "CPA offensif",
    "CPA défensif",
    "Maîtrise",
  ]);
  const handleTagsinputThemes = (tagsinputThemes) => {
    settagsinputThemes(tagsinputThemes);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Détail de l'analyse</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form-horizontal">
                <Row>
                  <Col md="12">
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
                    <Label/>
                    <Col>
                      <Button
                        className="btn-fill"
                        color="primary"
                        type="submit"
                      >
                        Créer le rapport
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
