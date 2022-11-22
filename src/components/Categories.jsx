import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div({
  display:'flex',
  justifyContent:'space-around',
  padding:'20px',
  height: '100vh'
});
const Categories = () => {
  return (
    <Container>
      {categories.map((item)=>(
        <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
  )
}

export default Categories
