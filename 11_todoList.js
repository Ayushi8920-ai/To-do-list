//making object for storing name and date in to-do
//array of objects. with name and duedate
const todoList=[{
  name:'make dinner',
  dueDate:'2022-12-22'
},{
  name:'wash dishes',
  dueDate:'2022-12-22'
}];
callTodolist();
function callTodolist()
{
  let todoHTML='';
for(let i=0;i<todoList.length;i++)
{
    const todoObject=todoList[i];
    const name=todoObject.name;
    const dueDate=todoObject.dueDate;
   // can be shortcut:const{name,date}=todoObject;
   // //now it is an object
    const html=`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i},1);
    callTodolist();
    " class="delete">Delete</button>`;
   //using div we can sepreate it into 3 elements so that grid can work
  //  callTodolist() builds fresh HTML based on todoList
   // delete that one element
  //  Remove item from the array,Rebuild and rerender the list based on the updated data.
  //converts it to an html code,generates html code
  todoHTML=todoHTML+html;
}

// function getLastValue(array)
// {
//   return(array.length-1);
// }
// console.log(getLastValue([2,3,4,5,6]));
// function arraySwap(array)
// {
//   const value=array[0];
//   array[0]=array[array.length-1];
//   array[array.length-1]=value;
//   return array;
// }
// for(let i=0;i<=10;i+=2)
// {
//   console.log(i);
// }
// for(let i=5;i>=0;i--)
// {
//   console.log(i);
// }
// console.log(array[1,2,3]);
// const array=[1,2,3];
// const result=[];
// for(let i=0;i<array.length;i++)
// {
//   result.push(array[i]+1);
// }
// console.log(result);
// function addNum(array,num)
// {
//   const result=[];
//   for(let i=0;i<array.length;i++)
//   {
//     result.push(array[i]+num);
//   }
//   return result;
// }
// function addArrays(array1,array2)
// {
//   const result1=[];
//   for(let i=0;i<array1.length;i++)
//   {
//     result.pus(array1[i]+array2[i]);
//   }
//   return result;
// }
// function minMax(nums)
// {
//   let min=nums[0];
//   let max=nums[0];
//   for(let i=0;i<nums.length;i++)
//   {
//     if(nums.length>0)
//       {
      
//         if(nums[i]<=min)
//         {
//            min=nums[i];
//         }
         
//         if(nums[i]>=max)
//         {
//           max=nums[i];
//         }
//       }
    
//   }
//   return[min,max];
// }
// function countWords(words)
// {
//   const result={};
//   for(let i=0;i<words.length;i++)
//   {
//     const word=words[i];
//     if(!result[word])//access the properties if result['apple'],checks if property is true or not
//     // result[word] dynamically accesses or creates a property whose name is the current word.
//     {
//       result[word]=1;
//     }
//     else{
//       result[word]++;//increments the count
//     }
//   }
//   return result;
// }
// console.log(addNum([1,2,3],2));
console.log(todoHTML);//to display html code format in console
// //adding in todo list

document.querySelector('.todolist').innerHTML=todoHTML;
}//puts the html element on page but we also need function to disdplay the html element at every new insert
// }

function addTodo()
{
  const inputElement=document.querySelector('.name-input');
  const name=inputElement.value;
  console.log(name);
  const dateInputElement=document.querySelector('.due-date')//date is selected
  const dueDate=dateInputElement.value;
  todoList.push({
    name: name,
    dueDate: dueDate,
  });
  //pushing every new input into array and printing it
  console.log(todoList);
  inputElement.value='';//after every input value becomes empty(i.e reset)
  callTodolist();//ADDING A TODO AND DISPLAYING LIST AGAIN

}