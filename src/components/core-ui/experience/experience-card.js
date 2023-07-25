import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import expImgBlack from '../../../assets/svg/experience/expImgBlack.svg';
import expImgWhite from '../../../assets/svg/experience/expImgWhite.svg';
import { ThemeContext } from '../../../contexts/theme-context';
import './experience.css';

function ExperienceCard({id, company, jobtitle, startYear, endYear, description}) {
    const { theme } = useContext(ThemeContext);

    console.log(description,id,company);
    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.quaternary,
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary}}>{company}</h5><br></br>
                    {/* <h5 style={{color: theme.tertiary}}>{description}</h5> */}
                    <ul style={{color: theme.tertiary}}>
                        <li>Leading backend development in Java for the core product team.</li>
                        <li>Building complex APIs and microservices using Spring Boot and Spring Cloud.</li>
                        <li>Designing, building, and maintaining Java-based applications and websites.</li>
                        <li>Managing Java-based API development for clients and end-to-end deployment on AWS.</li>
                        <li>Managing Git and establishing version control practices across the organization, while maintaining up-to-date code documentation.</li>
                    </ul>
                
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard;
