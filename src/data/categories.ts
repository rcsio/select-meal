import { Category } from "@/types";
import { nanoid } from "nanoid";

const categories: Category[] = [
  {
    id: nanoid(10),
    name: "Hot Appetizer",
    slug: "hot-appetizer",
  },
  {
    id: nanoid(10),
    name: "Cold Appetizer",
    slug: "cold-appetizer",
  },
  {
    id: nanoid(10),
    name: "Soup",
    slug: "soup",
  },
  {
    id: nanoid(10),
    name: "Sandwich",
    slug: "sandwich",
  },
  {
    id: nanoid(10),
    name: "Lorem Text",
    slug: "lorem-text",
  },
  {
    id: nanoid(10),
    name: "Seafood",
    slug: "seafood",
  },
];

export default categories;
