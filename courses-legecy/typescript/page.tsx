import { CourseHero } from '@/components/shared';
import { typeScriptProminent } from '@/data/prominent';
import React from 'react';

const TypeScript = () => {
  return (
    <>
      <CourseHero
        heading="টাইপস্ক্রিপ্ট"
        desc="TypeScript JavaScript-এর ওপর ভিত্তি করে তৈরি হওয়া একটি সুপারসেট, যা  টাইপ সেফটি ও লার্জ  স্কেল অ্যাপ ডেভেলপমেন্টের জন্য উপযোগী। 🚀"
        prominentList={typeScriptProminent}
      />
    </>
  );
};

export default TypeScript;
