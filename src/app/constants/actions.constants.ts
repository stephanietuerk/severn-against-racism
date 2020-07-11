import { Action } from "./../models/action.model";

export const actions: Action[] = [
  {
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
    },
  },
  {
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
    },
  },
];
