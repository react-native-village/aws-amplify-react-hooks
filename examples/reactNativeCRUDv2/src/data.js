import faker from 'faker'

const { image, name, random, company, lorem } = faker

const userData = {
  name: name.findName(),
  uri: image.avatar(),
  star: random.boolean()
}

const cardAbout =
  'For 3 years our company has been engaged in financial technologies in online games, in particular in CS:GO and Dota 2. A significant number of users from all over the world use our platform to quickly and safely exchange, buy or sell their in-game items.'

const cardContacts = {
  location: 'Russia, St. Petersburg, Uprising Square',
  web: 'https://job.cs.money',
  phone: '+7 (499) 899-11-22'
}
const cardInfo = {
  position: 'React-Native Developer, Front-end Developer',
  language: 'Java Script, Python',
  stack: 'React-Native, Apollo, GraphQL, AWS Amplify',
  experience: '5 years',
  salary: 5000
}

const cardResume = {
  title: name.findName(),
  avatar: image.avatar(),
  cost: random.number(),
  rate: random.number()
}

const cardIssue = {
  id: random.uuid(),
  title: 'How to make setState update',
  description: lorem.paragraph(),
  name: name.findName(),
  comments: random.number(),
  uri: image.avatar(),
  rate: random.number()
}

const cardIssueResponce = {
  id: random.uuid(),
  name: name.findName(),
  uri: image.avatar(),
  description: lorem.paragraph(),
  comments: random.number(),
  rate: random.number()
}

const cardIssueResponceSub = {
  id: random.uuid(),
  name: name.findName(),
  description: lorem.paragraph()
}

const cardVacancies = {
  id: random.uuid(),
  title: lorem.text(),
  description: lorem.paragraph(),
  company: company.companyName(),
  cost: random.number()
}

const cardCareer = {
  institution: company.companyName(),
  start: '2018',
  finish: '2019',
  description: lorem.paragraph(),
  link: 'Sertifikat'
}

const cardEducation = {
  institution: company.companyName(),
  start: '2018',
  finish: '2019',
  description: lorem.paragraph(),
  link: 'Sertifikat'
}

export {
  userData,
  cardInfo,
  cardAbout,
  cardContacts,
  cardIssueResponce,
  cardVacancies,
  cardCareer,
  cardEducation,
  cardResume,
  cardIssueResponceSub,
  cardIssue
}
