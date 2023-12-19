const ID = "id";
const USERID = "userId";
const EVENTID = "eventId";
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
const NEWS_UPDATE = "newsUpdate";
const EVENT_UPDATE = "eventUpdate";

export const initialBookingState = {
  [ID]: "",
  [USERID]: "1234",
  [EVENTID]: "",
  [FIRST_NAME]: "",
  [LAST_NAME]: "",
  [EMAIL]: "",
  [CONFIRM_EMAIL]: "",
  [NEWS_UPDATE]: false,
  [EVENT_UPDATE]: false,
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
export const intialUserDetails = {
  username: "",
  email: "",
  password: "",
  role: "Public",
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

export const DashboardMenu = [
  {
    id: 1,
    menu: "Dashboard",
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
    menu: "My Bookings",
  },
  {
    id: 5,
    menu: "Organisers",
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

export const HeaderDropDown = [
  {
    id: 1,
    iconPath: "/assets/images/profile.svg",
    menu: "Profile",
  },
  {
    id: 2,
    iconPath: "/assets/images/logout.svg",
    menu: "Logout",
  },
];
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
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
