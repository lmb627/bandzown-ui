import { createStackNavigator, createAppContainer } from 'react-navigation';

import { HomeView } from './views/homeview';
import { BandsView } from './views/bandsview';
import { NewBandView } from './views/newbandview';
import { BandDetailsView } from './views/banddetailsview';

const AppNavigator = createStackNavigator(
  {
    Home: HomeView,
    Bands: BandsView,
    NewBand: NewBandView,
    BandDetails: BandDetailsView
  },
  {
    defaultNavigationOptions:
    {
        headerStyle: {
          backgroundColor: '#225522',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
  }
);

export default createAppContainer(AppNavigator);
