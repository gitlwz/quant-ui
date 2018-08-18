import React, { Component } from 'react';


const ThemeContext = React.createContext();


class Header extends React.Component {
    render() {
        return (
            <Title>Hello React Context API</Title>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(context,a,b,c,d,e) => {
                    console.log("*********8",context,a,b,c,d,e)
                    return (
                        <h1 style={{ background: context.background, color: context.color }}>
                            {context.cont}
                            {this.props.children}
                        </h1>
                    )}
                }
            </ThemeContext.Consumer>
        );
    }
}

class Detail extends Component {

    state = {
        uploading: false,
        cont:0
    }
    onClick = () => {
        let cont = this.state.cont;
        console.log("*********",cont)
        this.setState({
            cont:cont+1
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={{ background: 'green', color: 'white',cont:this.state.cont }}>
                <button onClick={this.onClick}>点我</button>
                <Header />
            </ThemeContext.Provider>
        );
    }
}
export default Detail;
