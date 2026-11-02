import type { TheHeaderProps } from "./TheHeader.types";

export const TheHeaderData: TheHeaderProps = {
  logos: [
    {
      link: '/',
      image: 'hsse-logo'
    },
    {
      link: 'https://mipt.ru',
      image: 'mipt-logo'
    }
  ],
  nav: [
    {
      link: '',
      text: 'Программы'
    },
    {
      link: '',
      text: 'О ВШПИ'
    },
    {
      link: '',
      text: 'Программа обучения'
    },
    {
      link: '',
      text: 'Команда и менторы'
    },
    {
      link: '',
      text: 'Как поступить'
    },
    {
      link: '',
      text: 'Контакты'
    }
  ],
  cta: {
    link: '',
    text: 'Задать вопрос',
  }
}