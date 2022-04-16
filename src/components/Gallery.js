import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { ucFirst } from '../utils'



const Gallery = ({ photos, onPhotoClick }) => {
    return (
        <View style={styles.container}>
            {
                photos.items.map((item, index) =>
                    <TouchableOpacity
                        key={item.id + index}
                        style={styles.imageWrapper}
                        onPress={() => onPhotoClick(item)}
                    >
                        <Image
                            style={styles.image}
                            source={{
                                uri: item.urls.small,
                            }}
                        />

                        <View style={styles.text}>
                            <Text style={styles.description}>"{ucFirst(item.description || item.alt_description)}"</Text>
                            <Text style={styles.author}>{`Author: ${item.user.name}`}</Text>
                            <Text style={styles.author}>{`Likes: ${item.likes}`}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        padding: 10,
        width: '100%',
        height: 300,
        maxWidth: 500,
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 18,
        backgroundColor: '#bdbdbd',
    },
    text: {
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        bottom: '10%',
        width: '90%',
        padding: 15,
        borderRadius: 18,
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
    },
    description: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 16,
        color: "#ffffff",
    },
    author: {
        fontSize: 14,
        color: "#dbdbdb",
    },
});


export default Gallery;