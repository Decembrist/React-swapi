import React, {Component} from 'react';
import Loader from "../../components/loader";

const WrapperData = (WrappedComponent, getData) => {
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
            const {data} = this.state;
            if(!data) {
                return <Loader/>
            }

            return <WrappedComponent {...this.props} data={data} />
        }
    }
};

export default WrapperData;