
function CategoryLists({category}){
    return (
        <>
        <tr>
                <td>{category.id}</td>
                <td>{category.title}</td>
                <td>{category.description}</td>
            </tr>
        </>
            
   
    )
}

export default CategoryLists