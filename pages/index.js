import Layout from '../components/Layout/Layout'
import SerchInput from '../components/SerchInput/SerchInput'
import CountriesTable from '../components/CountriesTable/CountriesTable'

export default function Home({countries}) {
  // console.log(countries);
  return (
      <Layout>
        <div>
          Найдено {countries.length} стран
        </div>
        <SerchInput placeholder='Serch' title='ddadada' />
        <CountriesTable countries={countries} />
      </Layout>
  )
}

export const getStaticProps = async ()=> {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const countries = await res.json()
  return{
    props:{
      countries,
    }
  }
}
