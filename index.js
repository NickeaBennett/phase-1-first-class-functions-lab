// Code your solution in this file!
const returnFirstTwoDrivers = function([...first2Drivers]) {
    return first2Drivers.slice(0,2);
}
const returnLastTwoDrivers = function([...last2Drivers]) {
    return last2Drivers.slice(2,4);
}
const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers,
]
const createFareMultiplier = function(fare){
    return function(){
        return fare **2;
    }
}
const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier*2;
}
const fareTripler = function(createFareMultiplier){
    return createFareMultiplier*3;
}

//Must complete ASAP!
const selectDifferentDrivers = (arrayOfDrivers, selectingDrivers) => (arrayOfDrivers, selectingDrivers);
    
