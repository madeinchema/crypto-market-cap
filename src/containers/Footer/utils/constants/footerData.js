const footerMenuData = {
  products: {
    key: 'products',
    label: 'Products',
    data: [
      {
        id: 'cryptocurrencies',
        label: 'Cryptocurrencies',
        href: '/cryptocurrencies',
        disabled: false,
        targetBlank: false,
      },
      {
        id: 'exchanges',
        label: 'Exchanges',
        href: '/exchanges',
        disabled: true,
        targetBlank: false,
      },
      {
        id: 'compare',
        label: 'Compare',
        href: '/compare',
        disabled: true,
        targetBlank: false,
      },
      {
        id: 'converter',
        label: 'Converter',
        href: '/converter',
        disabled: true,
        targetBlank: false,
      },
      {
        id: 'repository',
        label: 'Repository',
        href: 'https://github.com/madeinchema/crypto-market-cap',
        disabled: false,
        targetBlank: true,
      },
    ],
  },
  development: {
    key: 'development',
    label: 'Development',
    data: [
      {
        id: 'react',
        label: 'React',
        href: 'https://reactjs.org/',
        disabled: false,
        targetBlank: true,
      },
      {
        id: 'coingecko-api',
        label: 'CoinGecko API',
        href: 'https://www.coingecko.com/',
        disabled: false,
        targetBlank: true,
      },
      {
        id: 'ant-design',
        label: 'Ant Design',
        href: 'https://ant.design/',
        disabled: false,
        targetBlank: true,
      },
      {
        id: 'react-virtualized',
        label: 'React Virtualized',
        href: 'https://github.com/bvaughn/react-virtualized',
        disabled: false,
        targetBlank: true,
      },
      {
        id: 'axios',
        label: 'Axios',
        href: 'https://github.com/axios/axios',
        disabled: false,
        targetBlank: true,
      },
    ],
  },
  otherProjects: {
    key: 'other-projects',
    label: 'Other projects',
    data: [
      {
        id: 'todolist',
        label: 'Todolist',
        href: 'https://github.com/madeinchema/todo-list',
        disabled: false,
        targetBlank: true,
      },
      {
        id: 'finance-tracker',
        label: 'Finance Tracker',
        href: '#',
        disabled: true,
        targetBlank: true,
      },
      {
        id: 'pomodoro-app',
        label: 'Pomodoro App',
        href: 'https://github.com/madeinchema/pomodoro',
        disabled: false,
        targetBlank: true,
      },
      {
        id: 'simple-calculator',
        label: 'Simple Calculator',
        href: 'https://github.com/madeinchema/simple-calculator',
        disabled: false,
        targetBlank: true,
      },
      {
        id: 'personal-portfolio',
        label: 'Personal Portfolio',
        href: '#',
        disabled: true,
        targetBlank: true,
      },
    ],
  },
};

const footerBottomData = {
  author: {
    id: 'author',
    label: 'Made In Chema',
    href: 'https://github.com/madeinchema',
    disabled: false,
    targetBlank: true,
  },
};

export { footerMenuData, footerBottomData };
