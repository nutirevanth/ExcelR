//functional component 
function Header(){
    
    let menus=["home","about us","contact","portfolio"];
    return (
    <>
        <h1>Header</h1>
        <ul>
            {
                menus.map(
                    (element)=><li>{element}</li>
                )
            }
        </ul>
    </>
)
}
export default Header;