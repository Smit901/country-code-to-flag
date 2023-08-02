const twemoji = require('twemoji');

function countryCodeToFlag(countryCode) {
  if (!countryCode || countryCode.length !== 2) {
    return 'Invalid country code';
  }

  const base = 127397; // Unicode offset for regional indicator symbols A

  // Convert country code to uppercase and calculate the flag emoji
  let flag = '';
  for (let i = 0; i < countryCode.length; i++) {
    const codePoint = countryCode.toUpperCase().charCodeAt(i);
    if (codePoint >= 65 && codePoint <= 90) {
      // If the character is an uppercase letter (A-Z), add the corresponding regional indicator symbol
      flag += String.fromCodePoint(codePoint + base);
    } else {
      // If the character is not a letter, return "Invalid country code"
      return 'Invalid country code';
    }
  }

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(flag, {
          folder: 'svg',
          ext: '.svg',
        }),
      }}
    />
  );
;
}

module.exports = countryCodeToFlag;
