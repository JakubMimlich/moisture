// Add your code here

// Namespace for your library
//% color=#78A3A6 icon="\u232C" block="Moisture"
namespace MOISTURE {

    const PortPins = [
        [DigitalPin.P2, DigitalPin.P14],
        [DigitalPin.P1, DigitalPin.P13],
        [DigitalPin.P0, DigitalPin.P8]
    ]

    const AnalogPins = [
        AnalogPin.P2,
        AnalogPin.P1,
        AnalogPin.P0
    ]

    export enum Port {
        //% block="PORT1"
        PORT1 = 0,
        //% block="PORT2"
        PORT2 = 1,
        //% block="PORT3"
        PORT3 = 2
    }

    let moisture_value = 0
    let ADC_AVG = 0
    let AVG_COUNT = 5
    let SUM = 0
    let selectedPort = Port.PORT1

    /**
   * Read moisture value.
   * @param port defines port for reading adc value
   * @returns Measured moisture value.
   */
    //% blockId="moisture_read"
    //% block="read %port moisture value"
    //% group="moisture" 
    //% weight=50
    export function Moisture_Read(port: Port): number {
        SUM = 0
        selectedPort = port
        for (let index = 0; index < AVG_COUNT; index++) {
            SUM = SUM + pins.analogReadPin(AnalogPins[selectedPort])
        }
        ADC_AVG = SUM / AVG_COUNT
        moisture_value = Math.map(ADC_AVG, 0, 1023, 0, 100)
        return (Math.round(moisture_value))
    }

}