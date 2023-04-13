import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
	pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	console.log(pokemons)

	return (
		<>
			<Layout title='Listado de Pokémons'>
				<ul>
					<li>Pokemon</li>
					<li>Pokemon</li>
					<li>Pokemon</li>
					<li>Pokemon</li>
					<li>Pokemon</li>
					<li>Pokemon</li>
				</ul>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
	return {
		props: {
			pokemons: data.results,
		},
	}
}

export default HomePage
