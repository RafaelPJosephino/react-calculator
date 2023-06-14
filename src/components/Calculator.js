import React, { useState } from 'react'
import './index.css'
import Display from './Display'
import Button from './Button'


const Calculator = function Calculator() {

    const [valueDisplay, setvalueDisplay] = useState('0')
    const [cleanDisplay, setCleanDisplay] = useState(false)
    const [operation, setOperation] = useState(null)
    const [value, setvalue] = useState([0, 0])
    const [indice, setIndice] = useState(0)

    function _add(label) {

        if (label === '.' && valueDisplay.includes('.')) return

        const check_cleanDisplay = valueDisplay === '0' || cleanDisplay
        const valueCurrent = check_cleanDisplay ? '' : valueDisplay

        const novo_valueDisplay = valueCurrent + label
        const new_value = [...value]

        if (label !== '.') new_value[indice] = parseFloat(novo_valueDisplay)

        setvalueDisplay(novo_valueDisplay)
        setCleanDisplay(false)
        setvalue(new_value)
    }

    function _operation(operation_clicked) {

        if (value[0] === 0) return

        if (indice === 0) {

            setIndice(1)
            setOperation(operation_clicked)
            setCleanDisplay(true)

        } else {

            const equal = operation_clicked === '='
            const new_value = [...value]

            try {
                switch (operation) {
                    case '+':
                        new_value[0] = parseFloat(new_value[0]) + parseFloat(new_value[1]);
                        break;
                    case '-':
                        new_value[0] = parseFloat(new_value[0]) - parseFloat(new_value[1]);
                        break;
                    case '*':
                        new_value[0] = parseFloat(new_value[0]) * parseFloat(new_value[1]);
                        break;
                    case '/':
                        new_value[0] = parseFloat(new_value[0]) / parseFloat(new_value[1]);
                        break;
                    default:
                        throw new Error('operation invalid');
                }
            } catch (error) {
                new_value[0] = value[0];
            }

            new_value[1] = 0

            setvalueDisplay(new_value[0])
            setCleanDisplay(!equal)
            setOperation(equal ? null : operation_clicked)
            setvalue(new_value)
            setIndice(equal ? 0 : 1)

        }
    }

    function _Clean() {
        setvalueDisplay('0')
        setCleanDisplay(false)
        setOperation(null)
        setvalue([0, 0])
        setIndice(0)
    }

    return (
        <div className='calculator'>
            <Display value={valueDisplay}></Display>

            <Button label='AC' role={_Clean} span='span-3'></Button>
            <Button label='/' role={_operation} operation></Button>
            <Button label='7' role={_add} ></Button>
            <Button label='8' role={_add} ></Button>
            <Button label='9' role={_add} ></Button>
            <Button label='*' role={_operation} operation></Button>
            <Button label='4' role={_add} ></Button>
            <Button label='5' role={_add} ></Button>
            <Button label='6' role={_add} ></Button>
            <Button label='-' role={_operation} operation></Button>
            <Button label='1' role={_add} ></Button>
            <Button label='2' role={_add} ></Button>
            <Button label='3' role={_add} ></Button>
            <Button label='+' role={_operation} operation></Button>
            <Button label='0' role={_add} span='span-2'></Button>
            <Button label='.' role={_add} ></Button>
            <Button label='=' role={_operation} operation></Button>
        </div>
    )
}
export default Calculator