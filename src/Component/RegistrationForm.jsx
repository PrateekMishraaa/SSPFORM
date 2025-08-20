// import React, { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     principalName: '',
//     principalContact: '',
//     safetyOfficerName: '',
//     safetyOfficerContact: '',
//     evacuationMapLink: '',
//     firstAidKits: '',
//     medicalStaff: '',
//     fireExtinguishers: '',
//     alarms: '',
//     drillsConducted: '',
//     lastDrillDate: '',
//     incidentReports: '',
//     suggestions: '',
//     checklistStatus: '',
//     lastPlanUpdate: '',
//     feedback: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//   };

//   const inputStyle = {
//     padding: '10px',
//     marginBottom: '10px',
//     width: '100%',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     fontSize: '14px'
//   };

//   const labelStyle = {
//     padding:"10px",
//     fontWeight: 'bold',
//     marginBottom: '5px',
//     display: 'block',
//     color: '#333'
//   };

//  const sectionStyle = {
//   backgroundColor: '#f5f5f5',
//   padding: '20px',
//   borderRadius: '10px',
//   marginBottom: '0px' // Removed bottom gap
// };

// const titleStyle = {
//   backgroundColor: '#8BAE3F',
//   color: 'white',
//   padding: '15px',
//   borderRadius: '10px',
//   marginBottom: '0px', // Removed title gap
//   fontSize: '18px'
// };



//   return (
//     <form onSubmit={handleSubmit} style={{ padding: '30px', maxWidth: '800px', margin: 'auto' }}>

//       <div style={sectionStyle}>
//         <div style={titleStyle}>Principal & Safety Officer Details</div>
//         <label style={labelStyle}>Principal Name</label>
//         <input style={inputStyle} name="principalName" value={formData.principalName} onChange={handleChange} />
//         <label style={labelStyle}>Principal Contact</label>
//         <input style={inputStyle} name="principalContact" value={formData.principalContact} onChange={handleChange} />
//         <label style={labelStyle}>Safety Officer Name</label>
//         <input style={inputStyle} name="safetyOfficerName" value={formData.safetyOfficerName} onChange={handleChange} />
//         <label style={labelStyle}>Safety Officer Contact</label>
//         <input style={inputStyle} name="safetyOfficerContact" value={formData.safetyOfficerContact} onChange={handleChange} />
//       </div>

//       <div style={sectionStyle}>
//         <div style={titleStyle}>Evacuation Map</div>
//         <label style={labelStyle}>Evacuation Map Link</label>
//         <input style={inputStyle} name="evacuationMapLink" value={formData.evacuationMapLink} onChange={handleChange} />
//       </div>

//       <div style={sectionStyle}>
//         <div style={titleStyle}>First Aid Directory</div>
//         <label style={labelStyle}>First Aid Kits Available</label>
//         <input style={inputStyle} name="firstAidKits" value={formData.firstAidKits} onChange={handleChange} />
//         <label style={labelStyle}>Medical Staff On Site</label>
//         <input style={inputStyle} name="medicalStaff" value={formData.medicalStaff} onChange={handleChange} />
//       </div>

//       <div style={sectionStyle}>
//         <div style={titleStyle}>Fire Safety Equipment</div>
//         <label style={labelStyle}>Fire Extinguishers Count</label>
//         <input style={inputStyle} name="fireExtinguishers" value={formData.fireExtinguishers} onChange={handleChange} />
//         <label style={labelStyle}>Alarms Installed</label>
//         <input style={inputStyle} name="alarms" value={formData.alarms} onChange={handleChange} />
//       </div>

//       <div style={sectionStyle}>
//         <div style={titleStyle}>Fire Drill Log</div>
//         <label style={labelStyle}>Drills Conducted This Year</label>
//         <input style={inputStyle} name="drillsConducted" value={formData.drillsConducted} onChange={handleChange} />
//         <label style={labelStyle}>Last Drill Date</label>
//         <input type="date" style={inputStyle} name="lastDrillDate" value={formData.lastDrillDate} onChange={handleChange} />
//       </div>

//       <div style={sectionStyle}>
//         <div style={titleStyle}>Incident Reporting</div>
//         <label style={labelStyle}>Reported Incidents</label>
//         <textarea style={{ ...inputStyle, height: '80px' }} name="incidentReports" value={formData.incidentReports} onChange={handleChange} />
//         <label style={labelStyle}>Suggestions</label>
//         <textarea style={{ ...inputStyle, height: '80px' }} name="suggestions" value={formData.suggestions} onChange={handleChange} />
//       </div>

//       <div style={sectionStyle}>
//         <div style={titleStyle}>Checklist</div>
//         <label style={labelStyle}>Checklist Status</label>
//         <input style={inputStyle} name="checklistStatus" value={formData.checklistStatus} onChange={handleChange} />
//       </div>

//       <div style={sectionStyle}>
//         <div style={titleStyle}>Plan Update</div>
//         <label style={labelStyle}>Last Plan Update Date</label>
//         <input type="date" style={inputStyle} name="lastPlanUpdate" value={formData.lastPlanUpdate} onChange={handleChange} />
//       </div>

//       <div style={sectionStyle}>
//         <div style={titleStyle}>Feedback</div>
//         <label style={labelStyle}>General Feedback</label>
//         <textarea style={{ ...inputStyle, height: '80px' }} name="feedback" value={formData.feedback} onChange={handleChange} />
//       </div>

