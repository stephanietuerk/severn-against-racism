import { Letter } from "./../models/letter.model";

export const letters: Letter[] = [
  {
    id: "lagarde001",
    author: {
      last: "Lagarde",
      first: "Doug",
    },
    addressee: {
      last: "Severn Community",
    },
    date: new Date("2020-06-03"),
    content: {
      type: "img",
      location: "lagarde001.png",
    },
  },
  {
    id: "tuerk001",
    author: {
      last: "Tuerk",
      first: "Stephanie",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-04"),
    content: {
      type: "md",
      location: "tuerk001.md",
    },
    response: ["lagarde002"],
  },
  {
    id: "lagarde002",
    author: {
      last: "Lagarde",
      first: "Doug",
    },
    addressee: {
      last: "Tuerk",
      first: "Stephanie",
    },
    date: new Date("2020-06-07"),
    content: {
      type: "md",
      location: "lagarde002.md",
    },
  },
  {
    id: "tuerk001",
    author: {
      last: "Tuerk",
      first: "Stephanie",
    },
    addressee: {
      last: "Belo",
      first: "Charles",
    },
    date: new Date("2020-06-07"),
    content: {
      type: "md",
      location: "tuerk002.md",
    },
    response: ["belo001"],
  },
  {
    id: "belo001",
    author: {
      last: "Belo",
      first: "Charles",
    },
    addressee: {
      last: "Tuerk",
      first: "Stephanie",
    },
    date: new Date("2020-06-08"),
    content: {
      type: "md",
      location: "belo001.md",
    },
  },
  {
    id: "severn001",
    author: {
      last: "Severn School",
    },
    addressee: {
      last: "Alumni",
    },
    date: new Date("2020-06-08"),
    content: {
      type: "img",
      location: "severn001.png",
    },
  },
  {
    id: "sobel001",
    author: {
      last: "Sobel",
      first: "Dave",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-08"),
    content: {
      type: "md",
      location: "sobel001.md",
    },
  },
  {
    id: "sobel002",
    author: {
      last: "Sobel",
      first: "Dave",
    },
    addressee: {
      last: "Grimes",
      first: "Carrie",
    },
    date: new Date("2020-06-08"),
    content: {
      type: "md",
      location: "sobel002.md",
    },
  },
  {
    id: "prouty001",
    author: {
      last: "Prouty",
      first: "Allison",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-09"),
    content: {
      type: "md",
      location: "prouty001.md",
    },
  },
  {
    id: "wu001",
    author: {
      last: "Wu",
      first: "Joyce",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-08"),
    content: {
      type: "md",
      location: "wu001.md",
    },
  },
  {
    id: "thompson001.md",
    author: {
      last: "Thompson",
      first: "Dominique",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-05"),
    content: {
      type: "md",
      location: "thompson001.md",
    },
  },
  {
    id: "lagarde002.md",
    author: {
      last: "Lagarde",
      first: "Doug",
    },
    addressee: {
      last: "Alumni, Parents, Faculty, and Staff",
    },
    date: new Date("2020-06-12"),
    content: {
      type: "img",
      location: "lagarde002.png",
    },
  },
  {
    id: "byrd001.md",
    author: {
      last: "Byrd",
      first: "Charlotte",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-11"),
    content: {
      type: "md",
      location: "byrd001.md",
    },
  },
  {
    id: "crawford001.md",
    author: {
      last: "Crawford",
      first: "EJ",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-07"),
    content: {
      type: "md",
      location: "crawford001.md",
    },
  },
  {
    id: "scsar001.md",
    author: {
      last: "SCSAR",
    },
    addressee: {
      last: "Severn School",
    },
    date: new Date("2020-06-05"),
    content: {
      type: "img",
      location: "scsar001.png",
    },
    link:
      "https://medium.com/@wessims/severn-school-alumni-affirmation-that-black-lives-matter-an-open-letter-7be0481bb25f",
    notes: [
      // tslint:disable-next-line:max-line-length
      "Although this letter was published through Wes Sims's Medium account, it was written collectively by a core group from Severn Community Standing Against Racism",
    ],
  },
  {
    id: "scsar002.md",
    author: {
      last: "SCSAR",
    },
    addressee: {
      last: "Severn School",
    },
    date: new Date("2020-06-09"),
    content: {
      type: "img",
      location: "scsar002.png",
    },
    link:
      "https://medium.com/@wessims/severn-leadership-do-better-25253624f83e",
    notes: [
      // tslint:disable-next-line:max-line-length
      "Although the following letter was published through Wes Sims's Medium account, it was written collectively by a core group from Severn Community Standing Against Racism",
    ],
  },
  {
    id: "ned001",
    author: {
      last: "Ned",
      first: "Brionna",
    },
    addressee: {
      last: "SCSAR / Wes Sims",
    },
    date: new Date("2020-06-08"),
    content: {
      type: "img",
      location: "ned001.png",
    },
    // tslint:disable-next-line:max-line-length
    link:
      "https://medium.com/@ned.brionna/hi-wes-i-am-an-04-grad-and-wanted-to-share-that-i-had-the-opportunity-to-go-back-to-severn-last-fa53ebd369f0",
    notes: [
      // tslint:disable-next-line:max-line-length
      "The following was left as a comment on Severn Community Standing Against Racism's Medium post from June 5, 2020",
    ],
  },
  {
    id: "sims001",
    author: {
      last: "Sims",
      first: "Josh",
    },
    addressee: {
      last: "Severn School",
    },
    date: new Date("2020-06-19"),
    content: {
      type: "md",
      location: "sims001.md",
    },
  },
  {
    id: "severn002",
    author: {
      last: "Severn School",
    },
    addressee: {
      last: "Severn Community",
    },
    date: new Date("2020-07-06"),
    content: {
      type: "img",
      location: "severn002.png",
    },
  },
  {
    id: "skinner001",
    author: {
      last: "Skinner",
      first: "Morgan",
    },
    addressee: {
      last: "Severn Community",
    },
    date: new Date("2020-07-07"),
    content: {
      type: "img",
      location: "skinner001.png",
    },
  },
  {
    id: "weiner001",
    author: {
      last: "Weiner",
      first: "Michelle",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-08"),
    content: {
      type: "md",
      location: "weiner001.md",
    },
  },
  {
    id: "maconi001",
    author: {
      last: "Maconi",
      first: "Caryn",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-08"),
    content: {
      type: "md",
      location: "maconi001.md",
    },
  },
  {
    id: "limon001",
    author: {
      last: "Limon",
      first: "Evalyse",
    },
    addressee: {
      last: "Severn Board of Trustees",
    },
    date: new Date("2020-07-06"),
    content: {
      type: "md",
      location: "limon001.md",
    },
  },
  {
    id: "limon001",
    author: {
      last: "Limon",
      first: "Evalyse",
    },
    addressee: {
      last: "Grimes",
      first: "Carrie",
    },
    date: new Date("2020-06-05"),
    content: {
      type: "md",
      location: "limon002.md",
    },
  },
  {
    id: "wu002",
    author: {
      last: "Wu",
      first: "Joyce",
    },
    addressee: {
      last: "Severn Board of Trustees",
    },
    date: new Date("2020-07-08"),
    content: {
      type: "md",
      location: "wu002.md",
    },
  },
  {
    id: "farrell001",
    author: {
      last: "Farrell",
      first: "Drew",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-07"),
    content: {
      type: "md",
      location: "farrell001.md",
    },
  },
  {
    id: "fornshell001",
    author: {
      last: "Fornshell",
      first: "Caroline Cassidy",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-10"),
    content: {
      type: "md",
      location: "fornshell001.md",
    },
  },
  {
    id: "wang001",
    author: {
      last: "Wang et al.",
      first: "Aidan",
    },
    addressee: {
      last: "Severn School",
    },
    date: new Date("2020-07-11"),
    content: {
      type: "pdf",
      location: "SevernSchoolPolicyMemo.pdf",
    },
    notes: [
      "This memo was written in conjunction with Jane Huang, Yasmeen Meek, Katie Dubinski, Jorryn Avery, and Courtney Freeman, all class of 2018",
    ],
  },
  {
    id: "chacos001",
    author: {
      last: "Chacos",
      first: "Coley",
    },
    addressee: {
      last: "Lagarde",
      first: "Doug",
    },
    date: new Date("2020-06-09"),
    content: {
      type: "md",
      location: "chacos001.md",
    },
  },
  {
    id: "scsar003",
    author: {
      last: "SCSAR"
    },
    addressee: {
      last: "Severn BoT and Doug Lagarde"
    },
    date: new Date("2020-07-16"),
    content: {
      type: "md",
      location: "scsar003.md",
    },
  },
];
