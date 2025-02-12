import { jsProminent, typeScriptProminent } from './prominent';

export const categories = [
  {
    id: 'javascript',
    heading: 'জাভাস্ক্রিপ্ট',
    description:
      'JavaScript, যা EcmaScript নামেও পরিচিত, একটি প্রোগ্রামিং ভাষা। এটি একটি সিঙ্গেল-থ্রেডেড, ডায়নামিক, উইকলি টাইপড, প্রোটোটাইপ-ভিত্তিক, এবং মাল্টি-প্যারাডাইম ভাষা, যার ডায়নামিক টাইপিং রয়েছে।',
    contents: jsProminent
  },
  {
    id: 'typescript',
    heading: 'টাইপস্ক্রিপ্ট',
    description:
      'TypeScript JavaScript-এর ওপর ভিত্তি করে তৈরি হওয়া একটি সুপারসেট, যা  টাইপ সেফটি ও লার্জ  স্কেল অ্যাপ ডেভেলপমেন্টের জন্য উপযোগী। 🚀',
    contents: typeScriptProminent
  }
];

export const categoriesById = new Map(
  categories.map(category => [category.id, category])
);
