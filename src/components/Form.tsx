'use client'

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'


type Props = {
    ChallengeNumber: number
}

const flagData = [
    'FLAG{kkPyUDtJjoSbe0eaiFqViKNpum9VFmPF}',
    'FLAG{00VmVtVSaVqjWnVHL2EaPyXpR9eWiMBc}',
    'FLAG{C4qwvLU1QPdgPu8KvJxngKyyH0UKsGcn}',
    'FLAG{GPTZMTSIuNma7tFuDGhBqmxPaRFsBOyU}',
    'FLAG{ehW3R0dbeUHNEVWQlWayYasKNrWLJBRt}',
    'FLAG{3me9H2SbkTJl3bVeCI1mLBf2PUA4dIGR}',
    'FLAG{JRgevNpAon9Z5YXgE9K8JlaKhvNhkrfW}',
    'FLAG{DYUmZDWRNbu0Sn8laa5pCSBHSGw9Khpa}',
    'FLAG{CtAxaqolUz48IGVF18UOgrNrdAyXl4D8}',
    'FLAG{BKiDsZDcm1H3gMSzDnUXwfC9Y5ifp0BMT}',
]


const Form = ({ ChallengeNumber }: Props) => {

    const [flagValue, setFlagValue] = useState("")
    const [isFlagCorrect, setIsFlagCorrect] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const SubmitFlag = (event: any) => {
        
        console.log(flagData[ChallengeNumber-1])
        console.log(ChallengeNumber)

        if (flagValue.length < 1) {
            console.error('Flag environment variable not found');
            setErrorMessage('An error occurred. Please try again later.');
            return;
        }

        if (flagValue === flagData[ChallengeNumber-1]) {
            setIsFlagCorrect(true);
            setErrorMessage('')
        } else {
            setIsFlagCorrect(false);
            setErrorMessage('Incorrect flag. Please try again.');
        }
    }

    return (
        <div className="flex w-full flex-col items-center space-x-2">
            <div className='flex w-full items-center space-x-2 mb-2'>
                <Input type="text" placeholder="FLAG{SU8M1T_F7AG_H3RE}" value={flagValue} onChange={(e) => { setFlagValue(e.target.value) }} />
                <Button type="submit" onClick={SubmitFlag}>
                    <ArrowRight />
                </Button>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {isFlagCorrect && <p className="text-green-600">Correct!</p>}

        </div>
    )
}

export default Form