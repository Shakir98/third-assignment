// 01.kilometerToMeter
function kilometerToMeter(kilometer) {
    const meter = kilometer * 1000;
    return meter;
}
// const result = kilometerToMeter(10);
// console.log(result);

// 02.budgetCalculator
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;

    const watchCost = watchPrice * watchQuantity;
    const phoneCost = phonePrice * phoneQuantity;
    const laptopCost = laptopPrice * laptopQuantity;

    const totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}
    // const totalBudget = budgetCalculator(3,2,1);
    // console.log(totalBudget);
  
// 03.hotelCost
function hotelCost(days){
    let cost = 0;
    if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        let firstPartCost = 10 * 100;
        let remainingDays = days - 10;
        let secondPartCost = remainingDays * 80;
        cost = firstPartCost + secondPartCost;
    }
    else{
        firstPartCost = 10 * 100;
        secondPartCost = 10 * 80;
        remainingDays = days - 20;
        let finalPartCost = remainingDays * 50;
        cost = firstPartCost + secondPartCost + finalPartCost;
    }
    return cost;
}
// const totalCost = hotelCost(27);
// console.log(totalCost);

// 04.megaFriend
function megaFriend(names){
    let largestName = '';
    names.forEach(function(megaFriend) {
        if(megaFriend.length > largestName.length){
            largestName = megaFriend;
        }
    });
    return largestName;
}
// const friends = megaFriend(['shafi', 'saif', 'mustafiz', 'rezaul','muntasirur']);
// console.log(friends);
























