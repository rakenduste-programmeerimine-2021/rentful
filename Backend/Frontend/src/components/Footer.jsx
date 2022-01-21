import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Footer = () => {
    return (
        <Container className="footer">
            <Left>
                <Logo>Rentful</Logo>
                <Desc>
                    This is the description that contains so much information that one
                    could never fathom the amount of knownledge this small, yet effective
                    text may contain. It is simply remarkable that someone as intelligent
                    as the one reading it could ever gaze their eyes on it and yet here you are.
                </Desc>
                <SocialContainer>
                    <SocialIcon color = "3B5998">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color = "E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color = "00ACEE">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>European Cars</ListItem>
                    <ListItem>Asian Cars</ListItem>
                    <ListItem>American Cars</ListItem>
                    <ListItem>Miscellaneous Cars</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Renting</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style = {{marginRight:"10px"}}/>
                Narva mnt 25, 10120 Tallinn
                </ContactItem>
                <ContactItem><Phone style = {{marginRight:"10px"}}/>
                +372 1234 5678
                </ContactItem>
                <ContactItem><MailOutline style = {{marginRight:"10px"}}/>
                email@email.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
