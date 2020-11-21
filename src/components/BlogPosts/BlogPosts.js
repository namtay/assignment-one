import React,{useState} from 'react';
import Blog from "./Blog";


function BlogPosts () {
    const[blog,setBlog]=useState([
            {
                "id":0,
                "title":"The Walking tortoise",
                "content":"Without C2C, you will lack cross-media CAE.",
                "fullContent":" Without C2C, you will lack cross-media CAE.So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum.",         
                "author":"Christabel Tay",
                "date":"11/11/2020",
                },
                {
                    "id":1,
                    "title":"The talking crow",
                    "content":"But she must have prizes.quite a commotion in the pool was getting quite crowded with the birds and animals that had fallen into",                    
                    "fullContent":"So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum.",
                    "author":"Serwah Akoto",
                    "date":"17/11/2020",
                    },
            
                  {
                    "id":2,
                    "title":"Feeling free",
                    "content":"But she must have prizes.quite a commotion in the pool was getting quite crowded with the birds and animals that had fallen into",                    
                    "fullContent":"So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum.",
                    "author":"Mensah Asare",
                    "date":"16/11/2020",
                    },
                    {
                    "id":3,
                    "title":"Untamed Soul",
                    "content":"But she must have prizes.quite a commotion in the pool was getting quite crowded with the birds and animals that had fallen into",                    
                    "fullContent":"So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum.",
                    "author":"Samuel Winter",
                    "date":"9/11/2020",
                  },
                   {
                    "id":4,
                    "title":"Seven seven",
                    "content":"But she must have prizes.quite a commotion in the pool was getting quite crowded with the birds and animals that had fallen into",                    
                    "fullContent":"So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum.",
                    "author":"Serwah Akoto",
                    "date":"17/11/2020",
                  }])
            

    



       
        const  handleChangeOne=id=>e=>{            
            console.log(id);
            let newBlog = [...blog];
            newBlog[id].title= e.target.value; 
            console.log(newBlog[id].title) ;         
            setBlog (newBlog); 
            console.log(blog );                   
                              
            
        }
        const  handleChangeTwo = id=>e=>{
                     
            let newBlog = [...blog];
            newBlog[id].content=e.target.value; 
            console.log(newBlog[id].content);               
            setBlog (newBlog); 
            console.log(blog);
        }
    
        const  handleChangeThree=id=>e=>{
            
            let newBlog = [...blog];
            newBlog[id].author=e.target.value; 
            console.log(newBlog[id].author) ;         
            setBlog (newBlog); 
            console.log( blog);
        }
    
        const  handleChangeFour=id=>e=>{
            
            let newBlog = [...blog];
            newBlog[id].date=e.target.value; 
            console.log(newBlog[id].date) ;         
            setBlog (newBlog); 
            console.log( blog);
        }
    
        
        // const handleDelete=id=>{
                        
        //     const newBlog =[...blog].filter(item=>item.id !== id);
        //     console.log(newBlog)
        //         setBlog( newBlog);
              

        // }
        return(
           <div>
            {   blog.map((item)=>
                        <div>
                        <Blog
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        author={item.author} 
                        content={item.content}
                        fullcontent={item.fullContent}
                        date={item.date}
                        onChangeOne={handleChangeOne(item.id)}
                        onChangeTwo={handleChangeTwo(item.id)}
                        onChangeThree={handleChangeThree(item.id)}
                        onChangeFour={handleChangeFour(item.id)}
                        >
                        
                        </Blog>
                        <br></br>
                        <br></br>
                        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                        
                    )})     
                               
                            
           </div>
           
           
              ) 

                
          
        }
    
   
             
    


export default BlogPosts



                //  <Blog
                //  id="4"
                //  title={blog[4].title}
                //  author={blog[4].author} 
                //  content={blog[4].content}
                //  date={blog[4].date}
                //  onChangeOne={handleChangeOne(4)}
                //  onChangeTwo={handleChangeTwo(4)}
                //  onChangeThree={handleChangeThree(4)}
                //  onChangeFour={handleChangeFour(4)}
                //  onClickDelete={handleDelete(4)}>
                //  </Blog>




                // <Blog
                // id="3"
                // title={blog[3].title}
                // author={blog[3].author} 
                // content={blog[3].content}
                // date={blog[3].date}
                // onChangeOne={handleChangeOne(3)}
                // onChangeTwo={handleChangeTwo(3)}
                // onChangeThree={handleChangeThree(3)}
                // onChangeFour={handleChangeFour(3)}
                // onClickDelete={handleDelete(3)}>
                // </Blog>
                
                // <br></br>
                // <br></br>



// const  updateTitle=(id,event)=>{
//     console.log(id)
//     const elementIndex= this.state.blog.findIndex(element=>element.id===id);
//     let  newBlog = [...this.state.blog];
//     newBlog[elementIndex]={...newBlog[elementIndex],
//     "title":event.target.value}
//     this.setState({
//         blog:newBlog,  
//     }            
                      
//     )
// }

// author={this.state.blog[0].author} 

// {datas.map((data, index) => {
//     <li key={data.name}>
//       <input
//         type="text"
//         name="name"
//         value={data.name}
//         onChange={updateFieldChanged("name", index)}
//       />
//     </li>})}




// onChangeOne={handleChangeOne(eachblog.id)}
//                         onChangeTwo={handleChangeTwo(eachblog.id)}
//                         onChangeThree={handleChangeThree(eachblog.id)}
//                         onChangeFour={handleChangeFour(eachblog.id)}
//                         onClickDelete={handleDelete}>