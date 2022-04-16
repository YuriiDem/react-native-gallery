import React, { useEffect } from 'react'
import { ActivityIndicator, View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as galleryActions from '../store/actions/gallery'

import Gallery from '../components/Gallery';

const MainScreen = ({ navigation, gallery, fetchPhotos }) => {
    useEffect(() => {
        fetchPhotos();
    }, []);

    const HandlePhotoClick = (photo) => {
        navigation.navigate('Photo', photo);
    }


    return (
        <ScrollView>
            <View style={styles.screenContainer}>
                <Gallery photos={gallery.photos} onPhotoClick={HandlePhotoClick} />

                {gallery.photos.isFetching && <Loading />}
                {gallery.photos.isError && !gallery.photos.isFetching && <Error />}

                <ShowMoreButton onPress={() => fetchPhotos()} />
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

const Error = () => {
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>An error has occurred, please try again later</Text>
        </View>
    )
}

const ShowMoreButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.showMoreButton}
            onPress={onPress}
        >
            <Text style={styles.showMoreButtonText}>More</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    loadingContainer: {
        marginVertical: 32,
    },
    errorContainer: {
        marginVertical: 32,
    },
    errorText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ff0000',
    },
    showMoreButton: {
        alignItems: "center",
        marginVertical: 24,
        paddingVertical: 15,
        paddingHorizontal: 36,
        backgroundColor: "black",
        borderRadius: 16,
    },
    showMoreButtonText: {
        color: 'white'
    }
});



const mapStateToProps = ({ gallery }) => ({
    gallery
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(galleryActions, dispatch),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainScreen);