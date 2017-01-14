import React, { Component } from 'react';

export default class Counter extends Component {
    shouldComponentUpdate(newProps) {
        return this.props.counter !== newProps.counter;
    }
    render() {
        const { increment, decrement, counter } = this.props;
        return (
            <uSizeBox 
                Slot={{
                    HorizontalAlignment:EHorizontalAlignment.HAlign_Left, 
                    VerticalAlignment:EVerticalAlignment.VAlign_Top
                }}
                WidthOverride={300} HeightOverride={100}>
                <uBorder Padding={{}} BrushColor={{R:0.5, G:0.5, A:0.5}}>
                    <div>
                        <text Text={`${counter} times.`}/>
                        <span>
                            <uButton Slot={{Size:{SizeRule:'Fill'}}} 
                            OnClicked={increment}>
                                <text Text="+"/>
                            </uButton>
                            <uButton Slot={{Size:{SizeRule:'Fill'}}} 
                            OnClicked={decrement}>
                                <text Text="-"/>            
                            </uButton>
                        </span>
                    </div>
                </uBorder>
            </uSizeBox>
        );
    }
}