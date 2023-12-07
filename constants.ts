const ID = "id";
const USERID = "userId";
const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const EMAIL = "email";
const CONFIRM_EMAIL = "confirmEmail";
const RECIPIENT = "recipient";
const RECIPIENT_ID = "id";
const RECIPIENT_FIRST_NAME = "firstName";
const RECIPIENT_LAST_NAME = "lastName";
const RECIPIENT_EMAIL = "email";
const RECIPIENT_PHONE = "phone";

export const initialBookingState = {
  [ID]: "",
  [USERID]:"1234",
  [FIRST_NAME]: "",
  [LAST_NAME]: "",
  [EMAIL]: "",
  [CONFIRM_EMAIL]: "",
  [RECIPIENT]: [] as {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }[],
};

export const recipientState = {
  [RECIPIENT_ID]: "",
  [RECIPIENT_FIRST_NAME]: "",
  [RECIPIENT_LAST_NAME]: "",
  [RECIPIENT_EMAIL]: "",
  [RECIPIENT_PHONE]: "",
};

export const CUSTOMMENU = [
  {
    id: 1,
    menu: "Home",
  },
  {
    id: 2,
    menu: "Events",
  },
  {
    id: 3,
    menu: "Organiser",
  },
  {
    id: 4,
    menu: "Contact",
  },
  {
    id: 5,
    menu: "Blog",
  },
  {
    id: 6,
    menu: "Login",
  },
];
export const eventsDropDown = [
  {
    id: 1,
    menu: "All",
  },
  {
    id: 2,
    menu: "Featured",
  },
  {
    id: 3,
    menu: "Festival",
  },
  {
    id: 4,
    menu: "Party",
  },
];

export type EventType = {
  id: number;
  eventThunbnil: string;
  eventType: string;
  dateMonth: string;
  dateDay: string;
  startingFrom: number;
  eventdesc: string;
  longdesc: string;
  lagos: string;
};

export const logoData = [
  { id: 1, src: "/assets/images/uba.jpg", alt: "Company 1" },
  { id: 2, src: "/assets/images/alat.jpg", alt: "Company 2" },
  { id: 3, src: "/assets/images/9pay.jpg", alt: "Company 3" },
  { id: 4, src: "assets/images/uber.jpg", alt: "Company 4" },
  { id: 5, src: "/assets/images/addidas.jpg", alt: "Company 5" },
  { id: 6, src: "/assets/images/coca.jpg", alt: "Company 6" },
  { id: 7, src: "/assets/images/visa.jpg", alt: "Company 7" },
];

