//Counting True Values

// This JavaScript program contains a function, countTrue, which counts the number of true values in an input array. 
//   It utilizes a for loop to iterate through the array's elements and increments a count for each true value. 
//   The program demonstrates the function's usage with various arrays and displays the results using document.write.

function countTrue(arr){
            len=arr.length;
            count=0;
            console.log(len);
            for(i=0;i<len;i++){
                if(arr[i]==1){
                    count++;

                }
            }
            return count;

        }
        document.write(countTrue([true,false,true,false]));           //2
        document.write("<br>");
        document.write(countTrue([false, false, false, false]));     //0
        document.write("<br>");
        document.write(countTrue([true,false,true,true]));           //3
        document.write("<br>");
        document.write(countTrue([true,true,true,true]));            //4
