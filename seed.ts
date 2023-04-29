import { Prisma, PrismaClient } from "@Prisma/client";

const client = new PrismaClient();

const getbooks = (): Prisma.booksCreateInput[] => [
  {
    book_id: "0001",
    book_name: "Harry potter",
    book_type: "New",
    price: "456",
    price_id: "1234",
    availabe_for: "Sell",
    category: "Fiction",
    publisher: "Scholastic",
    author_name: "Joanne Rowling",
    description:
      "The novels of whom are students at Hogwarts School of Witchcraft and Wizardry. ",
    image: "jpeg",
    ratings: "5",
    language: "English",
    discount: "10%",
    readlist: "Favourite",
  },
];

[
  {
    book_id: "0002",
    book_name: "The Exorcist",
    book_type: "New",
    price: "788",
    price_id: "1235",
    availabe_for: "Rent",
    category: "Horror",
    publisher: "Harper & Row",
    author_name: "William Peter Blatty",
    description:
      " The book details the demonic possession of eleven-year-old Regan MacNeil, the daughter of a famous actress, and the two priests who attempt to exorcise the demon.",
    image: "jpeg",
    ratings: "4.2",
    language: "English",
    discount: "32%",
    readlist: "Reading",
  },
];

[
  {
    book_id: "0003",
    book_name: "Wings of fire",
    book_type: "New",
    price: "982",
    price_id: "1236",
    availabe_for: "Lease",
    category: "Non-Fiction",
    publisher: "A.P.J Abdul Kalam",
    author_name: "A.P.J Abdul Kalam",
    description:
      " It tells the narrative of a young boy from a poor family who rose through the ranks of Indian space research and missile programmes to become the country's president.",
    image: "jpeg",
    ratings: "4.8",
    language: "English",
    discount: "22%",
    readlist: "On hold",
  },
];

[
  {
    book_id: "0004",
    book_name: "All the Light We Cannot See",
    book_type: "Old",
    price: "546",
    price_id: "1237",
    availabe_for: "Sale",
    category: "Fiction",
    publisher: "Simon & Schuster",
    author_name: "Anthony Doerr",
    description:
      "  The story of the blind Marie-Laure, the self-doubting Werner Pfenning, and the scared old Etienne LeBlanc.",
    image: "jpeg",
    ratings: "4.1",
    language: "English",
    discount: "17%",
    readlist: "Plan to read",
  },
];

[
  {
    book_id: "0005",
    book_name: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
    book_type: "New",
    price: "999",
    price_id: "1238",
    availabe_for: "Rent",
    category: "Non-Fiction",
    publisher: "PenguinRandomHouse",
    author_name: "David Grann",
    description:
      "  More than half survived the wreckage only to find themselves stranded on a desolate island.",
    image: "jpeg",
    ratings: "4.3",
    language: "English",
    discount: "45%",
    readlist: "Favourite",
  },
];

const getprice_details = (): Prisma.price_detailsCreateInput[] => [
  {
    p_id: "1234",
    selling_price: "356",
    actual_price: "456",
    discount: "10%",
    Book: "Harry potter",
  },
];

[
  {
    p_id: "1235",
    selling_price: "658",
    actual_price: "788",
    discount: "32%",
    Book: "The Exorcist",
  },
];

[
  {
    p_id: "1236",
    selling_price: "786",
    actual_price: "982",
    discount: "22%",
    Book: "Wings of fire",
  },
];

[
  {
    p_id: "1237",
    selling_price: "398",
    actual_price: "546",
    discount: "22%",
    Book: "All the light we cannot see",
  },
];

[
  {
    p_id: "1238",
    selling_price: "678",
    actual_price: "999",
    discount: "45%",
    Book: "The wager: A tale of shipwreck, mutiny and murder",
  },
];

const getevents = (): Prisma.eventsCreateInput[] => [
  {
    event_id: "0001",
    name: "xyz",
    duration: "2 hours",
    location: "Mysore",
    organiser_details: "xyz",
    organiser_details_id: "001",
  },
];

[
  {
    event_id: "0002",
    name: "Abc",
    duration: "3 hours",
    location: "Bangalore",
    organiser_details: "Abc",
    organiser_details_id: "002",
  },
];

[
  {
    event_id: "0003",
    name: "Efg",
    duration: "6 hours",
    location: "Telengana",
    organiser_details: "Efg",
    organiser_details_id: "003",
  },
];

[
  {
    event_id: "0004",
    name: "SSS",
    duration: "3 hours",
    location: "Darvard",
    organiser_details: "SSS",
    organiser_details_id: "004",
  },
];

[
  {
    event_id: "0005",
    name: "SRR",
    duration: "7 hourss",
    location: "Hydrabad",
    organiser_details: "SRR",
    organiser_details_id: "005",
  },
];

const getevents = (): Prisma.events_org_detailsCreateInput[] => [
  {
    organiser_details_id: "001",
    name: "xyz",
    address: "Mysore",
    ph_no: "9876543213",
    mail_id: "xyz@gmail.com",
    events: "Book Sign",
  },
];

[
  {
    organiser_details_id: "002",
    name: "Abc",
    address: "Bangalore",
    ph_no: "8653628902",
    mail_id: "Abc@gmail.com",
    events: "Book Sign",
  },
];

[
  {
    organiser_details_id: "003",
    name: "Efg",
    address: "Telengana",
    ph_no: "8765727243",
    mail_id: "Efg@gmail.com",
    events: "Book Sign",
  },
];

[
  {
    organiser_details_id: "004",
    name: "SSS",
    address: "Darvard",
    ph_no: "9766388291",
    mail_id: "SSS@gmail.com",
    events: "Book Sign",
  },
];

[
  {
    organiser_details_id: "005",
    name: "SSR",
    address: "Hydrabad",
    ph_no: "9345235323",
    mail_id: "SSR@gmail.com",
    events: "Book Sign",
  },
];

const getorder = (): Prisma.orderCreateInput[] => [
  {
    order_id: "001",
    status: "Shipping",
    order_date: "22/03/2023",
    address: "#23 wuibfe, eubviuriu 560029",
    address_id: "30501",
    payment: "Cash",
    payment_id: "0121",
  },
];

[
  {
    order_id: "002",
    status: "Delivered",
    order_date: "02/03/2023",
    address: "#23 wuibfe, eubviuriu 560029",
    address_id: "30501",
    payment: "Cash",
    payment_id: "0121",
  },
];

[
  {
    order_id: "003",
    status: "Order Confirmed",
    order_date: "30/03/2023",
    address: "#23 wuibfe, eubviuriu 560029",
    address_id: "30501",
    payment: "Upi",
    payment_id: "0121",
  },
];

[
  {
    order_id: "004",
    status: "Shipping",
    order_date: "31/03/2023",
    address: "#23 wuibfe, eubviuriu 560029",
    address_id: "30501",
    payment: "Net banking",
    payment_id: "0121",
  },
];

[
  {
    order_id: "005",
    status: "Returned",
    order_date: "26/04/2023",
    address: "#23 wuibfe, eubviuriu 560029",
    address_id: "30501",
    payment: "refunded",
    payment_id: "0121",
  },
];
