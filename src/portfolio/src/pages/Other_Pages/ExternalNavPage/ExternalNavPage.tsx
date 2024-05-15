import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    page: string
}

const ExternalNavPage = (props: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    
    window.location.href = props.page;
  }, []); 

  return null;
};

export default ExternalNavPage;