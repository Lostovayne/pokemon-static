import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SmallPokemon } from '../../interfaces/pokemon-list'
interface Props {
	pokemon: SmallPokemon
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
	const router = useRouter()
	const onClick = () => {
		router.push(`/name/${pokemon.name}`)
	}

	const { id, img, name } = pokemon
	return (
		<Grid xs={6} sm={3} md={2} key={id}  >
			<Card isHoverable isPressable onClick={onClick} >
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={img} width={'100%'} height={140} css={{ padding: 5 }} />
				</Card.Body>
				<Card.Footer>
					<Row justify='space-between'>
						<Text transform='capitalize'>{name}</Text>
						<Text>#{id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	)
}
export default PokemonCard
