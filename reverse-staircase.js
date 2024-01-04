// function rev_staircase(n){
//     for (let i=0; i<n;i++){
//         str=''
//         for (let k=0; k<n-i+1;k++){
//             str+=' '
//         }
//         for (let j=0; j<i;j++){
//             str+='#'
//         }
//         console.log(str)
//     }
// }

// // rev_staircase(5)
// function rev(n){
//     for (let i=0; i<n;i++){
//         str='';
//         for (let j=0;j<n-i-1;j++)
//             str+='#'

//         str+='*'
//         for (let k=0; k<i;k++){
//             str+='#'
//         }
//     console.log(str)
//     }
// }

// // ####*
// // ###*#
// // ##*##
// // #*###
// // *####

// function revOneLoop(n){
//     let x=n,y=0;
//     for (let i=0; i<n;i++){
//         str='';
//         str+="#".repeat(x-=1)
//         // for (let j=0;j<n-i-1;j++)
//         //     str+='#'
//         str+='*'
//         // for (let k=0; k<i;k++){
//         //     str+='#'
//         // }
//         str+="#".repeat(y++)
//     console.log(str)
//     }
// }

// revOneLoop(5)



// for (let i=0; i<arr.length; i++){
//     for (let j=i + 1; j<=arr.length; j++){
//         if (arr[i]+arr[j] === k){
//             console.log(arr[i],arr[j])
//         }
//     }
// }
// for (let i=0; i<arr.length; i++){
//     for (let j=i + 1; j<=arr.length; j++){
//         if (arr[i]+arr[j] === k){
//             console.log(arr[i],arr[j])
//         }
//     }
// }


// for (let i = 0; i < arr.length; i++) {
//     if (freq.hasOwnProperty(arr[i])) {
//         freq[arr[i]] += 1;
//     }
//     else {
//         freq[arr[i]] = 1;
//     }
// }

// let arr = [1, 1, 2, 2, 3, 5, 7, 5];
// let arr = [1, 2, 1, 2, 3, 5, 7, 5, 9, 11];
// let k = 10;
// let freq = {}
// for (let i = 0; i < arr.length; i++) {
//     // if (arr[i] in freq.keys)
//     if (freq.hasOwnProperty(arr[i])) {
//         freq[arr[i]] += 1;
//     } else {
//         freq[arr[i]] = 1;
//     }
// }
// let li = []
// for (const key in freq) {
//     if (freq.hasOwnProperty(key)) {
//         li.push(Number(key))
//     }
// }
// console.log(li)

// for (i = 0; i < li.length; i++) {
//     let diff = k - li[i]

//     let find = li.indexOf(diff);

//     if (find !== -1) {
//         console.log(li[i], li[find]);
//         break
//     }
//     else {
//         continue;
//     }
// }
// if (li.indexOf(k / 2)) {
//     console.log(k / 2);
// }

///FINAL MAKINGG
let arr = [1, 1, 2, 2, 3, 5, 7, 5];
// let arr = [1, 2, 1, 2, 3, 5, 7, 5, 9, 11];
let k = 10;
let diff = {}
for (let i = 0; i < arr.length; i++) {
    diff[arr[i]] = k - arr[i];
}

let difference_list = []
for (let i = 0; i < arr.length; i++) {
    difference_list.push(k - arr[i])
}
console.log(difference_list)

let freq = {}
for (let i = 0; i < difference_list.length; i++) {
    if (freq.hasOwnProperty(difference_list[i])) {
        freq[difference_list[i]] += 1;
    } else {
        freq[difference_list[i]] = 1;
    }
}
console.log(freq)

