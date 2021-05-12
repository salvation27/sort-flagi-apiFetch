import React from 'react'

const CountriesTable = ({countries}) => {
  console.log('CountriesTable',countries);
  return (
    <div className='countries'>
      <div className="countries_title">Страны</div>
      <div className="countries_btn">
          <button>Name</button>
          <button>Population</button>
          {/* <button>Name</button>
          <button>Name</button> */}
      </div>
      <div className="countries_wrap">
        {
          countries.map(countri=>{
            return(
              <div className="countries_card">
                {/* <div className="countries_flag">
                  <img src={countri.flag} alt=""/>
                </div> */}
                <div className="countries_name">{countri.name}</div>
                <div className="countries_population">
                  Население: <span>{countri.population}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CountriesTable

