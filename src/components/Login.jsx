import styled from 'styled-components';
import React from 'react';

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;
const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`;

const BgImage = styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url('/images/login-background.jpg');
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;

const CTA = styled.div`
max-width:650px;
width:100%; 
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:2vw;
transition-timing-function:ease-out;
transition:opacity 0.2s;
`;

const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
`
const SignUp = styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border:1px solid transparent;
border-radius:4px;

&:hover{
    background-color:#0483ee;
}
`

const Description = styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
margin-bottom:12px;
`

const CTALogoTwo = styled.img`
width:90%;
margin-bottom:20px;
`
export default Login;
