import moment from "moment";
import "moment/locale/ru";

/**
 * Конвертор даты
 * @param {Object} params - объект параметров
 * @param {String} params.date - дата для конвертации
 * @param {String} params.formatString - формат для конвертации
 * @param {String} params.originalFormatString - оригинальный формат, в котором пердставлена дата
 * @param {String} params.locale - локаль
 *
 * @example
 *      convertDate({
 *			date: '12.05.18',
 *			formatString: 'DD MMM YYYY, dd',
 *			locale: 'ru'
 *		}); // 12 мая 2018, сб
 *
 * @returns {string}
 */
function convertDate(params) {
    const {
        date,
        formatString = "YYYY-MM-DDHH:mmZ",
        originalFormatString = "YYY-MM-DDHH:mmZ",
        locale = "ru",
    } = params;

    const formattedDate = moment(date, originalFormatString, locale).locale(
        locale
    );

    return formattedDate.isValid() ? formattedDate.format(formatString) : "";
}

/**
 * Добавить к дате произвольный промежуток времени. Возвращает дату в изначальном формате
 * @param {Object} params - объект параметров
 * @param {String} params.date - дата для сложения
 * @param {String} params.amount - количество, которое нужно прибавить
 * @param {String} params.typeOfAmount - тип времени, которое нужно прибавить (https://momentjs.com/docs/#/manipulating/add/)
 * @param {String} params.originalFormatString - оригинальный формат, в котором пердставлена дата
 *
 * @example
 *      addToDate({
 *          date: "2020-05-15",
 *          originalFormatString: "YYY-MM-DD",
 *          amount: "5",
 *          typeOfAmount: "d",
 *		}); // 2020-05-20
 *
 * @returns {string}
 */
function addToDate(params) {
    const {
        date,
        originalFormatString = "YYY-MM-DDHH:mmZ",
        amount = 0,
        typeOfAmount = "ms",
    } = params;

    const formattedDate = moment(date, originalFormatString).add(
        amount,
        typeOfAmount
    );

    return formattedDate.isValid()
        ? formattedDate.format(originalFormatString)
        : "";
}

/**
 * Конвертирует промежуток времени в новый формат
 * @param params
 * @param params.duration - промежуток времени
 * @param params.originTypeOfDuration - типа данных промежутка времени (https://momentjs.com/docs/#/manipulating/add/),
 * @param params.formatString - формат для конвертации
 * @param params.locale - локаль
 *
 * @example
 *      convertTimeDuration({
 *          duration: "500",
 *          originTypeOfDuration: "m",
 *          formatString: "HHч mmм",
 *      }) // 8ч 20м
 *
 * @returns {string}
 */
function convertTimeDuration(params) {
    const {
        duration,
        originTypeOfDuration = "ms",
        formatString = "YYY-MM-DDHH:mmZ",
        locale = "ru",
    } = params;

    const formattedDuration = moment
        .utc(moment.duration(duration, originTypeOfDuration).asMilliseconds())
        .locale(locale);

    return formattedDuration.isValid()
        ? formattedDuration.format(formatString)
        : "";
}

/**
 * Возвращает склонение слова относительно числа
 * @param {Number} n - число
 * @param {Array} endings - массив склонений
 *
 * @example
 *      getNounEnding(3, ['арбуз', 'арбуза', 'арбузов']); // 3 арбуза
 *
 * @returns {String}
 */
function getNounEnding(n, endings = []) {
    const cases = [2, 0, 1, 1, 1, 2];
    const number = Math.abs(n);

    return endings[
        number % 100 > 4 && number % 100 < 20
            ? 2
            : cases[number % 10 < 5 ? number % 10 : 5]
    ];
}

/**
 * Конвертация цены для локали
 * @param amount
 * @param locale
 * @param maximumFractionDigits
 *
 * @example
 *    convertToLocalPrice(1200.45); // 12 000,45
 *
 * @returns {any}
 */
function convertToLocalPrice(
    amount = 0,
    locale = "RU",
    maximumFractionDigits = 0
) {
    const n = Number(amount);

    return typeof n === "number"
        ? n.toLocaleString(locale, {
              maximumFractionDigits,
          })
        : 0;
}

/**
 * Генерация уникального ID
 * @param length
 * @returns {string}
 */
function getUniqueId(length = 10) {
    let dt = new Date().getTime();

    return "x".repeat(length).replace(/[x]/g, function () {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return r.toString(16);
    });
}

export {
    convertToLocalPrice,
    convertDate,
    convertTimeDuration,
    addToDate,
    getUniqueId,
    getNounEnding,
};
