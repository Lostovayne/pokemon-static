import {  Grid } from '@nextui-org/react'
import { FC } from 'react'
import { FavoriteCardPokemon } from '../pokemon'


interface Props {
  favoritePokemons : Number[]
}


const FavoritePokemons: FC<Props> = ({favoritePokemons}) => {
	return (
		<Grid.Container gap={2} direction='row' justify='flex-start'>
			{favoritePokemons.map((id) => (
				<Grid key={`${id}`} xs={6} sm={3} md={2}>
        <FavoriteCardPokemon id={id} />
				</Grid>
			))}
		</Grid.Container>
	)
}
export default FavoritePokemons
