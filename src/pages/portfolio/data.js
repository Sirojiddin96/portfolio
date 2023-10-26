import React from 'react';
import { MdLanguage, MdYoutubeSearchedFor } from 'react-icons/md';
import { AiFillApi } from 'react-icons/ai';
import { FaSalesforce } from 'react-icons/fa';

export const projects = [
  {
    id: '00',
    name: 'Language Learning App',
    url: '',
    description:
      'It is a mobile app which is dedicated to make learning path and habit easier for learners in languages: English, Korean, Uzbek. We provide prepared and planned tasks for users which they do not have to think about. We sort and make list of words according to level. This app includes: Dictionay, Stories, Level Tests and many  more. I can not describe project in 100% in detail since it has not been completed yet, would love to share in person',
    tech: 'React Native, Node.JS, MongoDB, AWS',
    type: 'private',
    icon: <MdLanguage size={100} color="skyblue" />,
  },
  {
    id: '01',
    name: 'Admin Dashboard',
    url: 'It is Web project written in Vue.JS for front-end. I am in charge of creating whole architecture of this project. Project works for managing data which comes from big Data.',
    description: '',
    tech: 'Vue.JS',
    type: 'Private',
    icon: <AiFillApi size={100} color="yellow" />,
  },
  {
    id: '02',
    name: 'Golfzon Retail Market',
    url: '',
    description:
      'It is Web and WebApp project which is used for selling and buying golf related goods. You can buy and sell. I was in front-end Vue.JS developer.',
    color: 'yellow',
    type: 'private',
    tech: 'Vue.JS',
    icon: <MdLanguage size={100} color="yellow" />,
  },
  {
    id: '03',
    name: 'Simple Search Engine',
    url: '',
    description:
      'Creating simple search engine using youtube API for long time ago while practicing React. You can search and see results on screen, simple api practice app.',
    color: 'yellow',
    tech: 'React.JS',
    type: 'open',
    icon: <MdYoutubeSearchedFor size={100} color="yellow" />,
  },
  {
    id: '04',
    name: 'Sale App',
    url: '',
    description: 'Written in React Native Expo.',
    color: 'yellow',
    type: 'open',
    tech: 'React Native Expo',
    icon: <FaSalesforce size={100} color="yellow" />,
  },
  {
    id: '05',
    name: 'WellFamily',
    url: '',
    description:
      'WellFamily house is the  mobile app project which is used between family members to communicate and control the health of old people in the Family. App contains: Family section, Health Check-up test, Health Exercises, Memory test game, Creating and communicating with Members, and many more. I would like to describe it in detail in Person',
    color: 'yellow',
    type: 'private',
    tech: 'React Native Expo',
    icon: <AiFillApi size={100} color="yellow" />,
  },
];
