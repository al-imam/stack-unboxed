import JavaScriptIcon from '@/assets/icons/JavaScript.svg';
import linuxIcon from '@/assets/icons/Linux.svg';
import PostgreSQLIcon from '@/assets/icons/PostgreSQL-Dark.svg';
import ReactIcon from '@/assets/icons/React-Dark.svg';
import TypeScriptIcon from '@/assets/icons/TypeScript.svg';

export const courseList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
    style: 'bg-foreground',
    link: '/javascript'
  },
  {
    name: 'TypeScript',
    icon: TypeScriptIcon,
    style: 'bg-brand-nuxt-green',
    link: '/typescript'
  },
  {
    name: 'React JS',
    icon: ReactIcon,
    style: 'bg-brand-nuxt-green',
    link: '/reactjs'
  },
  {
    name: 'SQL',
    icon: PostgreSQLIcon,
    style: 'bg-brand-nuxt-green',
    link: '/sql'
  },
  {
    name: 'Linux',
    icon: linuxIcon,
    style: 'bg-brand-nuxt-green',
    link: '/linux'
  }
];
