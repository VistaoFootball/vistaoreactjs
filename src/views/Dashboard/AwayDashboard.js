import React from "react";
import Select from "react-select";
import Slider from "nouislider";
import "assets/css/charts-display.css";
import { Bar, Pie, Bubble, HorizontalBar, Polar } from "react-chartjs-2";
import {
  PitchBubbleChart,
  BoxBubbleChart,
  BoxAxisChart,
  BoxZoneChart,
  PitchAxisChart,
  PitchZoneChart,
  EfficiencyDiagram,
  PolarChart,
  PolarChartSingleSerie,


} from "variables/charts.js";
import GaugeChart from "react-gauge-chart/dist/index.js"

import {
  Card,
  CardTitle,
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

function AwayDashboard() {

    const [horizontalTabsE, sethorizontalTabsE] = React.useState("Global"); 
    const [horizontalTabsAwayGlobal, sethorizontalTabsAwayGlobal] = React.useState("Maps"); 
    const [horizontalTabsAwayIndividual, sethorizontalTabsAwayIndividual] = React.useState("Maps");  
    const [verticalTabsIcons, setverticalTabsIcons] = React.useState("AwayTeam");
    const [openedCollapseDataFilters, setopenedCollapseDataFilters] = React.useState(false);

    const changeActiveTab = (e, tabState, tabName) => {
      e.preventDefault();
      switch (tabState) {
        case "horizontalTabsE":
            sethorizontalTabsE(tabName);
            break;
        case "horizontalTabsAwayGlobal":
            sethorizontalTabsAwayGlobal(tabName);
            break;    
        case "horizontalTabsAwayIndividual":
            sethorizontalTabsAwayIndividual(tabName);
            break;
      }
    };

    const [multipleSelectAwayPlayer, setmultipleSelectAwayPlayer] = React.useState(null);
    const [multipleSelectZone, setmultipleSelectZone] = React.useState(null);
    const [multipleSelectAxis, setmultipleSelectAxis] = React.useState(null);
    
    const slider6Ref = React.useRef(null);
  React.useEffect(() => {

    var slider6 = slider6Ref.current;

    if (slider6.className === "slider slider-primary mb-3") {
      Slider.create(slider6, {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);

  const slider7Ref = React.useRef(null);
  React.useEffect(() => {

    var slider7 = slider7Ref.current;

    if (slider7.className === "slider slider-primary mb-3") {
      Slider.create(slider7, {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);
        // Show/hide maps Away > global dashboard
        const [AwayMappingShow, setAwayMappingShow] = React.useState(true);
        const [AwayAxisShow, setAwayAxisShow] = React.useState(true);
        const [AwayZoneShow, setAwayZoneShow] = React.useState(true);
        const [AwayBoxMappingShow, setAwayBoxMappingShow] = React.useState(true);
        const [AwayBoxAxisShow, setAwayBoxAxisShow] = React.useState(true);
        const [AwayBoxZoneShow, setAwayBoxZoneShow] = React.useState(true);
      
        const handleClickAwayMapping = () => {
          setAwayMappingShow(!AwayMappingShow)}
        const handleClickAwayAxis = () => {
          setAwayAxisShow(!AwayAxisShow)}
        const handleClickAwayZone = () => {
          setAwayZoneShow(!AwayZoneShow)}
        const handleClickAwayBoxMapping = () => {
          setAwayBoxMappingShow(!AwayBoxMappingShow)}
        const handleClickAwayBoxAxis = () => {
          setAwayBoxAxisShow(!AwayBoxAxisShow)}
        const handleClickAwayMappingBoxZone = () => {
          setAwayBoxZoneShow(!AwayBoxZoneShow)}
    
        // Show/hide cards Away > global dashboard 
        const [AwayPassShow, setAwayPassShow] = React.useState(true);
        const [AwayFailedPassShow, setAwayFailedPassShow] = React.useState(true);
        const [AwaySucceedPassShow, setAwaySucceedPassShow] = React.useState(true);
        const [AwayShortPassShow, setAwayShortPassShow] = React.useState(true);
        const [AwayFailedShortPassShow, setAwayFailedShortPassShow] = React.useState(true);
        const [AwaySucceedShortPassShow, setAwaySucceedShortPassShow] = React.useState(true);
        const [AwayDefensiveDuelShow, setAwayDefensiveDuelShow] = React.useState(true);
        const [AwayFailedDefensiveDuelShow, setAwayFailedDefensiveDuelShow] = React.useState(true);
        const [AwaySucceedDefensiveDuelShow, setAwaySucceedDefensiveDuelShow] = React.useState(true);
        const [AwayInterceptionShow, setAwayInterceptionShow] = React.useState(true);
        const [AwayInterventionShow, setAwayInterventionShow] = React.useState(true);
        const [AwayTackleShow, setAwayTackleShow] = React.useState(true);
        const [AwayDribbleShow, setAwayDribbleShow] = React.useState(true);
        const [AwayFailedDribbleShow, setAwayFailedDribbleShow] = React.useState(true);
        const [AwaySucceedDribbleShow, setAwaySucceedDribbleShow] = React.useState(true);
        const [AwayBallSprintShow, setAwayBallSprintShow] = React.useState(true);
        const [AwayDefensiveAerialDuelShow, setAwayDefensiveAerialDuelShow] = React.useState(true);
        const [AwayFailedDefensiveAerialDuelShow, setAwayFailedDefensiveAerialDuelShow] = React.useState(true);
        const [AwaySucceedDefensiveAerialDuelShow, setAwaySucceedDefensiveAerialDuelShow] = React.useState(true);
        const [AwayOffensiveAerialDuelShow, setAwayOffensiveAerialDuelShow] = React.useState(true);
        const [AwayFailedOffensiveAerialDuelShow, setAwayFailedOffensiveAerialDuelShow] = React.useState(true);
        const [AwaySucceedOffensiveAerialDuelShow, setAwaySucceedOffensiveAerialDuelShow] = React.useState(true);
        const [AwayCrossShow, setAwayCrossShow] = React.useState(true);
        const [AwayFailedCrossShow, setAwayFailedCrossShow] = React.useState(true);
        const [AwaySucceedCrossShow, setAwaySucceedCrossShow] = React.useState(true);
        const [AwayLongPassShow, setAwayLongPassShow] = React.useState(true);
        const [AwayFailedLongPassShow, setAwayFailedLongPassShow] = React.useState(true);
        const [AwaySucceedLongPassShow, setAwaySucceedLongPassShow] = React.useState(true);
        const [AwaySplittingPassShow, setAwaySplittingPassShow] = React.useState(true);
        const [AwayFailedSplittingPassShow, setAwayFailedSplittingPassShow] = React.useState(true);
        const [AwaySucceedSplittingPassShow, setAwaySucceedSplittingPassShow] = React.useState(true);
        const [AwayShotShow, setAwayShotShow] = React.useState(true);
        const [AwayFailedShotShow, setAwayFailedShotShow] = React.useState(true);
        const [AwaySucceedShotShow, setAwaySucceedShotShow] = React.useState(true);
        const [AwayGoalkeeperInterventionShow, setAwayGoalkeeperInterventionShow] = React.useState(true);
        const [AwayFailedGoalkeeperInterventionShow, setAwayFailedGoalkeeperInterventionShow] = React.useState(true);
        const [AwaySucceedGoalkeeperInterventionShow, setAwaySucceedGoalkeeperInterventionShow] = React.useState(true);
        const [AwaySaveShow, setAwaySaveShow] = React.useState(true);
        const [AwayFailedSaveShow, setAwayFailedSaveShow] = React.useState(true);
        const [AwaySucceedSaveShow, setAwaySucceedSaveShow] = React.useState(true);
        const [AwayThrowInShow, setAwayThrowInShow] = React.useState(true);
        const [AwayFaltCommitedShow, setAwayFaltCommitedShow] = React.useState(true);
        const [AwayFaltConcededShow, setAwayFaltConcededShow] = React.useState(true);
        const [AwayObtainedCornerShow, setAwayObtainedCornerShow] = React.useState(true);
        const [AwayConcededCornerShow, setAwayConcededCornerShow] = React.useState(true);
        const [AwayCornerPlayedShow, setAwayCornerPlayedShow] = React.useState(true);
        const [AwayAssistPassShow, setAwayAssistPassShow] = React.useState(true);
        const [AwayGoalShow, setAwayGoalShow] = React.useState(true);
        const [AwayKeyPassShow, setAwayKeyPassShow] = React.useState(true);
        const [AwayPartialImbalanceShow, setAwayPartialImbalanceShow] = React.useState(true);
        const [AwayTotalImbalanceShow, setAwayTotalImbalanceShow] = React.useState(true);
        const [AwayDirectAttackShow, setAwayDirectAttackShow] = React.useState(true);
        const [AwayCounterAttackShow, setAwayCounterAttackShow] = React.useState(true);
        const [AwayPlacedAttackShow, setAwayPlacedAttackShow] = React.useState(true);
        const [AwayOffsideShow, setAwayOffsideShow] = React.useState(true);
        const [AwayObtainedPenaltyShow, setAwayObtainedPenaltyShow] = React.useState(true);
        const [AwayYellowCardShow, setAwayYellowCardShow] = React.useState(true);
        const [AwayRedCardShow, setAwayRedCardShow] = React.useState(true);
       
        const handleClickAwayPass= () => {
          setAwayPassShow(!AwayPassShow)};
        const handleClickAwayFailedPass= () => {
          setAwayFailedPassShow(!AwayFailedPassShow)};
        const handleClickAwaySucceedPass= () => {
          setAwaySucceedPassShow(!AwaySucceedPassShow)};
        const handleClickAwayShortPass= () => {
          setAwayShortPassShow(!AwayShortPassShow)};
        const handleClickAwayFailedShortPass= () => {
          setAwayFailedShortPassShow(!AwayFailedShortPassShow)};
        const handleClickAwaySucceedShortPass= () => {
          setAwaySucceedShortPassShow(!AwaySucceedShortPassShow)};
        const handleClickAwayDefensiveDuel= () => {
          setAwayDefensiveDuelShow(!AwayDefensiveDuelShow)};
        const handleClickAwayFailedDefensiveDuel= () => {
          setAwayFailedDefensiveDuelShow(!AwayFailedDefensiveDuelShow)};
        const handleClickAwaySucceedDefensiveDuel= () => {
          setAwaySucceedDefensiveDuelShow(!AwaySucceedDefensiveDuelShow)};
        const handleClickAwayInterception= () => {
          setAwayInterceptionShow(!AwayInterceptionShow)};
        const handleClickAwayIntervention= () => {
          setAwayInterventionShow(!AwayInterventionShow)};
        const handleClickAwayTackle= () => {
          setAwayTackleShow(!AwayTackleShow)};
        const handleClickAwayDribble= () => {
          setAwayDribbleShow(!AwayDribbleShow)};
        const handleClickAwayFailedDribble= () => {
          setAwayFailedDribbleShow(!AwayFailedDribbleShow)};
        const handleClickAwaySucceedDribble= () => {
          setAwaySucceedDribbleShow(!AwaySucceedDribbleShow)};
        const handleClickAwayBallSprint= () => {
          setAwayBallSprintShow(!AwayBallSprintShow)};
        const handleClickAwayDefensiveAerialDuel= () => {
          setAwayDefensiveAerialDuelShow(!AwayDefensiveAerialDuelShow)};
        const handleClickAwayFailedDefensiveAerialDuel= () => {
          setAwayFailedDefensiveAerialDuelShow(!AwayFailedDefensiveAerialDuelShow)};
        const handleClickAwaySucceedDefensiveAerialDuel= () => {
          setAwaySucceedDefensiveAerialDuelShow(!AwaySucceedDefensiveAerialDuelShow)};
        const handleClickAwayOffensiveAerialDuel= () => {
          setAwayOffensiveAerialDuelShow(!AwayOffensiveAerialDuelShow)};
        const handleClickAwayFailedOffensiveAerialDuel= () => {
          setAwayFailedOffensiveAerialDuelShow(!AwayFailedOffensiveAerialDuelShow)};
        const handleClickAwaySucceedOffensiveAerialDuel= () => {
          setAwaySucceedOffensiveAerialDuelShow(!AwaySucceedOffensiveAerialDuelShow)};
        const handleClickAwayCross= () => {
          setAwayCrossShow(!AwayCrossShow)};
        const handleClickAwayFailedCross= () => {
          setAwayFailedCrossShow(!AwayFailedCrossShow)};
        const handleClickAwaySucceedCross= () => {
          setAwaySucceedCrossShow(!AwaySucceedCrossShow)};
        const handleClickAwayLongPass= () => {
          setAwayLongPassShow(!AwayLongPassShow)};
        const handleClickAwayFailedLongPass= () => {
          setAwayFailedLongPassShow(!AwayFailedLongPassShow)};
        const handleClickAwaySucceedLongPass= () => {
          setAwaySucceedLongPassShow(!AwaySucceedLongPassShow)};
        const handleClickAwaySplittingPass= () => {
          setAwaySplittingPassShow(!AwaySplittingPassShow)};
        const handleClickAwayFailedSplittingPass= () => {
          setAwayFailedSplittingPassShow(!AwayFailedSplittingPassShow)};
        const handleClickAwaySucceedSplittingPass= () => {
          setAwaySucceedSplittingPassShow(!AwaySucceedSplittingPassShow)};
        const handleClickAwayShot= () => {
          setAwayShotShow(!AwayShotShow)};
        const handleClickAwayFailedShot= () => {
          setAwayFailedShotShow(!AwayFailedShotShow)};
        const handleClickAwaySucceedShot= () => {
          setAwaySucceedShotShow(!AwaySucceedShotShow)};
        const handleClickAwayGoalkeeperIntervention= () => {
          setAwayGoalkeeperInterventionShow(!AwayGoalkeeperInterventionShow)};
        const handleClickAwayFailedGoalkeeperIntervention= () => {
          setAwayFailedGoalkeeperInterventionShow(!AwayFailedGoalkeeperInterventionShow)};
        const handleClickAwaySucceedGoalkeeperIntervention= () => {
          setAwaySucceedGoalkeeperInterventionShow(!AwaySucceedGoalkeeperInterventionShow)};
        const handleClickAwaySave= () => {
          setAwaySaveShow(!AwaySaveShow)};
        const handleClickAwayFailedSave= () => {
          setAwayFailedSaveShow(!AwayFailedSaveShow)};
        const handleClickAwaySucceedSave= () => {
          setAwaySucceedSaveShow(!AwaySucceedSaveShow)};
        const handleClickAwayThrowIn= () => {
          setAwayThrowInShow(!AwayThrowInShow)};
        const handleClickAwayFaltCommited= () => {
          setAwayFaltCommitedShow(!AwayFaltCommitedShow)};
        const handleClickAwayFaltConceded= () => {
          setAwayFaltConcededShow(!AwayFaltConcededShow)};
        const handleClickAwayObtainedCorner= () => {
          setAwayObtainedCornerShow(!AwayObtainedCornerShow)};
        const handleClickAwayConcededCorner= () => {
          setAwayConcededCornerShow(!AwayConcededCornerShow)};
        const handleClickAwayCornerPlayed= () => {
          setAwayCornerPlayedShow(!AwayCornerPlayedShow)};
        const handleClickAwayAssistPass= () => {
          setAwayAssistPassShow(!AwayAssistPassShow)};
        const handleClickAwayGoal= () => {
          setAwayGoalShow(!AwayGoalShow)};
        const handleClickAwayKeyPass= () => {
          setAwayKeyPassShow(!AwayKeyPassShow)};
        const handleClickAwayPartialImbalance= () => {
          setAwayPartialImbalanceShow(!AwayPartialImbalanceShow)};
        const handleClickAwayTotalImbalance= () => {
          setAwayTotalImbalanceShow(!AwayTotalImbalanceShow)};
        const handleClickAwayDirectAttack= () => {
          setAwayDirectAttackShow(!AwayDirectAttackShow)};
        const handleClickAwayCounterAttack= () => {
          setAwayCounterAttackShow(!AwayCounterAttackShow)};
        const handleClickAwayPlacedAttack= () => {
          setAwayPlacedAttackShow(!AwayPlacedAttackShow)};
        const handleClickAwayOffside= () => {
          setAwayOffsideShow(!AwayOffsideShow)};
        const handleClickAwayObtainedPenalty= () => {
          setAwayObtainedPenaltyShow(!AwayObtainedPenaltyShow)};
        const handleClickAwayYellowCard= () => {
          setAwayYellowCardShow(!AwayYellowCardShow)};
        const handleClickAwayRedCard= () => {
          setAwayRedCardShow(!AwayRedCardShow)};
    
        // Show/hide efficiency diagram Away > global dashboard 
          const [AwayPass_EfficiencyShow, setAwayPass_EfficiencyShow] = React.useState(true);
          const [AwayShort_pass_EfficiencyShow, setAwayShort_pass_EfficiencyShow] = React.useState(true);
          const [AwayDefensive_1v1_EfficiencyShow, setAwayDefensive_1v1_EfficiencyShow] = React.useState(true);
          const [AwayOffensive_1v1_EfficiencyShow, setAwayOffensive_1v1_EfficiencyShow] = React.useState(true);
          const [AwayDefensive_Aerial_duel_EfficiencyShow, setAwayDefensive_Aerial_duel_EfficiencyShow] = React.useState(true);
          const [AwayOffensive_aerial_duel_EfficiencyShow, setAwayOffensive_aerial_duel_EfficiencyShow] = React.useState(true);
          const [AwayCross_EfficiencyShow, setAwayCross_EfficiencyShow] = React.useState(true);
          const [AwayLong_pass_EfficiencyShow, setAwayLong_pass_EfficiencyShow] = React.useState(true);
          const [AwaySplitting_pass_EfficiencyShow, setAwaySplitting_pass_EfficiencyShow] = React.useState(true);
          const [AwayShot_EfficiencyShow, setAwayShot_EfficiencyShow] = React.useState(true);
          const [AwayGoalkeeper_Intervention_EfficiencyShow, setAwayGoalkeeper_Intervention_EfficiencyShow] = React.useState(true);
          const [AwaySave_EfficiencyShow, setAwaySave_EfficiencyShow] = React.useState(true);
          const [AwayThrowIn_EfficiencyShow, setAwayThrowIn_EfficiencyShow] = React.useState(true);
          const [AwayFalt_EfficiencyShow, setAwayFalt_EfficiencyShow] = React.useState(true);
          const [AwayCorner_EfficiencyShow, setAwayCorner_EfficiencyShow] = React.useState(true);
          const [AwayGoalkick_EfficiencyShow, setAwayGoalkick_EfficiencyShow] = React.useState(true);
          const [AwayPenalty_EfficiencyShow, setAwayPenalty_EfficiencyShow] = React.useState(true);
         
          const handleClickAwayPass_Efficiency= () => {
            setAwayPass_EfficiencyShow(!AwayPass_EfficiencyShow)};
          const handleClickAwayShort_pass_Efficiency= () => {
            setAwayShort_pass_EfficiencyShow(!AwayShort_pass_EfficiencyShow)};
          const handleClickAwayDefensive_1v1_Efficiency= () => {
            setAwayDefensive_1v1_EfficiencyShow(!AwayDefensive_1v1_EfficiencyShow)};
          const handleClickAwayOffensive_1v1_Efficiency= () => {
            setAwayOffensive_1v1_EfficiencyShow(!AwayOffensive_1v1_EfficiencyShow)};
          const handleClickAwayDefensive_Aerial_duel_Efficiency= () => {
            setAwayDefensive_Aerial_duel_EfficiencyShow(!AwayDefensive_Aerial_duel_EfficiencyShow)};
          const handleClickAwayOffensive_aerial_duel_Efficiency= () => {
            setAwayOffensive_aerial_duel_EfficiencyShow(!AwayOffensive_aerial_duel_EfficiencyShow)};
          const handleClickAwayCross_Efficiency= () => {
            setAwayCross_EfficiencyShow(!AwayCross_EfficiencyShow)};
          const handleClickAwayLong_pass_Efficiency= () => {
            setAwayLong_pass_EfficiencyShow(!AwayLong_pass_EfficiencyShow)};
          const handleClickAwaySplitting_pass_Efficiency= () => {
            setAwaySplitting_pass_EfficiencyShow(!AwaySplitting_pass_EfficiencyShow)};
          const handleClickAwayShot_Efficiency= () => {
            setAwayShot_EfficiencyShow(!AwayShot_EfficiencyShow)};
          const handleClickAwayGoalkeeper_Intervention_Efficiency= () => {
            setAwayGoalkeeper_Intervention_EfficiencyShow(!AwayGoalkeeper_Intervention_EfficiencyShow)};
          const handleClickAwaySave_Efficiency= () => {
            setAwaySave_EfficiencyShow(!AwaySave_EfficiencyShow)};
          const handleClickAwayThrowIn_Efficiency= () => {
            setAwayThrowIn_EfficiencyShow(!AwayThrowIn_EfficiencyShow)};
          const handleClickAwayFalt_Efficiency= () => {
            setAwayFalt_EfficiencyShow(!AwayFalt_EfficiencyShow)};
          const handleClickAwayCorner_Efficiency= () => {
            setAwayCorner_EfficiencyShow(!AwayCorner_EfficiencyShow)};
          const handleClickAwayGoalkick_Efficiency= () => {
            setAwayGoalkick_EfficiencyShow(!AwayGoalkick_EfficiencyShow)};
          const handleClickAwayPenalty_Efficiency= () => {
            setAwayPenalty_EfficiencyShow(!AwayPenalty_EfficiencyShow)};
      
        // Show/hide Success Rate Away > global dashboard 
        const [AwaySucceedDefensiveDualRateShow, setAwaySucceedDefensiveDualRateShow] = React.useState(true);
        const [AwaySucceedDefensive1v1RateShow, setAwaySucceedDefensive1v1RateShow] = React.useState(true);
        const [AwaySucceedDefensiveAerialDualShow, setAwaySucceedDefensiveAerialDualShow] = React.useState(true);
        const [AwaySucceedOffensiveDualRateShow, setAwaySucceedOffensiveDualRateShow] = React.useState(true);
        const [AwaySucceedOffensive1v1RateShow, setAwaySucceedOffensive1v1RateShow] = React.useState(true);
        const [AwaySucceedOffensiveAerialDualRateShow, setAwaySucceedOffensiveAerialDualRateShow] = React.useState(true);
        const [AwaySucceedPassRateShow, setAwaySucceedPassRateShow] = React.useState(true);
        const [AwayOffensivePassRateShow, setAwayOffensivePassRateShow] = React.useState(true);
        const [AwaySucceedShortPassRateShow, setAwaySucceedShortPassRateShow] = React.useState(true);
        const [AwaySucceedLongPassRateShow, setAwaySucceedLongPassRateShow] = React.useState(true);
        const [AwaySucceedSplitingPassRateShow, setAwaySucceedSplitingPassRateShow] = React.useState(true);   
    
        const handleClickAwaySucceedDefensiveDualRate= () => {
          setAwaySucceedDefensiveDualRateShow(!AwaySucceedDefensiveDualRateShow)};
        const handleClickAwaySucceedDefensive1v1Rate= () => {
          setAwaySucceedDefensive1v1RateShow(!AwaySucceedDefensive1v1RateShow)};
        const handleClickAwaySucceedDefensiveAerialDual= () => {
          setAwaySucceedDefensiveAerialDualShow(!AwaySucceedDefensiveAerialDualShow)};
        const handleClickAwaySucceedOffensiveDualRate= () => {
          setAwaySucceedOffensiveDualRateShow(!AwaySucceedOffensiveDualRateShow)};
        const handleClickAwaySucceedOffensive1v1Rate= () => {
          setAwaySucceedOffensive1v1RateShow(!AwaySucceedOffensive1v1RateShow)};
        const handleClickAwaySucceedOffensiveAerialDualRate= () => {
          setAwaySucceedOffensiveAerialDualRateShow(!AwaySucceedOffensiveAerialDualRateShow)};
        const handleClickAwaySucceedPassRate= () => {
          setAwaySucceedPassRateShow(!AwaySucceedPassRateShow)};
        const handleClickAwayOffensivePassRate= () => {
          setAwayOffensivePassRateShow(!AwayOffensivePassRateShow)};
        const handleClickAwaySucceedShortPassRate= () => {
          setAwaySucceedShortPassRateShow(!AwaySucceedShortPassRateShow)};
        const handleClickAwaySucceedLongPassRate= () => {
          setAwaySucceedLongPassRateShow(!AwaySucceedLongPassRateShow)};
        const handleClickAwaySucceedSplitingPassRate= () => {
          setAwaySucceedSplitingPassRateShow(!AwaySucceedSplitingPassRateShow)};
    
    
        // Show/hide maps Away > individual > global dashboard
      
        const [AwayIndividualMappingShow, setAwayIndividualMappingShow] = React.useState(true);
        const [AwayIndividualAxisShow, setAwayIndividualAxisShow] = React.useState(true);
        const [AwayIndividualZoneShow, setAwayIndividualZoneShow] = React.useState(true);
        const [AwayIndividualBoxMappingShow, setAwayIndividualBoxMappingShow] = React.useState(true);
        const [AwayIndividualBoxAxisShow, setAwayIndividualBoxAxisShow] = React.useState(true);
        const [AwayIndividualBoxZoneShow, setAwayIndividualBoxZoneShow] = React.useState(true);
    
      
        const handleClickAwayIndividualMapping = () => {
          setAwayIndividualMappingShow(!AwayIndividualMappingShow)}
        const handleClickAwayIndividualAxis = () => {
          setAwayIndividualAxisShow(!AwayIndividualAxisShow)}
        const handleClickAwayIndividualZone = () => {
          setAwayIndividualZoneShow(!AwayIndividualZoneShow)}
        const handleClickAwayIndividualBoxMapping = () => {
          setAwayIndividualBoxMappingShow(!AwayIndividualBoxMappingShow)}
        const handleClickAwayIndividualBoxAxis = () => {
          setAwayIndividualBoxAxisShow(!AwayIndividualBoxAxisShow)}
        const handleClickAwayIndividualMappingBoxZone = () => {
          setAwayIndividualBoxZoneShow(!AwayIndividualBoxZoneShow)}
    
        // Show/hide cards  Away > individual > global dashboard 
        const [AwayIndividualPassShow, setAwayIndividualPassShow] = React.useState(true);
        const [AwayIndividualFailedPassShow, setAwayIndividualFailedPassShow] = React.useState(true);
        const [AwayIndividualSucceedPassShow, setAwayIndividualSucceedPassShow] = React.useState(true);
        const [AwayIndividualShortPassShow, setAwayIndividualShortPassShow] = React.useState(true);
        const [AwayIndividualFailedShortPassShow, setAwayIndividualFailedShortPassShow] = React.useState(true);
        const [AwayIndividualSucceedShortPassShow, setAwayIndividualSucceedShortPassShow] = React.useState(true);
        const [AwayIndividualDefensiveDuelShow, setAwayIndividualDefensiveDuelShow] = React.useState(true);
        const [AwayIndividualFailedDefensiveDuelShow, setAwayIndividualFailedDefensiveDuelShow] = React.useState(true);
        const [AwayIndividualSucceedDefensiveDuelShow, setAwayIndividualSucceedDefensiveDuelShow] = React.useState(true);
        const [AwayIndividualInterceptionShow, setAwayIndividualInterceptionShow] = React.useState(true);
        const [AwayIndividualInterventionShow, setAwayIndividualInterventionShow] = React.useState(true);
        const [AwayIndividualTackleShow, setAwayIndividualTackleShow] = React.useState(true);
        const [AwayIndividualDribbleShow, setAwayIndividualDribbleShow] = React.useState(true);
        const [AwayIndividualFailedDribbleShow, setAwayIndividualFailedDribbleShow] = React.useState(true);
        const [AwayIndividualSucceedDribbleShow, setAwayIndividualSucceedDribbleShow] = React.useState(true);
        const [AwayIndividualBallSprintShow, setAwayIndividualBallSprintShow] = React.useState(true);
        const [AwayIndividualDefensiveAerialDuelShow, setAwayIndividualDefensiveAerialDuelShow] = React.useState(true);
        const [AwayIndividualFailedDefensiveAerialDuelShow, setAwayIndividualFailedDefensiveAerialDuelShow] = React.useState(true);
        const [AwayIndividualSucceedDefensiveAerialDuelShow, setAwayIndividualSucceedDefensiveAerialDuelShow] = React.useState(true);
        const [AwayIndividualOffensiveAerialDuelShow, setAwayIndividualOffensiveAerialDuelShow] = React.useState(true);
        const [AwayIndividualFailedOffensiveAerialDuelShow, setAwayIndividualFailedOffensiveAerialDuelShow] = React.useState(true);
        const [AwayIndividualSucceedOffensiveAerialDuelShow, setAwayIndividualSucceedOffensiveAerialDuelShow] = React.useState(true);
        const [AwayIndividualCrossShow, setAwayIndividualCrossShow] = React.useState(true);
        const [AwayIndividualFailedCrossShow, setAwayIndividualFailedCrossShow] = React.useState(true);
        const [AwayIndividualSucceedCrossShow, setAwayIndividualSucceedCrossShow] = React.useState(true);
        const [AwayIndividualLongPassShow, setAwayIndividualLongPassShow] = React.useState(true);
        const [AwayIndividualFailedLongPassShow, setAwayIndividualFailedLongPassShow] = React.useState(true);
        const [AwayIndividualSucceedLongPassShow, setAwayIndividualSucceedLongPassShow] = React.useState(true);
        const [AwayIndividualSplittingPassShow, setAwayIndividualSplittingPassShow] = React.useState(true);
        const [AwayIndividualFailedSplittingPassShow, setAwayIndividualFailedSplittingPassShow] = React.useState(true);
        const [AwayIndividualSucceedSplittingPassShow, setAwayIndividualSucceedSplittingPassShow] = React.useState(true);
        const [AwayIndividualShotShow, setAwayIndividualShotShow] = React.useState(true);
        const [AwayIndividualFailedShotShow, setAwayIndividualFailedShotShow] = React.useState(true);
        const [AwayIndividualSucceedShotShow, setAwayIndividualSucceedShotShow] = React.useState(true);
        const [AwayIndividualGoalkeeperInterventionShow, setAwayIndividualGoalkeeperInterventionShow] = React.useState(true);
        const [AwayIndividualFailedGoalkeeperInterventionShow, setAwayIndividualFailedGoalkeeperInterventionShow] = React.useState(true);
        const [AwayIndividualSucceedGoalkeeperInterventionShow, setAwayIndividualSucceedGoalkeeperInterventionShow] = React.useState(true);
        const [AwayIndividualSaveShow, setAwayIndividualSaveShow] = React.useState(true);
        const [AwayIndividualFailedSaveShow, setAwayIndividualFailedSaveShow] = React.useState(true);
        const [AwayIndividualSucceedSaveShow, setAwayIndividualSucceedSaveShow] = React.useState(true);
        const [AwayIndividualThrowInShow, setAwayIndividualThrowInShow] = React.useState(true);
        const [AwayIndividualFaltCommitedShow, setAwayIndividualFaltCommitedShow] = React.useState(true);
        const [AwayIndividualFaltConcededShow, setAwayIndividualFaltConcededShow] = React.useState(true);
        const [AwayIndividualObtainedCornerShow, setAwayIndividualObtainedCornerShow] = React.useState(true);
        const [AwayIndividualConcededCornerShow, setAwayIndividualConcededCornerShow] = React.useState(true);
        const [AwayIndividualCornerPlayedShow, setAwayIndividualCornerPlayedShow] = React.useState(true);
        const [AwayIndividualAssistPassShow, setAwayIndividualAssistPassShow] = React.useState(true);
        const [AwayIndividualGoalShow, setAwayIndividualGoalShow] = React.useState(true);
        const [AwayIndividualKeyPassShow, setAwayIndividualKeyPassShow] = React.useState(true);
        const [AwayIndividualPartialImbalanceShow, setAwayIndividualPartialImbalanceShow] = React.useState(true);
        const [AwayIndividualTotalImbalanceShow, setAwayIndividualTotalImbalanceShow] = React.useState(true);
        const [AwayIndividualDirectAttackShow, setAwayIndividualDirectAttackShow] = React.useState(true);
        const [AwayIndividualCounterAttackShow, setAwayIndividualCounterAttackShow] = React.useState(true);
        const [AwayIndividualPlacedAttackShow, setAwayIndividualPlacedAttackShow] = React.useState(true);
        const [AwayIndividualOffsideShow, setAwayIndividualOffsideShow] = React.useState(true);
        const [AwayIndividualObtainedPenaltyShow, setAwayIndividualObtainedPenaltyShow] = React.useState(true);
        const [AwayIndividualYellowCardShow, setAwayIndividualYellowCardShow] = React.useState(true);
        const [AwayIndividualRedCardShow, setAwayIndividualRedCardShow] = React.useState(true);
       
        const handleClickAwayIndividualPass= () => {
          setAwayIndividualPassShow(!AwayIndividualPassShow)};
        const handleClickAwayIndividualFailedPass= () => {
          setAwayIndividualFailedPassShow(!AwayIndividualFailedPassShow)};
        const handleClickAwayIndividualSucceedPass= () => {
          setAwayIndividualSucceedPassShow(!AwayIndividualSucceedPassShow)};
        const handleClickAwayIndividualShortPass= () => {
          setAwayIndividualShortPassShow(!AwayIndividualShortPassShow)};
        const handleClickAwayIndividualFailedShortPass= () => {
          setAwayIndividualFailedShortPassShow(!AwayIndividualFailedShortPassShow)};
        const handleClickAwayIndividualSucceedShortPass= () => {
          setAwayIndividualSucceedShortPassShow(!AwayIndividualSucceedShortPassShow)};
        const handleClickAwayIndividualDefensiveDuel= () => {
          setAwayIndividualDefensiveDuelShow(!AwayIndividualDefensiveDuelShow)};
        const handleClickAwayIndividualFailedDefensiveDuel= () => {
          setAwayIndividualFailedDefensiveDuelShow(!AwayIndividualFailedDefensiveDuelShow)};
        const handleClickAwayIndividualSucceedDefensiveDuel= () => {
          setAwayIndividualSucceedDefensiveDuelShow(!AwayIndividualSucceedDefensiveDuelShow)};
        const handleClickAwayIndividualInterception= () => {
          setAwayIndividualInterceptionShow(!AwayIndividualInterceptionShow)};
        const handleClickAwayIndividualIntervention= () => {
          setAwayIndividualInterventionShow(!AwayIndividualInterventionShow)};
        const handleClickAwayIndividualTackle= () => {
          setAwayIndividualTackleShow(!AwayIndividualTackleShow)};
        const handleClickAwayIndividualDribble= () => {
          setAwayIndividualDribbleShow(!AwayIndividualDribbleShow)};
        const handleClickAwayIndividualFailedDribble= () => {
          setAwayIndividualFailedDribbleShow(!AwayIndividualFailedDribbleShow)};
        const handleClickAwayIndividualSucceedDribble= () => {
          setAwayIndividualSucceedDribbleShow(!AwayIndividualSucceedDribbleShow)};
        const handleClickAwayIndividualBallSprint= () => {
          setAwayIndividualBallSprintShow(!AwayIndividualBallSprintShow)};
        const handleClickAwayIndividualDefensiveAerialDuel= () => {
          setAwayIndividualDefensiveAerialDuelShow(!AwayIndividualDefensiveAerialDuelShow)};
        const handleClickAwayIndividualFailedDefensiveAerialDuel= () => {
          setAwayIndividualFailedDefensiveAerialDuelShow(!AwayIndividualFailedDefensiveAerialDuelShow)};
        const handleClickAwayIndividualSucceedDefensiveAerialDuel= () => {
          setAwayIndividualSucceedDefensiveAerialDuelShow(!AwayIndividualSucceedDefensiveAerialDuelShow)};
        const handleClickAwayIndividualOffensiveAerialDuel= () => {
          setAwayIndividualOffensiveAerialDuelShow(!AwayIndividualOffensiveAerialDuelShow)};
        const handleClickAwayIndividualFailedOffensiveAerialDuel= () => {
          setAwayIndividualFailedOffensiveAerialDuelShow(!AwayIndividualFailedOffensiveAerialDuelShow)};
        const handleClickAwayIndividualSucceedOffensiveAerialDuel= () => {
          setAwayIndividualSucceedOffensiveAerialDuelShow(!AwayIndividualSucceedOffensiveAerialDuelShow)};
        const handleClickAwayIndividualCross= () => {
          setAwayIndividualCrossShow(!AwayIndividualCrossShow)};
        const handleClickAwayIndividualFailedCross= () => {
          setAwayIndividualFailedCrossShow(!AwayIndividualFailedCrossShow)};
        const handleClickAwayIndividualSucceedCross= () => {
          setAwayIndividualSucceedCrossShow(!AwayIndividualSucceedCrossShow)};
        const handleClickAwayIndividualLongPass= () => {
          setAwayIndividualLongPassShow(!AwayIndividualLongPassShow)};
        const handleClickAwayIndividualFailedLongPass= () => {
          setAwayIndividualFailedLongPassShow(!AwayIndividualFailedLongPassShow)};
        const handleClickAwayIndividualSucceedLongPass= () => {
          setAwayIndividualSucceedLongPassShow(!AwayIndividualSucceedLongPassShow)};
        const handleClickAwayIndividualSplittingPass= () => {
          setAwayIndividualSplittingPassShow(!AwayIndividualSplittingPassShow)};
        const handleClickAwayIndividualFailedSplittingPass= () => {
          setAwayIndividualFailedSplittingPassShow(!AwayIndividualFailedSplittingPassShow)};
        const handleClickAwayIndividualSucceedSplittingPass= () => {
          setAwayIndividualSucceedSplittingPassShow(!AwayIndividualSucceedSplittingPassShow)};
        const handleClickAwayIndividualShot= () => {
          setAwayIndividualShotShow(!AwayIndividualShotShow)};
        const handleClickAwayIndividualFailedShot= () => {
          setAwayIndividualFailedShotShow(!AwayIndividualFailedShotShow)};
        const handleClickAwayIndividualSucceedShot= () => {
          setAwayIndividualSucceedShotShow(!AwayIndividualSucceedShotShow)};
        const handleClickAwayIndividualGoalkeeperIntervention= () => {
          setAwayIndividualGoalkeeperInterventionShow(!AwayIndividualGoalkeeperInterventionShow)};
        const handleClickAwayIndividualFailedGoalkeeperIntervention= () => {
          setAwayIndividualFailedGoalkeeperInterventionShow(!AwayIndividualFailedGoalkeeperInterventionShow)};
        const handleClickAwayIndividualSucceedGoalkeeperIntervention= () => {
          setAwayIndividualSucceedGoalkeeperInterventionShow(!AwayIndividualSucceedGoalkeeperInterventionShow)};
        const handleClickAwayIndividualSave= () => {
          setAwayIndividualSaveShow(!AwayIndividualSaveShow)};
        const handleClickAwayIndividualFailedSave= () => {
          setAwayIndividualFailedSaveShow(!AwayIndividualFailedSaveShow)};
        const handleClickAwayIndividualSucceedSave= () => {
          setAwayIndividualSucceedSaveShow(!AwayIndividualSucceedSaveShow)};
        const handleClickAwayIndividualThrowIn= () => {
          setAwayIndividualThrowInShow(!AwayIndividualThrowInShow)};
        const handleClickAwayIndividualFaltCommited= () => {
          setAwayIndividualFaltCommitedShow(!AwayIndividualFaltCommitedShow)};
        const handleClickAwayIndividualFaltConceded= () => {
          setAwayIndividualFaltConcededShow(!AwayIndividualFaltConcededShow)};
        const handleClickAwayIndividualObtainedCorner= () => {
          setAwayIndividualObtainedCornerShow(!AwayIndividualObtainedCornerShow)};
        const handleClickAwayIndividualConcededCorner= () => {
          setAwayIndividualConcededCornerShow(!AwayIndividualConcededCornerShow)};
        const handleClickAwayIndividualCornerPlayed= () => {
          setAwayIndividualCornerPlayedShow(!AwayIndividualCornerPlayedShow)};
        const handleClickAwayIndividualAssistPass= () => {
          setAwayIndividualAssistPassShow(!AwayIndividualAssistPassShow)};
        const handleClickAwayIndividualGoal= () => {
          setAwayIndividualGoalShow(!AwayIndividualGoalShow)};
        const handleClickAwayIndividualKeyPass= () => {
          setAwayIndividualKeyPassShow(!AwayIndividualKeyPassShow)};
        const handleClickAwayIndividualPartialImbalance= () => {
          setAwayIndividualPartialImbalanceShow(!AwayIndividualPartialImbalanceShow)};
        const handleClickAwayIndividualTotalImbalance= () => {
          setAwayIndividualTotalImbalanceShow(!AwayIndividualTotalImbalanceShow)};
        const handleClickAwayIndividualDirectAttack= () => {
          setAwayIndividualDirectAttackShow(!AwayIndividualDirectAttackShow)};
        const handleClickAwayIndividualCounterAttack= () => {
          setAwayIndividualCounterAttackShow(!AwayIndividualCounterAttackShow)};
        const handleClickAwayIndividualPlacedAttack= () => {
          setAwayIndividualPlacedAttackShow(!AwayIndividualPlacedAttackShow)};
        const handleClickAwayIndividualOffside= () => {
          setAwayIndividualOffsideShow(!AwayIndividualOffsideShow)};
        const handleClickAwayIndividualObtainedPenalty= () => {
          setAwayIndividualObtainedPenaltyShow(!AwayIndividualObtainedPenaltyShow)};
        const handleClickAwayIndividualYellowCard= () => {
          setAwayIndividualYellowCardShow(!AwayIndividualYellowCardShow)};
        const handleClickAwayIndividualRedCard= () => {
          setAwayIndividualRedCardShow(!AwayIndividualRedCardShow)};
    
        // Show/hide efficiency diagram  Away > individual > global dashboard 
          const [AwayIndividualPass_EfficiencyShow, setAwayIndividualPass_EfficiencyShow] = React.useState(true);
          const [AwayIndividualShort_pass_EfficiencyShow, setAwayIndividualShort_pass_EfficiencyShow] = React.useState(true);
          const [AwayIndividualDefensive_1v1_EfficiencyShow, setAwayIndividualDefensive_1v1_EfficiencyShow] = React.useState(true);
          const [AwayIndividualOffensive_1v1_EfficiencyShow, setAwayIndividualOffensive_1v1_EfficiencyShow] = React.useState(true);
          const [AwayIndividualDefensive_Aerial_duel_EfficiencyShow, setAwayIndividualDefensive_Aerial_duel_EfficiencyShow] = React.useState(true);
          const [AwayIndividualOffensive_aerial_duel_EfficiencyShow, setAwayIndividualOffensive_aerial_duel_EfficiencyShow] = React.useState(true);
          const [AwayIndividualCross_EfficiencyShow, setAwayIndividualCross_EfficiencyShow] = React.useState(true);
          const [AwayIndividualLong_pass_EfficiencyShow, setAwayIndividualLong_pass_EfficiencyShow] = React.useState(true);
          const [AwayIndividualSplitting_pass_EfficiencyShow, setAwayIndividualSplitting_pass_EfficiencyShow] = React.useState(true);
          const [AwayIndividualShot_EfficiencyShow, setAwayIndividualShot_EfficiencyShow] = React.useState(true);
          const [AwayIndividualGoalkeeper_Intervention_EfficiencyShow, setAwayIndividualGoalkeeper_Intervention_EfficiencyShow] = React.useState(true);
          const [AwayIndividualSave_EfficiencyShow, setAwayIndividualSave_EfficiencyShow] = React.useState(true);
          const [AwayIndividualThrowIn_EfficiencyShow, setAwayIndividualThrowIn_EfficiencyShow] = React.useState(true);
          const [AwayIndividualFalt_EfficiencyShow, setAwayIndividualFalt_EfficiencyShow] = React.useState(true);
          const [AwayIndividualCorner_EfficiencyShow, setAwayIndividualCorner_EfficiencyShow] = React.useState(true);
          const [AwayIndividualGoalkick_EfficiencyShow, setAwayIndividualGoalkick_EfficiencyShow] = React.useState(true);
          const [AwayIndividualPenalty_EfficiencyShow, setAwayIndividualPenalty_EfficiencyShow] = React.useState(true);
         
          const handleClickAwayIndividualPass_Efficiency= () => {
            setAwayIndividualPass_EfficiencyShow(!AwayIndividualPass_EfficiencyShow)};
          const handleClickAwayIndividualShort_pass_Efficiency= () => {
            setAwayIndividualShort_pass_EfficiencyShow(!AwayIndividualShort_pass_EfficiencyShow)};
          const handleClickAwayIndividualDefensive_1v1_Efficiency= () => {
            setAwayIndividualDefensive_1v1_EfficiencyShow(!AwayIndividualDefensive_1v1_EfficiencyShow)};
          const handleClickAwayIndividualOffensive_1v1_Efficiency= () => {
            setAwayIndividualOffensive_1v1_EfficiencyShow(!AwayIndividualOffensive_1v1_EfficiencyShow)};
          const handleClickAwayIndividualDefensive_Aerial_duel_Efficiency= () => {
            setAwayIndividualDefensive_Aerial_duel_EfficiencyShow(!AwayIndividualDefensive_Aerial_duel_EfficiencyShow)};
          const handleClickAwayIndividualOffensive_aerial_duel_Efficiency= () => {
            setAwayIndividualOffensive_aerial_duel_EfficiencyShow(!AwayIndividualOffensive_aerial_duel_EfficiencyShow)};
          const handleClickAwayIndividualCross_Efficiency= () => {
            setAwayIndividualCross_EfficiencyShow(!AwayIndividualCross_EfficiencyShow)};
          const handleClickAwayIndividualLong_pass_Efficiency= () => {
            setAwayIndividualLong_pass_EfficiencyShow(!AwayIndividualLong_pass_EfficiencyShow)};
          const handleClickAwayIndividualSplitting_pass_Efficiency= () => {
            setAwayIndividualSplitting_pass_EfficiencyShow(!AwayIndividualSplitting_pass_EfficiencyShow)};
          const handleClickAwayIndividualShot_Efficiency= () => {
            setAwayIndividualShot_EfficiencyShow(!AwayIndividualShot_EfficiencyShow)};
          const handleClickAwayIndividualGoalkeeper_Intervention_Efficiency= () => {
            setAwayIndividualGoalkeeper_Intervention_EfficiencyShow(!AwayIndividualGoalkeeper_Intervention_EfficiencyShow)};
          const handleClickAwayIndividualSave_Efficiency= () => {
            setAwayIndividualSave_EfficiencyShow(!AwayIndividualSave_EfficiencyShow)};
          const handleClickAwayIndividualThrowIn_Efficiency= () => {
            setAwayIndividualThrowIn_EfficiencyShow(!AwayIndividualThrowIn_EfficiencyShow)};
          const handleClickAwayIndividualFalt_Efficiency= () => {
            setAwayIndividualFalt_EfficiencyShow(!AwayIndividualFalt_EfficiencyShow)};
          const handleClickAwayIndividualCorner_Efficiency= () => {
            setAwayIndividualCorner_EfficiencyShow(!AwayIndividualCorner_EfficiencyShow)};
          const handleClickAwayIndividualGoalkick_Efficiency= () => {
            setAwayIndividualGoalkick_EfficiencyShow(!AwayIndividualGoalkick_EfficiencyShow)};
          const handleClickAwayIndividualPenalty_Efficiency= () => {
            setAwayIndividualPenalty_EfficiencyShow(!AwayIndividualPenalty_EfficiencyShow)};
      
        // Show/hide Success Rate  Away > individual > global dashboard 
        const [AwayIndividualSucceedDefensiveDualRateShow, setAwayIndividualSucceedDefensiveDualRateShow] = React.useState(true);
        const [AwayIndividualSucceedDefensive1v1RateShow, setAwayIndividualSucceedDefensive1v1RateShow] = React.useState(true);
        const [AwayIndividualSucceedDefensiveAerialDualShow, setAwayIndividualSucceedDefensiveAerialDualShow] = React.useState(true);
        const [AwayIndividualSucceedOffensiveDualRateShow, setAwayIndividualSucceedOffensiveDualRateShow] = React.useState(true);
        const [AwayIndividualSucceedOffensive1v1RateShow, setAwayIndividualSucceedOffensive1v1RateShow] = React.useState(true);
        const [AwayIndividualSucceedOffensiveAerialDualRateShow, setAwayIndividualSucceedOffensiveAerialDualRateShow] = React.useState(true);
        const [AwayIndividualSucceedPassRateShow, setAwayIndividualSucceedPassRateShow] = React.useState(true);
        const [AwayIndividualOffensivePassRateShow, setAwayIndividualOffensivePassRateShow] = React.useState(true);
        const [AwayIndividualSucceedShortPassRateShow, setAwayIndividualSucceedShortPassRateShow] = React.useState(true);
        const [AwayIndividualSucceedLongPassRateShow, setAwayIndividualSucceedLongPassRateShow] = React.useState(true);
        const [AwayIndividualSucceedSplitingPassRateShow, setAwayIndividualSucceedSplitingPassRateShow] = React.useState(true);   
    
        const handleClickAwayIndividualSucceedDefensiveDualRate= () => {
          setAwayIndividualSucceedDefensiveDualRateShow(!AwayIndividualSucceedDefensiveDualRateShow)};
        const handleClickAwayIndividualSucceedDefensive1v1Rate= () => {
          setAwayIndividualSucceedDefensive1v1RateShow(!AwayIndividualSucceedDefensive1v1RateShow)};
        const handleClickAwayIndividualSucceedDefensiveAerialDual= () => {
          setAwayIndividualSucceedDefensiveAerialDualShow(!AwayIndividualSucceedDefensiveAerialDualShow)};
        const handleClickAwayIndividualSucceedOffensiveDualRate= () => {
          setAwayIndividualSucceedOffensiveDualRateShow(!AwayIndividualSucceedOffensiveDualRateShow)};
        const handleClickAwayIndividualSucceedOffensive1v1Rate= () => {
          setAwayIndividualSucceedOffensive1v1RateShow(!AwayIndividualSucceedOffensive1v1RateShow)};
        const handleClickAwayIndividualSucceedOffensiveAerialDualRate= () => {
          setAwayIndividualSucceedOffensiveAerialDualRateShow(!AwayIndividualSucceedOffensiveAerialDualRateShow)};
        const handleClickAwayIndividualSucceedPassRate= () => {
          setAwayIndividualSucceedPassRateShow(!AwayIndividualSucceedPassRateShow)};
        const handleClickAwayIndividualOffensivePassRate= () => {
          setAwayIndividualOffensivePassRateShow(!AwayIndividualOffensivePassRateShow)};
        const handleClickAwayIndividualSucceedShortPassRate= () => {
          setAwayIndividualSucceedShortPassRateShow(!AwayIndividualSucceedShortPassRateShow)};
        const handleClickAwayIndividualSucceedLongPassRate= () => {
          setAwayIndividualSucceedLongPassRateShow(!AwayIndividualSucceedLongPassRateShow)};
        const handleClickAwayIndividualSucceedSplitingPassRate= () => {
          setAwayIndividualSucceedSplitingPassRateShow(!AwayIndividualSucceedSplitingPassRateShow)};
    
    return (
        <TabContent activeTab={verticalTabsIcons}>
        <TabPane tabId="AwayTeam">
       <Card>
      <Nav className="nav-pills-info" pills>
      <NavItem>
        <NavLink
          data-toggle="tab"
          href="#pablo"
          className={horizontalTabsE === "Global" ? "active" : ""}
          onClick={(e) =>
            changeActiveTab(e, "horizontalTabsE", "Global")
          }
        >
          Global
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          data-toggle="tab"
          href="#pablo"
          className={horizontalTabsE === "Joueurs" ? "active" : ""}
          onClick={(e) =>
            changeActiveTab(e, "horizontalTabsE", "Joueurs")
          }
        >
          Individuel
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent className="tab-space" activeTab={horizontalTabsE}>
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
                    placeholder="joueur(s) visiteur(s)"
                    name="AwayPlayers"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelectAwayPlayer}
                    onChange={(value) => setmultipleSelectAwayPlayer(value)}
                    options={[
                      {
                        value: "",
                        label: "joueur(s) visiteur(s)",
                        isDisabled: true,
                      },
                      { value: "1", label: "'1st name' 'Last name'" },
                    ]}
                  />
                  </FormGroup>
                </Col>
                <Col md="6">
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
                ref={slider6Ref}
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
                        className={horizontalTabsAwayGlobal === "Maps" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsAwayGlobal", "Maps")
                        }
                      >
                       Maps
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsAwayGlobal === "Valeurs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsAwayGlobal", "Valeurs")
                        }
                      >
                        Valeurs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsAwayGlobal === "Efficacité" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsAwayGlobal", "Efficacité")
                        }
                      >
                       Efficacité
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsAwayGlobal === "Précision" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsAwayGlobal", "Précision")
                        }
                      >
                        Précision
                      </NavLink>
                    </NavItem>
                  </Nav>   
                  <TabContent activeTab={horizontalTabsAwayGlobal}>
                    <TabPane tabId="Maps"> 
                    <br></br>                              
                    <div className="table-responsive table-full-width">
                      <Table>
                        <tbody>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayMapping}/>
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
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayAxis}/>
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
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayZone}/>
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
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayBoxMapping}/>
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
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayBoxAxis}/>
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
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayMappingBoxZone}/>
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

                    <TabContent activeTab={horizontalTabsAwayGlobal}>
                    <TabPane tabId="Valeurs"> 
                    <br></br>
                    <div className="table-responsive table-full-width">
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayShortPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedShortPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedShortPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayDefensiveDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedDefensiveDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedDefensiveDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayInterception}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIntervention}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayTackle}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayDribble}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedDribble}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedDribble}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayBallSprint}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayDefensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedDefensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedDefensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayOffensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedOffensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedOffensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayCross}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedCross}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedCross}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayLongPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedLongPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedLongPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySplittingPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedSplittingPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedSplittingPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayShot}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedShot}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedShot}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayGoalkeeperIntervention}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedGoalkeeperIntervention}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedGoalkeeperIntervention}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySave}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFailedSave}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedSave}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayThrowIn}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFaltCommited}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFaltConceded}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayObtainedCorner}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayConcededCorner}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayCornerPlayed}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayAssistPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayGoal}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayKeyPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayPartialImbalance}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayTotalImbalance}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayDirectAttack}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayCounterAttack}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayPlacedAttack}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayOffside}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayObtainedPenalty}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayYellowCard}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayRedCard}/>
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

                    <TabContent activeTab={horizontalTabsAwayGlobal}>
                    <TabPane tabId="Efficacité"> 
                    <br></br>
                    <div className="table-responsive table-full-width">                                  
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayPass_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayShort_pass_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayDefensive_1v1_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayOffensive_1v1_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayDefensive_Aerial_duel_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayOffensive_aerial_duel_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayCross_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayLong_pass_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySplitting_pass_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayShot_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayGoalkeeper_Intervention_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySave_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayThrowIn_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayFalt_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayCorner_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayGoalkick_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayPenalty_Efficiency}/>
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

                    <TabContent activeTab={horizontalTabsAwayGlobal}>
                    <TabPane tabId="Précision"> 
                    <br></br>
                    <div className="table-responsive table-full-width">
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedDefensiveDualRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedDefensive1v1Rate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedDefensiveAerialDual}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedOffensiveDualRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedOffensive1v1Rate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedOffensiveAerialDualRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedPassRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayOffensivePassRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedShortPassRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedLongPassRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwaySucceedSplitingPassRate}/>
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
            {AwayMappingShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-bubble">
                  <Bubble
                    data={PitchBubbleChart.data}
                    options={PitchBubbleChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Mapping</h3>
            </Card>
            </Col> 
            }

            {AwayAxisShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-axis">
                  <Bar
                    data={PitchAxisChart.data}
                    options={PitchAxisChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Axes</h3>
            </Card>
            </Col>
            }

            {AwayZoneShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-zone" >
                  <HorizontalBar
                    data={PitchZoneChart.data}
                    options={PitchZoneChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Zones</h3>
            </Card>
            </Col>
            }

            {AwayBoxMappingShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-zone">
                  <Bubble
                    data={BoxBubbleChart.data}
                    options={BoxBubbleChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Mapping surface</h3>
            </Card>
            </Col>
            }

            {AwayBoxAxisShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-axis" >
                  <Bar
                    data={BoxAxisChart.data}
                    options={BoxAxisChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Surfaces axes</h3>
            </Card>
            </Col>
            }

            {AwayBoxZoneShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-zone" >
                  <HorizontalBar
                    data={BoxZoneChart.data}
                    options={BoxZoneChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Surfaces zones</h3>
            </Card>
            </Col>
            }

            {AwayPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFailedPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s) échouée(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s) réussie(s)</h3>
                </Card> 
                </Col>
            }
            {AwayShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s) courte(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFailedShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s) courte(s) échouée(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s) courte(s) réussie(s)</h3>
                </Card> 
                </Col>
            }
            {AwayDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Duel(s) défensif(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFailedDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Duel(s) défensif(s) échoué(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Duel(s) défensif(s) réussi(s)</h3>
                </Card> 
                </Col>
            }
            {AwayInterceptionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Interception(s)</h3>
                </Card> 
                </Col>
            }
            {AwayInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Intervention(s)</h3>
                </Card> 
                </Col>
            }
            {AwayTackleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Tacle(s)</h3>
                </Card> 
                </Col>
            }
            {AwayDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Dribble(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFailedDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Dribble(s) échoué(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Dribble(s) réussi(s)</h3>
                </Card> 
                </Col>
            }
            {AwayBallSprintShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Percussion(s)</h3>
                </Card> 
                </Col>
            }
            {AwayDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFailedDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s) échoué(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s) réussi(s)</h3>
                </Card> 
                </Col>
            }
            {AwayOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFailedOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s) échoué(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s) réussi(s)</h3>
                </Card> 
                </Col>
            }
            {AwayCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Centre(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFailedCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Centre(s) échoué(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Centre(s) réussi(s)</h3>
                </Card> 
                </Col>
            }
            {AwayLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s) longue(s) </h3>
                </Card> 
                </Col>
            }
            {AwayFailedLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s) longue(s)  échouée(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s) longue(s)  réussie(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Renversement(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFailedSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Renversement(s) échoué(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Renversement(s) réussi(s)</h3>
                </Card> 
                </Col>
            }
            {AwayShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Tir(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFailedShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Tir(s) échoué(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Tir(s) réussi(s)</h3>
                </Card> 
                </Col>
            }
            {AwayGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Intervention(s) gardien</h3>
                </Card> 
                </Col>
            }
            {AwayFailedGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Intervention(s) gardien échoué(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Intervention(s) gardien réussi(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Arrêt(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFailedSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Arrêt(s) échoué(s)</h3>
                </Card> 
                </Col>
            }
            {AwaySucceedSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Arrêt(s) réussi(s)</h3>
                </Card> 
                </Col>
            }
            {AwayThrowInShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Touche(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFaltCommitedShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Faute(s) commise(s)</h3>
                </Card> 
                </Col>
            }
            {AwayFaltConcededShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Faute(s) concédée(s)</h3>
                </Card> 
                </Col>
            }
            {AwayObtainedCornerShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Corner(s) obtenu(s)</h3>
                </Card> 
                </Col>
            }
            {AwayConcededCornerShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Corner(s) concédé(s)</h3>
                </Card> 
                </Col>
            }
            {AwayCornerPlayedShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Corner(s) joué(s)</h3>
                </Card> 
                </Col>
            }
            {AwayAssistPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s) décisive(s)</h3>
                </Card> 
                </Col>
            }
            {AwayGoalShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">But(s)</h3>
                </Card> 
                </Col>
            }
            {AwayKeyPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Passe(s) clé(s)</h3>
                </Card> 
                </Col>
            }
            {AwayPartialImbalanceShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Déséquilibre(s) partiel</h3>
                </Card> 
                </Col>
            }
            {AwayTotalImbalanceShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Déséquilibre(s) total</h3>
                </Card> 
                </Col>
            }
            {AwayDirectAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Attaque(s) direct</h3>
                </Card> 
                </Col>
            }
            {AwayCounterAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Contre-attaque(s)</h3>
                </Card> 
                </Col>
            }
            {AwayPlacedAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Attaque(s) placée(s)</h3>
                </Card> 
                </Col>
            }
            {AwayOffsideShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Hors-jeu</h3>
                </Card> 
                </Col>
            }
            {AwayObtainedPenaltyShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Penalty obtenu</h3>
                </Card> 
                </Col>
            }
            {AwayYellowCardShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Carton(s) jaune(s)</h3>
                </Card> 
                </Col>
            }
            {AwayRedCardShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <Card className="card-contributions">
              <CardTitle className="card-value" tag="h1">0000</CardTitle>
              <h3 className="chart-title">Carton(s) rouge(s)</h3>
                </Card> 
                </Col>
            }


            {AwayPass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité passes</h3>
            </Card>
            </Col>
            }
            {AwayShort_pass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité passes courtes</h3>
            </Card>
            </Col>
            }
            {AwayDefensive_1v1_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité 1c1 défensifs</h3>
            </Card>
            </Col>
            }
            {AwayOffensive_1v1_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité 1c1 offensifs</h3>
            </Card>
            </Col>
            }
            {AwayDefensive_Aerial_duel_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité duels défensifs aériens</h3>
            </Card>
            </Col>
            }
            {AwayOffensive_aerial_duel_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité duels offensifs aériens</h3>
            </Card>
            </Col>
            }
            {AwayCross_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité centres</h3>
            </Card>
            </Col>
            }
            {AwayLong_pass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité passes longues</h3>
            </Card>
            </Col>
            }
            {AwaySplitting_pass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité des renversements</h3>
            </Card>
            </Col>
            }
            {AwayShot_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité tirs</h3>
            </Card>
            </Col>
            }
            {AwayGoalkeeper_Intervention_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité des interventions gardien</h3>
            </Card>
            </Col>
            }
            {AwaySave_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité des arrêts</h3>
            </Card>
            </Col>
            }
            {AwayThrowIn_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité des touches</h3>
            </Card>
            </Col>
            }
            {AwayFalt_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Différentiels des fautes</h3>
            </Card>
            </Col>
            }
            {AwayCorner_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité des corners</h3>
            </Card>
            </Col>
            }
            {AwayGoalkick_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Efficacité relances 5M50</h3>
            </Card>
            </Col>
            }
            {AwayPenalty_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <Card>
            <div className="diagram-display">
            <Pie 
              data={EfficiencyDiagram.data}
              options={EfficiencyDiagram.options}
            />
            </div>
            <h3 class="chart-title">Différentiel pénaltys</h3>
            </Card>
            </Col>
            }
               
            {AwaySucceedDefensiveDualRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
            <h3 class="chart-title">Réussite duels défensifs</h3>
            </Col>
            }

               
               {AwaySucceedDefensive1v1RateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
            <h3 class="chart-title">Réussite 1c1 défensifs</h3>
            </Col>
            }

               
               {AwaySucceedDefensiveAerialDualShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
            <h3 class="chart-title">Réussite duels aériens défensifs</h3>
            </Col>
            }

               
               {AwaySucceedOffensiveDualRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
            <h3 class="chart-title">Réussite duels offensifs</h3>
            </Col>
            }

               
               {AwaySucceedOffensive1v1RateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
            <h3 class="chart-title">Réussite 1c1 offensifs</h3>
            </Col>
            }

               
               {AwaySucceedOffensiveAerialDualRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
            <h3 class="chart-title">Réussite duels aériens offensifs</h3>
            </Col>
            }

               
               {AwaySucceedPassRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
            <h3 class="chart-title">Réussite passes</h3>
            </Col>
            }

               
               {AwayOffensivePassRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
            <h3 class="chart-title">Réussite passes dangereuses</h3>
            </Col>
            }

               
               {AwaySucceedShortPassRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
            <h3 class="chart-title">Réussite passes courtes</h3>
            </Col>
            }

               
               {AwaySucceedLongPassRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
            <h3 class="chart-title">Réussite passes longues</h3>
            </Col>
            }

               
               {AwaySucceedSplitingPassRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <GaugeChart md="6" className="gauge-display"
              nrOfLevels={30} 
              percent={0.86} 
              colors={['#EA4228','#F5CD19','#5BE12C']}
            />
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
                    placeholder="joueur(s) visiteur(s)"
                    name="AwayPlayers"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelectAwayPlayer}
                    onChange={(value) => setmultipleSelectAwayPlayer(value)}
                    options={[
                      {
                        value: "",
                        label: "joueur(s) visiteur(s)",
                        isDisabled: true,
                      },
                      { value: "2", label: "Player 1 " },
                      { value: "3", label: "Player 2" },
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
                ref={slider7Ref}
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
                        className={horizontalTabsAwayIndividual === "Maps" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsAwayIndividual", "Maps")
                        }
                      >
                       Maps
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsAwayIndividual === "Valeurs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsAwayIndividual", "Valeurs")
                        }
                      >
                        Valeurs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsAwayIndividual === "Efficacité" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsAwayIndividual", "Efficacité")
                        }
                      >
                       Efficacité
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsAwayIndividual === "Précision" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsAwayIndividual", "Précision")
                        }
                      >
                        Précision
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={horizontalTabsAwayIndividual}>
                    <TabPane tabId="Maps"> 
                    <br></br>                              
                    <div className="table-responsive table-full-width">
                      <Table>
                        <tbody>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayIndividualMapping}/>
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
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayIndividualAxis}/>
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
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayIndividualZone}/>
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
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayIndividualBoxMapping}/>
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
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayIndividualBoxAxis}/>
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
                                  <Input defaultValue="" type="checkbox" onClick={handleClickAwayIndividualMappingBoxZone}/>
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

                    <TabContent activeTab={horizontalTabsAwayIndividual}>
                    <TabPane tabId="Valeurs"> 
                    <br></br>
                    <div className="table-responsive table-full-width">
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualShortPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedShortPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedShortPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualDefensiveDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedDefensiveDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedDefensiveDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualInterception}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualIntervention}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualTackle}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualDribble}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedDribble}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedDribble}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualBallSprint}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualDefensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedDefensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedDefensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualOffensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedOffensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedOffensiveAerialDuel}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualCross}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedCross}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedCross}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualLongPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedLongPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedLongPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSplittingPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedSplittingPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedSplittingPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualShot}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedShot}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedShot}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualGoalkeeperIntervention}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedGoalkeeperIntervention}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedGoalkeeperIntervention}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSave}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFailedSave}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedSave}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualThrowIn}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFaltCommited}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFaltConceded}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualObtainedCorner}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualConcededCorner}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualCornerPlayed}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualAssistPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualGoal}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualKeyPass}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualPartialImbalance}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualTotalImbalance}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualDirectAttack}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualCounterAttack}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualPlacedAttack}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualOffside}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualObtainedPenalty}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualYellowCard}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualRedCard}/>
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

                    <TabContent activeTab={horizontalTabsAwayIndividual}>
                    <TabPane tabId="Efficacité"> 
                    <br></br>
                    <div className="table-responsive table-full-width">                                  
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualPass_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualShort_pass_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualDefensive_1v1_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualOffensive_1v1_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualDefensive_Aerial_duel_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualOffensive_aerial_duel_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualCross_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualLong_pass_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSplitting_pass_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualShot_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualGoalkeeper_Intervention_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSave_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualThrowIn_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualFalt_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualCorner_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualGoalkick_Efficiency}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualPenalty_Efficiency}/>
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

                    <TabContent activeTab={horizontalTabsAwayIndividual}>
                    <TabPane tabId="Précision"> 
                    <br></br>
                    <div className="table-responsive table-full-width">
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedDefensiveDualRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedDefensive1v1Rate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedDefensiveAerialDual}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedOffensiveDualRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedOffensive1v1Rate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedOffensiveAerialDualRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedPassRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualOffensivePassRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedShortPassRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedLongPassRate}/>
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
                                  <Input defaultValue=""  type="checkbox"  onClick={handleClickAwayIndividualSucceedSplitingPassRate}/>
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
            {AwayIndividualMappingShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-bubble">
                  <Bubble
                    data={PitchBubbleChart.data}
                    options={PitchBubbleChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Mapping</h3>
            </Card>
            </Col> 
            }

            {AwayIndividualAxisShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-axis">
                  <Bar
                    data={PitchAxisChart.data}
                    options={PitchAxisChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Axes</h3>
            </Card>
            </Col>
            }

            {AwayIndividualZoneShow ?
            <></>
            :
            <Col md="6">
            <Card className="card-chart">
              <CardBody className="pitch-display">
                <div className="pitch-zone" >
                  <HorizontalBar
                    data={PitchZoneChart.data}
                    options={PitchZoneChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Zones</h3>
            </Card>
            </Col>
            }

            {AwayIndividualBoxMappingShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-zone">
                  <Bubble
                    data={BoxBubbleChart.data}
                    options={BoxBubbleChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Mapping surface</h3>
            </Card>
            </Col>
            }

            {AwayIndividualBoxAxisShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-axis" >
                  <Bar
                    data={BoxAxisChart.data}
                    options={BoxAxisChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Surfaces axes</h3>
            </Card>
            </Col>
            }

            {AwayIndividualBoxZoneShow ?
            <></>
            :
            <Col className="box-col" md="6">
            <Card className="card-chart">
              <CardBody className="box-display">
                <div className="box-zone" >
                  <HorizontalBar
                    data={BoxZoneChart.data}
                    options={BoxZoneChart.options}
                  />
                </div>
              </CardBody>
              <h3 className="chart-title">Surfaces zones</h3>
            </Card>
            </Col>
            }

            {AwayIndividualPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s)</h3>
                </Col>
            }
            {AwayIndividualFailedPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) échouée(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) réussie(s)</h3>
                </Col>
            }
            {AwayIndividualShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) courte(s)</h3>
                </Col>
            }
            {AwayIndividualFailedShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) courte(s) échouée(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedShortPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) courte(s) réussie(s)</h3>
                </Col>
            }
            {AwayIndividualDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) défensif(s)</h3>
                </Col>
            }
            {AwayIndividualFailedDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) défensif(s) échoué(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedDefensiveDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) défensif(s) réussi(s)</h3>
                </Col>
            }
            {AwayIndividualInterceptionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Interception(s)</h3>
                </Col>
            }
            {AwayIndividualInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Intervention(s)</h3>
                </Col>
            }
            {AwayIndividualTackleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Tacle(s)</h3>
                </Col>
            }
            {AwayIndividualDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Dribble(s)</h3>
                </Col>
            }
            {AwayIndividualFailedDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Dribble(s) échoué(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedDribbleShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Dribble(s) réussi(s)</h3>
                </Col>
            }
            {AwayIndividualBallSprintShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Percussion(s)</h3>
                </Col>
            }
            {AwayIndividualDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s)</h3>
                </Col>
            }
            {AwayIndividualFailedDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s) échoué(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedDefensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) défensif(s) réussi(s)</h3>
                </Col>
            }
            {AwayIndividualOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s)</h3>
                </Col>
            }
            {AwayIndividualFailedOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s) échoué(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedOffensiveAerialDuelShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Duel(s) aérien(s) offensif(s) réussi(s)</h3>
                </Col>
            }
            {AwayIndividualCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Centre(s)</h3>
                </Col>
            }
            {AwayIndividualFailedCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Centre(s) échoué(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedCrossShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Centre(s) réussi(s)</h3>
                </Col>
            }
            {AwayIndividualLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) longue(s) </h3>
                </Col>
            }
            {AwayIndividualFailedLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) longue(s)  échouée(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedLongPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) longue(s)  réussie(s)</h3>
                </Col>
            }
            {AwayIndividualSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Renversement(s)</h3>
                </Col>
            }
            {AwayIndividualFailedSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Renversement(s) échoué(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedSplittingPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Renversement(s) réussi(s)</h3>
                </Col>
            }
            {AwayIndividualShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Tir(s)</h3>
                </Col>
            }
            {AwayIndividualFailedShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Tir(s) échoué(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedShotShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Tir(s) réussi(s)</h3>
                </Col>
            }
            {AwayIndividualGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Intervention(s) gardien</h3>
                </Col>
            }
            {AwayIndividualFailedGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Intervention(s) gardien échoué(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedGoalkeeperInterventionShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Intervention(s) gardien réussi(s)</h3>
                </Col>
            }
            {AwayIndividualSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Arrêt(s)</h3>
                </Col>
            }
            {AwayIndividualFailedSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Arrêt(s) échoué(s)</h3>
                </Col>
            }
            {AwayIndividualSucceedSaveShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Arrêt(s) réussi(s)</h3>
                </Col>
            }
            {AwayIndividualThrowInShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Touche(s)</h3>
                </Col>
            }
            {AwayIndividualFaltCommitedShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Faute(s) commise(s)</h3>
                </Col>
            }
            {AwayIndividualFaltConcededShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Faute(s) concédée(s)</h3>
                </Col>
            }
            {AwayIndividualObtainedCornerShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Corner(s) obtenu(s)</h3>
                </Col>
            }
            {AwayIndividualConcededCornerShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Corner(s) concédé(s)</h3>
                </Col>
            }
            {AwayIndividualCornerPlayedShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Corner(s) joué(s)</h3>
                </Col>
            }
            {AwayIndividualAssistPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) décisive(s)</h3>
                </Col>
            }
            {AwayIndividualGoalShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">But(s)</h3>
                </Col>
            }
            {AwayIndividualKeyPassShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Passe(s) clé(s)</h3>
                </Col>
            }
            {AwayIndividualPartialImbalanceShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Déséquilibre(s) partiel</h3>
                </Col>
            }
            {AwayIndividualTotalImbalanceShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Déséquilibre(s) total</h3>
                </Col>
            }
            {AwayIndividualDirectAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Attaque(s) direct</h3>
                </Col>
            }
            {AwayIndividualCounterAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Contre-attaque(s)</h3>
                </Col>
            }
            {AwayIndividualPlacedAttackShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Attaque(s) placée(s)</h3>
                </Col>
            }
            {AwayIndividualOffsideShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Hors-jeu</h3>
                </Col>
            }
            {AwayIndividualObtainedPenaltyShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Penalty obtenu</h3>
                </Col>
            }
            {AwayIndividualYellowCardShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Carton(s) jaune(s)</h3>
                </Col>
            }
            {AwayIndividualRedCardShow ?
            <></>
            :
            <Col className="card-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
              <h3 className="chart-title">Carton(s) rouge(s)</h3>
                </Col>
            }


            {AwayIndividualPass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité passes</h3>
            </Col>
            }
            {AwayIndividualShort_pass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité passes courtes</h3>
            </Col>
            }
            {AwayIndividualDefensive_1v1_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité 1c1 défensifs</h3>
            </Col>
            }
            {AwayIndividualOffensive_1v1_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité 1c1 offensifs</h3>
            </Col>
            }
            {AwayIndividualDefensive_Aerial_duel_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité duels défensifs aériens</h3>
            </Col>
            }
            {AwayIndividualOffensive_aerial_duel_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité duels offensifs aériens</h3>
            </Col>
            }
            {AwayIndividualCross_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité centres</h3>
            </Col>
            }
            {AwayIndividualLong_pass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité passes longues</h3>
            </Col>
            }
            {AwayIndividualSplitting_pass_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité des renversements</h3>
            </Col>
            }
            {AwayIndividualShot_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité tirs</h3>
            </Col>
            }
            {AwayIndividualGoalkeeper_Intervention_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité des interventions gardien</h3>
            </Col>
            }
            {AwayIndividualSave_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité des arrêts</h3>
            </Col>
            }
            {AwayIndividualThrowIn_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité des touches</h3>
            </Col>
            }
            {AwayIndividualFalt_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Différentiels des fautes</h3>
            </Col>
            }
            {AwayIndividualCorner_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité des corners</h3>
            </Col>
            }
            {AwayIndividualGoalkick_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Efficacité relances 5M50</h3>
            </Col>
            }
            {AwayIndividualPenalty_EfficiencyShow ?
            <></>
            :
            <Col className="diagram-col" md="6" >
            <div className="polar-chart">
                  <Polar
                    data={PolarChart.data}
                    options={PolarChart.options}
                  />
                </div>
            <h3 class="chart-title">Différentiel pénaltys</h3>
            </Col>
            }
               
            {AwayIndividualSucceedDefensiveDualRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
            <h3 class="chart-title">Réussite duels défensifs</h3>
            </Col>
            }

               
               {AwayIndividualSucceedDefensive1v1RateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
            <h3 class="chart-title">Réussite 1c1 défensifs</h3>
            </Col>
            }

               
               {AwayIndividualSucceedDefensiveAerialDualShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
            <h3 class="chart-title">Réussite duels aériens défensifs</h3>
            </Col>
            }

               
               {AwayIndividualSucceedOffensiveDualRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
            <h3 class="chart-title">Réussite duels offensifs</h3>
            </Col>
            }

               
               {AwayIndividualSucceedOffensive1v1RateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
            <h3 class="chart-title">Réussite 1c1 offensifs</h3>
            </Col>
            }

               
               {AwayIndividualSucceedOffensiveAerialDualRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
            <h3 class="chart-title">Réussite duels aériens offensifs</h3>
            </Col>
            }

               
               {AwayIndividualSucceedPassRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
            <h3 class="chart-title">Réussite passes</h3>
            </Col>
            }

               
               {AwayIndividualOffensivePassRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
            <h3 class="chart-title">Réussite passes dangereuses</h3>
            </Col>
            }

               
               {AwayIndividualSucceedShortPassRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
            <h3 class="chart-title">Réussite passes courtes</h3>
            </Col>
            }

               
               {AwayIndividualSucceedLongPassRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
                  <Polar
                    data={PolarChartSingleSerie.data}
                    options={PolarChartSingleSerie.options}
                  />
                </div>
            <h3 class="chart-title">Réussite passes longues</h3>
            </Col>
            }

               
               {AwayIndividualSucceedSplitingPassRateShow ?
            <></>
            :
            <Col className="gauge-col" md="6">
            <div className="polar-chart">
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
    </TabPane>
      </TabContent>
    );
};

export default AwayDashboard;