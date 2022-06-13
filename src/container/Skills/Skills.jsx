/* eslint-disable semi */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';

const dataSkill = [
  {
    name: 'HTML',
    icon: images.html,
    bgColor: '#FEF2F2',

  },
  {
    name: 'CSS',
    icon: images.css,
    bgColor: '#D3DCE2',
  },
  {
    name: 'JavaScript',
    icon: images.javascript,
    bgColor: '#CAC7A9',
  },
  {
    name: 'React',
    icon: images.react,
    bgColor: '#E1F0EF',
  },
  {
    name: 'Git',
    icon: images.git,
    bgColor: '#C1B2AF',
  },
  {
    name: 'Typescript',
    icon: images.typescript,
    bgColor: '#FCF3F4',
  },
  {
    name: 'Redux',
    icon: images.redux,
    bgColor: '#F0E8FC',
  },
  {
    name: 'Sass',
    icon: images.sass,
    bgColor: '#F0DAE4',
  },
  {
    name: 'GraphQl',
    icon: images.graphql,
    bgColor: '#BAC6C5',
  },
  {
    name: 'Material UI',
    icon: images.mu5,
    bgColor: '#FCF3F4',
  },
]

const dataExp = [
  {
    year: '2021',
    works: [
      {
        company: 'Conceptcube',
        name: 'Frontend Developer',
        desc: 'Conceptcube is a web development company that specializes in building websites and web applications. We build websites that are user-friendly, responsive, and easy to use. We use the latest technologies to build websites that are fast, secure, and easy to use.',
      },
    ],
  },
// eslint-disable-next-line semi
]

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperiences(dataExp);
    setSkills(dataSkill);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
