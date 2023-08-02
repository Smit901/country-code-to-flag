const twemoji = require('twemoji');

const countryCodeToFlag = (emojiCode) => {
  const container = document.createElement('div');
  container.innerHTML = twemoji.parse(emojiCode, {
    folder: 'svg',
    ext: '.svg',
  });

  return container.innerHTML;
};

module.exports = countryCodeToFlag;