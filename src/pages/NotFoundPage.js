import { Helmet } from 'react-helmet';
import notFounImage from '../images/004-min.jpg';
import { Wrapper, Image } from './NotFoundPage.styled';

export default function NotFoundPage() {
    return (
        <Wrapper>    
            <Image src={notFounImage} alt="notFounImage" />
        </Wrapper>
    )
}