/*eslint no-console:0*/
let locales = {
  en: require('./en'),
  es: require('./es')
};

let current = locales.es;
let _lan = 'es';

module.exports = {

  setLocale: lan => {
    //console.log(`i18n: setting Language [${lan}]`);
    if (!locales.hasOwnProperty(lan)){

      if (lan.indexOf('-') > -1 || lan.indexOf('_') > -1){
        let parsed = lan.replace('-', '$').replace('_', '$');
        let [newLan] = parsed.split('$');

        if (newLan && locales.hasOwnProperty(newLan)){
          lan = newLan;
        }
        else {
          console.warn(`i18n: Could not resolve Language from [${lan}] or language [${newLan}] not found`);
          return;
        }
      }
      else {
        console.warn(`i18n: Language [${lan}] not found`);
        return;
      }
    }

    _lan = lan;
    current = locales[lan];
  },

  locales: () => current,

  __: function() {
    let key = arguments[0];
    let params = Array.prototype.slice.call(arguments).slice(1);

    let phrase = current[key];

    if (!phrase){
      if (locales.en.hasOwnProperty(key)){
        phrase = locales.en[key];
        console.warn(`i18n: Key [${key}] not found for language [${_lan}]`);
      }
      else {
        phrase = key;
        console.error(`i18n: Key [${key}] not found`);
      }
    }

    return params.reduce((str, p, i) => str.replace(`{${i+1}}`, p), phrase);
  }
};
