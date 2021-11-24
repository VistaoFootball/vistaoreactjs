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

import GaugeChart from "react-gauge-chart/dist/GaugeChart";
  
  function HomeDashboard() {
    const [horizontalTabsD, sethorizontalTabsD] = React.useState("Global"); 
    const [horizontalTabsHomeGlobal, sethorizontalTabsHomeGlobal] = React.useState("Maps"); 
    const [horizontalTabsHomeIndividual, sethorizontalTabsHomeIndividual] = React.useState("Maps");  
    const [verticalTabsIcons, setverticalTabsIcons] = React.useState("HomeTeam");
    const [openedCollapseDataFilters, setopenedCollapseDataFilters] = React.useState(false);

    const changeActiveTab = (e, tabState, tabName) => {
      e.preventDefault();
      switch (tabState) {
        case "horizontalTabsD":
          sethorizontalTabsD(tabName);
          break;
        case "horizontalTabsHomeGlobal":
            sethorizontalTabsHomeGlobal(tabName);
            break;
        case "horizontalTabsHomeIndividual":
            sethorizontalTabsHomeIndividual(tabName);
            break;
        case "verticalTabsIcons":
            setverticalTabsIcons(tabName);
            break;
            default:
          break;
      }
    };

    const [multipleSelectHomePlayer, setmultipleSelectHomePlayer] = React.useState(null);
    const [multipleSelectZone, setmultipleSelectZone] = React.useState(null);
    const [multipleSelectAxis, setmultipleSelectAxis] = React.useState(null);
    
    const slider4Ref = React.useRef(null);
  React.useEffect(() => {

    var slider4 = slider4Ref.current;

    if (slider4.className === "slider slider-primary mb-3") {
      Slider.create(slider4, {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);

  const slider5Ref = React.useRef(null);
  React.useEffect(() => {

    var slider5 = slider5Ref.current;

    if (slider5.className === "slider slider-primary mb-3") {
      Slider.create(slider5, {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);

        // Show/hide maps home > global dashboard
  
        const [HomeMappingShow, setHomeMappingShow] = React.useState(true);
        const [HomeAxisShow, setHomeAxisShow] = React.useState(true);
        const [HomeZoneShow, setHomeZoneShow] = React.useState(true);
        const [HomeBoxMappingShow, setHomeBoxMappingShow] = React.useState(true);
        const [HomeBoxAxisShow, setHomeBoxAxisShow] = React.useState(true);
        const [HomeBoxZoneShow, setHomeBoxZoneShow] = React.useState(true);
      
        const handleClickHomeMapping = () => {
          setHomeMappingShow(!HomeMappingShow)}
        const handleClickHomeAxis = () => {
          setHomeAxisShow(!HomeAxisShow)}
        const handleClickHomeZone = () => {
          setHomeZoneShow(!HomeZoneShow)}
        const handleClickHomeBoxMapping = () => {
          setHomeBoxMappingShow(!HomeBoxMappingShow)}
        const handleClickHomeBoxAxis = () => {
          setHomeBoxAxisShow(!HomeBoxAxisShow)}
        const handleClickHomeMappingBoxZone = () => {
          setHomeBoxZoneShow(!HomeBoxZoneShow)}
    
        // Show/hide cards home > global dashboard 
        const [HomePassShow, setHomePassShow] = React.useState(true);
        const [HomeFailedPassShow, setHomeFailedPassShow] = React.useState(true);
        const [HomeSucceedPassShow, setHomeSucceedPassShow] = React.useState(true);
        const [HomeShortPassShow, setHomeShortPassShow] = React.useState(true);
        const [HomeFailedShortPassShow, setHomeFailedShortPassShow] = React.useState(true);
        const [HomeSucceedShortPassShow, setHomeSucceedShortPassShow] = React.useState(true);
        const [HomeDefensiveDuelShow, setHomeDefensiveDuelShow] = React.useState(true);
        const [HomeFailedDefensiveDuelShow, setHomeFailedDefensiveDuelShow] = React.useState(true);
        const [HomeSucceedDefensiveDuelShow, setHomeSucceedDefensiveDuelShow] = React.useState(true);
        const [HomeInterceptionShow, setHomeInterceptionShow] = React.useState(true);
        const [HomeInterventionShow, setHomeInterventionShow] = React.useState(true);
        const [HomeTackleShow, setHomeTackleShow] = React.useState(true);
        const [HomeDribbleShow, setHomeDribbleShow] = React.useState(true);
        const [HomeFailedDribbleShow, setHomeFailedDribbleShow] = React.useState(true);
        const [HomeSucceedDribbleShow, setHomeSucceedDribbleShow] = React.useState(true);
        const [HomeBallSprintShow, setHomeBallSprintShow] = React.useState(true);
        const [HomeDefensiveAerialDuelShow, setHomeDefensiveAerialDuelShow] = React.useState(true);
        const [HomeFailedDefensiveAerialDuelShow, setHomeFailedDefensiveAerialDuelShow] = React.useState(true);
        const [HomeSucceedDefensiveAerialDuelShow, setHomeSucceedDefensiveAerialDuelShow] = React.useState(true);
        const [HomeOffensiveAerialDuelShow, setHomeOffensiveAerialDuelShow] = React.useState(true);
        const [HomeFailedOffensiveAerialDuelShow, setHomeFailedOffensiveAerialDuelShow] = React.useState(true);
        const [HomeSucceedOffensiveAerialDuelShow, setHomeSucceedOffensiveAerialDuelShow] = React.useState(true);
        const [HomeCrossShow, setHomeCrossShow] = React.useState(true);
        const [HomeFailedCrossShow, setHomeFailedCrossShow] = React.useState(true);
        const [HomeSucceedCrossShow, setHomeSucceedCrossShow] = React.useState(true);
        const [HomeLongPassShow, setHomeLongPassShow] = React.useState(true);
        const [HomeFailedLongPassShow, setHomeFailedLongPassShow] = React.useState(true);
        const [HomeSucceedLongPassShow, setHomeSucceedLongPassShow] = React.useState(true);
        const [HomeSplittingPassShow, setHomeSplittingPassShow] = React.useState(true);
        const [HomeFailedSplittingPassShow, setHomeFailedSplittingPassShow] = React.useState(true);
        const [HomeSucceedSplittingPassShow, setHomeSucceedSplittingPassShow] = React.useState(true);
        const [HomeShotShow, setHomeShotShow] = React.useState(true);
        const [HomeFailedShotShow, setHomeFailedShotShow] = React.useState(true);
        const [HomeSucceedShotShow, setHomeSucceedShotShow] = React.useState(true);
        const [HomeGoalkeeperInterventionShow, setHomeGoalkeeperInterventionShow] = React.useState(true);
        const [HomeFailedGoalkeeperInterventionShow, setHomeFailedGoalkeeperInterventionShow] = React.useState(true);
        const [HomeSucceedGoalkeeperInterventionShow, setHomeSucceedGoalkeeperInterventionShow] = React.useState(true);
        const [HomeSaveShow, setHomeSaveShow] = React.useState(true);
        const [HomeFailedSaveShow, setHomeFailedSaveShow] = React.useState(true);
        const [HomeSucceedSaveShow, setHomeSucceedSaveShow] = React.useState(true);
        const [HomeThrowInShow, setHomeThrowInShow] = React.useState(true);
        const [HomeFaltCommitedShow, setHomeFaltCommitedShow] = React.useState(true);
        const [HomeFaltConcededShow, setHomeFaltConcededShow] = React.useState(true);
        const [HomeObtainedCornerShow, setHomeObtainedCornerShow] = React.useState(true);
        const [HomeConcededCornerShow, setHomeConcededCornerShow] = React.useState(true);
        const [HomeCornerPlayedShow, setHomeCornerPlayedShow] = React.useState(true);
        const [HomeAssistPassShow, setHomeAssistPassShow] = React.useState(true);
        const [HomeGoalShow, setHomeGoalShow] = React.useState(true);
        const [HomeKeyPassShow, setHomeKeyPassShow] = React.useState(true);
        const [HomePartialImbalanceShow, setHomePartialImbalanceShow] = React.useState(true);
        const [HomeTotalImbalanceShow, setHomeTotalImbalanceShow] = React.useState(true);
        const [HomeDirectAttackShow, setHomeDirectAttackShow] = React.useState(true);
        const [HomeCounterAttackShow, setHomeCounterAttackShow] = React.useState(true);
        const [HomePlacedAttackShow, setHomePlacedAttackShow] = React.useState(true);
        const [HomeOffsideShow, setHomeOffsideShow] = React.useState(true);
        const [HomeObtainedPenaltyShow, setHomeObtainedPenaltyShow] = React.useState(true);
        const [HomeYellowCardShow, setHomeYellowCardShow] = React.useState(true);
        const [HomeRedCardShow, setHomeRedCardShow] = React.useState(true);
       
        const handleClickHomePass= () => {
          setHomePassShow(!HomePassShow)};
        const handleClickHomeFailedPass= () => {
          setHomeFailedPassShow(!HomeFailedPassShow)};
        const handleClickHomeSucceedPass= () => {
          setHomeSucceedPassShow(!HomeSucceedPassShow)};
        const handleClickHomeShortPass= () => {
          setHomeShortPassShow(!HomeShortPassShow)};
        const handleClickHomeFailedShortPass= () => {
          setHomeFailedShortPassShow(!HomeFailedShortPassShow)};
        const handleClickHomeSucceedShortPass= () => {
          setHomeSucceedShortPassShow(!HomeSucceedShortPassShow)};
        const handleClickHomeDefensiveDuel= () => {
          setHomeDefensiveDuelShow(!HomeDefensiveDuelShow)};
        const handleClickHomeFailedDefensiveDuel= () => {
          setHomeFailedDefensiveDuelShow(!HomeFailedDefensiveDuelShow)};
        const handleClickHomeSucceedDefensiveDuel= () => {
          setHomeSucceedDefensiveDuelShow(!HomeSucceedDefensiveDuelShow)};
        const handleClickHomeInterception= () => {
          setHomeInterceptionShow(!HomeInterceptionShow)};
        const handleClickHomeIntervention= () => {
          setHomeInterventionShow(!HomeInterventionShow)};
        const handleClickHomeTackle= () => {
          setHomeTackleShow(!HomeTackleShow)};
        const handleClickHomeDribble= () => {
          setHomeDribbleShow(!HomeDribbleShow)};
        const handleClickHomeFailedDribble= () => {
          setHomeFailedDribbleShow(!HomeFailedDribbleShow)};
        const handleClickHomeSucceedDribble= () => {
          setHomeSucceedDribbleShow(!HomeSucceedDribbleShow)};
        const handleClickHomeBallSprint= () => {
          setHomeBallSprintShow(!HomeBallSprintShow)};
        const handleClickHomeDefensiveAerialDuel= () => {
          setHomeDefensiveAerialDuelShow(!HomeDefensiveAerialDuelShow)};
        const handleClickHomeFailedDefensiveAerialDuel= () => {
          setHomeFailedDefensiveAerialDuelShow(!HomeFailedDefensiveAerialDuelShow)};
        const handleClickHomeSucceedDefensiveAerialDuel= () => {
          setHomeSucceedDefensiveAerialDuelShow(!HomeSucceedDefensiveAerialDuelShow)};
        const handleClickHomeOffensiveAerialDuel= () => {
          setHomeOffensiveAerialDuelShow(!HomeOffensiveAerialDuelShow)};
        const handleClickHomeFailedOffensiveAerialDuel= () => {
          setHomeFailedOffensiveAerialDuelShow(!HomeFailedOffensiveAerialDuelShow)};
        const handleClickHomeSucceedOffensiveAerialDuel= () => {
          setHomeSucceedOffensiveAerialDuelShow(!HomeSucceedOffensiveAerialDuelShow)};
        const handleClickHomeCross= () => {
          setHomeCrossShow(!HomeCrossShow)};
        const handleClickHomeFailedCross= () => {
          setHomeFailedCrossShow(!HomeFailedCrossShow)};
        const handleClickHomeSucceedCross= () => {
          setHomeSucceedCrossShow(!HomeSucceedCrossShow)};
        const handleClickHomeLongPass= () => {
          setHomeLongPassShow(!HomeLongPassShow)};
        const handleClickHomeFailedLongPass= () => {
          setHomeFailedLongPassShow(!HomeFailedLongPassShow)};
        const handleClickHomeSucceedLongPass= () => {
          setHomeSucceedLongPassShow(!HomeSucceedLongPassShow)};
        const handleClickHomeSplittingPass= () => {
          setHomeSplittingPassShow(!HomeSplittingPassShow)};
        const handleClickHomeFailedSplittingPass= () => {
          setHomeFailedSplittingPassShow(!HomeFailedSplittingPassShow)};
        const handleClickHomeSucceedSplittingPass= () => {
          setHomeSucceedSplittingPassShow(!HomeSucceedSplittingPassShow)};
        const handleClickHomeShot= () => {
          setHomeShotShow(!HomeShotShow)};
        const handleClickHomeFailedShot= () => {
          setHomeFailedShotShow(!HomeFailedShotShow)};
        const handleClickHomeSucceedShot= () => {
          setHomeSucceedShotShow(!HomeSucceedShotShow)};
        const handleClickHomeGoalkeeperIntervention= () => {
          setHomeGoalkeeperInterventionShow(!HomeGoalkeeperInterventionShow)};
        const handleClickHomeFailedGoalkeeperIntervention= () => {
          setHomeFailedGoalkeeperInterventionShow(!HomeFailedGoalkeeperInterventionShow)};
        const handleClickHomeSucceedGoalkeeperIntervention= () => {
          setHomeSucceedGoalkeeperInterventionShow(!HomeSucceedGoalkeeperInterventionShow)};
        const handleClickHomeSave= () => {
          setHomeSaveShow(!HomeSaveShow)};
        const handleClickHomeFailedSave= () => {
          setHomeFailedSaveShow(!HomeFailedSaveShow)};
        const handleClickHomeSucceedSave= () => {
          setHomeSucceedSaveShow(!HomeSucceedSaveShow)};
        const handleClickHomeThrowIn= () => {
          setHomeThrowInShow(!HomeThrowInShow)};
        const handleClickHomeFaltCommited= () => {
          setHomeFaltCommitedShow(!HomeFaltCommitedShow)};
        const handleClickHomeFaltConceded= () => {
          setHomeFaltConcededShow(!HomeFaltConcededShow)};
        const handleClickHomeObtainedCorner= () => {
          setHomeObtainedCornerShow(!HomeObtainedCornerShow)};
        const handleClickHomeConcededCorner= () => {
          setHomeConcededCornerShow(!HomeConcededCornerShow)};
        const handleClickHomeCornerPlayed= () => {
          setHomeCornerPlayedShow(!HomeCornerPlayedShow)};
        const handleClickHomeAssistPass= () => {
          setHomeAssistPassShow(!HomeAssistPassShow)};
        const handleClickHomeGoal= () => {
          setHomeGoalShow(!HomeGoalShow)};
        const handleClickHomeKeyPass= () => {
          setHomeKeyPassShow(!HomeKeyPassShow)};
        const handleClickHomePartialImbalance= () => {
          setHomePartialImbalanceShow(!HomePartialImbalanceShow)};
        const handleClickHomeTotalImbalance= () => {
          setHomeTotalImbalanceShow(!HomeTotalImbalanceShow)};
        const handleClickHomeDirectAttack= () => {
          setHomeDirectAttackShow(!HomeDirectAttackShow)};
        const handleClickHomeCounterAttack= () => {
          setHomeCounterAttackShow(!HomeCounterAttackShow)};
        const handleClickHomePlacedAttack= () => {
          setHomePlacedAttackShow(!HomePlacedAttackShow)};
        const handleClickHomeOffside= () => {
          setHomeOffsideShow(!HomeOffsideShow)};
        const handleClickHomeObtainedPenalty= () => {
          setHomeObtainedPenaltyShow(!HomeObtainedPenaltyShow)};
        const handleClickHomeYellowCard= () => {
          setHomeYellowCardShow(!HomeYellowCardShow)};
        const handleClickHomeRedCard= () => {
          setHomeRedCardShow(!HomeRedCardShow)};
    
        // Show/hide efficiency diagram home > global dashboard 
          const [HomePass_EfficiencyShow, setHomePass_EfficiencyShow] = React.useState(true);
          const [HomeShort_pass_EfficiencyShow, setHomeShort_pass_EfficiencyShow] = React.useState(true);
          const [HomeDefensive_1v1_EfficiencyShow, setHomeDefensive_1v1_EfficiencyShow] = React.useState(true);
          const [HomeOffensive_1v1_EfficiencyShow, setHomeOffensive_1v1_EfficiencyShow] = React.useState(true);
          const [HomeDefensive_Aerial_duel_EfficiencyShow, setHomeDefensive_Aerial_duel_EfficiencyShow] = React.useState(true);
          const [HomeOffensive_aerial_duel_EfficiencyShow, setHomeOffensive_aerial_duel_EfficiencyShow] = React.useState(true);
          const [HomeCross_EfficiencyShow, setHomeCross_EfficiencyShow] = React.useState(true);
          const [HomeLong_pass_EfficiencyShow, setHomeLong_pass_EfficiencyShow] = React.useState(true);
          const [HomeSplitting_pass_EfficiencyShow, setHomeSplitting_pass_EfficiencyShow] = React.useState(true);
          const [HomeShot_EfficiencyShow, setHomeShot_EfficiencyShow] = React.useState(true);
          const [HomeGoalkeeper_Intervention_EfficiencyShow, setHomeGoalkeeper_Intervention_EfficiencyShow] = React.useState(true);
          const [HomeSave_EfficiencyShow, setHomeSave_EfficiencyShow] = React.useState(true);
          const [HomeThrowIn_EfficiencyShow, setHomeThrowIn_EfficiencyShow] = React.useState(true);
          const [HomeFalt_EfficiencyShow, setHomeFalt_EfficiencyShow] = React.useState(true);
          const [HomeCorner_EfficiencyShow, setHomeCorner_EfficiencyShow] = React.useState(true);
          const [HomeGoalkick_EfficiencyShow, setHomeGoalkick_EfficiencyShow] = React.useState(true);
          const [HomePenalty_EfficiencyShow, setHomePenalty_EfficiencyShow] = React.useState(true);
         
          const handleClickHomePass_Efficiency= () => {
            setHomePass_EfficiencyShow(!HomePass_EfficiencyShow)};
          const handleClickHomeShort_pass_Efficiency= () => {
            setHomeShort_pass_EfficiencyShow(!HomeShort_pass_EfficiencyShow)};
          const handleClickHomeDefensive_1v1_Efficiency= () => {
            setHomeDefensive_1v1_EfficiencyShow(!HomeDefensive_1v1_EfficiencyShow)};
          const handleClickHomeOffensive_1v1_Efficiency= () => {
            setHomeOffensive_1v1_EfficiencyShow(!HomeOffensive_1v1_EfficiencyShow)};
          const handleClickHomeDefensive_Aerial_duel_Efficiency= () => {
            setHomeDefensive_Aerial_duel_EfficiencyShow(!HomeDefensive_Aerial_duel_EfficiencyShow)};
          const handleClickHomeOffensive_aerial_duel_Efficiency= () => {
            setHomeOffensive_aerial_duel_EfficiencyShow(!HomeOffensive_aerial_duel_EfficiencyShow)};
          const handleClickHomeCross_Efficiency= () => {
            setHomeCross_EfficiencyShow(!HomeCross_EfficiencyShow)};
          const handleClickHomeLong_pass_Efficiency= () => {
            setHomeLong_pass_EfficiencyShow(!HomeLong_pass_EfficiencyShow)};
          const handleClickHomeSplitting_pass_Efficiency= () => {
            setHomeSplitting_pass_EfficiencyShow(!HomeSplitting_pass_EfficiencyShow)};
          const handleClickHomeShot_Efficiency= () => {
            setHomeShot_EfficiencyShow(!HomeShot_EfficiencyShow)};
          const handleClickHomeGoalkeeper_Intervention_Efficiency= () => {
            setHomeGoalkeeper_Intervention_EfficiencyShow(!HomeGoalkeeper_Intervention_EfficiencyShow)};
          const handleClickHomeSave_Efficiency= () => {
            setHomeSave_EfficiencyShow(!HomeSave_EfficiencyShow)};
          const handleClickHomeThrowIn_Efficiency= () => {
            setHomeThrowIn_EfficiencyShow(!HomeThrowIn_EfficiencyShow)};
          const handleClickHomeFalt_Efficiency= () => {
            setHomeFalt_EfficiencyShow(!HomeFalt_EfficiencyShow)};
          const handleClickHomeCorner_Efficiency= () => {
            setHomeCorner_EfficiencyShow(!HomeCorner_EfficiencyShow)};
          const handleClickHomeGoalkick_Efficiency= () => {
            setHomeGoalkick_EfficiencyShow(!HomeGoalkick_EfficiencyShow)};
          const handleClickHomePenalty_Efficiency= () => {
            setHomePenalty_EfficiencyShow(!HomePenalty_EfficiencyShow)};
      
        // Show/hide Success Rate home > global dashboard 
        const [HomeSucceedDefensiveDualRateShow, setHomeSucceedDefensiveDualRateShow] = React.useState(true);
        const [HomeSucceedDefensive1v1RateShow, setHomeSucceedDefensive1v1RateShow] = React.useState(true);
        const [HomeSucceedDefensiveAerialDualShow, setHomeSucceedDefensiveAerialDualShow] = React.useState(true);
        const [HomeSucceedOffensiveDualRateShow, setHomeSucceedOffensiveDualRateShow] = React.useState(true);
        const [HomeSucceedOffensive1v1RateShow, setHomeSucceedOffensive1v1RateShow] = React.useState(true);
        const [HomeSucceedOffensiveAerialDualRateShow, setHomeSucceedOffensiveAerialDualRateShow] = React.useState(true);
        const [HomeSucceedPassRateShow, setHomeSucceedPassRateShow] = React.useState(true);
        const [HomeOffensivePassRateShow, setHomeOffensivePassRateShow] = React.useState(true);
        const [HomeSucceedShortPassRateShow, setHomeSucceedShortPassRateShow] = React.useState(true);
        const [HomeSucceedLongPassRateShow, setHomeSucceedLongPassRateShow] = React.useState(true);
        const [HomeSucceedSplitingPassRateShow, setHomeSucceedSplitingPassRateShow] = React.useState(true);   
    
        const handleClickHomeSucceedDefensiveDualRate= () => {
          setHomeSucceedDefensiveDualRateShow(!HomeSucceedDefensiveDualRateShow)};
        const handleClickHomeSucceedDefensive1v1Rate= () => {
          setHomeSucceedDefensive1v1RateShow(!HomeSucceedDefensive1v1RateShow)};
        const handleClickHomeSucceedDefensiveAerialDual= () => {
          setHomeSucceedDefensiveAerialDualShow(!HomeSucceedDefensiveAerialDualShow)};
        const handleClickHomeSucceedOffensiveDualRate= () => {
          setHomeSucceedOffensiveDualRateShow(!HomeSucceedOffensiveDualRateShow)};
        const handleClickHomeSucceedOffensive1v1Rate= () => {
          setHomeSucceedOffensive1v1RateShow(!HomeSucceedOffensive1v1RateShow)};
        const handleClickHomeSucceedOffensiveAerialDualRate= () => {
          setHomeSucceedOffensiveAerialDualRateShow(!HomeSucceedOffensiveAerialDualRateShow)};
        const handleClickHomeSucceedPassRate= () => {
          setHomeSucceedPassRateShow(!HomeSucceedPassRateShow)};
        const handleClickHomeOffensivePassRate= () => {
          setHomeOffensivePassRateShow(!HomeOffensivePassRateShow)};
        const handleClickHomeSucceedShortPassRate= () => {
          setHomeSucceedShortPassRateShow(!HomeSucceedShortPassRateShow)};
        const handleClickHomeSucceedLongPassRate= () => {
          setHomeSucceedLongPassRateShow(!HomeSucceedLongPassRateShow)};
        const handleClickHomeSucceedSplitingPassRate= () => {
          setHomeSucceedSplitingPassRateShow(!HomeSucceedSplitingPassRateShow)};
    
    
        // Show/hide maps Home > individual > global dashboard
      
        const [HomeIndividualMappingShow, setHomeIndividualMappingShow] = React.useState(true);
        const [HomeIndividualAxisShow, setHomeIndividualAxisShow] = React.useState(true);
        const [HomeIndividualZoneShow, setHomeIndividualZoneShow] = React.useState(true);
        const [HomeIndividualBoxMappingShow, setHomeIndividualBoxMappingShow] = React.useState(true);
        const [HomeIndividualBoxAxisShow, setHomeIndividualBoxAxisShow] = React.useState(true);
        const [HomeIndividualBoxZoneShow, setHomeIndividualBoxZoneShow] = React.useState(true);
    
      
        const handleClickHomeIndividualMapping = () => {
          setHomeIndividualMappingShow(!HomeIndividualMappingShow)}
        const handleClickHomeIndividualAxis = () => {
          setHomeIndividualAxisShow(!HomeIndividualAxisShow)}
        const handleClickHomeIndividualZone = () => {
          setHomeIndividualZoneShow(!HomeIndividualZoneShow)}
        const handleClickHomeIndividualBoxMapping = () => {
          setHomeIndividualBoxMappingShow(!HomeIndividualBoxMappingShow)}
        const handleClickHomeIndividualBoxAxis = () => {
          setHomeIndividualBoxAxisShow(!HomeIndividualBoxAxisShow)}
        const handleClickHomeIndividualMappingBoxZone = () => {
          setHomeIndividualBoxZoneShow(!HomeIndividualBoxZoneShow)}
    
        // Show/hide cards  Home > individual > global dashboard 
        const [HomeIndividualPassShow, setHomeIndividualPassShow] = React.useState(true);
        const [HomeIndividualFailedPassShow, setHomeIndividualFailedPassShow] = React.useState(true);
        const [HomeIndividualSucceedPassShow, setHomeIndividualSucceedPassShow] = React.useState(true);
        const [HomeIndividualShortPassShow, setHomeIndividualShortPassShow] = React.useState(true);
        const [HomeIndividualFailedShortPassShow, setHomeIndividualFailedShortPassShow] = React.useState(true);
        const [HomeIndividualSucceedShortPassShow, setHomeIndividualSucceedShortPassShow] = React.useState(true);
        const [HomeIndividualDefensiveDuelShow, setHomeIndividualDefensiveDuelShow] = React.useState(true);
        const [HomeIndividualFailedDefensiveDuelShow, setHomeIndividualFailedDefensiveDuelShow] = React.useState(true);
        const [HomeIndividualSucceedDefensiveDuelShow, setHomeIndividualSucceedDefensiveDuelShow] = React.useState(true);
        const [HomeIndividualInterceptionShow, setHomeIndividualInterceptionShow] = React.useState(true);
        const [HomeIndividualInterventionShow, setHomeIndividualInterventionShow] = React.useState(true);
        const [HomeIndividualTackleShow, setHomeIndividualTackleShow] = React.useState(true);
        const [HomeIndividualDribbleShow, setHomeIndividualDribbleShow] = React.useState(true);
        const [HomeIndividualFailedDribbleShow, setHomeIndividualFailedDribbleShow] = React.useState(true);
        const [HomeIndividualSucceedDribbleShow, setHomeIndividualSucceedDribbleShow] = React.useState(true);
        const [HomeIndividualBallSprintShow, setHomeIndividualBallSprintShow] = React.useState(true);
        const [HomeIndividualDefensiveAerialDuelShow, setHomeIndividualDefensiveAerialDuelShow] = React.useState(true);
        const [HomeIndividualFailedDefensiveAerialDuelShow, setHomeIndividualFailedDefensiveAerialDuelShow] = React.useState(true);
        const [HomeIndividualSucceedDefensiveAerialDuelShow, setHomeIndividualSucceedDefensiveAerialDuelShow] = React.useState(true);
        const [HomeIndividualOffensiveAerialDuelShow, setHomeIndividualOffensiveAerialDuelShow] = React.useState(true);
        const [HomeIndividualFailedOffensiveAerialDuelShow, setHomeIndividualFailedOffensiveAerialDuelShow] = React.useState(true);
        const [HomeIndividualSucceedOffensiveAerialDuelShow, setHomeIndividualSucceedOffensiveAerialDuelShow] = React.useState(true);
        const [HomeIndividualCrossShow, setHomeIndividualCrossShow] = React.useState(true);
        const [HomeIndividualFailedCrossShow, setHomeIndividualFailedCrossShow] = React.useState(true);
        const [HomeIndividualSucceedCrossShow, setHomeIndividualSucceedCrossShow] = React.useState(true);
        const [HomeIndividualLongPassShow, setHomeIndividualLongPassShow] = React.useState(true);
        const [HomeIndividualFailedLongPassShow, setHomeIndividualFailedLongPassShow] = React.useState(true);
        const [HomeIndividualSucceedLongPassShow, setHomeIndividualSucceedLongPassShow] = React.useState(true);
        const [HomeIndividualSplittingPassShow, setHomeIndividualSplittingPassShow] = React.useState(true);
        const [HomeIndividualFailedSplittingPassShow, setHomeIndividualFailedSplittingPassShow] = React.useState(true);
        const [HomeIndividualSucceedSplittingPassShow, setHomeIndividualSucceedSplittingPassShow] = React.useState(true);
        const [HomeIndividualShotShow, setHomeIndividualShotShow] = React.useState(true);
        const [HomeIndividualFailedShotShow, setHomeIndividualFailedShotShow] = React.useState(true);
        const [HomeIndividualSucceedShotShow, setHomeIndividualSucceedShotShow] = React.useState(true);
        const [HomeIndividualGoalkeeperInterventionShow, setHomeIndividualGoalkeeperInterventionShow] = React.useState(true);
        const [HomeIndividualFailedGoalkeeperInterventionShow, setHomeIndividualFailedGoalkeeperInterventionShow] = React.useState(true);
        const [HomeIndividualSucceedGoalkeeperInterventionShow, setHomeIndividualSucceedGoalkeeperInterventionShow] = React.useState(true);
        const [HomeIndividualSaveShow, setHomeIndividualSaveShow] = React.useState(true);
        const [HomeIndividualFailedSaveShow, setHomeIndividualFailedSaveShow] = React.useState(true);
        const [HomeIndividualSucceedSaveShow, setHomeIndividualSucceedSaveShow] = React.useState(true);
        const [HomeIndividualThrowInShow, setHomeIndividualThrowInShow] = React.useState(true);
        const [HomeIndividualFaltCommitedShow, setHomeIndividualFaltCommitedShow] = React.useState(true);
        const [HomeIndividualFaltConcededShow, setHomeIndividualFaltConcededShow] = React.useState(true);
        const [HomeIndividualObtainedCornerShow, setHomeIndividualObtainedCornerShow] = React.useState(true);
        const [HomeIndividualConcededCornerShow, setHomeIndividualConcededCornerShow] = React.useState(true);
        const [HomeIndividualCornerPlayedShow, setHomeIndividualCornerPlayedShow] = React.useState(true);
        const [HomeIndividualAssistPassShow, setHomeIndividualAssistPassShow] = React.useState(true);
        const [HomeIndividualGoalShow, setHomeIndividualGoalShow] = React.useState(true);
        const [HomeIndividualKeyPassShow, setHomeIndividualKeyPassShow] = React.useState(true);
        const [HomeIndividualPartialImbalanceShow, setHomeIndividualPartialImbalanceShow] = React.useState(true);
        const [HomeIndividualTotalImbalanceShow, setHomeIndividualTotalImbalanceShow] = React.useState(true);
        const [HomeIndividualDirectAttackShow, setHomeIndividualDirectAttackShow] = React.useState(true);
        const [HomeIndividualCounterAttackShow, setHomeIndividualCounterAttackShow] = React.useState(true);
        const [HomeIndividualPlacedAttackShow, setHomeIndividualPlacedAttackShow] = React.useState(true);
        const [HomeIndividualOffsideShow, setHomeIndividualOffsideShow] = React.useState(true);
        const [HomeIndividualObtainedPenaltyShow, setHomeIndividualObtainedPenaltyShow] = React.useState(true);
        const [HomeIndividualYellowCardShow, setHomeIndividualYellowCardShow] = React.useState(true);
        const [HomeIndividualRedCardShow, setHomeIndividualRedCardShow] = React.useState(true);
       
        const handleClickHomeIndividualPass= () => {
          setHomeIndividualPassShow(!HomeIndividualPassShow)};
        const handleClickHomeIndividualFailedPass= () => {
          setHomeIndividualFailedPassShow(!HomeIndividualFailedPassShow)};
        const handleClickHomeIndividualSucceedPass= () => {
          setHomeIndividualSucceedPassShow(!HomeIndividualSucceedPassShow)};
        const handleClickHomeIndividualShortPass= () => {
          setHomeIndividualShortPassShow(!HomeIndividualShortPassShow)};
        const handleClickHomeIndividualFailedShortPass= () => {
          setHomeIndividualFailedShortPassShow(!HomeIndividualFailedShortPassShow)};
        const handleClickHomeIndividualSucceedShortPass= () => {
          setHomeIndividualSucceedShortPassShow(!HomeIndividualSucceedShortPassShow)};
        const handleClickHomeIndividualDefensiveDuel= () => {
          setHomeIndividualDefensiveDuelShow(!HomeIndividualDefensiveDuelShow)};
        const handleClickHomeIndividualFailedDefensiveDuel= () => {
          setHomeIndividualFailedDefensiveDuelShow(!HomeIndividualFailedDefensiveDuelShow)};
        const handleClickHomeIndividualSucceedDefensiveDuel= () => {
          setHomeIndividualSucceedDefensiveDuelShow(!HomeIndividualSucceedDefensiveDuelShow)};
        const handleClickHomeIndividualInterception= () => {
          setHomeIndividualInterceptionShow(!HomeIndividualInterceptionShow)};
        const handleClickHomeIndividualIntervention= () => {
          setHomeIndividualInterventionShow(!HomeIndividualInterventionShow)};
        const handleClickHomeIndividualTackle= () => {
          setHomeIndividualTackleShow(!HomeIndividualTackleShow)};
        const handleClickHomeIndividualDribble= () => {
          setHomeIndividualDribbleShow(!HomeIndividualDribbleShow)};
        const handleClickHomeIndividualFailedDribble= () => {
          setHomeIndividualFailedDribbleShow(!HomeIndividualFailedDribbleShow)};
        const handleClickHomeIndividualSucceedDribble= () => {
          setHomeIndividualSucceedDribbleShow(!HomeIndividualSucceedDribbleShow)};
        const handleClickHomeIndividualBallSprint= () => {
          setHomeIndividualBallSprintShow(!HomeIndividualBallSprintShow)};
        const handleClickHomeIndividualDefensiveAerialDuel= () => {
          setHomeIndividualDefensiveAerialDuelShow(!HomeIndividualDefensiveAerialDuelShow)};
        const handleClickHomeIndividualFailedDefensiveAerialDuel= () => {
          setHomeIndividualFailedDefensiveAerialDuelShow(!HomeIndividualFailedDefensiveAerialDuelShow)};
        const handleClickHomeIndividualSucceedDefensiveAerialDuel= () => {
          setHomeIndividualSucceedDefensiveAerialDuelShow(!HomeIndividualSucceedDefensiveAerialDuelShow)};
        const handleClickHomeIndividualOffensiveAerialDuel= () => {
          setHomeIndividualOffensiveAerialDuelShow(!HomeIndividualOffensiveAerialDuelShow)};
        const handleClickHomeIndividualFailedOffensiveAerialDuel= () => {
          setHomeIndividualFailedOffensiveAerialDuelShow(!HomeIndividualFailedOffensiveAerialDuelShow)};
        const handleClickHomeIndividualSucceedOffensiveAerialDuel= () => {
          setHomeIndividualSucceedOffensiveAerialDuelShow(!HomeIndividualSucceedOffensiveAerialDuelShow)};
        const handleClickHomeIndividualCross= () => {
          setHomeIndividualCrossShow(!HomeIndividualCrossShow)};
        const handleClickHomeIndividualFailedCross= () => {
          setHomeIndividualFailedCrossShow(!HomeIndividualFailedCrossShow)};
        const handleClickHomeIndividualSucceedCross= () => {
          setHomeIndividualSucceedCrossShow(!HomeIndividualSucceedCrossShow)};
        const handleClickHomeIndividualLongPass= () => {
          setHomeIndividualLongPassShow(!HomeIndividualLongPassShow)};
        const handleClickHomeIndividualFailedLongPass= () => {
          setHomeIndividualFailedLongPassShow(!HomeIndividualFailedLongPassShow)};
        const handleClickHomeIndividualSucceedLongPass= () => {
          setHomeIndividualSucceedLongPassShow(!HomeIndividualSucceedLongPassShow)};
        const handleClickHomeIndividualSplittingPass= () => {
          setHomeIndividualSplittingPassShow(!HomeIndividualSplittingPassShow)};
        const handleClickHomeIndividualFailedSplittingPass= () => {
          setHomeIndividualFailedSplittingPassShow(!HomeIndividualFailedSplittingPassShow)};
        const handleClickHomeIndividualSucceedSplittingPass= () => {
          setHomeIndividualSucceedSplittingPassShow(!HomeIndividualSucceedSplittingPassShow)};
        const handleClickHomeIndividualShot= () => {
          setHomeIndividualShotShow(!HomeIndividualShotShow)};
        const handleClickHomeIndividualFailedShot= () => {
          setHomeIndividualFailedShotShow(!HomeIndividualFailedShotShow)};
        const handleClickHomeIndividualSucceedShot= () => {
          setHomeIndividualSucceedShotShow(!HomeIndividualSucceedShotShow)};
        const handleClickHomeIndividualGoalkeeperIntervention= () => {
          setHomeIndividualGoalkeeperInterventionShow(!HomeIndividualGoalkeeperInterventionShow)};
        const handleClickHomeIndividualFailedGoalkeeperIntervention= () => {
          setHomeIndividualFailedGoalkeeperInterventionShow(!HomeIndividualFailedGoalkeeperInterventionShow)};
        const handleClickHomeIndividualSucceedGoalkeeperIntervention= () => {
          setHomeIndividualSucceedGoalkeeperInterventionShow(!HomeIndividualSucceedGoalkeeperInterventionShow)};
        const handleClickHomeIndividualSave= () => {
          setHomeIndividualSaveShow(!HomeIndividualSaveShow)};
        const handleClickHomeIndividualFailedSave= () => {
          setHomeIndividualFailedSaveShow(!HomeIndividualFailedSaveShow)};
        const handleClickHomeIndividualSucceedSave= () => {
          setHomeIndividualSucceedSaveShow(!HomeIndividualSucceedSaveShow)};
        const handleClickHomeIndividualThrowIn= () => {
          setHomeIndividualThrowInShow(!HomeIndividualThrowInShow)};
        const handleClickHomeIndividualFaltCommited= () => {
          setHomeIndividualFaltCommitedShow(!HomeIndividualFaltCommitedShow)};
        const handleClickHomeIndividualFaltConceded= () => {
          setHomeIndividualFaltConcededShow(!HomeIndividualFaltConcededShow)};
        const handleClickHomeIndividualObtainedCorner= () => {
          setHomeIndividualObtainedCornerShow(!HomeIndividualObtainedCornerShow)};
        const handleClickHomeIndividualConcededCorner= () => {
          setHomeIndividualConcededCornerShow(!HomeIndividualConcededCornerShow)};
        const handleClickHomeIndividualCornerPlayed= () => {
          setHomeIndividualCornerPlayedShow(!HomeIndividualCornerPlayedShow)};
        const handleClickHomeIndividualAssistPass= () => {
          setHomeIndividualAssistPassShow(!HomeIndividualAssistPassShow)};
        const handleClickHomeIndividualGoal= () => {
          setHomeIndividualGoalShow(!HomeIndividualGoalShow)};
        const handleClickHomeIndividualKeyPass= () => {
          setHomeIndividualKeyPassShow(!HomeIndividualKeyPassShow)};
        const handleClickHomeIndividualPartialImbalance= () => {
          setHomeIndividualPartialImbalanceShow(!HomeIndividualPartialImbalanceShow)};
        const handleClickHomeIndividualTotalImbalance= () => {
          setHomeIndividualTotalImbalanceShow(!HomeIndividualTotalImbalanceShow)};
        const handleClickHomeIndividualDirectAttack= () => {
          setHomeIndividualDirectAttackShow(!HomeIndividualDirectAttackShow)};
        const handleClickHomeIndividualCounterAttack= () => {
          setHomeIndividualCounterAttackShow(!HomeIndividualCounterAttackShow)};
        const handleClickHomeIndividualPlacedAttack= () => {
          setHomeIndividualPlacedAttackShow(!HomeIndividualPlacedAttackShow)};
        const handleClickHomeIndividualOffside= () => {
          setHomeIndividualOffsideShow(!HomeIndividualOffsideShow)};
        const handleClickHomeIndividualObtainedPenalty= () => {
          setHomeIndividualObtainedPenaltyShow(!HomeIndividualObtainedPenaltyShow)};
        const handleClickHomeIndividualYellowCard= () => {
          setHomeIndividualYellowCardShow(!HomeIndividualYellowCardShow)};
        const handleClickHomeIndividualRedCard= () => {
          setHomeIndividualRedCardShow(!HomeIndividualRedCardShow)};
    
        // Show/hide efficiency diagram  Home > individual > global dashboard 
          const [HomeIndividualPass_EfficiencyShow, setHomeIndividualPass_EfficiencyShow] = React.useState(true);
          const [HomeIndividualShort_pass_EfficiencyShow, setHomeIndividualShort_pass_EfficiencyShow] = React.useState(true);
          const [HomeIndividualDefensive_1v1_EfficiencyShow, setHomeIndividualDefensive_1v1_EfficiencyShow] = React.useState(true);
          const [HomeIndividualOffensive_1v1_EfficiencyShow, setHomeIndividualOffensive_1v1_EfficiencyShow] = React.useState(true);
          const [HomeIndividualDefensive_Aerial_duel_EfficiencyShow, setHomeIndividualDefensive_Aerial_duel_EfficiencyShow] = React.useState(true);
          const [HomeIndividualOffensive_aerial_duel_EfficiencyShow, setHomeIndividualOffensive_aerial_duel_EfficiencyShow] = React.useState(true);
          const [HomeIndividualCross_EfficiencyShow, setHomeIndividualCross_EfficiencyShow] = React.useState(true);
          const [HomeIndividualLong_pass_EfficiencyShow, setHomeIndividualLong_pass_EfficiencyShow] = React.useState(true);
          const [HomeIndividualSplitting_pass_EfficiencyShow, setHomeIndividualSplitting_pass_EfficiencyShow] = React.useState(true);
          const [HomeIndividualShot_EfficiencyShow, setHomeIndividualShot_EfficiencyShow] = React.useState(true);
          const [HomeIndividualGoalkeeper_Intervention_EfficiencyShow, setHomeIndividualGoalkeeper_Intervention_EfficiencyShow] = React.useState(true);
          const [HomeIndividualSave_EfficiencyShow, setHomeIndividualSave_EfficiencyShow] = React.useState(true);
          const [HomeIndividualThrowIn_EfficiencyShow, setHomeIndividualThrowIn_EfficiencyShow] = React.useState(true);
          const [HomeIndividualFalt_EfficiencyShow, setHomeIndividualFalt_EfficiencyShow] = React.useState(true);
          const [HomeIndividualCorner_EfficiencyShow, setHomeIndividualCorner_EfficiencyShow] = React.useState(true);
          const [HomeIndividualGoalkick_EfficiencyShow, setHomeIndividualGoalkick_EfficiencyShow] = React.useState(true);
          const [HomeIndividualPenalty_EfficiencyShow, setHomeIndividualPenalty_EfficiencyShow] = React.useState(true);
         
          const handleClickHomeIndividualPass_Efficiency= () => {
            setHomeIndividualPass_EfficiencyShow(!HomeIndividualPass_EfficiencyShow)};
          const handleClickHomeIndividualShort_pass_Efficiency= () => {
            setHomeIndividualShort_pass_EfficiencyShow(!HomeIndividualShort_pass_EfficiencyShow)};
          const handleClickHomeIndividualDefensive_1v1_Efficiency= () => {
            setHomeIndividualDefensive_1v1_EfficiencyShow(!HomeIndividualDefensive_1v1_EfficiencyShow)};
          const handleClickHomeIndividualOffensive_1v1_Efficiency= () => {
            setHomeIndividualOffensive_1v1_EfficiencyShow(!HomeIndividualOffensive_1v1_EfficiencyShow)};
          const handleClickHomeIndividualDefensive_Aerial_duel_Efficiency= () => {
            setHomeIndividualDefensive_Aerial_duel_EfficiencyShow(!HomeIndividualDefensive_Aerial_duel_EfficiencyShow)};
          const handleClickHomeIndividualOffensive_aerial_duel_Efficiency= () => {
            setHomeIndividualOffensive_aerial_duel_EfficiencyShow(!HomeIndividualOffensive_aerial_duel_EfficiencyShow)};
          const handleClickHomeIndividualCross_Efficiency= () => {
            setHomeIndividualCross_EfficiencyShow(!HomeIndividualCross_EfficiencyShow)};
          const handleClickHomeIndividualLong_pass_Efficiency= () => {
            setHomeIndividualLong_pass_EfficiencyShow(!HomeIndividualLong_pass_EfficiencyShow)};
          const handleClickHomeIndividualSplitting_pass_Efficiency= () => {
            setHomeIndividualSplitting_pass_EfficiencyShow(!HomeIndividualSplitting_pass_EfficiencyShow)};
          const handleClickHomeIndividualShot_Efficiency= () => {
            setHomeIndividualShot_EfficiencyShow(!HomeIndividualShot_EfficiencyShow)};
          const handleClickHomeIndividualGoalkeeper_Intervention_Efficiency= () => {
            setHomeIndividualGoalkeeper_Intervention_EfficiencyShow(!HomeIndividualGoalkeeper_Intervention_EfficiencyShow)};
          const handleClickHomeIndividualSave_Efficiency= () => {
            setHomeIndividualSave_EfficiencyShow(!HomeIndividualSave_EfficiencyShow)};
          const handleClickHomeIndividualThrowIn_Efficiency= () => {
            setHomeIndividualThrowIn_EfficiencyShow(!HomeIndividualThrowIn_EfficiencyShow)};
          const handleClickHomeIndividualFalt_Efficiency= () => {
            setHomeIndividualFalt_EfficiencyShow(!HomeIndividualFalt_EfficiencyShow)};
          const handleClickHomeIndividualCorner_Efficiency= () => {
            setHomeIndividualCorner_EfficiencyShow(!HomeIndividualCorner_EfficiencyShow)};
          const handleClickHomeIndividualGoalkick_Efficiency= () => {
            setHomeIndividualGoalkick_EfficiencyShow(!HomeIndividualGoalkick_EfficiencyShow)};
          const handleClickHomeIndividualPenalty_Efficiency= () => {
            setHomeIndividualPenalty_EfficiencyShow(!HomeIndividualPenalty_EfficiencyShow)};
      
        // Show/hide Success Rate  Home > individual > global dashboard 
        const [HomeIndividualSucceedDefensiveDualRateShow, setHomeIndividualSucceedDefensiveDualRateShow] = React.useState(true);
        const [HomeIndividualSucceedDefensive1v1RateShow, setHomeIndividualSucceedDefensive1v1RateShow] = React.useState(true);
        const [HomeIndividualSucceedDefensiveAerialDualShow, setHomeIndividualSucceedDefensiveAerialDualShow] = React.useState(true);
        const [HomeIndividualSucceedOffensiveDualRateShow, setHomeIndividualSucceedOffensiveDualRateShow] = React.useState(true);
        const [HomeIndividualSucceedOffensive1v1RateShow, setHomeIndividualSucceedOffensive1v1RateShow] = React.useState(true);
        const [HomeIndividualSucceedOffensiveAerialDualRateShow, setHomeIndividualSucceedOffensiveAerialDualRateShow] = React.useState(true);
        const [HomeIndividualSucceedPassRateShow, setHomeIndividualSucceedPassRateShow] = React.useState(true);
        const [HomeIndividualOffensivePassRateShow, setHomeIndividualOffensivePassRateShow] = React.useState(true);
        const [HomeIndividualSucceedShortPassRateShow, setHomeIndividualSucceedShortPassRateShow] = React.useState(true);
        const [HomeIndividualSucceedLongPassRateShow, setHomeIndividualSucceedLongPassRateShow] = React.useState(true);
        const [HomeIndividualSucceedSplitingPassRateShow, setHomeIndividualSucceedSplitingPassRateShow] = React.useState(true);   
    
        const handleClickHomeIndividualSucceedDefensiveDualRate= () => {
          setHomeIndividualSucceedDefensiveDualRateShow(!HomeIndividualSucceedDefensiveDualRateShow)};
        const handleClickHomeIndividualSucceedDefensive1v1Rate= () => {
          setHomeIndividualSucceedDefensive1v1RateShow(!HomeIndividualSucceedDefensive1v1RateShow)};
        const handleClickHomeIndividualSucceedDefensiveAerialDual= () => {
          setHomeIndividualSucceedDefensiveAerialDualShow(!HomeIndividualSucceedDefensiveAerialDualShow)};
        const handleClickHomeIndividualSucceedOffensiveDualRate= () => {
          setHomeIndividualSucceedOffensiveDualRateShow(!HomeIndividualSucceedOffensiveDualRateShow)};
        const handleClickHomeIndividualSucceedOffensive1v1Rate= () => {
          setHomeIndividualSucceedOffensive1v1RateShow(!HomeIndividualSucceedOffensive1v1RateShow)};
        const handleClickHomeIndividualSucceedOffensiveAerialDualRate= () => {
          setHomeIndividualSucceedOffensiveAerialDualRateShow(!HomeIndividualSucceedOffensiveAerialDualRateShow)};
        const handleClickHomeIndividualSucceedPassRate= () => {
          setHomeIndividualSucceedPassRateShow(!HomeIndividualSucceedPassRateShow)};
        const handleClickHomeIndividualOffensivePassRate= () => {
          setHomeIndividualOffensivePassRateShow(!HomeIndividualOffensivePassRateShow)};
        const handleClickHomeIndividualSucceedShortPassRate= () => {
          setHomeIndividualSucceedShortPassRateShow(!HomeIndividualSucceedShortPassRateShow)};
        const handleClickHomeIndividualSucceedLongPassRate= () => {
          setHomeIndividualSucceedLongPassRateShow(!HomeIndividualSucceedLongPassRateShow)};
        const handleClickHomeIndividualSucceedSplitingPassRate= () => {
          setHomeIndividualSucceedSplitingPassRateShow(!HomeIndividualSucceedSplitingPassRateShow)};

    return (
    <TabContent activeTab={verticalTabsIcons}>
    <TabPane tabId="HomeTeam">
  {/* subcategories begin */}
  <Card>
  <Nav className="nav-pills-info" pills>
  <NavItem>
    <NavLink
      data-toggle="tab"
      href="#pablo"
      className={horizontalTabsD === "Global" ? "active" : ""}
      onClick={(e) =>
        changeActiveTab(e, "horizontalTabsD", "Global")
      }
    >
      Global
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      data-toggle="tab"
      href="#pablo"
      className={horizontalTabsD === "Joueurs" ? "active" : ""}
      onClick={(e) =>
        changeActiveTab(e, "horizontalTabsD", "Joueurs")
      }
    >
      Individuel
    </NavLink>
  </NavItem>
</Nav>
<TabContent className="tab-space" activeTab={horizontalTabsD}>
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
                placeholder="joueur(s) domicile"
                name="HomePlayers"
                closeMenuOnSelect={false}
                isMulti
                value={multipleSelectHomePlayer}
                onChange={(value) => setmultipleSelectHomePlayer(value)}
                options={[
                  {
                    value: "",
                    label: "joueur(s) domicile",
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
            ref={slider4Ref}
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
                    className={horizontalTabsHomeGlobal === "Maps" ? "active" : ""}
                    onClick={(e) =>
                      changeActiveTab(e, "horizontalTabsHomeGlobal", "Maps")
                    }
                  >
                   Maps
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#pablo"
                    className={horizontalTabsHomeGlobal === "Valeurs" ? "active" : ""}
                    onClick={(e) =>
                      changeActiveTab(e, "horizontalTabsHomeGlobal", "Valeurs")
                    }
                  >
                    Valeurs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#pablo"
                    className={horizontalTabsHomeGlobal === "Efficacité" ? "active" : ""}
                    onClick={(e) =>
                      changeActiveTab(e, "horizontalTabsHomeGlobal", "Efficacité")
                    }
                  >
                   Efficacité
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#pablo"
                    className={horizontalTabsHomeGlobal === "Précision" ? "active" : ""}
                    onClick={(e) =>
                      changeActiveTab(e, "horizontalTabsHomeGlobal", "Précision")
                    }
                  >
                    Précision
                  </NavLink>
                </NavItem>
              </Nav>   
              <TabContent activeTab={horizontalTabsHomeGlobal}>
                <TabPane tabId="Maps"> 
                <br></br>                              
                <div className="table-responsive table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeMapping}/>
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
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeAxis}/>
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
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeZone}/>
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
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeBoxMapping}/>
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
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeBoxAxis}/>
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
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeMappingBoxZone}/>
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

                <TabContent activeTab={horizontalTabsHomeGlobal}>
                <TabPane tabId="Valeurs"> 
                <br></br>
                <div className="table-responsive table-full-width">
                <Table>
                    <tbody>
                    <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomePass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeShortPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedShortPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedShortPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeDefensiveDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedDefensiveDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedDefensiveDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeInterception}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIntervention}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeTackle}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeDribble}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedDribble}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedDribble}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeBallSprint}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeDefensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedDefensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedDefensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeOffensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedOffensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedOffensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeCross}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedCross}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedCross}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeLongPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedLongPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedLongPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSplittingPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedSplittingPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedSplittingPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeShot}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedShot}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedShot}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeGoalkeeperIntervention}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedGoalkeeperIntervention}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedGoalkeeperIntervention}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSave}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFailedSave}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedSave}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeThrowIn}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFaltCommited}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFaltConceded}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeObtainedCorner}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeConcededCorner}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeCornerPlayed}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeAssistPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeGoal}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeKeyPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomePartialImbalance}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeTotalImbalance}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeDirectAttack}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeCounterAttack}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomePlacedAttack}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeOffside}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeObtainedPenalty}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeYellowCard}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeRedCard}/>
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

                <TabContent activeTab={horizontalTabsHomeGlobal}>
                <TabPane tabId="Efficacité"> 
                <br></br>
                <div className="table-responsive table-full-width">                                  
                <Table>
                    <tbody>
                    <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomePass_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeShort_pass_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeDefensive_1v1_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeOffensive_1v1_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeDefensive_Aerial_duel_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeOffensive_aerial_duel_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeCross_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeLong_pass_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSplitting_pass_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeShot_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeGoalkeeper_Intervention_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSave_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeThrowIn_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeFalt_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeCorner_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeGoalkick_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomePenalty_Efficiency}/>
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

                <TabContent activeTab={horizontalTabsHomeGlobal}>
                <TabPane tabId="Précision"> 
                <br></br>
                <div className="table-responsive table-full-width">
                <Table>
                    <tbody>
                    <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedDefensiveDualRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedDefensive1v1Rate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedDefensiveAerialDual}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedOffensiveDualRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedOffensive1v1Rate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedOffensiveAerialDualRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedPassRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeOffensivePassRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedShortPassRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedLongPassRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeSucceedSplitingPassRate}/>
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
        {HomeMappingShow ?
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

        {HomeAxisShow ?
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

        {HomeZoneShow ?
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

        {HomeBoxMappingShow ?
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

        {HomeBoxAxisShow ?
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

        {HomeBoxZoneShow ?
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

        {HomePassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFailedPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s) échouée(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s) réussie(s)</h3>
            </Card> 
            </Col>
        }
        {HomeShortPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s) courte(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFailedShortPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s) courte(s) échouée(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedShortPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s) courte(s) réussie(s)</h3>
            </Card> 
            </Col>
        }
        {HomeDefensiveDuelShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Duel(s) défensif(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFailedDefensiveDuelShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Duel(s) défensif(s) échoué(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedDefensiveDuelShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Duel(s) défensif(s) réussi(s)</h3>
            </Card> 
            </Col>
        }
        {HomeInterceptionShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Interception(s)</h3>
            </Card> 
            </Col>
        }
        {HomeInterventionShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Intervention(s)</h3>
            </Card> 
            </Col>
        }
        {HomeTackleShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Tacle(s)</h3>
            </Card> 
            </Col>
        }
        {HomeDribbleShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Dribble(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFailedDribbleShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Dribble(s) échoué(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedDribbleShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Dribble(s) réussi(s)</h3>
            </Card> 
            </Col>
        }
        {HomeBallSprintShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Percussion(s)</h3>
            </Card> 
            </Col>
        }
        {HomeDefensiveAerialDuelShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Duel(s) aérien(s) défensif(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFailedDefensiveAerialDuelShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Duel(s) aérien(s) défensif(s) échoué(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedDefensiveAerialDuelShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Duel(s) aérien(s) défensif(s) réussi(s)</h3>
            </Card> 
            </Col>
        }
        {HomeOffensiveAerialDuelShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Duel(s) aérien(s) offensif(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFailedOffensiveAerialDuelShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Duel(s) aérien(s) offensif(s) échoué(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedOffensiveAerialDuelShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Duel(s) aérien(s) offensif(s) réussi(s)</h3>
            </Card> 
            </Col>
        }
        {HomeCrossShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Centre(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFailedCrossShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Centre(s) échoué(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedCrossShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Centre(s) réussi(s)</h3>
            </Card> 
            </Col>
        }
        {HomeLongPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s) longue(s) </h3>
            </Card> 
            </Col>
        }
        {HomeFailedLongPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s) longue(s)  échouée(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedLongPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s) longue(s)  réussie(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSplittingPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Renversement(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFailedSplittingPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Renversement(s) échoué(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedSplittingPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Renversement(s) réussi(s)</h3>
            </Card> 
            </Col>
        }
        {HomeShotShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Tir(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFailedShotShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Tir(s) échoué(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedShotShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Tir(s) réussi(s)</h3>
            </Card> 
            </Col>
        }
        {HomeGoalkeeperInterventionShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Intervention(s) gardien</h3>
            </Card> 
            </Col>
        }
        {HomeFailedGoalkeeperInterventionShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Intervention(s) gardien échoué(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedGoalkeeperInterventionShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Intervention(s) gardien réussi(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSaveShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Arrêt(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFailedSaveShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Arrêt(s) échoué(s)</h3>
            </Card> 
            </Col>
        }
        {HomeSucceedSaveShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Arrêt(s) réussi(s)</h3>
            </Card> 
            </Col>
        }
        {HomeThrowInShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Touche(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFaltCommitedShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Faute(s) commise(s)</h3>
            </Card> 
            </Col>
        }
        {HomeFaltConcededShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Faute(s) concédée(s)</h3>
            </Card> 
            </Col>
        }
        {HomeObtainedCornerShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Corner(s) obtenu(s)</h3>
            </Card> 
            </Col>
        }
        {HomeConcededCornerShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Corner(s) concédé(s)</h3>
            </Card> 
            </Col>
        }
        {HomeCornerPlayedShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Corner(s) joué(s)</h3>
            </Card> 
            </Col>
        }
        {HomeAssistPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s) décisive(s)</h3>
            </Card> 
            </Col>
        }
        {HomeGoalShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">But(s)</h3>
            </Card> 
            </Col>
        }
        {HomeKeyPassShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Passe(s) clé(s)</h3>
            </Card> 
            </Col>
        }
        {HomePartialImbalanceShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Déséquilibre(s) partiel</h3>
            </Card> 
            </Col>
        }
        {HomeTotalImbalanceShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Déséquilibre(s) total</h3>
            </Card> 
            </Col>
        }
        {HomeDirectAttackShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Attaque(s) direct</h3>
            </Card> 
            </Col>
        }
        {HomeCounterAttackShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Contre-attaque(s)</h3>
            </Card> 
            </Col>
        }
        {HomePlacedAttackShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Attaque(s) placée(s)</h3>
            </Card> 
            </Col>
        }
        {HomeOffsideShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Hors-jeu</h3>
            </Card> 
            </Col>
        }
        {HomeObtainedPenaltyShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Penalty obtenu</h3>
            </Card> 
            </Col>
        }
        {HomeYellowCardShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Carton(s) jaune(s)</h3>
            </Card> 
            </Col>
        }
        {HomeRedCardShow ?
        <></>
        :
        <Col className="card-col" md="6">
        <Card className="card-contributions">
          <CardTitle className="card-value" tag="h1">0000</CardTitle>
          <h3 className="chart-title">Carton(s) rouge(s)</h3>
            </Card> 
            </Col>
        }


        {HomePass_EfficiencyShow ?
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
        {HomeShort_pass_EfficiencyShow ?
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
        {HomeDefensive_1v1_EfficiencyShow ?
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
        {HomeOffensive_1v1_EfficiencyShow ?
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
        {HomeDefensive_Aerial_duel_EfficiencyShow ?
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
        {HomeOffensive_aerial_duel_EfficiencyShow ?
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
        {HomeCross_EfficiencyShow ?
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
        {HomeLong_pass_EfficiencyShow ?
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
        {HomeSplitting_pass_EfficiencyShow ?
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
        {HomeShot_EfficiencyShow ?
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
        {HomeGoalkeeper_Intervention_EfficiencyShow ?
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
        {HomeSave_EfficiencyShow ?
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
        {HomeThrowIn_EfficiencyShow ?
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
        {HomeFalt_EfficiencyShow ?
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
        {HomeCorner_EfficiencyShow ?
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
        {HomeGoalkick_EfficiencyShow ?
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
        {HomePenalty_EfficiencyShow ?
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
           
        {HomeSucceedDefensiveDualRateShow ?
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

           
           {HomeSucceedDefensive1v1RateShow ?
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

           
           {HomeSucceedDefensiveAerialDualShow ?
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

           
           {HomeSucceedOffensiveDualRateShow ?
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

           
           {HomeSucceedOffensive1v1RateShow ?
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

           
           {HomeSucceedOffensiveAerialDualRateShow ?
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

           
           {HomeSucceedPassRateShow ?
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

           
           {HomeOffensivePassRateShow ?
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

           
           {HomeSucceedShortPassRateShow ?
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

           
           {HomeSucceedLongPassRateShow ?
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

           
           {HomeSucceedSplitingPassRateShow ?
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
                placeholder="joueur(s) domicile"
                name="HomePlayers"
                closeMenuOnSelect={false}
                isMulti
                value={multipleSelectHomePlayer}
                onChange={(value) => setmultipleSelectHomePlayer(value)}
                options={[
                  {
                    value: "",
                    label: "joueur(s) domicile",
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
            ref={slider5Ref}
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
                    className={horizontalTabsHomeIndividual === "Maps" ? "active" : ""}
                    onClick={(e) =>
                      changeActiveTab(e, "horizontalTabsHomeIndividual", "Maps")
                    }
                  >
                   Maps
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#pablo"
                    className={horizontalTabsHomeIndividual === "Valeurs" ? "active" : ""}
                    onClick={(e) =>
                      changeActiveTab(e, "horizontalTabsHomeIndividual", "Valeurs")
                    }
                  >
                    Valeurs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#pablo"
                    className={horizontalTabsHomeIndividual === "Efficacité" ? "active" : ""}
                    onClick={(e) =>
                      changeActiveTab(e, "horizontalTabsHomeIndividual", "Efficacité")
                    }
                  >
                   Efficacité
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#pablo"
                    className={horizontalTabsHomeIndividual === "Précision" ? "active" : ""}
                    onClick={(e) =>
                      changeActiveTab(e, "horizontalTabsHomeIndividual", "Précision")
                    }
                  >
                    Précision
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={horizontalTabsHomeIndividual}>
                <TabPane tabId="Maps"> 
                <br></br>                              
                <div className="table-responsive table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeIndividualMapping}/>
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
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeIndividualAxis}/>
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
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeIndividualZone}/>
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
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeIndividualBoxMapping}/>
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
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeIndividualBoxAxis}/>
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
                              <Input defaultValue="" type="checkbox" onClick={handleClickHomeIndividualMappingBoxZone}/>
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

                <TabContent activeTab={horizontalTabsHomeIndividual}>
                <TabPane tabId="Valeurs"> 
                <br></br>
                <div className="table-responsive table-full-width">
                <Table>
                    <tbody>
                    <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualShortPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedShortPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedShortPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualDefensiveDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedDefensiveDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedDefensiveDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualInterception}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualIntervention}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualTackle}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualDribble}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedDribble}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedDribble}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualBallSprint}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualDefensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedDefensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedDefensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualOffensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedOffensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedOffensiveAerialDuel}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualCross}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedCross}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedCross}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualLongPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedLongPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedLongPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSplittingPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedSplittingPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedSplittingPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualShot}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedShot}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedShot}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualGoalkeeperIntervention}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedGoalkeeperIntervention}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedGoalkeeperIntervention}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSave}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFailedSave}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedSave}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualThrowIn}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFaltCommited}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFaltConceded}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualObtainedCorner}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualConcededCorner}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualCornerPlayed}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualAssistPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualGoal}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualKeyPass}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualPartialImbalance}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualTotalImbalance}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualDirectAttack}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualCounterAttack}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualPlacedAttack}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualOffside}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualObtainedPenalty}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualYellowCard}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualRedCard}/>
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

                <TabContent activeTab={horizontalTabsHomeIndividual}>
                <TabPane tabId="Efficacité"> 
                <br></br>
                <div className="table-responsive table-full-width">                                  
                <Table>
                    <tbody>
                    <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualPass_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualShort_pass_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualDefensive_1v1_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualOffensive_1v1_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualDefensive_Aerial_duel_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualOffensive_aerial_duel_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualCross_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualLong_pass_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSplitting_pass_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualShot_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualGoalkeeper_Intervention_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSave_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualThrowIn_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualFalt_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualCorner_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualGoalkick_Efficiency}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualPenalty_Efficiency}/>
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

                <TabContent activeTab={horizontalTabsHomeIndividual}>
                <TabPane tabId="Précision"> 
                <br></br>
                <div className="table-responsive table-full-width">
                <Table>
                    <tbody>
                    <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedDefensiveDualRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedDefensive1v1Rate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedDefensiveAerialDual}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedOffensiveDualRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedOffensive1v1Rate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedOffensiveAerialDualRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedPassRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualOffensivePassRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedShortPassRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedLongPassRate}/>
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
                              <Input defaultValue=""  type="checkbox"  onClick={handleClickHomeIndividualSucceedSplitingPassRate}/>
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
        {HomeIndividualMappingShow ?
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

        {HomeIndividualAxisShow ?
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

        {HomeIndividualZoneShow ?
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

        {HomeIndividualBoxMappingShow ?
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

        {HomeIndividualBoxAxisShow ?
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

        {HomeIndividualBoxZoneShow ?
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

        {HomeIndividualPassShow ?
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
        {HomeIndividualFailedPassShow ?
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
        {HomeIndividualSucceedPassShow ?
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
        {HomeIndividualShortPassShow ?
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
        {HomeIndividualFailedShortPassShow ?
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
        {HomeIndividualSucceedShortPassShow ?
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
        {HomeIndividualDefensiveDuelShow ?
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
        {HomeIndividualFailedDefensiveDuelShow ?
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
        {HomeIndividualSucceedDefensiveDuelShow ?
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
        {HomeIndividualInterceptionShow ?
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
        {HomeIndividualInterventionShow ?
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
        {HomeIndividualTackleShow ?
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
        {HomeIndividualDribbleShow ?
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
        {HomeIndividualFailedDribbleShow ?
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
        {HomeIndividualSucceedDribbleShow ?
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
        {HomeIndividualBallSprintShow ?
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
        {HomeIndividualDefensiveAerialDuelShow ?
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
        {HomeIndividualFailedDefensiveAerialDuelShow ?
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
        {HomeIndividualSucceedDefensiveAerialDuelShow ?
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
        {HomeIndividualOffensiveAerialDuelShow ?
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
        {HomeIndividualFailedOffensiveAerialDuelShow ?
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
        {HomeIndividualSucceedOffensiveAerialDuelShow ?
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
        {HomeIndividualCrossShow ?
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
        {HomeIndividualFailedCrossShow ?
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
        {HomeIndividualSucceedCrossShow ?
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
        {HomeIndividualLongPassShow ?
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
        {HomeIndividualFailedLongPassShow ?
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
        {HomeIndividualSucceedLongPassShow ?
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
        {HomeIndividualSplittingPassShow ?
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
        {HomeIndividualFailedSplittingPassShow ?
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
        {HomeIndividualSucceedSplittingPassShow ?
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
        {HomeIndividualShotShow ?
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
        {HomeIndividualFailedShotShow ?
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
        {HomeIndividualSucceedShotShow ?
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
        {HomeIndividualGoalkeeperInterventionShow ?
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
        {HomeIndividualFailedGoalkeeperInterventionShow ?
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
        {HomeIndividualSucceedGoalkeeperInterventionShow ?
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
        {HomeIndividualSaveShow ?
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
        {HomeIndividualFailedSaveShow ?
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
        {HomeIndividualSucceedSaveShow ?
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
        {HomeIndividualThrowInShow ?
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
        {HomeIndividualFaltCommitedShow ?
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
        {HomeIndividualFaltConcededShow ?
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
        {HomeIndividualObtainedCornerShow ?
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
        {HomeIndividualConcededCornerShow ?
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
        {HomeIndividualCornerPlayedShow ?
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
        {HomeIndividualAssistPassShow ?
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
        {HomeIndividualGoalShow ?
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
        {HomeIndividualKeyPassShow ?
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
        {HomeIndividualPartialImbalanceShow ?
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
        {HomeIndividualTotalImbalanceShow ?
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
        {HomeIndividualDirectAttackShow ?
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
        {HomeIndividualCounterAttackShow ?
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
        {HomeIndividualPlacedAttackShow ?
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
        {HomeIndividualOffsideShow ?
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
        {HomeIndividualObtainedPenaltyShow ?
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
        {HomeIndividualYellowCardShow ?
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
        {HomeIndividualRedCardShow ?
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


        {HomeIndividualPass_EfficiencyShow ?
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
        {HomeIndividualShort_pass_EfficiencyShow ?
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
        {HomeIndividualDefensive_1v1_EfficiencyShow ?
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
        {HomeIndividualOffensive_1v1_EfficiencyShow ?
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
        {HomeIndividualDefensive_Aerial_duel_EfficiencyShow ?
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
        {HomeIndividualOffensive_aerial_duel_EfficiencyShow ?
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
        {HomeIndividualCross_EfficiencyShow ?
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
        {HomeIndividualLong_pass_EfficiencyShow ?
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
        {HomeIndividualSplitting_pass_EfficiencyShow ?
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
        {HomeIndividualShot_EfficiencyShow ?
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
        {HomeIndividualGoalkeeper_Intervention_EfficiencyShow ?
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
        {HomeIndividualSave_EfficiencyShow ?
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
        {HomeIndividualThrowIn_EfficiencyShow ?
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
        {HomeIndividualFalt_EfficiencyShow ?
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
        {HomeIndividualCorner_EfficiencyShow ?
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
        {HomeIndividualGoalkick_EfficiencyShow ?
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
        {HomeIndividualPenalty_EfficiencyShow ?
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
           
        {HomeIndividualSucceedDefensiveDualRateShow ?
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

           
           {HomeIndividualSucceedDefensive1v1RateShow ?
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

           
           {HomeIndividualSucceedDefensiveAerialDualShow ?
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

           
           {HomeIndividualSucceedOffensiveDualRateShow ?
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

           
           {HomeIndividualSucceedOffensive1v1RateShow ?
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

           
           {HomeIndividualSucceedOffensiveAerialDualRateShow ?
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

           
           {HomeIndividualSucceedPassRateShow ?
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

           
           {HomeIndividualOffensivePassRateShow ?
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

           
           {HomeIndividualSucceedShortPassRateShow ?
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

           
           {HomeIndividualSucceedLongPassRateShow ?
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

           
           {HomeIndividualSucceedSplitingPassRateShow ?
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
    
    export default HomeDashboard;