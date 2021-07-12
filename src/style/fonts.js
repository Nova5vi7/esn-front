import { createGlobalStyle } from 'styled-components';

const LocalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/public/fonts/RobotoRegular.ttf') format('truetype'),
    url('/public/fonts/RobotoRegular.otf') format('opentype');
    font-display: block;
  }
`;

const FontLoader = ({ googleFonts }) => {
  const googleFamilies = googleFonts
    // eslint-disable-next-line unicorn/no-array-reduce
    .reduce((accumulator, font) => {
      const accumulatorClone = [...accumulator];
      const family = font.family.replace(/ +/g, '+');
      const weights = (font.weights || []).join(',');

      accumulatorClone.push(family + (weights && `:${weights}`));
      return accumulatorClone;
    }, [])
    .join('|');

  return (
    <>
      <link
        rel={'preload'}
        href={`https://fonts.googleapis.com/css?family=${googleFamilies}`}
        as={'style'}
      />
      <link
        rel={'stylesheet'}
        href={`https://fonts.googleapis.com/css?family=${googleFamilies}`}
      />

      <link
        rel="preload"
        href="/public/fonts/RobotoRegular.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/public/fonts/RobotoRegular.otf"
        as="font"
        crossOrigin="anonymous"
      />
      <LocalFonts />
    </>
  );
};

export default FontLoader;
