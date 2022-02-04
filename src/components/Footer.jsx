import { Facebook, GitHub, Instagram, LinkedIn, Mail, Phone, Room } from "@material-ui/icons";
import { Link } from "react-router-dom";

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
				<Link to="/" style={{ "text-decoration": "none", "color": "black" }}>
					<Logo>
						Ebuy
					</Logo>
				</Link>
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
					<ListItem>
						<Link to="/" style={{ "text-decoration": "none", "color": "black" }}>
							Home
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/cart" style={{ "text-decoration": "none", "color": "black" }}>
							Cart
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/product-list" style={{ "text-decoration": "none", "color": "black" }}>
							Woman Fashion
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/product-list" style={{ "text-decoration": "none", "color": "black" }}>
							Accessories
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/product-list" style={{ "text-decoration": "none", "color": "black" }}>
							Man Fashion
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/" style={{ "text-decoration": "none", "color": "black" }}>
							My Account
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/cart" style={{ "text-decoration": "none", "color": "black" }}>
							Order Tracking
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/cart" style={{ "text-decoration": "none", "color": "black" }}>
							Wishlist
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/cart" style={{ "text-decoration": "none", "color": "black" }}>
							Wishlist
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/" style={{ "text-decoration": "none", "color": "black" }}>
							Terms
						</Link>
					</ListItem>
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
