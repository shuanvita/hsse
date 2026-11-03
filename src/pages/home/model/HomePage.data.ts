import type { AdvantagesBlockProps } from '~/widgets/advantages'
import type { HeroBlockProps } from '~/widgets/home/hero'
import type { VideoBlockProps } from '~/widgets/home/video'
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
