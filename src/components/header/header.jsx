import "./header.css"



const Header = (props) => {

  return (
    // fragment
    <>
      <header className="{props.theme}">
        <ul>
          <li> 
            item 1
          </li>
          <li>
            item 2
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header