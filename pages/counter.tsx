import React from 'react';
import { Button, Heading } from '@chakra-ui/react';
const Counter = () => {
    const [counter, setCounter] = React.useState<number>(0);

    return (
        <>
            <Heading size='lg' textAlign='center' margin={30} >
                You clicked {counter} times
            </Heading>
            <Button
                border='2px'
                top='50%'
                left='50%'
                borderColor='green.500'
                onClick={() => setCounter(counter - 1)}
            >
                -
            </Button>
            <Button
                border='2px'
                top='50%'
                left='50%'
                borderColor='green.500'
                onClick={() => setCounter(counter + 1)}

            >
                +
            </Button>
        </>
    )
}
export default Counter;