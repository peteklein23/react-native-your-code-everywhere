import React from 'react';
import { Dimensions, Animated, Easing } from 'react-native';

export default class SideMenu extends React.Component {
  state = {
    leftPos: null,
    rightPos: null
  };

  componentWillMount() {
    const hiddenMenuPositions = this.getHiddenMenuPositions();
    const { leftPos, rightPos } = hiddenMenuPositions;
    this.setState(() => ({
      leftPos: new Animated.Value(leftPos),
      rightPos: new Animated.Value(rightPos)
    }));
  }

  componentDidUpdate() {
    const ease = Easing.out(Easing.quad);
    const { menuShouldShow, width } = this.props;
    const { rightPos, leftPos } = this.state;
    const targetMenuPositions = menuShouldShow
      ? this.getShownMenuPositions()
      : this.getHiddenMenuPositions();

    Animated.timing(rightPos, {
      toValue: targetMenuPositions.rightPos,
      duration: 250
    }).start();

    Animated.timing(leftPos, {
      toValue: targetMenuPositions.leftPos,
      duration: 250
    }).start();
  }

  getHiddenMenuPositions() {
    const { width: rightPos } = Dimensions.get('window');
    const leftPos = -1 * rightPos;
    return {
      rightPos: rightPos,
      leftPos: leftPos
    };
  }

  getShownMenuPositions() {
    return {
      rightPos: 50,
      leftPos: 0
    };
  }

  render() {
    const { height } = this.props;
    const { rightPos, leftPos } = this.state;

    return (
      <Animated.View
        style={{
          backgroundColor: 'powderblue',
          position: 'absolute',
          top: 0,
          height,
          right: rightPos,
          left: leftPos
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
