import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';


class Test extends Component {


  render() {
    return (  	
    	<View style={{flex: 1, backgroundColor: '#fff', flexDirection: 'row',alignItems:'center', justifyContent:'center'}}>
	    	<TouchableOpacity onPress={() => this.props.increseCounter()}>
	    	<Text> Increament</Text>
	    	</TouchableOpacity>
	    	<Text>{this.props.counter}</Text>

	    	<TouchableOpacity onPress={() => this.props.decreaseCounter()}>
	    	<Text> Decreament</Text>
	    	</TouchableOpacity>

	    </View>
    );
  }
}
function mapStateToProps(state){
	return {
		counter: state.counter
	}
}

function mapDispatchToProps(dispatch){
	return{
		increseCounter : () => dispatch({type: 'INCREAMENT_COUNTER'}),
		decreaseCounter: () => dispatch({type: 'DECREAMENT_COUNTER'}),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Test)