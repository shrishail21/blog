function CategoryOption({opt}){
    return(

        <option value={opt['id']}>{opt['title']}</option>
    )
}

export default CategoryOption