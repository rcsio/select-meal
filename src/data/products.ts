import { Product } from "@/types";
import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";

const products: Product[] = [
  {
    category: "hot-appetizer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Cheese Samosa",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "hot-appetizer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Falafel Plate",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "hot-appetizer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Chicken Liver",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "cold-appetizer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Hummus Plate",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "cold-appetizer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Muttabal Plate",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "cold-appetizer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Yogurt",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "soup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Lentil Soup",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "soup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Vegetables Soup",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "sandwich",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Kebab Meat",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "sandwich",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Meat Tikka",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "sandwich",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Chicken Fajita",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "sandwich",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Falafel Sandwich",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "lorem-text",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Lorem ipsum",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "lorem-text",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Dolor Sit",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "seafood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Sharee",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
  {
    category: "seafood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magnam nam repudiandae. Delectus, id illo laudantium maiores quaerat saepe velit voluptates. Aspernatur cum eaque eos in iusto quaerat qui quo!",
    id: nanoid(10),
    images: [
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
      'https://source.unsplash.com/random/?food',
    ],
    name: "Seabream",
    rating: faker.number.float({ min: 4.5, max: 5, fractionDigits: 1 }),
    price: faker.number.int({ min: 10, max: 99 }),
  },
];

export default products;
