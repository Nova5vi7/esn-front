import { createGlobalStyle } from 'styled-components';

const LocalFonts = createGlobalStyle`
   @font-face {
    font-family: ${properties => properties.fontName};
    src: url('${properties => properties.url}');
    src: url('${properties =>
      properties.url}?#iefix') format('embedded-opentype'),
    url('${properties => properties.url}${properties =>
  properties.fontWeight}.woff') format('woff'),
    url('${properties => properties.url}${properties =>
  properties.fontWeight}.ttf') format('type');
    font-weight: ${properties => properties.weight};
    font-style: ${properties => properties.style && 'normal'};
    font-display: block;
  }
`;

const getGoogleFonts = (fonts = []) => {
  return fonts
    .reduce((accumulator, font) => {
      const accumulatorClone = [...accumulator];
      const family = font.family.replace(/ +/g, '+');
      const weights = (font.weights || []).join(',');

      accumulatorClone.push(family + (weights && `:${weights}`));
      return accumulatorClone;
    }, [])
    .join('|');
};

const FontLoader = ({
  fonts = [
    {
      family: 'IBM Plex Sans',
      weights: [700, 500, 400]
    }
  ]
}) => {
  const googleFamilies = getGoogleFonts(fonts);
  return (
    <>
      <LocalFonts
        fontName="IBMPlexSans-Regular"
        url="/fonts/plex-sans-regular/"
        fontWeight="IBMPlexSans"
        weight={400}
      />
      <LocalFonts
        fontName="IBMPlexSans-Medium"
        url="/fonts/plex-sans-medium/"
        fontWeight="IBMPlexSans-Medium"
        weight={500}
      />
      <LocalFonts
        fontName="IBMPlexSans-Bold"
        url="/fonts/plex-sans-bold/"
        fontWeight="IBMPlexSans-Bold"
        weight={700}
      />

      <link
        rel={'preload'}
        href={`https://fonts.googleapis.com/css?family=${googleFamilies}`}
        as={'style'}
      />
    </>
  );
};

export default FontLoader;
