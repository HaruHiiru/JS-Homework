function tri(arr){

    var permute = false;

    do{
        permute = false;
        for(var i=0; i < arr.length-1; i++) {
            if(arr[i] > arr[i+1]) {
                var tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                permute = true;
            }
        }
    } while(permute == true );
}

var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

tri(arr);
console.log(arr);