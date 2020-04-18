//promises are often use when fetching json api

const p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('wes is cool');
    },1000);
  
});
p.
   then(data=>{
       console.log(data);
   })

  //
  const posts=[
    {title:'I love javascript',author:'wes bos',id:1},
    {title:'css',author:'chris coyler',id:2},
    {name:'dev tool tricks',author:'addy osmani',id:3},
 ];



   const authors=[
       {name:'wes bos',twitter:'@wesbos',bio:'canadian developer'},
       {name:'Chris Coyler',twitter:'@chriscoyler',bio:'css trick and code pen'},
       {name:'addy osmani',twitter:'@addyosmani',bio:'gooogler'},
    ];

    function getpostbyid(id){
     return new Promise((resolve,reject)=>{
         //using a setttimout to mimick a databse
         setTimeout(()=>{
             //find the post we want
             const post=posts.find(post=>post.id===id);
             if(post){
                 resolve(post);//send the post d back
             }else{
                 reject(Error('no post was found !'));
             }
             

         },200);

     }) ;  
    }

    function hydrateauthor(post){
        //create a promise
        return new Promise((resolve,reject)=>{
          //find the author
          const authordetails=authors.find(person.name===post.author);
          if(authordetails){
              //hydrate d post object with the author object
              post.author=authordetails;
              resolve(post);
          }else{
               reject(Error('can not find the author'));
          }
          
        });
    }
    //chaining promise
    getpostbyid(2)
    .then(post=>{
      console.log(post) ; 
      return hydrateauthor(post);
    })
      .then(post=>{
       console.log(post)  ; 
      })
      .catch(err=>{
          console.log(err);
      })
