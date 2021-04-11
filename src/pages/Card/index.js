import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SystemSetting from 'react-native-system-setting';

import TextoAfrodite from '../../tools/textoAfrodite';

import sound from '../../tools/loadSound';


function Card( { navigation } ) {
  const window = useWindowDimensions(); 
  const parallaxHeaderHeight = window.height * 0.6;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigation.addListener('beforeRemove',() => {
        sound.stop();
    });

}, [navigation]);

  useEffect(() => {
    if (!isLoading) {
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });

      SystemSetting.setVolume(1);
    }
  }, [isLoading])

  function handleOnScroll(positionScroll, contentHeight, headerHeight) {
    const maxHeightHeader = contentHeight - headerHeight;
    const positionCurrent = parseInt((positionScroll / maxHeightHeader) * 100)
    const volumeThatWillRemain = ((positionCurrent - 100) * -1) / 100

    if (volumeThatWillRemain >= 0.1) {
      SystemSetting.setVolume(volumeThatWillRemain);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1710' }}>

      {isLoading && <ActivityIndicator size='large' style={{ marginTop: 50 }} color="#E5402D" />}

      <ParallaxScrollView
        backgroundColor="#1E1710"
        contentBackgroundColor="#1E1710"
        parallaxHeaderHeight={parallaxHeaderHeight}
        renderBackground={() => (
          <Image source={require('../../assets/animation.gif')} style={{ height: '100%', width: '100%' }} onLoad={() => setIsLoading(false)} />
        )}
        fadeOutBackground={true}
        scrollEvent={(events) => handleOnScroll(events.nativeEvent.contentOffset.y, events.nativeEvent.contentSize.height, events.nativeEvent.layoutMeasurement.height)}

      >
        {!isLoading &&
          <View style={{ marginHorizontal: 33, alignItems: 'baseline', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ margin: 10, fontSize: 96, color: '#E5402D', letterSpacing: 1, lineHeight: -180}}>
              {textoAfrodite.substring(0, 1)}

              <Text style={{ alignItems: 'flex-end', fontSize: 18, color: '#ffff', letterSpacing: 1, lineHeight: 28}}> 
                {textoAfrodite.substring(1, textoAfrodite.length)}
              </Text>
            </Text>
          </View>
        }
      </ParallaxScrollView>
    </SafeAreaView>

  );
}

export default Card;