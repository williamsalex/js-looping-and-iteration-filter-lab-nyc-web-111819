function findMatching(drivers, string){
    return drivers.filter(function(driver){
        return driver.toUpperCase() === string.toUpperCase()
    })
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver){
        return driver.slice(0,string.length) === string
    })
}

function matchName(drivers, string){
    return drivers.filter(function(driver){
        return driver.name === string
    })
}