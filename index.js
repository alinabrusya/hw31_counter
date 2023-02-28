class Counter extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {curr: 0}
    }

    inc = () =>
    {
        if(this.state.curr < this.props.max)
        {
            let number = this.state.curr
            ++number
            this.setState({curr: number})
        }
    }

    dec = () =>
    {
        if(this.state.curr > this.props.min)
// let state =  {...this.state}
// state.curr = this.state.curr - 1
// this.setState(state)

            this.setState({...this.state, curr: this.state.curr - 1})
    }

    render()
    {
        return(<div>
            <h1>Counter</h1>
            <div>
                <button onClick={this.dec}>-</button>
                <label> Count: {this.state.curr}</label>
                <button onClick={this.inc}>+</button>
            </div>
        </div>)
    }
}

class CounterAdv extends React.Component
{
    constructor(props) {
        super(props);
        this.state= {curr:0}
    }

    onChangeHandler = e =>
    {
        if(e.target.value)
        {
            const n = parseInt(e.target.value)
            this.setState({...this.state, curr: this.valid(this.props.min, this.props.max, n)})
        }
        else
        {
            this.setState({...this.state, curr:''})
        }
    }

    onBlurHandler = () =>
    {
        this.setState({...this.state,
            curr: this.valid(this.props.min, this.props.max, this.state.curr)})
    }

    onKeyUpInpHandler = e =>
    {
        if(e.key === 'Enter')
        {
            this.setState({...this.state,
                curr: this.valid(this.props.min, this.props.max, this.state.curr)})
        }
    }

    valid(min, max, number)
    {
        if(number < min)
            return min
        else if(number > max)
            return max
        return number
    }

    inc = () =>
    {
        if(this.state.curr < this.props.max)
            this.setState({...this.state, curr: this.state.curr + 1})
    }

    dec = () =>
    {
        if(this.state.curr > this.props.min)
            this.setState({...this.state,curr: this.state.curr - 1})
    }

    render()
    {
        return(<div>
            <h1>Counter Advanced</h1>
            <div>
                <button onClick={this.inc}>+</button>
                <input type="number" style={{fontSize:'inherit'}}
                       value={this.state.curr}
                       onChange={this.onChangeHandler}
                       onBlur={this.onBlurHandler}
                       onKeyUp={this.onKeyUpInpHandler}/>
                <button onClick={this.dec}>-</button>
            </div>
        </div>)
    }
}

ReactDOM.render(
    <div>
        <Counter min={-10} max={10}/>
        <CounterAdv min={0} max={10}/>
    </div>,   document.getElementById('root')
)