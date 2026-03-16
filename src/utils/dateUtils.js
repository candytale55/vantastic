
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