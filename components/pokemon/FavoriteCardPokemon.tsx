import { Card } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props {
	id: Number
}

const FavoriteCardPokemon: FC<Props> = ({ id }) => {
	const router = useRouter()
	const onFavoriteClicked = () => {
		router.push(`/pokemon/${id}`)
		
	}

	return (
		<Card isHoverable isPressable onPress={onFavoriteClicked} css={{ padding: 10 }}>
			<Card.Image
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
				width={'100%'}
				height={140}
			/>
		</Card>
	)
}
export default FavoriteCardPokemon
