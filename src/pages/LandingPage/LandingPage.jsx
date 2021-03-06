import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { RegionContext } from '../../contexts/region.context';
import BirdCard from '../../components/BirdCard/BirdCard';
import './LandingPage.css';
import '../../components/BirdCard/BirdCard.css';
import NavItem from '../../components/Navbar/NavItem';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HomeSearchBar from '../../components/HomeSearchBar/HomeSearchBar';
import HomeDropdown from '../../components/HomeDropdown/HomeDropdown';
function LandingPage() {
  const [species, setSpecies] = useState({});
  const [birdPic, setbirdPic] = useState([]);
  const [loading, setLoading] = useState(false);

  const { region } = useContext(RegionContext);

  useEffect(() => {
    (async () => {
      let birdData = {
        method: 'get',
        url: `https://api.ebird.org/v2/data/obs/${region}/recent/notable?detail=full`,
        headers: { 'X-eBirdApiToken': 'uakosadgnlqk' },
      };
      setLoading(true);
      axios(birdData)
        .then(function (response) {
          setSpecies(response.data);
        })
        .catch(function (error) {});
    })();
  }, [region]);

  let uniqueBirds = null;
  if (species.length > 0) {
    uniqueBirds = [
      ...species
        .reduce((map, bird) => map.set(bird.comName, bird), new Map())
        .values(),
    ];

    uniqueBirds.map((bird) => {
      let time = bird.obsDt.split(' ');
      bird.date = time[0];
      bird.time = time[1];
    });
  }
  useEffect(() => {
    if (uniqueBirds !== null) {
      setbirdPic([]);
      uniqueBirds.map((bird) => {
        const url = `https://www.flickr.com/services/rest?method=flickr.photos.search&text=${bird.sciName}&format=json&nojsoncallback=1&api_key=ba8b5e447d4dfb260333412843c36f16&&media=photos&per_page=15`;

        (async () => {
          try {
            const response = await axios.get(url);
            let sciNameObj = { sciName: `${bird.sciName}` };
            let picArray = [...response.data.photos.photo];
            const rng = Math.floor(Math.random() * picArray.length);
            setbirdPic((prevBirdPic) => {
              return [...prevBirdPic, [sciNameObj, bird, [...picArray], rng]];
            });
          } catch (error) {
            console.error(error);
          }
        })();
      });
      setLoading(false);
    }
  }, [species]);

  console.log('birdpic', birdPic);
  return (
    <>
      <div>
        {region ? (
          loading ? (
            <div className='loadScreen'>
              <img
                src={require('../../Img/heron.gif')}
                alt='loading'
                className='loadImg'
              />
              <div className='loadText'>
                <h1>Retrieving birds...</h1>
                <p>Ruffling feathers...</p>
              </div>
            </div>
          ) : (
            <>
              <div className='Container'>
                {birdPic.map((bird, index) => {
                  if (bird[2].length === 0) return null;
                  return (
                    <BirdCard
                      key={index}
                      comName={bird[1].comName}
                      sciName={bird[1].sciName}
                      quantity={bird[1].howMany}
                      observer={`${bird[1].firstName} ${bird.lastName}`}
                      date={bird[1].date}
                      time={bird[1].time}
                      country={bird[1].countryCode}
                      county={bird[1].subnational2Name}
                      state={bird[1].subnational1Name}
                      link={`https://ebird.org/species/${bird[1].speciesCode}`}
                      // prettier-ignore
                      image={`https://live.staticflickr.com/${bird[2][bird[3]].server}/${bird[2][bird[3]].id}_${bird[2][bird[3]].secret}_c.jpg`}
                    />
                  );
                })}
              </div>
            </>
          )
        ) : (
          <>
            <div className='greetingCard'>
              <h1>Welcome to Bird-Alert</h1>
              <p>Select a region to see recent notable species observations</p>
            </div>
            <div className='menuNav'>
              <HomeSearchBar>
                <NavItem icon={<TravelExploreIcon />}>
                  <HomeDropdown />
                </NavItem>
              </HomeSearchBar>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default LandingPage;
