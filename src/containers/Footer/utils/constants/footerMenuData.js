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
      },
      {
        id: 'exchanges',
        label: 'Exchanges',
        href: '/exchanges',
        disabled: true,
      },
      {
        id: 'compare',
        label: 'Compare',
        href: '/compare',
        disabled: true,
      },
      {
        id: 'converter',
        label: 'Converter',
        href: '/converter',
        disabled: true,
      },
      {
        id: 'repository',
        label: 'Repository',
        href: 'https://github.com/madeinchema/crypto-market-cap',
        disabled: false,
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
      },
      {
        id: 'coingecko-api',
        label: 'CoinGecko API',
        href: 'https://www.coingecko.com/',
        disabled: false,
      },
      {
        id: 'ant-design',
        label: 'Ant Design',
        href: 'https://ant.design/',
        disabled: false,
      },
      {
        id: 'react-virtualized',
        label: 'React Virtualized',
        href: 'https://github.com/bvaughn/react-virtualized',
        disabled: false,
      },
      {
        id: 'axios',
        label: 'Axios',
        href: 'https://github.com/axios/axios',
        disabled: false,
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
      },
      {
        id: 'finance-tracker',
        label: 'Finance Tracker',
        href: '#',
        disabled: false,
      },
      {
        id: 'pomodoro-app',
        label: 'Pomodoro App',
        href: 'https://github.com/madeinchema/pomodoro',
        disabled: false,
      },
      {
        id: 'simple-calculator',
        label: 'Simple Calculator',
        href: 'https://github.com/madeinchema/simple-calculator',
        disabled: false,
      },
      {
        id: 'personal-portfolio',
        label: 'Personal Portfolio',
        href: '#',
        disabled: false,
      },
    ],
  },
};

export default footerMenuData;
