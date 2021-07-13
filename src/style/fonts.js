import { createGlobalStyle } from 'styled-components';

const LocalFonts = createGlobalStyle`
   @font-face {
    font-family: ${props => props.fontName};
    src: url('${props => props.url}');
    src: url('${props => props.url}?#iefix') format('embedded-opentype'),
    url('${props => props.url}${props =>
  props.fontWeight}.woff') format('woff'),
    url('${props => props.url}${props => props.fontWeight}.ttf') format('type');
    font-weight: ${props => props.weight};
    font-style: ${props => props.style && 'normal'};
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