//       <button type="submit" style={{
//         backgroundColor: '#8BAE3F',
//         color: 'white',
//         padding: '12px 25px',
//         fontSize: '16px',
//         border: 'none',
//         borderRadius: '8px',
//         cursor: 'pointer',
//         display: 'block',
//         margin: '30px auto 0'
//       }}>Submit</button>
//     </form>
//   );
// };

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import {
  TablePagination,
} from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
const RegistrationForm = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate()
  const [pagination, setPagination] = useState({
    page: 0,
    rowsPerPage: 5,    // Set page size to 5
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 2));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));
  const [formData, setFormData] = useState({


    RolesAndResponsibility: [{
      principalinfo: {
        principalName: "",
        principalPhone: '',
        principalEmail: ''
      },
      vicePrincipalinfo: {
        vicePrincipalName: "",
        vicePrincipalPhone: '',
        vicePrincipalEmail: ''
      },
      seniorCoordinate: {
        seniorCoordinateName: '',
        seniorCoordinatePhone: '',
        seniorCoordinateEmail: ''
      },
      scienceTeachers: {
        scienceTeacherName: '',
        scienceTeacherPhone: '',
        scienceTeacherEmail: ''
      },
      labAsistant: {
        labAsistantName: '',
        labAsistantPhone: '',
        labAsistantEmail: ''
      },
      HeadGirlAndBoy: {
        headBoyAndgirlName: '',
        headBoyAndgirlPhone: '',
        headBoyAndGirlEmail: ''
      },
      CulturalHeadAndLiteraryCaptain: {
        CulturalHeadAndLiteraryCaptainName: '',
        CulturalHeadAndLiteraryCaptainPhone: '',
        CulturalHeadAndLiteraryCaptainEmail: ''
      }
    }],
    // SafetyAndEmergencyPlans - array structure
    SafetyAndEmergencyPlans: [{
      mapOrientation: {
        isPresent: false,
        file: '',
        youAreHereIndicator: false,
        compassArrow: false
      },
      buildingLayout: {
        isPresent: false,
        file: ''
      },
      evacuationRoutes: {
        isPresent: false,
        file: '',
        atLeastTwoRoutes: false
      },
      fireExits: {
        isPresent: false,
        file: ''
      },
      fireEquipment: {
        isPresent: false,
        file: '',
        fireExtinguishers: false,
        fireAlarms: false,
        hoseReels: false,
        sandBuckets: false
      },
      assemblyPoint: {
        isPresent: false,
        file: '',
        description: ''
      },
      disabilityRoutes: {
        isPresent: false,
        file: '',
        ramps: false,
        widerExits: false,
        accessibleSignage: false
      },
      emergencyContactInfo: {
        isPresent: false,
        file: '',
        fireStationNumber: '',
        ambulanceNumber: '',
        schoolSafetyOfficerContact: '',
        disasterHelpline: ''
      },
      legend: {
        isPresent: false,
        file: '',
        symbolsAndMeanings: ''
      },
      dateVersion: {
        isPresent: false,
        file: '',
        updatedOn: null
      }
    }],

    // FirstAidReferralDirectory - array structure
    FirstAidReferralDirectory: [{
      name: '',
      designation: '',

      phone: '',
      isFirstAidCertified: false,
      locationInSchool: ''
    }],

    // LocalHealthEmergencyReferralDirectory - array structure
    LocalHealthEmergencyReferralDirectory: {
      primaryHealthCentre: [
        {
          facilityName: '',
          phoneNumber: '',
          distanceFromSchool: '',
          is24x7: false,
          remarks: ''
        }
      ],
      governmentHospital: [
        {
          facilityName: '',
          phoneNumber: '',
          distanceFromSchool: '',
          is24x7: false,
          remarks: ''
        }
      ],
      privateHospital: [
        {
          facilityName: '',
          phoneNumber: '',
          distanceFromSchool: '',
          is24x7: false,
          remarks: ''
        }
      ],
      fireDepartment: [
        {
          facilityName: '',
          phoneNumber: '',
          distanceFromSchool: '',
          is24x7: false,
          remarks: ''
        }
      ],
      ambulanceService: [
        {
          facilityName: '',
          phoneNumber: '',
          distanceFromSchool: '',
          is24x7: false,
          remarks: ''
        }
      ],
      ngoHelpline: [
        {
          facilityName: '',
          phoneNumber: '',
          distanceFromSchool: '',
          is24x7: false,
          remarks: ''
        }
      ]
    },



    // ResourceAndEquipmentLog - array structure
    ResourceAndEquipmentLog: [{
      item: '',
      location: '',
      typeSpecification: '',
      quantity: 0,
      lastInspectionDate: null,
      nextDueDate: null,
      condition: '',
      remarks: ''
    }],

    // FireSafetyEquipmentInventory - array structure with correct field names
    FireSafetyEquipmentInventory: [{
      Name: '',
      Location: '',
      TypeAndSpecification: '',
      Quantity: 0,
      LastInspectionDate: null,
      NextDueDate: '',
      Condition: ''
    }],

    // FireDrillLog - array structure with correct nested structure
    FireDrillLog: [{
      dateOfDrill: null,
      timeOfDrillStart: '',
      timeOfDrillEnd: '',
      typeOfDrill: '',
      participants: {
        students: {
          boys: 0,
          girls: 0
        },
        staff: {
          teaching: 0,
          nonTeaching: 0,
          admin: 0,
          support: 0
        }
      },
      timeTakenToEvacuate: 0,
      issuesEncountered: '',
      disabledAssistedStudentsEvacuated: '',
      comments: '',
      fireSafetyEquipment: {
        alarm: false,
        fireExtinguisher: false,
        megaphone: false,
        fireHose: false,
        sprinklerSystem: false,
        other: false,
        otherDetails: ''
      },
      observationsFromSafetyOfficer: '',
      correctiveActions: '',
      drillConductedBy: '',
      signatureAndDate: {
        name: '',
        date: null
      }
    }],

    // RecoveryAndDamagedDestroyedBuilding - array structure
    RecoveryAndDamagedDestroyedBuilding: [{
      damagedDestroyedBuilding: '',
      recoveryMeasures: '',
      fundingSource: '',
      implementingAgency: '',
      tentativeDurationMonths: 0,
      budget: 0,
      responsibleOfficer: ''
    }],

    // RecoveryAndEquipmentFurniture - array structure
    RecoveryAndEquipmentFurniture: [{
      damagedDestroyedEquipmentFurniture: '',
      recoveryMeasures: '',
      fundingSource: '',
      implementingAgency: '',
      tentativeDurationMonths: 0,
      budget: 0,
      responsibleOfficer: ''
    }],

    // FunctioningOfEducation - array structure
    FunctioningOfEducation: [{
      alterateSchoolLocation: '',
      provisionForOnlineEducation: '',
      fundingSourceToMeetExpenditure: '',
      responsibility: ''
    }],

    // PlanUpdationCycle - array structure
    PlanUpdationCycle: [{
      versionDate: null,
      updateTrigger: '',
      keyChangesMade: '',
      reviewedBy: '',
      nextScheduledUpdate: null
    }],

    // FeedBackMechanismCommunityValidation - array structure
    FeedBackMechanismCommunityValidation: [{
      FeedbackSource: '',
      DateReceived: null,
      FeedBackSummary: '',
      ActionTaken: '',
      ValidateByCommunity: false
    }],

    // PsychologicalRecovery - array structure
    PsychologicalRecovery: [{
      noOfStudents: '',
      teacherStaffNeed: '',
      nameOfCounselors: '',
      contactNoOfcounselors: '',
      counselorsAddress: '',
      counselorsResponsibility: ''
    }],

    // TeamForStudentsSpecialNeed - array structure
    TeamForStudentsSpecialNeed: [{
      nameOfTeamMember: '',
      memberDesignation: '',
      memberAddress: '',
      memberContactno: '',
      nameOftheStudent: '',
      studentContactNo: '',
      studentAddress: ''
    }],

    // DisasterAccidentReporting - array structure with correct nested structure
    DisasterAccidentReporting: [{
      schoolName: '',
      schoolAddress: '',
      contactNumber: '',
      incidentDate: null,
      incidentTime: '',
      disasterType: '',
      totalAffectedPersons: 0,
      deaths: {
        teachingStaff: 0,
        students: 0,
        nonTeachingStaff: 0
      },
      totalInjured: 0,
      lossOfProperty: '',
      responseAgencies: '',
      eventDescription: '',
      responseDescription: '',
      reportedBy: '',
      reportedDate: null,
      status: ''
    }],

    // MonthlyQuarterlyReview - array structure
    MonthlyQuarterlyReview: [{
      reviewDate: null,
      reviewType: '',
      checklistName: '',
      status: '',
      remarks: '',
      reviewedBy: '',
      nextReviewDate: null
    }],

    // AdditionalFeedback - array structure
    // AdditionalFeedback: [{
    //   feedbackType: '',
    //   feedbackDate: null,
    //   feedbackSummary: '',
    //   actionTaken: '',
    //   followUpRequired: false,
    //   followUpDate: null,
    //   status: ''
    // }]
  });


  console.log(formData)

  const validatePhoneNumber = (phone) => {
    if (!phone) return true; // Empty is valid since not required
    return /^\d{10}$/.test(phone);
  };


  const rows = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }));

  const handleChangePage = (event, newPage) => {
    setPagination(prev => ({
      ...prev,
      page: newPage
    }));
  };


  const handleChangeRowsPerPage = (event) => {
    setPagination({
      rowsPerPage: 5,  // Always set to 5, ignore dropdown
      page: 0,
    });
  };



  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData)); // Deep clone

      // Helper function to get the correct value based on input type
      const getValue = () => {
        if (type === "checkbox") return checked;
        if (type === "radio") return value === "yes";
        if (type === "number") return parseInt(value) || 0;
        if (type === "date") return value || null;
        if (type === "file")
          return files
            ? files.length > 1
              ? Array.from(files)
              : files[0]
            : "";
        return value;
      };

      // Handle ResourceAndEquipmentLog array notation (e.g., ResourceAndEquipmentLog[0].location)
      if (name.includes("ResourceAndEquipmentLog[") && name.includes("].")) {
        const match = name.match(/ResourceAndEquipmentLog\[(\d+)\]\.(.+)/);
        if (match) {
          const index = parseInt(match[1]);
          const field = match[2];

          if (newData.ResourceAndEquipmentLog && newData.ResourceAndEquipmentLog[index]) {
            newData.ResourceAndEquipmentLog[index][field] =
              field === "quantity" ? parseInt(value) || 0 : getValue();
          }
          return newData;
        }
      }

      // Handle file inputs
      if (type === "file") {
        if (name.includes("_file")) {
          const [section] = name.split("_");
          if (newData.SafetyAndEmergencyPlans?.[0]?.[section]) {
            newData.SafetyAndEmergencyPlans[0][section].file = files[0] || "";
          }
        } else if (name === "uploadImage") {
          newData.uploadImage = Array.from(files);
        } else if (name === "uploadVideo") {
          newData.uploadVideo = Array.from(files);
        } else if (name === "uploadLetter") {
          newData.uploadLetter = files[0] || "";
        }
        return newData;
      }

      // Handle basic form fields (direct properties)
      if (!name.includes("_") && !name.includes(".") && !name.includes("[")) {
        if (newData.hasOwnProperty(name)) {
          newData[name] = getValue();
          return newData;
        }

        // Handle RolesAndResponsibility specific field mappings
        const roleFieldMappings = {
          principalName: "principalinfo.principalName",
          principalPhone: "principalinfo.principalPhone",
          principalEmail: "principalinfo.principalEmail",
          vicePrincipalName: "vicePrincipalinfo.vicePrincipalName",
          vicePrincipalPhone: "vicePrincipalinfo.vicePrincipalPhone",
          vicePrincipalEmail: "vicePrincipalinfo.vicePrincipalEmail",
          seniorCoordinateName: "seniorCoordinate.seniorCoordinateName",
          seniorCoordinatePhone: "seniorCoordinate.seniorCoordinatePhone",
          seniorCoordinateEmail: "seniorCoordinate.seniorCoordinateEmail",
          scienceTeacherName: "scienceTeachers.scienceTeacherName",
          scienceTeacherPhone: "scienceTeachers.scienceTeacherPhone",
          scienceTeacherEmail: "scienceTeachers.scienceTeacherEmail",
          labAsistantName: "labAsistant.labAsistantName",
          labAsistantPhone: "labAsistant.labAsistantPhone",
          labAsistantEmail: "labAsistant.labAsistantEmail",
          headBoyAndgirlPhone: "HeadGirlAndBoy.headBoyAndgirlPhone",
          headBoyAndGirlEmail: "HeadGirlAndBoy.headBoyAndGirlEmail",
          CulturalHeadAndLiteraryCaptainPhone:
            "CulturalHeadAndLiteraryCaptain.CulturalHeadAndLiteraryCaptainPhone",
          CulturalHeadAndLiteraryCaptainEmail:
            "CulturalHeadAndLiteraryCaptain.CulturalHeadAndLiteraryCaptainEmail",
        };

        if (roleFieldMappings[name]) {
          const [section, field] = roleFieldMappings[name].split(".");
          if (newData.RolesAndResponsibility?.[0]?.[section]) {
            newData.RolesAndResponsibility[0][section][field] = getValue();
            return newData;
          }
        }

        // Check if it belongs to any array sections
        const arraySections = [
          "FirstAidReferralDirectory",
          "LocalHealthEmergencyReferralDirectory",
          "ResourceAndEquipmentLog",
          "FireSafetyEquipmentInventory",
          "FireDrillLog",
          "RecoveryAndDamagedDestroyedBuilding",
          "RecoveryAndEquipmentFurniture",
          "FunctioningOfEducation",
          "PlanUpdationCycle",
          "FeedBackMechanismCommunityValidation",
          "PsychologicalRecovery",
          "TeamForStudentsSpecialNeed",
          "DisasterAccidentReporting",
          "MonthlyQuarterlyReview",
          "AdditionalFeedback",
        ];

        for (const section of arraySections) {
          if (newData[section]?.[0]?.hasOwnProperty(name)) {
            newData[section][0][name] = getValue();
            return newData;
          }
        }
      }

      // Handle dot notation (nested fields)
      if (name.includes(".")) {
        const parts = name.split(".");

        if (parts.length >= 4 && parts[0] === "RolesAndResponsibility") {
          const [mainSection, index, subSection, field] = parts;
          const arrayIndex = parseInt(index);
          if (newData[mainSection]?.[arrayIndex]?.[subSection]) {
            newData[mainSection][arrayIndex][subSection][field] = getValue();
          }
        } else if (parts.length === 2) {
          const [section, field] = parts;
          if (newData.RolesAndResponsibility?.[0]?.[section]) {
            newData.RolesAndResponsibility[0][section][field] = getValue();
          }
        } else if (parts.length >= 3) {
          const [mainSection, index, field] = parts;
          const arrayIndex = parseInt(index);

          const arraySections = [
            "FirstAidReferralDirectory",
            "LocalHealthEmergencyReferralDirectory",
            "ResourceAndEquipmentLog",
            "FireSafetyEquipmentInventory",
            "FireDrillLog",
            "RecoveryAndDamagedDestroyedBuilding",
            "RecoveryAndEquipmentFurniture",
            "FunctioningOfEducation",
            "PlanUpdationCycle",
            "FeedBackMechanismCommunityValidation",
            "PsychologicalRecovery",
            "TeamForStudentsSpecialNeed",
            "DisasterAccidentReporting",
            "MonthlyQuarterlyReview",
            "AdditionalFeedback",
            "SafetyAndEmergencyPlans",
          ];

          if (arraySections.includes(mainSection) && newData[mainSection]?.[arrayIndex]) {
            if (parts.length === 3) {
              newData[mainSection][arrayIndex][field] = getValue();
            } else if (parts.length === 4) {
              const [, , subSection, subField] = parts;
              if (newData[mainSection][arrayIndex][subSection]) {
                newData[mainSection][arrayIndex][subSection][subField] = getValue();
              }
            } else if (parts.length === 5) {
              const [, , subSection, subSubSection, subField] = parts;
              if (newData[mainSection][arrayIndex][subSection]?.[subSubSection]) {
                newData[mainSection][arrayIndex][subSection][subSubSection][subField] = getValue();
              }
            }
          }
        }
        return newData;
      }

      // Handle underscore notation
      if (name.includes("_")) {
        const parts = name.split("_");

        if (parts.length === 2) {
          const [section, field] = parts;

          if (newData.SafetyAndEmergencyPlans?.[0]?.[section]) {
            newData.SafetyAndEmergencyPlans[0][section][field] = getValue();
            return newData;
          }

          if (section === "fireSafetyEquipment" && newData.FireDrillLog?.[0]?.fireSafetyEquipment) {
            newData.FireDrillLog[0].fireSafetyEquipment[field] = getValue();
            return newData;
          }

          if (section === "signatureAndDate" && newData.FireDrillLog?.[0]?.signatureAndDate) {
            newData.FireDrillLog[0].signatureAndDate[field] = getValue();
            return newData;
          }

          const arraySections = [
            "FirstAidReferralDirectory",
            "LocalHealthEmergencyReferralDirectory",
            "ResourceAndEquipmentLog",
            "FireSafetyEquipmentInventory",
            "RecoveryAndDamagedDestroyedBuilding",
            "RecoveryAndEquipmentFurniture",
            "FunctioningOfEducation",
            "PlanUpdationCycle",
            "FeedBackMechanismCommunityValidation",
            "PsychologicalRecovery",
            "TeamForStudentsSpecialNeed",
            "DisasterAccidentReporting",
            "MonthlyQuarterlyReview",
            "AdditionalFeedback",
          ];

          for (const arraySection of arraySections) {
            if (newData[arraySection]?.[0]?.[section]) {
              newData[arraySection][0][section][field] = getValue();
              return newData;
            }
          }
        } else if (parts.length === 3) {
          const [section, subsection, field] = parts;

          if (section === "participants" && newData.FireDrillLog?.[0]?.participants?.[subsection]) {
            newData.FireDrillLog[0].participants[subsection][field] = getValue();
            return newData;
          }

          if (section === "deaths" && newData.DisasterAccidentReporting?.[0]?.deaths) {
            newData.DisasterAccidentReporting[0].deaths[subsection] = getValue();
            return newData;
          }
        }
      }

      return newData;
    });
  };



  const handleServiceChange = (e, serviceType, index) => {
    const { name, value, type } = e.target;

    setFormData(prevData => {

      const newData = JSON.parse(JSON.stringify(prevData));


      if (!newData.LocalHealthEmergencyReferralDirectory) {
        newData.LocalHealthEmergencyReferralDirectory = {};
      }

      if (!newData.LocalHealthEmergencyReferralDirectory[serviceType]) {
        newData.LocalHealthEmergencyReferralDirectory[serviceType] = [];
      }

      // Ensure the specific index exists in the array
      if (!newData.LocalHealthEmergencyReferralDirectory[serviceType][index]) {
        newData.LocalHealthEmergencyReferralDirectory[serviceType][index] = {};
      }

      // Handle different input types
      let newValue = value;

      // Handle radio buttons for 24/7 service
      if (type === 'radio' && name.includes('is24x7')) {
        newValue = value === 'yes' ? true : false;
        newData.LocalHealthEmergencyReferralDirectory[serviceType][index]['is24x7'] = newValue;
      } else {
        // Handle regular text inputs
        newData.LocalHealthEmergencyReferralDirectory[serviceType][index][name] = newValue;
      }

      return newData;
    });
  }

  // Helper function to add new entry
  const addNewEntry = (serviceType) => {
    setFormData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));

      if (!newData.LocalHealthEmergencyReferralDirectory[serviceType]) {
        newData.LocalHealthEmergencyReferralDirectory[serviceType] = [];
      }

      newData.LocalHealthEmergencyReferralDirectory[serviceType].push({
        facilityName: '',
        phoneNumber: '',
        distanceFromSchool: '',
        is24x7: false,
        remarks: ''
      });

      return newData;
    });
  };

  // Helper function to remove entry
  const removeEntry = (serviceType, index) => {
    setFormData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      newData.LocalHealthEmergencyReferralDirectory[serviceType].splice(index, 1);
      return newData;
    });
  };

  // Group entries by service type for display

  const allEntries = Object.entries(formData.LocalHealthEmergencyReferralDirectory)
    .flatMap(([serviceType, entries]) =>
      entries.map((entry, index) => ({ ...entry, serviceType, originalIndex: index }))
    );

  const groupedEntries = Object.entries(formData.LocalHealthEmergencyReferralDirectory)
    .reduce((acc, [serviceType, entries]) => {
      acc[serviceType] = entries.map((entry, index) => ({
        ...entry,
        serviceType,
        originalIndex: index
      }));
      return acc;
    }, {});

  // Submit function to post all form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData for file uploads
      const submitData = new FormData();

      // Helper function to append nested objects to FormData
      const appendToFormData = (data, parentKey = '') => {
        Object.keys(data).forEach(key => {
          const value = data[key];
          const formKey = parentKey ? `${parentKey}.${key}` : key;

          if (value === null || value === undefined) {
            submitData.append(formKey, '');
          } else if (Array.isArray(value)) {
            if (value.length > 0 && value[0] instanceof File) {
              // Handle file arrays
              value.forEach((file, index) => {
                submitData.append(`${formKey}[${index}]`, file);
              });
            } else {
              // Handle regular arrays
              submitData.append(formKey, JSON.stringify(value));
            }
          } else if (value instanceof File) {
            submitData.append(formKey, value);
          } else if (typeof value === 'object') {
            // Handle nested objects
            submitData.append(formKey, JSON.stringify(value));
          } else {
            submitData.append(formKey, value.toString());
          }
        });
      };

      // Append all form data
      appendToFormData(formData);

      // Make API call
      const response = await axios.post("http://localhost:5000/api/registration", formData, {
        "headers": {
          "Content-Type": "application/json"
        }
      })
      console.log(response.data)
      toast.success("Form submitted successfully")

      setTimeout(() => {
        navigate('/')
      }, 4000)

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        // toast.success('Form submitted successfully!');

        // Optional: Reset form or redirect
        // setFormData(initialFormData);

      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    } catch (error) {
      console.error('Error submitting form:', error);


    }
  };


  const removeFile = (fieldName) => {
    setFormData(prevData => {
      const newData = { ...prevData };

      if (fieldName.includes('_file')) {
        const [section, field] = fieldName.split('_');
        if (newData.SafetyAndEmergencyPlans && newData.SafetyAndEmergencyPlans[0] && newData.SafetyAndEmergencyPlans[0][section]) {
          newData.SafetyAndEmergencyPlans[0][section].file = '';
        }
      } else if (fieldName === 'uploadImage') {
        newData.uploadImage = [];
      } else if (fieldName === 'uploadVideo') {
        newData.uploadVideo = [];
      } else if (fieldName === 'uploadLetter') {
        newData.uploadLetter = '';
      }

      return newData;
    });
  };





  const validators = {
    name: /^[a-zA-Z\s]{3,30}$/, // only letters & spaces, length 3-30
    location: /^[a-zA-Z0-9\s,.-]{3,50}$/, // letters, numbers, common symbols
    contactNumber: /^[6-9]\d{9}$/, // Indian mobile number format
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // email format
    address: /^[a-zA-Z0-9\s,.-]{5,100}$/, // letters, numbers, symbols
  };


  const handleCheck = (fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }));
  };







  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const FilePreview = ({ fileData, onRemove }) => {
    if (!fileData) return null;

    return (
      <div className="relative inline-block mt-2 p-2 bg-gray-50 border border-gray-200 rounded-lg">
        <button
          onClick={onRemove}
          className="absolute -top-2 -right-2 cursor-pointer bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors z-10"
          type="button"
        >
          <X size={12} />
        </button>

        <div className="flex items-center space-x-3">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-700 truncate max-w-32">
              {fileData.name}
            </span>
            <span className="text-xs text-gray-500">
              {formatFileSize(fileData.size)}
            </span>
          </div>

          {fileData.preview ? (
            <img
              src={fileData.preview}
              alt="File preview"
              className="w-16 h-16 object-cover rounded"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">
                {fileData.type.includes('pdf') ? 'PDF' : 'FILE'}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };




  const addNewRow = () => {
    setFormData(prevData => ({
      ...prevData,
      ResourceAndEquipmentLog: [
        ...prevData.ResourceAndEquipmentLog,
        {
          item: '',
          location: '',
          typeSpecification: '',
          quantity: 0,
          lastInspectionDate: null,
          nextDueDate: null,
          condition: '',
          remarks: ''
        }
      ]
    }));
  };

  const removeRow = (index) => {
    setFormData(prevData => ({
      ...prevData,
      ResourceAndEquipmentLog: prevData.ResourceAndEquipmentLog.filter((_, i) => i !== index)
    }));
  };

  return (
    <>

      <div style={{ padding: '20px', maxWidth: '1340px', margin: '0 auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
        <form onSubmit={handleSubmit}>
          <h1 className='py-10' style={{ textAlign: 'center', color: '#2f4f4f', fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>
            School Fire Safety Management Form
          </h1>

          <section className="mb-8 h-auto">
            <h2 className="font-bold text-[#8BAE3F] text-2xl mb-6">
              Roles and Responsibilities Matrix
            </h2>

            {/* Principal */}
            <div className="mb-6">
              <p className="font-semibold text-gray-500 mb-3">Principal's Info</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="tel"
                  name='principalinfo.principalName'
                  value={formData.RolesAndResponsibility[0]?.principalinfo?.principalName || ''}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                  className="h-10 w-full sm:flex-1 border border-gray-300 rounded-md bg-gray-50 px-3 text-sm 
                focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="tel"
                  name='principalinfo.principalPhone'
                  value={formData.RolesAndResponsibility[0]?.principalinfo?.principalPhone || ''}
                  onChange={handleChange}
                  placeholder="Phone (e.g., 9540802061)"
                  required
                  className="h-10 w-full sm:flex-1 border border-gray-300 rounded-md bg-gray-50 px-3 text-sm 
                focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name='principalinfo.principalEmail'
                  value={formData.RolesAndResponsibility[0]?.principalinfo?.principalEmail || ''}
                  onChange={handleChange}
                  placeholder="Email (e.g., principal@email.com)"
                  required
                  className="h-10 w-full sm:flex-1 border border-gray-300 rounded-md bg-gray-50 px-3 text-sm 
                focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Vice Principal */}
            <div className="mb-6">
              <p className="font-semibold text-gray-500 mb-3">Vice Principal's Info</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Name</label>
                  <input
                    type="text"
                    name="RolesAndResponsibility.0.vicePrincipalinfo.vicePrincipalName"
                    value={formData.RolesAndResponsibility[0]?.vicePrincipalinfo?.vicePrincipalName || ''}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    name="RolesAndResponsibility.0.vicePrincipalinfo.vicePrincipalPhone"
                    value={formData.RolesAndResponsibility[0]?.vicePrincipalinfo?.vicePrincipalPhone || ''}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="RolesAndResponsibility.0.vicePrincipalinfo.vicePrincipalEmail"
                    value={formData.RolesAndResponsibility[0]?.vicePrincipalinfo?.vicePrincipalEmail || ''}
                    onChange={handleChange}
                    placeholder="Email"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Senior Coordinator */}
            <div className="mb-6">
              <p className="font-semibold text-gray-500 mb-3">Senior Coordinator</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Name</label>
                  <input
                    type="text"
                    name="RolesAndResponsibility.0.seniorCoordinate.seniorCoordinateName"
                    value={formData.RolesAndResponsibility[0]?.seniorCoordinate?.seniorCoordinateName || ''}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    name="RolesAndResponsibility.0.seniorCoordinate.seniorCoordinatePhone"
                    value={formData.RolesAndResponsibility[0]?.seniorCoordinate?.seniorCoordinatePhone || ''}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="RolesAndResponsibility.0.seniorCoordinate.seniorCoordinateEmail"
                    value={formData.RolesAndResponsibility[0]?.seniorCoordinate?.seniorCoordinateEmail || ''}
                    onChange={handleChange}
                    placeholder="Email"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Science Teachers */}
            <div className="mb-6">
              <p className="font-semibold text-gray-500 mb-3">Science Teachers</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Name</label>
                  <input
                    type="text"
                    name="RolesAndResponsibility.0.scienceTeachers.scienceTeacherName"
                    value={formData.RolesAndResponsibility[0]?.scienceTeachers?.scienceTeacherName || ''}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    name="RolesAndResponsibility.0.scienceTeachers.scienceTeacherPhone"
                    value={formData.RolesAndResponsibility[0]?.scienceTeachers?.scienceTeacherPhone || ''}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="RolesAndResponsibility.0.scienceTeachers.scienceTeacherEmail"
                    value={formData.RolesAndResponsibility[0]?.scienceTeachers?.scienceTeacherEmail || ''}
                    onChange={handleChange}
                    placeholder="Email"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Lab Assistant */}
            <div className="mb-6">
              <p className="font-semibold text-gray-500 mb-3">Lab Assistant</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Name</label>
                  <input
                    type="text"
                    name="RolesAndResponsibility.0.labAsistant.labAsistantName"
                    value={formData.RolesAndResponsibility[0]?.labAsistant?.labAsistantName || ''}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    name="RolesAndResponsibility.0.labAsistant.labAsistantPhone"
                    value={formData.RolesAndResponsibility[0]?.labAsistant?.labAsistantPhone || ''}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="RolesAndResponsibility.0.labAsistant.labAsistantEmail"
                    value={formData.RolesAndResponsibility[0]?.labAsistant?.labAsistantEmail || ''}
                    onChange={handleChange}
                    placeholder="Email"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Head Girl / Head Boy */}
            <div className="mb-6">
              <p className="font-semibold text-gray-500 mb-3">Head Girl / Head Boy</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Name</label>
                  <input
                    type="text"
                    name="RolesAndResponsibility.0.HeadGirlAndBoy.headBoyAndgirlName"
                    value={formData.RolesAndResponsibility[0]?.HeadGirlAndBoy?.headBoyAndgirlName || ''}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    name="RolesAndResponsibility.0.HeadGirlAndBoy.headBoyAndgirlPhone"
                    value={formData.RolesAndResponsibility[0]?.HeadGirlAndBoy?.headBoyAndgirlPhone || ''}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="RolesAndResponsibility.0.HeadGirlAndBoy.headBoyAndGirlEmail"
                    value={formData.RolesAndResponsibility[0]?.HeadGirlAndBoy?.headBoyAndGirlEmail || ''}
                    onChange={handleChange}
                    placeholder="Email"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>


            {/* Cultural Head / Literary Captain */}
            <div className="mb-6">
              <p className="font-semibold text-gray-500 mb-3">Cultural Head / Literary Captain</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Name</label>
                  <input
                    type="text"
                    name="RolesAndResponsibility.0.CulturalHeadAndLiteraryCaptain.CulturalHeadAndLiteraryCaptainName"
                    value={formData.RolesAndResponsibility[0]?.CulturalHeadAndLiteraryCaptain?.CulturalHeadAndLiteraryCaptainName || ''}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    name="RolesAndResponsibility.0.CulturalHeadAndLiteraryCaptain.CulturalHeadAndLiteraryCaptainPhone"
                    value={formData.RolesAndResponsibility[0]?.CulturalHeadAndLiteraryCaptain?.CulturalHeadAndLiteraryCaptainPhone || ''}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-1">
                  <label className="text-gray-600 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="RolesAndResponsibility.0.CulturalHeadAndLiteraryCaptain.CulturalHeadAndLiteraryCaptainEmail"
                    value={formData.RolesAndResponsibility[0]?.CulturalHeadAndLiteraryCaptain?.CulturalHeadAndLiteraryCaptainEmail || ''}
                    onChange={handleChange}
                    placeholder="Email"
                    className="h-10 w-full border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

          </section>


          <section className="mb-8 h-auto mt-10">
            {/* Title */}
            <h2 style={headingStyle} className="font-bold text-[#8BAE3F] text-2xl mb-4">
              2. Evacuation Map Template for Schools
            </h2>

            {/* Form Section */}
            <div style={sectionStyle} className="space-y-6">

              {/* 1. Map Orientation */}
              <div className="rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-medium mb-4 text-gray-500">
                  1. Map Orientation
                </p>
                <div className="flex items-center gap-8 flex-wrap pl-4">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="SafetyAndEmergencyPlans[0].mapOrientation.isPresent"
                        value={v}
                        checked={formData.SafetyAndEmergencyPlans[0]?.mapOrientation?.isPresent === (v === "yes")}
                        onChange={handleChange}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-500 capitalize">{v}</span>
                    </label>
                  ))}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name='mapOrientation_file'
                    onChange={handleChange}
                    className="cursor-pointer border-2 border-gray-300 px-3 py-1 rounded-sm text-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Subchecks */}
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.SafetyAndEmergencyPlans[0]?.mapOrientation?.youAreHereIndicator || false}
                      name='mapOrientation_youAreHereIndicator'
                      onChange={handleChange}
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-gray-600">"You Are Here" indicator present</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.SafetyAndEmergencyPlans[0]?.mapOrientation?.compassArrow || false}
                      name='mapOrientation_compassArrow'
                      onChange={handleChange}
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-gray-600">Compass arrow (North) present</span>
                  </label>
                </div>

                <FilePreview fileData={formData.SafetyAndEmergencyPlans[0]?.mapOrientation?.file} onRemove={() => removeFile("mapOrientation_file")} />
              </div>

              {/* 2. Building Layout */}
              <div className="rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-medium mb-4 text-gray-500">
                  2. Building Layout{" "}
                  <span className="text-gray-400 ml-1">
                    (Floors, classrooms, labs, staff rooms, corridors, stairs, restrooms)
                  </span>
                </p>
                <div className="flex items-center gap-8 flex-wrap pl-4">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="buildingLayout_isPresent"
                        value={v}
                        onChange={handleChange}
                        checked={formData.SafetyAndEmergencyPlans[0]?.buildingLayout?.isPresent === (v === "yes")}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-500 capitalize">{v}</span>
                    </label>
                  ))}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name='buildingLayout_file'
                    onChange={handleChange}
                    className="cursor-pointer border-2 border-gray-300 px-3 py-1 rounded-sm text-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <FilePreview fileData={formData.SafetyAndEmergencyPlans[0]?.buildingLayout?.file} onRemove={() => removeFile("buildingLayout_file")} />
              </div>

              {/* 3. Evacuation Routes */}
              <div className="rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-medium mb-4 text-gray-500">
                  3. Evacuation Routes{" "}
                  <span className="text-gray-400 ml-1">
                    (Safest & shortest paths; at least two routes per room)
                  </span>
                </p>
                <div className="flex items-center gap-8 flex-wrap pl-4">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="evacuationRoutes_isPresent"
                        value={v}
                        onChange={handleChange}
                        checked={formData.SafetyAndEmergencyPlans[0]?.evacuationRoutes?.isPresent === (v === "yes")}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-500 capitalize">{v}</span>
                    </label>
                  ))}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name='evacuationRoutes_file'
                    onChange={handleChange}
                    className="cursor-pointer border-2 border-gray-300 px-3 py-1 rounded-sm text-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <label className="mt-3 flex items-center gap-2">
                  <input
                    type="checkbox"
                    name='evacuationRoutes_atLeastTwoRoutes'
                    onChange={handleChange}
                    checked={formData.SafetyAndEmergencyPlans[0]?.evacuationRoutes?.atLeastTwoRoutes || false}
                    className="h-4 w-4"
                  />
                  <span className="text-sm text-gray-600">At least two routes per room</span>
                </label>

                <FilePreview fileData={formData.SafetyAndEmergencyPlans[0]?.evacuationRoutes?.file} onRemove={() => removeFile("evacuationRoutes_file")} />
              </div>

              {/* 4. Fire Exits */}
              <div className="rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-medium mb-4 text-gray-500">
                  4. Fire Exits{" "}
                  <span className="text-gray-400 ml-1">(Clearly marked with red icons or arrows)</span>
                </p>
                <div className="flex items-center gap-8 flex-wrap pl-4">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="fireExits_isPresent"
                        value={v}
                        onChange={handleChange}
                        checked={formData.SafetyAndEmergencyPlans[0]?.fireExits?.isPresent === (v === "yes")}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-500 capitalize">{v}</span>
                    </label>
                  ))}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name='fireExits_file'
                    onChange={handleChange}
                    className="cursor-pointer border-2 border-gray-300 px-3 py-1 rounded-sm text-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <FilePreview fileData={formData.SafetyAndEmergencyPlans[0]?.fireExits?.file} onRemove={() => removeFile("fireExits_file")} />
              </div>

              {/* 5. Fire Equipment */}
              <div className="rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-medium mb-4 text-gray-500">
                  5. Fire Equipment{" "}
                  <span className="text-gray-400 ml-1">(Extinguishers, alarms, hose reels, sand buckets)</span>
                </p>
                <div className="flex items-center gap-8 flex-wrap pl-4">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="fireEquipment_isPresent"
                        value={v}
                        onChange={handleChange}
                        checked={formData.SafetyAndEmergencyPlans[0]?.fireEquipment?.isPresent === (v === "yes")}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-500 capitalize">{v}</span>
                    </label>
                  ))}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name='fireEquipment_file'
                    onChange={handleChange}
                    className="cursor-pointer border-2 border-gray-300 px-3 py-1 rounded-sm text-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Equipment checklist */}
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    ["fireExtinguishers", "Fire extinguishers"],
                    ["fireAlarms", "Fire alarms"],
                    ["hoseReels", "Hose reels"],
                    ["sandBuckets", "Sand buckets"],
                  ].map(([key, label]) => (
                    <label key={key} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.SafetyAndEmergencyPlans[0]?.fireEquipment?.[key] || false}
                        name={`fireEquipment_${key}`}
                        onChange={handleChange}
                        className="h-4 w-4"
                      />
                      <span className="text-sm text-gray-600">{label}</span>
                    </label>
                  ))}
                </div>

                <FilePreview fileData={formData.SafetyAndEmergencyPlans[0]?.fireEquipment?.file} onRemove={() => removeFile("fireEquipment_file")} />
              </div>

              {/* 6. Assembly Point */}
              <div className="rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-medium mb-4 text-gray-500">
                  6. Assembly Point{" "}
                  <span className="text-gray-400 ml-1">(Safe zones for roll call & medical triage)</span>
                </p>
                <div className="flex items-center gap-8 flex-wrap pl-4">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="assemblyPoint_isPresent"
                        value={v}
                        checked={formData.SafetyAndEmergencyPlans[0]?.assemblyPoint?.isPresent === (v === "yes")}
                        onChange={handleChange}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-500 capitalize">{v}</span>
                    </label>
                  ))}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name='assemblyPoint_file'
                    onChange={handleChange}
                    className="cursor-pointer border-2 border-gray-300 px-3 py-1 rounded-sm text-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Assembly point description / location"
                    value={formData.SafetyAndEmergencyPlans[0]?.assemblyPoint?.description || ''}
                    name='assemblyPoint_description'
                    onChange={handleChange}
                    style={inputStyle}
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                  />
                </div>

                <FilePreview fileData={formData.SafetyAndEmergencyPlans[0]?.assemblyPoint?.file} onRemove={() => removeFile("assemblyPoint_file")} />
              </div>

              {/* 7. Disability Routes */}
              <div className="rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-medium mb-4 text-gray-500">
                  7. Disability Routes{" "}
                  <span className="text-gray-400 ml-1">(Wider exits, ramps, accessible paths with signage)</span>
                </p>
                <div className="flex items-center gap-8 flex-wrap pl-4">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="disabilityRoutes_isPresent"
                        value={v}
                        checked={formData.SafetyAndEmergencyPlans[0]?.disabilityRoutes?.isPresent === (v === "yes")}
                        onChange={handleChange}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-500 capitalize">{v}</span>
                    </label>
                  ))}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name='disabilityRoutes_file'
                    onChange={handleChange}
                    className="cursor-pointer border-2 border-gray-300 px-3 py-1 rounded-sm text-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {[
                    ["ramps", "Ramps"],
                    ["widerExits", "Wider exits"],
                    ["accessibleSignage", "Accessible signage"],
                  ].map(([key, label]) => (
                    <label key={key} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.SafetyAndEmergencyPlans[0]?.disabilityRoutes?.[key] || false}
                        name={`disabilityRoutes_${key}`}
                        onChange={handleChange}
                        className="h-4 w-4"
                      />
                      <span className="text-sm text-gray-600">{label}</span>
                    </label>
                  ))}
                </div>

                <FilePreview fileData={formData.SafetyAndEmergencyPlans[0]?.disabilityRoutes?.file} onRemove={() => removeFile("disabilityRoutes_file")} />
              </div>

              {/* 8. Emergency Contact Info */}
              <div className="rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-medium mb-4 text-gray-500">
                  8. Emergency Contact Info{" "}
                  <span className="text-gray-400 ml-1">(Fire station, safety officer, ambulance, disaster helpline)</span>
                </p>
                <div className="flex items-center gap-8 flex-wrap pl-4">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="emergencyContactInfo_isPresent"
                        value={v}
                        checked={formData.SafetyAndEmergencyPlans[0]?.emergencyContactInfo?.isPresent === (v === "yes")}
                        onChange={handleChange}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-500 capitalize">{v}</span>
                    </label>
                  ))}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name='emergencyContactInfo_file'
                    onChange={handleChange}
                    className="cursor-pointer border-2 border-gray-300 px-3 py-1 rounded-sm text-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Fire Station Number"
                    name='emergencyContactInfo_fireStationNumber'
                    value={formData.SafetyAndEmergencyPlans[0]?.emergencyContactInfo?.fireStationNumber || ''}
                    onChange={handleChange}
                    style={inputStyle}
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="School Safety Officer Contact"
                    name='emergencyContactInfo_schoolSafetyOfficerContact'
                    value={formData.SafetyAndEmergencyPlans[0]?.emergencyContactInfo?.schoolSafetyOfficerContact || ''}
                    onChange={handleChange}
                    style={inputStyle}
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Ambulance Number"
                    name='emergencyContactInfo_ambulanceNumber'
                    value={formData.SafetyAndEmergencyPlans[0]?.emergencyContactInfo?.ambulanceNumber || ''}
                    onChange={handleChange}
                    style={inputStyle}
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Disaster Helpline"
                    name='emergencyContactInfo_disasterHelpline'
                    value={formData.SafetyAndEmergencyPlans[0]?.emergencyContactInfo?.disasterHelpline || ''}
                    onChange={handleChange}
                    style={inputStyle}
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                  />
                </div>

                <FilePreview fileData={formData.SafetyAndEmergencyPlans[0]?.emergencyContactInfo?.file} onRemove={() => removeFile("emergencyContactInfo_file")} />
              </div>

              {/* 9. Legend */}
              <div className="rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-medium mb-4 text-gray-500">
                  9. Legend (Key Symbols){" "}
                  <span className="text-gray-400 ml-1">
                    (Use universal symbols with explanations – exit, extinguisher, route, assembly point)
                  </span>
                </p>
                <div className="flex items-center gap-8 flex-wrap pl-4">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="legend_isPresent"
                        value={v}
                        checked={formData.SafetyAndEmergencyPlans[0]?.legend?.isPresent === (v === "yes")}
                        onChange={handleChange}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-500 capitalize">{v}</span>
                    </label>
                  ))}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name='legend_file'
                    onChange={handleChange}
                    className="cursor-pointer border-2 border-gray-300 px-3 py-1 rounded-sm text-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <textarea
                  placeholder="List symbols and meanings (e.g., green arrows = exit routes)"
                  name='legend_symbolsAndMeanings'
                  value={formData.SafetyAndEmergencyPlans[0]?.legend?.symbolsAndMeanings || ''}
                  onChange={handleChange}
                  style={{ ...inputStyle, minHeight: 90 }}
                  className="mt-3 w-full px-2 py-1 border border-gray-300 rounded resize-none"
                />
                <FilePreview fileData={formData.SafetyAndEmergencyPlans[0]?.legend?.file} onRemove={() => removeFile("legend_file")} />
              </div>

              {/* 10. Date & Version */}
              <div className="rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-medium mb-4 text-gray-500">
                  10. Date & Version{" "}
                  <span className="text-gray-400 ml-1">(Indicate last update to ensure version control)</span>
                </p>
                <div className="flex items-center gap-8 flex-wrap pl-4">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="dateVersion_isPresent"
                        value={v}
                        checked={formData.SafetyAndEmergencyPlans[0]?.dateVersion?.isPresent === (v === "yes")}
                        onChange={handleChange}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-500 capitalize">{v}</span>
                    </label>
                  ))}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    name='dateVersion_file'
                    onChange={handleChange}
                    className="cursor-pointer border-2 border-gray-300 px-3 py-1 rounded-sm text-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <input
                    type="date"
                    placeholder="Map Last Updated"
                    name='dateVersion_updatedOn'
                    value={formData.SafetyAndEmergencyPlans[0]?.dateVersion?.updatedOn || ''}
                    onChange={handleChange}
                    style={inputStyle}
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                  />
                </div>

                <FilePreview fileData={formData.SafetyAndEmergencyPlans[0]?.dateVersion?.file} onRemove={() => removeFile("dateVersion_file")} />
              </div>
            </div>
          </section>




          {/* === Section: First Aid and Referral Directory === */}
          <h2 style={headingStyle} className='text-gray-500' >First Aid and Referral Directory</h2>

          {/* Section A */}
          <div style={{ ...sectionStyle, marginBottom: "10px" }}>
            <p className="font-light text-gray-400 mb-3">
              A. Local Health & Emergency Referral Directory
            </p>

            <div className="flex gap-10">
              {/* Name */}
              <input
                placeholder="(e.g., Amit Kumar)"
                style={inputStyle}
                name="name"
                value={formData.FirstAidReferralDirectory[0]?.name || ""}
                onChange={handleChange}
                required
              />

              {/* Designation */}
              <input
                placeholder="(e.g., Doctor)"
                name="designation"
                value={formData.FirstAidReferralDirectory[0]?.designation || ""}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              {/* Phone */}
              <input
                placeholder="(e.g., 987456321)"
                required
                type='tel'
                name="phone"
                value={formData.FirstAidReferralDirectory[0]?.phone || ""}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* First Aid Certified */}
            <div className="flex items-center gap-6 mb-3 mt-3">
              <span className="text-sm font-medium text-gray-500">
                Is First Aid Certified?
              </span>
              <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                <input
                  type="radio"
                  name="isFirstAidCertified"
                  checked={formData.FirstAidReferralDirectory[0]?.isFirstAidCertified === true}
                  onChange={handleChange}
                  required
                  className="text-green-600 focus:ring-green-500"
                />
                Yes
              </label>
              <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                <input
                  type="radio"
                  name="isFirstAidCertified"
                  checked={formData.FirstAidReferralDirectory[0]?.isFirstAidCertified === false}
                  onChange={handleChange}
                  required
                  className="text-green-600 focus:ring-green-500"
                />
                No
              </label>
            </div>

            {/* Location */}
            <input
              placeholder="Location in School (e.g., North wing)"
              name="locationInSchool"
              value={formData.FirstAidReferralDirectory[0]?.locationInSchool || ""}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>


          <div className="p-6 max-w-7xl mx-auto font-sans">
            <h2 style={headingStyle} className='text-gray-500' >B. Local Health & Emergency Referral Directory</h2>


            <div className="space-y-6">
              {/* Primary Health Centre */}
              <div style={{ ...sectionStyle, marginBottom: "20px" }}>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-gray-500">Primary Health Centre</p>
                  <button
                    type="button"
                    onClick={() => addNewEntry('primaryHealthCentre')}
                    className="bg-[#8bae3f] text-white px-3 py-1 rounded text-sm hover:bg-[#8bae3f]"
                  >
                    + Add Entry
                  </button>
                </div>

                {formData.LocalHealthEmergencyReferralDirectory.primaryHealthCentre?.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Entry {index + 1}</span>
                      {formData.LocalHealthEmergencyReferralDirectory.primaryHealthCentre.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEntry('primaryHealthCentre', index)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="flex gap-4 mb-3">
                      <input
                        placeholder="Name of Facility"
                        style={inputStyle}
                        name="facilityName"
                        value={item.facilityName || ""}
                        onChange={(e) => handleServiceChange(e, 'primaryHealthCentre', index)}
                        className="flex-1"
                      />
                      <input
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={item.phoneNumber || ""}
                        onChange={(e) => handleServiceChange(e, 'primaryHealthCentre', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                      <input
                        placeholder="Distance (e.g., 2.5 km)"
                        name="distanceFromSchool"
                        value={item.distanceFromSchool || ""}
                        onChange={(e) => handleServiceChange(e, 'primaryHealthCentre', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-6 mb-3">
                      <span className="text-sm font-medium text-gray-500">24/7 Service Available?</span>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-primaryHealthCentre-${index}`}
                          value="yes"
                          checked={item.is24x7 === true}
                          onChange={(e) => handleServiceChange(e, 'primaryHealthCentre', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-primaryHealthCentre-${index}`}
                          value="no"
                          checked={item.is24x7 === false}
                          onChange={(e) => handleServiceChange(e, 'primaryHealthCentre', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        No
                      </label>
                    </div>

                    <input
                      placeholder="Remarks (optional)"
                      name="remarks"
                      value={item.remarks || ""}
                      onChange={(e) => handleServiceChange(e, 'primaryHealthCentre', index)}
                      style={inputStyle}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>

              {/* Government Hospital */}
              <div style={{ ...sectionStyle, marginBottom: "20px" }}>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-gray-500">Government Hospital</p>
                  <button
                    type="button"
                    onClick={() => addNewEntry('governmentHospital')}
                    className="bg-[#8bae3f] text-white px-3 py-1 rounded text-sm hover:bg-[#8bae3f]"
                  >
                    + Add Entry
                  </button>
                </div>

                {formData.LocalHealthEmergencyReferralDirectory.governmentHospital?.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Entry {index + 1}</span>
                      {formData.LocalHealthEmergencyReferralDirectory.governmentHospital.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEntry('governmentHospital', index)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="flex gap-4 mb-3">
                      <input
                        placeholder="Name of Hospital"
                        style={inputStyle}
                        name="facilityName"
                        value={item.facilityName || ""}
                        onChange={(e) => handleServiceChange(e, 'governmentHospital', index)}
                        className="flex-1"
                      />
                      <input
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={item.phoneNumber || ""}
                        onChange={(e) => handleServiceChange(e, 'governmentHospital', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                      <input
                        placeholder="Distance (e.g., 5 km)"
                        name="distanceFromSchool"
                        value={item.distanceFromSchool || ""}
                        onChange={(e) => handleServiceChange(e, 'governmentHospital', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-6 mb-3">
                      <span className="text-sm font-medium text-gray-500">24/7 Service Available?</span>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-governmentHospital-${index}`}
                          value="yes"
                          checked={item.is24x7 === true}
                          onChange={(e) => handleServiceChange(e, 'governmentHospital', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-governmentHospital-${index}`}
                          value="no"
                          checked={item.is24x7 === false}
                          onChange={(e) => handleServiceChange(e, 'governmentHospital', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        No
                      </label>
                    </div>

                    <input
                      placeholder="Remarks (optional)"
                      name="remarks"
                      value={item.remarks || ""}
                      onChange={(e) => handleServiceChange(e, 'governmentHospital', index)}
                      style={inputStyle}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>

              {/* Private Hospital */}
              <div style={{ ...sectionStyle, marginBottom: "20px" }}>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-gray-500">Private Hospital</p>
                  <button
                    type="button"
                    onClick={() => addNewEntry('privateHospital')}
                    className="bg-[#8bae3f] text-white px-3 py-1 rounded text-sm hover:bg-[#8bae3f]"
                  >
                    + Add Entry
                  </button>
                </div>

                {formData.LocalHealthEmergencyReferralDirectory.privateHospital?.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Entry {index + 1}</span>
                      {formData.LocalHealthEmergencyReferralDirectory.privateHospital.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEntry('privateHospital', index)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="flex gap-4 mb-3">
                      <input
                        placeholder="Name of Hospital"
                        style={inputStyle}
                        name="facilityName"
                        value={item.facilityName || ""}
                        onChange={(e) => handleServiceChange(e, 'privateHospital', index)}
                        className="flex-1"
                      />
                      <input
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={item.phoneNumber || ""}
                        onChange={(e) => handleServiceChange(e, 'privateHospital', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                      <input
                        placeholder="Distance (e.g., 3 km)"
                        name="distanceFromSchool"
                        value={item.distanceFromSchool || ""}
                        onChange={(e) => handleServiceChange(e, 'privateHospital', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-6 mb-3">
                      <span className="text-sm font-medium text-gray-500">24/7 Service Available?</span>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-privateHospital-${index}`}
                          value="yes"
                          checked={item.is24x7 === true}
                          onChange={(e) => handleServiceChange(e, 'privateHospital', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-privateHospital-${index}`}
                          value="no"
                          checked={item.is24x7 === false}
                          onChange={(e) => handleServiceChange(e, 'privateHospital', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        No
                      </label>
                    </div>

                    <input
                      placeholder="Remarks (optional)"
                      name="remarks"
                      value={item.remarks || ""}
                      onChange={(e) => handleServiceChange(e, 'privateHospital', index)}
                      style={inputStyle}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>

              {/* Fire Department */}
              <div style={{ ...sectionStyle, marginBottom: "20px" }}>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-gray-500">Fire Department</p>
                  <button
                    type="button"
                    onClick={() => addNewEntry('fireDepartment')}
                    className="bg-[#8bae3f] text-white px-3 py-1 rounded text-sm hover:bg-[#8bae3f]"
                  >
                    + Add Entry
                  </button>
                </div>

                {formData.LocalHealthEmergencyReferralDirectory.fireDepartment?.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Entry {index + 1}</span>
                      {formData.LocalHealthEmergencyReferralDirectory.fireDepartment.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEntry('fireDepartment', index)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="flex gap-4 mb-3">
                      <input
                        placeholder="Fire Station Name"
                        style={inputStyle}
                        name="facilityName"
                        value={item.facilityName || ""}
                        onChange={(e) => handleServiceChange(e, 'fireDepartment', index)}
                        className="flex-1"
                      />
                      <input
                        placeholder="Emergency Number"
                        name="phoneNumber"
                        value={item.phoneNumber || ""}
                        onChange={(e) => handleServiceChange(e, 'fireDepartment', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                      <input
                        placeholder="Distance (e.g., 1.5 km)"
                        name="distanceFromSchool"
                        value={item.distanceFromSchool || ""}
                        onChange={(e) => handleServiceChange(e, 'fireDepartment', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-6 mb-3">
                      <span className="text-sm font-medium text-gray-500">24/7 Service Available?</span>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-fireDepartment-${index}`}
                          value="yes"
                          checked={item.is24x7 === true}
                          onChange={(e) => handleServiceChange(e, 'fireDepartment', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-fireDepartment-${index}`}
                          value="no"
                          checked={item.is24x7 === false}
                          onChange={(e) => handleServiceChange(e, 'fireDepartment', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        No
                      </label>
                    </div>

                    <input
                      placeholder="Remarks (optional)"
                      name="remarks"
                      value={item.remarks || ""}
                      onChange={(e) => handleServiceChange(e, 'fireDepartment', index)}
                      style={inputStyle}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>

              {/* Ambulance Service */}
              <div style={{ ...sectionStyle, marginBottom: "20px" }}>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-gray-500">Ambulance Service</p>
                  <button
                    type="button"
                    onClick={() => addNewEntry('ambulanceService')}
                    className="bg-[#8bae3f] text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                  >
                    + Add Entry
                  </button>
                </div>

                {formData.LocalHealthEmergencyReferralDirectory.ambulanceService?.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Entry {index + 1}</span>
                      {formData.LocalHealthEmergencyReferralDirectory.ambulanceService.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEntry('ambulanceService', index)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="flex gap-4 mb-3">
                      <input
                        placeholder="Ambulance Service Name"
                        style={inputStyle}
                        name="facilityName"
                        value={item.facilityName || ""}
                        onChange={(e) => handleServiceChange(e, 'ambulanceService', index)}
                        className="flex-1"
                      />
                      <input
                        placeholder="Emergency Number"
                        name="phoneNumber"
                        value={item.phoneNumber || ""}
                        onChange={(e) => handleServiceChange(e, 'ambulanceService', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                      <input
                        placeholder="Response Time (e.g., 10 min)"
                        name="distanceFromSchool"
                        value={item.distanceFromSchool || ""}
                        onChange={(e) => handleServiceChange(e, 'ambulanceService', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-6 mb-3">
                      <span className="text-sm font-medium text-gray-500">24/7 Service Available?</span>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-ambulanceService-${index}`}
                          value="yes"
                          checked={item.is24x7 === true}
                          onChange={(e) => handleServiceChange(e, 'ambulanceService', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-ambulanceService-${index}`}
                          value="no"
                          checked={item.is24x7 === false}
                          onChange={(e) => handleServiceChange(e, 'ambulanceService', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        No
                      </label>
                    </div>

                    <input
                      placeholder="Remarks (optional)"
                      name="remarks"
                      value={item.remarks || ""}
                      onChange={(e) => handleServiceChange(e, 'ambulanceService', index)}
                      style={inputStyle}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>

              {/* NGO Helpline */}
              <div style={{ ...sectionStyle, marginBottom: "20px" }}>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-gray-500">NGO Helpline</p>
                  <button
                    type="button"
                    onClick={() => addNewEntry('ngoHelpline')}
                    className="bg-[#8bae3f] text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                  >
                    + Add Entry
                  </button>
                </div>

                {formData.LocalHealthEmergencyReferralDirectory.ngoHelpline?.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Entry {index + 1}</span>
                      {formData.LocalHealthEmergencyReferralDirectory.ngoHelpline.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEntry('ngoHelpline', index)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="flex gap-4 mb-3">
                      <input
                        placeholder="NGO Name"
                        style={inputStyle}
                        name="facilityName"
                        value={item.facilityName || ""}
                        onChange={(e) => handleServiceChange(e, 'ngoHelpline', index)}
                        className="flex-1"
                      />
                      <input
                        placeholder="Helpline Number"
                        name="phoneNumber"
                        value={item.phoneNumber || ""}
                        onChange={(e) => handleServiceChange(e, 'ngoHelpline', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                      <input
                        placeholder="Coverage Area"
                        name="distanceFromSchool"
                        value={item.distanceFromSchool || ""}
                        onChange={(e) => handleServiceChange(e, 'ngoHelpline', index)}
                        style={inputStyle}
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-6 mb-3">
                      <span className="text-sm font-medium text-gray-500">24/7 Service Available?</span>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-ngoHelpline-${index}`}
                          value="yes"
                          checked={item.is24x7 === true}
                          onChange={(e) => handleServiceChange(e, 'ngoHelpline', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                        <input
                          type="radio"
                          name={`is24x7-ngoHelpline-${index}`}
                          value="no"
                          checked={item.is24x7 === false}
                          onChange={(e) => handleServiceChange(e, 'ngoHelpline', index)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        No
                      </label>
                    </div>

                    <input
                      placeholder="Services provided (e.g., Mental health, Crisis support)"
                      name="remarks"
                      value={item.remarks || ""}
                      onChange={(e) => handleServiceChange(e, 'ngoHelpline', index)}
                      style={inputStyle}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h2 style={headingStyle} className="text-gray-500">
            4. Resource & Equipment Log (Fire Safety Focused)
          </h2>
          <h3 className="text-gray-500 font-semibold mb-3">
            A. Fire Safety Equipment Inventory
          </h3>

          <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-4 flex justify-between items-center">
              <button
                onClick={addNewRow}
                className="bg-[#91ae3f] text-white px-6 py-4 cursor-pointer rounded hover:bg-[#91ae3f] transition-colors"
              >
                Add New Item
              </button>
            </div>

            {formData.ResourceAndEquipmentLog.map((log, index) => (
              <div key={index} style={sectionStyle} className="mb-6">
                <div className='flex flex-col'>
                  <div className='flex justify-between items-center mb-4'>
                    {/* <h3 className="text-lg font-semibold text-gray-700">Item #{index + 1}</h3>f */}
                    {formData.ResourceAndEquipmentLog.length > 1 && (
                      <button
                        onClick={() => removeRow(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <p className='text-gray-500'>Item</p>
                  <input
                    placeholder="Enter item name"
                    style={inputStyle}
                    name={`ResourceAndEquipmentLog[${index}].item`}
                    value={log.item}
                    onChange={handleChange}
                    required
                  />

                  <div className='flex gap-8'>
                    <div className='w-xl'>
                      <p className='text-gray-500'>Location</p>
                      <input
                        placeholder="Enter location"
                        name={`ResourceAndEquipmentLog[${index}].location`}
                        value={log.location}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div className='w-xl relative '>
                      <p className='text-gray-500'>Type/Specification</p>
                      <input
                        placeholder="Enter type/specification"
                        name={`ResourceAndEquipmentLog[${index}].typeSpecification`}
                        value={log.typeSpecification}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>

                  <div className='flex gap-8'>
                    <div className='w-xl'>
                      <p className='text-gray-500'>Quantity</p>
                      <input
                        type="number"
                        placeholder="Enter quantity"
                        name={`ResourceAndEquipmentLog[${index}].quantity`}
                        value={log.quantity}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div className='w-2xl relative '>
                      <p className='text-gray-500'>Last Inspection Date</p>
                      <input
                        type="date"
                        name={`ResourceAndEquipmentLog[${index}].lastInspectionDate`}
                        value={log.lastInspectionDate || ""}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div className='w-96 relative '>
                      <p className='text-gray-500'>Next Due Date</p>
                      <input
                        type="date"
                        name={`ResourceAndEquipmentLog[${index}].nextDueDate`}
                        value={log.nextDueDate || ""}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className='flex gap-8'>
                    <div className='w-xl'>
                      <p className='text-gray-500'>Condition (Good/Replace)</p>
                      <select
                        name={`ResourceAndEquipmentLog[${index}].condition`}
                        value={log.condition}
                        onChange={handleChange}
                        style={inputStyle}
                        className="cursor-pointer"
                      >
                        <option value="">Select condition</option>
                        <option value="Good">Good</option>
                        <option value="Replace">Replace</option>
                      </select>
                    </div>
                    <div className='w-2xl relative '>
                      <p className='text-gray-500'>Remarks</p>
                      <input
                        placeholder="Enter remarks"
                        name={`ResourceAndEquipmentLog[${index}].remarks`}
                        value={log.remarks}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>












          {/* === Section: Fire Safety Equipment Inventory === */}
          <h2 style={headingStyle}>Fire Safety Equipment Inventory</h2>
          <div style={sectionStyle}>
            <div className='flex flex-col'>
              <p className='text-gray-500'>Name</p>
              <input
                placeholder="eg.Piyush"
                style={inputStyle}
                name='Name'
                value={formData.FireSafetyEquipmentInventory[0]?.Name}
                onChange={handleChange}
                required />
              <div className='flex gap-8'>
                <div className='w-xl'>
                  <p className='text-gray-500'>Location</p>
                  <input
                    placeholder="eg.Floor"
                    name='Location'
                    value={formData.FireSafetyEquipmentInventory[0]?.Location}
                    onChange={handleChange}
                    style={inputStyle} required />
                </div>

                <div className='w-xl relative '>
                  <p className='text-gray-500'>Type/Specification</p>
                  <input
                    placeholder="Type/Specification (e.g., Ordinary combustibles)"
                    name='TypeAndSpecification'
                    value={formData.FireSafetyEquipmentInventory[0]?.TypeAndSpecification}
                    onChange={handleChange}
                    style={inputStyle}
                    required />
                </div>
              </div>
              <div className='flex gap-8'>
                <div className='w-xl'>
                  <p className='text-gray-500'>Quantity</p>
                  <input
                    placeholder="(e.g., 5L)"
                    name='Quantity'
                    value={formData.FireSafetyEquipmentInventory[0]?.Quantity}
                    onChange={handleChange}
                    style={inputStyle}
                    required />
                </div>
                <div className='w-2xl relative '>
                  <p className='text-gray-500'>Last Inspection date</p>

                  <input
                    placeholder=" (DD/MM/YYYY)"
                    name='LastInspectionDate'
                    value={formData.FireSafetyEquipmentInventory[0]?.LastInspectionDate}
                    onChange={handleChange}
                    style={inputStyle}
                    required />

                </div>
                <div className='w-96 relative '>
                  <p className='text-gray-500'>Next Due Date</p>
                  <input
                    placeholder=" (DD/MM/YYYY)"
                    name='NextDueDate'
                    value={formData.FireSafetyEquipmentInventory[0]?.NextDueDate}
                    onChange={handleChange}
                    style={inputStyle} required />
                </div>
              </div>
              <div>
                <p className='text-gray-500'>Condition (Good/Replace)</p>
                <input
                  placeholder="e.g (Good/Replace)"
                  name='Condition'
                  value={formData.FireSafetyEquipmentInventory[0]?.Condition}
                  onChange={handleChange}
                  style={inputStyle} required />
              </div>
            </div>
          </div>

          {/* === Section: Fire Drill Log === */}
          <h2 style={headingStyle}>Fire Drill Log</h2>
          <div style={sectionStyle}>
            <div className="flex gap-2">
              <div className="w-2xl">
                <p className="text-gray-500 text-gray-500">Date of Drill</p>
                <input
                  type="date"
                  name='FireDrillLog.0.dateOfDrill'
                  value={formData.FireDrillLog[0]?.dateOfDrill || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  className='text-gray-500'
                  required
                />
              </div>
              <div className="w-2xl">
                <p className="text-gray-500">Time of Drill (Start)</p>
                <input
                  type="time"
                  name='FireDrillLog.0.timeOfDrillStart'
                  value={formData.FireDrillLog[0]?.timeOfDrillStart || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div>
              <p className="text-gray-500">Time of Drill (End)</p>
              <input
                type="time"
                name='FireDrillLog.0.timeOfDrillEnd'
                value={formData.FireDrillLog[0]?.timeOfDrillEnd || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div>
              <p className="text-gray-500">Type of Drill</p>
              <input
                placeholder="(Announced, Unannounced etc.)"
                name='FireDrillLog.0.typeOfDrill'
                value={formData.FireDrillLog[0]?.typeOfDrill || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="w-xl">
                <p className="text-gray-500">No. of Students Participated (Boys)</p>
                <input
                  type="number"
                  placeholder="e.g 15"
                  name='participants_students_boys'
                  value={formData.FireDrillLog[0]?.participants.students.boys || 0}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div className="w-2xl">
                <p className="text-gray-500">No. of Students Participated (Girls)</p>
                <input
                  type="number"
                  placeholder="e.g 20"
                  name='participants_students_girls'
                  value={formData.FireDrillLog[0]?.participants.students.girls || 0}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div>
              <p className="text-gray-500">No. of Staff Participated (Teaching)</p>
              <input
                type="number"
                placeholder="e.g 5"
                name='participants_staff_teaching'
                value={formData.FireDrillLog[0]?.participants.staff.teaching || 0}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <p className="text-gray-500">No. of Staff Participated (Non-Teaching)</p>
              <input
                type="number"
                placeholder="e.g 3"
                name='participants_staff_nonTeaching'
                value={formData.FireDrillLog[0]?.participants.staff.nonTeaching || 0}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="w-2xl">
                <p className="text-gray-500">No. of Staff Participated (Admin)</p>
                <input
                  type="number"
                  placeholder="e.g 2"
                  name='participants_staff_admin'
                  value={formData.FireDrillLog[0]?.participants.staff.admin || 0}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div className="w-xl">
                <p className="text-gray-500">No. of Staff Participated (Support Staff)</p>
                <input
                  type="number"
                  placeholder="e.g 4"
                  name='participants_staff_support'
                  value={formData.FireDrillLog[0]?.participants.staff.support || 0}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div>
              <p className="text-gray-500">Time Taken to Evacuate (in min.)</p>
              <input
                type="number"
                placeholder="e.g 3"
                name='FireDrillLog.0.timeTakenToEvacuate'
                value={formData.FireDrillLog[0]?.timeTakenToEvacuate || 0}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            {/* Issues Encountered */}
            <div>
              <p className="text-gray-500">Issues Encountered</p>
              <select
                style={inputStyle}
                name='FireDrillLog.0.issuesEncountered'
                value={formData.FireDrillLog[0]?.issuesEncountered || ''}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-gray-300 rounded text-gray-500"
                required
              >
                <option value="">Select an issue</option>
                <option value="panic">Panic</option>
                <option value="blocked-exit">Blocked Exit</option>
                <option value="late-alarm">Late Alarm</option>
                <option value="slow-evacuation">Slow Evacuation</option>
                <option value="student-missing">Student Missing</option>
                <option value="none">No Issues</option>
                <option value="other">Other</option>
              </select>

              <div className="flex flex-col gap-2 mt-4">
                <p className="text-gray-500">
                  Disabled/Assisted Students Evacuated
                </p>

                <select
                  style={inputStyle}
                  name='FireDrillLog.0.disabledAssistedStudentsEvacuated'
                  value={formData.FireDrillLog[0]?.disabledAssistedStudentsEvacuated || ''}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-gray-500"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="n/a">Not Applicable</option>
                </select>

                <input
                  placeholder="Enter comments (if any)"
                  style={inputStyle}
                  name='FireDrillLog.0.comments'
                  value={formData.FireDrillLog[0]?.comments || ''}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <p className="text-gray-500">Fire Safety Equipment</p>

                <div className="flex flex-col gap-1 px-2">
                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      name='fireSafetyEquipment_alarm'
                      checked={formData.FireDrillLog[0]?.fireSafetyEquipment.alarm || false}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                    Alarm
                  </label>

                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      name='fireSafetyEquipment_fireExtinguisher'
                      checked={formData.FireDrillLog[0]?.fireSafetyEquipment.fireExtinguisher || false}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                    Fire Extinguisher
                  </label>

                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      name='fireSafetyEquipment_megaphone'
                      checked={formData.FireDrillLog[0]?.fireSafetyEquipment.megaphone || false}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                    Megaphone
                  </label>

                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      name='fireSafetyEquipment_fireHose'
                      checked={formData.FireDrillLog[0]?.fireSafetyEquipment.fireHose || false}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                    Fire Hose
                  </label>

                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      name='fireSafetyEquipment_sprinklerSystem'
                      checked={formData.FireDrillLog[0]?.fireSafetyEquipment.sprinklerSystem || false}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                    Sprinkler System
                  </label>

                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      name='fireSafetyEquipment_other'
                      checked={formData.FireDrillLog[0]?.fireSafetyEquipment.other || false}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                    Other
                  </label>
                </div>

                <input
                  placeholder="Enter details or specify 'Other'"
                  style={inputStyle}
                  name='fireSafetyEquipment_otherDetails'
                  value={formData.FireDrillLog[0]?.fireSafetyEquipment.otherDetails || ''}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <p className="text-gray-500">Observations from Safety Officer</p>
                <textarea
                  placeholder="Enter observations here..."
                  style={{ ...inputStyle, minHeight: "100px" }}
                  name='FireDrillLog.0.observationsFromSafetyOfficer'
                  value={formData.FireDrillLog[0]?.observationsFromSafetyOfficer || ''}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <p className="text-gray-500">
                  Suggestions / Corrective Actions Needed
                </p>
                <textarea
                  placeholder="Enter suggestions or corrective actions..."
                  style={{ ...inputStyle, minHeight: "100px" }}
                  name='FireDrillLog.0.correctiveActions'
                  value={formData.FireDrillLog[0]?.correctiveActions || ''}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded resize-none"
                ></textarea>
              </div>

              <div className="mt-4">
                <p className="text-gray-500">Drill Conducted By (Name of Coordinators)</p>
                <input
                  placeholder="e.g John Doe, Jane Smith"
                  name='FireDrillLog.0.drillConductedBy'
                  value={formData.FireDrillLog[0]?.drillConductedBy || ''}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <p className="text-gray-500">Signature and Date</p>

              <div className="flex flex-col">
                <label className="text-gray-500 text-sm mb-1">Name & Signature</label>
                <input
                  placeholder="Enter name"
                  name='signatureAndDate_name'
                  value={formData.FireDrillLog[0]?.signatureAndDate.name || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-500 text-sm mb-1">Date</label>
                <input
                  type="date"
                  name='signatureAndDate_date'
                  value={formData.FireDrillLog[0]?.signatureAndDate.date || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
          </div>



          <h2 style={headingStyle}>Reporting and Documentation: Recovery of Damaged/Destroyed Building</h2>
          <div style={sectionStyle}>
            <div className='flex gap-4'>
              <div className='w-3xl'>
                <p className='text-gray-500'>Damaged/Destroyed Building</p>
                <input
                  placeholder="e.g, Damaged/Destroyed Building"
                  name='damagedDestroyedBuilding'
                  value={formData.RecoveryAndDamagedDestroyedBuilding[0]?.damagedDestroyedBuilding}
                  onChange={handleChange}
                  style={inputStyle} required />
              </div>
              <div className='w-2xl'>
                <p className='text-gray-500'>Recovery Measures</p>
                <input
                  name='recoveryMeasures'
                  value={formData.RecoveryAndDamagedDestroyedBuilding[0]?.recoveryMeasures}
                  onChange={handleChange}
                  placeholder="e.g, Recovery Measures"
                  style={inputStyle} required />
              </div>
              <div className='w-3xl'>
                <p className='text-gray-500'>Funding Source</p>
                <input
                  placeholder="e.g, Funding Source"
                  name='fundingSource'
                  value={formData.RecoveryAndDamagedDestroyedBuilding[0]?.fundingSource}
                  onChange={handleChange}
                  style={inputStyle} required />
              </div>
            </div>
            <div>
              <p className='text-gray-500'>Implementing Agency</p>
              <input
                placeholder="e.g, Implementing Agency"
                name='implementingAgency'
                value={formData.RecoveryAndDamagedDestroyedBuilding[0]?.implementingAgency}
                onChange={handleChange}
                style={inputStyle} required />
            </div>
            <div className='flex gap-4'>
              <div className='w-4xl'>
                <p className='text-gray-500'>Tentative Duration (Months)</p>
                <input
                  placeholder="e.g, Tentative Duration (Months)"
                  name='tentativeDurationMonths'
                  value={formData.RecoveryAndDamagedDestroyedBuilding[0]?.tentativeDurationMonths}
                  onChange={handleChange}
                  style={inputStyle} required />
              </div>
              <div className='w-3xl'>
                <p className='text-gray-500'>Budget</p>
                <input
                  name='budget'
                  value={formData.RecoveryAndDamagedDestroyedBuilding[0]?.budget}
                  onChange={handleChange}
                  placeholder="e.g 5000"
                  style={inputStyle} required />
              </div>
              <div className='w-2xl'>
                <p className='text-gray-500'>Responsible Officer</p>
                <input
                  placeholder="e.g, Responsible Officer"
                  name='responsibleOfficer'
                  value={formData.RecoveryAndDamagedDestroyedBuilding[0]?.responsibleOfficer}
                  onChange={handleChange}
                  style={inputStyle} required />
              </div>
            </div>
          </div>

          <h2 style={headingStyle}>Reporting and Documentation: Recovery of Equipment/Furniture</h2>
          <div style={sectionStyle}>
            <div className='flex gap-4'>
              <div className='w-2xl'>
                <p className='text-gray-500'>Damaged/Destroyed Equipment/Furniture</p>
                <input
                  placeholder="e.g, Damaged/Destroyed Equipment/Furniture"
                  name='RecoveryAndEquipmentFurniture.0.damagedDestroyedEquipmentFurniture'
                  value={formData.RecoveryAndEquipmentFurniture[0]?.damagedDestroyedEquipmentFurniture || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div className='w-2xl'>
                <p className='text-gray-500'>Recovery Measures</p>
                <input
                  placeholder="e.g, Recovery Measures"
                  name='RecoveryAndEquipmentFurniture.0.recoveryMeasures'
                  value={formData.RecoveryAndEquipmentFurniture[0]?.recoveryMeasures || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='w-2xl'>
                <p className='text-gray-500'>Funding Source</p>
                <input
                  placeholder="Funding Source"
                  name='RecoveryAndEquipmentFurniture.0.fundingSource'
                  value={formData.RecoveryAndEquipmentFurniture[0]?.fundingSource || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div className='w-2xl'>
                <p className='text-gray-500'>Implementing Agency</p>
                <input
                  placeholder="Implementing Agency"
                  name='RecoveryAndEquipmentFurniture.0.implementingAgency'
                  value={formData.RecoveryAndEquipmentFurniture[0]?.implementingAgency || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='w-2xl'>
                <p className='text-gray-500'>Tentative Duration (Months)</p>
                <input
                  type="number"
                  placeholder="Tentative Duration (Months)"
                  name='RecoveryAndEquipmentFurniture.0.tentativeDurationMonths'
                  value={formData.RecoveryAndEquipmentFurniture[0]?.tentativeDurationMonths || 0}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div className='w-2xl'>
                <p className='text-gray-500'>Budget</p>
                <input
                  type="number"
                  placeholder="Budget"
                  name='RecoveryAndEquipmentFurniture.0.budget'
                  value={formData.RecoveryAndEquipmentFurniture[0]?.budget || 0}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div className='w-2xl'>
              <p className='text-gray-500'>Responsible Officer</p>
              <input
                placeholder="Responsible Officer"
                name='RecoveryAndEquipmentFurniture.0.responsibleOfficer'
                value={formData.RecoveryAndEquipmentFurniture[0]?.responsibleOfficer || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
          </div>



          <h2 style={headingStyle}>Functioning of Education</h2>
          <div style={sectionStyle}>
            <div className='flex gap-4'>
              <div className='w-2xl'>
                <p className='text-gray-500'>Identified alternate Location for school Education</p>
                <input
                  placeholder="e.g, identified alternate location"
                  name='alterateSchoolLocation'
                  value={formData.FunctioningOfEducation[0]?.alterateSchoolLocation}
                  onChange={handleChange}
                  style={inputStyle} required />
              </div>
              <div className='w-2xl'>
                <p className='text-gray-500'>Provisions for Online Education</p>
                <input
                  name='provisionForOnlineEducation'
                  value={formData.FunctioningOfEducation[0]?.provisionForOnlineEducation}
                  onChange={handleChange}
                  placeholder="e.g, provisions for online education"
                  style={inputStyle} required />
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='w-2xl'>
                <p className='text-gray-500'>Funding source to meet expenditure</p>
                <input
                  placeholder="e.g, funding source to meet expenditure"
                  name='fundingSourceToMeetExpenditure'
                  value={formData.FunctioningOfEducation[0]?.fundingSourceToMeetExpenditure}
                  onChange={handleChange}
                  style={inputStyle} required />
              </div>
              <div className='w-2xl'>
                <p className='text-gray-500'>Responsibility</p>
                <input
                  placeholder="e.g,Responsibility"
                  name='responsibility'
                  value={formData.FunctioningOfEducation[0]?.responsibility}
                  onChange={handleChange}
                  style={inputStyle} required />
              </div>
            </div>


          </div>


          <h2 style={headingStyle}>Monthly/Quarterly Checklist Reviews</h2>
          <div style={sectionStyle}>
            <div className="flex gap-4 mb-4">
              <div className="w-2xl">
                <p className="text-gray-500">Review Date</p>
                <input
                  type="date"
                  name='MonthlyQuarterlyReview.0.reviewDate'
                  value={formData.MonthlyQuarterlyReview[0]?.reviewDate || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  className="text-gray-500"
                  required
                />
              </div>
              <div className="w-2xl">
                <p className="text-gray-500">Review Type</p>
                <select
                  name='MonthlyQuarterlyReview.0.reviewType'
                  value={formData.MonthlyQuarterlyReview[0]?.reviewType || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  className="text-gray-500"
                  required
                >
                  <option value="">Select Review Type</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Annual">Annual</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-500">Checklist Name</p>
              <input
                placeholder="Enter checklist name"
                style={inputStyle}
                name='MonthlyQuarterlyReview.0.checklistName'
                value={formData.MonthlyQuarterlyReview[0]?.checklistName || ''}
                onChange={handleChange}
                required
              />
            </div>

            <div className='flex gap-4 mb-4'>
              <div className="w-2xl">
                <p className="text-gray-500">Status</p>
                <select
                  name='MonthlyQuarterlyReview.0.status'
                  value={formData.MonthlyQuarterlyReview[0]?.status || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  className="text-gray-500"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Pending">Pending</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>
              <div className="w-2xl">
                <p className="text-gray-500">Next Review Date</p>
                <input
                  type="date"
                  name='MonthlyQuarterlyReview.0.nextReviewDate'
                  value={formData.MonthlyQuarterlyReview[0]?.nextReviewDate || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  className="text-gray-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-500">Reviewed By</p>
              <input
                placeholder="Enter reviewer name"
                name='MonthlyQuarterlyReview.0.reviewedBy'
                value={formData.MonthlyQuarterlyReview[0]?.reviewedBy || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div>
              <p className="text-gray-500">Remarks/Action Needed</p>
              <textarea
                placeholder="Enter remarks or actions needed"
                name='MonthlyQuarterlyReview.0.remarks'
                value={formData.MonthlyQuarterlyReview[0]?.remarks || ''}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "80px" }}
                className="resize-none"
                required
              />
            </div>
          </div>

          {/* === Section: Plan Updation Cycle === */}
          <h2 style={headingStyle}>Plan Updation Cycle (Every 6 months or post-incident)</h2>
          <div style={sectionStyle}>
            <div className="mb-4">
              <p className="text-gray-500">Version/Date</p>
              <input
                type="date"
                placeholder="Version/Date (e.g., 01/01/2025)"
                name='PlanUpdationCycle.0.versionDate'
                value={formData.PlanUpdationCycle[0]?.versionDate || ''}
                onChange={handleChange}
                style={inputStyle}
                className="text-gray-500"
                required
              />
            </div>

            <div className='flex gap-4 mb-4'>
              <div className="flex-1">
                <p className="text-gray-500">Update Trigger</p>
                <input
                  placeholder="Update Trigger (e.g., lack of water tanker)"
                  name='PlanUpdationCycle.0.updateTrigger'
                  value={formData.PlanUpdationCycle[0]?.updateTrigger || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-500">Key Changes Made</p>
                <input
                  placeholder="Key Changes Made (e.g., changed water tanker)"
                  name='PlanUpdationCycle.0.keyChangesMade'
                  value={formData.PlanUpdationCycle[0]?.keyChangesMade || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-500">Reviewed By</p>
              <input
                placeholder="Reviewed By (e.g., Police)"
                name='PlanUpdationCycle.0.reviewedBy'
                value={formData.PlanUpdationCycle[0]?.reviewedBy || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div>
              <p className="text-gray-500">Next Scheduled Update</p>
              <input
                type="date"
                name='PlanUpdationCycle.0.nextScheduledUpdate'
                value={formData.PlanUpdationCycle[0]?.nextScheduledUpdate || ''}
                onChange={handleChange}
                placeholder="Next Scheduled Update (e.g., 08/08/2026)"
                style={inputStyle}
                className="text-gray-500"
                required
              />
            </div>
          </div>

          {/* === Section: Feedback Mechanism === */}
          <h2 style={headingStyle}>Feedback Mechanism & Community Validation</h2>
          <div style={sectionStyle}>
            <input
              placeholder="Feedback Source (e.g., PTM)"
              name='FeedbackSource'
              value={formData.FeedBackMechanismCommunityValidation[0]?.FeedbackSource}
              onChange={handleChange}
              style={inputStyle} required />
            <div className='flex gap-4'>
              <input
                placeholder="Date Received (e.g., 23/05/2025)"
                name='DateReceived'
                value={formData.FeedBackMechanismCommunityValidation[0]?.DateReceived}
                onChange={handleChange}
                style={inputStyle} required />
              <input
                placeholder="Feedback Summary (e.g., request to change water tanks)"
                name='FeedBackSummary'
                value={formData.FeedBackMechanismCommunityValidation[0]?.FeedBackSummary}
                onChange={handleChange}
                style={inputStyle} required />
              <input
                name='ActionTaken'
                value={formData.FeedBackMechanismCommunityValidation[0]?.ActionTaken}
                onChange={handleChange}
                placeholder="Action Taken (e.g., water tank changed)" style={inputStyle} required />
            </div>
            <input
              placeholder="Validated By Community? (Yes/No)"
              name='ValidateByCommunity'
              value={formData.FeedBackMechanismCommunityValidation[0]?.ValidateByCommunity}
              onChange={handleChange}
              style={inputStyle} required />
          </div>





          <h2 style={headingStyle}>Psychological Recovery</h2>
          <div style={sectionStyle}>
            <div className="mb-4">
              <p className="text-gray-500">No. of Students</p>
              <input
                type="number"
                placeholder="No. of Student's"
                name='PsychologicalRecovery.0.noOfStudents'
                value={formData.PsychologicalRecovery[0]?.noOfStudents || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div className="mb-4">
              <p className="text-gray-500">Teacher's Staff Need</p>
              <input
                placeholder="Teacher's Staff need"
                name='PsychologicalRecovery.0.teacherStaffNeed'
                value={formData.PsychologicalRecovery[0]?.teacherStaffNeed || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div className='flex gap-4 mb-4'>
              <div className="flex-1">
                <p className="text-gray-500">Name of Counselors</p>
                <input
                  placeholder="Name of counselors"
                  name='PsychologicalRecovery.0.nameOfCounselors'
                  value={formData.PsychologicalRecovery[0]?.nameOfCounselors || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-500">Contact No. of Counselors</p>
                <input
                  type="tel"
                  placeholder="Contact no. of counselors"
                  name='PsychologicalRecovery.0.contactNoOfcounselors'
                  value={formData.PsychologicalRecovery[0]?.contactNoOfcounselors || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-500">Location's Address of the Clinics of Counselors</p>
              <textarea
                placeholder="Location's Address of the Clinics of Counselors"
                name='PsychologicalRecovery.0.counselorsAddress'
                value={formData.PsychologicalRecovery[0]?.counselorsAddress || ''}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "80px" }}
                className="resize-none"
                required
              />
            </div>

            <div>
              <p className="text-gray-500">Counselors Responsibility</p>
              <textarea
                placeholder="Responsibility"
                name='PsychologicalRecovery.0.counselorsResponsibility'
                value={formData.PsychologicalRecovery[0]?.counselorsResponsibility || ''}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "80px" }}
                className="resize-none"
                required
              />
            </div>
          </div>




          <h2 style={headingStyle}>Team for Students with Special needs (IF CHILDREN ARE THERE)</h2>
          <div style={sectionStyle}>
            <input
              placeholder="Name of Team Member"
              name='nameOfTeamMember'
              value={formData.TeamForStudentsSpecialNeed[0]?.nameOfTeamMember}
              onChange={handleChange}
              style={inputStyle} required />
            <input
              placeholder="Designation"
              name='memberDesignation'
              value={formData.TeamForStudentsSpecialNeed[0]?.memberDesignation}
              onChange={handleChange}
              style={inputStyle} required />
            <div className='flex gap-4'>
              <input
                placeholder="Address"
                name='memberAddress'
                value={formData.TeamForStudentsSpecialNeed[0]?.memberAddress}
                onChange={handleChange}
                style={inputStyle} required />
              <input
                placeholder="Contact No"
                name='memberContactno'
                value={formData.TeamForStudentsSpecialNeed[0]?.memberContactno}
                onChange={handleChange}
                style={inputStyle} required />
              <input
                placeholder="Name Of the Student"
                name='nameOftheStudent'
                value={formData.TeamForStudentsSpecialNeed[0]?.nameOftheStudent}
                onChange={handleChange}
                style={inputStyle} required />
            </div>
            <input
              placeholder="Contact No of the Student"
              name='studentContactNo'
              value={formData.TeamForStudentsSpecialNeed[0]?.studentContactNo}
              onChange={handleChange}
              style={inputStyle} required />
            <input
              placeholder="Address of the Student"
              name='studentAddress'
              value={formData.TeamForStudentsSpecialNeed[0]?.studentAddress}
              onChange={handleChange}
              style={inputStyle} required />
          </div>



          <h2 style={headingStyle}>Disaster/ Accident Reporting Format</h2>
          <div style={sectionStyle}>
            {/* 1. Name of School */}
            <div className="mb-4">
              <h1 className="text-gray-500">Name of School</h1>
              <input
                placeholder="Enter school name"
                name='DisasterAccidentReporting.0.schoolName'
                value={formData.DisasterAccidentReporting[0]?.schoolName || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            {/* 2. Address */}
            <div className="mb-4">
              <h1 className="text-gray-500">Address</h1>
              <textarea
                placeholder="Enter address"
                name='DisasterAccidentReporting.0.schoolAddress'
                value={formData.DisasterAccidentReporting[0]?.schoolAddress || ''}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "60px" }}
                className="resize-none"
                required
              />
            </div>

            {/* 3. Contact */}
            <div className="mb-4">
              <h1 className="text-gray-500">Contact</h1>
              <input
                type="tel"
                placeholder="Enter contact number"
                name='DisasterAccidentReporting.0.contactNumber'
                value={formData.DisasterAccidentReporting[0]?.contactNumber || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            {/* 4. Date and Time */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <h1 className="text-gray-500">Incident Date</h1>
                <input
                  type="date"
                  name='DisasterAccidentReporting.0.incidentDate'
                  value={formData.DisasterAccidentReporting[0]?.incidentDate || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  className="text-gray-500"
                  required
                />
              </div>
              <div className="flex-1">
                <h1 className="text-gray-500">Incident Time</h1>
                <input
                  type="time"
                  name='DisasterAccidentReporting.0.incidentTime'
                  value={formData.DisasterAccidentReporting[0]?.incidentTime || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  className="text-gray-500"
                  required
                />
              </div>
            </div>

            {/* 6. Type of Disaster/ Accident */}
            <div className="mb-4">
              <h1 className="text-gray-500">Type of Disaster/ Accident</h1>
              <input
                placeholder="Enter type of disaster/accident"
                name='DisasterAccidentReporting.0.disasterType'
                value={formData.DisasterAccidentReporting[0]?.disasterType || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            {/* 7. No. of Affected persons */}
            <div className="mb-4">
              <h1 className="text-gray-500">Total Affected Persons</h1>
              <input
                type="number"
                placeholder="Enter number of affected persons"
                name='DisasterAccidentReporting.0.totalAffectedPersons'
                value={formData.DisasterAccidentReporting[0]?.totalAffectedPersons || 0}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            {/* 8. Deaths */}
            <div className="mb-4">
              <h1 className="text-gray-500">Deaths (if any)</h1>
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-1">Teaching Staff</p>
                  <input
                    type="number"
                    name='deaths_teachingStaff'
                    value={formData.DisasterAccidentReporting[0]?.deaths?.teachingStaff || 0}
                    onChange={handleChange}
                    placeholder="Teaching Staff"
                    style={inputStyle}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-1">Students</p>
                  <input
                    type="number"
                    placeholder="Students"
                    name='deaths_students'
                    value={formData.DisasterAccidentReporting[0]?.deaths?.students || 0}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-1">Non-Teaching Staff</p>
                  <input
                    type="number"
                    name='deaths_nonTeachingStaff'
                    value={formData.DisasterAccidentReporting[0]?.deaths?.nonTeachingStaff || 0}
                    onChange={handleChange}
                    placeholder="Non-Teaching Staff"
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* 9. Injured */}
            <div className="mb-4">
              <h1 className="text-gray-500">Total Injured</h1>
              <input
                type="number"
                placeholder="Enter number of injured persons"
                name='DisasterAccidentReporting.0.totalInjured'
                value={formData.DisasterAccidentReporting[0]?.totalInjured || 0}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>


            <div className="mb-4">
              <h1 className="text-gray-500">Loss of Property</h1>
              <textarea
                placeholder="Describe loss of property"
                name='DisasterAccidentReporting.0.lossOfProperty'
                value={formData.DisasterAccidentReporting[0]?.lossOfProperty || ''}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "80px" }}
                className="resize-none"
                required
              />
            </div>


            <div className="mb-4">
              <h1 className="text-gray-500">Response Agencies</h1>
              <input
                placeholder="Enter response agencies"
                name='DisasterAccidentReporting.0.responseAgencies'
                value={formData.DisasterAccidentReporting[0]?.responseAgencies || ''}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>


            <div className="mb-4">
              <h1 className="text-gray-500">Description of the Event</h1>
              <textarea
                placeholder="Describe the event"
                name='DisasterAccidentReporting.0.eventDescription'
                value={formData.DisasterAccidentReporting[0]?.eventDescription || ''}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "100px" }}
                className="resize-none"
                required
              />
            </div>

            <div className="mb-4">
              <h1 className="text-gray-500">Description of the Response</h1>
              <textarea
                placeholder="Describe the response"
                name='DisasterAccidentReporting.0.responseDescription'
                value={formData.DisasterAccidentReporting[0]?.responseDescription || ''}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "100px" }}
                className="resize-none"
                required
              />
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <h1 className="text-gray-500">Reported By</h1>
                <input
                  placeholder="Enter reporter name"
                  name='DisasterAccidentReporting.0.reportedBy'
                  value={formData.DisasterAccidentReporting[0]?.reportedBy || ''}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div className="flex-1">
                <h1 className="text-gray-500">Report Date</h1>
                <input
                  type="date"
                  name='DisasterAccidentReporting.0.reportedDate'
                  value={formData.DisasterAccidentReporting[0]?.reportedDate || ''}
                  onChange={handleChange}
                  style={inputStyle}
                  className="text-gray-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <h1 className="text-gray-500">Status</h1>
              <select
                name='DisasterAccidentReporting.0.status'
                value={formData.DisasterAccidentReporting[0]?.status || ''}
                onChange={handleChange}
                style={inputStyle}
                className="text-gray-500"
              >
                <option value="">Select Status</option>
                <option value="Draft">Draft</option>
                <option value="Submitted">Submitted</option>
                <option value="Under Investigation">Under Investigation</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>





          <h2 style={headingStyle}>Dos and Don’ts</h2>
          <div style={sectionStyle} className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-500">
                  <th className="border border-gray-300 p-2 text-left">S.No.</th>
                  <th className="border border-gray-300 p-2 text-left">Dos</th>
                  <th className="border border-gray-300 p-2 text-left">Don’ts</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Develop an escape plan and ensure everyone knows it.",
                    "Don’t overload sockets with multiple electrical devices",
                  ],
                  [
                    "Display all Emergency Support Functionaries' numbers and the Evacuation Map on all floors and at strategic locations",
                    "Never allow children to handle a matchbox/lighter",
                  ],
                  [
                    "Always follow the NBC building bylaws.",
                    "Don’t keep expired fire extinguishers or leave them unused for years.",
                  ],
                  [
                    "Set out a proper alarm system, Install smoke detectors or alarm systems, especially in high-risk zones.",
                    "Don’t store paper materials near power points or heaters.",
                  ],
                  [
                    "Keep the escape route free from any blockage",
                    "Don’t block staircases, corridors, or exit paths with furniture or waste materials.",
                  ],
                  [
                    "Train teachers and staff in first aid and fire safety procedures",
                    "Don’t ignore maintenance of exhaust, ventilation, and gas safety in labs/canteens.",
                  ],
                  [
                    "Keep a first aid kit and keep it ready at an easily accessible location.",
                    "Don’t install temporary plastic/tin sheds without fire safety checks",
                  ],
                  [
                    "Keep flammable materials (chemicals, papers) away from electrical points.",
                    "Don’t allow vendors or autos to park near the main gate, blocking evacuation.",
                  ],
                  [
                    `In case of fire
- Protect yourself and your friends - Stay Calm, Don't Panic.
- Raise Alarm and Alert Everyone.
- Use the nearest Exit Routes.
- Close Doors and Windows behind You.
- Use Staircases, Not Lifts.
- Never stand up, but always crawl low on the ground and keep your face covered. 
- Attract the attention of the Rescue Team by making a loud noise.`,
                    "Don’t delay repairs of broken fans, switches, or emergency lights.",
                  ],
                  [
                    "During normal times, look out for old wiring & broken electrical fittings. Report any hazardous conditions to your electrician.",
                    "Don’t assume the playground or outer areas are automatically safe during disasters.",
                  ],
                  [
                    "Use fire-rated electrical equipment and proper earthing in labs/computer rooms.",
                    "Don’t keep electrical rooms locked and unchecked for years.",
                  ],
                  [
                    "In case anyone is caught on fire: Always STOP, DROP, and ROLL. Roll over the ground to put off the fire.",
                    "Don’t allow the burning of garbage near school boundaries.",
                  ],
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2 text-gray-500">{index + 1}</td>
                    <td className="border border-gray-300 p-2 whitespace-pre-line text-gray-500">{row[0]}</td>
                    <td className="border border-gray-300 p-2 text-gray-500">{row[1]}</td>
                  </tr>
                ))}
              </tbody>

            </table>
            <TablePagination
              component="div"
              count={formData.ResourceAndEquipmentLog.length}
              page={pagination.page}
              onPageChange={handleChangePage}
              rowsPerPage={pagination.rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5]}    // To allow only 5 per page
            />

          </div>

          {/* === Section: Do's and Don'ts Link === */}
          <div style={{ marginTop: '30px', marginBottom: '30px', textAlign: 'center' }}>
            <a href="#" style={{ color: '#fff', backgroundColor: '#8BAE3F', padding: '12px 24px', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
              Read / Download Do's and Don'ts
            </a>
            <div className='relative top-4'>
              <button className='h-10 w-28  rounded-md gap-2 bg-[#8BAE3F] text-white font-semibold cursor-pointer' type='submit'>Submit</button>
            </div>

          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

const headingStyle = {
  color: '#8BAE3F',
  fontSize: '22px',
  fontWeight: 'bold',
  marginBottom: '15px',
  marginTop: '80px'
};

const sectionStyle = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  marginBottom: '20px'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '14px'
};

export default RegistrationForm;



















// CODE MAY BE ADD LATER
//  const handleChange = (e) => {
//   const { name, value, type, checked, files } = e.target;

//   setFormData((prevData) => {
//     const newData = JSON.parse(JSON.stringify(prevData)); // Deep clone

//     // Helper function to set nested value
//     const setNestedValue = (obj, path, val) => {
//       const keys = path.split(".");
//       let current = obj;

//       for (let i = 0; i < keys.length - 1; i++) {
//         if (!current[keys[i]]) current[keys[i]] = {};
//         current = current[keys[i]];
//       }
//       current[keys[keys.length - 1]] = val;
//     };



//     // Helper function to get the correct value based on input type
//     const getValue = () => {
//       if (type === "checkbox") return checked;
//       if (type === "radio") return value === "yes";
//       if (type === "number") return parseInt(value) || 0;
//       if (type === "date") return value || null;
//       if (type === "file")
//         return files
//           ? files.length > 1
//             ? Array.from(files)
//             : files[0]
//           : "";
//       return value;
//     };

//     // ✅ Handle page limit (rows per page for pagination)
//     if (name === "rowsPerPage" || name === "pageLimit") {
//       newData[name] = parseInt(value) || 5; // default fallback
//       newData.page = 0; // reset page when limit changes
//       return newData;
//     }

//     // ✅ Handle current page (for pagination)
//     if (name === "page") {
//       newData.page = parseInt(value) || 0;
//       return newData;
//     }

//     // Handle ResourceAndEquipmentLog array notation (e.g., ResourceAndEquipmentLog[0].location)
//     if (name.includes("ResourceAndEquipmentLog[") && name.includes("].")) {
//       const match = name.match(/ResourceAndEquipmentLog\[(\d+)\]\.(.+)/);
//       if (match) {
//         const index = parseInt(match[1]);
//         const field = match[2];

//         if (newData.ResourceAndEquipmentLog && newData.ResourceAndEquipmentLog[index]) {
//           newData.ResourceAndEquipmentLog[index][field] =
//             field === "quantity" ? parseInt(value) || 0 : getValue();
//         }
//         return newData;
//       }
//     }

//     // Handle file inputs
//     if (type === "file") {
//       if (name.includes("_file")) {
//         const [section, field] = name.split("_");
//         if (newData.SafetyAndEmergencyPlans?.[0]?.[section]) {
//           newData.SafetyAndEmergencyPlans[0][section].file = files[0] || "";
//         }
//       } else if (name === "uploadImage") {
//         newData.uploadImage = Array.from(files);
//       } else if (name === "uploadVideo") {
//         newData.uploadVideo = Array.from(files);
//       } else if (name === "uploadLetter") {
//         newData.uploadLetter = files[0] || "";
//       }
//       return newData;
//     }

//     // Handle basic form fields (direct properties)
//     if (!name.includes("_") && !name.includes(".") && !name.includes("[")) {
//       if (newData.hasOwnProperty(name)) {
//         newData[name] = getValue();
//         return newData;
//       }

//       // Handle RolesAndResponsibility specific field mappings
//       const roleFieldMappings = {
//         principalPhone: "principalinfo.principalPhone",
//         principalEmail: "principalinfo.principalEmail",
//         vicePrincipalPhone: "vicePrincipalinfo.vicePrincipalPhone",
//         vicePrincipalEmail: "vicePrincipalinfo.vicePrincipalEmail",
//         seniorCoordinatePhone: "seniorCoordinate.seniorCoordinatePhone",
//         seniorCoordinateEmail: "seniorCoordinate.seniorCoordinateEmail",
//         scienceTeacherPhone: "scienceTeachers.scienceTeacherPhone",
//         scienceTeacherEmail: "scienceTeachers.scienceTeacherEmail",
//         labAsistantPhone: "labAsistant.labAsistantPhone",
//         labAsistantEmail: "labAsistant.labAsistantEmail",
//         headBoyAndgirlPhone: "HeadGirlAndBoy.headBoyAndgirlPhone",
//         headBoyAndGirlEmail: "HeadGirlAndBoy.headBoyAndGirlEmail",
//         CulturalHeadAndLiteraryCaptainPhone:
//           "CulturalHeadAndLiteraryCaptain.CulturalHeadAndLiteraryCaptainPhone",
//         CulturalHeadAndLiteraryCaptainEmail:
//           "CulturalHeadAndLiteraryCaptain.CulturalHeadAndLiteraryCaptainEmail",
//       };

//       if (roleFieldMappings[name]) {
//         const [section, field] = roleFieldMappings[name].split(".");
//         if (newData.RolesAndResponsibility?.[0]?.[section]) {
//           newData.RolesAndResponsibility[0][section][field] = getValue();
//           return newData;
//         }
//       }

//       // Check if it belongs to any array sections
//       const arraySections = [
//         "FirstAidReferralDirectory",
//         "LocalHealthEmergencyReferralDirectory",
//         "ResourceAndEquipmentLog",
//         "FireSafetyEquipmentInventory",
//         "FireDrillLog",
//         "RecoveryAndDamagedDestroyedBuilding",
//         "RecoveryAndEquipmentFurniture",
//         "FunctioningOfEducation",
//         "PlanUpdationCycle",
//         "FeedBackMechanismCommunityValidation",
//         "PsychologicalRecovery",
//         "TeamForStudentsSpecialNeed",
//         "DisasterAccidentReporting",
//         "MonthlyQuarterlyReview",
//         "AdditionalFeedback",
//       ];

//       for (const section of arraySections) {
//         if (newData[section]?.[0]?.hasOwnProperty(name)) {
//           newData[section][0][name] = getValue();
//           return newData;
//         }
//       }
//     }

//     // Handle dot notation (nested fields)
//     if (name.includes(".")) {
//       const parts = name.split(".");

//       if (parts.length >= 4 && parts[0] === "RolesAndResponsibility") {
//         const [mainSection, index, subSection, field] = parts;
//         const arrayIndex = parseInt(index);
//         if (newData[mainSection]?.[arrayIndex]?.[subSection]) {
//           newData[mainSection][arrayIndex][subSection][field] = getValue();
//         }
//       } else if (parts.length === 2) {
//         const [section, field] = parts;
//         if (newData.RolesAndResponsibility?.[0]?.[section]) {
//           newData.RolesAndResponsibility[0][section][field] = getValue();
//         }
//       } else if (parts.length >= 3) {
//         const [mainSection, index, field] = parts;
//         const arrayIndex = parseInt(index);

//         const arraySections = [
//           "FirstAidReferralDirectory",
//           "LocalHealthEmergencyReferralDirectory",
//           "ResourceAndEquipmentLog",
//           "FireSafetyEquipmentInventory",
//           "FireDrillLog",
//           "RecoveryAndDamagedDestroyedBuilding",
//           "RecoveryAndEquipmentFurniture",
//           "FunctioningOfEducation",
//           "PlanUpdationCycle",
//           "FeedBackMechanismCommunityValidation",
//           "PsychologicalRecovery",
//           "TeamForStudentsSpecialNeed",
//           "DisasterAccidentReporting",
//           "MonthlyQuarterlyReview",
//           "AdditionalFeedback",
//           "SafetyAndEmergencyPlans",
//         ];

//         if (arraySections.includes(mainSection) && newData[mainSection]?.[arrayIndex]) {
//           if (parts.length === 3) {
//             newData[mainSection][arrayIndex][field] = getValue();
//           } else if (parts.length === 4) {
//             const [, , subSection, subField] = parts;
//             if (newData[mainSection][arrayIndex][subSection]) {
//               newData[mainSection][arrayIndex][subSection][subField] = getValue();
//             }
//           } else if (parts.length === 5) {
//             const [, , subSection, subSubSection, subField] = parts;
//             if (newData[mainSection][arrayIndex][subSection]?.[subSubSection]) {
//               newData[mainSection][arrayIndex][subSection][subSubSection][subField] = getValue();
//             }
//           }
//         }
//       }
//       return newData;
//     }

//     // Handle underscore notation
//     if (name.includes("_")) {
//       const parts = name.split("_");

//       if (parts.length === 2) {
//         const [section, field] = parts;

//         if (newData.SafetyAndEmergencyPlans?.[0]?.[section]) {
//           newData.SafetyAndEmergencyPlans[0][section][field] = getValue();
//           return newData;
//         }

//         if (section === "fireSafetyEquipment" && newData.FireDrillLog?.[0]?.fireSafetyEquipment) {
//           newData.FireDrillLog[0].fireSafetyEquipment[field] = getValue();
//           return newData;
//         }

//         if (section === "signatureAndDate" && newData.FireDrillLog?.[0]?.signatureAndDate) {
//           newData.FireDrillLog[0].signatureAndDate[field] = getValue();
//           return newData;
//         }

//         const arraySections = [
//           "FirstAidReferralDirectory",
//           "LocalHealthEmergencyReferralDirectory",
//           "ResourceAndEquipmentLog",
//           "FireSafetyEquipmentInventory",
//           "RecoveryAndDamagedDestroyedBuilding",
//           "RecoveryAndEquipmentFurniture",
//           "FunctioningOfEducation",
//           "PlanUpdationCycle",
//           "FeedBackMechanismCommunityValidation",
//           "PsychologicalRecovery",
//           "TeamForStudentsSpecialNeed",
//           "DisasterAccidentReporting",
//           "MonthlyQuarterlyReview",
//           "AdditionalFeedback",
//         ];

//         for (const arraySection of arraySections) {
//           if (newData[arraySection]?.[0]?.[section]) {
//             newData[arraySection][0][section][field] = getValue();
//             return newData;
//           }
//         }
//       } else if (parts.length === 3) {
//         const [section, subsection, field] = parts;

//         if (section === "participants" && newData.FireDrillLog?.[0]?.participants?.[subsection]) {
//           newData.FireDrillLog[0].participants[subsection][field] = getValue();
//           return newData;
//         }

//         if (section === "deaths" && newData.DisasterAccidentReporting?.[0]?.deaths) {
//           newData.DisasterAccidentReporting[0].deaths[subsection] = getValue();
//           return newData;
//         }
//       }
//     }

//     return newData;
//   });
// };











// code may be add in future

{/* <h2 style={headingStyle}>Monthly/Quarterly Checklist Reviews</h2>
          <div style={sectionStyle} className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left text-gray-500">Checklist Area</th>
                  <th className="p-2 text-left text-gray-500">Last Reviewed</th> 
                  <th className="border border-gray-300 p-2 text-left text-gray-500">Status</th>
                  <th className="border border-gray-300 p-2 text-left text-gray-500">Remarks/Action Needed</th>
                </tr>
              </thead>
              <tbody>
              
                <tr>
                  <td className="border border-gray-300 p-2 text-gray-500">Fire Extinguishers</td>
                  <td className="p-2">
                    <input
                      name='FireExtinguishersDate'
                      value={formData.FireExtinguishersDate}
                      onChange={handleChange}
                      type="date"
                      style={inputStyle}
                      className='text-gray-500'
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex gap-2 items-center">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="FireExtinguishersStatus"
                          value="Yes"
                          checked={formData.FireExtinguishersStatus === "Yes"}
                          onChange={handleChange}
                          className="accent-green-500"
                          required
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="FireExtinguishersStatus"
                          value="No"
                          checked={formData.FireExtinguishersStatus === "No"}
                          onChange={handleChange}
                          className="accent-red-500"
                          required
                        />
                        No
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      placeholder="Remarks / Action needed"
                      name='FireExtinguishersRemarks'
                      value={formData.FireExtinguishersRemarks}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 p-2 text-gray-500">Alarm Systems</td>
                  <td className="p-2">
                    <input
                      name='AlarmSystemsDate'
                      value={formData.AlarmSystemsDate}
                      onChange={handleChange}
                      type="date"
                      style={inputStyle}
                      className='text-gray-500'
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex gap-2 items-center">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="AlarmSystemsStatus"
                          value="Yes"
                          checked={formData.AlarmSystemsStatus === "Yes"}
                          onChange={handleChange}
                          className="accent-green-500"
                          required
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="AlarmSystemsStatus"
                          value="No"
                          checked={formData.AlarmSystemsStatus === "No"}
                          onChange={handleChange}
                          className="accent-red-500"
                          required
                        />
                        No
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      placeholder="Remarks / Action needed"
                      name='AlarmSystemsRemarks'
                      value={formData.AlarmSystemsRemarks}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                </tr>

             
                <tr>
                  <td className="border border-gray-300 p-2 text-gray-500">Evacuation Maps Displayed</td>
                  <td className="p-2">
                    <input
                      name='EvacuationMapsDate'
                      value={formData.EvacuationMapsDate}
                      onChange={handleChange}
                      type="date"
                      style={inputStyle}
                      className='text-gray-500'
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex gap-2 items-center">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="EvacuationMapsStatus"
                          value="Yes"
                          checked={formData.EvacuationMapsStatus === "Yes"}
                          onChange={handleChange}
                          className="accent-green-500"
                          required
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="EvacuationMapsStatus"
                          value="No"
                          checked={formData.EvacuationMapsStatus === "No"}
                          onChange={handleChange}
                          className="accent-red-500"
                          required
                        />
                        No
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      placeholder="Remarks / Action needed"
                      name='EvacuationMapsRemarks'
                      value={formData.EvacuationMapsRemarks}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 p-2 text-gray-500">Exit Signs & Lights</td>
                  <td className="p-2">
                    <input
                      name='ExitSignsDate'
                      value={formData.ExitSignsDate}
                      onChange={handleChange}
                      type="date"
                      style={inputStyle}
                      className='text-gray-500'
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex gap-2 items-center">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="ExitSignsStatus"
                          value="Yes"
                          checked={formData.ExitSignsStatus === "Yes"}
                          onChange={handleChange}
                          className="accent-green-500"
                          required
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="ExitSignsStatus"
                          value="No"
                          checked={formData.ExitSignsStatus === "No"}
                          onChange={handleChange}
                          className="accent-red-500"
                          required
                        />
                        No
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      placeholder="Remarks / Action needed"
                      name='ExitSignsRemarks'
                      value={formData.ExitSignsRemarks}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}








{/* <h2 style={headingStyle}>Feedback Mechanism and Community Validation</h2>
          <div style={sectionStyle} className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left text-gray-500">Feedback Source</th>
                  <th className="border border-gray-300 p-2 text-left text-gray-500">Date Received</th>
                  <th className="border border-gray-300 p-2 text-left text-gray-500">Feedback Summary</th>
                  <th className="border border-gray-300 p-2 text-left text-gray-500">Action Taken</th>
                  <th className="border border-gray-300 p-2 text-left text-gray-500">Validated By Community?</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td className="border border-gray-300 p-2 text-gray-500">Parent (PTM)</td>
                  <td className="border border-gray-300 p-2 text-gray-500">
                    <input
                      type="date"
                      name="feedbackDate"
                      value={formData.feedbackDate}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      placeholder="Enter feedback summary"
                      name="feedbackSummary"
                      value={formData.feedbackSummary}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      name="feedbackAction"
                      value={formData.feedbackAction}
                      onChange={handleChange}
                      placeholder="Enter action taken"
                      style={inputStyle}
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex gap-2 items-center">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="validated-1"
                          value="Yes"
                          checked={formData['validated-1'] === 'Yes'}
                          onChange={handleChange}
                          className="accent-green-500"
                          required
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="validated-1"
                          value="No"
                          checked={formData['validated-1'] === 'No'}
                          onChange={handleChange}
                          className="accent-red-500"
                          required
                        />
                        No
                      </label>
                    </div>
                  </td>
                </tr>

             
                <tr>
                  <td className="border border-gray-300 p-2 text-gray-500">Student Suggestion Box</td>
                  <td className="border border-gray-300 p-2 text-gray-500">
                    <input
                      type="date"
                      name="studentSuggestionDate"
                      value={formData.studentSuggestionDate}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      placeholder="Enter feedback summary"
                      name="studentSuggestionSummary"
                      value={formData.studentSuggestionSummary}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      placeholder="Enter action taken"
                      name="studentSuggestionAction"
                      value={formData.studentSuggestionAction}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex gap-2 items-center">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="validated-2"
                          value="Yes"
                          checked={formData['validated-2'] === 'Yes'}
                          onChange={handleChange}
                          className="accent-green-500"
                          required
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="validated-2"
                          value="No"
                          checked={formData['validated-2'] === 'No'}
                          onChange={handleChange}
                          className="accent-red-500"
                          required
                        />
                        No
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 p-2 text-gray-500">Local Fire Department</td>
                  <td className="border border-gray-300 p-2 text-gray-500">
                    <input
                      type="date"
                      name="fireDepDate"
                      value={formData.fireDepDate}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      placeholder="Enter feedback summary"
                      name="fireDepSummary"
                      value={formData.fireDepSummary}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      placeholder="Enter action taken"
                      name="fireDepAction"
                      value={formData.fireDepAction}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex gap-2 items-center">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="validated-3"
                          value="Yes"
                          checked={formData['validated-3'] === 'Yes'}
                          onChange={handleChange}
                          className="accent-green-500"
                          required
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input
                          type="radio"
                          name="validated-3"
                          value="No"
                          checked={formData['validated-3'] === 'No'}
                          onChange={handleChange}
                          className="accent-red-500"
                          required
                        />
                        No
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}

