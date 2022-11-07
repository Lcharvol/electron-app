import PropTypes from "prop-types";
import { times } from "ramda";
import React, { useState } from "react";
import styled from "styled-components";

import colors from "@/colors";
import { Typography } from "@/UI";

import { CARD_BRANDS, CARD_BY_BRAND } from "./constants";

const Container = styled.div`
	position: relative;
	& > * {
		color: ${() => colors.white};
	}
	margin-bottom: ${({ depth }) => depth}rem;
`;

const Content = styled.div`
	position: ${({ isBehind }) => (isBehind ? "absolute" : "relative")};
	display: "flex";
	z-index: ${({ index = 0 }) => 10 - index};
	width: 295px;
	height: 174px;
	padding: 20px;
	border-radius: 10px;
	background: linear-gradient(
		40deg,
		${({ backgroundColors }) => backgroundColors?.[0]},
		${({ backgroundColors }) => backgroundColors?.[1]}
	);
	${({ styles }) => styles};
`;

const BottomSide = styled.div`
	position: "relative";
	display: "flex";
	justify-content: "flex-end";
	flex: 1;
`;
const TopSide = styled.div`
	display: "flex";
	flex-direction: "row";
	flex: 1;
	padding-top: 10;
`;

const CardType = styled(Typography)`
	flex: 1;
	color: ${() => colors.white};
`;

const Name = styled(Typography)`
	opacity: 0.8;
	margin-bottom: 0.5rem;
`;
const CardNumber = styled(Typography)`
	letter-spacing: 1.5;
`;
const CreditCard = ({ depth, onCardClick, cardBrand: initialCardBrand }) => {
	const [cardBrand, setCardBrand] = useState(
		initialCardBrand || CARD_BRANDS.VISA
	);
	const [cardNumber, setCardNumber] = useState([
		"3011",
		"5145",
		"3566",
		"3012",
	]);
	const cardOptions = CARD_BY_BRAND[cardBrand];
	const LogoComponent = cardOptions.logoComponent || null;
	const getCardStyleByIndex = (index) => ({
		opacity: 0.8 - (index || 0) / 10,
		top: `${index}rem`,
		transform: `scale(${1 - index / 20})`,
	});

	return (
		<Container depth={depth}>
			<Content
				onClick={onCardClick}
				backgroundColors={cardOptions.backgroundColor}
			>
				<TopSide>
					<CardType>{cardOptions.type}</CardType>
				</TopSide>
				<BottomSide>
					<Name>Lucas Charvolin</Name>
					<CardNumber>{cardNumber.join(" - ")}</CardNumber>
				</BottomSide>
			</Content>
			{depth &&
				times(
					(index) => (
						<Content
							key={index}
							index={index + 1}
							backgroundColors={cardOptions.backgroundColor}
							styles={getCardStyleByIndex(index)}
							isBehind
						/>
					),
					depth
				)}
		</Container>
	);
};

CreditCard.propTypes = {
	cardBrand: PropTypes.string,
	depth: PropTypes.number,
	onCardClick: PropTypes.func,
};
CreditCard.defaultProps = {
	onCardClick: () => {},
	depth: 0,
};

export default CreditCard;
