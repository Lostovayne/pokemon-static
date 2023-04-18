import { Grid } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
	pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<>
			<Layout title='Listado de Pokémons'>
				<Grid.Container gap={2} justify='flex-start'>
					{pokemons.map((pokemon) => (
						<PokemonCard pokemon={pokemon} key={pokemon.id} />
					))}
				</Grid.Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon/?limit=350')
	//Es un arreglo de pokemons que son objetos, por eso el map retorna un objeto
	const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
		...poke,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			i + 1
		}.svg`,
	}))

	return {
		props: {
			pokemons,
		},
	}
}

export default HomePage
