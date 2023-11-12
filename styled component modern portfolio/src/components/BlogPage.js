import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import Logocomponent from "../subcomponents/Logocomponent";
import PowerButton from "../subcomponents/PwerButton";
import Social from "../subcomponents/Social";
import { Blogs } from "../data/Blogdata";
import Blogcomponent from "./Blogcomponent";
import Anchor from "../subcomponents/Anchor";

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const BlogPage = () => {

  const [numbers, setnumbers] = useState(0)
  useEffect(()=>{
    let num = (window.innerHeight - 70)/30;
    setnumbers(parseInt(num))
  },[])
  return (
    <MainContainer>
      <Container>
        <Logocomponent />
        <PowerButton />
        <Social />
        <Anchor numbers={numbers}/>
        <Center>
          <Grid>
            {
              Blogs.map((blog)=>(
                <Blogcomponent key={blog.id} blog={blog}/>
              ))
            }
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
