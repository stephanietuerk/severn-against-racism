import { Action } from "./../models/action.model";

export const actions: Action[] = [
  {
    id: "capital-20200711",
    date: new Date("2020-07-11"),
    notes: [
      // tslint:disable-next-line:max-line-length
      "The Capital-Gazette published an article on painful experiences of Black students at Severn from the 1990s until present.",
    ],
    link: {
      text: "Read the article on the Capital-Gazette's site",
      path:
        "https://www.capitalgazette.com/education/ac-cn-severn-school-black-students-20200711-boudrkxxbja33photw4lhnmegq-story.html",
    },
    image: {
      text: "View the article",
      path: "assets/letters/png/capital001.png",
      type: "img",
    },
  },
  {
    id: "wang-20200708",
    date: new Date("2020-07-08"),
    notes: [
      // tslint:disable-next-line:max-line-length
      "Severn alum Aidan Wang '18 released an extensive policy memo detailing ways for Severn to support students of color and implement anti-racist learning.",
      "The memo recounts further incidents of racism at the school and recommends actions so that Severn's Mission and Inclusion statements can cease being mere words on paper and become lived experience for students at the school.",
      "Jane Huang, Yasmeen Meek, Katie Dubinski, Jorryn Avery, and Courtney Freeman, all class of 2018, contributed to the document.",
    ],
    image: {
      text: "View the memo",
      path: "assets/letters/pdf/SevernSchoolPolicyMemo.pdf",
      type: "pdf",
    },
  },
  {
    id: "skinner-20200707",
    date: new Date("2020-07-07"),
    notes: [
      // tslint:disable-next-line:max-line-length
      "Morgan Skinner, Class of 2019, wrote about her experience as a student at Severn and her experience as an alumna in recent Zoom calls with Head of School Doug Lagarde",
    ],
    link: {
      text: "Read her letter on Medium",
      path:
        "https://medium.com/@severnagainstracism/a-call-for-change-998b52f6781a",
    },
    image: {
      text: "View her letter",
      path: "assets/letters/png/skinner001.png",
      type: "img",
    },
  },
  {
    id: "severn-20200706",
    date: new Date("2020-07-06"),
    notes: [
      // tslint:disable-next-line:max-line-length
      'Severn School sent a "Community DEI Update," identifying the steps it will take to instill anti-racist policies. Six specific near-term actions are expected to be completed by September 1, 2020.',
    ],
    link: {
      text: "Read our related letter, Severn Leadership: Do Better, on Medium",
      path:
        "https://medium.com/@wessims/severn-leadership-do-better-25253624f83e",
    },
    image: {
      text: "View the school's letter",
      path: "assets/letters/png/severn002.png",
      type: "img",
    },
  },
  {
    id: "scsar-20200716",
    date: new Date("2020-07-16"),
    notes: [
      // tslint:disable-next-line:max-line-length
      'Severn Community Standing Against Racism sent a letter to Severn\'s Board of Trustees and Head of School Doug Lagarde calling for promised policies to be put in place before the start of the \'20-\'21 school year and recommending members of the Severn community to serve on the DEI Committee.',
    ],
    image: {
      text: "View our letter",
      path: "assets/letters/md/scsar003.md",
      type: "md",
    },
  },
  {
    id: "ssbaa-20200716",
    date: new Date("2020-07-16"),
    notes: [
      // tslint:disable-next-line:max-line-length
      'The newly-formed Severn School Black Alumni Association (SSBAA) sent a letter to Severn\'s Board of Trustees and Head of School Doug Lagarde requesting public recognition from the school, inclusion on the proposed DEI Committee, and engagement from the school to facilitate meaningful connection between SSBAA and current Black students.',
    ],
    image: {
      text: "View SSBAA's letter",
      path: "assets/letters/md/ssbaa001.md",
      type: "md",
    },
  },
  {
    id: "capital-20200727",
    date: new Date("2020-07-27"),
    notes: [
      // tslint:disable-next-line:max-line-length
      "The Capital-Gazette published an article in which Black Alumni Athletic Hall of Fame members expressed frustration and concern about the current racial climate at Severn.",
    ],
    link: {
      text: "Read the article on the Capital-Gazette's site",
      path:
        "https://www.capitalgazette.com/education/ac-cn-severn-school-black-students-20200711-boudrkxxbja33photw4lhnmegq-story.html",
    },
    image: {
      text: "View the article",
      path: "assets/letters/png/capital002.png",
      type: "img",
    },
  },
  {
    id: "severn-20200827",
    date: new Date("2020-08-27"),
    notes: [
      // tslint:disable-next-line:max-line-length
      "Severn's new Diversity, Equity, and Inclusion (DEI) Board Committee updated the Severn Community on its activities since its July formation.",
    ],
    image: {
      text: "View the committee's letter",
      path: "assets/letters/png/severn003.png",
      type: "img",
    },
  },
];