export const eventData = [
  {
    id: 1,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Party",
    dateMonth: "DEC",
    dateDay: "08",
    startingFrom: 3000,
    eventdesc: "Happiest One Winterfest 2021",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "7 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 2,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "DEC",
    dateDay: "06",
    startingFrom: 15000,
    eventdesc: "Happiest One Winterfest 2022",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "8 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 3,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "Sep",
    dateDay: "14",
    startingFrom: 5600,
    eventdesc: "Happiest One Winterfest 2023",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "9 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 4,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Featured",
    dateMonth: "Sep",
    dateDay: "20",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 5,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Party",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 1000,
    eventdesc: "Happiest One Winterfest 2025",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 6,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "05",
    startingFrom: 3000,
    eventdesc: "Happiest One Winterfest 2021",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "7 Pm",
  },
  {
    id: 7,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Party",
    dateMonth: "JUN",
    dateDay: "06",
    startingFrom: 15000,
    eventdesc: "Happiest One Winterfest 2022",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "8 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 8,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "Sep",
    dateDay: "12",
    startingFrom: 5600,
    eventdesc: "Happiest One Winterfest 2023",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "9 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 9,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Party",
    dateMonth: "Sep",
    dateDay: "15",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 10,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 1000,
    eventdesc: "Happiest One Winterfest 2025",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 11,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Featured",
    dateMonth: "JUN",
    dateDay: "05",
    startingFrom: 3000,
    eventdesc: "Happiest One Winterfest 2021",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "7 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 12,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "06",
    startingFrom: 15000,
    eventdesc: "Happiest One Winterfest 2022",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "8 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 13,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Featured",
    dateMonth: "JUN",
    dateDay: "07",
    startingFrom: 5600,
    eventdesc: "Happiest One Winterfest 2023",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "9 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 14,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 15,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 1000,
    eventdesc: "Happiest One Winterfest 2025",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 16,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Featured",
    dateMonth: "JUN",
    dateDay: "05",
    startingFrom: 3000,
    eventdesc: "Happiest One Winterfest 2021",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "7 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 17,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "06",
    startingFrom: 15000,
    eventdesc: "Happiest One Winterfest 2022",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "8 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 18,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "07",
    startingFrom: 5600,
    eventdesc: "Happiest One Winterfest 2023",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "9 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 20,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 21,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 22,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 23,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 24,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 25,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 26,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 27,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 28,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 29,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "06",
    startingFrom: 15000,
    eventdesc: "Happiest One Winterfest 2022",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "8 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 30,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "07",
    startingFrom: 5600,
    eventdesc: "Happiest One Winterfest 2023",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "9 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 31,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 32,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 33,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 34,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 35,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 36,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 37,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 38,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 39,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  
  {
    id: 40,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Party",
    dateMonth: "DEC",
    dateDay: "08",
    startingFrom: 3000,
    eventdesc: "Happiest One Winterfest 2021",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "7 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 41,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "DEC",
    dateDay: "06",
    startingFrom: 15000,
    eventdesc: "Happiest One Winterfest 2022",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "8 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 42,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "Sep",
    dateDay: "14",
    startingFrom: 5600,
    eventdesc: "Happiest One Winterfest 2023",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "9 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 43,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Featured",
    dateMonth: "Sep",
    dateDay: "20",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 44,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Party",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 1000,
    eventdesc: "Happiest One Winterfest 2025",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 6,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "05",
    startingFrom: 3000,
    eventdesc: "Happiest One Winterfest 2021",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "7 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 45,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Party",
    dateMonth: "JUN",
    dateDay: "06",
    startingFrom: 15000,
    eventdesc: "Happiest One Winterfest 2022",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "8 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 46,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "Sep",
    dateDay: "12",
    startingFrom: 5600,
    eventdesc: "Happiest One Winterfest 2023",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "9 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 47,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Party",
    dateMonth: "Sep",
    dateDay: "15",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 48,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 1000,
    eventdesc: "Happiest One Winterfest 2025",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 49,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Featured",
    dateMonth: "JUN",
    dateDay: "05",
    startingFrom: 3000,
    eventdesc: "Happiest One Winterfest 2021",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "7 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 50,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "06",
    startingFrom: 15000,
    eventdesc: "Happiest One Winterfest 2022",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "8 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 51,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Featured",
    dateMonth: "JUN",
    dateDay: "07",
    startingFrom: 5600,
    eventdesc: "Happiest One Winterfest 2023",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "9 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 52,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 53,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 1000,
    eventdesc: "Happiest One Winterfest 2025",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 54,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Featured",
    dateMonth: "JUN",
    dateDay: "05",
    startingFrom: 3000,
    eventdesc: "Happiest One Winterfest 2021",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "7 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 55,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "06",
    startingFrom: 15000,
    eventdesc: "Happiest One Winterfest 2022",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "8 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 56,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "07",
    startingFrom: 5600,
    eventdesc: "Happiest One Winterfest 2023",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "9 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 57,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 58,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 59,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 60,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 61,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 62,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 63,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 64,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 65,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 66,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "06",
    startingFrom: 15000,
    eventdesc: "Happiest One Winterfest 2022",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "8 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 67,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "07",
    startingFrom: 5600,
    eventdesc: "Happiest One Winterfest 2023",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "9 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 68,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 69,
    eventThunbnil: "/assets/images/event2.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },
  {
    id: 70,
    eventThunbnil: "/assets/images/event1.png",
    eventType: "Festival",
    dateMonth: "JUN",
    dateDay: "10",
    startingFrom: 8000,
    eventdesc: "Happiest One Winterfest 2024",
    longdesc:
      "Coachable and passionate about collaborating with a team when working on projects",
    lagos: "10 Pm",
    location:"No 2, Beside Tower Bridge, Dorma House, Lekki, Lagos "
  },  

];

export default eventData;

export const TestimonialData = [
  {
    id: 1,
    personProfile: "/assets/images/p1.png",
    rating: 4,
    Desc: "Being able to instantly see the results that my future employer would see! it definitely gave me a sigh of relief.",
    name: "Richoil Global",
    position: "HR Manager",
  },
  {
    id: 2,
    personProfile: "/assets/images/p2.png",
    rating: 3,
    Desc: "I was impressed with how easy it was to navigate through their website and how simple they make it for customers to find what they are looking for ",
    name: "CItiBank Int",
    position: "Managing Director",
  },
  {
    id: 3,
    personProfile: "/assets/images/p3.png",
    rating: 5,
    Desc: "Dossr is transparent, mobile optimized workflow, eConsent, and Comments for Context deliver a 95% satisfaction rating ",
    name: "Delight Customers",
    position: "Social Communication",
  },
  {
    id: 4,
    personProfile: "/assets/images/p1.png",
    rating: 3,
    Desc: "Dossr is transparent, mobile optimized workflow, eConsent, and Comments for Context deliver a 95% satisfaction rating ",
    name: "Delight Customers",
    position: "Social Communication",
  },
];
