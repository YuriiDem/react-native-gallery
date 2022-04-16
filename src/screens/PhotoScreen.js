import React, { useState } from 'react'
import { ActivityIndicator, View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import { Dimensions } from 'react-native';

const PhotoScreen = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const win = Dimensions.get('window');
  const photo = route.params;
  const ratio = win.width / photo.width;

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <View style={styles.imageContainer}>
          <Image
            onLoad={() => { setLoading(false) }}
            style={{ ...styles.image, width: win.width, height: photo.height * ratio }}
            source={{
              uri: photo.urls.full,
            }}
          />

          {loading && <Loading />}
        </View>

        <View style={{ ...styles.text, maxWidth: win.width }}>
          <Text style={styles.description}>"{photo.description || photo.alt_description}"</Text>
          <Text style={styles.author}>
            <Text>{`Author: `}</Text>
            <Text style={{ fontWeight: "bold" }}>{photo.user.name}</Text>
          </Text>
          <Text style={styles.author}>
            <Text>{`Likes: `}</Text>
            <Text style={{ fontWeight: "bold" }}>{photo.likes}</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    resizeMode: 'cover',
    backgroundColor: '#bdbdbd',
  },
  loadingContainer: {
    position: "absolute",
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  description: {
    marginBottom: 36,
    fontSize: 16,
    color: "#666666",
  },
  author: {
    fontSize: 16,
    color: "#666666",
  },
});

export default PhotoScreen;