import React from 'react';
import styled from 'styled-components';

export default function Home({children}) {

return(
    <Container>
      Neki bo tukej :)
            {children}
    </Container>

)
};

const Container = styled.div`
          background-color: transparent;
`



