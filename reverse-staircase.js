function rev_staircase(n){
    for (let i=0; i<n;i++){
        str=''
        for (let k=0; k<n-i+1;k++){
            str+=' '
        }
        for (let j=0; j<i;j++){
            str+='#'
        }
        console.log(str)
    }
}

rev_staircase(5)

// ####*
// ###*#
// ##*##
// #*### 
// *####

function rev(n){
    for (let i=0; i<n;i++){
        str='';
        for (let j=0;j<n-i-1;j++)
            str+='#'
        
        str+='*'
        for (let k=0; k<i;k++){
            str+='#'
        }
    console.log(str)
    }
}

rev(4)

