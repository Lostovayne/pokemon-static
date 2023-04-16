import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'

export const Navbar = () => {
	const { theme } = useTheme()

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'start',
				padding: '0x 20px',
				backgroundColor: theme?.colors.gray50.value,
			}}>
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
				alt='icono de la app'
				width={70}
				height={70}
			/>

			<NextLink href='/'>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Text color='white' h2>
						P
					</Text>
					<Text color='white' h3>
						okémon
					</Text>
				</div>
			</NextLink>

			<Spacer css={{ flex: 1 }} />

			<NextLink href='/favorites'>
				<Text color='white' css={{ marginRight: '20px' }}>
					Favoritos
				</Text>
			</NextLink>
		</div>
	)
}
