import React from "react";
import Select from "react-select";
import Slider from "nouislider";
import "assets/css/charts-display.css";
import { Bar, Pie, Bubble, HorizontalBar, Polar } from "react-chartjs-2";
import {
  PitchMultipleBubbleChart,
  BoxMultipleAxisChart,
  BoxMultipleZoneChart,
  PitchMultipleAxisChart,
  PitchMultipleZoneChart,
  BoxMultipleBubbleChart,
  EfficiencyDiagram,
  PolarChart,
  PolarChartSingleSerie,
  RadialBar,
} from "variables/charts.js";
import ReactApexChart from "react-apexcharts";

import {
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavLink,
  NavItem,
  TabPane,
  TabContent,
  Row,
  Col,
  Button, 
  Label,
  Input,
  Collapse,
  Table,
  FormGroup,
} from "reactstrap";

function H2HDashboard() {
    
  const [horizontalTabsC, sethorizontalTabsC] = React.useState("Global");  
 
  // horizontal tabs global and individual

  const [horizontalTabsH2HGlobal, sethorizontalTabsH2HGlobal] = React.useState("Maps"); 
  const [horizontalTabsH2HIndividual, sethorizontalTabsH2HIndividual] = React.useState("Maps");  
  // horizontal tabs charts types to drop
  const [openedCollapseDataFilters, setopenedCollapseDataFilters] = React.useState(false);
  // with this function we change the active tab for all the tabs in this page

  const [verticalTabsIcons, setverticalTabsIcons] = React.useState("HeadtoHead");

  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
      case "horizontalTabsC":
        sethorizontalTabsC(tabName);
        break;
      case "horizontalTabsH2HGlobal":
          sethorizontalTabsH2HGlobal(tabName);
          break;
      case "horizontalTabsH2HIndividual":
          sethorizontalTabsH2HIndividual(tabName);
          break;
        case "verticalTabsIcons":
            setverticalTabsIcons(tabName);
            break;
            default:
        break;
    }
  };

    const slider2Ref = React.useRef(null);
    React.useEffect(() => {
  
      var slider2 = slider2Ref.current;
  
      if (slider2.className === "slider slider-primary mb-3") {
        Slider.create(slider2, {
          start: [0, 100],
          connect: [false, true, false],
          step: 1,
          range: { min: 0, max: 100 },
        });
      }
    }, []);
    const slider3Ref = React.useRef(null);
    React.useEffect(() => {
  
      var slider3 = slider3Ref.current;
  
      if (slider3.className === "slider slider-primary mb-3") {
        Slider.create(slider3, {
          start: [0, 100],
          connect: [false, true, false],
          step: 1,
          range: { min: 0, max: 100 },
        });
      }
    }, []);
  

    const [multipleSelect1stcategory, setmultipleSelect1stcategory] = React.useState(null);
    const [multipleSelect2ndcategory, setmultipleSelect2ndcategory] = React.useState(null);
    const [multipleSelectZone, setmultipleSelectZone] = React.useState(null);
    const [multipleSelectAxis, setmultipleSelectAxis] = React.useState(null);
  
          // Show/hide maps H2H > individual > global dashboard
    
          const [H2HIndividualMappingShow, setH2HIndividualMappingShow] = React.useState(true);
          const [H2HIndividualAxisShow, setH2HIndividualAxisShow] = React.useState(true);
          const [H2HIndividualZoneShow, setH2HIndividualZoneShow] = React.useState(true);
          const [H2HIndividualBoxMappingShow, setH2HIndividualBoxMappingShow] = React.useState(true);
          const [H2HIndividualBoxAxisShow, setH2HIndividualBoxAxisShow] = React.useState(true);
          const [H2HIndividualBoxZoneShow, setH2HIndividualBoxZoneShow] = React.useState(true);
      
        
          const handleClickH2HIndividualMapping = () => {
            setH2HIndividualMappingShow(!H2HIndividualMappingShow)}
          const handleClickH2HIndividualAxis = () => {
            setH2HIndividualAxisShow(!H2HIndividualAxisShow)}
          const handleClickH2HIndividualZone = () => {
            setH2HIndividualZoneShow(!H2HIndividualZoneShow)}
          const handleClickH2HIndividualBoxMapping = () => {
            setH2HIndividualBoxMappingShow(!H2HIndividualBoxMappingShow)}
          const handleClickH2HIndividualBoxAxis = () => {
            setH2HIndividualBoxAxisShow(!H2HIndividualBoxAxisShow)}
          const handleClickH2HIndividualMappingBoxZone = () => {
            setH2HIndividualBoxZoneShow(!H2HIndividualBoxZoneShow)}
      
          // Show/hide cards  H2H > individual > global dashboard 
          const [H2HIndividualPassShow, setH2HIndividualPassShow] = React.useState(true);
          const [H2HIndividualFailedPassShow, setH2HIndividualFailedPassShow] = React.useState(true);
          const [H2HIndividualSucceedPassShow, setH2HIndividualSucceedPassShow] = React.useState(true);
          const [H2HIndividualShortPassShow, setH2HIndividualShortPassShow] = React.useState(true);
          const [H2HIndividualFailedShortPassShow, setH2HIndividualFailedShortPassShow] = React.useState(true);
          const [H2HIndividualSucceedShortPassShow, setH2HIndividualSucceedShortPassShow] = React.useState(true);
          const [H2HIndividualDefensiveDuelShow, setH2HIndividualDefensiveDuelShow] = React.useState(true);
          const [H2HIndividualFailedDefensiveDuelShow, setH2HIndividualFailedDefensiveDuelShow] = React.useState(true);
          const [H2HIndividualSucceedDefensiveDuelShow, setH2HIndividualSucceedDefensiveDuelShow] = React.useState(true);
          const [H2HIndividualInterceptionShow, setH2HIndividualInterceptionShow] = React.useState(true);
          const [H2HIndividualInterventionShow, setH2HIndividualInterventionShow] = React.useState(true);
          const [H2HIndividualTackleShow, setH2HIndividualTackleShow] = React.useState(true);
          const [H2HIndividualDribbleShow, setH2HIndividualDribbleShow] = React.useState(true);
          const [H2HIndividualFailedDribbleShow, setH2HIndividualFailedDribbleShow] = React.useState(true);
          const [H2HIndividualSucceedDribbleShow, setH2HIndividualSucceedDribbleShow] = React.useState(true);
          const [H2HIndividualBallSprintShow, setH2HIndividualBallSprintShow] = React.useState(true);
          const [H2HIndividualDefensiveAerialDuelShow, setH2HIndividualDefensiveAerialDuelShow] = React.useState(true);
          const [H2HIndividualFailedDefensiveAerialDuelShow, setH2HIndividualFailedDefensiveAerialDuelShow] = React.useState(true);
          const [H2HIndividualSucceedDefensiveAerialDuelShow, setH2HIndividualSucceedDefensiveAerialDuelShow] = React.useState(true);
          const [H2HIndividualOffensiveAerialDuelShow, setH2HIndividualOffensiveAerialDuelShow] = React.useState(true);
          const [H2HIndividualFailedOffensiveAerialDuelShow, setH2HIndividualFailedOffensiveAerialDuelShow] = React.useState(true);
          const [H2HIndividualSucceedOffensiveAerialDuelShow, setH2HIndividualSucceedOffensiveAerialDuelShow] = React.useState(true);
          const [H2HIndividualCrossShow, setH2HIndividualCrossShow] = React.useState(true);
          const [H2HIndividualFailedCrossShow, setH2HIndividualFailedCrossShow] = React.useState(true);
          const [H2HIndividualSucceedCrossShow, setH2HIndividualSucceedCrossShow] = React.useState(true);
          const [H2HIndividualLongPassShow, setH2HIndividualLongPassShow] = React.useState(true);
          const [H2HIndividualFailedLongPassShow, setH2HIndividualFailedLongPassShow] = React.useState(true);
          const [H2HIndividualSucceedLongPassShow, setH2HIndividualSucceedLongPassShow] = React.useState(true);
          const [H2HIndividualSplittingPassShow, setH2HIndividualSplittingPassShow] = React.useState(true);
          const [H2HIndividualFailedSplittingPassShow, setH2HIndividualFailedSplittingPassShow] = React.useState(true);
          const [H2HIndividualSucceedSplittingPassShow, setH2HIndividualSucceedSplittingPassShow] = React.useState(true);
          const [H2HIndividualShotShow, setH2HIndividualShotShow] = React.useState(true);
          const [H2HIndividualFailedShotShow, setH2HIndividualFailedShotShow] = React.useState(true);
          const [H2HIndividualSucceedShotShow, setH2HIndividualSucceedShotShow] = React.useState(true);
          const [H2HIndividualGoalkeeperInterventionShow, setH2HIndividualGoalkeeperInterventionShow] = React.useState(true);
          const [H2HIndividualFailedGoalkeeperInterventionShow, setH2HIndividualFailedGoalkeeperInterventionShow] = React.useState(true);
          const [H2HIndividualSucceedGoalkeeperInterventionShow, setH2HIndividualSucceedGoalkeeperInterventionShow] = React.useState(true);
          const [H2HIndividualSaveShow, setH2HIndividualSaveShow] = React.useState(true);
          const [H2HIndividualFailedSaveShow, setH2HIndividualFailedSaveShow] = React.useState(true);
          const [H2HIndividualSucceedSaveShow, setH2HIndividualSucceedSaveShow] = React.useState(true);
          const [H2HIndividualThrowInShow, setH2HIndividualThrowInShow] = React.useState(true);
          const [H2HIndividualFaltCommitedShow, setH2HIndividualFaltCommitedShow] = React.useState(true);
          const [H2HIndividualFaltConcededShow, setH2HIndividualFaltConcededShow] = React.useState(true);
          const [H2HIndividualObtainedCornerShow, setH2HIndividualObtainedCornerShow] = React.useState(true);
          const [H2HIndividualConcededCornerShow, setH2HIndividualConcededCornerShow] = React.useState(true);
          const [H2HIndividualCornerPlayedShow, setH2HIndividualCornerPlayedShow] = React.useState(true);
          const [H2HIndividualAssistPassShow, setH2HIndividualAssistPassShow] = React.useState(true);
          const [H2HIndividualGoalShow, setH2HIndividualGoalShow] = React.useState(true);
          const [H2HIndividualKeyPassShow, setH2HIndividualKeyPassShow] = React.useState(true);
          const [H2HIndividualPartialImbalanceShow, setH2HIndividualPartialImbalanceShow] = React.useState(true);
          const [H2HIndividualTotalImbalanceShow, setH2HIndividualTotalImbalanceShow] = React.useState(true);
          const [H2HIndividualDirectAttackShow, setH2HIndividualDirectAttackShow] = React.useState(true);
          const [H2HIndividualCounterAttackShow, setH2HIndividualCounterAttackShow] = React.useState(true);
          const [H2HIndividualPlacedAttackShow, setH2HIndividualPlacedAttackShow] = React.useState(true);
          const [H2HIndividualOffsideShow, setH2HIndividualOffsideShow] = React.useState(true);
          const [H2HIndividualObtainedPenaltyShow, setH2HIndividualObtainedPenaltyShow] = React.useState(true);
          const [H2HIndividualYellowCardShow, setH2HIndividualYellowCardShow] = React.useState(true);
          const [H2HIndividualRedCardShow, setH2HIndividualRedCardShow] = React.useState(true);
         
          const handleClickH2HIndividualPass= () => {
            setH2HIndividualPassShow(!H2HIndividualPassShow)};
          const handleClickH2HIndividualFailedPass= () => {
            setH2HIndividualFailedPassShow(!H2HIndividualFailedPassShow)};
          const handleClickH2HIndividualSucceedPass= () => {
            setH2HIndividualSucceedPassShow(!H2HIndividualSucceedPassShow)};
          const handleClickH2HIndividualShortPass= () => {
            setH2HIndividualShortPassShow(!H2HIndividualShortPassShow)};
          const handleClickH2HIndividualFailedShortPass= () => {
            setH2HIndividualFailedShortPassShow(!H2HIndividualFailedShortPassShow)};
          const handleClickH2HIndividualSucceedShortPass= () => {
            setH2HIndividualSucceedShortPassShow(!H2HIndividualSucceedShortPassShow)};
          const handleClickH2HIndividualDefensiveDuel= () => {
            setH2HIndividualDefensiveDuelShow(!H2HIndividualDefensiveDuelShow)};
          const handleClickH2HIndividualFailedDefensiveDuel= () => {
            setH2HIndividualFailedDefensiveDuelShow(!H2HIndividualFailedDefensiveDuelShow)};
          const handleClickH2HIndividualSucceedDefensiveDuel= () => {
            setH2HIndividualSucceedDefensiveDuelShow(!H2HIndividualSucceedDefensiveDuelShow)};
          const handleClickH2HIndividualInterception= () => {
            setH2HIndividualInterceptionShow(!H2HIndividualInterceptionShow)};
          const handleClickH2HIndividualIntervention= () => {
            setH2HIndividualInterventionShow(!H2HIndividualInterventionShow)};
          const handleClickH2HIndividualTackle= () => {
            setH2HIndividualTackleShow(!H2HIndividualTackleShow)};
          const handleClickH2HIndividualDribble= () => {
            setH2HIndividualDribbleShow(!H2HIndividualDribbleShow)};
          const handleClickH2HIndividualFailedDribble= () => {
            setH2HIndividualFailedDribbleShow(!H2HIndividualFailedDribbleShow)};
          const handleClickH2HIndividualSucceedDribble= () => {
            setH2HIndividualSucceedDribbleShow(!H2HIndividualSucceedDribbleShow)};
          const handleClickH2HIndividualBallSprint= () => {
            setH2HIndividualBallSprintShow(!H2HIndividualBallSprintShow)};
          const handleClickH2HIndividualDefensiveAerialDuel= () => {
            setH2HIndividualDefensiveAerialDuelShow(!H2HIndividualDefensiveAerialDuelShow)};
          const handleClickH2HIndividualFailedDefensiveAerialDuel= () => {
            setH2HIndividualFailedDefensiveAerialDuelShow(!H2HIndividualFailedDefensiveAerialDuelShow)};
          const handleClickH2HIndividualSucceedDefensiveAerialDuel= () => {
            setH2HIndividualSucceedDefensiveAerialDuelShow(!H2HIndividualSucceedDefensiveAerialDuelShow)};
          const handleClickH2HIndividualOffensiveAerialDuel= () => {
            setH2HIndividualOffensiveAerialDuelShow(!H2HIndividualOffensiveAerialDuelShow)};
          const handleClickH2HIndividualFailedOffensiveAerialDuel= () => {
            setH2HIndividualFailedOffensiveAerialDuelShow(!H2HIndividualFailedOffensiveAerialDuelShow)};
          const handleClickH2HIndividualSucceedOffensiveAerialDuel= () => {
            setH2HIndividualSucceedOffensiveAerialDuelShow(!H2HIndividualSucceedOffensiveAerialDuelShow)};
          const handleClickH2HIndividualCross= () => {
            setH2HIndividualCrossShow(!H2HIndividualCrossShow)};
          const handleClickH2HIndividualFailedCross= () => {
            setH2HIndividualFailedCrossShow(!H2HIndividualFailedCrossShow)};
          const handleClickH2HIndividualSucceedCross= () => {
            setH2HIndividualSucceedCrossShow(!H2HIndividualSucceedCrossShow)};
          const handleClickH2HIndividualLongPass= () => {
            setH2HIndividualLongPassShow(!H2HIndividualLongPassShow)};
          const handleClickH2HIndividualFailedLongPass= () => {
            setH2HIndividualFailedLongPassShow(!H2HIndividualFailedLongPassShow)};
          const handleClickH2HIndividualSucceedLongPass= () => {
            setH2HIndividualSucceedLongPassShow(!H2HIndividualSucceedLongPassShow)};
          const handleClickH2HIndividualSplittingPass= () => {
            setH2HIndividualSplittingPassShow(!H2HIndividualSplittingPassShow)};
          const handleClickH2HIndividualFailedSplittingPass= () => {
            setH2HIndividualFailedSplittingPassShow(!H2HIndividualFailedSplittingPassShow)};
          const handleClickH2HIndividualSucceedSplittingPass= () => {
            setH2HIndividualSucceedSplittingPassShow(!H2HIndividualSucceedSplittingPassShow)};
          const handleClickH2HIndividualShot= () => {
            setH2HIndividualShotShow(!H2HIndividualShotShow)};
          const handleClickH2HIndividualFailedShot= () => {
            setH2HIndividualFailedShotShow(!H2HIndividualFailedShotShow)};
          const handleClickH2HIndividualSucceedShot= () => {
            setH2HIndividualSucceedShotShow(!H2HIndividualSucceedShotShow)};
          const handleClickH2HIndividualGoalkeeperIntervention= () => {
            setH2HIndividualGoalkeeperInterventionShow(!H2HIndividualGoalkeeperInterventionShow)};
          const handleClickH2HIndividualFailedGoalkeeperIntervention= () => {
            setH2HIndividualFailedGoalkeeperInterventionShow(!H2HIndividualFailedGoalkeeperInterventionShow)};
          const handleClickH2HIndividualSucceedGoalkeeperIntervention= () => {
            setH2HIndividualSucceedGoalkeeperInterventionShow(!H2HIndividualSucceedGoalkeeperInterventionShow)};
          const handleClickH2HIndividualSave= () => {
            setH2HIndividualSaveShow(!H2HIndividualSaveShow)};
          const handleClickH2HIndividualFailedSave= () => {
            setH2HIndividualFailedSaveShow(!H2HIndividualFailedSaveShow)};
          const handleClickH2HIndividualSucceedSave= () => {
            setH2HIndividualSucceedSaveShow(!H2HIndividualSucceedSaveShow)};
          const handleClickH2HIndividualThrowIn= () => {
            setH2HIndividualThrowInShow(!H2HIndividualThrowInShow)};
          const handleClickH2HIndividualFaltCommited= () => {
            setH2HIndividualFaltCommitedShow(!H2HIndividualFaltCommitedShow)};
          const handleClickH2HIndividualFaltConceded= () => {
            setH2HIndividualFaltConcededShow(!H2HIndividualFaltConcededShow)};
          const handleClickH2HIndividualObtainedCorner= () => {
            setH2HIndividualObtainedCornerShow(!H2HIndividualObtainedCornerShow)};
          const handleClickH2HIndividualConcededCorner= () => {
            setH2HIndividualConcededCornerShow(!H2HIndividualConcededCornerShow)};
          const handleClickH2HIndividualCornerPlayed= () => {
            setH2HIndividualCornerPlayedShow(!H2HIndividualCornerPlayedShow)};
          const handleClickH2HIndividualAssistPass= () => {
            setH2HIndividualAssistPassShow(!H2HIndividualAssistPassShow)};
          const handleClickH2HIndividualGoal= () => {
            setH2HIndividualGoalShow(!H2HIndividualGoalShow)};
          const handleClickH2HIndividualKeyPass= () => {
            setH2HIndividualKeyPassShow(!H2HIndividualKeyPassShow)};
          const handleClickH2HIndividualPartialImbalance= () => {
            setH2HIndividualPartialImbalanceShow(!H2HIndividualPartialImbalanceShow)};
          const handleClickH2HIndividualTotalImbalance= () => {
            setH2HIndividualTotalImbalanceShow(!H2HIndividualTotalImbalanceShow)};
          const handleClickH2HIndividualDirectAttack= () => {
            setH2HIndividualDirectAttackShow(!H2HIndividualDirectAttackShow)};
          const handleClickH2HIndividualCounterAttack= () => {
            setH2HIndividualCounterAttackShow(!H2HIndividualCounterAttackShow)};
          const handleClickH2HIndividualPlacedAttack= () => {
            setH2HIndividualPlacedAttackShow(!H2HIndividualPlacedAttackShow)};
          const handleClickH2HIndividualOffside= () => {
            setH2HIndividualOffsideShow(!H2HIndividualOffsideShow)};
          const handleClickH2HIndividualObtainedPenalty= () => {
            setH2HIndividualObtainedPenaltyShow(!H2HIndividualObtainedPenaltyShow)};
          const handleClickH2HIndividualYellowCard= () => {
            setH2HIndividualYellowCardShow(!H2HIndividualYellowCardShow)};
          const handleClickH2HIndividualRedCard= () => {
            setH2HIndividualRedCardShow(!H2HIndividualRedCardShow)};
      
          // Show/hide efficiency diagram  H2H > individual > global dashboard 
            const [H2HIndividualPass_EfficiencyShow, setH2HIndividualPass_EfficiencyShow] = React.useState(true);
            const [H2HIndividualShort_pass_EfficiencyShow, setH2HIndividualShort_pass_EfficiencyShow] = React.useState(true);
            const [H2HIndividualDefensive_1v1_EfficiencyShow, setH2HIndividualDefensive_1v1_EfficiencyShow] = React.useState(true);
            const [H2HIndividualOffensive_1v1_EfficiencyShow, setH2HIndividualOffensive_1v1_EfficiencyShow] = React.useState(true);
            const [H2HIndividualDefensive_Aerial_duel_EfficiencyShow, setH2HIndividualDefensive_Aerial_duel_EfficiencyShow] = React.useState(true);
            const [H2HIndividualOffensive_aerial_duel_EfficiencyShow, setH2HIndividualOffensive_aerial_duel_EfficiencyShow] = React.useState(true);
            const [H2HIndividualCross_EfficiencyShow, setH2HIndividualCross_EfficiencyShow] = React.useState(true);
            const [H2HIndividualLong_pass_EfficiencyShow, setH2HIndividualLong_pass_EfficiencyShow] = React.useState(true);
            const [H2HIndividualSplitting_pass_EfficiencyShow, setH2HIndividualSplitting_pass_EfficiencyShow] = React.useState(true);
            const [H2HIndividualShot_EfficiencyShow, setH2HIndividualShot_EfficiencyShow] = React.useState(true);
            const [H2HIndividualGoalkeeper_Intervention_EfficiencyShow, setH2HIndividualGoalkeeper_Intervention_EfficiencyShow] = React.useState(true);
            const [H2HIndividualSave_EfficiencyShow, setH2HIndividualSave_EfficiencyShow] = React.useState(true);
            const [H2HIndividualThrowIn_EfficiencyShow, setH2HIndividualThrowIn_EfficiencyShow] = React.useState(true);
            const [H2HIndividualFalt_EfficiencyShow, setH2HIndividualFalt_EfficiencyShow] = React.useState(true);
            const [H2HIndividualCorner_EfficiencyShow, setH2HIndividualCorner_EfficiencyShow] = React.useState(true);
            const [H2HIndividualGoalkick_EfficiencyShow, setH2HIndividualGoalkick_EfficiencyShow] = React.useState(true);
            const [H2HIndividualPenalty_EfficiencyShow, setH2HIndividualPenalty_EfficiencyShow] = React.useState(true);
           
            const handleClickH2HIndividualPass_Efficiency= () => {
              setH2HIndividualPass_EfficiencyShow(!H2HIndividualPass_EfficiencyShow)};
            const handleClickH2HIndividualShort_pass_Efficiency= () => {
              setH2HIndividualShort_pass_EfficiencyShow(!H2HIndividualShort_pass_EfficiencyShow)};
            const handleClickH2HIndividualDefensive_1v1_Efficiency= () => {
              setH2HIndividualDefensive_1v1_EfficiencyShow(!H2HIndividualDefensive_1v1_EfficiencyShow)};
            const handleClickH2HIndividualOffensive_1v1_Efficiency= () => {
              setH2HIndividualOffensive_1v1_EfficiencyShow(!H2HIndividualOffensive_1v1_EfficiencyShow)};
            const handleClickH2HIndividualDefensive_Aerial_duel_Efficiency= () => {
              setH2HIndividualDefensive_Aerial_duel_EfficiencyShow(!H2HIndividualDefensive_Aerial_duel_EfficiencyShow)};
            const handleClickH2HIndividualOffensive_aerial_duel_Efficiency= () => {
              setH2HIndividualOffensive_aerial_duel_EfficiencyShow(!H2HIndividualOffensive_aerial_duel_EfficiencyShow)};
            const handleClickH2HIndividualCross_Efficiency= () => {
              setH2HIndividualCross_EfficiencyShow(!H2HIndividualCross_EfficiencyShow)};
            const handleClickH2HIndividualLong_pass_Efficiency= () => {
              setH2HIndividualLong_pass_EfficiencyShow(!H2HIndividualLong_pass_EfficiencyShow)};
            const handleClickH2HIndividualSplitting_pass_Efficiency= () => {
              setH2HIndividualSplitting_pass_EfficiencyShow(!H2HIndividualSplitting_pass_EfficiencyShow)};
            const handleClickH2HIndividualShot_Efficiency= () => {
              setH2HIndividualShot_EfficiencyShow(!H2HIndividualShot_EfficiencyShow)};
            const handleClickH2HIndividualGoalkeeper_Intervention_Efficiency= () => {
              setH2HIndividualGoalkeeper_Intervention_EfficiencyShow(!H2HIndividualGoalkeeper_Intervention_EfficiencyShow)};
            const handleClickH2HIndividualSave_Efficiency= () => {
              setH2HIndividualSave_EfficiencyShow(!H2HIndividualSave_EfficiencyShow)};
            const handleClickH2HIndividualThrowIn_Efficiency= () => {
              setH2HIndividualThrowIn_EfficiencyShow(!H2HIndividualThrowIn_EfficiencyShow)};
            const handleClickH2HIndividualFalt_Efficiency= () => {
              setH2HIndividualFalt_EfficiencyShow(!H2HIndividualFalt_EfficiencyShow)};
            const handleClickH2HIndividualCorner_Efficiency= () => {
              setH2HIndividualCorner_EfficiencyShow(!H2HIndividualCorner_EfficiencyShow)};
            const handleClickH2HIndividualGoalkick_Efficiency= () => {
              setH2HIndividualGoalkick_EfficiencyShow(!H2HIndividualGoalkick_EfficiencyShow)};
            const handleClickH2HIndividualPenalty_Efficiency= () => {
              setH2HIndividualPenalty_EfficiencyShow(!H2HIndividualPenalty_EfficiencyShow)};
        
          // Show/hide Success Rate  H2H > individual > global dashboard 
          const [H2HIndividualSucceedDefensiveDualRateShow, setH2HIndividualSucceedDefensiveDualRateShow] = React.useState(true);
          const [H2HIndividualSucceedDefensive1v1RateShow, setH2HIndividualSucceedDefensive1v1RateShow] = React.useState(true);
          const [H2HIndividualSucceedDefensiveAerialDualShow, setH2HIndividualSucceedDefensiveAerialDualShow] = React.useState(true);
          const [H2HIndividualSucceedOffensiveDualRateShow, setH2HIndividualSucceedOffensiveDualRateShow] = React.useState(true);
          const [H2HIndividualSucceedOffensive1v1RateShow, setH2HIndividualSucceedOffensive1v1RateShow] = React.useState(true);
          const [H2HIndividualSucceedOffensiveAerialDualRateShow, setH2HIndividualSucceedOffensiveAerialDualRateShow] = React.useState(true);
          const [H2HIndividualSucceedPassRateShow, setH2HIndividualSucceedPassRateShow] = React.useState(true);
          const [H2HIndividualOffensivePassRateShow, setH2HIndividualOffensivePassRateShow] = React.useState(true);
          const [H2HIndividualSucceedShortPassRateShow, setH2HIndividualSucceedShortPassRateShow] = React.useState(true);
          const [H2HIndividualSucceedLongPassRateShow, setH2HIndividualSucceedLongPassRateShow] = React.useState(true);
          const [H2HIndividualSucceedSplitingPassRateShow, setH2HIndividualSucceedSplitingPassRateShow] = React.useState(true);   
      
          const handleClickH2HIndividualSucceedDefensiveDualRate= () => {
            setH2HIndividualSucceedDefensiveDualRateShow(!H2HIndividualSucceedDefensiveDualRateShow)};
          const handleClickH2HIndividualSucceedDefensive1v1Rate= () => {
            setH2HIndividualSucceedDefensive1v1RateShow(!H2HIndividualSucceedDefensive1v1RateShow)};
          const handleClickH2HIndividualSucceedDefensiveAerialDual= () => {
            setH2HIndividualSucceedDefensiveAerialDualShow(!H2HIndividualSucceedDefensiveAerialDualShow)};
          const handleClickH2HIndividualSucceedOffensiveDualRate= () => {
            setH2HIndividualSucceedOffensiveDualRateShow(!H2HIndividualSucceedOffensiveDualRateShow)};
          const handleClickH2HIndividualSucceedOffensive1v1Rate= () => {
            setH2HIndividualSucceedOffensive1v1RateShow(!H2HIndividualSucceedOffensive1v1RateShow)};
          const handleClickH2HIndividualSucceedOffensiveAerialDualRate= () => {
            setH2HIndividualSucceedOffensiveAerialDualRateShow(!H2HIndividualSucceedOffensiveAerialDualRateShow)};
          const handleClickH2HIndividualSucceedPassRate= () => {
            setH2HIndividualSucceedPassRateShow(!H2HIndividualSucceedPassRateShow)};
          const handleClickH2HIndividualOffensivePassRate= () => {
            setH2HIndividualOffensivePassRateShow(!H2HIndividualOffensivePassRateShow)};
          const handleClickH2HIndividualSucceedShortPassRate= () => {
            setH2HIndividualSucceedShortPassRateShow(!H2HIndividualSucceedShortPassRateShow)};
          const handleClickH2HIndividualSucceedLongPassRate= () => {
            setH2HIndividualSucceedLongPassRateShow(!H2HIndividualSucceedLongPassRateShow)};
          const handleClickH2HIndividualSucceedSplitingPassRate= () => {
            setH2HIndividualSucceedSplitingPassRateShow(!H2HIndividualSucceedSplitingPassRateShow)};
    
          // Show/hide maps H2HGlobal >  > global dashboard
        
          const [H2HGlobalMappingShow, setH2HGlobalMappingShow] = React.useState(true);
          const [H2HGlobalAxisShow, setH2HGlobalAxisShow] = React.useState(true);
          const [H2HGlobalZoneShow, setH2HGlobalZoneShow] = React.useState(true);
          const [H2HGlobalBoxMappingShow, setH2HGlobalBoxMappingShow] = React.useState(true);
          const [H2HGlobalBoxAxisShow, setH2HGlobalBoxAxisShow] = React.useState(true);
          const [H2HGlobalBoxZoneShow, setH2HGlobalBoxZoneShow] = React.useState(true);
      
        
          const handleClickH2HGlobalMapping = () => {
            setH2HGlobalMappingShow(!H2HGlobalMappingShow)}
          const handleClickH2HGlobalAxis = () => {
            setH2HGlobalAxisShow(!H2HGlobalAxisShow)}
          const handleClickH2HGlobalZone = () => {
            setH2HGlobalZoneShow(!H2HGlobalZoneShow)}
          const handleClickH2HGlobalBoxMapping = () => {
            setH2HGlobalBoxMappingShow(!H2HGlobalBoxMappingShow)}
          const handleClickH2HGlobalBoxAxis = () => {
            setH2HGlobalBoxAxisShow(!H2HGlobalBoxAxisShow)}
          const handleClickH2HGlobalMappingBoxZone = () => {
            setH2HGlobalBoxZoneShow(!H2HGlobalBoxZoneShow)}
      
          // Show/hide cards  H2HGlobal >  > global dashboard 
          const [H2HGlobalPassShow, setH2HGlobalPassShow] = React.useState(true);
          const [H2HGlobalFailedPassShow, setH2HGlobalFailedPassShow] = React.useState(true);
          const [H2HGlobalSucceedPassShow, setH2HGlobalSucceedPassShow] = React.useState(true);
          const [H2HGlobalShortPassShow, setH2HGlobalShortPassShow] = React.useState(true);
          const [H2HGlobalFailedShortPassShow, setH2HGlobalFailedShortPassShow] = React.useState(true);
          const [H2HGlobalSucceedShortPassShow, setH2HGlobalSucceedShortPassShow] = React.useState(true);
          const [H2HGlobalDefensiveDuelShow, setH2HGlobalDefensiveDuelShow] = React.useState(true);
          const [H2HGlobalFailedDefensiveDuelShow, setH2HGlobalFailedDefensiveDuelShow] = React.useState(true);
          const [H2HGlobalSucceedDefensiveDuelShow, setH2HGlobalSucceedDefensiveDuelShow] = React.useState(true);
          const [H2HGlobalInterceptionShow, setH2HGlobalInterceptionShow] = React.useState(true);
          const [H2HGlobalInterventionShow, setH2HGlobalInterventionShow] = React.useState(true);
          const [H2HGlobalTackleShow, setH2HGlobalTackleShow] = React.useState(true);
          const [H2HGlobalDribbleShow, setH2HGlobalDribbleShow] = React.useState(true);
          const [H2HGlobalFailedDribbleShow, setH2HGlobalFailedDribbleShow] = React.useState(true);
          const [H2HGlobalSucceedDribbleShow, setH2HGlobalSucceedDribbleShow] = React.useState(true);
          const [H2HGlobalBallSprintShow, setH2HGlobalBallSprintShow] = React.useState(true);
          const [H2HGlobalDefensiveAerialDuelShow, setH2HGlobalDefensiveAerialDuelShow] = React.useState(true);
          const [H2HGlobalFailedDefensiveAerialDuelShow, setH2HGlobalFailedDefensiveAerialDuelShow] = React.useState(true);
          const [H2HGlobalSucceedDefensiveAerialDuelShow, setH2HGlobalSucceedDefensiveAerialDuelShow] = React.useState(true);
          const [H2HGlobalOffensiveAerialDuelShow, setH2HGlobalOffensiveAerialDuelShow] = React.useState(true);
          const [H2HGlobalFailedOffensiveAerialDuelShow, setH2HGlobalFailedOffensiveAerialDuelShow] = React.useState(true);
          const [H2HGlobalSucceedOffensiveAerialDuelShow, setH2HGlobalSucceedOffensiveAerialDuelShow] = React.useState(true);
          const [H2HGlobalCrossShow, setH2HGlobalCrossShow] = React.useState(true);
          const [H2HGlobalFailedCrossShow, setH2HGlobalFailedCrossShow] = React.useState(true);
          const [H2HGlobalSucceedCrossShow, setH2HGlobalSucceedCrossShow] = React.useState(true);
          const [H2HGlobalLongPassShow, setH2HGlobalLongPassShow] = React.useState(true);
          const [H2HGlobalFailedLongPassShow, setH2HGlobalFailedLongPassShow] = React.useState(true);
          const [H2HGlobalSucceedLongPassShow, setH2HGlobalSucceedLongPassShow] = React.useState(true);
          const [H2HGlobalSplittingPassShow, setH2HGlobalSplittingPassShow] = React.useState(true);
          const [H2HGlobalFailedSplittingPassShow, setH2HGlobalFailedSplittingPassShow] = React.useState(true);
          const [H2HGlobalSucceedSplittingPassShow, setH2HGlobalSucceedSplittingPassShow] = React.useState(true);
          const [H2HGlobalShotShow, setH2HGlobalShotShow] = React.useState(true);
          const [H2HGlobalFailedShotShow, setH2HGlobalFailedShotShow] = React.useState(true);
          const [H2HGlobalSucceedShotShow, setH2HGlobalSucceedShotShow] = React.useState(true);
          const [H2HGlobalGoalkeeperInterventionShow, setH2HGlobalGoalkeeperInterventionShow] = React.useState(true);
          const [H2HGlobalFailedGoalkeeperInterventionShow, setH2HGlobalFailedGoalkeeperInterventionShow] = React.useState(true);
          const [H2HGlobalSucceedGoalkeeperInterventionShow, setH2HGlobalSucceedGoalkeeperInterventionShow] = React.useState(true);
          const [H2HGlobalSaveShow, setH2HGlobalSaveShow] = React.useState(true);
          const [H2HGlobalFailedSaveShow, setH2HGlobalFailedSaveShow] = React.useState(true);
          const [H2HGlobalSucceedSaveShow, setH2HGlobalSucceedSaveShow] = React.useState(true);
          const [H2HGlobalThrowInShow, setH2HGlobalThrowInShow] = React.useState(true);
          const [H2HGlobalFaltCommitedShow, setH2HGlobalFaltCommitedShow] = React.useState(true);
          const [H2HGlobalFaltConcededShow, setH2HGlobalFaltConcededShow] = React.useState(true);
          const [H2HGlobalObtainedCornerShow, setH2HGlobalObtainedCornerShow] = React.useState(true);
          const [H2HGlobalConcededCornerShow, setH2HGlobalConcededCornerShow] = React.useState(true);
          const [H2HGlobalCornerPlayedShow, setH2HGlobalCornerPlayedShow] = React.useState(true);
          const [H2HGlobalAssistPassShow, setH2HGlobalAssistPassShow] = React.useState(true);
          const [H2HGlobalGoalShow, setH2HGlobalGoalShow] = React.useState(true);
          const [H2HGlobalKeyPassShow, setH2HGlobalKeyPassShow] = React.useState(true);
          const [H2HGlobalPartialImbalanceShow, setH2HGlobalPartialImbalanceShow] = React.useState(true);
          const [H2HGlobalTotalImbalanceShow, setH2HGlobalTotalImbalanceShow] = React.useState(true);
          const [H2HGlobalDirectAttackShow, setH2HGlobalDirectAttackShow] = React.useState(true);
          const [H2HGlobalCounterAttackShow, setH2HGlobalCounterAttackShow] = React.useState(true);
          const [H2HGlobalPlacedAttackShow, setH2HGlobalPlacedAttackShow] = React.useState(true);
          const [H2HGlobalOffsideShow, setH2HGlobalOffsideShow] = React.useState(true);
          const [H2HGlobalObtainedPenaltyShow, setH2HGlobalObtainedPenaltyShow] = React.useState(true);
          const [H2HGlobalYellowCardShow, setH2HGlobalYellowCardShow] = React.useState(true);
          const [H2HGlobalRedCardShow, setH2HGlobalRedCardShow] = React.useState(true);
         
          const handleClickH2HGlobalPass= () => {
            setH2HGlobalPassShow(!H2HGlobalPassShow)};
          const handleClickH2HGlobalFailedPass= () => {
            setH2HGlobalFailedPassShow(!H2HGlobalFailedPassShow)};
          const handleClickH2HGlobalSucceedPass= () => {
            setH2HGlobalSucceedPassShow(!H2HGlobalSucceedPassShow)};
          const handleClickH2HGlobalShortPass= () => {
            setH2HGlobalShortPassShow(!H2HGlobalShortPassShow)};
          const handleClickH2HGlobalFailedShortPass= () => {
            setH2HGlobalFailedShortPassShow(!H2HGlobalFailedShortPassShow)};
          const handleClickH2HGlobalSucceedShortPass= () => {
            setH2HGlobalSucceedShortPassShow(!H2HGlobalSucceedShortPassShow)};
          const handleClickH2HGlobalDefensiveDuel= () => {
            setH2HGlobalDefensiveDuelShow(!H2HGlobalDefensiveDuelShow)};
          const handleClickH2HGlobalFailedDefensiveDuel= () => {
            setH2HGlobalFailedDefensiveDuelShow(!H2HGlobalFailedDefensiveDuelShow)};
          const handleClickH2HGlobalSucceedDefensiveDuel= () => {
            setH2HGlobalSucceedDefensiveDuelShow(!H2HGlobalSucceedDefensiveDuelShow)};
          const handleClickH2HGlobalInterception= () => {
            setH2HGlobalInterceptionShow(!H2HGlobalInterceptionShow)};
          const handleClickH2HGlobalIntervention= () => {
            setH2HGlobalInterventionShow(!H2HGlobalInterventionShow)};
          const handleClickH2HGlobalTackle= () => {
            setH2HGlobalTackleShow(!H2HGlobalTackleShow)};
          const handleClickH2HGlobalDribble= () => {
            setH2HGlobalDribbleShow(!H2HGlobalDribbleShow)};
          const handleClickH2HGlobalFailedDribble= () => {
            setH2HGlobalFailedDribbleShow(!H2HGlobalFailedDribbleShow)};
          const handleClickH2HGlobalSucceedDribble= () => {
            setH2HGlobalSucceedDribbleShow(!H2HGlobalSucceedDribbleShow)};
          const handleClickH2HGlobalBallSprint= () => {
            setH2HGlobalBallSprintShow(!H2HGlobalBallSprintShow)};
          const handleClickH2HGlobalDefensiveAerialDuel= () => {
            setH2HGlobalDefensiveAerialDuelShow(!H2HGlobalDefensiveAerialDuelShow)};
          const handleClickH2HGlobalFailedDefensiveAerialDuel= () => {
            setH2HGlobalFailedDefensiveAerialDuelShow(!H2HGlobalFailedDefensiveAerialDuelShow)};
          const handleClickH2HGlobalSucceedDefensiveAerialDuel= () => {
            setH2HGlobalSucceedDefensiveAerialDuelShow(!H2HGlobalSucceedDefensiveAerialDuelShow)};
          const handleClickH2HGlobalOffensiveAerialDuel= () => {
            setH2HGlobalOffensiveAerialDuelShow(!H2HGlobalOffensiveAerialDuelShow)};
          const handleClickH2HGlobalFailedOffensiveAerialDuel= () => {
            setH2HGlobalFailedOffensiveAerialDuelShow(!H2HGlobalFailedOffensiveAerialDuelShow)};
          const handleClickH2HGlobalSucceedOffensiveAerialDuel= () => {
            setH2HGlobalSucceedOffensiveAerialDuelShow(!H2HGlobalSucceedOffensiveAerialDuelShow)};
          const handleClickH2HGlobalCross= () => {
            setH2HGlobalCrossShow(!H2HGlobalCrossShow)};
          const handleClickH2HGlobalFailedCross= () => {
            setH2HGlobalFailedCrossShow(!H2HGlobalFailedCrossShow)};
          const handleClickH2HGlobalSucceedCross= () => {
            setH2HGlobalSucceedCrossShow(!H2HGlobalSucceedCrossShow)};
          const handleClickH2HGlobalLongPass= () => {
            setH2HGlobalLongPassShow(!H2HGlobalLongPassShow)};
          const handleClickH2HGlobalFailedLongPass= () => {
            setH2HGlobalFailedLongPassShow(!H2HGlobalFailedLongPassShow)};
          const handleClickH2HGlobalSucceedLongPass= () => {
            setH2HGlobalSucceedLongPassShow(!H2HGlobalSucceedLongPassShow)};
          const handleClickH2HGlobalSplittingPass= () => {
            setH2HGlobalSplittingPassShow(!H2HGlobalSplittingPassShow)};
          const handleClickH2HGlobalFailedSplittingPass= () => {
            setH2HGlobalFailedSplittingPassShow(!H2HGlobalFailedSplittingPassShow)};
          const handleClickH2HGlobalSucceedSplittingPass= () => {
            setH2HGlobalSucceedSplittingPassShow(!H2HGlobalSucceedSplittingPassShow)};
          const handleClickH2HGlobalShot= () => {
            setH2HGlobalShotShow(!H2HGlobalShotShow)};
          const handleClickH2HGlobalFailedShot= () => {
            setH2HGlobalFailedShotShow(!H2HGlobalFailedShotShow)};
          const handleClickH2HGlobalSucceedShot= () => {
            setH2HGlobalSucceedShotShow(!H2HGlobalSucceedShotShow)};
          const handleClickH2HGlobalGoalkeeperIntervention= () => {
            setH2HGlobalGoalkeeperInterventionShow(!H2HGlobalGoalkeeperInterventionShow)};
          const handleClickH2HGlobalFailedGoalkeeperIntervention= () => {
            setH2HGlobalFailedGoalkeeperInterventionShow(!H2HGlobalFailedGoalkeeperInterventionShow)};
          const handleClickH2HGlobalSucceedGoalkeeperIntervention= () => {
            setH2HGlobalSucceedGoalkeeperInterventionShow(!H2HGlobalSucceedGoalkeeperInterventionShow)};
          const handleClickH2HGlobalSave= () => {
            setH2HGlobalSaveShow(!H2HGlobalSaveShow)};
          const handleClickH2HGlobalFailedSave= () => {
            setH2HGlobalFailedSaveShow(!H2HGlobalFailedSaveShow)};
          const handleClickH2HGlobalSucceedSave= () => {
            setH2HGlobalSucceedSaveShow(!H2HGlobalSucceedSaveShow)};
          const handleClickH2HGlobalThrowIn= () => {
            setH2HGlobalThrowInShow(!H2HGlobalThrowInShow)};
          const handleClickH2HGlobalFaltCommited= () => {
            setH2HGlobalFaltCommitedShow(!H2HGlobalFaltCommitedShow)};
          const handleClickH2HGlobalFaltConceded= () => {
            setH2HGlobalFaltConcededShow(!H2HGlobalFaltConcededShow)};
          const handleClickH2HGlobalObtainedCorner= () => {
            setH2HGlobalObtainedCornerShow(!H2HGlobalObtainedCornerShow)};
          const handleClickH2HGlobalConcededCorner= () => {
            setH2HGlobalConcededCornerShow(!H2HGlobalConcededCornerShow)};
          const handleClickH2HGlobalCornerPlayed= () => {
            setH2HGlobalCornerPlayedShow(!H2HGlobalCornerPlayedShow)};
          const handleClickH2HGlobalAssistPass= () => {
            setH2HGlobalAssistPassShow(!H2HGlobalAssistPassShow)};
          const handleClickH2HGlobalGoal= () => {
            setH2HGlobalGoalShow(!H2HGlobalGoalShow)};
          const handleClickH2HGlobalKeyPass= () => {
            setH2HGlobalKeyPassShow(!H2HGlobalKeyPassShow)};
          const handleClickH2HGlobalPartialImbalance= () => {
            setH2HGlobalPartialImbalanceShow(!H2HGlobalPartialImbalanceShow)};
          const handleClickH2HGlobalTotalImbalance= () => {
            setH2HGlobalTotalImbalanceShow(!H2HGlobalTotalImbalanceShow)};
          const handleClickH2HGlobalDirectAttack= () => {
            setH2HGlobalDirectAttackShow(!H2HGlobalDirectAttackShow)};
          const handleClickH2HGlobalCounterAttack= () => {
            setH2HGlobalCounterAttackShow(!H2HGlobalCounterAttackShow)};
          const handleClickH2HGlobalPlacedAttack= () => {
            setH2HGlobalPlacedAttackShow(!H2HGlobalPlacedAttackShow)};
          const handleClickH2HGlobalOffside= () => {
            setH2HGlobalOffsideShow(!H2HGlobalOffsideShow)};
          const handleClickH2HGlobalObtainedPenalty= () => {
            setH2HGlobalObtainedPenaltyShow(!H2HGlobalObtainedPenaltyShow)};
          const handleClickH2HGlobalYellowCard= () => {
            setH2HGlobalYellowCardShow(!H2HGlobalYellowCardShow)};
          const handleClickH2HGlobalRedCard= () => {
            setH2HGlobalRedCardShow(!H2HGlobalRedCardShow)};
      
          // Show/hide efficiency diagram  H2HGlobal >  > global dashboard 
            const [H2HGlobalPass_EfficiencyShow, setH2HGlobalPass_EfficiencyShow] = React.useState(true);
            const [H2HGlobalShort_pass_EfficiencyShow, setH2HGlobalShort_pass_EfficiencyShow] = React.useState(true);
            const [H2HGlobalDefensive_1v1_EfficiencyShow, setH2HGlobalDefensive_1v1_EfficiencyShow] = React.useState(true);
            const [H2HGlobalOffensive_1v1_EfficiencyShow, setH2HGlobalOffensive_1v1_EfficiencyShow] = React.useState(true);
            const [H2HGlobalDefensive_Aerial_duel_EfficiencyShow, setH2HGlobalDefensive_Aerial_duel_EfficiencyShow] = React.useState(true);
            const [H2HGlobalOffensive_aerial_duel_EfficiencyShow, setH2HGlobalOffensive_aerial_duel_EfficiencyShow] = React.useState(true);
            const [H2HGlobalCross_EfficiencyShow, setH2HGlobalCross_EfficiencyShow] = React.useState(true);
            const [H2HGlobalLong_pass_EfficiencyShow, setH2HGlobalLong_pass_EfficiencyShow] = React.useState(true);
            const [H2HGlobalSplitting_pass_EfficiencyShow, setH2HGlobalSplitting_pass_EfficiencyShow] = React.useState(true);
            const [H2HGlobalShot_EfficiencyShow, setH2HGlobalShot_EfficiencyShow] = React.useState(true);
            const [H2HGlobalGoalkeeper_Intervention_EfficiencyShow, setH2HGlobalGoalkeeper_Intervention_EfficiencyShow] = React.useState(true);
            const [H2HGlobalSave_EfficiencyShow, setH2HGlobalSave_EfficiencyShow] = React.useState(true);
            const [H2HGlobalThrowIn_EfficiencyShow, setH2HGlobalThrowIn_EfficiencyShow] = React.useState(true);
            const [H2HGlobalFalt_EfficiencyShow, setH2HGlobalFalt_EfficiencyShow] = React.useState(true);
            const [H2HGlobalCorner_EfficiencyShow, setH2HGlobalCorner_EfficiencyShow] = React.useState(true);
            const [H2HGlobalGoalkick_EfficiencyShow, setH2HGlobalGoalkick_EfficiencyShow] = React.useState(true);
            const [H2HGlobalPenalty_EfficiencyShow, setH2HGlobalPenalty_EfficiencyShow] = React.useState(true);
           
            const handleClickH2HGlobalPass_Efficiency= () => {
              setH2HGlobalPass_EfficiencyShow(!H2HGlobalPass_EfficiencyShow)};
            const handleClickH2HGlobalShort_pass_Efficiency= () => {
              setH2HGlobalShort_pass_EfficiencyShow(!H2HGlobalShort_pass_EfficiencyShow)};
            const handleClickH2HGlobalDefensive_1v1_Efficiency= () => {
              setH2HGlobalDefensive_1v1_EfficiencyShow(!H2HGlobalDefensive_1v1_EfficiencyShow)};
            const handleClickH2HGlobalOffensive_1v1_Efficiency= () => {
              setH2HGlobalOffensive_1v1_EfficiencyShow(!H2HGlobalOffensive_1v1_EfficiencyShow)};
            const handleClickH2HGlobalDefensive_Aerial_duel_Efficiency= () => {
              setH2HGlobalDefensive_Aerial_duel_EfficiencyShow(!H2HGlobalDefensive_Aerial_duel_EfficiencyShow)};
            const handleClickH2HGlobalOffensive_aerial_duel_Efficiency= () => {
              setH2HGlobalOffensive_aerial_duel_EfficiencyShow(!H2HGlobalOffensive_aerial_duel_EfficiencyShow)};
            const handleClickH2HGlobalCross_Efficiency= () => {
              setH2HGlobalCross_EfficiencyShow(!H2HGlobalCross_EfficiencyShow)};
            const handleClickH2HGlobalLong_pass_Efficiency= () => {
              setH2HGlobalLong_pass_EfficiencyShow(!H2HGlobalLong_pass_EfficiencyShow)};
            const handleClickH2HGlobalSplitting_pass_Efficiency= () => {
              setH2HGlobalSplitting_pass_EfficiencyShow(!H2HGlobalSplitting_pass_EfficiencyShow)};
            const handleClickH2HGlobalShot_Efficiency= () => {
              setH2HGlobalShot_EfficiencyShow(!H2HGlobalShot_EfficiencyShow)};
            const handleClickH2HGlobalGoalkeeper_Intervention_Efficiency= () => {
              setH2HGlobalGoalkeeper_Intervention_EfficiencyShow(!H2HGlobalGoalkeeper_Intervention_EfficiencyShow)};
            const handleClickH2HGlobalSave_Efficiency= () => {
              setH2HGlobalSave_EfficiencyShow(!H2HGlobalSave_EfficiencyShow)};
            const handleClickH2HGlobalThrowIn_Efficiency= () => {
              setH2HGlobalThrowIn_EfficiencyShow(!H2HGlobalThrowIn_EfficiencyShow)};
            const handleClickH2HGlobalFalt_Efficiency= () => {
              setH2HGlobalFalt_EfficiencyShow(!H2HGlobalFalt_EfficiencyShow)};
            const handleClickH2HGlobalCorner_Efficiency= () => {
              setH2HGlobalCorner_EfficiencyShow(!H2HGlobalCorner_EfficiencyShow)};
            const handleClickH2HGlobalGoalkick_Efficiency= () => {
              setH2HGlobalGoalkick_EfficiencyShow(!H2HGlobalGoalkick_EfficiencyShow)};
            const handleClickH2HGlobalPenalty_Efficiency= () => {
              setH2HGlobalPenalty_EfficiencyShow(!H2HGlobalPenalty_EfficiencyShow)};
        
          // Show/hide Success Rate  H2HGlobal >  > global dashboard 
          const [H2HGlobalSucceedDefensiveDualRateShow, setH2HGlobalSucceedDefensiveDualRateShow] = React.useState(true);
          const [H2HGlobalSucceedDefensive1v1RateShow, setH2HGlobalSucceedDefensive1v1RateShow] = React.useState(true);
          const [H2HGlobalSucceedDefensiveAerialDualShow, setH2HGlobalSucceedDefensiveAerialDualShow] = React.useState(true);
          const [H2HGlobalSucceedOffensiveDualRateShow, setH2HGlobalSucceedOffensiveDualRateShow] = React.useState(true);
          const [H2HGlobalSucceedOffensive1v1RateShow, setH2HGlobalSucceedOffensive1v1RateShow] = React.useState(true);
          const [H2HGlobalSucceedOffensiveAerialDualRateShow, setH2HGlobalSucceedOffensiveAerialDualRateShow] = React.useState(true);
          const [H2HGlobalSucceedPassRateShow, setH2HGlobalSucceedPassRateShow] = React.useState(true);
          const [H2HGlobalOffensivePassRateShow, setH2HGlobalOffensivePassRateShow] = React.useState(true);
          const [H2HGlobalSucceedShortPassRateShow, setH2HGlobalSucceedShortPassRateShow] = React.useState(true);
          const [H2HGlobalSucceedLongPassRateShow, setH2HGlobalSucceedLongPassRateShow] = React.useState(true);
          const [H2HGlobalSucceedSplitingPassRateShow, setH2HGlobalSucceedSplitingPassRateShow] = React.useState(true);   
      
          const handleClickH2HGlobalSucceedDefensiveDualRate= () => {
            setH2HGlobalSucceedDefensiveDualRateShow(!H2HGlobalSucceedDefensiveDualRateShow)};
          const handleClickH2HGlobalSucceedDefensive1v1Rate= () => {
            setH2HGlobalSucceedDefensive1v1RateShow(!H2HGlobalSucceedDefensive1v1RateShow)};
          const handleClickH2HGlobalSucceedDefensiveAerialDual= () => {
            setH2HGlobalSucceedDefensiveAerialDualShow(!H2HGlobalSucceedDefensiveAerialDualShow)};
          const handleClickH2HGlobalSucceedOffensiveDualRate= () => {
            setH2HGlobalSucceedOffensiveDualRateShow(!H2HGlobalSucceedOffensiveDualRateShow)};
          const handleClickH2HGlobalSucceedOffensive1v1Rate= () => {
            setH2HGlobalSucceedOffensive1v1RateShow(!H2HGlobalSucceedOffensive1v1RateShow)};
          const handleClickH2HGlobalSucceedOffensiveAerialDualRate= () => {
            setH2HGlobalSucceedOffensiveAerialDualRateShow(!H2HGlobalSucceedOffensiveAerialDualRateShow)};
          const handleClickH2HGlobalSucceedPassRate= () => {
            setH2HGlobalSucceedPassRateShow(!H2HGlobalSucceedPassRateShow)};
          const handleClickH2HGlobalOffensivePassRate= () => {
            setH2HGlobalOffensivePassRateShow(!H2HGlobalOffensivePassRateShow)};
          const handleClickH2HGlobalSucceedShortPassRate= () => {
            setH2HGlobalSucceedShortPassRateShow(!H2HGlobalSucceedShortPassRateShow)};
          const handleClickH2HGlobalSucceedLongPassRate= () => {
            setH2HGlobalSucceedLongPassRateShow(!H2HGlobalSucceedLongPassRateShow)};
          const handleClickH2HGlobalSucceedSplitingPassRate= () => {
            setH2HGlobalSucceedSplitingPassRateShow(!H2HGlobalSucceedSplitingPassRateShow)};
    return (
        <TabContent activeTab={verticalTabsIcons}>
        <TabPane tabId="HeadtoHead">
      {/* subcategories begin */}
      <Card>
      <Nav className="nav-pills-info" pills>
      <NavItem>
        <NavLink
          data-toggle="tab"
          href="#pablo"
          className={horizontalTabsC === "Global" ? "active" : ""}
          onClick={(e) =>
            changeActiveTab(e, "horizontalTabsC", "Global")
          }
        >
          Global
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          data-toggle="tab"
          href="#pablo"
          className={horizontalTabsC === "Joueurs" ? "active" : ""}
          onClick={(e) =>
            changeActiveTab(e, "horizontalTabsC", "Joueurs")
          }
        >
          Individuel
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent className="tab-space" activeTab={horizontalTabsC}>
    <TabPane tabId="Global">
      <Row>
      <Col>
        <Card>
          <div
            aria-multiselectable={true}
            className="card-collapse"
            id="accordion"
            role="tablist"
            >
          <Card className="card-plain">
            <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
              </Collapse>
              </Card>
              <Card className="card-plain">
            <CardHeader role="tab">
              <a
                aria-expanded={openedCollapseDataFilters}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {
                  e.preventDefault();
                  setopenedCollapseDataFilters(!openedCollapseDataFilters);
                }}
              >
                Paramétrer les données{" "}
                <i className="tim-icons icon-minimal-down" />
              </a>
            </CardHeader>
            <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
              <CardBody>
              <Row>
                <Col md="6">
                  <FormGroup>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder="Catégorie joueur(s) 1"
                    name="Catégorie joueur(s) 1"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelect1stcategory}
                    onChange={(value) => setmultipleSelect1stcategory(value)}
                    options={[
                      {
                        value: "",
                        label: "Catégorie joueur(s) 1",
                        isDisabled: true,
                      },
                      { value: "1", label: "'1st name' 'Last name'" },
                    ]}
                  />
                  </FormGroup>
                </Col>
                <Col md="6">
                <FormGroup>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder="Catégorie joueur(s) 2"
                    name="Catégorie joueur(s) 2"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelect2ndcategory}
                    onChange={(value) => setmultipleSelect2ndcategory(value)}
                    options={[
                      {
                        value: "",
                        label: "Catégorie joueur(s) 2",
                        isDisabled: true,
                      },
                      { value: "1", label: "'1st name' 'Last name'" },
                    ]}
                  />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                <FormGroup>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder="Zone(s)"
                    name="multipleSelect"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelectZone}
                    onChange={(value) => setmultipleSelectZone(value)}
                    options={[
                      {
                        value: "",
                        label: "Zone(s)",
                        isDisabled: true,
                      },
                      { value: "1", label: "Basse" },
                      { value: "2", label: "Médiane basse" },
                      { value: "3", label: "Médiane haute" },
                      { value: "4", label: "Haute" },
                    ]}
                  />
                  </FormGroup>
                </Col>
                <Col md="6">
                <FormGroup>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder="Axe(s)"
                    name="multipleSelect"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelectAxis}
                    onChange={(value) => setmultipleSelectAxis(value)}
                    options={[
                      {
                        value: "",
                        label: "Axe(s)",
                        isDisabled: true,
                      },
                      { value: "1", label: "Couloir droit" },
                      { value: "2", label: "Axe droit" },
                      { value: "3", label: "Axe" },
                      { value: "4", label: "Axe gauche" },
                      { value: "5", label: "Couloir gauche" },
                    ]}
                  />
                  </FormGroup>
                </Col>
                
                <Col md="12">
                <br></br>
              <Row>
              <Col md="6">
                    <FormGroup>
                      <Input placeholder="Temps initial" type="text" />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                      <Input placeholder="Temps final" type="text" />
                    </FormGroup>
                </Col>
              </Row>
              <br></br>
              <div
                className="slider slider-primary mb-3"
                ref={slider3Ref}
              />
               </Col> 
               </Row>
               <Row>
              <Col>
              <Card className="card-tasks text-left">
                  <CardHeader>
                  </CardHeader>
                  <CardBody>
                  <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsH2HGlobal === "Maps" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsH2HGlobal", "Maps")
                        }
                      >
                       Maps
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsH2HGlobal === "Valeurs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsH2HGlobal", "Valeurs")
                        }
                      >
                        Valeurs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsH2HGlobal === "Efficacité" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsH2HGlobal", "Efficacité")
                        }
                      >
                       Efficacité
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsH2HGlobal === "Précision" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsH2HGlobal", "Précision")
                        }
                      >
                        Précision
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={horizontalTabsH2HGlobal}>
                    <TabPane tabId="Maps"> 
                    <br></br>                              
                    <div className="table-responsive table-full-width">
                      <Table>
                        <tbody>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HGlobalMapping}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map terrain</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HGlobalAxis}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map axes terrain</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HGlobalZone}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map zones terrain</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HGlobalBoxMapping}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map surface</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HGlobalBoxAxis}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map axes surface</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HGlobalMappingBoxZone}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map zones surface</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                           </tr>
                        </tbody>
                      </Table>
                    </div>
                    </TabPane>
                    </TabContent>

                    <TabContent activeTab={horizontalTabsH2HGlobal}>
                    <TabPane tabId="Valeurs"> 
                    <br></br>
                    <div className="table-responsive table-full-width">
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) échouée(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) réussie(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalShortPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) courte(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedShortPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) courte(s) échouée(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedShortPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) courte(s) réussie(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalDefensiveDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) défensif(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedDefensiveDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) défensif(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedDefensiveDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) défensif(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalInterception}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Interception(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalIntervention}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Intervention(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalTackle}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Tacle(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalDribble}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Dribble(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedDribble}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Dribble(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedDribble}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Dribble(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalBallSprint}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Percussion(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalDefensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) défensif(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedDefensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) défensif(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedDefensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) défensif(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalOffensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) offensif(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedOffensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) offensif(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedOffensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) offensif(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalCross}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Centre(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedCross}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Centre(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedCross}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Centre(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalLongPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) longue(s) </p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedLongPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) longue(s)  échouée(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedLongPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) longue(s)  réussie(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSplittingPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Renversement(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedSplittingPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Renversement(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedSplittingPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Renversement(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalShot}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Tir(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedShot}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Tir(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedShot}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Tir(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalGoalkeeperIntervention}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Intervention(s) gardien</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedGoalkeeperIntervention}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Intervention(s) gardien échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedGoalkeeperIntervention}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Intervention(s) gardien réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSave}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Arrêt(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFailedSave}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Arrêt(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedSave}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Arrêt(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalThrowIn}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Touche(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFaltCommited}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Faute(s) commise(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFaltConceded}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Faute(s) concédée(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalObtainedCorner}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Corner(s) obtenu(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalConcededCorner}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Corner(s) concédé(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalCornerPlayed}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Corner(s) joué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalAssistPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) décisive(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalGoal}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">But(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalKeyPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) clé(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalPartialImbalance}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Déséquilibre(s) partiel</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalTotalImbalance}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Déséquilibre(s) total</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalDirectAttack}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Attaque(s) direct</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalCounterAttack}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Contre-attaque(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalPlacedAttack}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Attaque(s) placée(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalOffside}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Hors-jeu</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalObtainedPenalty}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Penalty obtenu</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalYellowCard}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Carton(s) jaune(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalRedCard}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Carton(s) rouge(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>


                        </tbody>
                      </Table>
                      </div>
                    </TabPane>
                    </TabContent>

                    <TabContent activeTab={horizontalTabsH2HGlobal}>
                    <TabPane tabId="Efficacité"> 
                    <br></br>
                    <div className="table-responsive table-full-width">                                  
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalPass_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité passes</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalShort_pass_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité passes courtes</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalDefensive_1v1_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité 1c1 défensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalOffensive_1v1_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité 1c1 offensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalDefensive_Aerial_duel_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité duels défensifs aériens</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalOffensive_aerial_duel_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité duels offensifs aériens</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalCross_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité centres</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalLong_pass_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité passes longues</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSplitting_pass_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité des renversements</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalShot_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité tirs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalGoalkeeper_Intervention_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité des interventions gardien</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSave_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité des arrêts</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalThrowIn_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité des touches</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalFalt_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Différentiels des fautes</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalCorner_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité des corners</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalGoalkick_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité relances 5M50</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalPenalty_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Différentiel pénaltys</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>



                        </tbody>
                      </Table>
                    </div>
                    </TabPane>
                    </TabContent>

                    <TabContent activeTab={horizontalTabsH2HGlobal}>
                    <TabPane tabId="Précision"> 
                    <br></br>
                    <div className="table-responsive table-full-width">
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedDefensiveDualRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite duels défensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedDefensive1v1Rate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite 1c1 défensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedDefensiveAerialDual}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite duels aériens défensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedOffensiveDualRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite duels offensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedOffensive1v1Rate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite 1c1 offensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedOffensiveAerialDualRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite duels aériens offensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedPassRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite passes</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalOffensivePassRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite passes dangereuses</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedShortPassRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite passes courtes</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedLongPassRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite passes longues</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HGlobalSucceedSplitingPassRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite renversements</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                        </tbody>
                      </Table>
                    </div>
                    </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
              </Row>
              </CardBody>
            <br></br>
            <br></br>
            </Collapse>
            <br></br>
            <br></br>
            <Row>
            {H2HGlobalMappingShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-bubble">
                  <Bubble
                    data={PitchMultipleBubbleChart.data}
                    options={PitchMultipleBubbleChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Mapping</h3>
            </Card>
            </Col> 
            }

            {H2HGlobalAxisShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-axis">
                  <Bar
                    data={PitchMultipleAxisChart.data}
                    options={PitchMultipleAxisChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Axes</h3>
            </Card>
            </Col>
            }

            {H2HGlobalZoneShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-zone" >
                  <HorizontalBar
                    data={PitchMultipleZoneChart.data}
                    options={PitchMultipleZoneChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Zones</h3>
            </Card>
            </Col>
            }

            {H2HGlobalBoxMappingShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-zone">
                  <Bubble
                    data={BoxMultipleBubbleChart.data}
                    options={BoxMultipleBubbleChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Mapping surface</h3>
            </Card>
            </Col>
            }

            {H2HGlobalBoxAxisShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-axis" >
                  <Bar
                    data={BoxMultipleAxisChart.data}
                    options={BoxMultipleAxisChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Surfaces axes</h3>
            </Card>
            </Col>
            }

            {H2HGlobalBoxZoneShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-zone" >
                  <HorizontalBar
                    data={BoxMultipleZoneChart.data}
                    options={BoxMultipleZoneChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Surfaces zones</h3>
            </Card>
            </Col>
            }

            {H2HGlobalPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s)</h3>
                </Col>
            }
            {H2HGlobalFailedPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s) échouée(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s) réussie(s)</h3>
                </Col>
            }
            {H2HGlobalShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s) courte(s)</h3>
                </Col>
            }
            {H2HGlobalFailedShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s) courte(s) échouée(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s) courte(s) réussie(s)</h3>
                </Col>
            }
            {H2HGlobalDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Duel(s) défensif(s)</h3>
                </Col>
            }
            {H2HGlobalFailedDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Duel(s) défensif(s) échoué(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Duel(s) défensif(s) réussi(s)</h3>
                </Col>
            }
            {H2HGlobalInterceptionShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Interception(s)</h3>
                </Col>
            }
            {H2HGlobalInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Intervention(s)</h3>
                </Col>
            }
            {H2HGlobalTackleShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Tacle(s)</h3>
                </Col>
            }
            {H2HGlobalDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Dribble(s)</h3>
                </Col>
            }
            {H2HGlobalFailedDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Dribble(s) échoué(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Dribble(s) réussi(s)</h3>
                </Col>
            }
            {H2HGlobalBallSprintShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Percussion(s)</h3>
                </Col>
            }
            {H2HGlobalDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s)</h3>
                </Col>
            }

            {H2HGlobalFailedDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s) échoué(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s) réussi(s)</h3>
                </Col>
            }
            {H2HGlobalOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s)</h3>
                </Col>
            }
            {H2HGlobalFailedOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s) échoué(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s) réussi(s)</h3>
                </Col>
            }
            {H2HGlobalCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Centre(s)</h3>
                </Col>
            }
            {H2HGlobalFailedCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Centre(s) échoué(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Centre(s) réussi(s)</h3>
                </Col>
            }
            {H2HGlobalLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s) longue(s) </h3>
                </Col>
            }
            {H2HGlobalFailedLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s) longue(s)  échouée(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s) longue(s)  réussie(s)</h3>
                </Col>
            }
            {H2HGlobalSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Renversement(s)</h3>
                </Col>
            }
            {H2HGlobalFailedSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Renversement(s) échoué(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Renversement(s) réussi(s)</h3>
                </Col>
            }
            {H2HGlobalShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Tir(s)</h3>
                </Col>
            }
            {H2HGlobalFailedShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Tir(s) échoué(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Tir(s) réussi(s)</h3>
                </Col>
            }
            {H2HGlobalGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Intervention(s) gardien</h3>
                </Col>
            }
            {H2HGlobalFailedGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Intervention(s) gardien échoué(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Intervention(s) gardien réussi(s)</h3>
                </Col>
            }
            {H2HGlobalSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Arrêt(s)</h3>
                </Col>
            }
            {H2HGlobalFailedSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Arrêt(s) échoué(s)</h3>
                </Col>
            }
            {H2HGlobalSucceedSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Arrêt(s) réussi(s)</h3>
                </Col>
            }
            {H2HGlobalThrowInShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Touche(s)</h3>
                </Col>
            }
            {H2HGlobalFaltCommitedShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Faute(s) commise(s)</h3>
                </Col>
            }
            {H2HGlobalFaltConcededShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Faute(s) concédée(s)</h3>
                </Col>
            }
            {H2HGlobalObtainedCornerShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Corner(s) obtenu(s)</h3>
                </Col>
            }
            {H2HGlobalConcededCornerShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Corner(s) concédé(s)</h3>
                </Col>
            }
            {H2HGlobalCornerPlayedShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Corner(s) joué(s)</h3>
                </Col>
            }
            {H2HGlobalAssistPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s) décisive(s)</h3>
                </Col>
            }
            {H2HGlobalGoalShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">But(s)</h3>
                </Col>
            }
            {H2HGlobalKeyPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Passe(s) clé(s)</h3>
                </Col>
            }
            {H2HGlobalPartialImbalanceShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Déséquilibre(s) partiel</h3>
                </Col>
            }
            {H2HGlobalTotalImbalanceShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Déséquilibre(s) total</h3>
                </Col>
            }
            {H2HGlobalDirectAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Attaque(s) direct</h3>
                </Col>
            }
            {H2HGlobalCounterAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Contre-attaque(s)</h3>
                </Col>
            }
            {H2HGlobalPlacedAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Attaque(s) placée(s)</h3>
                </Col>
            }
            {H2HGlobalOffsideShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Hors-jeu</h3>
                </Col>
            }
            {H2HGlobalObtainedPenaltyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Penalty obtenu</h3>
                </Col>
            }
            {H2HGlobalYellowCardShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Carton(s) jaune(s)</h3>
                </Col>
            }
            {H2HGlobalRedCardShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
              <h3 className="chart-title">Carton(s) rouge(s)</h3>
                </Col>
            }


            {H2HGlobalPass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité passes</h3>
            </Col>
            }
            {H2HGlobalShort_pass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité passes courtes</h3>
            </Col>
            }
            {H2HGlobalDefensive_1v1_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité 1c1 défensifs</h3>
            </Col>
            }
            {H2HGlobalOffensive_1v1_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité 1c1 offensifs</h3>
            </Col>
            }
            {H2HGlobalDefensive_Aerial_duel_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité duels défensifs aériens</h3>
            </Col>
            }
            {H2HGlobalOffensive_aerial_duel_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité duels offensifs aériens</h3>
            </Col>
            }
            {H2HGlobalCross_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité centres</h3>
            </Col>
            }
            {H2HGlobalLong_pass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité passes longues</h3>
            </Col>
            }
            {H2HGlobalSplitting_pass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité des renversements</h3>
            </Col>
            }
            {H2HGlobalShot_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité tirs</h3>
            </Col>
            }
            {H2HGlobalGoalkeeper_Intervention_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité des interventions gardien</h3>
            </Col>
            }
            {H2HGlobalSave_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité des arrêts</h3>
            </Col>
            }
            {H2HGlobalThrowIn_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité des touches</h3>
            </Col>
            }
            {H2HGlobalFalt_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Différentiels des fautes</h3>
            </Col>
            }
            {H2HGlobalCorner_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité des corners</h3>
            </Col>
            }
            {H2HGlobalGoalkick_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité relances 5M50</h3>
            </Col>
            }
            {H2HGlobalPenalty_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Différentiel pénaltys</h3>
            </Col>
            }

               
            {H2HGlobalSucceedDefensiveDualRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite duels défensifs</h3>
            </Col>
            }

               
               {H2HGlobalSucceedDefensive1v1RateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite 1c1 défensifs</h3>
            </Col>
            }

               
               {H2HGlobalSucceedDefensiveAerialDualShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite duels aériens défensifs</h3>
            </Col>
            }

               
               {H2HGlobalSucceedOffensiveDualRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite duels offensifs</h3>
            </Col>
            }

               
               {H2HGlobalSucceedOffensive1v1RateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite 1c1 offensifs</h3>
            </Col>
            }

               
               {H2HGlobalSucceedOffensiveAerialDualRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite duels aériens offensifs</h3>
            </Col>
            }

               
               {H2HGlobalSucceedPassRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite passes</h3>
            </Col>
            }

               
               {H2HGlobalOffensivePassRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite passes dangereuses</h3>
            </Col>
            }

               
               {H2HGlobalSucceedShortPassRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite passes courtes</h3>
            </Col>
            }

               
               {H2HGlobalSucceedLongPassRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite passes longues</h3>
            </Col>
            }

               
               {H2HGlobalSucceedSplitingPassRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
            <ReactApexChart options={RadialBar.options} series={RadialBar.series} type="radialBar" height={350}/>
          </div>
            <h3 class="chart-title">Réussite renversements</h3>
            </Col>
            }

            </Row>
            <Button color="success">
           <i/> Créer un rapport
          </Button>

          </Card>
         </div>
        </Card>
      </Col>
    </Row>
    </TabPane>   
      <TabPane tabId="Joueurs">
      <Row>
      <Col>
        <Card>
          <div
            aria-multiselectable={true}
            className="card-collapse"
            id="accordion"
            role="tablist"
            >
          <Card className="card-plain">
            <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
              </Collapse>
              </Card>
              <Card className="card-plain">
            <CardHeader role="tab">
              <a
                aria-expanded={openedCollapseDataFilters}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {
                  e.preventDefault();
                  setopenedCollapseDataFilters(!openedCollapseDataFilters);
                }}
              >
                Paramétrer les données{" "}
                <i className="tim-icons icon-minimal-down" />
              </a>
            </CardHeader>
            <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
              <CardBody>
              <Row>
                <Col md="6">
                  <FormGroup>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder="Catégorie joueur(s) 1"
                    name="Catégorie joueur(s) 1"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelect1stcategory}
                    onChange={(value) => setmultipleSelect1stcategory(value)}
                    options={[
                      {
                        value: "",
                        label: "Catégorie joueur(s) 1",
                        isDisabled: true,
                      },
                      { value: "1", label: "'1st name' 'Last name'" },
                    ]}
                  />
                  </FormGroup>
                </Col>
                <Col md="6">
                <FormGroup>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder="Catégorie joueur(s) 2"
                    name="Catégorie joueur(s) 2"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelect2ndcategory}
                    onChange={(value) => setmultipleSelect2ndcategory(value)}
                    options={[
                      {
                        value: "",
                        label: "Catégorie joueur(s) 2",
                        isDisabled: true,
                      },
                      { value: "1", label: "'1st name' 'Last name'" },
                    ]}
                  />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                <FormGroup>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder="Zone(s)"
                    name="multipleSelect"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelectZone}
                    onChange={(value) => setmultipleSelectZone(value)}
                    options={[
                      {
                        value: "",
                        label: "Zone(s)",
                        isDisabled: true,
                      },
                      { value: "1", label: "Basse" },
                      { value: "2", label: "Médiane basse" },
                      { value: "3", label: "Médiane haute" },
                      { value: "4", label: "Haute" },
                    ]}
                  />
                  </FormGroup>
                </Col>
                <Col md="6">
                <FormGroup>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder="Axe(s)"
                    name="multipleSelect"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelectAxis}
                    onChange={(value) => setmultipleSelectAxis(value)}
                    options={[
                      {
                        value: "",
                        label: "Axe(s)",
                        isDisabled: true,
                      },
                      { value: "1", label: "Couloir droit" },
                      { value: "2", label: "Axe droit" },
                      { value: "3", label: "Axe" },
                      { value: "4", label: "Axe gauche" },
                      { value: "5", label: "Couloir gauche" },
                    ]}
                  />
                  </FormGroup>
                </Col>
                
                <Col md="12">
                <br></br>
              <Row>
              <Col md="6">
                    <FormGroup>
                      <Input placeholder="Temps initial" type="text" />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                      <Input placeholder="Temps final" type="text" />
                    </FormGroup>
                </Col>
              </Row>
              <br></br>
              <div
                className="slider slider-primary mb-3"
                ref={slider2Ref}
              />
               </Col> 
               </Row>
               <Row>
              <Col>
              <Card className="card-tasks text-left">
                  <CardHeader>
                  </CardHeader>
                  <CardBody>
                  <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsH2HIndividual === "Maps" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsH2HIndividual", "Maps")
                        }
                      >
                       Maps
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsH2HIndividual === "Valeurs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsH2HIndividual", "Valeurs")
                        }
                      >
                        Valeurs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsH2HIndividual === "Efficacité" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsH2HIndividual", "Efficacité")
                        }
                      >
                       Efficacité
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsH2HIndividual === "Précision" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsH2HIndividual", "Précision")
                        }
                      >
                        Précision
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={horizontalTabsH2HIndividual}>
                    <TabPane tabId="Maps"> 
                    <br></br>                              
                    <div className="table-responsive table-full-width">
                      <Table>
                        <tbody>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HIndividualMapping}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map terrain</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HIndividualAxis}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map axes terrain</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HIndividualZone}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map zones terrain</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HIndividualBoxMapping}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map surface</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HIndividualBoxAxis}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map axes surface</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickH2HIndividualMappingBoxZone}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Map zones surface</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                           </tr>
                        </tbody>
                      </Table>
                    </div>
                    </TabPane>
                    </TabContent>

                    <TabContent activeTab={horizontalTabsH2HIndividual}>
                    <TabPane tabId="Valeurs"> 
                    <br></br>
                    <div className="table-responsive table-full-width">
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) échouée(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) réussie(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualShortPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) courte(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedShortPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) courte(s) échouée(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedShortPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) courte(s) réussie(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualDefensiveDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) défensif(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedDefensiveDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) défensif(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedDefensiveDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) défensif(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualInterception}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Interception(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualIntervention}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Intervention(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualTackle}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Tacle(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualDribble}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Dribble(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedDribble}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Dribble(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedDribble}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Dribble(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualBallSprint}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Percussion(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualDefensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) défensif(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedDefensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) défensif(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedDefensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) défensif(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualOffensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) offensif(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedOffensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) offensif(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedOffensiveAerialDuel}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Duel(s) aérien(s) offensif(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualCross}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Centre(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedCross}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Centre(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedCross}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Centre(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualLongPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) longue(s) </p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedLongPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) longue(s)  échouée(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedLongPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) longue(s)  réussie(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSplittingPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Renversement(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedSplittingPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Renversement(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedSplittingPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Renversement(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualShot}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Tir(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedShot}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Tir(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedShot}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Tir(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualGoalkeeperIntervention}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Intervention(s) gardien</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedGoalkeeperIntervention}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Intervention(s) gardien échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedGoalkeeperIntervention}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Intervention(s) gardien réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSave}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Arrêt(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFailedSave}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Arrêt(s) échoué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedSave}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Arrêt(s) réussi(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualThrowIn}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Touche(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFaltCommited}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Faute(s) commise(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFaltConceded}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Faute(s) concédée(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualObtainedCorner}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Corner(s) obtenu(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualConcededCorner}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Corner(s) concédé(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualCornerPlayed}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Corner(s) joué(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualAssistPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) décisive(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualGoal}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">But(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualKeyPass}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Passe(s) clé(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualPartialImbalance}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Déséquilibre(s) partiel</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualTotalImbalance}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Déséquilibre(s) total</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualDirectAttack}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Attaque(s) direct</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualCounterAttack}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Contre-attaque(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualPlacedAttack}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Attaque(s) placée(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualOffside}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Hors-jeu</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualObtainedPenalty}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Penalty obtenu</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualYellowCard}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Carton(s) jaune(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualRedCard}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Carton(s) rouge(s)</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>


                        </tbody>
                      </Table>
                      </div>
                    </TabPane>
                    </TabContent>

                    <TabContent activeTab={horizontalTabsH2HIndividual}>
                    <TabPane tabId="Efficacité"> 
                    <br></br>
                    <div className="table-responsive table-full-width">                                  
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualPass_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité passes</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualShort_pass_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité passes courtes</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualDefensive_1v1_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité 1c1 défensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualOffensive_1v1_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité 1c1 offensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualDefensive_Aerial_duel_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité duels défensifs aériens</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualOffensive_aerial_duel_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité duels offensifs aériens</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualCross_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité centres</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualLong_pass_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité passes longues</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSplitting_pass_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité des renversements</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualShot_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité tirs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualGoalkeeper_Intervention_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité des interventions gardien</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSave_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité des arrêts</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualThrowIn_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité des touches</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualFalt_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Différentiels des fautes</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualCorner_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité des corners</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualGoalkick_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Efficacité relances 5M50</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualPenalty_Efficiency}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Différentiel pénaltys</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>



                        </tbody>
                      </Table>
                    </div>
                    </TabPane>
                    </TabContent>

                    <TabContent activeTab={horizontalTabsH2HIndividual}>
                    <TabPane tabId="Précision"> 
                    <br></br>
                    <div className="table-responsive table-full-width">
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedDefensiveDualRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite duels défensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedDefensive1v1Rate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite 1c1 défensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedDefensiveAerialDual}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite duels aériens défensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedOffensiveDualRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite duels offensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedOffensive1v1Rate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite 1c1 offensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedOffensiveAerialDualRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite duels aériens offensifs</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedPassRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite passes</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualOffensivePassRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite passes dangereuses</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedShortPassRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite passes courtes</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedLongPassRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite passes longues</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickH2HIndividualSucceedSplitingPassRate}/>
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>
                              <p className="">Réussite renversements</p>
                              <p className="text-muted">
                                
                              </p>
                            </td>
                            <td>
                              <p className="">DataCount</p>
                            </td>
                            </tr>
                        </tbody>
                      </Table>
                    </div>
                    </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
              </Row>
              </CardBody>
            <br></br>
            <br></br>
            </Collapse>
            <br></br>
            <br></br>
            <Row>
            {H2HIndividualMappingShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-bubble">
                  <Bubble
                    data={PitchMultipleBubbleChart.data}
                    options={PitchMultipleBubbleChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Mapping</h3>
            </Card>
            </Col> 
            }

            {H2HIndividualAxisShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-axis">
                  <Bar
                    data={PitchMultipleAxisChart.data}
                    options={PitchMultipleAxisChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Axes</h3>
            </Card>
            </Col>
            }

            {H2HIndividualZoneShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-zone" >
                  <HorizontalBar
                    data={PitchMultipleZoneChart.data}
                    options={PitchMultipleZoneChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Zones</h3>
            </Card>
            </Col>
            }

            {H2HIndividualBoxMappingShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-zone">
                  <Bubble
                    data={BoxMultipleBubbleChart.data}
                    options={BoxMultipleBubbleChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Mapping surface</h3>
            </Card>
            </Col>
            }

            {H2HIndividualBoxAxisShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-axis" >
                  <Bar
                    data={BoxMultipleAxisChart.data}
                    options={BoxMultipleAxisChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Surfaces axes</h3>
            </Card>
            </Col>
            }

            {H2HIndividualBoxZoneShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-zone" >
                  <HorizontalBar
                    data={BoxMultipleZoneChart.data}
                    options={BoxMultipleZoneChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Surfaces zones</h3>
            </Card>
            </Col>
            }

            {H2HIndividualPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s)</h3>
                </Col>
            }
            {H2HIndividualFailedPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) échouée(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) réussie(s)</h3>
                </Col>
            }
            {H2HIndividualShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) courte(s)</h3>
                </Col>
            }
            {H2HIndividualFailedShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) courte(s) échouée(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) courte(s) réussie(s)</h3>
                </Col>
            }
            {H2HIndividualDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) défensif(s)</h3>
                </Col>
            }
            {H2HIndividualFailedDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) défensif(s) échoué(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) défensif(s) réussi(s)</h3>
                </Col>
            }
            {H2HIndividualInterceptionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Interception(s)</h3>
                </Col>
            }
            {H2HIndividualInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Intervention(s)</h3>
                </Col>
            }
            {H2HIndividualTackleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Tacle(s)</h3>
                </Col>
            }
            {H2HIndividualDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Dribble(s)</h3>
                </Col>
            }
            {H2HIndividualFailedDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Dribble(s) échoué(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Dribble(s) réussi(s)</h3>
                </Col>
            }
            {H2HIndividualBallSprintShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Percussion(s)</h3>
                </Col>
            }
            {H2HIndividualDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s)</h3>
                </Col>
            }
            {H2HIndividualFailedDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s) échoué(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s) réussi(s)</h3>
                </Col>
            }
            {H2HIndividualOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s)</h3>
                </Col>
            }
            {H2HIndividualFailedOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s) échoué(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s) réussi(s)</h3>
                </Col>
            }
            {H2HIndividualCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Centre(s)</h3>
                </Col>
            }
            {H2HIndividualFailedCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Centre(s) échoué(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Centre(s) réussi(s)</h3>
                </Col>
            }
            {H2HIndividualLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) longue(s) </h3>
                </Col>
            }
            {H2HIndividualFailedLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) longue(s)  échouée(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) longue(s)  réussie(s)</h3>
                </Col>
            }
            {H2HIndividualSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Renversement(s)</h3>
                </Col>
            }
            {H2HIndividualFailedSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Renversement(s) échoué(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Renversement(s) réussi(s)</h3>
                </Col>
            }
            {H2HIndividualShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Tir(s)</h3>
                </Col>
            }
            {H2HIndividualFailedShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Tir(s) échoué(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Tir(s) réussi(s)</h3>
                </Col>
            }
            {H2HIndividualGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Intervention(s) gardien</h3>
                </Col>
            }
            {H2HIndividualFailedGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Intervention(s) gardien échoué(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Intervention(s) gardien réussi(s)</h3>
                </Col>
            }
            {H2HIndividualSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Arrêt(s)</h3>
                </Col>
            }
            {H2HIndividualFailedSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Arrêt(s) échoué(s)</h3>
                </Col>
            }
            {H2HIndividualSucceedSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Arrêt(s) réussi(s)</h3>
                </Col>
            }
            {H2HIndividualThrowInShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Touche(s)</h3>
                </Col>
            }
            {H2HIndividualFaltCommitedShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Faute(s) commise(s)</h3>
                </Col>
            }
            {H2HIndividualFaltConcededShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Faute(s) concédée(s)</h3>
                </Col>
            }
            {H2HIndividualObtainedCornerShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Corner(s) obtenu(s)</h3>
                </Col>
            }
            {H2HIndividualConcededCornerShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Corner(s) concédé(s)</h3>
                </Col>
            }
            {H2HIndividualCornerPlayedShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Corner(s) joué(s)</h3>
                </Col>
            }
            {H2HIndividualAssistPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) décisive(s)</h3>
                </Col>
            }
            {H2HIndividualGoalShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">But(s)</h3>
                </Col>
            }
            {H2HIndividualKeyPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) clé(s)</h3>
                </Col>
            }
            {H2HIndividualPartialImbalanceShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Déséquilibre(s) partiel</h3>
                </Col>
            }
            {H2HIndividualTotalImbalanceShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Déséquilibre(s) total</h3>
                </Col>
            }
            {H2HIndividualDirectAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Attaque(s) direct</h3>
                </Col>
            }
            {H2HIndividualCounterAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Contre-attaque(s)</h3>
                </Col>
            }
            {H2HIndividualPlacedAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Attaque(s) placée(s)</h3>
                </Col>
            }
            {H2HIndividualOffsideShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Hors-jeu</h3>
                </Col>
            }
            {H2HIndividualObtainedPenaltyShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Penalty obtenu</h3>
                </Col>
            }
            {H2HIndividualYellowCardShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Carton(s) jaune(s)</h3>
                </Col>
            }
            {H2HIndividualRedCardShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Carton(s) rouge(s)</h3>
                </Col>
            }


            {H2HIndividualPass_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité passes</h3>
            </Col>
            }
            {H2HIndividualShort_pass_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité passes courtes</h3>
            </Col>
            }
            {H2HIndividualDefensive_1v1_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité 1c1 défensifs</h3>
            </Col>
            }
            {H2HIndividualOffensive_1v1_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité 1c1 offensifs</h3>
            </Col>
            }
            {H2HIndividualDefensive_Aerial_duel_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité duels défensifs aériens</h3>
            </Col>
            }
            {H2HIndividualOffensive_aerial_duel_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité duels offensifs aériens</h3>
            </Col>
            }
            {H2HIndividualCross_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité centres</h3>
            </Col>
            }
            {H2HIndividualLong_pass_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité passes longues</h3>
            </Col>
            }
            {H2HIndividualSplitting_pass_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité des renversements</h3>
            </Col>
            }
            {H2HIndividualShot_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité tirs</h3>
            </Col>
            }
            {H2HIndividualGoalkeeper_Intervention_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité des interventions gardien</h3>
            </Col>
            }
            {H2HIndividualSave_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité des arrêts</h3>
            </Col>
            }
            {H2HIndividualThrowIn_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité des touches</h3>
            </Col>
            }
            {H2HIndividualFalt_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Différentiels des fautes</h3>
            </Col>
            }
            {H2HIndividualCorner_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité des corners</h3>
            </Col>
            }
            {H2HIndividualGoalkick_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Efficacité relances 5M50</h3>
            </Col>
            }
            {H2HIndividualPenalty_EfficiencyShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
          </div>
            <h3 class="chart-title">Différentiel pénaltys</h3>
            </Col>
            }
               
            {H2HIndividualSucceedDefensiveDualRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite duels défensifs</h3>
            </Col>
            }

               
               {H2HIndividualSucceedDefensive1v1RateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite 1c1 défensifs</h3>
            </Col>
            }

               
               {H2HIndividualSucceedDefensiveAerialDualShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite duels aériens défensifs</h3>
            </Col>
            }

               
               {H2HIndividualSucceedOffensiveDualRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite duels offensifs</h3>
            </Col>
            }

               
               {H2HIndividualSucceedOffensive1v1RateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite 1c1 offensifs</h3>
            </Col>
            }

               
               {H2HIndividualSucceedOffensiveAerialDualRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite duels aériens offensifs</h3>
            </Col>
            }

               
               {H2HIndividualSucceedPassRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite passes</h3>
            </Col>
            }

               
               {H2HIndividualOffensivePassRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite passes dangereuses</h3>
            </Col>
            }

               
               {H2HIndividualSucceedShortPassRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite passes courtes</h3>
            </Col>
            }

               
               {H2HIndividualSucceedLongPassRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite passes longues</h3>
            </Col>
            }

               
               {H2HIndividualSucceedSplitingPassRateShow ?
            <></>
            :
            <Col className="card-col" md="6">
                  <div id="radial-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
          </div>
            <h3 class="chart-title">Réussite renversements</h3>
            </Col>
            }

            </Row>
            <Button color="success">
           <i/> Créer un rapport
          </Button>
          </Card>
         </div>
        </Card>
      </Col>
    </Row>
      </TabPane>   
      </TabContent>
      </Card>

       {/* subcategories ending */}
    </TabPane>
      </TabContent>
    );
};

export default H2HDashboard;