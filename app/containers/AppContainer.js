import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import ReactNative from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const {
    View,
    Text,
    Button
} = ReactNative

class AppContainer extends Component {
    addStuff() {
        this.props.addStuff()
    }

    componentDidMount() {
    	  // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        window.setTimeout( ()=> SplashScreen.hide(), 1000 )
    }

    render() {
        return (
            <View>
                <Text style={{ marginTop: 20  }}>
                    I am AppContainer! Stuff Count: { this.props.stuffCount }
                </Text>

                <Button
                onPress={() => {this.addStuff()}}
                title="Add Stuff"
                color="#841584"
                />

            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        stuffCount: state.stuffCount
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
