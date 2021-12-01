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
  Badge,
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";

const Timeline = () => {
  return (
    <>
      <div className="content">
        <div className="header text-center">
          <h3 className="title">Didacticiel</h3>
        </div>
        <Row>
          <Col md="12">
            <Card className="card-timeline card-plain">
              <CardBody>
                <ul className="timeline">
                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">
                      <i className="tim-icons icon-video-66" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="danger" pill>
                          Captation vidéo
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                        Prenez la vidéo de votre match
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge success">
                      <i className="tim-icons icon-cloud-upload-94" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="success" pill>
                          Uploader la vidéo
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                        Importez la vidéo de votre match dans la rubrique Vidéos, Nouvelle vidéo
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge info">
                      <i className="tim-icons icon-triangle-right-17" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="info" pill>
                          Créer résumé
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                        La plateforme génère les actions d'un un plusieurs joueurs
                        de mon équipe. L'utilisateur créer une sélection d'action à compiler dans un résumé
                        </p>
            
                        <p>
                        Le résumé est sauvegardé dans le fil dans le fil "résumés" avec un lien de téléchargement 
                        </p>
                        <hr />
                      </div>

                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge warning">
                      <i className="tim-icons icon-send" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="warning" pill>
                          Partager
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                        L'entraîneur partage son feedback à ses joueurs et assure un suivi match après match
                        </p>
                        <p>
                        Les joueurs peuvent accéder plus facilement au studio pour produire leurs résumés. L'IA génère des insights qui pourront assiter 
                        pour améliorer la performance 
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Timeline;
