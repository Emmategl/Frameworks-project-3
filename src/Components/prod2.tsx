import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { getById } from "./nav";
import { RouteProps } from 'react-router';
import {RouteComponentProps} from 'react-router';
interface IMyProps {}

interface MyState {
    product: string,
    loading: boolean
}

class Prod2 extends React.Component<{},any> {
  /*   constructor(props:any) { */
  /*      super(props); */
  /*      this.state = { */
  /*          isLoading: true, */
  /*          product: {} */
  /*      } */
  /*   } */
  /*   componentDidMount() { */
  /*      this.fetchProduct(); */
  /*  } */
  /*   componentDidUpdate(prevProps: any) { */
  /*      if(prevProps.match.params.productID !== this.props.match.params.productID) { */
  /*          this.fetchProduct(); */
  /*      } */
  /*   } */

  /*   fetchProduct() { */
  /*        this.setState({isLoading: true}); */
  /*        getById(productId).then(product => this.setState({isLoading: false, product})); */
  /*   } */
  /*   render() { */
  /*       if(this.state.isLoading) { */
  /*        return <Loader/> */
  /*       } */
  /*       return <div>{this.state.product.name}</div>  */
  /*   } */

}

export default Prod2