import mainSrc from './images/resumePhoto.jpg';

const size = {
  mobile: '720px',
  tablet: '1024px',
  laptop: '1280px',
};

const config = {
  mainColor: 'black',
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,

  mainSrc: mainSrc,
};

export default config;
