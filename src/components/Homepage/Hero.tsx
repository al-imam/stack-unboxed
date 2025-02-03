import { courseList } from '@/data';
import { anekBangla, hindSiliguri, mina, sriracha } from '@/fonts';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]"
        style={{
          maskImage:
            'radial-gradient(circle at center, transparent 0%, black 100%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, transparent 0%, black 100%)'
        }}
      />

      <div className="container relative mx-auto px-4 py-32 text-center">
        <div className="mb-4 inline-block">
          <div
            className={`rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary`}
          >
            👷 under maintenance
          </div>
        </div>

        <div>
          <h1
            className={`mb-4 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-2 pb-2 text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl`}
          >
            <span className={`${sriracha.className}`}>Programming</span>
            <br />
            <span className={` ${anekBangla.className}`}>
              শিখুন নিজের মাতৃভাষায়
            </span>
          </h1>
          <h2
            className={`mx-auto mb-6 max-w-2xl text-lg text-gray-400 ${hindSiliguri.className}`}
          >
            বাংলায় প্রোগ্রামিং শেখার জন্য সহজ ও সহজবোধ্য ব্লগ, টিউটোরিয়াল, এবং
            বিস্তারিত ডকুমেন্টেশন । প্রোগ্রামিং শেখার জন্য বাংলায় সবচেয়ে বড়
            রিসোর্স ।
          </h2>
        </div>

        {/*  running course   */}
        <div className="space-y-4">
          <div className="mx-auto max-w-3xl space-y-3">
            <p className={`text-lg text-gray-400 ${mina.className}`}>
              রানিং লিখিত কোর্সসমূহ:
            </p>

            <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
              {courseList.slice(0, 2).map(course => {
                return (
                  <Link
                    key={course.name}
                    href={{ pathname: course.link }}
                    className="flex items-center justify-center gap-x-2 rounded-lg bg-foreground px-8 py-2.5 font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    <Image
                      src={course.icon}
                      alt={course.name}
                      className="size-6"
                      width={40}
                      height={40}
                    />
                    {course.name}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* coming soon  */}
          <div className="mx-auto max-w-3xl space-y-3">
            <p className={`text-lg text-gray-400 ${mina.className}`}>
              শিঘ্রই আসবে
            </p>

            <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
              {courseList.slice(2).map(course => {
                return (
                  <Link
                    key={course.name}
                    href={{ pathname: course.link }}
                    className="flex items-center justify-center gap-x-2 rounded-lg bg-foreground px-8 py-2.5 font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    <Image
                      src={course.icon}
                      alt={course.name}
                      className="size-6"
                      width={40}
                      height={40}
                    />
                    {course.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full bg-gradient-to-t from-white dark:from-background" />
    </div>
  );
}
