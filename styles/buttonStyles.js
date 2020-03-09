import { StyleSheet } from 'react-native';
// color prop should be defined inline
const btnStyles = StyleSheet.create({
    button: {
        width: '50%',
    },
    buttonContainer: {
        borderRadius: 4,
        width: 150,
        fontSize: 24,
        paddingVertical: 8,
        paddingHorizontal: 12,
        textAlign: 'center',
        paddingBottom: 100,
    },
})

export default btnStyles;