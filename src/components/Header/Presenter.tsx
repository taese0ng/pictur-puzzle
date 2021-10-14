import React from 'react';
import styled from 'styled-components';
import title from '../../assets/title.png';

function Presenter () {
    return(
        <Container>
            <Title src={title} alt='title'/>

            <SubTitle>
                관리대상 유해물질 하역작업을 근로자들이 하고 있습니다.<br/>어떠한 위험이 잠재하고 있는지 확인해 보세요.
            </SubTitle>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.img`
    width: 248.09px;
    height: 46.4262px;
`

const SubTitle = styled.div`
    font-size: 18px;
    text-align: center;
    margin: 17px 0;
`


export default Presenter;