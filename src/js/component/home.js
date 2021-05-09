import React from "react";
import { NavBar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

const cardArray = [
	{
		imageURL:
			"https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg",
		cardTitle: "Card Title",
		cardDescription:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit className ut, tempor ad interdum nisi cubilia sociosqu augue vivamus.",
		buttonURL:
			"https://www.ngenespanol.com/animales/duenos-influye-personalidad-perro/amp/",
		buttonLabel: "Find Out More!"
	},
	{
		imageURL:
			"http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
		cardTitle: "Card Title",
		cardDescription:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit className ut, tempor ad interdum nisi cubilia sociosqu augue vivamus.",
		buttonURL: "https://www.bbc.com/mundo/noticias-48676663",
		buttonLabel: "Find Out More!"
	},
	{
		imageURL:
			"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg",
		cardTitle: "Card Title",
		cardDescription:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit className ut, tempor ad interdum nisi cubilia sociosqu augue vivamus.",
		buttonURL:
			"https://www.elconfidencial.com/alma-corazon-vida/2019-05-26/perros-sonrien-mascotas-simpaticos-chuchos_2010406/",
		buttonLabel: "Find Out More!"
	},
	{
		imageURL:
			"https://s1.eestatic.com/2020/08/11/curiosidades/mascotas/mascotas-perros-curiosidades_512209327_157471851_1706x960.jpg",
		cardTitle: "Card Title",
		cardDescription:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit className ut, tempor ad interdum nisi cubilia sociosqu augue vivamus.",
		buttonURL:
			"https://www.elespanol.com/ciencia/medio-ambiente/20201025/perro-vuelto-agresivo-pandemia/530447375_0.html",
		buttonLabel: "Find Out More!"
	}
];

export function Home() {
	const cards = cardArray.map((singleCard, i) => {
		return (
			<Card
				key={i}
				imageURL={singleCard.imageURL}
				cardTitle={singleCard.cardTitle}
				cardDescription={singleCard.cardDescription}
				buttonURL={singleCard.buttonURL}
				buttonLabel={singleCard.buttonLabel}
			/>
		);
	});

	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div>
					<div className="row cols-md-4 my-3">{cards}</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
