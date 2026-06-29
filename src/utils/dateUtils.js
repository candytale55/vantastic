// Utilidades de fechas para textos que deben mantenerse actualizados con el paso del tiempo.

/**
 * Gets current year
 * Example use: copyright year
 */

export const getCurrentYear = () => {
    return new Date().getFullYear();
};


export const getYearsSince = (startYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
}
