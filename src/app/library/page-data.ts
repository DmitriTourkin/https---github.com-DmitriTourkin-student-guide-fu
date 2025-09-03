import { NAV_ROUTES } from "../constants/navigation";

export interface PageData {
  title: string;
  description: string;
  topics: string[];
}

export const getPageData = (pathname: string): PageData => {
  const pageDataMap: Record<string, PageData> = {
    [NAV_ROUTES.ACADEM]: {
      title: 'Академический отпуск',
      description: 'Как уйти, но обещать вернуться',
      topics: ['Бакалавриат', 'Магистратура', 'Аспирантура']
    },
    [NAV_ROUTES.DISCOUNTS]: {
      title: 'Получение и потеря скидки',
      description: 'Как получить скидку и её не потерять',
      topics: ['Студенческие скидки', 'Ранняя запись', 'Семейные скидки']
    },
    [NAV_ROUTES.BUDGET]: {
      title: 'Переход на бюджет',
      description: 'Информация о бюджетном финансировании и местах',
      topics: ['Квоты', 'Стипендии', 'Гранты']
    },
    [NAV_ROUTES.INTERNATIONAL]: {
      title: 'Включённое обучение',
      description: 'Программы международного и инклюзивного образования',
      topics: ['Обмен programs', 'International students', 'Инклюзивные программы']
    },
    [NAV_ROUTES.ABOUT]: {
      title: 'Об Учебном комитете',
      description: 'Информация о нашем образовательном центре',
      topics: ['История', 'Преподаватели', 'Достижения']
    },
    [NAV_ROUTES.REWARDS]: {
      title: 'Поощрения',
      description: 'Система поощрений и наград для студентов',
      topics: ['Стипендии', 'Гранты', 'Награды']
    },
    [NAV_ROUTES.RISK]: {
      title: 'Дисциплинарное взыскание',
      description: 'Правила и процедуры дисциплинарного характера',
      topics: ['Правила', 'Процедуры', 'Санкции']
    }
  };

  return pageDataMap[pathname] || {
    title: 'Образовательный центр',
    description: 'Качественное образование для всех',
    topics: []
  };
};