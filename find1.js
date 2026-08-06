let ids=[
    {id:1,name:'Rahat'},
    {id:2,name:'safik'},
    {id:3,name:'rafik'},
];

const findId=(users,id1)=>{
const result=users.find(user=>{
     if(user.id===id1){
        return true;
     }else{
        return false;
     }
}

)
return result||'user not found';
}

console.log(findId(ids,4));