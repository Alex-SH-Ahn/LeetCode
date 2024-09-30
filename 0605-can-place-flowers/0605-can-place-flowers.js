/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let cnt=0;
    for (let i=0;i<flowerbed.length;i++){
        if (flowerbed[i]===0) {
            if (i===0 && flowerbed[i+1]===0) {
                flowerbed[i]=1;
                cnt++;
                console.log(`first if: ${i}`)
            } else if (flowerbed[i-1]===0 && flowerbed[i+1]===0) {
                flowerbed[i]=1;
                cnt++;
                console.log(`second if: ${i}`)
            } else if (i===flowerbed.length-1 && flowerbed[i-1]===0) {
                flowerbed[i]=1;
                cnt++;
                console.log(`third if: ${i}`)
            } else if (flowerbed.length===1) {
                flowerbed[i]=1;
                cnt++;
                console.log(`fourth if: ${i}`)
            }
        }
        // if ((i===0) && (flowerbed[i+1] === 0) && (flowerbed[i]===0)) {
        //     flowerbed[i]=1; cnt++;
        //     console.log(`first if: ${i}`)
        // } else if (flowerbed[i]===0 && flowerbed[i-1]===0 && flowerbed[i+1] === 0) {
        //     flowerbed[i]=1; cnt++;
        //     console.log(`second if: ${i}`)
        // }
    }
    console.log(cnt);
    console.log(flowerbed);
    return n <= cnt ? true : false;
};