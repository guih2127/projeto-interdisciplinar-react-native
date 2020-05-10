import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Header = ({ title }) => {
    return (
        <View>
            <Text style={styles.header}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
});

export default Header;