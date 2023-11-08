import { View } from 'react-native';
import RestaurantList from './components/RestaurantList';


export default function Home() {
    return (
        <View style={{
            flex: 1 ,
            backgroundColor: 'skyblue',
            paddingVertical: 60,
            paddingHorizontal: 30,


        }}>

            <RestaurantList />
        </View>



    )
}