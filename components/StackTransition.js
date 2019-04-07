import { Animated, Easing } from 'react-native';
import StyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

export const StackTransition = () => ({
    transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
    },
    screenInterpolator: StyleInterpolator.forVertical,
})