/*
 * Copyright 2025 Sathish S
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Virus Detection',
    description: 'A comprehensive, modern URL, file, domain, IP and Github Virus detector.',
    tags: ['HTML', 'CSS', 'JS', 'REACT', 'BACKEND', 'MYSQL'],
    githubLink: 'https://github.com/Sashsathish/Spark-Shield',
    liveLink: 'https://spark-shield.vercel.app/',
    type: 'Web App',
    thumbnail:
      'https://raw.githubusercontent.com/Sashsathish/Spark-Shield/main/frontend/src/loader.png',
    carouselImages: [
      'https://raw.githubusercontent.com/Sashsathish/Spark-Shield/main/frontend/src/file scanner.png',
      'https://raw.githubusercontent.com/Sashsathish/Spark-Shield/main/frontend/src/ip scanner.png',
      'https://raw.githubusercontent.com/Sashsathish/Spark-Shield/main/frontend/src/link scanner.png',
      'https://raw.githubusercontent.com/Sashsathish/Spark-Shield/main/frontend/src/github scanner.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 2,
    title: 'Advanced Learning Platform',
    description:
      'Elegant UI with advance learning technique like language selection, learning modes like (Beginner, Intermediate, Advance) and with Youtube Videos suggestion based on the preferred language.',
    tags: ['HTML', 'CSS', 'JS', 'REACT', 'BACKEND', 'MYSQL'],
    githubLink: '',
    liveLink: 'https://sparklearn.vercel.app',
    type: 'Web App',
    thumbnail: '/learn loader.png',
    carouselImages: ['/learn main page.png', '/learn language.png'],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 3,
    title: 'Music App',
    description:
      'A Music app featuring intuitive browsing and comprehensive music details with seamless user experience with no AD.',
    tags: ['HTML', 'CSS', 'JS', 'REACT', 'BACKEND', 'MYSQL', 'Postman'],
    githubLink: '',
    liveLink: 'https://sparkvibes.vercel.app/',
    type: 'Web App',
    thumbnail: '/music home.png',
    carouselImages: ['/music playlist.png'],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];
