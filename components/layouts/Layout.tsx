import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Navbar } from '../ui'

interface Props {
	children: ReactNode
	title?: string
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin 



export const Layout: FC<Props> = ({ children, title }) => {
	
	
	
	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name='author' content='Epsaind-dev' />
				<meta name='description' content={`informacion del pokemon ${title}`} />
				<meta name='keywords' content={`${title},pokemon,pokedex`} />
				
				<meta property='og:title' content={`Informacion sobre ${title} `}/>
				<meta property='og:description' content={`Esta es la pagina sobre ${title}`} />
				<meta
					property='og:image'
					content={` ${origin}/img/banner.png `}
				/>
			</Head>
			<Navbar />
			<main
				style={{
					padding: '0px 20px',
				}}>
				{children}
			</main>
		</>
	)
}
