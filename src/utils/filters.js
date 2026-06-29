// Catalog filters are derived from URL params, so this stays pure and easy to test.
export function getFilteredVans(vans, typeFilter, favsFilter, favoriteIds) {
    let filteredVans = vans; 

    if (typeFilter) {
        filteredVans = filteredVans.filter(van => van.type === typeFilter);
    }

    if (favsFilter) {
        filteredVans = filteredVans.filter(van => favoriteIds.includes(van.id));
    }

    return filteredVans;
    
}
