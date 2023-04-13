import { Card, Grid, Row, Text } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
	pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	console.log(pokemons)

	return (
		<>
			<Layout title='Listado de Pokémons'>
				<Grid.Container gap={2} justify='flex-start'>
					{pokemons.map(({ id, name, img }) => (
						<Grid xs={6} sm={3} md={2} xl={1} key={id}>
							<Card isHoverable isPressable>
								<Card.Body css={{ p: 1 }}>
									<Card.Image src={img} width={'100%'} height={140} />
								</Card.Body>
								<Card.Footer>
									<Row justify='space-between'>
										<Text>{name}</Text>
										<Text>{id}</Text>
									</Row>
								</Card.Footer>
							</Card>
						</Grid>
					))}
				</Grid.Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon/?limit=200&offset=150')

	//Es un arreglo de pokemons que son objetos, por eso el map retorna un objeto
	let numero = 151
	const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
		...poke,
		id: numero + i,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			numero + i
		}.svg`,
	}))

	return {
		props: {
			pokemons,
		},
	}
}

export default HomePage
