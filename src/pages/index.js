import React, {Component} from 'react';
import Link from 'umi/link';
class Index extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Link to="/a">qu</Link>
                首页
            </div>
        );
    }
}

export default Index;