'use client'
import { useEffect, useState } from "react"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useDispatch, useSelector } from "react-redux"
import { addprice } from "../../features/filterSlice"

const PriceRangeSlider = () => {
    const { shopList } = useSelector((state) => state.filter)

    const [price, setprice] = useState([
        shopList.price.min,
        shopList.price.max,
    ])

    const dispatch = useDispatch()

    // price handler
    const handleOnChange = (values) => {
        const [min, max] = values
        setprice(values)
        dispatch(addprice({ min, max }))
    }

    useEffect(() => {
        setprice([
            shopList.price.min,
            shopList.price.max,
        ])
    }, [shopList])

    return (
        <div className="range-slider-one px-4 py-2">
            <Slider
                range
                min={0}
                max={100}
                value={price}
                onChange={handleOnChange}
                railStyle={{ backgroundColor: '#eee', height: 4 }}
                trackStyle={[{ backgroundColor: '#333', height: 4 }]}
                handleStyle={[
                    {
                        backgroundColor: '#fff',
                        border: '2px solid #333',
                        height: 16,
                        width: 16,
                        marginTop: -6,
                    },
                    {
                        backgroundColor: '#fff',
                        border: '2px solid #333',
                        height: 16,
                        width: 16,
                        marginTop: -6,
                    },
                ]}
            />
            
            <div className="input-outer mt-4 flex justify-between">
                <div className="amount-outer">
                    <span className="text-sm font-medium">Min: ${price[0]}</span>
                </div>
                <div className="amount-outer">
                    <span className="text-sm font-medium">Max: ${price[1]}</span>
                </div>
            </div>
        </div>
    )
}

export default PriceRangeSlider
