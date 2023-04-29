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