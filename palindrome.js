let str="naman";
let new_str=""
for(let i=str.length-1;i>=0;i++)
{
new_str+=str;
}
if(str===new_str)
{
console.log("No")
}
else
{
console.log("Yes")
}