import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
position: fixed;
top: 800px;
background: #AD85F8;
width: 1270px;
border-top: 3px solid black;
.footer{
    display:flex;
}
`
function Footer() {
  return (
    <FooterStyle>
      <div>
          <h3 className="footer">KidsFly</h3>
      </div>
    </FooterStyle>
  );
}

export default Footer;