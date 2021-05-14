const TIME_FRAMES = {
  '1y': {
    daysQty: 365,
    label: '1y',
  },
  '30d': {
    daysQty: 30,
    label: '30d',
  },
  '24hs': {
    daysQty: 1,
    label: '24hs',
  },
};

const TIME_FRAMES_OPTIONS = [
  { label: '24hs', value: '24hs' },
  { label: '30d', value: '30d' },
  { label: '1y', value: '1y' },
];

export { TIME_FRAMES, TIME_FRAMES_OPTIONS };
