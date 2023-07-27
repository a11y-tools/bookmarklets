/*
*   constants.js
*/

export { getCssClass, getGlobalName, getTitle, getVersion };

var CONSTANTS = {};
Object.defineProperty(CONSTANTS, 'classPrefix',  { value: 'a11yGfdXALm' });
Object.defineProperty(CONSTANTS, 'globalPrefix', { value: 'a11y' });
Object.defineProperty(CONSTANTS, 'title',        { value: 'a11y-tools/bookmarklets' });
Object.defineProperty(CONSTANTS, 'version',      { value: '0.4.0' });

function getCssClass (appName) {
  const prefix = CONSTANTS.classPrefix;

  switch (appName) {
    case 'Forms':       return prefix + '0';
    case 'Headings':    return prefix + '1';
    case 'Images':      return prefix + '2';
    case 'Landmarks':   return prefix + '3';
    case 'Lists':       return prefix + '4';
  }

  return 'unrecognizedName';
}

function getGlobalName (appName) {
  return CONSTANTS.globalPrefix + appName;
}

function getTitle ()   { return CONSTANTS.title }
function getVersion () { return CONSTANTS.version }
