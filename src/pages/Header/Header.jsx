import Nav from "../NavigationBar/Nav"

const Header = ({ title }) => {
  return (
    <header className="header">
      
      <Nav
        title={title}
      ></Nav>

    </header>
  )
}

export default Header
