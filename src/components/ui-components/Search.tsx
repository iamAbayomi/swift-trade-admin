import styled from "styled-components";

function Search(){
  return(
    <SearchBarContainer className="search-bar">
        <SearchContent className="search-content">
            <SearchInnerContainer className="search-logo-and-highlight">
            <SearchLogo className="search-logo" src="/vectors/search-icon.svg" alt=""/>
            <SearchInput className="search-highlight" 
            placeholder="Search Cards"
            />
            </SearchInnerContainer>
        </SearchContent>
    </SearchBarContainer>
  )
}

export default Search;

const SearchBarContainer = styled.div`
    max-width: 500px;
    width: 100%;
    height: 40px;
    margin: 10px 10px 10px 10px;
    background: white;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.068);
    border-radius: 5px;
`
  
const SearchContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px 0px 10px;
    
`
  
const SearchInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    /* border: 1px solid; */
`

const SearchLogo = styled.img`
    width: 20px;
    height: 18px;
    margin: 2px 5px 0px 5px;  
`

const SearchInput = styled.input`
    width: 300px;
    /* width: 100%; */
    height: 22px;
    margin: 0px 0px 0px 5px;
    background: white;
    border: 0px solid;
    font-size: 16px;
    border-color: rgba(0, 0, 0, 0.068);
    color: #837975d8;
`
  