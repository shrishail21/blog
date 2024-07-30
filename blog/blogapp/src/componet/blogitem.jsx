function BlogItem({blogs}){
    return(
        <div className="m-4 ">
            <h2 style={{textAlign:'center'}} className="mb-5">{blogs.title}</h2>
            <div style={{textAlign:'justify'}}>{blogs.contents}</div>
        </div>
        

        
    )

}

export default BlogItem