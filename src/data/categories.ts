import {
  jsProminent,
  linuxProminent,
  reactProminent,
  sqlProminent,
  typeScriptProminent
} from './prominent';
import { gitProminent } from './prominent/git.prominents';

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
  },

  {
    id: 'reactjs',
    heading: 'রিয়েক্ট',
    description:
      'React.js হলো একটি JavaScript লাইব্রেরি, যা কম্পোনেন্ট-বেইজড UI তৈরি করতে ব্যবহৃত হয়। এর ভার্চুয়াল DOM ও ওয়ান-ওয়ে ডাটা ফ্লো পারফরম্যান্স বাড়ায়। এটি SPA ও SSR সাপোর্ট করে এবং React Native দিয়ে মোবাইল অ্যাপ তৈরি করা যায়। 🚀 ',
    contents: reactProminent
  },
  {
    id: 'sql',
    heading: 'SQL',
    description:
      'SQL (Structured Query Language) হলো রিলেশনাল ডাটাবেস ম্যানেজমেন্ট সিস্টেম (RDBMS) পরিচালনার জন্য ব্যবহৃত ভাষা। এটি MySQL, PostgreSQL, MS SQL, Oracle, SQLite ইত্যাদি ডাটাবেস সাপোর্ট করে। ACID কমপ্লায়েন্স, ট্রাঞ্জ্যাকশন সাপোর্ট, এবং ডাটা কনসিস্টেন্সি নিশ্চিত করার জন্য এটি এন্টারপ্রাইজ-লেভেলে জনপ্রিয়। ',
    contents: sqlProminent
  },
  {
    id: 'linux',
    heading: 'লিনাক্স',
    description: `Linux একটি ওপেন সোর্স, ইউনিক্স-ভিত্তিক অপারেটিং সিস্টেম, যা স্ট্যাবিলিটি, নিরাপত্তা এবং কাস্টমাইজেশনের জন্য জনপ্রিয়। এটি লিনুস টরভাল্ডস ১৯৯১ সালে তৈরি করেন এবং পরবর্তীতে বিশ্বব্যাপী ডেভেলপারদের সমর্থনে উন্নত হয়। Linux কার্নেলকে কেন্দ্র করে বিভিন্ন ডিস্ট্রিবিউশন (যেমন Ubuntu, Fedora, Debian, Arch) তৈরি করা হয়েছে, যা ব্যক্তিগত ব্যবহার থেকে শুরু করে সার্ভার, ক্লাউড, এম্বেডেড সিস্টেম এবং সুপারকম্পিউটার পর্যন্ত বিস্তৃতভাবে ব্যবহৃত হয়। শক্তিশালী কমান্ড লাইন ইন্টারফেস (CLI), মাল্টি-ইউজার ও মাল্টি-টাস্কিং সাপোর্ট, উচ্চ নিরাপত্তা এবং কম রিসোর্স ব্যবহারের ক্ষমতা Linux-এর অন্যতম বৈশিষ্ট্য। এটি বিনামূল্যে ব্যবহারের জন্য উন্মুক্ত এবং সফটওয়্যার ডেভেলপার, সিস্টেম অ্যাডমিনিস্ট্রেটর, এবং সাইবার সিকিউরিটি বিশেষজ্ঞদের কাছে বিশেষভাবে জনপ্রিয়। `,
    contents: linuxProminent
  },
  {
    id: 'git',
    heading: 'গিট ও গিটহাব ',
    description: `গিট (Git) হলো একটি ভার্সন কন্ট্রোল সিস্টেম, যা কোড ট্র্যাক ও ম্যানেজ করতে সাহায্য করে, আর গিটহাব (GitHub) হলো একটি ক্লাউড-ভিত্তিক প্ল্যাটফর্ম, যেখানে গিট রিপোজিটরি হোস্ট ও শেয়ার করা যায়। `,
    contents: gitProminent
  }
];

export const categoriesById = new Map(
  categories.map(category => [category.id, category])
);
