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

function MonitoringTeamDashboard() { 
    const [horizontalTabsTeamGlobal, sethorizontalTabsTeamGlobal] = React.useState("Maps"); 
    const [horizontalTabsTeamIndividual, sethorizontalTabsTeamIndividual] = React.useState("Maps");  
    const [verticalTabsIcons, setverticalTabsIcons] = React.useState("MyTeam");
    const [openedCollapseDataFilters, setopenedCollapseDataFilters] = React.useState(false);
    const [multipleSelectPitchGround, setmultipleSelectPitchGround] = React.useState(null);
    const [multipleSelectPitchSpeed, setmultipleSelectPitchSpeed] = React.useState(null);
    const [multipleSelectOpponentTacticalSystem, setmultipleSelectOpponentTacticalSystem] = React.useState(null);
    const [multipleSelectMyTeamTacticalSystem, setmultipleSelectMyTeamTacticalSystem] = React.useState(null);
    const [multipleSelectContext, setmultipleSelectContext] = React.useState(null);
    const [multipleSelectMyTeam, setmultipleSelectMyTeam] = React.useState(null);
    const [multipleSelectVideoTitle, setmultipleSelectVideoTitle] = React.useState(null);
    const [multipleSelectMyTeamPlayer, setmultipleSelectMyTeamPlayer] = React.useState(null);
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

      case "horizontalTabsD":
          sethorizontalTabsD(tabName);
          break;
      case "horizontalTabsTeamGlobal":
          sethorizontalTabsTeamGlobal(tabName);
          break;    
      case "horizontalTabsTeamIndividual":
          sethorizontalTabsTeamIndividual(tabName);
          break;      
      case "verticalTabsIcons":
        setverticalTabsIcons(tabName);
        break;
      default:
        break;
    }
  };
         // Show/hide maps Team > global dashboard
    const [horizontalTabsD, sethorizontalTabsD] = React.useState("Global");  
         const [TeamMappingShow, setTeamMappingShow] = React.useState(true);
         const [TeamAxisShow, setTeamAxisShow] = React.useState(true);
         const [TeamZoneShow, setTeamZoneShow] = React.useState(true);
         const [TeamBoxMappingShow, setTeamBoxMappingShow] = React.useState(true);
         const [TeamBoxAxisShow, setTeamBoxAxisShow] = React.useState(true);
         const [TeamBoxZoneShow, setTeamBoxZoneShow] = React.useState(true);
       
         const handleClickTeamMapping = () => {
           setTeamMappingShow(!TeamMappingShow)}
         const handleClickTeamAxis = () => {
           setTeamAxisShow(!TeamAxisShow)}
         const handleClickTeamZone = () => {
           setTeamZoneShow(!TeamZoneShow)}
         const handleClickTeamBoxMapping = () => {
           setTeamBoxMappingShow(!TeamBoxMappingShow)}
         const handleClickTeamBoxAxis = () => {
           setTeamBoxAxisShow(!TeamBoxAxisShow)}
         const handleClickTeamMappingBoxZone = () => {
           setTeamBoxZoneShow(!TeamBoxZoneShow)}
     
         // Show/hide cards Team > global dashboard 
         const [TeamPassShow, setTeamPassShow] = React.useState(true);
         const [TeamFailedPassShow, setTeamFailedPassShow] = React.useState(true);
         const [TeamSucceedPassShow, setTeamSucceedPassShow] = React.useState(true);
         const [TeamShortPassShow, setTeamShortPassShow] = React.useState(true);
         const [TeamFailedShortPassShow, setTeamFailedShortPassShow] = React.useState(true);
         const [TeamSucceedShortPassShow, setTeamSucceedShortPassShow] = React.useState(true);
         const [TeamDefensiveDuelShow, setTeamDefensiveDuelShow] = React.useState(true);
         const [TeamFailedDefensiveDuelShow, setTeamFailedDefensiveDuelShow] = React.useState(true);
         const [TeamSucceedDefensiveDuelShow, setTeamSucceedDefensiveDuelShow] = React.useState(true);
         const [TeamInterceptionShow, setTeamInterceptionShow] = React.useState(true);
         const [TeamInterventionShow, setTeamInterventionShow] = React.useState(true);
         const [TeamTackleShow, setTeamTackleShow] = React.useState(true);
         const [TeamDribbleShow, setTeamDribbleShow] = React.useState(true);
         const [TeamFailedDribbleShow, setTeamFailedDribbleShow] = React.useState(true);
         const [TeamSucceedDribbleShow, setTeamSucceedDribbleShow] = React.useState(true);
         const [TeamBallSprintShow, setTeamBallSprintShow] = React.useState(true);
         const [TeamDefensiveAerialDuelShow, setTeamDefensiveAerialDuelShow] = React.useState(true);
         const [TeamFailedDefensiveAerialDuelShow, setTeamFailedDefensiveAerialDuelShow] = React.useState(true);
         const [TeamSucceedDefensiveAerialDuelShow, setTeamSucceedDefensiveAerialDuelShow] = React.useState(true);
         const [TeamOffensiveAerialDuelShow, setTeamOffensiveAerialDuelShow] = React.useState(true);
         const [TeamFailedOffensiveAerialDuelShow, setTeamFailedOffensiveAerialDuelShow] = React.useState(true);
         const [TeamSucceedOffensiveAerialDuelShow, setTeamSucceedOffensiveAerialDuelShow] = React.useState(true);
         const [TeamCrossShow, setTeamCrossShow] = React.useState(true);
         const [TeamFailedCrossShow, setTeamFailedCrossShow] = React.useState(true);
         const [TeamSucceedCrossShow, setTeamSucceedCrossShow] = React.useState(true);
         const [TeamLongPassShow, setTeamLongPassShow] = React.useState(true);
         const [TeamFailedLongPassShow, setTeamFailedLongPassShow] = React.useState(true);
         const [TeamSucceedLongPassShow, setTeamSucceedLongPassShow] = React.useState(true);
         const [TeamSplittingPassShow, setTeamSplittingPassShow] = React.useState(true);
         const [TeamFailedSplittingPassShow, setTeamFailedSplittingPassShow] = React.useState(true);
         const [TeamSucceedSplittingPassShow, setTeamSucceedSplittingPassShow] = React.useState(true);
         const [TeamShotShow, setTeamShotShow] = React.useState(true);
         const [TeamFailedShotShow, setTeamFailedShotShow] = React.useState(true);
         const [TeamSucceedShotShow, setTeamSucceedShotShow] = React.useState(true);
         const [TeamGoalkeeperInterventionShow, setTeamGoalkeeperInterventionShow] = React.useState(true);
         const [TeamFailedGoalkeeperInterventionShow, setTeamFailedGoalkeeperInterventionShow] = React.useState(true);
         const [TeamSucceedGoalkeeperInterventionShow, setTeamSucceedGoalkeeperInterventionShow] = React.useState(true);
         const [TeamSaveShow, setTeamSaveShow] = React.useState(true);
         const [TeamFailedSaveShow, setTeamFailedSaveShow] = React.useState(true);
         const [TeamSucceedSaveShow, setTeamSucceedSaveShow] = React.useState(true);
         const [TeamThrowInShow, setTeamThrowInShow] = React.useState(true);
         const [TeamFaltCommitedShow, setTeamFaltCommitedShow] = React.useState(true);
         const [TeamFaltConcededShow, setTeamFaltConcededShow] = React.useState(true);
         const [TeamObtainedCornerShow, setTeamObtainedCornerShow] = React.useState(true);
         const [TeamConcededCornerShow, setTeamConcededCornerShow] = React.useState(true);
         const [TeamCornerPlayedShow, setTeamCornerPlayedShow] = React.useState(true);
         const [TeamAssistPassShow, setTeamAssistPassShow] = React.useState(true);
         const [TeamGoalShow, setTeamGoalShow] = React.useState(true);
         const [TeamKeyPassShow, setTeamKeyPassShow] = React.useState(true);
         const [TeamPartialImbalanceShow, setTeamPartialImbalanceShow] = React.useState(true);
         const [TeamTotalImbalanceShow, setTeamTotalImbalanceShow] = React.useState(true);
         const [TeamDirectAttackShow, setTeamDirectAttackShow] = React.useState(true);
         const [TeamCounterAttackShow, setTeamCounterAttackShow] = React.useState(true);
         const [TeamPlacedAttackShow, setTeamPlacedAttackShow] = React.useState(true);
         const [TeamOffsideShow, setTeamOffsideShow] = React.useState(true);
         const [TeamObtainedPenaltyShow, setTeamObtainedPenaltyShow] = React.useState(true);
         const [TeamYellowCardShow, setTeamYellowCardShow] = React.useState(true);
         const [TeamRedCardShow, setTeamRedCardShow] = React.useState(true);
        
         const handleClickTeamPass= () => {
           setTeamPassShow(!TeamPassShow)};
         const handleClickTeamFailedPass= () => {
           setTeamFailedPassShow(!TeamFailedPassShow)};
         const handleClickTeamSucceedPass= () => {
           setTeamSucceedPassShow(!TeamSucceedPassShow)};
         const handleClickTeamShortPass= () => {
           setTeamShortPassShow(!TeamShortPassShow)};
         const handleClickTeamFailedShortPass= () => {
           setTeamFailedShortPassShow(!TeamFailedShortPassShow)};
         const handleClickTeamSucceedShortPass= () => {
           setTeamSucceedShortPassShow(!TeamSucceedShortPassShow)};
         const handleClickTeamDefensiveDuel= () => {
           setTeamDefensiveDuelShow(!TeamDefensiveDuelShow)};
         const handleClickTeamFailedDefensiveDuel= () => {
           setTeamFailedDefensiveDuelShow(!TeamFailedDefensiveDuelShow)};
         const handleClickTeamSucceedDefensiveDuel= () => {
           setTeamSucceedDefensiveDuelShow(!TeamSucceedDefensiveDuelShow)};
         const handleClickTeamInterception= () => {
           setTeamInterceptionShow(!TeamInterceptionShow)};
         const handleClickTeamIntervention= () => {
           setTeamInterventionShow(!TeamInterventionShow)};
         const handleClickTeamTackle= () => {
           setTeamTackleShow(!TeamTackleShow)};
         const handleClickTeamDribble= () => {
           setTeamDribbleShow(!TeamDribbleShow)};
         const handleClickTeamFailedDribble= () => {
           setTeamFailedDribbleShow(!TeamFailedDribbleShow)};
         const handleClickTeamSucceedDribble= () => {
           setTeamSucceedDribbleShow(!TeamSucceedDribbleShow)};
         const handleClickTeamBallSprint= () => {
           setTeamBallSprintShow(!TeamBallSprintShow)};
         const handleClickTeamDefensiveAerialDuel= () => {
           setTeamDefensiveAerialDuelShow(!TeamDefensiveAerialDuelShow)};
         const handleClickTeamFailedDefensiveAerialDuel= () => {
           setTeamFailedDefensiveAerialDuelShow(!TeamFailedDefensiveAerialDuelShow)};
         const handleClickTeamSucceedDefensiveAerialDuel= () => {
           setTeamSucceedDefensiveAerialDuelShow(!TeamSucceedDefensiveAerialDuelShow)};
         const handleClickTeamOffensiveAerialDuel= () => {
           setTeamOffensiveAerialDuelShow(!TeamOffensiveAerialDuelShow)};
         const handleClickTeamFailedOffensiveAerialDuel= () => {
           setTeamFailedOffensiveAerialDuelShow(!TeamFailedOffensiveAerialDuelShow)};
         const handleClickTeamSucceedOffensiveAerialDuel= () => {
           setTeamSucceedOffensiveAerialDuelShow(!TeamSucceedOffensiveAerialDuelShow)};
         const handleClickTeamCross= () => {
           setTeamCrossShow(!TeamCrossShow)};
         const handleClickTeamFailedCross= () => {
           setTeamFailedCrossShow(!TeamFailedCrossShow)};
         const handleClickTeamSucceedCross= () => {
           setTeamSucceedCrossShow(!TeamSucceedCrossShow)};
         const handleClickTeamLongPass= () => {
           setTeamLongPassShow(!TeamLongPassShow)};
         const handleClickTeamFailedLongPass= () => {
           setTeamFailedLongPassShow(!TeamFailedLongPassShow)};
         const handleClickTeamSucceedLongPass= () => {
           setTeamSucceedLongPassShow(!TeamSucceedLongPassShow)};
         const handleClickTeamSplittingPass= () => {
           setTeamSplittingPassShow(!TeamSplittingPassShow)};
         const handleClickTeamFailedSplittingPass= () => {
           setTeamFailedSplittingPassShow(!TeamFailedSplittingPassShow)};
         const handleClickTeamSucceedSplittingPass= () => {
           setTeamSucceedSplittingPassShow(!TeamSucceedSplittingPassShow)};
         const handleClickTeamShot= () => {
           setTeamShotShow(!TeamShotShow)};
         const handleClickTeamFailedShot= () => {
           setTeamFailedShotShow(!TeamFailedShotShow)};
         const handleClickTeamSucceedShot= () => {
           setTeamSucceedShotShow(!TeamSucceedShotShow)};
         const handleClickTeamGoalkeeperIntervention= () => {
           setTeamGoalkeeperInterventionShow(!TeamGoalkeeperInterventionShow)};
         const handleClickTeamFailedGoalkeeperIntervention= () => {
           setTeamFailedGoalkeeperInterventionShow(!TeamFailedGoalkeeperInterventionShow)};
         const handleClickTeamSucceedGoalkeeperIntervention= () => {
           setTeamSucceedGoalkeeperInterventionShow(!TeamSucceedGoalkeeperInterventionShow)};
         const handleClickTeamSave= () => {
           setTeamSaveShow(!TeamSaveShow)};
         const handleClickTeamFailedSave= () => {
           setTeamFailedSaveShow(!TeamFailedSaveShow)};
         const handleClickTeamSucceedSave= () => {
           setTeamSucceedSaveShow(!TeamSucceedSaveShow)};
         const handleClickTeamThrowIn= () => {
           setTeamThrowInShow(!TeamThrowInShow)};
         const handleClickTeamFaltCommited= () => {
           setTeamFaltCommitedShow(!TeamFaltCommitedShow)};
         const handleClickTeamFaltConceded= () => {
           setTeamFaltConcededShow(!TeamFaltConcededShow)};
         const handleClickTeamObtainedCorner= () => {
           setTeamObtainedCornerShow(!TeamObtainedCornerShow)};
         const handleClickTeamConcededCorner= () => {
           setTeamConcededCornerShow(!TeamConcededCornerShow)};
         const handleClickTeamCornerPlayed= () => {
           setTeamCornerPlayedShow(!TeamCornerPlayedShow)};
         const handleClickTeamAssistPass= () => {
           setTeamAssistPassShow(!TeamAssistPassShow)};
         const handleClickTeamGoal= () => {
           setTeamGoalShow(!TeamGoalShow)};
         const handleClickTeamKeyPass= () => {
           setTeamKeyPassShow(!TeamKeyPassShow)};
         const handleClickTeamPartialImbalance= () => {
           setTeamPartialImbalanceShow(!TeamPartialImbalanceShow)};
         const handleClickTeamTotalImbalance= () => {
           setTeamTotalImbalanceShow(!TeamTotalImbalanceShow)};
         const handleClickTeamDirectAttack= () => {
           setTeamDirectAttackShow(!TeamDirectAttackShow)};
         const handleClickTeamCounterAttack= () => {
           setTeamCounterAttackShow(!TeamCounterAttackShow)};
         const handleClickTeamPlacedAttack= () => {
           setTeamPlacedAttackShow(!TeamPlacedAttackShow)};
         const handleClickTeamOffside= () => {
           setTeamOffsideShow(!TeamOffsideShow)};
         const handleClickTeamObtainedPenalty= () => {
           setTeamObtainedPenaltyShow(!TeamObtainedPenaltyShow)};
         const handleClickTeamYellowCard= () => {
           setTeamYellowCardShow(!TeamYellowCardShow)};
         const handleClickTeamRedCard= () => {
           setTeamRedCardShow(!TeamRedCardShow)};
     
         // Show/hide efficiency diagram Team > global dashboard 
           const [TeamPass_EfficiencyShow, setTeamPass_EfficiencyShow] = React.useState(true);
           const [TeamShort_pass_EfficiencyShow, setTeamShort_pass_EfficiencyShow] = React.useState(true);
           const [TeamDefensive_1v1_EfficiencyShow, setTeamDefensive_1v1_EfficiencyShow] = React.useState(true);
           const [TeamOffensive_1v1_EfficiencyShow, setTeamOffensive_1v1_EfficiencyShow] = React.useState(true);
           const [TeamDefensive_Aerial_duel_EfficiencyShow, setTeamDefensive_Aerial_duel_EfficiencyShow] = React.useState(true);
           const [TeamOffensive_aerial_duel_EfficiencyShow, setTeamOffensive_aerial_duel_EfficiencyShow] = React.useState(true);
           const [TeamCross_EfficiencyShow, setTeamCross_EfficiencyShow] = React.useState(true);
           const [TeamLong_pass_EfficiencyShow, setTeamLong_pass_EfficiencyShow] = React.useState(true);
           const [TeamSplitting_pass_EfficiencyShow, setTeamSplitting_pass_EfficiencyShow] = React.useState(true);
           const [TeamShot_EfficiencyShow, setTeamShot_EfficiencyShow] = React.useState(true);
           const [TeamGoalkeeper_Intervention_EfficiencyShow, setTeamGoalkeeper_Intervention_EfficiencyShow] = React.useState(true);
           const [TeamSave_EfficiencyShow, setTeamSave_EfficiencyShow] = React.useState(true);
           const [TeamThrowIn_EfficiencyShow, setTeamThrowIn_EfficiencyShow] = React.useState(true);
           const [TeamFalt_EfficiencyShow, setTeamFalt_EfficiencyShow] = React.useState(true);
           const [TeamCorner_EfficiencyShow, setTeamCorner_EfficiencyShow] = React.useState(true);
           const [TeamGoalkick_EfficiencyShow, setTeamGoalkick_EfficiencyShow] = React.useState(true);
           const [TeamPenalty_EfficiencyShow, setTeamPenalty_EfficiencyShow] = React.useState(true);
          
           const handleClickTeamPass_Efficiency= () => {
             setTeamPass_EfficiencyShow(!TeamPass_EfficiencyShow)};
           const handleClickTeamShort_pass_Efficiency= () => {
             setTeamShort_pass_EfficiencyShow(!TeamShort_pass_EfficiencyShow)};
           const handleClickTeamDefensive_1v1_Efficiency= () => {
             setTeamDefensive_1v1_EfficiencyShow(!TeamDefensive_1v1_EfficiencyShow)};
           const handleClickTeamOffensive_1v1_Efficiency= () => {
             setTeamOffensive_1v1_EfficiencyShow(!TeamOffensive_1v1_EfficiencyShow)};
           const handleClickTeamDefensive_Aerial_duel_Efficiency= () => {
             setTeamDefensive_Aerial_duel_EfficiencyShow(!TeamDefensive_Aerial_duel_EfficiencyShow)};
           const handleClickTeamOffensive_aerial_duel_Efficiency= () => {
             setTeamOffensive_aerial_duel_EfficiencyShow(!TeamOffensive_aerial_duel_EfficiencyShow)};
           const handleClickTeamCross_Efficiency= () => {
             setTeamCross_EfficiencyShow(!TeamCross_EfficiencyShow)};
           const handleClickTeamLong_pass_Efficiency= () => {
             setTeamLong_pass_EfficiencyShow(!TeamLong_pass_EfficiencyShow)};
           const handleClickTeamSplitting_pass_Efficiency= () => {
             setTeamSplitting_pass_EfficiencyShow(!TeamSplitting_pass_EfficiencyShow)};
           const handleClickTeamShot_Efficiency= () => {
             setTeamShot_EfficiencyShow(!TeamShot_EfficiencyShow)};
           const handleClickTeamGoalkeeper_Intervention_Efficiency= () => {
             setTeamGoalkeeper_Intervention_EfficiencyShow(!TeamGoalkeeper_Intervention_EfficiencyShow)};
           const handleClickTeamSave_Efficiency= () => {
             setTeamSave_EfficiencyShow(!TeamSave_EfficiencyShow)};
           const handleClickTeamThrowIn_Efficiency= () => {
             setTeamThrowIn_EfficiencyShow(!TeamThrowIn_EfficiencyShow)};
           const handleClickTeamFalt_Efficiency= () => {
             setTeamFalt_EfficiencyShow(!TeamFalt_EfficiencyShow)};
           const handleClickTeamCorner_Efficiency= () => {
             setTeamCorner_EfficiencyShow(!TeamCorner_EfficiencyShow)};
           const handleClickTeamGoalkick_Efficiency= () => {
             setTeamGoalkick_EfficiencyShow(!TeamGoalkick_EfficiencyShow)};
           const handleClickTeamPenalty_Efficiency= () => {
             setTeamPenalty_EfficiencyShow(!TeamPenalty_EfficiencyShow)};
       
         // Show/hide Success Rate Team > global dashboard 
         const [TeamSucceedDefensiveDualRateShow, setTeamSucceedDefensiveDualRateShow] = React.useState(true);
         const [TeamSucceedDefensive1v1RateShow, setTeamSucceedDefensive1v1RateShow] = React.useState(true);
         const [TeamSucceedDefensiveAerialDualShow, setTeamSucceedDefensiveAerialDualShow] = React.useState(true);
         const [TeamSucceedOffensiveDualRateShow, setTeamSucceedOffensiveDualRateShow] = React.useState(true);
         const [TeamSucceedOffensive1v1RateShow, setTeamSucceedOffensive1v1RateShow] = React.useState(true);
         const [TeamSucceedOffensiveAerialDualRateShow, setTeamSucceedOffensiveAerialDualRateShow] = React.useState(true);
         const [TeamSucceedPassRateShow, setTeamSucceedPassRateShow] = React.useState(true);
         const [TeamOffensivePassRateShow, setTeamOffensivePassRateShow] = React.useState(true);
         const [TeamSucceedShortPassRateShow, setTeamSucceedShortPassRateShow] = React.useState(true);
         const [TeamSucceedLongPassRateShow, setTeamSucceedLongPassRateShow] = React.useState(true);
         const [TeamSucceedSplitingPassRateShow, setTeamSucceedSplitingPassRateShow] = React.useState(true);   
     
         const handleClickTeamSucceedDefensiveDualRate= () => {
           setTeamSucceedDefensiveDualRateShow(!TeamSucceedDefensiveDualRateShow)};
         const handleClickTeamSucceedDefensive1v1Rate= () => {
           setTeamSucceedDefensive1v1RateShow(!TeamSucceedDefensive1v1RateShow)};
         const handleClickTeamSucceedDefensiveAerialDual= () => {
           setTeamSucceedDefensiveAerialDualShow(!TeamSucceedDefensiveAerialDualShow)};
         const handleClickTeamSucceedOffensiveDualRate= () => {
           setTeamSucceedOffensiveDualRateShow(!TeamSucceedOffensiveDualRateShow)};
         const handleClickTeamSucceedOffensive1v1Rate= () => {
           setTeamSucceedOffensive1v1RateShow(!TeamSucceedOffensive1v1RateShow)};
         const handleClickTeamSucceedOffensiveAerialDualRate= () => {
           setTeamSucceedOffensiveAerialDualRateShow(!TeamSucceedOffensiveAerialDualRateShow)};
         const handleClickTeamSucceedPassRate= () => {
           setTeamSucceedPassRateShow(!TeamSucceedPassRateShow)};
         const handleClickTeamOffensivePassRate= () => {
           setTeamOffensivePassRateShow(!TeamOffensivePassRateShow)};
         const handleClickTeamSucceedShortPassRate= () => {
           setTeamSucceedShortPassRateShow(!TeamSucceedShortPassRateShow)};
         const handleClickTeamSucceedLongPassRate= () => {
           setTeamSucceedLongPassRateShow(!TeamSucceedLongPassRateShow)};
         const handleClickTeamSucceedSplitingPassRate= () => {
           setTeamSucceedSplitingPassRateShow(!TeamSucceedSplitingPassRateShow)};
     
     
         // Show/hide maps Team > individual > global dashboard
       
         const [TeamIndividualMappingShow, setTeamIndividualMappingShow] = React.useState(true);
         const [TeamIndividualAxisShow, setTeamIndividualAxisShow] = React.useState(true);
         const [TeamIndividualZoneShow, setTeamIndividualZoneShow] = React.useState(true);
         const [TeamIndividualBoxMappingShow, setTeamIndividualBoxMappingShow] = React.useState(true);
         const [TeamIndividualBoxAxisShow, setTeamIndividualBoxAxisShow] = React.useState(true);
         const [TeamIndividualBoxZoneShow, setTeamIndividualBoxZoneShow] = React.useState(true);
     
       
         const handleClickTeamIndividualMapping = () => {
           setTeamIndividualMappingShow(!TeamIndividualMappingShow)}
         const handleClickTeamIndividualAxis = () => {
           setTeamIndividualAxisShow(!TeamIndividualAxisShow)}
         const handleClickTeamIndividualZone = () => {
           setTeamIndividualZoneShow(!TeamIndividualZoneShow)}
         const handleClickTeamIndividualBoxMapping = () => {
           setTeamIndividualBoxMappingShow(!TeamIndividualBoxMappingShow)}
         const handleClickTeamIndividualBoxAxis = () => {
           setTeamIndividualBoxAxisShow(!TeamIndividualBoxAxisShow)}
         const handleClickTeamIndividualMappingBoxZone = () => {
           setTeamIndividualBoxZoneShow(!TeamIndividualBoxZoneShow)}
     
         // Show/hide cards  Team > individual > global dashboard 
         const [TeamIndividualPassShow, setTeamIndividualPassShow] = React.useState(true);
         const [TeamIndividualFailedPassShow, setTeamIndividualFailedPassShow] = React.useState(true);
         const [TeamIndividualSucceedPassShow, setTeamIndividualSucceedPassShow] = React.useState(true);
         const [TeamIndividualShortPassShow, setTeamIndividualShortPassShow] = React.useState(true);
         const [TeamIndividualFailedShortPassShow, setTeamIndividualFailedShortPassShow] = React.useState(true);
         const [TeamIndividualSucceedShortPassShow, setTeamIndividualSucceedShortPassShow] = React.useState(true);
         const [TeamIndividualDefensiveDuelShow, setTeamIndividualDefensiveDuelShow] = React.useState(true);
         const [TeamIndividualFailedDefensiveDuelShow, setTeamIndividualFailedDefensiveDuelShow] = React.useState(true);
         const [TeamIndividualSucceedDefensiveDuelShow, setTeamIndividualSucceedDefensiveDuelShow] = React.useState(true);
         const [TeamIndividualInterceptionShow, setTeamIndividualInterceptionShow] = React.useState(true);
         const [TeamIndividualInterventionShow, setTeamIndividualInterventionShow] = React.useState(true);
         const [TeamIndividualTackleShow, setTeamIndividualTackleShow] = React.useState(true);
         const [TeamIndividualDribbleShow, setTeamIndividualDribbleShow] = React.useState(true);
         const [TeamIndividualFailedDribbleShow, setTeamIndividualFailedDribbleShow] = React.useState(true);
         const [TeamIndividualSucceedDribbleShow, setTeamIndividualSucceedDribbleShow] = React.useState(true);
         const [TeamIndividualBallSprintShow, setTeamIndividualBallSprintShow] = React.useState(true);
         const [TeamIndividualDefensiveAerialDuelShow, setTeamIndividualDefensiveAerialDuelShow] = React.useState(true);
         const [TeamIndividualFailedDefensiveAerialDuelShow, setTeamIndividualFailedDefensiveAerialDuelShow] = React.useState(true);
         const [TeamIndividualSucceedDefensiveAerialDuelShow, setTeamIndividualSucceedDefensiveAerialDuelShow] = React.useState(true);
         const [TeamIndividualOffensiveAerialDuelShow, setTeamIndividualOffensiveAerialDuelShow] = React.useState(true);
         const [TeamIndividualFailedOffensiveAerialDuelShow, setTeamIndividualFailedOffensiveAerialDuelShow] = React.useState(true);
         const [TeamIndividualSucceedOffensiveAerialDuelShow, setTeamIndividualSucceedOffensiveAerialDuelShow] = React.useState(true);
         const [TeamIndividualCrossShow, setTeamIndividualCrossShow] = React.useState(true);
         const [TeamIndividualFailedCrossShow, setTeamIndividualFailedCrossShow] = React.useState(true);
         const [TeamIndividualSucceedCrossShow, setTeamIndividualSucceedCrossShow] = React.useState(true);
         const [TeamIndividualLongPassShow, setTeamIndividualLongPassShow] = React.useState(true);
         const [TeamIndividualFailedLongPassShow, setTeamIndividualFailedLongPassShow] = React.useState(true);
         const [TeamIndividualSucceedLongPassShow, setTeamIndividualSucceedLongPassShow] = React.useState(true);
         const [TeamIndividualSplittingPassShow, setTeamIndividualSplittingPassShow] = React.useState(true);
         const [TeamIndividualFailedSplittingPassShow, setTeamIndividualFailedSplittingPassShow] = React.useState(true);
         const [TeamIndividualSucceedSplittingPassShow, setTeamIndividualSucceedSplittingPassShow] = React.useState(true);
         const [TeamIndividualShotShow, setTeamIndividualShotShow] = React.useState(true);
         const [TeamIndividualFailedShotShow, setTeamIndividualFailedShotShow] = React.useState(true);
         const [TeamIndividualSucceedShotShow, setTeamIndividualSucceedShotShow] = React.useState(true);
         const [TeamIndividualGoalkeeperInterventionShow, setTeamIndividualGoalkeeperInterventionShow] = React.useState(true);
         const [TeamIndividualFailedGoalkeeperInterventionShow, setTeamIndividualFailedGoalkeeperInterventionShow] = React.useState(true);
         const [TeamIndividualSucceedGoalkeeperInterventionShow, setTeamIndividualSucceedGoalkeeperInterventionShow] = React.useState(true);
         const [TeamIndividualSaveShow, setTeamIndividualSaveShow] = React.useState(true);
         const [TeamIndividualFailedSaveShow, setTeamIndividualFailedSaveShow] = React.useState(true);
         const [TeamIndividualSucceedSaveShow, setTeamIndividualSucceedSaveShow] = React.useState(true);
         const [TeamIndividualThrowInShow, setTeamIndividualThrowInShow] = React.useState(true);
         const [TeamIndividualFaltCommitedShow, setTeamIndividualFaltCommitedShow] = React.useState(true);
         const [TeamIndividualFaltConcededShow, setTeamIndividualFaltConcededShow] = React.useState(true);
         const [TeamIndividualObtainedCornerShow, setTeamIndividualObtainedCornerShow] = React.useState(true);
         const [TeamIndividualConcededCornerShow, setTeamIndividualConcededCornerShow] = React.useState(true);
         const [TeamIndividualCornerPlayedShow, setTeamIndividualCornerPlayedShow] = React.useState(true);
         const [TeamIndividualAssistPassShow, setTeamIndividualAssistPassShow] = React.useState(true);
         const [TeamIndividualGoalShow, setTeamIndividualGoalShow] = React.useState(true);
         const [TeamIndividualKeyPassShow, setTeamIndividualKeyPassShow] = React.useState(true);
         const [TeamIndividualPartialImbalanceShow, setTeamIndividualPartialImbalanceShow] = React.useState(true);
         const [TeamIndividualTotalImbalanceShow, setTeamIndividualTotalImbalanceShow] = React.useState(true);
         const [TeamIndividualDirectAttackShow, setTeamIndividualDirectAttackShow] = React.useState(true);
         const [TeamIndividualCounterAttackShow, setTeamIndividualCounterAttackShow] = React.useState(true);
         const [TeamIndividualPlacedAttackShow, setTeamIndividualPlacedAttackShow] = React.useState(true);
         const [TeamIndividualOffsideShow, setTeamIndividualOffsideShow] = React.useState(true);
         const [TeamIndividualObtainedPenaltyShow, setTeamIndividualObtainedPenaltyShow] = React.useState(true);
         const [TeamIndividualYellowCardShow, setTeamIndividualYellowCardShow] = React.useState(true);
         const [TeamIndividualRedCardShow, setTeamIndividualRedCardShow] = React.useState(true);
        
         const handleClickTeamIndividualPass= () => {
           setTeamIndividualPassShow(!TeamIndividualPassShow)};
         const handleClickTeamIndividualFailedPass= () => {
           setTeamIndividualFailedPassShow(!TeamIndividualFailedPassShow)};
         const handleClickTeamIndividualSucceedPass= () => {
           setTeamIndividualSucceedPassShow(!TeamIndividualSucceedPassShow)};
         const handleClickTeamIndividualShortPass= () => {
           setTeamIndividualShortPassShow(!TeamIndividualShortPassShow)};
         const handleClickTeamIndividualFailedShortPass= () => {
           setTeamIndividualFailedShortPassShow(!TeamIndividualFailedShortPassShow)};
         const handleClickTeamIndividualSucceedShortPass= () => {
           setTeamIndividualSucceedShortPassShow(!TeamIndividualSucceedShortPassShow)};
         const handleClickTeamIndividualDefensiveDuel= () => {
           setTeamIndividualDefensiveDuelShow(!TeamIndividualDefensiveDuelShow)};
         const handleClickTeamIndividualFailedDefensiveDuel= () => {
           setTeamIndividualFailedDefensiveDuelShow(!TeamIndividualFailedDefensiveDuelShow)};
         const handleClickTeamIndividualSucceedDefensiveDuel= () => {
           setTeamIndividualSucceedDefensiveDuelShow(!TeamIndividualSucceedDefensiveDuelShow)};
         const handleClickTeamIndividualInterception= () => {
           setTeamIndividualInterceptionShow(!TeamIndividualInterceptionShow)};
         const handleClickTeamIndividualIntervention= () => {
           setTeamIndividualInterventionShow(!TeamIndividualInterventionShow)};
         const handleClickTeamIndividualTackle= () => {
           setTeamIndividualTackleShow(!TeamIndividualTackleShow)};
         const handleClickTeamIndividualDribble= () => {
           setTeamIndividualDribbleShow(!TeamIndividualDribbleShow)};
         const handleClickTeamIndividualFailedDribble= () => {
           setTeamIndividualFailedDribbleShow(!TeamIndividualFailedDribbleShow)};
         const handleClickTeamIndividualSucceedDribble= () => {
           setTeamIndividualSucceedDribbleShow(!TeamIndividualSucceedDribbleShow)};
         const handleClickTeamIndividualBallSprint= () => {
           setTeamIndividualBallSprintShow(!TeamIndividualBallSprintShow)};
         const handleClickTeamIndividualDefensiveAerialDuel= () => {
           setTeamIndividualDefensiveAerialDuelShow(!TeamIndividualDefensiveAerialDuelShow)};
         const handleClickTeamIndividualFailedDefensiveAerialDuel= () => {
           setTeamIndividualFailedDefensiveAerialDuelShow(!TeamIndividualFailedDefensiveAerialDuelShow)};
         const handleClickTeamIndividualSucceedDefensiveAerialDuel= () => {
           setTeamIndividualSucceedDefensiveAerialDuelShow(!TeamIndividualSucceedDefensiveAerialDuelShow)};
         const handleClickTeamIndividualOffensiveAerialDuel= () => {
           setTeamIndividualOffensiveAerialDuelShow(!TeamIndividualOffensiveAerialDuelShow)};
         const handleClickTeamIndividualFailedOffensiveAerialDuel= () => {
           setTeamIndividualFailedOffensiveAerialDuelShow(!TeamIndividualFailedOffensiveAerialDuelShow)};
         const handleClickTeamIndividualSucceedOffensiveAerialDuel= () => {
           setTeamIndividualSucceedOffensiveAerialDuelShow(!TeamIndividualSucceedOffensiveAerialDuelShow)};
         const handleClickTeamIndividualCross= () => {
           setTeamIndividualCrossShow(!TeamIndividualCrossShow)};
         const handleClickTeamIndividualFailedCross= () => {
           setTeamIndividualFailedCrossShow(!TeamIndividualFailedCrossShow)};
         const handleClickTeamIndividualSucceedCross= () => {
           setTeamIndividualSucceedCrossShow(!TeamIndividualSucceedCrossShow)};
         const handleClickTeamIndividualLongPass= () => {
           setTeamIndividualLongPassShow(!TeamIndividualLongPassShow)};
         const handleClickTeamIndividualFailedLongPass= () => {
           setTeamIndividualFailedLongPassShow(!TeamIndividualFailedLongPassShow)};
         const handleClickTeamIndividualSucceedLongPass= () => {
           setTeamIndividualSucceedLongPassShow(!TeamIndividualSucceedLongPassShow)};
         const handleClickTeamIndividualSplittingPass= () => {
           setTeamIndividualSplittingPassShow(!TeamIndividualSplittingPassShow)};
         const handleClickTeamIndividualFailedSplittingPass= () => {
           setTeamIndividualFailedSplittingPassShow(!TeamIndividualFailedSplittingPassShow)};
         const handleClickTeamIndividualSucceedSplittingPass= () => {
           setTeamIndividualSucceedSplittingPassShow(!TeamIndividualSucceedSplittingPassShow)};
         const handleClickTeamIndividualShot= () => {
           setTeamIndividualShotShow(!TeamIndividualShotShow)};
         const handleClickTeamIndividualFailedShot= () => {
           setTeamIndividualFailedShotShow(!TeamIndividualFailedShotShow)};
         const handleClickTeamIndividualSucceedShot= () => {
           setTeamIndividualSucceedShotShow(!TeamIndividualSucceedShotShow)};
         const handleClickTeamIndividualGoalkeeperIntervention= () => {
           setTeamIndividualGoalkeeperInterventionShow(!TeamIndividualGoalkeeperInterventionShow)};
         const handleClickTeamIndividualFailedGoalkeeperIntervention= () => {
           setTeamIndividualFailedGoalkeeperInterventionShow(!TeamIndividualFailedGoalkeeperInterventionShow)};
         const handleClickTeamIndividualSucceedGoalkeeperIntervention= () => {
           setTeamIndividualSucceedGoalkeeperInterventionShow(!TeamIndividualSucceedGoalkeeperInterventionShow)};
         const handleClickTeamIndividualSave= () => {
           setTeamIndividualSaveShow(!TeamIndividualSaveShow)};
         const handleClickTeamIndividualFailedSave= () => {
           setTeamIndividualFailedSaveShow(!TeamIndividualFailedSaveShow)};
         const handleClickTeamIndividualSucceedSave= () => {
           setTeamIndividualSucceedSaveShow(!TeamIndividualSucceedSaveShow)};
         const handleClickTeamIndividualThrowIn= () => {
           setTeamIndividualThrowInShow(!TeamIndividualThrowInShow)};
         const handleClickTeamIndividualFaltCommited= () => {
           setTeamIndividualFaltCommitedShow(!TeamIndividualFaltCommitedShow)};
         const handleClickTeamIndividualFaltConceded= () => {
           setTeamIndividualFaltConcededShow(!TeamIndividualFaltConcededShow)};
         const handleClickTeamIndividualObtainedCorner= () => {
           setTeamIndividualObtainedCornerShow(!TeamIndividualObtainedCornerShow)};
         const handleClickTeamIndividualConcededCorner= () => {
           setTeamIndividualConcededCornerShow(!TeamIndividualConcededCornerShow)};
         const handleClickTeamIndividualCornerPlayed= () => {
           setTeamIndividualCornerPlayedShow(!TeamIndividualCornerPlayedShow)};
         const handleClickTeamIndividualAssistPass= () => {
           setTeamIndividualAssistPassShow(!TeamIndividualAssistPassShow)};
         const handleClickTeamIndividualGoal= () => {
           setTeamIndividualGoalShow(!TeamIndividualGoalShow)};
         const handleClickTeamIndividualKeyPass= () => {
           setTeamIndividualKeyPassShow(!TeamIndividualKeyPassShow)};
         const handleClickTeamIndividualPartialImbalance= () => {
           setTeamIndividualPartialImbalanceShow(!TeamIndividualPartialImbalanceShow)};
         const handleClickTeamIndividualTotalImbalance= () => {
           setTeamIndividualTotalImbalanceShow(!TeamIndividualTotalImbalanceShow)};
         const handleClickTeamIndividualDirectAttack= () => {
           setTeamIndividualDirectAttackShow(!TeamIndividualDirectAttackShow)};
         const handleClickTeamIndividualCounterAttack= () => {
           setTeamIndividualCounterAttackShow(!TeamIndividualCounterAttackShow)};
         const handleClickTeamIndividualPlacedAttack= () => {
           setTeamIndividualPlacedAttackShow(!TeamIndividualPlacedAttackShow)};
         const handleClickTeamIndividualOffside= () => {
           setTeamIndividualOffsideShow(!TeamIndividualOffsideShow)};
         const handleClickTeamIndividualObtainedPenalty= () => {
           setTeamIndividualObtainedPenaltyShow(!TeamIndividualObtainedPenaltyShow)};
         const handleClickTeamIndividualYellowCard= () => {
           setTeamIndividualYellowCardShow(!TeamIndividualYellowCardShow)};
         const handleClickTeamIndividualRedCard= () => {
           setTeamIndividualRedCardShow(!TeamIndividualRedCardShow)};
     
         // Show/hide efficiency diagram  Team > individual > global dashboard 
           const [TeamIndividualPass_EfficiencyShow, setTeamIndividualPass_EfficiencyShow] = React.useState(true);
           const [TeamIndividualShort_pass_EfficiencyShow, setTeamIndividualShort_pass_EfficiencyShow] = React.useState(true);
           const [TeamIndividualDefensive_1v1_EfficiencyShow, setTeamIndividualDefensive_1v1_EfficiencyShow] = React.useState(true);
           const [TeamIndividualOffensive_1v1_EfficiencyShow, setTeamIndividualOffensive_1v1_EfficiencyShow] = React.useState(true);
           const [TeamIndividualDefensive_Aerial_duel_EfficiencyShow, setTeamIndividualDefensive_Aerial_duel_EfficiencyShow] = React.useState(true);
           const [TeamIndividualOffensive_aerial_duel_EfficiencyShow, setTeamIndividualOffensive_aerial_duel_EfficiencyShow] = React.useState(true);
           const [TeamIndividualCross_EfficiencyShow, setTeamIndividualCross_EfficiencyShow] = React.useState(true);
           const [TeamIndividualLong_pass_EfficiencyShow, setTeamIndividualLong_pass_EfficiencyShow] = React.useState(true);
           const [TeamIndividualSplitting_pass_EfficiencyShow, setTeamIndividualSplitting_pass_EfficiencyShow] = React.useState(true);
           const [TeamIndividualShot_EfficiencyShow, setTeamIndividualShot_EfficiencyShow] = React.useState(true);
           const [TeamIndividualGoalkeeper_Intervention_EfficiencyShow, setTeamIndividualGoalkeeper_Intervention_EfficiencyShow] = React.useState(true);
           const [TeamIndividualSave_EfficiencyShow, setTeamIndividualSave_EfficiencyShow] = React.useState(true);
           const [TeamIndividualThrowIn_EfficiencyShow, setTeamIndividualThrowIn_EfficiencyShow] = React.useState(true);
           const [TeamIndividualFalt_EfficiencyShow, setTeamIndividualFalt_EfficiencyShow] = React.useState(true);
           const [TeamIndividualCorner_EfficiencyShow, setTeamIndividualCorner_EfficiencyShow] = React.useState(true);
           const [TeamIndividualGoalkick_EfficiencyShow, setTeamIndividualGoalkick_EfficiencyShow] = React.useState(true);
           const [TeamIndividualPenalty_EfficiencyShow, setTeamIndividualPenalty_EfficiencyShow] = React.useState(true);
          
           const handleClickTeamIndividualPass_Efficiency= () => {
             setTeamIndividualPass_EfficiencyShow(!TeamIndividualPass_EfficiencyShow)};
           const handleClickTeamIndividualShort_pass_Efficiency= () => {
             setTeamIndividualShort_pass_EfficiencyShow(!TeamIndividualShort_pass_EfficiencyShow)};
           const handleClickTeamIndividualDefensive_1v1_Efficiency= () => {
             setTeamIndividualDefensive_1v1_EfficiencyShow(!TeamIndividualDefensive_1v1_EfficiencyShow)};
           const handleClickTeamIndividualOffensive_1v1_Efficiency= () => {
             setTeamIndividualOffensive_1v1_EfficiencyShow(!TeamIndividualOffensive_1v1_EfficiencyShow)};
           const handleClickTeamIndividualDefensive_Aerial_duel_Efficiency= () => {
             setTeamIndividualDefensive_Aerial_duel_EfficiencyShow(!TeamIndividualDefensive_Aerial_duel_EfficiencyShow)};
           const handleClickTeamIndividualOffensive_aerial_duel_Efficiency= () => {
             setTeamIndividualOffensive_aerial_duel_EfficiencyShow(!TeamIndividualOffensive_aerial_duel_EfficiencyShow)};
           const handleClickTeamIndividualCross_Efficiency= () => {
             setTeamIndividualCross_EfficiencyShow(!TeamIndividualCross_EfficiencyShow)};
           const handleClickTeamIndividualLong_pass_Efficiency= () => {
             setTeamIndividualLong_pass_EfficiencyShow(!TeamIndividualLong_pass_EfficiencyShow)};
           const handleClickTeamIndividualSplitting_pass_Efficiency= () => {
             setTeamIndividualSplitting_pass_EfficiencyShow(!TeamIndividualSplitting_pass_EfficiencyShow)};
           const handleClickTeamIndividualShot_Efficiency= () => {
             setTeamIndividualShot_EfficiencyShow(!TeamIndividualShot_EfficiencyShow)};
           const handleClickTeamIndividualGoalkeeper_Intervention_Efficiency= () => {
             setTeamIndividualGoalkeeper_Intervention_EfficiencyShow(!TeamIndividualGoalkeeper_Intervention_EfficiencyShow)};
           const handleClickTeamIndividualSave_Efficiency= () => {
             setTeamIndividualSave_EfficiencyShow(!TeamIndividualSave_EfficiencyShow)};
           const handleClickTeamIndividualThrowIn_Efficiency= () => {
             setTeamIndividualThrowIn_EfficiencyShow(!TeamIndividualThrowIn_EfficiencyShow)};
           const handleClickTeamIndividualFalt_Efficiency= () => {
             setTeamIndividualFalt_EfficiencyShow(!TeamIndividualFalt_EfficiencyShow)};
           const handleClickTeamIndividualCorner_Efficiency= () => {
             setTeamIndividualCorner_EfficiencyShow(!TeamIndividualCorner_EfficiencyShow)};
           const handleClickTeamIndividualGoalkick_Efficiency= () => {
             setTeamIndividualGoalkick_EfficiencyShow(!TeamIndividualGoalkick_EfficiencyShow)};
           const handleClickTeamIndividualPenalty_Efficiency= () => {
             setTeamIndividualPenalty_EfficiencyShow(!TeamIndividualPenalty_EfficiencyShow)};
       
         // Show/hide Success Rate  Team > individual > global dashboard 
         const [TeamIndividualSucceedDefensiveDualRateShow, setTeamIndividualSucceedDefensiveDualRateShow] = React.useState(true);
         const [TeamIndividualSucceedDefensive1v1RateShow, setTeamIndividualSucceedDefensive1v1RateShow] = React.useState(true);
         const [TeamIndividualSucceedDefensiveAerialDualShow, setTeamIndividualSucceedDefensiveAerialDualShow] = React.useState(true);
         const [TeamIndividualSucceedOffensiveDualRateShow, setTeamIndividualSucceedOffensiveDualRateShow] = React.useState(true);
         const [TeamIndividualSucceedOffensive1v1RateShow, setTeamIndividualSucceedOffensive1v1RateShow] = React.useState(true);
         const [TeamIndividualSucceedOffensiveAerialDualRateShow, setTeamIndividualSucceedOffensiveAerialDualRateShow] = React.useState(true);
         const [TeamIndividualSucceedPassRateShow, setTeamIndividualSucceedPassRateShow] = React.useState(true);
         const [TeamIndividualOffensivePassRateShow, setTeamIndividualOffensivePassRateShow] = React.useState(true);
         const [TeamIndividualSucceedShortPassRateShow, setTeamIndividualSucceedShortPassRateShow] = React.useState(true);
         const [TeamIndividualSucceedLongPassRateShow, setTeamIndividualSucceedLongPassRateShow] = React.useState(true);
         const [TeamIndividualSucceedSplitingPassRateShow, setTeamIndividualSucceedSplitingPassRateShow] = React.useState(true);   
     
         const handleClickTeamIndividualSucceedDefensiveDualRate= () => {
           setTeamIndividualSucceedDefensiveDualRateShow(!TeamIndividualSucceedDefensiveDualRateShow)};
         const handleClickTeamIndividualSucceedDefensive1v1Rate= () => {
           setTeamIndividualSucceedDefensive1v1RateShow(!TeamIndividualSucceedDefensive1v1RateShow)};
         const handleClickTeamIndividualSucceedDefensiveAerialDual= () => {
           setTeamIndividualSucceedDefensiveAerialDualShow(!TeamIndividualSucceedDefensiveAerialDualShow)};
         const handleClickTeamIndividualSucceedOffensiveDualRate= () => {
           setTeamIndividualSucceedOffensiveDualRateShow(!TeamIndividualSucceedOffensiveDualRateShow)};
         const handleClickTeamIndividualSucceedOffensive1v1Rate= () => {
           setTeamIndividualSucceedOffensive1v1RateShow(!TeamIndividualSucceedOffensive1v1RateShow)};
         const handleClickTeamIndividualSucceedOffensiveAerialDualRate= () => {
           setTeamIndividualSucceedOffensiveAerialDualRateShow(!TeamIndividualSucceedOffensiveAerialDualRateShow)};
         const handleClickTeamIndividualSucceedPassRate= () => {
           setTeamIndividualSucceedPassRateShow(!TeamIndividualSucceedPassRateShow)};
         const handleClickTeamIndividualOffensivePassRate= () => {
           setTeamIndividualOffensivePassRateShow(!TeamIndividualOffensivePassRateShow)};
         const handleClickTeamIndividualSucceedShortPassRate= () => {
           setTeamIndividualSucceedShortPassRateShow(!TeamIndividualSucceedShortPassRateShow)};
         const handleClickTeamIndividualSucceedLongPassRate= () => {
           setTeamIndividualSucceedLongPassRateShow(!TeamIndividualSucceedLongPassRateShow)};
         const handleClickTeamIndividualSucceedSplitingPassRate= () => {
           setTeamIndividualSucceedSplitingPassRateShow(!TeamIndividualSucceedSplitingPassRateShow)}; 
    return (
      <TabContent activeTab={verticalTabsIcons}>
      <TabPane tabId="MyTeam">
    {/* subcategories begin*/}
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
                  name="Myteam"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyTeam}
                  onChange={(value) => setmultipleSelectMyTeam(value)}
                  options={[
                    {
                      value: "",
                      label: "Équipe(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "MyTeam(s)'ClubName','Category','TeamNumber' " },
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
                    { value: "1", label: "My Team'ClubName','Category','TeamNumber' v  Opponent'ClubName','Category','TeamNumber'" },
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
                  name="MyteamSys"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyTeamTacticalSystem}
                  onChange={(value) => setmultipleSelectMyTeamTacticalSystem(value)}
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
                  name="MyTeamPlayerss"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyTeamPlayer}
                  onChange={(value) => setmultipleSelectMyTeamPlayer(value)}
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
                      className={horizontalTabsTeamGlobal === "Maps" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsTeamGlobal", "Maps")
                      }
                    >
                     Maps
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsTeamGlobal === "Valeurs" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsTeamGlobal", "Valeurs")
                      }
                    >
                      Valeurs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsTeamGlobal === "Efficacité" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsTeamGlobal", "Efficacité")
                      }
                    >
                     Efficacité
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsTeamGlobal === "Précision" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsTeamGlobal", "Précision")
                      }
                    >
                      Précision
                    </NavLink>
                  </NavItem>
                </Nav>   
                <TabContent activeTab={horizontalTabsTeamGlobal}>
                  <TabPane tabId="Maps"> 
                  <br></br>                              
                  <div className="table-responsive table-full-width">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamMapping}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamAxis}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamZone}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamBoxMapping}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamBoxAxis}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamMappingBoxZone}/>
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

                  <TabContent activeTab={horizontalTabsTeamGlobal}>
                  <TabPane tabId="Valeurs"> 
                  <br></br>
                  <div className="table-responsive table-full-width">
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamInterception}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamTackle}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamBallSprint}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFailedSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamThrowIn}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFaltCommited}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFaltConceded}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamObtainedCorner}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamConcededCorner}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamCornerPlayed}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamAssistPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamGoal}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamKeyPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamPartialImbalance}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamTotalImbalance}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamDirectAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamCounterAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamPlacedAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamOffside}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamObtainedPenalty}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamYellowCard}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamRedCard}/>
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

                  <TabContent activeTab={horizontalTabsTeamGlobal}>
                  <TabPane tabId="Efficacité"> 
                  <br></br>
                  <div className="table-responsive table-full-width">                                  
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamPass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamShort_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamDefensive_1v1_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamOffensive_1v1_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamDefensive_Aerial_duel_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamOffensive_aerial_duel_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamCross_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamLong_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSplitting_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamShot_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamGoalkeeper_Intervention_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSave_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamThrowIn_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamFalt_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamCorner_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamGoalkick_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamPenalty_Efficiency}/>
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

                  <TabContent activeTab={horizontalTabsTeamGlobal}>
                  <TabPane tabId="Précision"> 
                  <br></br>
                  <div className="table-responsive table-full-width">
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedDefensiveDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedDefensive1v1Rate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedDefensiveAerialDual}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedOffensiveDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedOffensive1v1Rate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedOffensiveAerialDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamOffensivePassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedShortPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedLongPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamSucceedSplitingPassRate}/>
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
          {TeamMappingShow ?
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

          {TeamAxisShow ?
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

          {TeamZoneShow ?
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

          {TeamBoxMappingShow ?
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

          {TeamBoxAxisShow ?
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

          {TeamBoxZoneShow ?
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

          {TeamPassShow ?
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
          {TeamFailedPassShow ?
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
          {TeamSucceedPassShow ?
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
          {TeamShortPassShow ?
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
          {TeamFailedShortPassShow ?
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
          {TeamSucceedShortPassShow ?
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
          {TeamDefensiveDuelShow ?
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
          {TeamFailedDefensiveDuelShow ?
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
          {TeamSucceedDefensiveDuelShow ?
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
          {TeamInterceptionShow ?
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
          {TeamInterventionShow ?
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
          {TeamTackleShow ?
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
          {TeamDribbleShow ?
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
          {TeamFailedDribbleShow ?
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
          {TeamSucceedDribbleShow ?
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
          {TeamBallSprintShow ?
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
          {TeamDefensiveAerialDuelShow ?
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
          {TeamFailedDefensiveAerialDuelShow ?
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
          {TeamSucceedDefensiveAerialDuelShow ?
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
          {TeamOffensiveAerialDuelShow ?
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
          {TeamFailedOffensiveAerialDuelShow ?
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
          {TeamSucceedOffensiveAerialDuelShow ?
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
          {TeamCrossShow ?
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
          {TeamFailedCrossShow ?
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
          {TeamSucceedCrossShow ?
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
          {TeamLongPassShow ?
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
          {TeamFailedLongPassShow ?
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
          {TeamSucceedLongPassShow ?
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
          {TeamSplittingPassShow ?
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
          {TeamFailedSplittingPassShow ?
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
          {TeamSucceedSplittingPassShow ?
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
          {TeamShotShow ?
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
          {TeamFailedShotShow ?
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
          {TeamSucceedShotShow ?
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
          {TeamGoalkeeperInterventionShow ?
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
          {TeamFailedGoalkeeperInterventionShow ?
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
          {TeamSucceedGoalkeeperInterventionShow ?
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
          {TeamSaveShow ?
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
          {TeamFailedSaveShow ?
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
          {TeamSucceedSaveShow ?
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
          {TeamThrowInShow ?
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
          {TeamFaltCommitedShow ?
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
          {TeamFaltConcededShow ?
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
          {TeamObtainedCornerShow ?
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
          {TeamConcededCornerShow ?
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
          {TeamCornerPlayedShow ?
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
          {TeamAssistPassShow ?
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
          {TeamGoalShow ?
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
          {TeamKeyPassShow ?
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
          {TeamPartialImbalanceShow ?
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
          {TeamTotalImbalanceShow ?
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
          {TeamDirectAttackShow ?
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
          {TeamCounterAttackShow ?
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
          {TeamPlacedAttackShow ?
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
          {TeamOffsideShow ?
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
          {TeamObtainedPenaltyShow ?
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
          {TeamYellowCardShow ?
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
          {TeamRedCardShow ?
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


          {TeamPass_EfficiencyShow ?
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
          {TeamShort_pass_EfficiencyShow ?
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
          {TeamDefensive_1v1_EfficiencyShow ?
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
          {TeamOffensive_1v1_EfficiencyShow ?
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
          {TeamDefensive_Aerial_duel_EfficiencyShow ?
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
          {TeamOffensive_aerial_duel_EfficiencyShow ?
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
          {TeamCross_EfficiencyShow ?
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
          {TeamLong_pass_EfficiencyShow ?
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
          {TeamSplitting_pass_EfficiencyShow ?
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
          {TeamShot_EfficiencyShow ?
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
          {TeamGoalkeeper_Intervention_EfficiencyShow ?
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
          {TeamSave_EfficiencyShow ?
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
          {TeamThrowIn_EfficiencyShow ?
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
          {TeamFalt_EfficiencyShow ?
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
          {TeamCorner_EfficiencyShow ?
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
          {TeamGoalkick_EfficiencyShow ?
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
          {TeamPenalty_EfficiencyShow ?
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
             
          {TeamSucceedDefensiveDualRateShow ?
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


             
             {TeamSucceedDefensive1v1RateShow ?
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


             
             {TeamSucceedDefensiveAerialDualShow ?
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


             
             {TeamSucceedOffensiveDualRateShow ?
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


             
             {TeamSucceedOffensive1v1RateShow ?
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


             
             {TeamSucceedOffensiveAerialDualRateShow ?
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


             
             {TeamSucceedPassRateShow ?
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


             
             {TeamOffensivePassRateShow ?
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


             
             {TeamSucceedShortPassRateShow ?
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


             
             {TeamSucceedLongPassRateShow ?
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


             
             {TeamSucceedSplitingPassRateShow ?
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
                  name="Myteam"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyTeam}
                  onChange={(value) => setmultipleSelectMyTeam(value)}
                  options={[
                    {
                      value: "",
                      label: "Équipe(s)",
                      isDisabled: true,
                    },
                    { value: "1", label: "MyTeam(s)'ClubName','Category','TeamNumber' " },
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
                    { value: "1", label: "My Team'ClubName','Category','TeamNumber' v  Opponent'ClubName','Category','TeamNumber'" },
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
                  name="MyteamSys"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyTeamTacticalSystem}
                  onChange={(value) => setmultipleSelectMyTeamTacticalSystem(value)}
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
                  name="MyTeamPlayerss"
                  closeMenuOnSelect={false}
                  isMulti
                  value={multipleSelectMyTeamPlayer}
                  onChange={(value) => setmultipleSelectMyTeamPlayer(value)}
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
                      className={horizontalTabsTeamIndividual === "Maps" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsTeamIndividual", "Maps")
                      }
                    >
                     Maps
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsTeamIndividual === "Valeurs" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsTeamIndividual", "Valeurs")
                      }
                    >
                      Valeurs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsTeamIndividual === "Efficacité" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsTeamIndividual", "Efficacité")
                      }
                    >
                     Efficacité
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsTeamIndividual === "Précision" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsTeamIndividual", "Précision")
                      }
                    >
                      Précision
                    </NavLink>
                  </NavItem>
                </Nav>   
                <TabContent activeTab={horizontalTabsTeamIndividual}>
                  <TabPane tabId="Maps"> 
                  <br></br>                              
                  <div className="table-responsive table-full-width">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamIndividualMapping}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamIndividualAxis}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamIndividualZone}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamIndividualBoxMapping}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamIndividualBoxAxis}/>
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
                                <Input defaultValue="" type="checkbox" onClick={handleClickTeamIndividualMappingBoxZone}/>
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

                  <TabContent activeTab={horizontalTabsTeamIndividual}>
                  <TabPane tabId="Valeurs"> 
                  <br></br>
                  <div className="table-responsive table-full-width">
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedShortPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedDefensiveDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualInterception}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualTackle}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedDribble}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualBallSprint}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedDefensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedOffensiveAerialDuel}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedCross}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedLongPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedSplittingPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedShot}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedGoalkeeperIntervention}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFailedSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedSave}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualThrowIn}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFaltCommited}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFaltConceded}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualObtainedCorner}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualConcededCorner}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualCornerPlayed}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualAssistPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualGoal}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualKeyPass}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualPartialImbalance}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualTotalImbalance}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualDirectAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualCounterAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualPlacedAttack}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualOffside}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualObtainedPenalty}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualYellowCard}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualRedCard}/>
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

                  <TabContent activeTab={horizontalTabsTeamIndividual}>
                  <TabPane tabId="Efficacité"> 
                  <br></br>
                  <div className="table-responsive table-full-width">                                  
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualPass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualShort_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualDefensive_1v1_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualOffensive_1v1_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualDefensive_Aerial_duel_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualOffensive_aerial_duel_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualCross_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualLong_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSplitting_pass_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualShot_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualGoalkeeper_Intervention_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSave_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualThrowIn_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualFalt_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualCorner_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualGoalkick_Efficiency}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualPenalty_Efficiency}/>
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

                  <TabContent activeTab={horizontalTabsTeamIndividual}>
                  <TabPane tabId="Précision"> 
                  <br></br>
                  <div className="table-responsive table-full-width">
                  <Table>
                      <tbody>
                      <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedDefensiveDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedDefensive1v1Rate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedDefensiveAerialDual}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedOffensiveDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedOffensive1v1Rate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedOffensiveAerialDualRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualOffensivePassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedShortPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedLongPassRate}/>
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
                                <Input defaultValue=""  type="checkbox"  onClick={handleClickTeamIndividualSucceedSplitingPassRate}/>
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
          {TeamIndividualMappingShow ?
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

          {TeamIndividualAxisShow ?
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

          {TeamIndividualZoneShow ?
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

          {TeamIndividualBoxMappingShow ?
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

          {TeamIndividualBoxAxisShow ?
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

          {TeamIndividualBoxZoneShow ?
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

          {TeamIndividualPassShow ?
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
          {TeamIndividualFailedPassShow ?
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
          {TeamIndividualSucceedPassShow ?
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
          {TeamIndividualShortPassShow ?
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
          {TeamIndividualFailedShortPassShow ?
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
          {TeamIndividualSucceedShortPassShow ?
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
          {TeamIndividualDefensiveDuelShow ?
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
          {TeamIndividualFailedDefensiveDuelShow ?
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
          {TeamIndividualSucceedDefensiveDuelShow ?
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
          {TeamIndividualInterceptionShow ?
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
          {TeamIndividualInterventionShow ?
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
          {TeamIndividualTackleShow ?
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
          {TeamIndividualDribbleShow ?
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
          {TeamIndividualFailedDribbleShow ?
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
          {TeamIndividualSucceedDribbleShow ?
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
          {TeamIndividualBallSprintShow ?
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
          {TeamIndividualDefensiveAerialDuelShow ?
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
          {TeamIndividualFailedDefensiveAerialDuelShow ?
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
          {TeamIndividualSucceedDefensiveAerialDuelShow ?
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
          {TeamIndividualOffensiveAerialDuelShow ?
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
          {TeamIndividualFailedOffensiveAerialDuelShow ?
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
          {TeamIndividualSucceedOffensiveAerialDuelShow ?
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
          {TeamIndividualCrossShow ?
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
          {TeamIndividualFailedCrossShow ?
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
          {TeamIndividualSucceedCrossShow ?
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
          {TeamIndividualLongPassShow ?
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
          {TeamIndividualFailedLongPassShow ?
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
          {TeamIndividualSucceedLongPassShow ?
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
          {TeamIndividualSplittingPassShow ?
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
          {TeamIndividualFailedSplittingPassShow ?
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
          {TeamIndividualSucceedSplittingPassShow ?
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
          {TeamIndividualShotShow ?
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
          {TeamIndividualFailedShotShow ?
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
          {TeamIndividualSucceedShotShow ?
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
          {TeamIndividualGoalkeeperInterventionShow ?
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
          {TeamIndividualFailedGoalkeeperInterventionShow ?
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
          {TeamIndividualSucceedGoalkeeperInterventionShow ?
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
          {TeamIndividualSaveShow ?
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
          {TeamIndividualFailedSaveShow ?
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
          {TeamIndividualSucceedSaveShow ?
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
          {TeamIndividualThrowInShow ?
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
          {TeamIndividualFaltCommitedShow ?
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
          {TeamIndividualFaltConcededShow ?
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
          {TeamIndividualObtainedCornerShow ?
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
          {TeamIndividualConcededCornerShow ?
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
          {TeamIndividualCornerPlayedShow ?
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
          {TeamIndividualAssistPassShow ?
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
          {TeamIndividualGoalShow ?
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
          {TeamIndividualKeyPassShow ?
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
          {TeamIndividualPartialImbalanceShow ?
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
          {TeamIndividualTotalImbalanceShow ?
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
          {TeamIndividualDirectAttackShow ?
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
          {TeamIndividualCounterAttackShow ?
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
          {TeamIndividualPlacedAttackShow ?
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
          {TeamIndividualOffsideShow ?
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
          {TeamIndividualObtainedPenaltyShow ?
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
          {TeamIndividualYellowCardShow ?
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
          {TeamIndividualRedCardShow ?
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


          {TeamIndividualPass_EfficiencyShow ?
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
          {TeamIndividualShort_pass_EfficiencyShow ?
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
          {TeamIndividualDefensive_1v1_EfficiencyShow ?
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
          {TeamIndividualOffensive_1v1_EfficiencyShow ?
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
          {TeamIndividualDefensive_Aerial_duel_EfficiencyShow ?
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
          {TeamIndividualOffensive_aerial_duel_EfficiencyShow ?
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
          {TeamIndividualCross_EfficiencyShow ?
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
          {TeamIndividualLong_pass_EfficiencyShow ?
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
          {TeamIndividualSplitting_pass_EfficiencyShow ?
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
          {TeamIndividualShot_EfficiencyShow ?
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
          {TeamIndividualGoalkeeper_Intervention_EfficiencyShow ?
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
          {TeamIndividualSave_EfficiencyShow ?
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
          {TeamIndividualThrowIn_EfficiencyShow ?
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
          {TeamIndividualFalt_EfficiencyShow ?
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
          {TeamIndividualCorner_EfficiencyShow ?
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
          {TeamIndividualGoalkick_EfficiencyShow ?
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
          {TeamIndividualPenalty_EfficiencyShow ?
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
             
          {TeamIndividualSucceedDefensiveDualRateShow ?
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


             
             {TeamIndividualSucceedDefensive1v1RateShow ?
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


             
             {TeamIndividualSucceedDefensiveAerialDualShow ?
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


             
             {TeamIndividualSucceedOffensiveDualRateShow ?
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


             
             {TeamIndividualSucceedOffensive1v1RateShow ?
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


             
             {TeamIndividualSucceedOffensiveAerialDualRateShow ?
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


             
             {TeamIndividualSucceedPassRateShow ?
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


             
             {TeamIndividualOffensivePassRateShow ?
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


             
             {TeamIndividualSucceedShortPassRateShow ?
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


             
             {TeamIndividualSucceedLongPassRateShow ?
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


             
             {TeamIndividualSucceedSplitingPassRateShow ?
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

export default MonitoringTeamDashboard;