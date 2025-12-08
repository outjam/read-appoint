import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
  {
      type: 'category',
      label: 'Основное',
      collapsible: true,
      collapsed: false,
      items: [
        'Основное/Терминология'
      ]
    },
    {
      type: 'category',
      label: 'Система',
      items: [
        {
          type: 'category',
          label: 'Валидация',
          items: [
            'Система/Валидация/Валидация регистрационных данных',
            'Система/Валидация/Валидация SMS',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Админ-панель',
      items: [
        'Админ-панель/Модерация/Модерация заявки',
        'Админ-панель/Модерация/Модерация бренда'
      ]
    },
    {
      type: 'category',
      label: 'Личный кабинет',
      items: [
        {
          type: 'category',
          label: 'Прелогин-зона',
          link: {
            type: 'doc',
            id: 'Личный кабинет/Прелогин-зона/Прелогин-зона'
          },
          items: [
            'Личный кабинет/Прелогин-зона/Онбординг YCLIENTS',
            'Личный кабинет/Прелогин-зона/Заявка 1С:Фитнес',
            {
              type: 'category',
              label: 'Регистрация',
              link: {
                type: 'doc',
                id: 'Личный кабинет/Прелогин-зона/Регистрация/Регистрация', 
              },
              items: [
                'Личный кабинет/Прелогин-зона/Регистрация/Заявка на подключение',
                'Личный кабинет/Прелогин-зона/Регистрация/Заявка на подключение YCLIENTS',
                'Личный кабинет/Прелогин-зона/Регистрация/Создание бренда',
              ],
            },
            'Личный кабинет/Прелогин-зона/Авторизация',
          ],
        },
      ],
    }
  ],
};

export default sidebars;
