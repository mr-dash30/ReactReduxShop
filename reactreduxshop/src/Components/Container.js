import React from 'react'
import { connect } from 'react-redux'
import { buyItem } from '../Redux'


function Container( props) {
    return (
        <div>
            <h2>
                Number of items: {props.numOfItems}
            </h2>
            <button onClick={props.buyItem}>
                Buy items
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfItems : state.numOfItems
    }
}


const mapDispatchToProps = dispatch => {
    return {
        buyItem : () => dispatch(buyItem())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( Container)