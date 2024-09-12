import { useFonts } from 'expo-font'
import { Stack, usePathname } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { Image, StyleSheet, View } from 'react-native'
import { GoProvider, useGo } from '@/src/context/GoContext'
import { theme } from '../theme';


SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  

  const [loaded] = useFonts({
    SpaceMono: require('@/src/assets/fonts/SpaceMono-Regular.ttf'),
    IberPangeaRegular: require('@/src/assets/fonts/IberPangea-Regular.ttf'),
    IberPangeaMedium: require('@/src/assets/fonts/IberPangea-Medium.ttf'),
    IberPangeaSmBold: require('@/src/assets/fonts/IberPangea-SmBold.ttf'),
    IberPangeaBold: require('@/src/assets/fonts/IberPangea-Bold.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <GoProvider>
      <View style={styles.container}>
        <StackScreen />
      </View>
    </GoProvider>
  )
}

export function StackScreen() {
  const { go } = useGo();
  const pathname = usePathname();

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.lightGreen,
          },
          headerShown: !go,
          headerShadowVisible: false,
          headerTitle: 'NeoQuizz',
          headerTitleStyle: {
            fontSize: 36,
            fontFamily: theme.fontFamily.bold,
          },
          headerBackImageSource: require('@/src/assets/images/back-icon.png'),
          headerTintColor: theme.colors.white,
          headerTransparent: true,
          headerTitleAlign: 'center',
          contentStyle: {
            marginBottom: pathname === '/' ? 0 : 150,
          }
        }}
      />
      <View style={go ? { display: 'none' } : {}}>
        <Image
          style={styles.bottomImage}
          source={require('@/src/assets/images/bottom-image.png')}
        />

        <View style={styles.logos}>
          <Image
            style={styles.neoenergia}
            source={require('@/src/assets/images/logo-neoenergia-horizontal.png')}
          />
          <Image
            style={styles.aneel}
            source={require('@/src/assets/images/logo-aneel-horizontal.png')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  aneel: {
    width: 300,
    objectFit: 'contain',
  },
  neoenergia: {
    width: 200,
    objectFit: 'contain',
  },
  bottomImage: {
    position: 'absolute',
    width: '100%',
    height: 200,
    objectFit: 'contain',
    bottom: 100,
  },
  logos: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
})
