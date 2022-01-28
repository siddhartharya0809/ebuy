import { Facebook, GitHub, Instagram, LinkedIn, Mail, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0px;
`

const SocailContainer = styled.div`
  display: flex
`

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
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
	margin-bottom: 30px;

`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
	width: 50%;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`

const Payment = styled.img`
	width: 50%;
`

const Footer = () => {
	return (
		<Container>
			{/* Left part of Footer */}
			<Left>
				<Logo>Ebuy.</Logo>
				<Desc>There are many variation of passage of Lorem Ipsum available, but the majority
					have suffered alteration in some form, by injected humour, or randmoised words
					which don't look even slightly believable
				</Desc>
				<SocailContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<LinkedIn />
					</SocialIcon>
					<SocialIcon color="E60023">
						<GitHub />
					</SocialIcon>
				</SocailContainer>
			</Left>

			{/* Center part of Footer */}
			<Center>
				<Title>Useful link</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>

			{/* Right Part of Footer */}
			<Right>

				<Title>Contact Us</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> F-305, SanSun Buildings, Hydrabad.
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +91 95367722693
				</ContactItem>
				<ContactItem>
					<Mail style={{ marginRight: "10px" }} /> aryasiddharth31@gmail.com
				</ContactItem>

				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
}

export default Footer;
