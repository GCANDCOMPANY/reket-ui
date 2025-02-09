import { colors } from './src/constants';

const makePxToRem = (num) => ({
  ...Array.from(Array(num + 1)).reduce((acc, cur, i) => {
    return {
      ...acc,
      [i]: `${(i / 16).toFixed(3)}rem`,
    };
  }, {}),
});

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#000',
      secondary: '#252525',
      white: colors.white,
      black: colors.black,
      transparent: 'transparent',
      dark: colors.dark,
      gray: colors.gray,
      red: colors.red,
      pink: colors.pink,
      grape: colors.grape,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      cyan: colors.cyan,
      teal: colors.teal,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      orange: colors.orange,
    },
    fontFamily: {
      pretendard: ['Pretendard'],
    },
    extend: {
      borderWidth: makePxToRem(10), // px 단위로 작성하면 rem 단위로 바꿔주는 기능
      fontSize: makePxToRem(64), // text-16 이런식으로 쓰면 rem 단위로 바꿔서 적용됨 -> font-size: 1rem/* 16px */;
      lineHeight: {
        100: '100%',
        120: '120%',
        140: '140%',
        150: '150%',
        160: '160%',
        165: '165%',
        180: '180%',
      },
      dropShadow: {
        bottom: '0 5px 2.5px rgba(0, 0, 0, 0.15)',
      },
      spacing: makePxToRem(200),
      minWidth: makePxToRem(375),
      maxWidth: makePxToRem(375),
      minHeight: makePxToRem(375),
      maxHeight: makePxToRem(375),
      borderRadius: makePxToRem(10),
    },
    keyframes: {
      'fadein-down': {
        from: {
          transform: 'translateY(-48px);',
          opacity: 0,
        },
        to: {
          transform: 'translateY(0);',
          opacity: 1,
        },
      },
      fadein: {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
      fadeout: {
        from: {
          opacity: 1,
        },
        to: {
          opacity: 0,
        },
      },
      spin: {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
    },
    animation: {
      'fadein-down': 'fadein-down 0.3s',
      fadein: 'fadein 0.2s',
      fadeout: 'fadeout 0.3s',
      spin: 'spin 1s linear infinite',
    },
  },
  plugins: [
    // tailwind plugin 여기다가 이런식으로 붙이면 됨
    require('@tailwindcss/aspect-ratio'),
    ({ addUtilities }) => {
      // @apply '' : {} 형태로 tailwind 문법을 쓸 수 있고, Object 형태의 css style 문법을 써도 됩니다. (혼용 가능)
      // 하지만 tailwind 문법을 쓰면 intellisense 에서 가독성이 매우 떨어지므로 가능하면 css style 을 더 우선적으로 작성
      // utility 는 어디든지 다 갖다 붙일 수 있는 스타일을 작성하고 component 는 말그대로 캘린더, 모달, 드롭다운 이런 컴포넌트 단위로 적용할때 작성
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
        /* Chrome, Safari and Opera */
        '.no-scrollbar-x::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar-x': {
          'overflow-x': 'auto',
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
        '.no-scrollbar-y::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar-y': {
          'overflow-y': 'auto',
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
        '.media-sm-md': {
          // media-query 좀더 편하게 작성하려고 만든거. 화면 너비 0px~md 까지의 스타일 적용
          '@apply md:hidden': {},
        },
        '.media-sm-lg': {
          // 화면 너비 0px~lg 까지의 스타일 적용
          '@apply lg:hidden': {},
        },
        '.media-md': {
          // 화면 너비 md~ 스타일 적용
          '@apply hidden md:block': {},
        },
        '.media-md-lg': {
          // 화면 너비 md~lg 스타일 적용
          '@apply hidden md:block lg:hidden': {},
        },
        '.media-lg': {
          // 화면 너비 lg 스타일 적용
          '@apply hidden lg:block': {},
        },
      });
    },
  ],
};
