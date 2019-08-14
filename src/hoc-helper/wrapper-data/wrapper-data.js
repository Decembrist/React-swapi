import React, {Component} from 'react';
import Loader from "../../components/loader";
import ErrorIndicator from "../../components/error";

const WrapperData = (wrappedComponent, getData) => {
    return class extends Component {

        state = {
            data:null
        };

        componentDidMount() {
            getData()
                .then(data => {
                    this.setState({data})
                })
        }

        render() {
            return <wrappedComponent {...this.props} />
        }
    }
};

export default WrapperData;