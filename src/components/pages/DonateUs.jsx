import React from 'react'
import Header from './../Header';
import Footer from './../Footer';
import { styled } from '@mui/material/styles';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


  const Accordion = styled((props) => (
      <MuiAccordion elevation={0} square {...props} />
    ))(({ theme }) => ({
      borderBottom: `1px solid ${theme.palette.divider}`,
      '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      '&::before': {
        display: 'none',
      },
  }));

  const AccordionSummary = styled((props) => (
      <MuiAccordionSummary
        expandIcon={<ArrowRightSharpIcon sx={{ fontSize: '2rem', color: 'gray' }} />}
        {...props}
      />
    ))(({ theme }) => ({
      backgroundColor: '',
      color: 'black',
      flexDirection: 'row-reverse',
      [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
        {
          transform: 'rotate(90deg)',
        },
      [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
      },
      ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
      }),
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
      padding: theme.spacing(2),
      marginLeft: theme.spacing(3),
      borderTop: '',
    }));

  export default function DonateUs() {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    return (
      <>
        <Header />
        <div className='text-gray-400 mx-18'>
          <p>Remote to Reached: Help Us Bridge the Gap for Bandarban’s Healthcare Access</p><br/>
          <p>Bandarban a hilly district with dense tropical forests, lies within the Chittagong Hill Tracts (CHT), and stands as a district marked by its isolation and inaccessibility. This remoteness poses a significant challenge, depriving many of its communities of getting essential services and opportunities, mostly healthcare and education (low literacy rate of 63.4%). Nearly half of the population (49.9%) live in poverty, Bandarban is country’s one of the most impoverished areas. Furthermore, it has one of the highest infant mortality rates in the country, as well as inadequate sanitation standards, which contribute to the prevalence of diarrheal diseases in the community. This health problem is aggravated by the region’s status as the most malaria-endemic district, with 76% of the nation’s cases documented in 2022 alone.</p><br/>
          <p>The beautiful district, with its varied ethnic groups, distinct languages, traditions, and geographical features, presents significant challenges in reaching and assisting these populations, particularly in rural areas that remain underserved despite development efforts mostly concentrated on urban areas.</p><br/>
          <p>Officials frequently fail to count or register the communities due to lack of proper village list along with its boundary information and it acts as a barrier to reach out to the remote and under-privileged community. Health care centers in some cases remain located a long way from remote villages and influence peoples’s health care seeking behavior. Therefore, inaccessibility and health care seeking behavior are two factors that make remote communities difficult to monitor and respond to for diseases. Without accurate maps and data, diseases like malaria are challenging and, hindering last mile efforts to eliminate malaria. </p><br/>
          <p>Working on these specific issues will aid in enhancing the quality of life of the people by preventing malaria and strengthening the malaria elimination program and the eradication of malaria will be beneficial to both the people and the country.</p><br/>
          <p>GroupMappers, MORU’s initiative, has been actively engaged in the village mapping project since 2017. Employing a participatory GIS approach, this initiative involves local engagement to validate and record maps. These maps serve as crucial records in the government’s malaria program, offering visibility and recognition to these communities. By addressing these challenges, GroupMappers aims to enhance the quality of life for these communities, prevent diseases like malaria, and bolster the malaria elimination program, thereby benefiting both the people and the country.</p>
        </div>
      
      <div className='grid grid-cols-2 gap-3'>
        <div className="w-full">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography component="span" style={{fontWeight: "bold", color: "gray"}}>Village Mapping</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{color: "gray"}}>
                    With 2700 villages in Bandarban, your assistance in mapping these communities will empower us to understand their geospatial dynamics, a crucial step in improving their overall welfare.
                  </Typography>
                </AccordionDetails>
                </Accordion>
                  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography component="span" style={{fontWeight: "bold", color: "gray"}}>Village Population</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography style={{color: "gray"}}>
                      Understanding demographics, healthcare access, and infrastructure needs within each village is pivotal to tailor effective, targeted solutions.
                    </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography component="span"  style={{fontWeight: "bold", color: "gray"}}>Health Facility Mapping</Typography>
                      </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{color: "gray"}}>
                          By charting the locations of health facilities, we can enhance the accessibility of essential medical services across the district.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                      <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography component="span"  style={{fontWeight: "bold", color: "gray"}}>Transportation and Hydrographic Network</Typography>
                      </AccordionSummary>
                          <AccordionDetails>
                         <Typography style={{color: "gray"}}>
                            Mapping roadways, boat routes, rivers, and water bodies enables us to optimize access scenarios and explore alternative transportation methods, ensuring efficient and diverse means of movement for these communities.
                          </Typography>
                </AccordionDetails>
              </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                      <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography component="span"  style={{fontWeight: "bold", color: "gray"}}>Creating Travel Scenario</Typography>
                      </AccordionSummary>
                          <AccordionDetails>
                         <Typography style={{color: "gray"}}>
                            Travel scenarios data will be collected that will give us travel times, distances and modes of transport to optimize networks for healthcare and service delivery. This approach enables us to assess any accessibilities including water, healthcare accessibility and determine the quickest routes to reach forest-based communities, nearest health facilities and any other place of services more efficiently.
                          </Typography>
                </AccordionDetails>
              </Accordion>
          </div>
          <p>Our current focus revolves around five crucial aspects where we seek your contribution to assist us</p>
        </div>
        <Footer />
      </>
    )
  }