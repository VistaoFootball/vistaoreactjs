import React from "react";
import Select from "react-select";
import Slider from "nouislider";
import "assets/css/charts-display.css"
import { Line, Bar, Bubble, HorizontalBar } from "react-chartjs-2";
import {
  PitchBubbleChart,
  BoxBubbleChart,
  BoxAxisChart,
  BoxZoneChart,
  PitchAxisChart,
  PitchZoneChart,
  SingleLineChart,
  MultipleLineChart,


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

function MonitoringOpponentDashboard() { 
    const [horizontalTabsOpponentGlobal, sethorizontalTabsOpponentGlobal] = React.useState("Maps"); 
    const [horizontalTabsOpponentIndividual, sethorizontalTabsOpponentIndividual] = React.useState("Maps");  
    const [verticalTabsIcons, setverticalTabsIcons] = React.useState("MyOpponent");
    const [openedCollapseDataFilters, setopenedCollapseDataFilters] = React.useState(false);
    const [multipleSelectPitchGround, setmultipleSelectPitchGround] = React.useState(null);
    const [multipleSelectPitchSpeed, setmultipleSelectPitchSpeed] = React.useState(null);
    const [multipleSelectOpponentTacticalSystem, setmultipleSelectOpponentTacticalSystem] = React.useState(null);
    const [multipleSelectMyOpponentTacticalSystem, setmultipleSelectMyOpponentTacticalSystem] = React.useState(null);
    const [multipleSelectContext, setmultipleSelectContext] = React.useState(null);
    const [multipleSelectMyOpponent, setmultipleSelectMyOpponent] = React.useState(null);
    const [multipleSelectVideoTitle, setmultipleSelectVideoTitle] = React.useState(null);
    const [multipleSelectMyOpponentPlayer, setmultipleSelectMyOpponentPlayer] = React.useState(null);
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
  

  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {

      case "horizontalTabsE":
          sethorizontalTabsE(tabName);
          break;
      case "horizontalTabsOpponentGlobal":
          sethorizontalTabsOpponentGlobal(tabName);
          break;      
      case "horizontalTabsOpponentIndividual":
          sethorizontalTabsOpponentIndividual(tabName);
          break;   
      case "verticalTabsIcons":
        setverticalTabsIcons(tabName);
        break;
      default:
        break;
    }
  };
         // Show/hide maps Opponent > global dashboard
         const [horizontalTabsE, sethorizontalTabsE] = React.useState("Global");  
         const [OpponentMappingShow, setOpponentMappingShow] = React.useState(true);
         const [OpponentAxisShow, setOpponentAxisShow] = React.useState(true);
         const [OpponentZoneShow, setOpponentZoneShow] = React.useState(true);
         const [OpponentBoxMappingShow, setOpponentBoxMappingShow] = React.useState(true);
         const [OpponentBoxAxisShow, setOpponentBoxAxisShow] = React.useState(true);
         const [OpponentBoxZoneShow, setOpponentBoxZoneShow] = React.useState(true);
       
         const handleClickOpponentMapping = () => {
           setOpponentMappingShow(!OpponentMappingShow)}
         const handleClickOpponentAxis = () => {
           setOpponentAxisShow(!OpponentAxisShow)}
         const handleClickOpponentZone = () => {
           setOpponentZoneShow(!OpponentZoneShow)}
         const handleClickOpponentBoxMapping = () => {
           setOpponentBoxMappingShow(!OpponentBoxMappingShow)}
         const handleClickOpponentBoxAxis = () => {
           setOpponentBoxAxisShow(!OpponentBoxAxisShow)}
         const handleClickOpponentMappingBoxZone = () => {
           setOpponentBoxZoneShow(!OpponentBoxZoneShow)}
     
         // Show/hide cards Opponent > global dashboard 
         const [OpponentPassShow, setOpponentPassShow] = React.useState(true);
         const [OpponentFailedPassShow, setOpponentFailedPassShow] = React.useState(true);
         const [OpponentSucceedPassShow, setOpponentSucceedPassShow] = React.useState(true);
         const [OpponentShortPassShow, setOpponentShortPassShow] = React.useState(true);
         const [OpponentFailedShortPassShow, setOpponentFailedShortPassShow] = React.useState(true);
         const [OpponentSucceedShortPassShow, setOpponentSucceedShortPassShow] = React.useState(true);
         const [OpponentDefensiveDuelShow, setOpponentDefensiveDuelShow] = React.useState(true);
         const [OpponentFailedDefensiveDuelShow, setOpponentFailedDefensiveDuelShow] = React.useState(true);
         const [OpponentSucceedDefensiveDuelShow, setOpponentSucceedDefensiveDuelShow] = React.useState(true);
         const [OpponentInterceptionShow, setOpponentInterceptionShow] = React.useState(true);
         const [OpponentInterventionShow, setOpponentInterventionShow] = React.useState(true);
         const [OpponentTackleShow, setOpponentTackleShow] = React.useState(true);
         const [OpponentDribbleShow, setOpponentDribbleShow] = React.useState(true);
         const [OpponentFailedDribbleShow, setOpponentFailedDribbleShow] = React.useState(true);
         const [OpponentSucceedDribbleShow, setOpponentSucceedDribbleShow] = React.useState(true);
         const [OpponentBallSprintShow, setOpponentBallSprintShow] = React.useState(true);
         const [OpponentDefensiveAerialDuelShow, setOpponentDefensiveAerialDuelShow] = React.useState(true);
         const [OpponentFailedDefensiveAerialDuelShow, setOpponentFailedDefensiveAerialDuelShow] = React.useState(true);
         const [OpponentSucceedDefensiveAerialDuelShow, setOpponentSucceedDefensiveAerialDuelShow] = React.useState(true);
         const [OpponentOffensiveAerialDuelShow, setOpponentOffensiveAerialDuelShow] = React.useState(true);
         const [OpponentFailedOffensiveAerialDuelShow, setOpponentFailedOffensiveAerialDuelShow] = React.useState(true);
         const [OpponentSucceedOffensiveAerialDuelShow, setOpponentSucceedOffensiveAerialDuelShow] = React.useState(true);
         const [OpponentCrossShow, setOpponentCrossShow] = React.useState(true);
         const [OpponentFailedCrossShow, setOpponentFailedCrossShow] = React.useState(true);
         const [OpponentSucceedCrossShow, setOpponentSucceedCrossShow] = React.useState(true);
         const [OpponentLongPassShow, setOpponentLongPassShow] = React.useState(true);
         const [OpponentFailedLongPassShow, setOpponentFailedLongPassShow] = React.useState(true);
         const [OpponentSucceedLongPassShow, setOpponentSucceedLongPassShow] = React.useState(true);
         const [OpponentSplittingPassShow, setOpponentSplittingPassShow] = React.useState(true);
         const [OpponentFailedSplittingPassShow, setOpponentFailedSplittingPassShow] = React.useState(true);
         const [OpponentSucceedSplittingPassShow, setOpponentSucceedSplittingPassShow] = React.useState(true);
         const [OpponentShotShow, setOpponentShotShow] = React.useState(true);
         const [OpponentFailedShotShow, setOpponentFailedShotShow] = React.useState(true);
         const [OpponentSucceedShotShow, setOpponentSucceedShotShow] = React.useState(true);
         const [OpponentGoalkeeperInterventionShow, setOpponentGoalkeeperInterventionShow] = React.useState(true);
         const [OpponentFailedGoalkeeperInterventionShow, setOpponentFailedGoalkeeperInterventionShow] = React.useState(true);
         const [OpponentSucceedGoalkeeperInterventionShow, setOpponentSucceedGoalkeeperInterventionShow] = React.useState(true);
         const [OpponentSaveShow, setOpponentSaveShow] = React.useState(true);
         const [OpponentFailedSaveShow, setOpponentFailedSaveShow] = React.useState(true);
         const [OpponentSucceedSaveShow, setOpponentSucceedSaveShow] = React.useState(true);
         const [OpponentThrowInShow, setOpponentThrowInShow] = React.useState(true);
         const [OpponentFaltCommitedShow, setOpponentFaltCommitedShow] = React.useState(true);
         const [OpponentFaltConcededShow, setOpponentFaltConcededShow] = React.useState(true);
         const [OpponentObtainedCornerShow, setOpponentObtainedCornerShow] = React.useState(true);
         const [OpponentConcededCornerShow, setOpponentConcededCornerShow] = React.useState(true);
         const [OpponentCornerPlayedShow, setOpponentCornerPlayedShow] = React.useState(true);
         const [OpponentAssistPassShow, setOpponentAssistPassShow] = React.useState(true);
         const [OpponentGoalShow, setOpponentGoalShow] = React.useState(true);
         const [OpponentKeyPassShow, setOpponentKeyPassShow] = React.useState(true);
         const [OpponentPartialImbalanceShow, setOpponentPartialImbalanceShow] = React.useState(true);
         const [OpponentTotalImbalanceShow, setOpponentTotalImbalanceShow] = React.useState(true);
         const [OpponentDirectAttackShow, setOpponentDirectAttackShow] = React.useState(true);
         const [OpponentCounterAttackShow, setOpponentCounterAttackShow] = React.useState(true);
         const [OpponentPlacedAttackShow, setOpponentPlacedAttackShow] = React.useState(true);
         const [OpponentOffsideShow, setOpponentOffsideShow] = React.useState(true);
         const [OpponentObtainedPenaltyShow, setOpponentObtainedPenaltyShow] = React.useState(true);
         const [OpponentYellowCardShow, setOpponentYellowCardShow] = React.useState(true);
         const [OpponentRedCardShow, setOpponentRedCardShow] = React.useState(true);
        
         const handleClickOpponentPass= () => {
           setOpponentPassShow(!OpponentPassShow)};
         const handleClickOpponentFailedPass= () => {
           setOpponentFailedPassShow(!OpponentFailedPassShow)};
         const handleClickOpponentSucceedPass= () => {
           setOpponentSucceedPassShow(!OpponentSucceedPassShow)};
         const handleClickOpponentShortPass= () => {
           setOpponentShortPassShow(!OpponentShortPassShow)};
         const handleClickOpponentFailedShortPass= () => {
           setOpponentFailedShortPassShow(!OpponentFailedShortPassShow)};
         const handleClickOpponentSucceedShortPass= () => {
           setOpponentSucceedShortPassShow(!OpponentSucceedShortPassShow)};
         const handleClickOpponentDefensiveDuel= () => {
           setOpponentDefensiveDuelShow(!OpponentDefensiveDuelShow)};
         const handleClickOpponentFailedDefensiveDuel= () => {
           setOpponentFailedDefensiveDuelShow(!OpponentFailedDefensiveDuelShow)};
         const handleClickOpponentSucceedDefensiveDuel= () => {
           setOpponentSucceedDefensiveDuelShow(!OpponentSucceedDefensiveDuelShow)};
         const handleClickOpponentInterception= () => {
           setOpponentInterceptionShow(!OpponentInterceptionShow)};
         const handleClickOpponentIntervention= () => {
           setOpponentInterventionShow(!OpponentInterventionShow)};
         const handleClickOpponentTackle= () => {
           setOpponentTackleShow(!OpponentTackleShow)};
         const handleClickOpponentDribble= () => {
           setOpponentDribbleShow(!OpponentDribbleShow)};
         const handleClickOpponentFailedDribble= () => {
           setOpponentFailedDribbleShow(!OpponentFailedDribbleShow)};
         const handleClickOpponentSucceedDribble= () => {
           setOpponentSucceedDribbleShow(!OpponentSucceedDribbleShow)};
         const handleClickOpponentBallSprint= () => {
           setOpponentBallSprintShow(!OpponentBallSprintShow)};
         const handleClickOpponentDefensiveAerialDuel= () => {
           setOpponentDefensiveAerialDuelShow(!OpponentDefensiveAerialDuelShow)};
         const handleClickOpponentFailedDefensiveAerialDuel= () => {
           setOpponentFailedDefensiveAerialDuelShow(!OpponentFailedDefensiveAerialDuelShow)};
         const handleClickOpponentSucceedDefensiveAerialDuel= () => {
           setOpponentSucceedDefensiveAerialDuelShow(!OpponentSucceedDefensiveAerialDuelShow)};
         const handleClickOpponentOffensiveAerialDuel= () => {
           setOpponentOffensiveAerialDuelShow(!OpponentOffensiveAerialDuelShow)};
         const handleClickOpponentFailedOffensiveAerialDuel= () => {
           setOpponentFailedOffensiveAerialDuelShow(!OpponentFailedOffensiveAerialDuelShow)};
         const handleClickOpponentSucceedOffensiveAerialDuel= () => {
           setOpponentSucceedOffensiveAerialDuelShow(!OpponentSucceedOffensiveAerialDuelShow)};
         const handleClickOpponentCross= () => {
           setOpponentCrossShow(!OpponentCrossShow)};
         const handleClickOpponentFailedCross= () => {
           setOpponentFailedCrossShow(!OpponentFailedCrossShow)};
         const handleClickOpponentSucceedCross= () => {
           setOpponentSucceedCrossShow(!OpponentSucceedCrossShow)};
         const handleClickOpponentLongPass= () => {
           setOpponentLongPassShow(!OpponentLongPassShow)};
         const handleClickOpponentFailedLongPass= () => {
           setOpponentFailedLongPassShow(!OpponentFailedLongPassShow)};
         const handleClickOpponentSucceedLongPass= () => {
           setOpponentSucceedLongPassShow(!OpponentSucceedLongPassShow)};
         const handleClickOpponentSplittingPass= () => {
           setOpponentSplittingPassShow(!OpponentSplittingPassShow)};
         const handleClickOpponentFailedSplittingPass= () => {
           setOpponentFailedSplittingPassShow(!OpponentFailedSplittingPassShow)};
         const handleClickOpponentSucceedSplittingPass= () => {
           setOpponentSucceedSplittingPassShow(!OpponentSucceedSplittingPassShow)};
         const handleClickOpponentShot= () => {
           setOpponentShotShow(!OpponentShotShow)};
         const handleClickOpponentFailedShot= () => {
           setOpponentFailedShotShow(!OpponentFailedShotShow)};
         const handleClickOpponentSucceedShot= () => {
           setOpponentSucceedShotShow(!OpponentSucceedShotShow)};
         const handleClickOpponentGoalkeeperIntervention= () => {
           setOpponentGoalkeeperInterventionShow(!OpponentGoalkeeperInterventionShow)};
         const handleClickOpponentFailedGoalkeeperIntervention= () => {
           setOpponentFailedGoalkeeperInterventionShow(!OpponentFailedGoalkeeperInterventionShow)};
         const handleClickOpponentSucceedGoalkeeperIntervention= () => {
           setOpponentSucceedGoalkeeperInterventionShow(!OpponentSucceedGoalkeeperInterventionShow)};
         const handleClickOpponentSave= () => {
           setOpponentSaveShow(!OpponentSaveShow)};
         const handleClickOpponentFailedSave= () => {
           setOpponentFailedSaveShow(!OpponentFailedSaveShow)};
         const handleClickOpponentSucceedSave= () => {
           setOpponentSucceedSaveShow(!OpponentSucceedSaveShow)};
         const handleClickOpponentThrowIn= () => {
           setOpponentThrowInShow(!OpponentThrowInShow)};
         const handleClickOpponentFaltCommited= () => {
           setOpponentFaltCommitedShow(!OpponentFaltCommitedShow)};
         const handleClickOpponentFaltConceded= () => {
           setOpponentFaltConcededShow(!OpponentFaltConcededShow)};
         const handleClickOpponentObtainedCorner= () => {
           setOpponentObtainedCornerShow(!OpponentObtainedCornerShow)};
         const handleClickOpponentConcededCorner= () => {
           setOpponentConcededCornerShow(!OpponentConcededCornerShow)};
         const handleClickOpponentCornerPlayed= () => {
           setOpponentCornerPlayedShow(!OpponentCornerPlayedShow)};
         const handleClickOpponentAssistPass= () => {
           setOpponentAssistPassShow(!OpponentAssistPassShow)};
         const handleClickOpponentGoal= () => {
           setOpponentGoalShow(!OpponentGoalShow)};
         const handleClickOpponentKeyPass= () => {
           setOpponentKeyPassShow(!OpponentKeyPassShow)};
         const handleClickOpponentPartialImbalance= () => {
           setOpponentPartialImbalanceShow(!OpponentPartialImbalanceShow)};
         const handleClickOpponentTotalImbalance= () => {
           setOpponentTotalImbalanceShow(!OpponentTotalImbalanceShow)};
         const handleClickOpponentDirectAttack= () => {
           setOpponentDirectAttackShow(!OpponentDirectAttackShow)};
         const handleClickOpponentCounterAttack= () => {
           setOpponentCounterAttackShow(!OpponentCounterAttackShow)};
         const handleClickOpponentPlacedAttack= () => {
           setOpponentPlacedAttackShow(!OpponentPlacedAttackShow)};
         const handleClickOpponentOffside= () => {
           setOpponentOffsideShow(!OpponentOffsideShow)};
         const handleClickOpponentObtainedPenalty= () => {
           setOpponentObtainedPenaltyShow(!OpponentObtainedPenaltyShow)};
         const handleClickOpponentYellowCard= () => {
           setOpponentYellowCardShow(!OpponentYellowCardShow)};
         const handleClickOpponentRedCard= () => {
           setOpponentRedCardShow(!OpponentRedCardShow)};
     
         // Show/hide efficiency diagram Opponent > global dashboard 
           const [OpponentPass_EfficiencyShow, setOpponentPass_EfficiencyShow] = React.useState(true);
           const [OpponentShort_pass_EfficiencyShow, setOpponentShort_pass_EfficiencyShow] = React.useState(true);
           const [OpponentDefensive_1v1_EfficiencyShow, setOpponentDefensive_1v1_EfficiencyShow] = React.useState(true);
           const [OpponentOffensive_1v1_EfficiencyShow, setOpponentOffensive_1v1_EfficiencyShow] = React.useState(true);
           const [OpponentDefensive_Aerial_duel_EfficiencyShow, setOpponentDefensive_Aerial_duel_EfficiencyShow] = React.useState(true);
           const [OpponentOffensive_aerial_duel_EfficiencyShow, setOpponentOffensive_aerial_duel_EfficiencyShow] = React.useState(true);
           const [OpponentCross_EfficiencyShow, setOpponentCross_EfficiencyShow] = React.useState(true);
           const [OpponentLong_pass_EfficiencyShow, setOpponentLong_pass_EfficiencyShow] = React.useState(true);
           const [OpponentSplitting_pass_EfficiencyShow, setOpponentSplitting_pass_EfficiencyShow] = React.useState(true);
           const [OpponentShot_EfficiencyShow, setOpponentShot_EfficiencyShow] = React.useState(true);
           const [OpponentGoalkeeper_Intervention_EfficiencyShow, setOpponentGoalkeeper_Intervention_EfficiencyShow] = React.useState(true);
           const [OpponentSave_EfficiencyShow, setOpponentSave_EfficiencyShow] = React.useState(true);
           const [OpponentThrowIn_EfficiencyShow, setOpponentThrowIn_EfficiencyShow] = React.useState(true);
           const [OpponentFalt_EfficiencyShow, setOpponentFalt_EfficiencyShow] = React.useState(true);
           const [OpponentCorner_EfficiencyShow, setOpponentCorner_EfficiencyShow] = React.useState(true);
           const [OpponentGoalkick_EfficiencyShow, setOpponentGoalkick_EfficiencyShow] = React.useState(true);
           const [OpponentPenalty_EfficiencyShow, setOpponentPenalty_EfficiencyShow] = React.useState(true);
          
           const handleClickOpponentPass_Efficiency= () => {
             setOpponentPass_EfficiencyShow(!OpponentPass_EfficiencyShow)};
           const handleClickOpponentShort_pass_Efficiency= () => {
             setOpponentShort_pass_EfficiencyShow(!OpponentShort_pass_EfficiencyShow)};
           const handleClickOpponentDefensive_1v1_Efficiency= () => {
             setOpponentDefensive_1v1_EfficiencyShow(!OpponentDefensive_1v1_EfficiencyShow)};
           const handleClickOpponentOffensive_1v1_Efficiency= () => {
             setOpponentOffensive_1v1_EfficiencyShow(!OpponentOffensive_1v1_EfficiencyShow)};
           const handleClickOpponentDefensive_Aerial_duel_Efficiency= () => {
             setOpponentDefensive_Aerial_duel_EfficiencyShow(!OpponentDefensive_Aerial_duel_EfficiencyShow)};
           const handleClickOpponentOffensive_aerial_duel_Efficiency= () => {
             setOpponentOffensive_aerial_duel_EfficiencyShow(!OpponentOffensive_aerial_duel_EfficiencyShow)};
           const handleClickOpponentCross_Efficiency= () => {
             setOpponentCross_EfficiencyShow(!OpponentCross_EfficiencyShow)};
           const handleClickOpponentLong_pass_Efficiency= () => {
             setOpponentLong_pass_EfficiencyShow(!OpponentLong_pass_EfficiencyShow)};
           const handleClickOpponentSplitting_pass_Efficiency= () => {
             setOpponentSplitting_pass_EfficiencyShow(!OpponentSplitting_pass_EfficiencyShow)};
           const handleClickOpponentShot_Efficiency= () => {
             setOpponentShot_EfficiencyShow(!OpponentShot_EfficiencyShow)};
           const handleClickOpponentGoalkeeper_Intervention_Efficiency= () => {
             setOpponentGoalkeeper_Intervention_EfficiencyShow(!OpponentGoalkeeper_Intervention_EfficiencyShow)};
           const handleClickOpponentSave_Efficiency= () => {
             setOpponentSave_EfficiencyShow(!OpponentSave_EfficiencyShow)};
           const handleClickOpponentThrowIn_Efficiency= () => {
             setOpponentThrowIn_EfficiencyShow(!OpponentThrowIn_EfficiencyShow)};
           const handleClickOpponentFalt_Efficiency= () => {
             setOpponentFalt_EfficiencyShow(!OpponentFalt_EfficiencyShow)};
           const handleClickOpponentCorner_Efficiency= () => {
             setOpponentCorner_EfficiencyShow(!OpponentCorner_EfficiencyShow)};
           const handleClickOpponentGoalkick_Efficiency= () => {
             setOpponentGoalkick_EfficiencyShow(!OpponentGoalkick_EfficiencyShow)};
           const handleClickOpponentPenalty_Efficiency= () => {
             setOpponentPenalty_EfficiencyShow(!OpponentPenalty_EfficiencyShow)};
       
         // Show/hide Success Rate Opponent > global dashboard 
         const [OpponentSucceedDefensiveDualRateShow, setOpponentSucceedDefensiveDualRateShow] = React.useState(true);
         const [OpponentSucceedDefensive1v1RateShow, setOpponentSucceedDefensive1v1RateShow] = React.useState(true);
         const [OpponentSucceedDefensiveAerialDualShow, setOpponentSucceedDefensiveAerialDualShow] = React.useState(true);
         const [OpponentSucceedOffensiveDualRateShow, setOpponentSucceedOffensiveDualRateShow] = React.useState(true);
         const [OpponentSucceedOffensive1v1RateShow, setOpponentSucceedOffensive1v1RateShow] = React.useState(true);
         const [OpponentSucceedOffensiveAerialDualRateShow, setOpponentSucceedOffensiveAerialDualRateShow] = React.useState(true);
         const [OpponentSucceedPassRateShow, setOpponentSucceedPassRateShow] = React.useState(true);
         const [OpponentOffensivePassRateShow, setOpponentOffensivePassRateShow] = React.useState(true);
         const [OpponentSucceedShortPassRateShow, setOpponentSucceedShortPassRateShow] = React.useState(true);
         const [OpponentSucceedLongPassRateShow, setOpponentSucceedLongPassRateShow] = React.useState(true);
         const [OpponentSucceedSplitingPassRateShow, setOpponentSucceedSplitingPassRateShow] = React.useState(true);   
     
         const handleClickOpponentSucceedDefensiveDualRate= () => {
           setOpponentSucceedDefensiveDualRateShow(!OpponentSucceedDefensiveDualRateShow)};
         const handleClickOpponentSucceedDefensive1v1Rate= () => {
           setOpponentSucceedDefensive1v1RateShow(!OpponentSucceedDefensive1v1RateShow)};
         const handleClickOpponentSucceedDefensiveAerialDual= () => {
           setOpponentSucceedDefensiveAerialDualShow(!OpponentSucceedDefensiveAerialDualShow)};
         const handleClickOpponentSucceedOffensiveDualRate= () => {
           setOpponentSucceedOffensiveDualRateShow(!OpponentSucceedOffensiveDualRateShow)};
         const handleClickOpponentSucceedOffensive1v1Rate= () => {
           setOpponentSucceedOffensive1v1RateShow(!OpponentSucceedOffensive1v1RateShow)};
         const handleClickOpponentSucceedOffensiveAerialDualRate= () => {
           setOpponentSucceedOffensiveAerialDualRateShow(!OpponentSucceedOffensiveAerialDualRateShow)};
         const handleClickOpponentSucceedPassRate= () => {
           setOpponentSucceedPassRateShow(!OpponentSucceedPassRateShow)};
         const handleClickOpponentOffensivePassRate= () => {
           setOpponentOffensivePassRateShow(!OpponentOffensivePassRateShow)};
         const handleClickOpponentSucceedShortPassRate= () => {
           setOpponentSucceedShortPassRateShow(!OpponentSucceedShortPassRateShow)};
         const handleClickOpponentSucceedLongPassRate= () => {
           setOpponentSucceedLongPassRateShow(!OpponentSucceedLongPassRateShow)};
         const handleClickOpponentSucceedSplitingPassRate= () => {
           setOpponentSucceedSplitingPassRateShow(!OpponentSucceedSplitingPassRateShow)};
     
     
         // Show/hide maps Opponent > individual > global dashboard
       
         const [OpponentIndividualMappingShow, setOpponentIndividualMappingShow] = React.useState(true);
         const [OpponentIndividualAxisShow, setOpponentIndividualAxisShow] = React.useState(true);
         const [OpponentIndividualZoneShow, setOpponentIndividualZoneShow] = React.useState(true);
         const [OpponentIndividualBoxMappingShow, setOpponentIndividualBoxMappingShow] = React.useState(true);
         const [OpponentIndividualBoxAxisShow, setOpponentIndividualBoxAxisShow] = React.useState(true);
         const [OpponentIndividualBoxZoneShow, setOpponentIndividualBoxZoneShow] = React.useState(true);
     
       
         const handleClickOpponentIndividualMapping = () => {
           setOpponentIndividualMappingShow(!OpponentIndividualMappingShow)}
         const handleClickOpponentIndividualAxis = () => {
           setOpponentIndividualAxisShow(!OpponentIndividualAxisShow)}
         const handleClickOpponentIndividualZone = () => {
           setOpponentIndividualZoneShow(!OpponentIndividualZoneShow)}
         const handleClickOpponentIndividualBoxMapping = () => {
           setOpponentIndividualBoxMappingShow(!OpponentIndividualBoxMappingShow)}
         const handleClickOpponentIndividualBoxAxis = () => {
           setOpponentIndividualBoxAxisShow(!OpponentIndividualBoxAxisShow)}
         const handleClickOpponentIndividualMappingBoxZone = () => {
           setOpponentIndividualBoxZoneShow(!OpponentIndividualBoxZoneShow)}
     
         // Show/hide cards  Opponent > individual > global dashboard 
         const [OpponentIndividualPassShow, setOpponentIndividualPassShow] = React.useState(true);
         const [OpponentIndividualFailedPassShow, setOpponentIndividualFailedPassShow] = React.useState(true);
         const [OpponentIndividualSucceedPassShow, setOpponentIndividualSucceedPassShow] = React.useState(true);
         const [OpponentIndividualShortPassShow, setOpponentIndividualShortPassShow] = React.useState(true);
         const [OpponentIndividualFailedShortPassShow, setOpponentIndividualFailedShortPassShow] = React.useState(true);
         const [OpponentIndividualSucceedShortPassShow, setOpponentIndividualSucceedShortPassShow] = React.useState(true);
         const [OpponentIndividualDefensiveDuelShow, setOpponentIndividualDefensiveDuelShow] = React.useState(true);
         const [OpponentIndividualFailedDefensiveDuelShow, setOpponentIndividualFailedDefensiveDuelShow] = React.useState(true);
         const [OpponentIndividualSucceedDefensiveDuelShow, setOpponentIndividualSucceedDefensiveDuelShow] = React.useState(true);
         const [OpponentIndividualInterceptionShow, setOpponentIndividualInterceptionShow] = React.useState(true);
         const [OpponentIndividualInterventionShow, setOpponentIndividualInterventionShow] = React.useState(true);
         const [OpponentIndividualTackleShow, setOpponentIndividualTackleShow] = React.useState(true);
         const [OpponentIndividualDribbleShow, setOpponentIndividualDribbleShow] = React.useState(true);
         const [OpponentIndividualFailedDribbleShow, setOpponentIndividualFailedDribbleShow] = React.useState(true);
         const [OpponentIndividualSucceedDribbleShow, setOpponentIndividualSucceedDribbleShow] = React.useState(true);
         const [OpponentIndividualBallSprintShow, setOpponentIndividualBallSprintShow] = React.useState(true);
         const [OpponentIndividualDefensiveAerialDuelShow, setOpponentIndividualDefensiveAerialDuelShow] = React.useState(true);
         const [OpponentIndividualFailedDefensiveAerialDuelShow, setOpponentIndividualFailedDefensiveAerialDuelShow] = React.useState(true);
         const [OpponentIndividualSucceedDefensiveAerialDuelShow, setOpponentIndividualSucceedDefensiveAerialDuelShow] = React.useState(true);
         const [OpponentIndividualOffensiveAerialDuelShow, setOpponentIndividualOffensiveAerialDuelShow] = React.useState(true);
         const [OpponentIndividualFailedOffensiveAerialDuelShow, setOpponentIndividualFailedOffensiveAerialDuelShow] = React.useState(true);
         const [OpponentIndividualSucceedOffensiveAerialDuelShow, setOpponentIndividualSucceedOffensiveAerialDuelShow] = React.useState(true);
         const [OpponentIndividualCrossShow, setOpponentIndividualCrossShow] = React.useState(true);
         const [OpponentIndividualFailedCrossShow, setOpponentIndividualFailedCrossShow] = React.useState(true);
         const [OpponentIndividualSucceedCrossShow, setOpponentIndividualSucceedCrossShow] = React.useState(true);
         const [OpponentIndividualLongPassShow, setOpponentIndividualLongPassShow] = React.useState(true);
         const [OpponentIndividualFailedLongPassShow, setOpponentIndividualFailedLongPassShow] = React.useState(true);
         const [OpponentIndividualSucceedLongPassShow, setOpponentIndividualSucceedLongPassShow] = React.useState(true);
         const [OpponentIndividualSplittingPassShow, setOpponentIndividualSplittingPassShow] = React.useState(true);
         const [OpponentIndividualFailedSplittingPassShow, setOpponentIndividualFailedSplittingPassShow] = React.useState(true);
         const [OpponentIndividualSucceedSplittingPassShow, setOpponentIndividualSucceedSplittingPassShow] = React.useState(true);
         const [OpponentIndividualShotShow, setOpponentIndividualShotShow] = React.useState(true);
         const [OpponentIndividualFailedShotShow, setOpponentIndividualFailedShotShow] = React.useState(true);
         const [OpponentIndividualSucceedShotShow, setOpponentIndividualSucceedShotShow] = React.useState(true);
         const [OpponentIndividualGoalkeeperInterventionShow, setOpponentIndividualGoalkeeperInterventionShow] = React.useState(true);
         const [OpponentIndividualFailedGoalkeeperInterventionShow, setOpponentIndividualFailedGoalkeeperInterventionShow] = React.useState(true);
         const [OpponentIndividualSucceedGoalkeeperInterventionShow, setOpponentIndividualSucceedGoalkeeperInterventionShow] = React.useState(true);
         const [OpponentIndividualSaveShow, setOpponentIndividualSaveShow] = React.useState(true);
         const [OpponentIndividualFailedSaveShow, setOpponentIndividualFailedSaveShow] = React.useState(true);
         const [OpponentIndividualSucceedSaveShow, setOpponentIndividualSucceedSaveShow] = React.useState(true);
         const [OpponentIndividualThrowInShow, setOpponentIndividualThrowInShow] = React.useState(true);
         const [OpponentIndividualFaltCommitedShow, setOpponentIndividualFaltCommitedShow] = React.useState(true);
         const [OpponentIndividualFaltConcededShow, setOpponentIndividualFaltConcededShow] = React.useState(true);
         const [OpponentIndividualObtainedCornerShow, setOpponentIndividualObtainedCornerShow] = React.useState(true);
         const [OpponentIndividualConcededCornerShow, setOpponentIndividualConcededCornerShow] = React.useState(true);
         const [OpponentIndividualCornerPlayedShow, setOpponentIndividualCornerPlayedShow] = React.useState(true);
         const [OpponentIndividualAssistPassShow, setOpponentIndividualAssistPassShow] = React.useState(true);
         const [OpponentIndividualGoalShow, setOpponentIndividualGoalShow] = React.useState(true);
         const [OpponentIndividualKeyPassShow, setOpponentIndividualKeyPassShow] = React.useState(true);
         const [OpponentIndividualPartialImbalanceShow, setOpponentIndividualPartialImbalanceShow] = React.useState(true);
         const [OpponentIndividualTotalImbalanceShow, setOpponentIndividualTotalImbalanceShow] = React.useState(true);
         const [OpponentIndividualDirectAttackShow, setOpponentIndividualDirectAttackShow] = React.useState(true);
         const [OpponentIndividualCounterAttackShow, setOpponentIndividualCounterAttackShow] = React.useState(true);
         const [OpponentIndividualPlacedAttackShow, setOpponentIndividualPlacedAttackShow] = React.useState(true);
         const [OpponentIndividualOffsideShow, setOpponentIndividualOffsideShow] = React.useState(true);
         const [OpponentIndividualObtainedPenaltyShow, setOpponentIndividualObtainedPenaltyShow] = React.useState(true);
         const [OpponentIndividualYellowCardShow, setOpponentIndividualYellowCardShow] = React.useState(true);
         const [OpponentIndividualRedCardShow, setOpponentIndividualRedCardShow] = React.useState(true);
        
         const handleClickOpponentIndividualPass= () => {
           setOpponentIndividualPassShow(!OpponentIndividualPassShow)};
         const handleClickOpponentIndividualFailedPass= () => {
           setOpponentIndividualFailedPassShow(!OpponentIndividualFailedPassShow)};
         const handleClickOpponentIndividualSucceedPass= () => {
           setOpponentIndividualSucceedPassShow(!OpponentIndividualSucceedPassShow)};
         const handleClickOpponentIndividualShortPass= () => {
           setOpponentIndividualShortPassShow(!OpponentIndividualShortPassShow)};
         const handleClickOpponentIndividualFailedShortPass= () => {
           setOpponentIndividualFailedShortPassShow(!OpponentIndividualFailedShortPassShow)};
         const handleClickOpponentIndividualSucceedShortPass= () => {
           setOpponentIndividualSucceedShortPassShow(!OpponentIndividualSucceedShortPassShow)};
         const handleClickOpponentIndividualDefensiveDuel= () => {
           setOpponentIndividualDefensiveDuelShow(!OpponentIndividualDefensiveDuelShow)};
         const handleClickOpponentIndividualFailedDefensiveDuel= () => {
           setOpponentIndividualFailedDefensiveDuelShow(!OpponentIndividualFailedDefensiveDuelShow)};
         const handleClickOpponentIndividualSucceedDefensiveDuel= () => {
           setOpponentIndividualSucceedDefensiveDuelShow(!OpponentIndividualSucceedDefensiveDuelShow)};
         const handleClickOpponentIndividualInterception= () => {
           setOpponentIndividualInterceptionShow(!OpponentIndividualInterceptionShow)};
         const handleClickOpponentIndividualIntervention= () => {
           setOpponentIndividualInterventionShow(!OpponentIndividualInterventionShow)};
         const handleClickOpponentIndividualTackle= () => {
           setOpponentIndividualTackleShow(!OpponentIndividualTackleShow)};
         const handleClickOpponentIndividualDribble= () => {
           setOpponentIndividualDribbleShow(!OpponentIndividualDribbleShow)};
         const handleClickOpponentIndividualFailedDribble= () => {
           setOpponentIndividualFailedDribbleShow(!OpponentIndividualFailedDribbleShow)};
         const handleClickOpponentIndividualSucceedDribble= () => {
           setOpponentIndividualSucceedDribbleShow(!OpponentIndividualSucceedDribbleShow)};
         const handleClickOpponentIndividualBallSprint= () => {
           setOpponentIndividualBallSprintShow(!OpponentIndividualBallSprintShow)};
         const handleClickOpponentIndividualDefensiveAerialDuel= () => {
           setOpponentIndividualDefensiveAerialDuelShow(!OpponentIndividualDefensiveAerialDuelShow)};
         const handleClickOpponentIndividualFailedDefensiveAerialDuel= () => {
           setOpponentIndividualFailedDefensiveAerialDuelShow(!OpponentIndividualFailedDefensiveAerialDuelShow)};
         const handleClickOpponentIndividualSucceedDefensiveAerialDuel= () => {
           setOpponentIndividualSucceedDefensiveAerialDuelShow(!OpponentIndividualSucceedDefensiveAerialDuelShow)};
         const handleClickOpponentIndividualOffensiveAerialDuel= () => {
           setOpponentIndividualOffensiveAerialDuelShow(!OpponentIndividualOffensiveAerialDuelShow)};
         const handleClickOpponentIndividualFailedOffensiveAerialDuel= () => {
           setOpponentIndividualFailedOffensiveAerialDuelShow(!OpponentIndividualFailedOffensiveAerialDuelShow)};
         const handleClickOpponentIndividualSucceedOffensiveAerialDuel= () => {
           setOpponentIndividualSucceedOffensiveAerialDuelShow(!OpponentIndividualSucceedOffensiveAerialDuelShow)};
         const handleClickOpponentIndividualCross= () => {
           setOpponentIndividualCrossShow(!OpponentIndividualCrossShow)};
         const handleClickOpponentIndividualFailedCross= () => {
           setOpponentIndividualFailedCrossShow(!OpponentIndividualFailedCrossShow)};
         const handleClickOpponentIndividualSucceedCross= () => {
           setOpponentIndividualSucceedCrossShow(!OpponentIndividualSucceedCrossShow)};
         const handleClickOpponentIndividualLongPass= () => {
           setOpponentIndividualLongPassShow(!OpponentIndividualLongPassShow)};
         const handleClickOpponentIndividualFailedLongPass= () => {
           setOpponentIndividualFailedLongPassShow(!OpponentIndividualFailedLongPassShow)};
         const handleClickOpponentIndividualSucceedLongPass= () => {
           setOpponentIndividualSucceedLongPassShow(!OpponentIndividualSucceedLongPassShow)};
         const handleClickOpponentIndividualSplittingPass= () => {
           setOpponentIndividualSplittingPassShow(!OpponentIndividualSplittingPassShow)};
         const handleClickOpponentIndividualFailedSplittingPass= () => {
           setOpponentIndividualFailedSplittingPassShow(!OpponentIndividualFailedSplittingPassShow)};
         const handleClickOpponentIndividualSucceedSplittingPass= () => {
           setOpponentIndividualSucceedSplittingPassShow(!OpponentIndividualSucceedSplittingPassShow)};
         const handleClickOpponentIndividualShot= () => {
           setOpponentIndividualShotShow(!OpponentIndividualShotShow)};
         const handleClickOpponentIndividualFailedShot= () => {
           setOpponentIndividualFailedShotShow(!OpponentIndividualFailedShotShow)};
         const handleClickOpponentIndividualSucceedShot= () => {
           setOpponentIndividualSucceedShotShow(!OpponentIndividualSucceedShotShow)};
         const handleClickOpponentIndividualGoalkeeperIntervention= () => {
           setOpponentIndividualGoalkeeperInterventionShow(!OpponentIndividualGoalkeeperInterventionShow)};
         const handleClickOpponentIndividualFailedGoalkeeperIntervention= () => {
           setOpponentIndividualFailedGoalkeeperInterventionShow(!OpponentIndividualFailedGoalkeeperInterventionShow)};
         const handleClickOpponentIndividualSucceedGoalkeeperIntervention= () => {
           setOpponentIndividualSucceedGoalkeeperInterventionShow(!OpponentIndividualSucceedGoalkeeperInterventionShow)};
         const handleClickOpponentIndividualSave= () => {
           setOpponentIndividualSaveShow(!OpponentIndividualSaveShow)};
         const handleClickOpponentIndividualFailedSave= () => {
           setOpponentIndividualFailedSaveShow(!OpponentIndividualFailedSaveShow)};
         const handleClickOpponentIndividualSucceedSave= () => {
           setOpponentIndividualSucceedSaveShow(!OpponentIndividualSucceedSaveShow)};
         const handleClickOpponentIndividualThrowIn= () => {
           setOpponentIndividualThrowInShow(!OpponentIndividualThrowInShow)};
         const handleClickOpponentIndividualFaltCommited= () => {
           setOpponentIndividualFaltCommitedShow(!OpponentIndividualFaltCommitedShow)};
         const handleClickOpponentIndividualFaltConceded= () => {
           setOpponentIndividualFaltConcededShow(!OpponentIndividualFaltConcededShow)};
         const handleClickOpponentIndividualObtainedCorner= () => {
           setOpponentIndividualObtainedCornerShow(!OpponentIndividualObtainedCornerShow)};
         const handleClickOpponentIndividualConcededCorner= () => {
           setOpponentIndividualConcededCornerShow(!OpponentIndividualConcededCornerShow)};
         const handleClickOpponentIndividualCornerPlayed= () => {
           setOpponentIndividualCornerPlayedShow(!OpponentIndividualCornerPlayedShow)};
         const handleClickOpponentIndividualAssistPass= () => {
           setOpponentIndividualAssistPassShow(!OpponentIndividualAssistPassShow)};
         const handleClickOpponentIndividualGoal= () => {
           setOpponentIndividualGoalShow(!OpponentIndividualGoalShow)};
         const handleClickOpponentIndividualKeyPass= () => {
           setOpponentIndividualKeyPassShow(!OpponentIndividualKeyPassShow)};
         const handleClickOpponentIndividualPartialImbalance= () => {
           setOpponentIndividualPartialImbalanceShow(!OpponentIndividualPartialImbalanceShow)};
         const handleClickOpponentIndividualTotalImbalance= () => {
           setOpponentIndividualTotalImbalanceShow(!OpponentIndividualTotalImbalanceShow)};
         const handleClickOpponentIndividualDirectAttack= () => {
           setOpponentIndividualDirectAttackShow(!OpponentIndividualDirectAttackShow)};
         const handleClickOpponentIndividualCounterAttack= () => {
           setOpponentIndividualCounterAttackShow(!OpponentIndividualCounterAttackShow)};
         const handleClickOpponentIndividualPlacedAttack= () => {
           setOpponentIndividualPlacedAttackShow(!OpponentIndividualPlacedAttackShow)};
         const handleClickOpponentIndividualOffside= () => {
           setOpponentIndividualOffsideShow(!OpponentIndividualOffsideShow)};
         const handleClickOpponentIndividualObtainedPenalty= () => {
           setOpponentIndividualObtainedPenaltyShow(!OpponentIndividualObtainedPenaltyShow)};
         const handleClickOpponentIndividualYellowCard= () => {
           setOpponentIndividualYellowCardShow(!OpponentIndividualYellowCardShow)};
         const handleClickOpponentIndividualRedCard= () => {
           setOpponentIndividualRedCardShow(!OpponentIndividualRedCardShow)};
     
         // Show/hide efficiency diagram  Opponent > individual > global dashboard 
           const [OpponentIndividualPass_EfficiencyShow, setOpponentIndividualPass_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualShort_pass_EfficiencyShow, setOpponentIndividualShort_pass_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualDefensive_1v1_EfficiencyShow, setOpponentIndividualDefensive_1v1_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualOffensive_1v1_EfficiencyShow, setOpponentIndividualOffensive_1v1_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualDefensive_Aerial_duel_EfficiencyShow, setOpponentIndividualDefensive_Aerial_duel_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualOffensive_aerial_duel_EfficiencyShow, setOpponentIndividualOffensive_aerial_duel_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualCross_EfficiencyShow, setOpponentIndividualCross_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualLong_pass_EfficiencyShow, setOpponentIndividualLong_pass_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualSplitting_pass_EfficiencyShow, setOpponentIndividualSplitting_pass_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualShot_EfficiencyShow, setOpponentIndividualShot_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualGoalkeeper_Intervention_EfficiencyShow, setOpponentIndividualGoalkeeper_Intervention_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualSave_EfficiencyShow, setOpponentIndividualSave_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualThrowIn_EfficiencyShow, setOpponentIndividualThrowIn_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualFalt_EfficiencyShow, setOpponentIndividualFalt_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualCorner_EfficiencyShow, setOpponentIndividualCorner_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualGoalkick_EfficiencyShow, setOpponentIndividualGoalkick_EfficiencyShow] = React.useState(true);
           const [OpponentIndividualPenalty_EfficiencyShow, setOpponentIndividualPenalty_EfficiencyShow] = React.useState(true);
          
           const handleClickOpponentIndividualPass_Efficiency= () => {
             setOpponentIndividualPass_EfficiencyShow(!OpponentIndividualPass_EfficiencyShow)};
           const handleClickOpponentIndividualShort_pass_Efficiency= () => {
             setOpponentIndividualShort_pass_EfficiencyShow(!OpponentIndividualShort_pass_EfficiencyShow)};
           const handleClickOpponentIndividualDefensive_1v1_Efficiency= () => {
             setOpponentIndividualDefensive_1v1_EfficiencyShow(!OpponentIndividualDefensive_1v1_EfficiencyShow)};
           const handleClickOpponentIndividualOffensive_1v1_Efficiency= () => {
             setOpponentIndividualOffensive_1v1_EfficiencyShow(!OpponentIndividualOffensive_1v1_EfficiencyShow)};
           const handleClickOpponentIndividualDefensive_Aerial_duel_Efficiency= () => {
             setOpponentIndividualDefensive_Aerial_duel_EfficiencyShow(!OpponentIndividualDefensive_Aerial_duel_EfficiencyShow)};
           const handleClickOpponentIndividualOffensive_aerial_duel_Efficiency= () => {
             setOpponentIndividualOffensive_aerial_duel_EfficiencyShow(!OpponentIndividualOffensive_aerial_duel_EfficiencyShow)};
           const handleClickOpponentIndividualCross_Efficiency= () => {
             setOpponentIndividualCross_EfficiencyShow(!OpponentIndividualCross_EfficiencyShow)};
           const handleClickOpponentIndividualLong_pass_Efficiency= () => {
             setOpponentIndividualLong_pass_EfficiencyShow(!OpponentIndividualLong_pass_EfficiencyShow)};
           const handleClickOpponentIndividualSplitting_pass_Efficiency= () => {
             setOpponentIndividualSplitting_pass_EfficiencyShow(!OpponentIndividualSplitting_pass_EfficiencyShow)};
           const handleClickOpponentIndividualShot_Efficiency= () => {
             setOpponentIndividualShot_EfficiencyShow(!OpponentIndividualShot_EfficiencyShow)};
           const handleClickOpponentIndividualGoalkeeper_Intervention_Efficiency= () => {
             setOpponentIndividualGoalkeeper_Intervention_EfficiencyShow(!OpponentIndividualGoalkeeper_Intervention_EfficiencyShow)};
           const handleClickOpponentIndividualSave_Efficiency= () => {
             setOpponentIndividualSave_EfficiencyShow(!OpponentIndividualSave_EfficiencyShow)};
           const handleClickOpponentIndividualThrowIn_Efficiency= () => {
             setOpponentIndividualThrowIn_EfficiencyShow(!OpponentIndividualThrowIn_EfficiencyShow)};
           const handleClickOpponentIndividualFalt_Efficiency= () => {
             setOpponentIndividualFalt_EfficiencyShow(!OpponentIndividualFalt_EfficiencyShow)};
           const handleClickOpponentIndividualCorner_Efficiency= () => {
             setOpponentIndividualCorner_EfficiencyShow(!OpponentIndividualCorner_EfficiencyShow)};
           const handleClickOpponentIndividualGoalkick_Efficiency= () => {
             setOpponentIndividualGoalkick_EfficiencyShow(!OpponentIndividualGoalkick_EfficiencyShow)};
           const handleClickOpponentIndividualPenalty_Efficiency= () => {
             setOpponentIndividualPenalty_EfficiencyShow(!OpponentIndividualPenalty_EfficiencyShow)};
       
         // Show/hide Success Rate  Opponent > individual > global dashboard 
         const [OpponentIndividualSucceedDefensiveDualRateShow, setOpponentIndividualSucceedDefensiveDualRateShow] = React.useState(true);
         const [OpponentIndividualSucceedDefensive1v1RateShow, setOpponentIndividualSucceedDefensive1v1RateShow] = React.useState(true);
         const [OpponentIndividualSucceedDefensiveAerialDualShow, setOpponentIndividualSucceedDefensiveAerialDualShow] = React.useState(true);
         const [OpponentIndividualSucceedOffensiveDualRateShow, setOpponentIndividualSucceedOffensiveDualRateShow] = React.useState(true);
         const [OpponentIndividualSucceedOffensive1v1RateShow, setOpponentIndividualSucceedOffensive1v1RateShow] = React.useState(true);
         const [OpponentIndividualSucceedOffensiveAerialDualRateShow, setOpponentIndividualSucceedOffensiveAerialDualRateShow] = React.useState(true);
         const [OpponentIndividualSucceedPassRateShow, setOpponentIndividualSucceedPassRateShow] = React.useState(true);
         const [OpponentIndividualOffensivePassRateShow, setOpponentIndividualOffensivePassRateShow] = React.useState(true);
         const [OpponentIndividualSucceedShortPassRateShow, setOpponentIndividualSucceedShortPassRateShow] = React.useState(true);
         const [OpponentIndividualSucceedLongPassRateShow, setOpponentIndividualSucceedLongPassRateShow] = React.useState(true);
         const [OpponentIndividualSucceedSplitingPassRateShow, setOpponentIndividualSucceedSplitingPassRateShow] = React.useState(true);   
     
         const handleClickOpponentIndividualSucceedDefensiveDualRate= () => {
           setOpponentIndividualSucceedDefensiveDualRateShow(!OpponentIndividualSucceedDefensiveDualRateShow)};
         const handleClickOpponentIndividualSucceedDefensive1v1Rate= () => {
           setOpponentIndividualSucceedDefensive1v1RateShow(!OpponentIndividualSucceedDefensive1v1RateShow)};
         const handleClickOpponentIndividualSucceedDefensiveAerialDual= () => {
           setOpponentIndividualSucceedDefensiveAerialDualShow(!OpponentIndividualSucceedDefensiveAerialDualShow)};
         const handleClickOpponentIndividualSucceedOffensiveDualRate= () => {
           setOpponentIndividualSucceedOffensiveDualRateShow(!OpponentIndividualSucceedOffensiveDualRateShow)};
         const handleClickOpponentIndividualSucceedOffensive1v1Rate= () => {
           setOpponentIndividualSucceedOffensive1v1RateShow(!OpponentIndividualSucceedOffensive1v1RateShow)};
         const handleClickOpponentIndividualSucceedOffensiveAerialDualRate= () => {
           setOpponentIndividualSucceedOffensiveAerialDualRateShow(!OpponentIndividualSucceedOffensiveAerialDualRateShow)};
         const handleClickOpponentIndividualSucceedPassRate= () => {
           setOpponentIndividualSucceedPassRateShow(!OpponentIndividualSucceedPassRateShow)};
         const handleClickOpponentIndividualOffensivePassRate= () => {
           setOpponentIndividualOffensivePassRateShow(!OpponentIndividualOffensivePassRateShow)};
         const handleClickOpponentIndividualSucceedShortPassRate= () => {
           setOpponentIndividualSucceedShortPassRateShow(!OpponentIndividualSucceedShortPassRateShow)};
         const handleClickOpponentIndividualSucceedLongPassRate= () => {
           setOpponentIndividualSucceedLongPassRateShow(!OpponentIndividualSucceedLongPassRateShow)};
         const handleClickOpponentIndividualSucceedSplitingPassRate= () => {
           setOpponentIndividualSucceedSplitingPassRateShow(!OpponentIndividualSucceedSplitingPassRateShow)}; 
    return (
      <TabContent activeTab={verticalTabsIcons}>
      <TabPane tabId="MyOpponent">
    {/* subcategories begin*/}
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
            <Col md="12">
              <br></br>
            <Row>
            <Col md="6">
                  <FormGroup>
                    <Input placeholder="Date initiale" type="text" />
                  </FormGroup>
              </Col>
              <Col md="6">
                  <FormGroup>
                    <Input placeholder="Date finale" type="text" />
                  </FormGroup>
              </Col>
            </Row>
            <br></br>
            <div
              className="slider slider-primary mb-3"
              ref={slider4Ref}
            />
            <br></br>
             </Col> 
            <Col md="6">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Contexte(s)"
                  name="VideoContext"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectContext}
                  onChange={(value) => setmultipleSelectContext(value)}
                  options={[
                    {
                      value: "",
                      label: "Contexte(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "Opposition à l'entrainement" },
                    { value: "2", label: "Match amical" },
                    { value: "3", label: "Match de championnat" },
                    { value: "4", label: "Match de coupe" },
                    { value: "5", label: "Match de tournoi" },
                  ]}
                />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Équipe(s)"
                  name="MyOpponent"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyOpponent}
                  onChange={(value) => setmultipleSelectMyOpponent(value)}
                  options={[
                    {
                      value: "",
                      label: "Équipe(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "MyOpponent(s)'ClubName','Category','OpponentNumber' " },
                  ]}
                />
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col md="12">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Match(s)"
                  name="Matchs"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectVideoTitle}
                  onChange={(value) => setmultipleSelectVideoTitle(value)}
                  options={[
                    {
                      value: "",
                      label: "Match(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "My Opponent'ClubName','Category','OpponentNumber' v  Opponent'ClubName','Category','OpponentNumber'" },
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
                  placeholder="Système(s) équipe"
                  name="MyOpponentSys"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyOpponentTacticalSystem}
                  onChange={(value) => setmultipleSelectMyOpponentTacticalSystem(value)}
                  options={[
                    {
                      value: "",
                      label: "Équipe(s)",
                      isDisabled: true,
                    },
                    { value: "1", label:"4-4-2"},
                    { value: "2", label:"4-2-1-2-1"},
                    { value: "3", label:"4-3-2-1"},
                    { value: "4", label:"4-1-2-2-1"},
                    { value: "5", label:"4-1-2-1-2"},
                    { value: "6", label:"4-1-2-1-2"},
                    { value: "7", label:"4-2-3-1"},
                    { value: "8", label:"4-1-4-1"},
                    { value: "9", label:"4-2-1-3"},
                    { value: "10", label:"4-2-1-3"},
                    { value: "11", label:"4-1-2-3"},
                    { value: "12", label:"4-1-2-3"},
                    { value: "13", label:"3-4-2-1"},
                    { value: "14", label:"3-1-4-1-1"},
                    { value: "15", label:"5-1-2-1-1"},
                    { value: "16", label:"5-1-2-2"},
                    { value: "17", label:"5-3-2"},
                    { value: "18", label:"5-2-2-1"},  
                  ]}
                />
                </FormGroup>
              </Col>
            <Col md="6">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Système(s) adverse(s)"
                  name="OpponentSys"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectOpponentTacticalSystem}
                  onChange={(value) => setmultipleSelectOpponentTacticalSystem(value)}
                  options={[
                    {
                      value: "",
                      label: "Match(s)",
                      isDisabled: true,
                    },
                    { value: "1", label:"4-4-2"},
                    { value: "2", label:"4-2-1-2-1"},
                    { value: "3", label:"4-3-2-1"},
                    { value: "4", label:"4-1-2-2-1"},
                    { value: "5", label:"4-1-2-1-2"},
                    { value: "6", label:"4-1-2-1-2"},
                    { value: "7", label:"4-2-3-1"},
                    { value: "8", label:"4-1-4-1"},
                    { value: "9", label:"4-2-1-3"},
                    { value: "10", label:"4-2-1-3"},
                    { value: "11", label:"4-1-2-3"},
                    { value: "12", label:"4-1-2-3"},
                    { value: "13", label:"3-4-2-1"},
                    { value: "14", label:"3-1-4-1-1"},
                    { value: "15", label:"5-1-2-1-1"},
                    { value: "16", label:"5-1-2-2"},
                    { value: "17", label:"5-3-2"},
                    { value: "18", label:"5-2-2-1"},  
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
                  placeholder="Surface(s)"
                  name="Ground"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectPitchGround}
                  onChange={(value) => setmultipleSelectPitchGround(value)}
                  options={[
                    {
                      value: "",
                      label: "Surface(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "Surface naturelle" },
                    { value: "2", label: "Surface synthétique" },
                    { value: "3", label: "Surface hybride" },
                    { value: "4", label: "Surface stabilisée" },
                  ]}
                />
                </FormGroup>
              </Col>
            <Col md="6">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Vitesse surface"
                  name="SpeedPitch"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectPitchSpeed}
                  onChange={(value) => setmultipleSelectPitchSpeed(value)}
                  options={[
                    {
                      value: "",
                      label: "Match(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "Très lente" },
                    { value: "2", label: "Lente" },
                    { value: "3", label: "Standard" },
                    { value: "4", label: "Rapide" },
                    { value: "5", label: "Très rapide" },
                  ]}
                />
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col md="12">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Joueur(s)"
                  name="MyOpponentPlayerss"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyOpponentPlayer}
                  onChange={(value) => setmultipleSelectMyOpponentPlayer(value)}
                  options={[
                    {
                      value: "",
                      label: "joueur(s)",
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
                      className={horizontalTabsOpponentGlobal === "Maps" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsOpponentGlobal", "Maps")
                      }
                    >
                     Maps
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsOpponentGlobal === "Valeurs" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsOpponentGlobal", "Valeurs")
                      }
                    >
                      Valeurs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsOpponentGlobal === "Efficacité" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsOpponentGlobal", "Efficacité")
                      }
                    >
                     Efficacité
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsOpponentGlobal === "Précision" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsOpponentGlobal", "Précision")
                      }
                    >
                      Précision
                    </NavLink>
                  </NavItem>
                </Nav>   
                <TabContent activeTab={horizontalTabsOpponentGlobal}>
                  <TabPane tabId="Maps"> 
                  <br></br>                              
                  <div className="table-responsive table-full-width">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentMapping}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentAxis}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentZone}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentBoxMapping}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentBoxAxis}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentMappingBoxZone}/>
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

                  <TabContent activeTab={horizontalTabsOpponentGlobal}>
                  <TabPane tabId="Valeurs"> 
                  <br></br>
                  <div className="table-responsive table-full-width">
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentInterception}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentTackle}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentBallSprint}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFailedSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentThrowIn}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFaltCommited}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFaltConceded}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentObtainedCorner}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentConcededCorner}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentCornerPlayed}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentAssistPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentGoal}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentKeyPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentPartialImbalance}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentTotalImbalance}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentDirectAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentCounterAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentPlacedAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentOffside}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentObtainedPenalty}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentYellowCard}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentRedCard}/>
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

                  <TabContent activeTab={horizontalTabsOpponentGlobal}>
                  <TabPane tabId="Efficacité"> 
                  <br></br>
                  <div className="table-responsive table-full-width">                                  
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentPass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentShort_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentDefensive_1v1_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentOffensive_1v1_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentDefensive_Aerial_duel_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentOffensive_aerial_duel_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentCross_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentLong_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSplitting_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentShot_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentGoalkeeper_Intervention_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSave_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentThrowIn_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentFalt_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentCorner_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentGoalkick_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentPenalty_Efficiency}/>
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

                  <TabContent activeTab={horizontalTabsOpponentGlobal}>
                  <TabPane tabId="Précision"> 
                  <br></br>
                  <div className="table-responsive table-full-width">
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedDefensiveDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedDefensive1v1Rate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedDefensiveAerialDual}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedOffensiveDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedOffensive1v1Rate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedOffensiveAerialDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentOffensivePassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedShortPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedLongPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentSucceedSplitingPassRate}/>
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
          {OpponentMappingShow ?
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

          {OpponentAxisShow ?
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

          {OpponentZoneShow ?
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

          {OpponentBoxMappingShow ?
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

          {OpponentBoxAxisShow ?
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

          {OpponentBoxZoneShow ?
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

          {OpponentPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) échouée(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) réussie(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentShortPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) courte(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedShortPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) courte(s) échouée(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedShortPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) courte(s) réussie(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentDefensiveDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) défensif(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedDefensiveDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) défensif(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedDefensiveDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) défensif(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentInterceptionShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Interception(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentInterventionShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Intervention(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentTackleShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Tacle(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentDribbleShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Dribble(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedDribbleShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Dribble(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedDribbleShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Dribble(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentBallSprintShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Percussion(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentDefensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) défensif(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedDefensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) défensif(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedDefensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) défensif(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentOffensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) offensif(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedOffensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) offensif(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedOffensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) offensif(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentCrossShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Centre(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedCrossShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Centre(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedCrossShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Centre(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentLongPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) longue(s) </h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedLongPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) longue(s)  échouée(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedLongPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) longue(s)  réussie(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSplittingPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Renversement(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedSplittingPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Renversement(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedSplittingPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Renversement(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentShotShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Tir(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedShotShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Tir(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedShotShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Tir(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentGoalkeeperInterventionShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Intervention(s) gardien</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedGoalkeeperInterventionShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Intervention(s) gardien échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedGoalkeeperInterventionShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Intervention(s) gardien réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSaveShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Arrêt(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFailedSaveShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Arrêt(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSucceedSaveShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Arrêt(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentThrowInShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Touche(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFaltCommitedShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Faute(s) commise(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFaltConcededShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Faute(s) concédée(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentObtainedCornerShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Corner(s) obtenu(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentConcededCornerShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Corner(s) concédé(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentCornerPlayedShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Corner(s) joué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentAssistPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) décisive(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentGoalShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">But(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentKeyPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) clé(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentPartialImbalanceShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Déséquilibre(s) partiel</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentTotalImbalanceShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Déséquilibre(s) total</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentDirectAttackShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Attaque(s) direct</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentCounterAttackShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Contre-attaque(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentPlacedAttackShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Attaque(s) placée(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentOffsideShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Hors-jeu</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentObtainedPenaltyShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Penalty obtenu</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentYellowCardShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Carton(s) jaune(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentRedCardShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Carton(s) rouge(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


          {OpponentPass_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité passes</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentShort_pass_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité passes courtes</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentDefensive_1v1_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité 1c1 défensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentOffensive_1v1_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité 1c1 offensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentDefensive_Aerial_duel_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité duels défensifs aériens</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentOffensive_aerial_duel_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité duels offensifs aériens</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentCross_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité centres</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentLong_pass_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité passes longues</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSplitting_pass_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité des renversements</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentShot_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité tirs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentGoalkeeper_Intervention_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité des interventions gardien</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentSave_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité des arrêts</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentThrowIn_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité des touches</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentFalt_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Différentiels des fautes</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentCorner_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité des corners</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentGoalkick_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité relances 5M50</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentPenalty_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Différentiel pénaltys</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
             
          {OpponentSucceedDefensiveDualRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite duels défensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentSucceedDefensive1v1RateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite 1c1 défensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentSucceedDefensiveAerialDualShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite duels aériens défensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentSucceedOffensiveDualRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite duels offensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentSucceedOffensive1v1RateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite 1c1 offensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentSucceedOffensiveAerialDualRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite duels aériens offensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentSucceedPassRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite passes</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentOffensivePassRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite passes dangereuses</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentSucceedShortPassRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite passes courtes</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentSucceedLongPassRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite passes longues</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentSucceedSplitingPassRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite renversements</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
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
            <Col md="12">
              <br></br>
            <Row>
            <Col md="6">
                  <FormGroup>
                    <Input placeholder="Date initiale" type="text" />
                  </FormGroup>
              </Col>
              <Col md="6">
                  <FormGroup>
                    <Input placeholder="Date finale" type="text" />
                  </FormGroup>
              </Col>
            </Row>
            <br></br>
            <div
              className="slider slider-primary mb-3"
              ref={slider5Ref}
            />
            <br></br>
             </Col> 
            <Col md="6">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Contexte(s)"
                  name="VideoContext"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectContext}
                  onChange={(value) => setmultipleSelectContext(value)}
                  options={[
                    {
                      value: "",
                      label: "Contexte(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "Opposition à l'entrainement" },
                    { value: "2", label: "Match amical" },
                    { value: "3", label: "Match de championnat" },
                    { value: "4", label: "Match de coupe" },
                    { value: "5", label: "Match de tournoi" },
                  ]}
                />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Équipe(s)"
                  name="MyOpponent"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyOpponent}
                  onChange={(value) => setmultipleSelectMyOpponent(value)}
                  options={[
                    {
                      value: "",
                      label: "Équipe(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "MyOpponent(s)'ClubName','Category','OpponentNumber' " },
                  ]}
                />
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col md="12">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Match(s)"
                  name="Matchs"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectVideoTitle}
                  onChange={(value) => setmultipleSelectVideoTitle(value)}
                  options={[
                    {
                      value: "",
                      label: "Match(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "My Opponent'ClubName','Category','OpponentNumber' v  Opponent'ClubName','Category','OpponentNumber'" },
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
                  placeholder="Système(s) équipe"
                  name="MyOpponentSys"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyOpponentTacticalSystem}
                  onChange={(value) => setmultipleSelectMyOpponentTacticalSystem(value)}
                  options={[
                    {
                      value: "",
                      label: "Équipe(s)",
                      isDisabled: true,
                    },
                    { value: "1", label:"4-4-2"},
                    { value: "2", label:"4-2-1-2-1"},
                    { value: "3", label:"4-3-2-1"},
                    { value: "4", label:"4-1-2-2-1"},
                    { value: "5", label:"4-1-2-1-2"},
                    { value: "6", label:"4-1-2-1-2"},
                    { value: "7", label:"4-2-3-1"},
                    { value: "8", label:"4-1-4-1"},
                    { value: "9", label:"4-2-1-3"},
                    { value: "10", label:"4-2-1-3"},
                    { value: "11", label:"4-1-2-3"},
                    { value: "12", label:"4-1-2-3"},
                    { value: "13", label:"3-4-2-1"},
                    { value: "14", label:"3-1-4-1-1"},
                    { value: "15", label:"5-1-2-1-1"},
                    { value: "16", label:"5-1-2-2"},
                    { value: "17", label:"5-3-2"},
                    { value: "18", label:"5-2-2-1"},  
                  ]}
                />
                </FormGroup>
              </Col>
            <Col md="6">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Système(s) adverse(s)"
                  name="OpponentSys"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectOpponentTacticalSystem}
                  onChange={(value) => setmultipleSelectOpponentTacticalSystem(value)}
                  options={[
                    {
                      value: "",
                      label: "Match(s)",
                      isDisabled: true,
                    },
                    { value: "1", label:"4-4-2"},
                    { value: "2", label:"4-2-1-2-1"},
                    { value: "3", label:"4-3-2-1"},
                    { value: "4", label:"4-1-2-2-1"},
                    { value: "5", label:"4-1-2-1-2"},
                    { value: "6", label:"4-1-2-1-2"},
                    { value: "7", label:"4-2-3-1"},
                    { value: "8", label:"4-1-4-1"},
                    { value: "9", label:"4-2-1-3"},
                    { value: "10", label:"4-2-1-3"},
                    { value: "11", label:"4-1-2-3"},
                    { value: "12", label:"4-1-2-3"},
                    { value: "13", label:"3-4-2-1"},
                    { value: "14", label:"3-1-4-1-1"},
                    { value: "15", label:"5-1-2-1-1"},
                    { value: "16", label:"5-1-2-2"},
                    { value: "17", label:"5-3-2"},
                    { value: "18", label:"5-2-2-1"},  
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
                  placeholder="Surface(s)"
                  name="Ground"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectPitchGround}
                  onChange={(value) => setmultipleSelectPitchGround(value)}
                  options={[
                    {
                      value: "",
                      label: "Surface(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "Surface naturelle" },
                    { value: "2", label: "Surface synthétique" },
                    { value: "3", label: "Surface hybride" },
                    { value: "4", label: "Surface stabilisée" },
                  ]}
                />
                </FormGroup>
              </Col>
            <Col md="6">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Vitesse surface"
                  name="SpeedPitch"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectPitchSpeed}
                  onChange={(value) => setmultipleSelectPitchSpeed(value)}
                  options={[
                    {
                      value: "",
                      label: "Match(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "Très lente" },
                    { value: "2", label: "Lente" },
                    { value: "3", label: "Standard" },
                    { value: "4", label: "Rapide" },
                    { value: "5", label: "Très rapide" },
                  ]}
                />
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col md="12">
                <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  placeholder="Joueur(s)"
                  name="MyOpponentPlayerss"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyOpponentPlayer}
                  onChange={(value) => setmultipleSelectMyOpponentPlayer(value)}
                  options={[
                    {
                      value: "",
                      label: "joueur(s)",
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
                      className={horizontalTabsOpponentIndividual === "Maps" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsOpponentIndividual", "Maps")
                      }
                    >
                     Maps
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsOpponentIndividual === "Valeurs" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsOpponentIndividual", "Valeurs")
                      }
                    >
                      Valeurs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsOpponentIndividual === "Efficacité" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsOpponentIndividual", "Efficacité")
                      }
                    >
                     Efficacité
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsOpponentIndividual === "Précision" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsOpponentIndividual", "Précision")
                      }
                    >
                      Précision
                    </NavLink>
                  </NavItem>
                </Nav>   
                <TabContent activeTab={horizontalTabsOpponentIndividual}>
                  <TabPane tabId="Maps"> 
                  <br></br>                              
                  <div className="table-responsive table-full-width">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentIndividualMapping}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentIndividualAxis}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentIndividualZone}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentIndividualBoxMapping}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentIndividualBoxAxis}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickOpponentIndividualMappingBoxZone}/>
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

                  <TabContent activeTab={horizontalTabsOpponentIndividual}>
                  <TabPane tabId="Valeurs"> 
                  <br></br>
                  <div className="table-responsive table-full-width">
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualInterception}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualTackle}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualBallSprint}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFailedSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualThrowIn}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFaltCommited}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFaltConceded}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualObtainedCorner}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualConcededCorner}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualCornerPlayed}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualAssistPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualGoal}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualKeyPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualPartialImbalance}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualTotalImbalance}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualDirectAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualCounterAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualPlacedAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualOffside}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualObtainedPenalty}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualYellowCard}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualRedCard}/>
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

                  <TabContent activeTab={horizontalTabsOpponentIndividual}>
                  <TabPane tabId="Efficacité"> 
                  <br></br>
                  <div className="table-responsive table-full-width">                                  
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualPass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualShort_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualDefensive_1v1_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualOffensive_1v1_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualDefensive_Aerial_duel_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualOffensive_aerial_duel_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualCross_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualLong_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSplitting_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualShot_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualGoalkeeper_Intervention_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSave_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualThrowIn_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualFalt_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualCorner_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualGoalkick_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualPenalty_Efficiency}/>
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

                  <TabContent activeTab={horizontalTabsOpponentIndividual}>
                  <TabPane tabId="Précision"> 
                  <br></br>
                  <div className="table-responsive table-full-width">
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedDefensiveDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedDefensive1v1Rate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedDefensiveAerialDual}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedOffensiveDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedOffensive1v1Rate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedOffensiveAerialDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualOffensivePassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedShortPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedLongPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickOpponentIndividualSucceedSplitingPassRate}/>
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
          {OpponentIndividualMappingShow ?
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

          {OpponentIndividualAxisShow ?
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

          {OpponentIndividualZoneShow ?
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

          {OpponentIndividualBoxMappingShow ?
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

          {OpponentIndividualBoxAxisShow ?
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

          {OpponentIndividualBoxZoneShow ?
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

          {OpponentIndividualPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) échouée(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) réussie(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualShortPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) courte(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedShortPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) courte(s) échouée(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedShortPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) courte(s) réussie(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualDefensiveDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) défensif(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedDefensiveDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) défensif(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedDefensiveDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) défensif(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualInterceptionShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Interception(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualInterventionShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Intervention(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualTackleShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Tacle(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualDribbleShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Dribble(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedDribbleShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Dribble(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedDribbleShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Dribble(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualBallSprintShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Percussion(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualDefensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) défensif(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedDefensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) défensif(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedDefensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) défensif(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualOffensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) offensif(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedOffensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) offensif(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedOffensiveAerialDuelShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Duel(s) aérien(s) offensif(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualCrossShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Centre(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedCrossShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Centre(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedCrossShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Centre(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualLongPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) longue(s) </h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedLongPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) longue(s)  échouée(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedLongPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) longue(s)  réussie(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSplittingPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Renversement(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedSplittingPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Renversement(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedSplittingPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Renversement(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualShotShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Tir(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedShotShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Tir(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedShotShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Tir(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualGoalkeeperInterventionShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Intervention(s) gardien</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedGoalkeeperInterventionShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Intervention(s) gardien échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedGoalkeeperInterventionShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Intervention(s) gardien réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSaveShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Arrêt(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFailedSaveShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Arrêt(s) échoué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSucceedSaveShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Arrêt(s) réussi(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualThrowInShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Touche(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFaltCommitedShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Faute(s) commise(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFaltConcededShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Faute(s) concédée(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualObtainedCornerShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Corner(s) obtenu(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualConcededCornerShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Corner(s) concédé(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualCornerPlayedShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Corner(s) joué(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualAssistPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) décisive(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualGoalShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">But(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualKeyPassShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Passe(s) clé(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualPartialImbalanceShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Déséquilibre(s) partiel</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualTotalImbalanceShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Déséquilibre(s) total</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualDirectAttackShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Attaque(s) direct</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualCounterAttackShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Contre-attaque(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualPlacedAttackShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Attaque(s) placée(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualOffsideShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Hors-jeu</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualObtainedPenaltyShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Penalty obtenu</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualYellowCardShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Carton(s) jaune(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualRedCardShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Carton(s) rouge(s)</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


          {OpponentIndividualPass_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité passes</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualShort_pass_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité passes courtes</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualDefensive_1v1_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité 1c1 défensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualOffensive_1v1_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité 1c1 offensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualDefensive_Aerial_duel_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité duels défensifs aériens</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualOffensive_aerial_duel_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité duels offensifs aériens</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualCross_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité centres</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualLong_pass_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité passes longues</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSplitting_pass_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité des renversements</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualShot_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité tirs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualGoalkeeper_Intervention_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité des interventions gardien</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualSave_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité des arrêts</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualThrowIn_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité des touches</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualFalt_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Différentiels des fautes</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualCorner_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité des corners</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualGoalkick_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Efficacité relances 5M50</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
          {OpponentIndividualPenalty_EfficiencyShow ?
          <></>
          :
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Différentiel pénaltys</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MultipleLineChart.data}
                    options={MultipleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }
             
          {OpponentIndividualSucceedDefensiveDualRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite duels défensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentIndividualSucceedDefensive1v1RateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite 1c1 défensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentIndividualSucceedDefensiveAerialDualShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite duels aériens défensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentIndividualSucceedOffensiveDualRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite duels offensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentIndividualSucceedOffensive1v1RateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite 1c1 offensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentIndividualSucceedOffensiveAerialDualRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite duels aériens offensifs</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentIndividualSucceedPassRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite passes</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentIndividualOffensivePassRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite passes dangereuses</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentIndividualSucceedShortPassRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite passes courtes</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentIndividualSucceedLongPassRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite passes longues</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        }


             
             {OpponentIndividualSucceedSplitingPassRateShow ?
          <></>
          :

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                <h5 className="card-category">Réussite renversements</h5>
                  <i className="tim-icons icon-sound-wave" /> 0000
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={SingleLineChart.data}
                    options={SingleLineChart.options}
                  />
                </div>
              </CardBody>
            </Card>
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

export default MonitoringOpponentDashboard;