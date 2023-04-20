import { Layout } from '../../components/layouts'
import { FavoritePokemons, NoFavorites } from '../../components/ui'
import { useEffect, useState } from 'react'
import { localFavorites } from '../../utils'


const FavoritesPages = () => {
	
	
	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

	useEffect(() => {
		setFavoritePokemons(localFavorites.pokemons())
	}, [])

	return (
		<Layout title='Pokemons Favoritos'>
			{favoritePokemons.length === 0 ? (
				<NoFavorites />
			) : (
					<FavoritePokemons favoritePokemons={favoritePokemons}  />
			)}
		</Layout>
	)
}
export default FavoritesPages
