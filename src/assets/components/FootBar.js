import styled from 'styled-components';

export default function FootBar({movieNameImg,session}){
    return(
        <FootBarDiv>
        <img src={movieNameImg[1]}/>
        <Text>
        <span>{movieNameImg[0]}</span>
        {session ===""? '':<span>{session[2]} - {session[1]}</span>}
        </Text>
        </FootBarDiv>
    )
}

const FootBarDiv = styled.div`
    position:fixed;
    display: flex;
    align-items: center;
    width:100%;
    height: 86px;
    padding: 5px 8px;
    bottom:0;
    left:0;
    background-color:#DFE6ED;
    border: 1px solid #9EADBA;
    img{
        box-sizing: border-box;
        background-color: white;;
        height: 100%;
        padding: 5px;
    }
`

const Text = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 13px;
    span{
        font-size:23px;
        color: #293845;
        margin: 4px 0px;
    }`