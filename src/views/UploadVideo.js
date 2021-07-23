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
import ExtendedForms from "views/forms/ExtendedForms.js";
import ReactDatetime from "react-datetime";
import Dropzone from "react-dropzone";

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
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Informations de la vidéo</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form-horizontal">
                <Row>
                  <Col md="12">
                    <Card>
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />

                          <br></br>
                          <p style={{display: 'flex',  justifyContent:'center' }}>Importer les vidéos dans l'ordre </p>
                          <i className="tim-icons icon-cloud-upload-94" style={{display: 'flex',  justifyContent:'center', color:'white'}} />
                          <br></br>

                        </div>
                      </section>
                    )}
                  </Dropzone>
                  </Card>
                  </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Titre de la vidéo</label>
                        <Input
                          defaultValue=""
                          placeholder="Locaux - Visiteurs"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>       
                    <Col md="5">
                        <FormGroup>
                        <label>Date</label>
                        <ReactDatetime
                        inputProps={{
                        className: "form-control",
                        placeholder: "12/05/2020",
                        }}
                        timeFormat={false}
                      />
                        </FormGroup>
                  </Col>
                  </Row>
                  <label>Contexte</label>

                  <Row>
                    <Col className="checkbox-radios">
                      <FormGroup check className="form-check-radio">
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue="option1"
                            id="Entrainement"
                            name="contexte"
                            type="radio"
                          />
                          <span className="form-check-sign" />
                          Entraînement
                        </Label>
                      </FormGroup>
                      <FormGroup check className="form-check-radio">
                        <Label check>
                          <Input
                            defaultValue="option2"
                            id="Match"
                            name="contexte"
                            type="radio"
                          />
                          <span className="form-check-sign" />
                          Match
                        </Label>
                      </FormGroup>
                    </Col>  
                  </Row>
                  <label>Reconnaissance automatisée</label>

                  <Row>
                    <Col className="checkbox-radios">
                      <FormGroup check className="form-check-radio">
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue="option1"
                            id="Individuelle"
                            name="reconaissance_vidéo"
                            type="radio"
                          />
                          <span className="form-check-sign" />
                          Individuelle
                        </Label>
                      </FormGroup>
                      <FormGroup check className="form-check-radio">
                        <Label check>
                          <Input
                            defaultValue="option2"
                            id="Collective"
                            name="reconaissance_vidéo"
                            type="radio"
                          />
                          <span className="form-check-sign" />
                          Collective
                        </Label>
                      </FormGroup>
                      <FormGroup check className="form-check-radio">
                        <Label check>
                          <Input
                            defaultValue="option3"
                            id="Collective"
                            name="reconaissance_vidéo"
                            type="radio"
                          />
                          <span className="form-check-sign" />
                          Sans reconnaissance
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
                        Démarrer studio
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
