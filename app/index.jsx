import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView,Text, View } from 'react-native';
import {Redirect, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from '../components/CustomButton';


export default function App() {
    return (
        <SafeAreaView >
            <ScrollView contentContainerStyle={{ height: '100% '}}>
            <View className="w-full justify-center items-center
             min-h-[85vh] px-4">

          <Image
            source={images.EpaLog}
            resizeMode="contain"

         />

        
      
            <View className="relative mt-5">
            <Text className="text-3xl text-black font-bold text-center">Disfrute de nuestros servicios enfocados en Comidas{''}
            <Text className="text-secondary-200"> Rapidas</Text>    
            </Text>
           
            </View> 
            <Text className="text-sm font-pregular text-black-100 mt-7 text-center">
          ¡Solo nosotros tenemos este sazón!
          </Text>
          <CustomButton 
          title="ingresar por Email"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt-7"
          />
            </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622'
            style='light' />
        </SafeAreaView>
    );
}


