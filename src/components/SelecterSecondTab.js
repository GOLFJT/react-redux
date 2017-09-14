import React from 'react'
import PropTypes from 'prop-types'

const SelecterSecondTab= ({ value,onChange,valueProvince,onChangeProvince }) => {
    return ( 
        <div className="hz-flex">
            TAB 2
            <select value={value}  onChange={(event) => onChange(event) } className="forminput">
                <option value="">select...</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <select value={valueProvince}  onChange={(event) => onChangeProvince(event) } className="forminput">
                <option value="">select...</option>
                <option value="1">กรุงเทพ</option>
                <option value="2">เชียงใหม่</option>
                <option value="3">ลำปาง</option>
                <option value="4">พังงา</option>
            </select>
            <input type="text" name="input-text" className="forminput"/>
        </div>
    )
}

SelecterSecondTab.propTypes = {
    onChange: PropTypes.func.isRequired,
    onChangeProvince: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    valueProvince: PropTypes.string.isRequired
}


export default SelecterSecondTab