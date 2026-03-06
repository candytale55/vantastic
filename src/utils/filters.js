
export function getFilteredVans(vans, typeFilter, favsFilter, favoriteIds) {
    let filteredVans = vans; 

    // Filter by type
    if (typeFilter) {
        filteredVans = filteredVans.filter(van => van.type === typeFilter);
    }

    // Filter by favorites
    if (favsFilter) {
        // We only keep the van if its ID exists in our 'favorites'
        filteredVans = filteredVans.filter(van => favoriteIds.includes(van.id));
    }

    return filteredVans;
    
}