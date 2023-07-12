import Layout from '@/components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'

// import custom styles
import '@/assets/styles.css'

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
