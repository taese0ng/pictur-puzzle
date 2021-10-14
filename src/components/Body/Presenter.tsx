import React from 'react';
import styled from 'styled-components';
import puzzle from '../../assets/puzzle.png';
import infoCard from '../../assets/infoCard.png';
import circle from '../../assets/circle.png';
import {Item} from './index';


interface Props{
    count:() => number;
    findError:(selectItem: Item) => void;
    items: Item[];
}

function Presenter(props:Props) {
    const {count, findError, items} = props;

    return(
        <Container>
            <Count>
                남은 갯수 : {count()}
            </Count>

            <PuzzleContainer>
                <Img src={puzzle} alt='puzzle'/>
                
                {
                    items.map((item) => (
                        <ErrorArea 
                            key={item.id}
                            src={circle} 
                            alt='circle' 
                            x={item.x} 
                            y={item.y}
                            onClick={()=>{findError(item)}}
                            isView={item.isFind}
                            />
                    ))
                }

                {
                    count() === 0 && <Img src={infoCard} alt='infoCard' style={{bottom:3}}/>
                }
            </PuzzleContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 17px;
`

const Count = styled.div`
    background-color: #DA6429;
    color: white;
    font-weight: bold;
    padding: 8px 14px;
    border-radius:100px;
    margin-bottom: 17px;
`

const PuzzleContainer = styled.div`
    width: 100%;
    position: relative;
`

const Img = styled.img`
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
`

const ErrorArea = styled.img<{x:number, y:number, isView:boolean}>`
    width: 70px;
    background: 70px;
    position: absolute;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    opacity: ${props => props.isView ? 1 : 0};
`
export default Presenter;