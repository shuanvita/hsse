import type { AdvantagesBlockProps } from '~/widgets/advantages'
import type { HeroBlockProps } from '~/widgets/home/hero'
import type { VideoBlockProps } from '~/widgets/home/video'
import type { ProjectPracticeProps } from '~/widgets/home/project-practice'
import type { PartnersProps } from '~/widgets/partners'
import { typograf } from '~/shared/lib/typograf'

export const partners: PartnersProps = {
  title: typograf('Партнёры'),
  description: typograf('В разработке учебных программ и обучении студентов ВШПИ принимают участие ведущие специалисты ИТ-компаний.'),
  partners: [
    { name: 'Яндекс', logo: 'yandex', width: 121 },
    { name: 'Сбер', logo: 'sber', width: 118 },
    { name: '1С', logo: '1c', width: 80 },
    { name: 'Positive Technologies', logo: 'positive-technologies', width: 290, wide: true, href: 'https://ptsecurity.com' },
    { name: 'MWS', logo: 'mws', width: 53 },
  ],
}

export const projectPractice: ProjectPracticeProps = {
  steps: [
    { label: typograf('1 семестр'), height: 12.5 },
    { label: typograf('2 семестр'), height: 43.75 },
    { label: typograf('3 семестр'), height: 75 },
    { label: typograf('4 семестр'), height: 100, content: typograf('Проектная работа') },
  ],
  descriptions: [
    typograf('Проектная практика в ВШПИ начинается с первого семестра и количество часов постоянно увеличивается, что позволяет студентам работать над реальными проектами от бизнеса.'),
    typograf('Такой подход обеспечивает не только высокую степень готовности к профессиональной деятельности, но и конкурентное преимущество на рынке труда.'),
  ],
}

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

export const video: VideoBlockProps = {
  src: '/videos/hsse.mp4',
  poster: '/images/home/video-poster.webp',
  mobilePoster: '/images/home/video-poster-mobile.webp',
  label: typograf('Смотреть видео о Высшей школе программной инженерии'),
}

export const advantages: AdvantagesBlockProps = {
  items: [
    {
      title: typograf('Современная траектория обучения'),
      description: typograf('Наша учебная программа основана на прочных фундаментальных знаниях, что обеспечивает будущим специалистам необходимую базу для успешной карьеры в условиях быстро меняющихся технологий, а использование современного стека технологий позволяет нашим студентам быть готовыми к вызовам индустрии уже сегодня.'),
    },
    {
      title: typograf('Интеграция в профессиональную среду'),
      description: typograf('Уникальные курсы от экспертов в офисах компаний-партнёров погружают в профессию с первых дней учёбы. Студенты занимаются проектной деятельностью под наставничеством менторов — практиков начиная с первого семестра обучения. Все проекты основаны на реальных задачах и продуктах из индустрии.'),
    },
    {
      title: typograf('Фундамент будущей карьеры'),
      description: typograf('Студенты получают приглашения на стажировки от индустриальных партнёров ВШПИ. Проектная работа на протяжении всего обучения и стажировки позволяют собрать будущему специалисту готовое портфолио, которое продемонстрирует работодателю знания, навыки и опыт в области программирования.'),
    },
  ],
}
