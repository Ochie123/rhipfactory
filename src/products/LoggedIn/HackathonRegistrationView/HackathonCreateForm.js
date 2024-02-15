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

import FilesDropzone from "../../../components/Files-Dropzone";
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
  const [justEnded, setJustEnded] = useState(false)
  const currentDate = new Date()
   const update = () => {
     setJustEnded(true)
   }
 
   const [checked, setChecked] = React.useState(true);
 
   // Set end time for the timer (replace with your desired end time)
   const endTime = new Date("2024-04-14T00:00:00");
 

  const softwareStacks = softwareStacksData.results;

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
          values.uploaded_images.forEach((file, index) => {
            formData.append(`uploaded_images[${index}]`, file);
          });
          // Append other form fields to the formData object
          const softwareSpecifications = values.software_stack || []; // Make sure it's an array

          softwareSpecifications.forEach(stack => {
            formData.append('software_stack', stack);
          });
   
      
          formData.append('name', values.name);
   
         // formData.append('car_specification', values.car_specification);
          formData.append('years', values.years);
          formData.append('start_time', values.start_time);
  
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
                            formikProps.touched.email &&
                              formikProps.errors.email
                          )}
                          fullWidth
                          helperText={
                            formikProps.touched.email &&
                            formikProps.errors.email
                              ? formikProps.errors.email
                              : " Your LinkedIn Profile."
                          }
                          label="Your LinkedIn Profile"
                          name="email"
                          onBlur={formikProps.handleBlur}
                          onChange={formikProps.handleChange}
                          value={formikProps.values.email}
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
                  </Box>
              <Grid container spacing={3}>

                      <Grid item xs={12} md={6}>
                        
                      <Box mt={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formikProps.values.isTaxable}
                            onChange={formikProps.handleChange}
                            value={formikProps.values.isTaxable}
                            name="isTaxable"
                          />
                        }
                        label="Ease of accessing healthcare"
                      />
                    </Box>
                    <Box mt={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formikProps.values.includesTaxes}
                            onChange={formikProps.handleChange}
                            value={formikProps.values.includesTaxes}
                            name="includesTaxes"
                          />
                        }
                        label="Cost of healthcare services"
                      />
                    </Box>
                      </Grid>
                    </Grid>
                    <Box mt={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formikProps.values.includesTaxes}
                            onChange={formikProps.handleChange}
                            value={formikProps.values.includesTaxes}
                            name="includesTaxes"
                          />
                        }
                        label="Quality of healthcare outcomes"
                      />
                    </Box>
  
                    <Box mt={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formikProps.values.includesTaxes}
                            onChange={formikProps.handleChange}
                            value={formikProps.values.includesTaxes}
                            name="includesTaxes"
                          />
                        }
                        label="Better information & data on health services"
                      />
                    </Box>
                    <Box mt={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formikProps.values.includesTaxes}
                            onChange={formikProps.handleChange}
                            value={formikProps.values.includesTaxes}
                            name="includesTaxes"
                          />
                        }
                        label="Shortage of healthcare workers."
                      />
                    </Box>
  
                    <Box mt={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formikProps.values.includesTaxes}
                            onChange={formikProps.handleChange}
                            value={formikProps.values.includesTaxes}
                            name="includesTaxes"
                          />
                        }
                        label="Fake & substandard drugs."
                      />
                    </Box>
                    <Box mt={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formikProps.values.includesTaxes}
                            onChange={formikProps.handleChange}
                            value={formikProps.values.includesTaxes}
                            name="includesTaxes"
                          />
                        }
                        label="Poor customer experience in health facilities."
                      />
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
              <Box mt={3}>
      <Card>
        <CardHeader title="Upload any supporting documents" />
        <Divider />
        <CardContent>
          <FilesDropzone onFilesChange={(files) => formikProps.setFieldValue('uploaded_images', files)} />

          {formikProps.touched.uploaded_images &&
            formikProps.errors.uploaded_images && (
              <Box mt={2}>
                <FormHelperText error>
                  {formikProps.errors.uploaded_images}
                </FormHelperText>
              </Box>
            )}
        </CardContent>
      </Card>
    </Box>
              
              <Box mt={3}>
                <Card>
                  <CardHeader title="Years of Experience" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(
                            formikProps.touched.years &&
                              formikProps.errors.years
                          )}
                          fullWidth
                          helperText={
                            formikProps.touched.years &&
                            formikProps.errors.years
                              ? formikProps.errors.years
                              : " Indicate your total years of experience."
                          }
                          label="Years"
                          name="years"
                          type="number"
                          onBlur={formikProps.handleBlur}
                          onChange={formikProps.handleChange}
                          value={formikProps.values.years}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>

            </Grid>
            <Grid item xs={12} lg={4}>
              <Card>
                <CardHeader title="Organize" />
                <Divider />
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
      
