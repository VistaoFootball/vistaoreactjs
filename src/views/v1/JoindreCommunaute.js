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

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Input,
  Button,

} from "reactstrap";

const Panels = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card className="card-plain card-subcategories">
              <CardHeader>
                <CardTitle className="text-center mt-5" tag="h4">
                  Insérer le code communauté
                </CardTitle>
                <br />
              </CardHeader>
              <CardBody>
                {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}

                      <Row>
                    Insérez le code d'accès qui vous a été partagé et devenez membre d'une communauté.
                    </Row>
                    <br></br>
                    <Row>
                    <Col md-6 ml-auto mr-auto>
                          <FormGroup>
                            <Input Placeholder="XXXX - XXXX" type="text" />
                          </FormGroup>
                  <Button color="success">
                  <i/> Valider
                </Button >
                    </Col>
                    </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Panels;
