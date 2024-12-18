import React from 'react'
import { JUMBOTRON_IMAGE } from "../../../constants/listAssets.js"
import { LIST_JUMBOTRON_EN, LIST_JUMBOTRON_ID } from "../../../constants/ListJumbotron.js"
import EachUtils from '../../../utils/EachUtils.jsx'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../jotai/atoms.jsx'
import InputMembership from '../InputMembership/index.jsx'

const Jumbotron = () => {
    const [language,] = useAtom(languageAtom)

    return (
        <div>
            <img className='absolute top-0 left-0 right-0 object-cover h-[700px] opacity-60' src={JUMBOTRON_IMAGE} alt="netflix bg" />
            <EachUtils
                of={language == "en" ? LIST_JUMBOTRON_EN : LIST_JUMBOTRON_ID}
                render={(item, index) => (
                    <div key={index} className='relative flex flex-col justify-center items-center mt-44 gap-4 text-center px-4'>
                        <h1 className='font-black text-white text-4xl '>{item.title}</h1>
                        <p className='text-white text-xl'>{item.desc}</p>
                        <InputMembership />
                    </div>
                )}
            />
        </div>
    )
}

export default Jumbotron