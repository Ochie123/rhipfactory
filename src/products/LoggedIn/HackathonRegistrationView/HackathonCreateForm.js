import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik"
import { useSnackbar } from "notistack"
import Container from 'react-bootstrap/Container';
//import Select from 'react-select';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { yellow } from "@mui/material/colors";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Paper,
  MenuItem,
  TextField,
  Typography
} from "@mui/material";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";


import QuillEditor from "../../../components/Quill-Editor";
import Timer2 from "view/Homepage/Timer2";
import { YupRegistrationValidation } from "./schema/YupRegistrationValidation"
import { RegistrationDefaultValue } from "./schema/RegistrationDefaultValue"
import { useNavigate } from "react-router"


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[500],
  "&:hover": {
    backgroundColor: yellow[700],
  },
}));

const HackathonCreateForm = props => {
  const theme = useTheme();

  const navigate = useNavigate()
  const softwareStacksData = {
    results: [
      { id: 1, name: "Python" },
      { id: 2, name: "Angular" },
      { id: 3, name: "React Native" },
      { id: 5, name: "Swift" },
      { id: 6, name: "Kotlin" },
      { id: 7, name: "React.js" },
      { id: 8, name: "Vue.js" },
      { id: 9, name: "Django" },
      { id: 10, name: "Python (with Pandas)" },
      { id: 11, name: "R" },
      { id: 12, name: "SQL" },
      { id: 13, name: "Python (with NumPy)" },
      { id: 14, name: "Excel" },
      { id: 15, name: "Power BI" },
      // Add more specifications as needed
    ]
  };
  const healthcareProblemsData = {
    results: [
      { id: 1, name: "Ease of accessing healthcare." },
      { id: 2, name: "Cost of healthcare services." },
      { id: 3, name: "Quality of healthcare outcomes" },
      { id: 5, name: "Better information & data on health services" },
      { id: 6, name: "Shortage of healthcare workers." },
      { id: 7, name: "Fake & substandard drugs" },
      { id: 8, name: "Poor customer experience in health facilities" },
    ]
  };
  const registrationChoicesData = {
    supported_ages: [["<20s", ">20s"],["20s", "20s"], ["30's", "30's"], ["40's", "40's"], ["50's", "50's"], [">60's", ">60's"]],
    supported_years: [["Zero", "Zero"], ["1 - 2 Years", "1 - 2 Years"], ["3 - 5 Years", "3 - 5 Years"],["More than 5 Years", "More than 5 Years"], ],
    sex_choices: [["male", "Male"], ["female", "Female"], ["prefer not to say", "Prefer not to say"]],
    participation: [["yes", "Yes"], ["no", "No"]],
    experience: [["yes", "Yes"], ["no", "No"]],
    hear_us: [["word of mouth", "Word of Mouth"], ["online advert", "Online Advert"], ["social media", "Social Media"],["website", "Website"],["other", "Other"]]
  };


  const [justEnded, setJustEnded] = useState(false)
  const currentDate = new Date()
   const update = () => {
     setJustEnded(true)
   }
 
   const [checked, setChecked] = React.useState(true);
 
   // Set end time for the timer (replace with your desired end time)
   const endTime = new Date("2024-04-14T00:00:00");
 

  const softwareStacks = softwareStacksData.results;
  const healthcareProblems = healthcareProblemsData.results;

  function getStyles(car_specification, personCar_specification, theme) {
    return {
      fontWeight:
      personCar_specification.indexOf(car_specification) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

 
  //const [car_specifications, setCarSpecifications] = useState([]);
  const [personSoftware_stack, setPersonSoftware_stack] = useState([]);
  const [personHealthcare_Problem, setpersonHealthcare_Problem] = useState([]);

  //const [personName, setPersonName] = React.useState([]);

  const handleDelete = (chipToDelete) => () => {
    setPersonSoftware_stack((chips) => chips.filter((chip) => chip.id !== chipToDelete.id));
  };


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonSoftware_stack(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setpersonHealthcare_Problem(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  
  
  const { enqueueSnackbar } = useSnackbar()
  const [error, setError] = useState("")

  return (
    <Container>

    <Formik
      initialValues={RegistrationDefaultValue}
      validationSchema={YupRegistrationValidation}
      onSubmit={async (values, formikHelpers) => {
        console.log(values);
        try {
          const formData = new FormData();
    
          // Append other form fields to the formData object
          const softwareSpecifications = values.software_stack || []; // Make sure it's an array

          softwareSpecifications.forEach(stack => {
            formData.append('software_stack', stack);
          });
   
          const healthcareSpecifications = values.healthcare_problem || []; // Make sure it's an array

          healthcareSpecifications.forEach(stack => {
            formData.append('healthcare_problem', stack);
          });
        
          formData.append('name', values.name);
   
         // formData.append('car_specification', values.car_specification);
          formData.append('supported_years', values.supported_years);
          formData.append('supported_ages', values.supported_ages);
          formData.append('sex_choices', values.sex_choices);
          formData.append('participation', values.participation);
          formData.append('experience', values.experience);
          formData.append('hear_us', values.hear_us);
          formData.append('email', values.email);
          formData.append('number', values.number);
          formData.append('linkedin', values.linkedin);
          formData.append('age', values.age);
          formData.append('healthcare_problems', values.healthcare_problems);
  
          formikHelpers.setStatus({ success: true });
          formikHelpers.setSubmitting(false);
          enqueueSnackbar('Thank you for your interest to participate in the BuildHealth24 Hackathon organised by RHIPFactory Kenya.', {
            variant: 'success',
          });
          navigate('/');
        } catch (err) {
          alert('Something happened. Please try again.');
          setError(err.message);
          formikHelpers.setStatus({ success: false });
          formikHelpers.setSubmitting(false);
        }
        //console.log(err.message)
      }}
      
    >
      {formikProps => (
        <form onSubmit={formikProps.handleSubmit} className="">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card>
              <CardHeader title="Personal Details" />
              <CardContent>

              <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                      <TextField
                    error={Boolean(
                      formikProps.touched.name && formikProps.errors.name
                    )}
                    fullWidth
                    helperText={
                      formikProps.touched.name && formikProps.errors.name
                      ? formikProps.errors.name
                      : " Your name."
                    }
                    label="Your Name"
                    name="name"
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                    value={formikProps.values.name}
                    variant="outlined"
                  />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(
                            formikProps.touched.email &&
                              formikProps.errors.email
                          )}
                          fullWidth
                          helperText={
                            formikProps.touched.email &&
                            formikProps.errors.email
                              ? formikProps.errors.email
                              : " Your email."
                          }
                          label="Your email"
                          name="email"
                          onBlur={formikProps.handleBlur}
                          onChange={formikProps.handleChange}
                          value={formikProps.values.email}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(
                            formikProps.touched.number &&
                              formikProps.errors.number
                          )}
                          fullWidth
                          helperText={
                            formikProps.touched.number &&
                            formikProps.errors.number
                              ? formikProps.errors.number
                              : "This is optional: Your Phone Number."
                          }
                          label="Your Phone Number"
                          name="number"
                          onBlur={formikProps.handleBlur}
                          onChange={formikProps.handleChange}
                          value={formikProps.values.number}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(
                            formikProps.touched.linkedin &&
                              formikProps.errors.linkedin
                          )}
                          fullWidth
                          helperText={
                            formikProps.touched.linkedin &&
                            formikProps.errors.linkedin
                              ? formikProps.errors.linkedin
                              : " Your LinkedIn Profile."
                          }
                          label="Your LinkedIn Profile"
                          name="linkedin"
                          onBlur={formikProps.handleBlur}
                          onChange={formikProps.handleChange}
                          value={formikProps.values.linkedin}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  <Box mt={3} mb={1}>
                    <Typography variant="subtitle2" color="textSecondary">
                    Why do you want to be part of the hackathon?
                    </Typography>
                  </Box>
                  <Paper variant="outlined">
                    <QuillEditor
                      className=""
                      value={formikProps.values.overview}
                      onChange={value =>
                        formikProps.setFieldValue("overview", value)
                      }
                    />
                  </Paper>
                  {formikProps.touched.overview &&
                    formikProps.errors.overview && (
                      <Box mt={2}>
                        <FormHelperText error>
                          {formikProps.errors.overview}
                        </FormHelperText>
                      </Box>
                    )}
                </CardContent>
              </Card>
              <Divider></Divider>
              <Card>
              <CardHeader title="Hackathon Details" />
              <CardContent>
              <Box mt={3} mb={1}>
            
                    <Typography variant="subtitle2" color="textSecondary">
                    Which Healthcare Problem Area would you like to solve for Kenyans?
                    </Typography>
               
              <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Healthcare Problems</InputLabel>
        <Field
          as={Select}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          name="healthcare_problem"
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          onBlur={formikProps.handleBlur}
          error={formikProps.touched.healthcare_problem && Boolean(formikProps.errors.healthcare_problem)}
          helperText={formikProps.touched.healthcare_problem && formikProps.errors.healthcare_problem}
          variant="outlined"
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
           {selected.map((value) => {
      const healthcareProblem = healthcareProblems.find(spec => spec.id === value);
      return (
        <Chip key={value} onDelete={handleDelete(value)} label={healthcareProblem ? healthcareProblem.name : ''} />
      );
    })}
            </Box>
          )}
          onChange={(event) => {
            formikProps.setFieldValue('healthcare_problem', event.target.value);
          }}
          
          
          value={formikProps.values.healthcare_problem || []}
        >
          {healthcareProblems.map(healthcare_problem => (
            <MenuItem
              key={healthcare_problem.id}
              value={healthcare_problem.id}
              style={getStyles( healthcare_problem,personHealthcare_Problem, theme)}
            >
              {healthcare_problem.name}
            </MenuItem>
          ))}

        </Field>

      </FormControl>
      <Box mt={3}>
      <Typography variant="subtitle2" color="textSecondary">
                    Other problems you would like to solve for Kenyans.
                    </Typography>
                    </Box>
                    </Box>
  
                  <Paper variant="outlined">
                    <QuillEditor
                      className=""
                      value={formikProps.values.healthcare_problems}
                      onChange={value =>
                        formikProps.setFieldValue("healthcare_problems", value)
                      }
                    />
                  </Paper>
                  {formikProps.touched.healthcare_problems &&
                    formikProps.errors.healthcare_problems && (
                      <Box mt={2}>
                        <FormHelperText error>
                          {formikProps.errors.healthcare_problems}
                        </FormHelperText>
                      </Box>
                    )}
                </CardContent>
              </Card>
              <Box mt={3}>
    </Box>
            

            </Grid>
            
            <Grid item xs={12} lg={4}>
              
              <Card>
                <CardHeader title="Other details" />
                <Divider />
                <CardContent>
{registrationChoicesData && (
 <div>

 <TextField
   fullWidth
    label="Age"
    name="age"
    select
    value={formikProps.values.age}
    onChange={formikProps.handleChange}
    onBlur={formikProps.handleBlur}
    error={formikProps.touched.age && Boolean(formikProps.errors.age)}
    helperText={formikProps.touched.age && formikProps.errors.age}
    variant="outlined"
   >
  <MenuItem value="">Select your age group</MenuItem>
    {registrationChoicesData.supported_ages.map(([value, label]) => (
     <MenuItem key={value} value={value}>
    {label}
  </MenuItem>
    ))}
</TextField>
<Divider />
 <br/>
<TextField
  fullWidth
   label="Sex"
   name="sex_choices"
  select
  value={formikProps.values.sex_choices}
  onChange={formikProps.handleChange}
  onBlur={formikProps.handleBlur}
  error={formikProps.touched.sex_choices && Boolean(formikProps.errors.sex_choices)}
  helperText={formikProps.touched.sex_choices && formikProps.errors.sex_choices}
  variant="outlined"
  >
 <MenuItem value="">Select your Sex</MenuItem>
   {registrationChoicesData.sex_choices.map(([value, label]) => (
  <MenuItem key={value} value={value}>
    {label}
  </MenuItem>
 ))}
</TextField>

<Divider />
 <br/>
 <TextField
  fullWidth
  label="Participation"
  name="participation"
  select
  value={formikProps.values.participation}
  onChange={formikProps.handleChange}
  onBlur={formikProps.handleBlur}
  error={formikProps.touched.participation && Boolean(formikProps.errors.participation)}
  helperText={formikProps.touched.participation && formikProps.errors.participation}
  variant="outlined"
  >
  <MenuItem value="">Have you ever participated in a hackathon?</MenuItem>
  {registrationChoicesData.participation.map(([value, label]) => (
    <MenuItem key={value} value={value}>
     {label}
  </MenuItem>
  ))}
  </TextField>
  <Divider />
 <br/>
                <TextField
      fullWidth
      label="Experience"
      name="experience"
      select
      value={formikProps.values.experience}
      onChange={formikProps.handleChange}
      variant="outlined"
    >
      <MenuItem value="">Do you have experience working in a start up?</MenuItem>
      {registrationChoicesData.experience.map(([value, label]) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </TextField>

    <Divider />
 <br/>
 
               
                        <TextField
                          error={Boolean(
                            formikProps.touched.supported_years &&
                              formikProps.errors.supported_years
                          )}
                          fullWidth
                     
                          label="Supported years"
                          name="supported_years"
                          select
                          value={formikProps.values.experience}
                          onChange={formikProps.handleChange}
                          variant="outlined"
                        >
                              <MenuItem value="">Number of years working in the Tech</MenuItem>
      {registrationChoicesData.supported_years.map(([value, label]) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
            </TextField>        
            <Divider />
 <br/>          
 <TextField
                          error={Boolean(
                            formikProps.touched.hear_us &&
                              formikProps.errors.hear_us
                          )}
                          fullWidth
                     
                          label="Hear us"
                          name="hear_us"
                          select
                          value={formikProps.values.hear_us}
                          onChange={formikProps.handleChange}
                          variant="outlined"
                        >
                              <MenuItem value="">How did you hear us?</MenuItem>
      {registrationChoicesData.hear_us.map(([value, label]) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
            </TextField>        
            <Divider />
 <br/>                
  </div>
  )}
</CardContent>

              <CardContent>

<div>        
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Your Stack</InputLabel>
        <Field
          as={Select}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          name="software_stack"
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          onBlur={formikProps.handleBlur}
          error={formikProps.touched.software_stack && Boolean(formikProps.errors.software_stack)}
          helperText={formikProps.touched.software_stack && formikProps.errors.software_stack}
          variant="outlined"
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
           {selected.map((value) => {
      const softwareStack = softwareStacks.find(spec => spec.id === value);
      return (
        <Chip key={value} onDelete={handleDelete(value)} label={softwareStack ? softwareStack.name : ''} />
      );
    })}
            </Box>
          )}
          onChange={(event) => {
            formikProps.setFieldValue('software_stack', event.target.value);
          }}
          
          
          value={formikProps.values.software_stack || []}
        >
          {softwareStacks.map(software_stack => (
            <MenuItem
              key={software_stack.id}
              value={software_stack.id}
              style={getStyles( software_stack,personSoftware_stack, theme)}
            >
              {software_stack.name}
            </MenuItem>
          ))}

        </Field>

      </FormControl>
  
      </div>
      </CardContent>


                    <Divider />
                 <br/>

                 {currentDate < new Date(endTime) ? (
                 
    <ColorButton variant="contained">
       <Typography variant="h2" color="Green">
        <Timer2 endTime={endTime} update={update} />
        </Typography>
    </ColorButton>

  ) : (
    <div
      style={{
        bottom: "-20px",
        left: "0",
        padding: "15px"
      }}
    >
      <Typography>
        Registration ended
      </Typography>
    </div>
  )}
           


              </Card>
            </Grid>
          </Grid>
          {error && (
            <Box mt={3}>
              <FormHelperText error>{error}</FormHelperText>
            </Box>
          )}
          <Box mt={2}>

            <ColorButton variant="contained"
                          type="submit"
                          disabled={formikProps.isSubmitting}>
                                <Typography  component="p" variant="h8"> 
                                  Register today
                                  </Typography><Icon sx={{ fontWeight: "bold" }}>
                                    arrow_forward
                                  </Icon>{" "}
                                </ColorButton>
          </Box>
        </form>
      )}
    </Formik>
    </Container>
  );
};

export default HackathonCreateForm;
      
