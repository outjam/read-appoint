import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
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
                {
                  type: 'category',
                  label: 'Заявка на подключение',
                  link: {
                    type: 'doc',
                    id: 'Личный кабинет/Прелогин-зона/Регистрация/Заявка на подключение',
                  },
                  items: [
                    'Личный кабинет/Прелогин-зона/Регистрация/Сценарии заявки на подключение',
                  ]
                },
                'Личный кабинет/Прелогин-зона/Регистрация/Модерация бренда',
              ],
            },
            'Личный кабинет/Прелогин-зона/Авторизация',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Система',
      items: [
        {
          type: 'category',
          label: 'Валидация',
          items: [
            'Система/Валидация/Валидация регистрационных данных'
          ]
        }
      ]
    }
  ],
};

export default sidebars;
