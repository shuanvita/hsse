import type { HeroBlockProps } from '~/widgets/home/hero'
import { typograf } from '~/shared/lib/typograf'

export const hero: HeroBlockProps = {
  title: typograf('Высшая школа программной инженерии'),
  description: typograf('Готовим квалифицированных инженеров-разработчиков (middle) с учётом физтеховских традиций'),
  image: '/images/home/hero-orbit.webp',
  imageDecor: '/images/home/hero-orbit-line.webp',
  programs: [
    {
      badge: typograf('Базовое высшее образование'),
      title: typograf('Программа «Разработка программно-информационных систем»'),
      link: {
        to: '/bachelor/software-systems',
      }
    },
    {
      badge: typograf('Базовое высшее образование'),
      title: typograf('Программа «Разработка систем кибербезопасности и реинжиниринг киберфизических систем»'),
      link: {
        to: '/bachelor/cybersecurity',
      }
    },
    {
      badge: typograf('Специализированное высшее образование'),
      title: typograf('Программа «Распределённые системы и искусственный интеллект»'),
      link: {
        to: '/master',
      }
    }
  ]
}
