
import './index.css'
import { JoginiHeader } from '../JoginiHeader'
import { Flight } from './Flight'

export const Letenky = (props) => {
    return (
        <>
            <JoginiHeader title="Letenky ukázka" />
            <Flight cityFrom = 'Praha' cityTo= 'Londýn' timeFrom= '3. srpna 2022, 13:30' timeTo= '3. srpna 2022, 15:30' />
        </>
    )
}